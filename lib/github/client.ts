import type {
  GitHubApiErrorDetails,
  GitHubLinkInfo,
  GitHubRateLimit,
} from "./types"

export interface GitHubApiRequestOptions extends RequestInit {
  query?: Record<string, string | number | boolean>
}

export interface GitHubApiResponse<T> {
  data: T
  status: number
  rateLimit: GitHubRateLimit
  links: GitHubLinkInfo
  headers: Headers
}

export class GitHubApiError extends Error {
  status: number
  details?: GitHubApiErrorDetails

  constructor(status: number, message: string, details?: GitHubApiErrorDetails) {
    super(message)
    this.name = "GitHubApiError"
    this.status = status
    this.details = details
  }
}

const GITHUB_BASE = "https://api.github.com"

function getToken(): string | null {
  const configured = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
  return configured ? configured.trim() : null
}

function parseLinkHeader(value: string | null): GitHubLinkInfo {
  if (!value) return {}
  const links: GitHubLinkInfo = {}
  for (const part of value.split(",")) {
    const [urlPart, relPart] = part.split(";").map((entry) => entry.trim())
    if (!urlPart || !relPart) continue
    const urlMatch = urlPart.match(/<([^>]+)>/)
    const relMatch = relPart.match(/rel="([^"]+)"/)
    if (!urlMatch || !relMatch) continue
    const rel = relMatch[1]
    if (rel === "next") links.next = urlMatch[1]
    if (rel === "prev") links.prev = urlMatch[1]
  }
  return links
}

function parseRateLimit(headers: Headers): GitHubRateLimit {
  const limit = headers.get("x-ratelimit-limit")
  const remaining = headers.get("x-ratelimit-remaining")
  const reset = headers.get("x-ratelimit-reset")
  return {
    limit: limit !== null ? Number(limit) : null,
    remaining: remaining !== null ? Number(remaining) : null,
    resetAt: reset ? new Date(Number(reset) * 1000).toISOString() : null,
  }
}

function buildUrl(path: string, query?: Record<string, string | number | boolean>): string {
  const url = new URL(path.startsWith("http") ? path : `${GITHUB_BASE}${path}`)
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, String(value))
    }
  }
  return url.toString()
}

export async function githubRequest<T>(
  path: string,
  options: GitHubApiRequestOptions = {},
): Promise<GitHubApiResponse<T>> {
  const { query, headers: customHeaders, ...init } = options
  const token = getToken()
  const headers = new Headers(customHeaders)
  headers.set("Accept", "application/vnd.github+json")
  headers.set("X-GitHub-Api-Version", "2022-11-28")
  headers.set("User-Agent", "platphorm-catalog")
  if (token) headers.set("Authorization", `Bearer ${token}`)

  const response = await fetch(buildUrl(path, query), {
    ...init,
    headers,
  })

  const text = await response.text()
  const rateLimit = parseRateLimit(response.headers)
  const links = parseLinkHeader(response.headers.get("link"))

  if (!response.ok) {
    let details: GitHubApiErrorDetails | undefined
    try {
      details = JSON.parse(text) as GitHubApiErrorDetails
    } catch {
      details = { message: text }
    }
    throw new GitHubApiError(response.status, `GitHub request failed: ${response.status}`, details)
  }

  const data = text ? (JSON.parse(text) as T) : (null as T)
  return {
    data,
    status: response.status,
    rateLimit,
    links,
    headers: response.headers,
  }
}

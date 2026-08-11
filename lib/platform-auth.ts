import { createPublicKey, createVerify, timingSafeEqual, type KeyObject } from "node:crypto"

export const PLATFORM_API_KEY_HEADER = "x-platphorm-api-key"
export const PLATFORM_BEARER_PREFIX = "Bearer "

export interface PlatformAuthResult {
  authorized: boolean
  status: "ok" | "missing_key" | "missing_auth" | "invalid_auth"
  code: "ok" | "PROTECTED_REQUIRED" | "AUTH_MISSING" | "AUTH_INVALID"
  principal?: {
    strategy: "api_key" | "github_oidc" | "vercel_oidc"
    repository?: string
    actor?: string
    workflow?: string
    runId?: string
  }
}

interface OidcPolicy {
  allowedIssuers: string[]
  allowedAudiences: string[]
  trustedRepositories: string[]
  trustedWorkflows: string[]
  jwksUrls: string[]
}

interface JwtHeader {
  alg?: string
  kid?: string
  [key: string]: unknown
}

interface JwtPayload {
  iss?: string
  aud?: string | string[]
  exp?: number
  nbf?: number
  repository?: string
  repository_owner?: string
  repository_name?: string
  job_workflow_ref?: string
  workflow?: string
  actor?: string
  run_id?: string
  sub?: string
  [key: string]: unknown
}

const DEFAULT_GITHUB_ACTIONS_ISSUER = "https://token.actions.githubusercontent.com"
const DEFAULT_VERCEL_OIDC_ISSUER = "https://oidc.vercel.com/platphormnews"
const DEFAULT_OIDC_AUDIENCE = "https://catalog.platphormnews.com"
const DEFAULT_GITHUB_JWKS = "https://token.actions.githubusercontent.com/.well-known/jwks"
const DEFAULT_VERCEL_JWKS = "https://oidc.vercel.com/.well-known/jwks"
const OIDC_KEY_ALG = "RS256"

const jwksCache = new Map<string, { expiresAt: number; keys: Record<string, KeyObject> }>()

function toList(value?: string): string[] {
  return (value ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0)
}

function normalizeAudience(value: string | string[]): string[] {
  if (Array.isArray(value)) return value
  if (typeof value === "string") return value.split(" ").filter(Boolean)
  return []
}

function base64UrlToString(input: string): string {
  const padded = input.padEnd(input.length + ((4 - (input.length % 4)) % 4), "=").replace(/-/g, "+").replace(/_/g, "/")
  return Buffer.from(padded, "base64").toString("utf8")
}

function parseJwtSegment<T>(segment: string): T {
  return JSON.parse(base64UrlToString(segment)) as T
}

function splitJwt(token: string): { header: JwtHeader; payload: JwtPayload; signature: string; raw: string } {
  const [headerSegment, payloadSegment, signatureSegment] = token.split(".")
  if (!headerSegment || !payloadSegment || !signatureSegment) throw new Error("invalid_jwt_format")
  return {
    header: parseJwtSegment<JwtHeader>(headerSegment),
    payload: parseJwtSegment<JwtPayload>(payloadSegment),
    signature: signatureSegment,
    raw: `${headerSegment}.${payloadSegment}`,
  }
}

function isTokenPotentialJwt(value: string): boolean {
  return value.split(".").length === 3
}

function compareFixedStrings(expected: string, candidate: string): boolean {
  if (expected.length !== candidate.length) return false
  return timingSafeEqual(Buffer.from(expected), Buffer.from(candidate))
}

function extractAuthToken(request: Request): string | null {
  const header = request.headers.get(PLATFORM_API_KEY_HEADER)?.trim()
  if (header) return header
  const auth = request.headers.get("authorization")?.trim()
  if (!auth) return null
  if (!auth.toLowerCase().startsWith(PLATFORM_BEARER_PREFIX.toLowerCase())) return null
  return auth.slice(PLATFORM_BEARER_PREFIX.length).trim()
}

function parsePolicy(): OidcPolicy {
  const allowConfigured = toList(process.env.CATALOG_OIDC_ALLOWED_ISSUERS)
  const allowedIssuers = allowConfigured.length > 0 ? allowConfigured : [DEFAULT_GITHUB_ACTIONS_ISSUER, DEFAULT_VERCEL_OIDC_ISSUER]
  const audiences = toList(process.env.CATALOG_OIDC_AUDIENCE)
  const trustedRepositories = toList(process.env.CATALOG_OIDC_ALLOWED_REPOSITORIES)
  const trustedWorkflows = toList(process.env.CATALOG_OIDC_ALLOWED_WORKFLOWS)
  const jwksUrls = toList(process.env.CATALOG_OIDC_JWKS_URLS)
  const inferredJwks = jwksUrls.length
    ? jwksUrls
    : allowedIssuers.map((issuer) => {
      if (issuer === DEFAULT_GITHUB_ACTIONS_ISSUER) return DEFAULT_GITHUB_JWKS
      if (issuer === DEFAULT_VERCEL_OIDC_ISSUER) return DEFAULT_VERCEL_JWKS
      return `${issuer}/.well-known/jwks`
    })

  return {
    allowedIssuers,
    allowedAudiences: audiences.length > 0 ? audiences : [DEFAULT_OIDC_AUDIENCE],
    trustedRepositories,
    trustedWorkflows,
    jwksUrls: [...new Set(inferredJwks)],
  }
}

function compareApiKeys(expected: string, candidate: string): boolean {
  if (candidate.includes(".") && candidate.split(".").length === 3) return false
  return compareFixedStrings(expected, candidate)
}

function tokenAudienceAllowed(payload: JwtPayload, allowed: string[]): boolean {
  const aud = normalizeAudience(payload.aud ?? [])
  return aud.length === 0 || aud.some((candidate) => allowed.includes(candidate))
}

function tokenTimeNowSec(): number {
  return Math.floor(Date.now() / 1000)
}

function parseRepository(payload: JwtPayload): string | null {
  if (typeof payload.repository === "string" && payload.repository.includes("/")) return payload.repository
  if (typeof payload.repository_owner === "string" && typeof payload.repository_name === "string") {
    return `${payload.repository_owner}/${payload.repository_name}`
  }
  const sub = typeof payload.sub === "string" ? payload.sub : ""
  if (sub.startsWith("repo:")) {
    const parts = sub.split(":")
    if (parts.length >= 3) return `${parts[1]}/${parts[2]}`
  }
  return null
}

function repositoryAllowed(candidate: string, trusted: string[]): boolean {
  if (trusted.length === 0) return false
  const normalized = candidate.toLowerCase()
  return trusted.some((entry) => {
    const allowed = entry.trim().toLowerCase()
    return allowed && normalized === allowed
  })
}

function workflowAllowed(payload: JwtPayload, trusted: string[]): boolean {
  if (trusted.length === 0) return true
  const candidate = payload.job_workflow_ref ?? payload.workflow
  if (typeof candidate !== "string") return false
  const lowered = candidate.toLowerCase()
  return trusted.some((entry) => lowered.includes(entry.toLowerCase()))
}

function tokenExpired(payload: JwtPayload): boolean {
  const now = tokenTimeNowSec()
  if (typeof payload.exp === "number" && payload.exp > 0 && payload.exp <= now) return true
  if (typeof payload.nbf === "number" && payload.nbf > now) return true
  return false
}

async function loadJwks(jwksUrl: string): Promise<Record<string, KeyObject>> {
  const cached = jwksCache.get(jwksUrl)
  if (cached && cached.expiresAt > Date.now()) return cached.keys

  const response = await fetch(jwksUrl, { method: "GET" })
  if (!response.ok) throw new Error(`Failed to load JWKS from ${jwksUrl}: ${response.status}`)

  const body = (await response.json().catch(() => null)) as { keys?: Array<Record<string, unknown>> } | null
  const keys: Record<string, KeyObject> = {}
  const entries = body && Array.isArray(body.keys) ? body.keys : []

  for (const entry of entries) {
    const kid = typeof entry.kid === "string" ? entry.kid : undefined
    if (!kid) continue
    try {
      keys[kid] = createPublicKey({ key: entry, format: "jwk" })
    } catch {
      // ignore unusable keys
    }
  }

  const expiry = Date.now() + 10 * 60 * 1000
  jwksCache.set(jwksUrl, { expiresAt: expiry, keys })
  return keys
}

async function verifyJwtToken(token: string): Promise<{ payload: JwtPayload; principal: PlatformAuthResult["principal"] }> {
  const { header, payload, signature, raw } = splitJwt(token)
  if ((header.alg ?? OIDC_KEY_ALG) !== OIDC_KEY_ALG) {
    throw new Error("unsupported_jwt_algorithm")
  }

  const policy = parsePolicy()
  if (!payload.iss || !policy.allowedIssuers.includes(payload.iss)) throw new Error("untrusted_jwt_issuer")
  if (!tokenAudienceAllowed(payload, policy.allowedAudiences)) throw new Error("untrusted_jwt_audience")
  if (tokenExpired(payload)) throw new Error("jwt_not_current")
  if (!header.kid) throw new Error("jwt_missing_kid")

  let publicKey: KeyObject | null = null
  for (const jwksUrl of policy.jwksUrls) {
    const keys = await loadJwks(jwksUrl)
    if (keys[header.kid]) {
      publicKey = keys[header.kid]
      break
    }
  }
  if (!publicKey) throw new Error("jwt_key_not_found")

  const verifier = createVerify("RSA-SHA256")
  verifier.update(raw)
  verifier.end()
  const signatureBytes = Buffer.from(signature.replace(/-/g, "+").replace(/_/g, "/"), "base64")
  if (!verifier.verify(publicKey, signatureBytes, "base64")) throw new Error("jwt_signature_invalid")

  const repository = parseRepository(payload)
  if (!repository || !repositoryAllowed(repository, policy.trustedRepositories)) {
    throw new Error("jwt_repository_not_allowed")
  }
  if (!workflowAllowed(payload, policy.trustedWorkflows)) {
    throw new Error("jwt_workflow_not_allowed")
  }

  return {
    payload,
    principal: {
      strategy: payload.iss === DEFAULT_GITHUB_ACTIONS_ISSUER ? "github_oidc" : "vercel_oidc",
      repository,
      actor: typeof payload.actor === "string" ? payload.actor : undefined,
      workflow: payload.job_workflow_ref ?? payload.workflow,
      runId: payload.run_id ? String(payload.run_id) : undefined,
    },
  }
}

export async function validatePlatphormAuth(request: Request): Promise<PlatformAuthResult> {
  const configuredApiKey = process.env.PLATPHORM_API_KEY ?? ""
  const policy = parsePolicy()
  const hasOidcPolicy = policy.trustedRepositories.length > 0 || process.env.CATALOG_OIDC_JWKS_URLS?.trim().length
  const hasAuthMechanism = configuredApiKey.length > 0 || hasOidcPolicy

  if (!hasAuthMechanism) {
    return {
      authorized: false,
      status: "missing_key",
      code: "PROTECTED_REQUIRED",
    }
  }

  const provided = extractAuthToken(request)
  if (!provided) {
    return {
      authorized: false,
      status: "missing_auth",
      code: "AUTH_MISSING",
    }
  }

  if (configuredApiKey && !isTokenPotentialJwt(provided)) {
    if (compareApiKeys(configuredApiKey, provided)) {
      return {
        authorized: true,
        status: "ok",
        code: "ok",
        principal: { strategy: "api_key" },
      }
    }

    return {
      authorized: false,
      status: "invalid_auth",
      code: "AUTH_INVALID",
    }
  }

  if (!hasOidcPolicy) {
    return {
      authorized: false,
      status: "invalid_auth",
      code: "AUTH_INVALID",
    }
  }

  try {
    const result = await verifyJwtToken(provided)
    return {
      authorized: true,
      status: "ok",
      code: "ok",
      principal: result.principal,
    }
  } catch {
    return {
      authorized: false,
      status: "invalid_auth",
      code: "AUTH_INVALID",
    }
  }
}

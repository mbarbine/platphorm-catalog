import { readCatalogOwners } from "@/lib/catalog-evidence"
import { githubRequest } from "./client"
export { githubRequest, GitHubApiError, type GitHubApiRequestOptions, type GitHubApiResponse } from "./client"
export type { GitHubApiErrorDetails, GitHubLinkInfo, GitHubRateLimit } from "./types"

export async function githubContentText(owner: string, repo: string, path: string, branch?: string) {
  const query = branch ? { ref: branch } : undefined
  return githubRequest<{
    encoding: "base64" | "none"
    content: string
    sha: string
  }>(`/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${path.replace(/^\/+/, "")}`, {
    query,
  })
}

export function getConfiguredCatalogOwners(): string[] {
  const values = readCatalogOwners()
  return values.map((value) => value.toLowerCase()).filter((value) => value.length > 0)
}

import type { GitHubRateLimit, GitHubTree } from "./types"
import { githubRequest } from "./client"

export async function getRepositoryTreeWithRate(
  owner: string,
  repo: string,
  branch: string,
): Promise<{ tree: GitHubTree | null; rateLimit: GitHubRateLimit }> {
  try {
    const response = await githubRequest<GitHubTree>(
      `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/git/trees/${encodeURIComponent(branch)}`,
      {
        query: {
          recursive: 1,
        },
      },
    )
    return { tree: response.data, rateLimit: response.rateLimit }
  } catch {
    return { tree: null, rateLimit: { limit: null, remaining: null, resetAt: null } }
  }
}

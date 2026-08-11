import type { GitHubRateLimit, GitHubWorkflowResponse } from "./types"
import { githubRequest } from "./client"

export async function getRepositoryWorkflowsWithRate(
  owner: string,
  repo: string,
): Promise<{ workflows: GitHubWorkflowResponse["workflows"]; rateLimit: GitHubRateLimit }> {
  try {
    const response = await githubRequest<GitHubWorkflowResponse>(
      `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/actions/workflows`,
      {
        query: { per_page: 100 },
      },
    )
    return { workflows: response.data.workflows, rateLimit: response.rateLimit }
  } catch {
    return { workflows: [], rateLimit: { limit: null, remaining: null, resetAt: null } }
  }
}

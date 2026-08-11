import type { GitHubCommit, GitHubRepository, GitHubRateLimit, GitHubTree, GitHubWorkflowResponse, GitHubSBOM } from "./types"
import { githubRequest, getConfiguredCatalogOwners } from "./rest"

export interface RepositoryListOptions {
  maxRepos?: number
  includeArchived?: boolean
}

export interface RepositoryScanContext {
  repository: GitHubRepository
  languages: Record<string, number>
  tree: GitHubTree | null
  sbom: GitHubSBOM | null
  workflows: GitHubWorkflowResponse["workflows"]
  defaultBranchSha: string | null
  rateLimit: {
    owner: GitHubRateLimit
    repo: GitHubRateLimit
    details: GitHubRateLimit[]
  }
  errors: string[]
}

function repositoryOwners(): string[] {
  const owners = getConfiguredCatalogOwners()
  return owners.length ? owners : ["mbarbine"]
}

async function listRepositoriesForOwner(
  owner: string,
  perPage: number,
  maxPages: number,
  includeArchived: boolean,
): Promise<GitHubRepository[]> {
  const repos: GitHubRepository[] = []
  let page = 1

  while (page <= maxPages) {
    let pageResponse
    try {
      pageResponse = await githubRequest<GitHubRepository[]>(`/users/${encodeURIComponent(owner)}/repos`, {
        query: {
          type: "all",
          sort: "updated",
          per_page: perPage,
          page,
        },
      })
    } catch {
      pageResponse = await githubRequest<GitHubRepository[]>(`/orgs/${encodeURIComponent(owner)}/repos`, {
        query: {
          type: "all",
          sort: "updated",
          per_page: perPage,
          page,
        },
      })
    }

    const filtered = includeArchived ? pageResponse.data : pageResponse.data.filter((repo) => !repo.archived)
    repos.push(...filtered)

    if (pageResponse.data.length < perPage) {
      break
    }
    if (!pageResponse.links.next) {
      break
    }
    page += 1
  }

  return repos
}

export async function getRepositoryCollectionOwners(): Promise<string[]> {
  return repositoryOwners()
}

async function getRepositoryLanguagesWithRate(owner: string, repo: string): Promise<{
  languages: Record<string, number>
  rateLimit: GitHubRateLimit
  topics: string[]
}> {
  const [languageResult, topicsResult] = await Promise.allSettled([
    githubRequest<Record<string, number>>(`/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/languages`),
    githubRequest<{ names: string[] }>(`/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/topics`, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    }),
  ])

  const languageData = languageResult.status === "fulfilled" ? languageResult.value : null
  const topicData = topicsResult.status === "fulfilled" ? topicsResult.value : null

  return {
    languages: languageData?.data ?? {},
    rateLimit: languageData?.rateLimit ?? { limit: null, remaining: null, resetAt: null },
    topics: topicData?.data.names ?? [],
  }
}

async function getRepositoryTreeWithRate(owner: string, repo: string, branch: string): Promise<{ tree: GitHubTree | null; rateLimit: GitHubRateLimit }> {
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

async function getRepositoryWorkflowsWithRate(owner: string, repo: string): Promise<{
  workflows: GitHubWorkflowResponse["workflows"]
  rateLimit: GitHubRateLimit
}> {
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

async function getRepositoryHeadShaWithRate(owner: string, repo: string, branch: string): Promise<{ sha: string | null; rateLimit: GitHubRateLimit }> {
  try {
    const response = await githubRequest<GitHubCommit>(
      `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/commits/${encodeURIComponent(branch)}`,
      { method: "GET" },
    )
    return { sha: response.data.sha, rateLimit: response.rateLimit }
  } catch {
    return { sha: null, rateLimit: { limit: null, remaining: null, resetAt: null } }
  }
}

async function getRepositorySbomWithRate(owner: string, repo: string): Promise<{ sbom: GitHubSBOM | null; rateLimit: GitHubRateLimit }> {
  try {
    const response = await githubRequest<GitHubSBOM>(
      `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/dependency-graph/sbom`,
      { query: { format: "json" } },
    )
    return { sbom: response.data, rateLimit: response.rateLimit }
  } catch {
    return { sbom: null, rateLimit: { limit: null, remaining: null, resetAt: null } }
  }
}

export async function collectOwnerRepositoryContexts(options: RepositoryListOptions = {}): Promise<{
  repositories: RepositoryScanContext[]
  errors: string[]
  owners: string[]
}> {
  const perPage = 100
  const maxRepos = options.maxRepos ?? 25
  const includeArchived = Boolean(options.includeArchived)
  const owners = repositoryOwners()
  const repositories: RepositoryScanContext[] = []
  const errors: string[] = []

  for (const owner of owners) {
    let listed: GitHubRepository[] = []
    try {
      const maxPages = Math.max(1, Math.ceil(maxRepos / perPage))
      listed = await listRepositoriesForOwner(owner, perPage, maxPages, includeArchived)
      listed = listed.slice(0, maxRepos)
    } catch (error) {
      errors.push(`owner ${owner}: ${error instanceof Error ? error.message : "repository list failed"}`)
      continue
    }

    for (let i = 0; i < listed.length; i += 3) {
      const chunk = listed.slice(i, i + 3)
      const chunkContext = await Promise.all(
        chunk.map(async (repo) => {
          const errorsForRepo: string[] = []
          const branch = repo.default_branch || "main"

          const [languageResult, sbomResult, workflowResult, treeResult, headResult] = await Promise.all([
            getRepositoryLanguagesWithRate(owner, repo.name),
            getRepositorySbomWithRate(owner, repo.name),
            getRepositoryWorkflowsWithRate(owner, repo.name),
            getRepositoryTreeWithRate(owner, repo.name, branch),
            getRepositoryHeadShaWithRate(owner, repo.name, branch),
          ])

          if (languageResult.rateLimit.remaining === 0) {
            errorsForRepo.push("languages: rate limit reached")
          }
          if (!languageResult.topics.length && sbomResult.sbom === null) {
            errorsForRepo.push("no topics and no sbom")
          }

          const mergedRepo: GitHubRepository = {
            ...repo,
            topics: languageResult.topics,
          }

          return {
            repository: mergedRepo,
            languages: languageResult.languages,
            tree: treeResult.tree,
            sbom: sbomResult.sbom,
            workflows: workflowResult.workflows,
            defaultBranchSha: headResult.sha,
            rateLimit: {
              owner: languageResult.rateLimit,
              repo: headResult.rateLimit,
              details: [languageResult.rateLimit, headResult.rateLimit, sbomResult.rateLimit],
            },
            errors: errorsForRepo,
          } as RepositoryScanContext
        }),
      )
      repositories.push(...chunkContext)
    }
  }

  return {
    repositories,
    errors,
    owners,
  }
}

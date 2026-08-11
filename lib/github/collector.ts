import type { EvidenceSource, GithubCensus, GithubRepositoryObservation } from "@/lib/catalog-evidence"
import type { GitHubRepository, GitHubRateLimit, GitHubSbomPackage } from "./types"
import { collectOwnerRepositoryContexts } from "./repositories"

interface CollectOptions {
  maxReposPerOwner?: number
}

interface PackageBucket {
  repositories: Set<string>
  productionRepositories: Set<string>
  versions: Map<string, Set<string>>
}

function normalizePackageScope(scope?: string | null): "production" | "development" | "unknown" {
  const normalized = (scope ?? "").toLowerCase()
  if (["runtime", "production", "prod", "runtime-optional"].includes(normalized)) return "production"
  if (["development", "dev", "test", "tool", "build", "optional"].includes(normalized)) return "development"
  return "unknown"
}

function safeToSet(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value
    .map((entry) => (typeof entry === "string" ? entry.trim().toLowerCase() : ""))
    .filter((value) => value.length > 0)
}

function unwrapRepositorySbom(sbom: unknown): Record<string, unknown> | null {
  if (!sbom || typeof sbom !== "object") return null
  if (isSbomPayloadLike(sbom)) return sbom
  const nested = (sbom as { sbom?: unknown }).sbom
  return isSbomPayloadLike(nested) ? (nested as Record<string, unknown>) : null
}

function isSbomPayloadLike(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== "object") return false
  const candidate = value as Record<string, unknown>
  return (
    typeof candidate.name === "string" ||
    Array.isArray(candidate.packages) ||
    typeof candidate.metadata === "object" ||
    Array.isArray(candidate.relationships)
  )
}

function normalizeSbomPackages(sbom: unknown): GitHubSbomPackage[] {
  const payload = unwrapRepositorySbom(sbom)
  if (!payload) return []
  const rawPackages = payload.packages
  if (!Array.isArray(rawPackages)) return []

  const out: GitHubSbomPackage[] = []
  for (const pkg of rawPackages) {
    if (!pkg || typeof pkg !== "object") continue
    const record = pkg as Record<string, unknown>
    const name = typeof record.name === "string" ? record.name.trim() : ""
    if (!name) continue
    const version = typeof record.version === "string" ? record.version : null
    const scope = typeof record.scope === "string" ? normalizePackageScope(record.scope) : "unknown"
    const ecosystem = inferDependencyEcosystem({
      id: typeof record.id === "string" ? record.id : "",
      name,
      version,
      scope,
    } as GitHubSbomPackage)

    out.push({
      id: typeof record.id === "string" ? record.id : `pkg:npm/${name}@${version ?? "unknown"}`,
      name,
      version,
      scope,
      ecosystem: ecosystem ?? null,
      dependencies: safeToSet(record.dependsOn),
    } as GitHubSbomPackage)
  }

  return out
}

export async function collectGithubCensus(options: CollectOptions = {}): Promise<GithubCensus> {
  const maxReposPerOwner = options.maxReposPerOwner ?? 15
  const results = await collectOwnerRepositoryContexts({
    maxRepos: maxReposPerOwner,
    includeArchived: false,
  })

  const packageBuckets = new Map<string, PackageBucket>()
  const languageBuckets = new Map<string, { repositories: Set<string>; bytes: number }>()
  const technologyBuckets = new Map<string, Set<string>>()
  const repositories: GithubRepositoryObservation[] = []
  let activeCount = 0
  let archivedCount = 0
  let forkCount = 0
  const rateLimits: GitHubRateLimit[] = []

  for (const context of results.repositories) {
    const repository = context.repository
    const owner = repository.owner.login
    const repoId = `${owner}/${repository.name}`

    if (repository.archived) archivedCount += 1
    else activeCount += 1
    if (repository.fork) forkCount += 1
    rateLimits.push(context.rateLimit.owner, context.rateLimit.repo, ...context.rateLimit.details)

    for (const [language, bytes] of Object.entries(context.languages ?? {})) {
      const bucket = languageBuckets.get(language) ?? { repositories: new Set(), bytes: 0 }
      bucket.repositories.add(repoId)
      bucket.bytes += bytes
      languageBuckets.set(language, bucket)
    }

    const treePaths = context.tree?.tree?.map((entry) => entry.path) ?? []
    const normalizedSbom = normalizeSbomPackages(context.sbom)
    const repositoryObservation = toRepositoryObservation(
      repository,
      context.languages,
      normalizedSbom,
      context.workflows,
      treePaths,
      context.tree?.truncated ?? false,
      context.defaultBranchSha,
    )

    for (const packageName of repositoryObservation.dependencyEvidence.map((entry) => entry.name)) {
      const bucket = packageBuckets.get(packageName) ?? {
        repositories: new Set(),
        productionRepositories: new Set(),
        versions: new Map(),
      }
      bucket.repositories.add(repoId)
      const dependencyEvidence = repositoryObservation.dependencyEvidence.find((entry) => entry.name === packageName)
      if (dependencyEvidence?.scope === "production") bucket.productionRepositories.add(repoId)
      const version = dependencyEvidence?.version ?? "unknown"
      const versionBucket = bucket.versions.get(version) ?? new Set()
      versionBucket.add(repoId)
      bucket.versions.set(version, versionBucket)
      packageBuckets.set(packageName, bucket)
    }

    for (const technology of inferRepositoryTechnologies(repository, normalizedSbom, context.languages, treePaths).categories) {
      const bucket = technologyBuckets.get(technology) ?? new Set()
      bucket.add(repoId)
      technologyBuckets.set(technology, bucket)
    }

    repositories.push(repositoryObservation)
  }

  const packageObservations = [...packageBuckets.entries()].map(([name, bucket]) => {
    const repoArray = [...bucket.repositories]
    const versions = [...bucket.versions.entries()].map(([version, repos]) => ({
      version,
      repositories: repos.size,
      repositoryIds: [...repos],
    }))
    const dominantVersion = versions.reduce<string | null>((current, candidate) => {
      if (!current) return candidate.version
      const currentCount = versions.find((entry) => entry.version === current)?.repositories ?? 0
      return candidate.repositories > currentCount ? candidate.version : current
    }, null)

    return {
      name,
      repositories: repoArray.length,
      repositoryIds: repoArray,
      productionRepositories: bucket.productionRepositories.size,
      productionUsage: "partial" as const,
      versions,
      dominantVersion,
      versionDrift: versions.length > 1,
      securityStatus: "not_checked" as const,
      reachableUsage: {
        importedRepositories: 0,
        affectedCodeRepositories: 0,
        evidenceLevel: "dependency_present" as const,
      },
    }
  })

  const technologyObservations = [...technologyBuckets.entries()].map(([category, repositorySet]) => ({
    name: category,
    category,
    repositories: repositorySet.size,
    repositoryIds: [...repositorySet],
    evidenceSources: ["github_languages", "github_tree", "github_topics"] as EvidenceSource[],
  }))

  const languageMetrics = [...languageBuckets.entries()]
    .map(([name, bucket]) => ({ name, repositories: bucket.repositories.size, bytes: bucket.bytes }))
    .sort((a, b) => b.repositories - a.repositories || b.bytes - a.bytes)

  const primaryRateLimit = rateLimits.length
    ? rateLimits.reduce((lowest, current) => {
      if (!lowest) return current
      if (current.remaining === null) return lowest
      if (lowest.remaining === null) return current
      return current.remaining < lowest.remaining ? current : lowest
    }, rateLimits[0] as GitHubRateLimit)
    : { remaining: null, limit: null, resetAt: null }

  const uniquePackageCount = packageBuckets.size

  return {
    schemaVersion: "1.0.0",
    generatedAt: new Date().toISOString(),
    authority: "github",
    method: "github-native-first",
    owners: results.owners,
    repositories,
    packages: packageObservations,
    technologies: technologyObservations,
    metrics: {
      repositoryCount: repositories.length,
      activeRepositoryCount: activeCount,
      archivedRepositoryCount: archivedCount,
      forkRepositoryCount: forkCount,
      denominators: {
        active_repositories: activeCount,
        total_repositories: repositories.length,
        repositories_with_topics: repositories.filter((repo) => repo.topics.length > 0).length,
        repositories_with_workflows: repositories.filter((repo) => repo.workflows.length > 0).length,
        unique_packages: uniquePackageCount,
      },
      languages: languageMetrics,
    },
    errors: results.errors.map((entry) => ({ stage: "collector", message: entry })),
    rateLimit: primaryRateLimit,
  }
}

function inferRepositoryTechnologies(
  repo: GitHubRepository,
  sbomPackages: GitHubSbomPackage[],
  languages: Record<string, number>,
  treePaths: string[],
): { categories: string[]; packageNames: string[]; standardRoutes: string[] } {
  const packages = new Set<string>()
  const files = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0)
  const technologies = new Set<string>()

  if (repo.language) technologies.add(repo.language)
  if (repo.language === "TypeScript" || repo.language === "JavaScript") technologies.add("Node.js")
  if (treePaths.some((path) => /(^|\/)next\.config\./.test(path))) technologies.add("Next.js")
  if (treePaths.some((path) => /(^|\/)vite\.config\./.test(path))) technologies.add("Vite")
  if (treePaths.some((path) => /(^|\/)astro\.config\./.test(path))) technologies.add("Astro")
  if (treePaths.some((path) => /(^|\/)tailwind\.config\./.test(path))) technologies.add("Tailwind")
  if (treePaths.some((path) => /(^|\/)\.svelte$/.test(path))) technologies.add("Svelte")
  if (files > 1000) technologies.add("LargeRepository")
  if (repo.size > 3000) technologies.add("LargeProject")

  for (const packageEntry of sbomPackages) {
    if (packageEntry?.name) packages.add(packageEntry.name.toLowerCase())
    if (packageEntry?.name === "next") technologies.add("Next.js")
    if (packageEntry?.name === "react") technologies.add("React")
    if (packageEntry?.name === "zod") technologies.add("Zod")
    if (packageEntry?.name === "@modelcontextprotocol/sdk") technologies.add("MCP")
  }

  const standardRoutes = treePaths
    .filter((path) => path.startsWith("app/api/") || path.startsWith("pages/api/"))
    .slice(0, 25)

  return {
    categories: Array.from(technologies).sort(),
    packageNames: Array.from(packages).sort(),
    standardRoutes,
  }
}

function inferDependencyEcosystem(pkg: GitHubSbomPackage): string | null {
  const id = pkg.id?.trim() ?? ""
  if (id.startsWith("pkg:npm/")) return "npm"
  if (id.startsWith("pkg:pypi/")) return "pypi"
  if (id.startsWith("pkg:golang/")) return "go"
  if (id.startsWith("pkg:composer/")) return "composer"
  if (id.startsWith("pkg:maven/")) return "maven"
  if (id.startsWith("pkg:cargo/")) return "cargo"
  return null
}

function toRepositoryObservation(
  repository: GitHubRepository,
  languages: Record<string, number>,
  sbomPackages: GitHubSbomPackage[],
  workflows: { name: string; path: string; state: string }[],
  treePaths: string[],
  treeTruncated: boolean,
  defaultBranchSha: string | null,
): GithubRepositoryObservation {
  const standardRoutes = [...treePaths.filter((path) => /^app\/api\//.test(path)), ...treePaths.filter((path) => /^pages\/api\//.test(path))].slice(
    0,
    25,
  )

  const inferred = inferRepositoryTechnologies(repository, sbomPackages, languages, treePaths)

  return {
    id: repository.full_name,
    nodeId: repository.node_id,
    fullName: repository.full_name,
    owner: repository.owner.login,
    name: repository.name,
    htmlUrl: repository.html_url,
    description: repository.description,
    visibility: repository.visibility,
    archived: repository.archived,
    fork: repository.fork,
    defaultBranch: repository.default_branch || "main",
    headSha: defaultBranchSha,
    primaryLanguage: repository.language,
    languages,
    topics: repository.topics ?? [],
    createdAt: repository.created_at,
    updatedAt: repository.updated_at,
    pushedAt: repository.pushed_at,
    license: repository.license?.name ?? null,
    nativeEvidence: inferred.categories.map((technology) => ({
      id: `${repository.full_name}:${technology}`,
      source: "github_repository",
      kind: technology,
      repository: repository.full_name,
      observedAt: repository.updated_at,
      strength: "authoritative",
      value: true,
    })),
    dependencyEvidence: sbomPackages.map((entry) => ({
      name: entry.name,
      version: entry.version,
      ecosystem: inferDependencyEcosystem(entry),
      scope: normalizePackageScope(entry.scope),
      source: "github_sbom",
    })) ?? [],
    workflows: workflows.map((workflow) => ({ name: workflow.name, path: workflow.path, state: workflow.state })),
    tree: {
      truncated: treeTruncated,
      files: treePaths,
      standardRoutes,
    },
    localPublisher: {
      status: "not_seen",
      sha: null,
      scannerVersion: null,
      observedAt: null,
    },
    errors: [],
  }
}

import { describe, it, expect } from "vitest"
import type { GithubCensus } from "./catalog-evidence"
import type { PublicationSummary } from "./catalog-store"
import { enrichCatalogCensusWithLocalPublishers } from "./catalog-runtime"

function buildCensus(repositories: GithubCensus["repositories"]): GithubCensus {
  return {
    schemaVersion: "1.0.0",
    generatedAt: "2026-08-11T00:00:00.000Z",
    authority: "github",
    method: "github-native-first",
    owners: ["mbarbine"],
    repositories,
    packages: [],
    technologies: [],
    metrics: {
      repositoryCount: repositories.length,
      activeRepositoryCount: repositories.length,
      archivedRepositoryCount: 0,
      forkRepositoryCount: 0,
      denominators: {
        active_repositories: repositories.length,
        total_repositories: repositories.length,
        repositories_with_topics: repositories.length,
        repositories_with_workflows: repositories.length,
        unique_packages: 0,
      },
      languages: [],
    },
    errors: [],
    rateLimit: {
      remaining: 100,
      resetAt: null,
    },
  }
}

function packageObservation(name: string): GithubCensus["packages"][number] {
  return {
    name,
    repositories: 1,
    repositoryIds: ["mbarbine/platphorm-catalog"],
    productionRepositories: 1,
    productionUsage: "measured",
    versions: [{ version: "1.0.0", repositories: 1, repositoryIds: ["mbarbine/platphorm-catalog"] }],
    dominantVersion: "1.0.0",
    versionDrift: false,
    securityStatus: "not_checked",
    reachableUsage: {
      importedRepositories: 0,
      affectedCodeRepositories: 0,
      evidenceLevel: "not_available",
    },
  }
}

function catalogWithPackages(packages: GithubCensus["packages"]) {
  const census = buildCensus([baseRepository])
  census.packages = packages
  return census
}

function publicationWithImports({
  fullName,
  sha,
  status,
  runTimestamp,
  imports,
  scannerVersion = "1.0.0",
}: {
  fullName: string
  sha: string
  status: PublicationSummary["status"]
  runTimestamp: string
  imports: Array<{ package: string; count: number }>
  scannerVersion?: string | null
}): PublicationSummary {
  return {
    fullName,
    sha,
    scannerVersion,
    runTimestamp,
    filesAnalyzed: 11,
    durationMs: 42,
    warnings: 0,
    route: `/api/v1/catalog/publications/${fullName.replace("/", "__")}.json`,
    status,
    storageStatus: "ok",
    sizeBytes: 1200,
    rawBodySha256: "hash",
    imports,
  }
}

function publication(
  fullName: string,
  sha: string,
  status: PublicationSummary["status"],
  runTimestamp: string,
  scannerVersion: string | null = "1.0.0",
): PublicationSummary {
  return {
    fullName,
    sha,
    scannerVersion,
    runTimestamp,
    filesAnalyzed: 11,
    durationMs: 42,
    warnings: 0,
    route: `/api/v1/catalog/publications/${fullName.replace("/", "__")}.json`,
    status,
    storageStatus: "ok",
    sizeBytes: 1200,
    rawBodySha256: "hash",
  }
}

const baseRepository: GithubCensus["repositories"][number] = {
  id: "mbarbine/platphorm-catalog",
  nodeId: "R_kgDOSfWcFw",
  fullName: "mbarbine/platphorm-catalog",
  owner: "mbarbine",
  name: "platphorm-catalog",
  htmlUrl: "https://github.com/mbarbine/platphorm-catalog",
  description: "platphorm-catalog",
  visibility: "public",
  archived: false,
  fork: false,
  defaultBranch: "main",
  headSha: "a1",
  primaryLanguage: "TypeScript",
  languages: {},
  topics: [],
  createdAt: "2026-01-01T00:00:00Z",
  updatedAt: "2026-01-02T00:00:00Z",
  pushedAt: null,
  license: null,
  nativeEvidence: [],
  dependencyEvidence: [],
  workflows: [],
  tree: {
    truncated: false,
    files: [],
    standardRoutes: [],
  },
  localPublisher: {
    status: "not_seen",
    sha: null,
    scannerVersion: null,
    observedAt: null,
  },
  errors: [],
}

describe("catalog runtime publication reconciliation", () => {
  it("marks repository local publisher as current when publication matches the current sha", () => {
    const census = buildCensus([baseRepository])
    const result = enrichCatalogCensusWithLocalPublishers(census, [
      publication("mbarbine/platphorm-catalog", "a1", "stored", "2026-08-10T10:00:00Z"),
    ])

    expect(result.repositories[0].localPublisher).toEqual({
      status: "current",
      sha: "a1",
      scannerVersion: "1.0.0",
      observedAt: "2026-08-10T10:00:00Z",
    })
  })

  it("marks repository local publisher as stale when publication exists for the repo but not for current sha", () => {
    const census = buildCensus([baseRepository])
    const stale = { ...baseRepository, headSha: "new-sha" }
    const result = enrichCatalogCensusWithLocalPublishers(buildCensus([stale]), [
      publication("mbarbine/platphorm-catalog", "old-sha", "stored", "2026-08-10T11:00:00Z"),
    ])

    expect(result.repositories[0].localPublisher).toEqual({
      status: "stale",
      sha: "old-sha",
      scannerVersion: "1.0.0",
      observedAt: "2026-08-10T11:00:00Z",
    })
  })

  it("marks repository local publisher as invalid when only corrupted/unreadable publications exist", () => {
    const stale = { ...baseRepository, headSha: "new-sha" }
    const result = enrichCatalogCensusWithLocalPublishers(buildCensus([stale]), [
      publication("mbarbine/platphorm-catalog", "old-sha", "not_persisted", "2026-08-10T11:00:00Z"),
    ])

    expect(result.repositories[0].localPublisher).toEqual({
      status: "invalid",
      sha: "old-sha",
      scannerVersion: "1.0.0",
      observedAt: "2026-08-10T11:00:00Z",
    })
  })

  it("marks repository local publisher as not_seen when no publication is available", () => {
    const result = enrichCatalogCensusWithLocalPublishers(buildCensus([baseRepository]), [])
    expect(result.repositories[0].localPublisher).toEqual({
      status: "not_seen",
      sha: null,
      scannerVersion: null,
      observedAt: null,
    })
  })

  it("reconciles package reachable usage with publication imports", () => {
    const census = catalogWithPackages([
      packageObservation("react"),
      packageObservation("lucide-react"),
    ])
    const result = enrichCatalogCensusWithLocalPublishers(census, [
      publicationWithImports({
        fullName: "mbarbine/platphorm-catalog",
        sha: "a1",
        status: "stored",
        runTimestamp: "2026-08-10T10:00:00Z",
        imports: [
          { package: "react", count: 3 },
          { package: "zod", count: 1 },
        ],
      }),
    ])

    expect(result.packages).toHaveLength(2)
    expect(result.packages.find((entry) => entry.name === "react")).toEqual(
      expect.objectContaining({
        reachableUsage: expect.objectContaining({
          importedRepositories: 1,
          affectedCodeRepositories: 1,
          evidenceLevel: "dependency_imported",
        }),
      }),
    )
    expect(result.packages.find((entry) => entry.name === "lucide-react")).toEqual(
      expect.objectContaining({
        reachableUsage: expect.objectContaining({
          importedRepositories: 0,
          affectedCodeRepositories: 0,
          evidenceLevel: "dependency_present",
        }),
      }),
    )
  })

  it("does not mark import usage when publication does not match repo head SHA", () => {
    const repoWithNewSha = { ...baseRepository, headSha: "new-sha" }
    const census = catalogWithPackages([packageObservation("react")])
    census.repositories[0] = repoWithNewSha
    const result = enrichCatalogCensusWithLocalPublishers(census, [
      publicationWithImports({
        fullName: "mbarbine/platphorm-catalog",
        sha: "old-sha",
        status: "stored",
        runTimestamp: "2026-08-10T10:00:00Z",
        imports: [{ package: "react", count: 2 }],
      }),
    ])

    expect(result.packages[0].reachableUsage).toEqual({
      importedRepositories: 0,
      affectedCodeRepositories: 0,
      evidenceLevel: "dependency_present",
    })
  })
})

import crypto from "node:crypto"

export const CATALOG_PUBLICATION_SCHEMA_VERSION = "1.0.0"
export const CATALOG_SCANNER_VERSION = "1.0.0"

export type EvidenceSource =
  | "github_repository"
  | "github_languages"
  | "github_topics"
  | "github_tree"
  | "github_sbom"
  | "github_workflow"
  | "repo_local_action"
  | "deployed_runtime"

export interface CatalogEvidence {
  id: string
  source: EvidenceSource
  kind: string
  repository: string
  sha?: string
  path?: string
  value: unknown
  observedAt: string
  strength: "authoritative" | "strong" | "supporting" | "inferred"
}

export interface TechnologyObservation {
  name: string
  category: string
  repositories: number
  repositoryIds: string[]
  evidenceSources: EvidenceSource[]
}

export interface PackageObservation {
  name: string
  repositories: number
  repositoryIds: string[]
  productionRepositories: number
  productionUsage: "measured" | "partial" | "unknown"
  versions: Array<{ version: string; repositories: number; repositoryIds: string[] }>
  dominantVersion: string | null
  versionDrift: boolean
  securityStatus: "not_checked" | "available" | "degraded"
  reachableUsage: {
    importedRepositories: number
    affectedCodeRepositories: number
    evidenceLevel: "not_available" | "dependency_present" | "dependency_imported"
  }
}

export interface GithubRepositoryObservation {
  id: string
  nodeId: string
  fullName: string
  owner: string
  name: string
  htmlUrl: string
  description: string | null
  visibility: "public" | "private" | "internal" | "unknown"
  archived: boolean
  fork: boolean
  defaultBranch: string
  headSha: string | null
  primaryLanguage: string | null
  languages: Record<string, number>
  topics: string[]
  createdAt: string
  updatedAt: string
  pushedAt: string | null
  license: string | null
  nativeEvidence: CatalogEvidence[]
  dependencyEvidence: Array<{
    name: string
    version: string | null
    ecosystem: string | null
    scope: "production" | "development" | "unknown"
    manifestPath?: string
    source: "github_sbom" | "github_manifest"
  }>
  workflows: Array<{ name: string; path: string; state: string }>
  tree: {
    truncated: boolean
    files: string[]
    standardRoutes: string[]
  }
  localPublisher: {
    status: "not_seen" | "current" | "stale" | "invalid"
    sha: string | null
    scannerVersion: string | null
    observedAt: string | null
  }
  errors: string[]
}

export interface GithubCensus {
  schemaVersion: "1.0.0"
  generatedAt: string
  authority: "github"
  method: "github-native-first"
  owners: string[]
  repositories: GithubRepositoryObservation[]
  packages: PackageObservation[]
  technologies: TechnologyObservation[]
  metrics: {
    repositoryCount: number
    activeRepositoryCount: number
    archivedRepositoryCount: number
    forkRepositoryCount: number
    denominators: Record<string, number>
    languages: Array<{ name: string; repositories: number; bytes: number }>
  }
  errors: Array<{ owner?: string; repository?: string; stage: string; message: string }>
  rateLimit: { remaining: number | null; resetAt: string | null }
}

export interface CatalogPublication {
  schemaVersion: "1.0.0"
  producer: { name: string; version: string }
  repository: {
    owner: string
    name: string
    fullName: string
    branch: string
    sha: string
    url: string
  }
  run: {
    id?: string
    event?: string
    timestamp: string
    traceId?: string
    requestId?: string
  }
  observations: {
    technologies: Array<{ name: string; category: string; evidence: string[] }>
    capabilities: Array<{ id: string; name: string; evidence: string[] }>
    components: Array<{
      name: string
      path: string
      hash: string
      imports: string[]
      exportedSymbols: string[]
      dependencies: string[]
      framework?: string
      contractFingerprints?: string[]
      accessibilitySignals?: string[]
    }>
    contracts: Array<{ kind: string; path: string; fingerprint: string; evidence: string[] }>
    routes: Array<{ route: string; path: string; methods: string[]; public: boolean }>
    standards: Array<{ name: string; status: "present" | "absent" | "unknown"; evidence: string[] }>
    imports: Array<{ package: string; path: string; count: number; evidence: string[] }>
  }
  evidence: CatalogEvidence[]
  summary: { filesAnalyzed: number; durationMs: number; warnings: string[] }
}

export interface PublicationValidationResult {
  valid: boolean
  errors: string[]
}

const OWNER_RE = /^[A-Za-z0-9_.-]{1,100}$/
const REPO_RE = /^[A-Za-z0-9_.-]{1,100}$/
const SHA_RE = /^[a-f0-9]{40}$/i
const SAFE_PATH_RE = /^[^\0\r\n]{1,500}$/

export function validateCatalogPublication(value: unknown): PublicationValidationResult {
  const errors: string[] = []
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { valid: false, errors: ["publication must be a JSON object"] }
  }
  const publication = value as Partial<CatalogPublication>
  if (publication.schemaVersion !== CATALOG_PUBLICATION_SCHEMA_VERSION) errors.push("unsupported schemaVersion")
  if (!publication.producer?.name || !publication.producer?.version) errors.push("producer.name and producer.version are required")
  const repository = publication.repository
  if (!repository || !OWNER_RE.test(repository.owner ?? "") || !REPO_RE.test(repository.name ?? "")) {
    errors.push("repository.owner and repository.name are invalid")
  }
  if (repository && repository.fullName !== `${repository.owner}/${repository.name}`) errors.push("repository.fullName does not match owner/name")
  if (repository && !SHA_RE.test(repository.sha ?? "")) errors.push("repository.sha must be a 40-character Git commit SHA")
  if (repository && (!/^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository.url ?? ""))) errors.push("repository.url must be a GitHub repository URL")
  if (!publication.run?.timestamp || Number.isNaN(Date.parse(publication.run.timestamp))) errors.push("run.timestamp must be an ISO timestamp")
  if (!publication.observations || !publication.evidence || !publication.summary) errors.push("observations, evidence, and summary are required")
  if (Array.isArray(publication.evidence) && publication.evidence.length > 5000) errors.push("evidence exceeds the 5000 item limit")
  if (publication.summary && (publication.summary.filesAnalyzed < 0 || publication.summary.filesAnalyzed > 100000)) errors.push("summary.filesAnalyzed is out of range")
  if (publication.summary && (publication.summary.durationMs < 0 || publication.summary.durationMs > 86_400_000)) errors.push("summary.durationMs is out of range")
  for (const evidence of publication.evidence ?? []) {
    if (!evidence.id || !evidence.source || !evidence.kind || !evidence.repository || !evidence.observedAt) errors.push("each evidence item needs id, source, kind, repository, and observedAt")
    if (evidence.path && !SAFE_PATH_RE.test(evidence.path)) errors.push("evidence path is invalid")
    if (typeof evidence.value === "string" && evidence.value.length > 2000) errors.push("evidence string values must be <= 2000 characters")
  }
  return { valid: errors.length === 0, errors: [...new Set(errors)] }
}

export function publicationStorageKey(publication: Pick<CatalogPublication, "repository">): string {
  return `${publication.repository.owner}__${publication.repository.name}__${publication.repository.sha.toLowerCase()}.json`
}

export function hashText(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex")
}

export function readCatalogOwners(): string[] {
  const configured = process.env.github_catalog_owners ?? process.env.GITHUB_CATALOG_OWNERS ?? process.env.github_user ?? process.env.GITHUB_REPOSITORY_OWNER ?? "mbarbine"
  return [...new Set(configured.split(",").map((owner) => owner.trim()).filter((owner) => OWNER_RE.test(owner)))]
}

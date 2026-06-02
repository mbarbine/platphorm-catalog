import { promises as fs } from "fs"
import path from "path"
import type {
  Component,
  DetailedComponent,
  Repository,
  CatalogStats,
  RepositoryCapability,
  Capability,
  GlobalCapability,
  GlobalCapabilityIndex,
  CatalogRepositorySummary,
  RepositoryCatalogManifest,
  BestImplementationIndex,
  VisionEvidencePack,
  VisionToolSelection,
} from "./types"
import { routeSlugToId } from "./routing"
import { buildVisionEvidencePack, buildVisionToolSelection } from "./vision-tools"

const DATA_DIR = process.cwd()
const CATALOG_DIR = path.join(DATA_DIR, "global-capability-catalog", "catalog")
const GENERATED_DIR = path.join(CATALOG_DIR, "generated")

async function readJson<T>(filePath: string): Promise<T> {
  const data = await fs.readFile(filePath, "utf-8")
  return JSON.parse(data) as T
}

function normalizeRepoDisplayName(name: string): string {
  return name
    .replace(/^github-recent__/, "")
    .replace(/^(mbarbine__|ph3ar__|process-co__|process-charts__|process-partners__)/, "")
    .replace(/__/g, "/")
}

// Load the component index (lightweight)
export async function loadComponentIndex(): Promise<{
  component_count: number
  components: Component[]
}> {
  const filePath = path.join(DATA_DIR, "components-index.json")
  return readJson(filePath)
}

// Load detailed components (full data)
export async function loadDetailedComponents(): Promise<{
  component_count: number
  classifications: Record<string, number>
  components: DetailedComponent[]
}> {
  const filePath = path.join(DATA_DIR, "components.json")
  const data = await readJson<{
    component_count: number
    classifications: Record<string, number>
    components: DetailedComponent[]
  }>(filePath)

  return {
    ...data,
    components: data.components.map((component) => ({
      ...component,
      id: component.id ?? component.component_id ?? "",
      name: component.name ?? component.component_name ?? "unknown component",
      path: component.path ?? component.file_path ?? "unknown",
      duplicates: component.duplicates ?? component.duplicate_name_count ?? 0,
      usage: component.usage ?? component.import_usage_count ?? 0,
    })),
  }
}

// Load repositories from the manifest
export async function loadRepositories(): Promise<Repository[]> {
  const filePath = path.join(
    DATA_DIR,
    "github-recent-manifest",
    "recent_repositories.json"
  )
  const parsed = await readJson<{ records?: Repository[] }>(filePath)
  return parsed.records || []
}

export async function loadGlobalCapabilityIndex(): Promise<GlobalCapabilityIndex> {
  return readJson(path.join(GENERATED_DIR, "capabilities.json"))
}

export async function loadCatalogSummary(): Promise<{
  generated_at: string
  repositories_discovered: number
  repositories_selected: number
  repositories_scanned: number
  manifests_generated: number
  manifests_validated: number
  validation_failures: number
  capabilities_extracted: number
  global_capabilities: number
  duplicate_capabilities: number
}> {
  return readJson(path.join(GENERATED_DIR, "catalog-summary.json"))
}

export async function loadBestImplementations(): Promise<BestImplementationIndex> {
  return readJson(path.join(GENERATED_DIR, "best-implementations.json"))
}

export async function loadVisionToolSelection(): Promise<VisionToolSelection> {
  const [globalIndex, bestIndex] = await Promise.all([
    loadGlobalCapabilityIndex(),
    loadBestImplementations(),
  ])

  return buildVisionToolSelection(globalIndex, bestIndex)
}

export async function loadVisionEvidencePack(): Promise<VisionEvidencePack> {
  const selection = await loadVisionToolSelection()
  return buildVisionEvidencePack(selection)
}

export async function loadGeneratedRepositories(): Promise<CatalogRepositorySummary[]> {
  const data = await readJson<{ repositories: CatalogRepositorySummary[] }>(
    path.join(GENERATED_DIR, "repos.json")
  )
  return data.repositories
}

export async function loadRepositoryCatalog(
  repoId: string
): Promise<RepositoryCatalogManifest | null> {
  const safeId = routeSlugToId(repoId)
  const filePath = path.join(CATALOG_DIR, "repositories", `${safeId}.catalog.json`)
  try {
    return await readJson(filePath)
  } catch {
    return null
  }
}

export async function loadCapabilityDetail(
  capabilityId: string
): Promise<GlobalCapability | null> {
  const data = await loadGlobalCapabilityIndex()
  const decoded = routeSlugToId(capabilityId)
  return data.capabilities.find((capability) => capability.id === decoded) ?? null
}

export async function loadComponentDetail(
  componentId: string
): Promise<DetailedComponent | null> {
  const decoded = routeSlugToId(componentId)
  const data = await loadDetailedComponents()
  return data.components.find((component) => component.id === decoded) ?? null
}

// Load capability catalog index
export async function loadCapabilityCatalog(): Promise<string> {
  const filePath = path.join(
    DATA_DIR,
    "global-capability-catalog",
    "catalog",
    "docs",
    "index.md"
  )
  const data = await fs.readFile(filePath, "utf-8")
  return data
}

// Parse the capability index markdown
export function parseCapabilityIndex(markdown: string): {
  totalRepositories: number
  totalCapabilities: number
  duplicateCapabilities: number
  topDomains: Record<string, number>
  repositories: RepositoryCapability[]
} {
  const lines = markdown.split("\n")

  // Extract counts
  const repoMatch = markdown.match(/Generated repositories: (\d+)/)
  const capMatch = markdown.match(/Generated capabilities: (\d+)/)
  const dupMatch = markdown.match(/Duplicate capabilities: (\d+)/)

  // Extract top domains
  const topDomains: Record<string, number> = {}
  let inDomains = false
  for (const line of lines) {
    if (line.includes("## Top Capability Domains")) {
      inDomains = true
      continue
    }
    if (inDomains && line.startsWith("##")) {
      break
    }
    if (inDomains && line.startsWith("- ")) {
      const match = line.match(/- ([^:]+): (\d+)/)
      if (match) {
        topDomains[match[1]] = parseInt(match[2], 10)
      }
    }
  }

  // Extract repositories
  const repositories: RepositoryCapability[] = []
  let inRepos = false
  for (const line of lines) {
    if (line.includes("## Repositories")) {
      inRepos = true
      continue
    }
    if (inRepos && line.startsWith("##")) {
      break
    }
    if (inRepos && line.startsWith("- [")) {
      const match = line.match(
        /- \[([^\]]+)\]\([^)]+\): (\d+) capabilities/
      )
      if (match) {
        repositories.push({
          id: match[1],
          name: match[1].replace(/__/g, "/"),
          capabilityCount: parseInt(match[2], 10),
        })
      }
    }
  }

  return {
    totalRepositories: repoMatch ? parseInt(repoMatch[1], 10) : 0,
    totalCapabilities: capMatch ? parseInt(capMatch[1], 10) : 0,
    duplicateCapabilities: dupMatch ? parseInt(dupMatch[1], 10) : 0,
    topDomains,
    repositories,
  }
}

// Load capability files
export async function loadCapabilities(): Promise<Capability[]> {
  const data = await loadGlobalCapabilityIndex()
  return data.capabilities.map((capability) => ({
    id: capability.id,
    name: capability.name,
    type: capability.type,
    reuse_score: capability.reuse_score,
    implementations: capability.implementations.length,
    risk_summary: capability.risk_summary,
    description: capability.summary,
    recommended_repo_id: capability.recommended_source?.repo_id ?? null,
    recommended_score: capability.recommended_source?.score ?? null,
  }))
}

// Get catalog stats
export async function getCatalogStats(): Promise<CatalogStats> {
  const [componentData, globalIndex, summary] = await Promise.all([
    loadDetailedComponents(),
    loadGlobalCapabilityIndex(),
    loadCatalogSummary(),
  ])

  return {
    totalComponents: componentData.component_count,
    totalRepositories: globalIndex.repositories.length,
    totalCapabilities: globalIndex.capabilities.length,
    classifications: componentData.classifications,
    topCapabilityDomains: getCapabilityDomainCounts(globalIndex.capabilities),
    validatedManifests: summary.manifests_validated,
    validationFailures: summary.validation_failures,
    capabilityImplementations: summary.capabilities_extracted,
    duplicateCapabilities: summary.duplicate_capabilities,
    generatedAt: summary.generated_at,
  }
}

export function getCapabilityDomainCounts(
  capabilities: Array<{ id: string; type?: string }>
): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const capability of capabilities) {
    const domain = capability.id.split(".")[0] || capability.type || "other"
    counts[domain] = (counts[domain] ?? 0) + 1
  }
  return Object.fromEntries(
    Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  )
}

// Get unique repositories from components
export function getUniqueRepositories(
  components: Component[]
): { name: string; componentCount: number }[] {
  const repoMap = new Map<string, number>()

  for (const comp of components) {
    const count = repoMap.get(comp.repo) || 0
    repoMap.set(comp.repo, count + 1)
  }

  return Array.from(repoMap.entries())
    .map(([name, componentCount]) => ({ name, componentCount }))
    .sort((a, b) => b.componentCount - a.componentCount)
}

export function toRepositoryCards(
  repositories: CatalogRepositorySummary[],
  componentCounts: { name: string; componentCount: number }[]
): Array<{
  id: string
  name: string
  capabilityCount: number
  componentCount: number
  language?: string | null
  htmlUrl?: string
  isPrivate?: boolean
  maturity?: string
  confidence?: string
}> {
  const componentCountByNormalizedName = new Map(
    componentCounts.map((repo) => [repo.name.toLowerCase(), repo.componentCount])
  )

  return repositories.map((repo) => {
    const displayName = normalizeRepoDisplayName(repo.name)
    const suffix = repo.name.split("__").at(-1)?.toLowerCase() ?? displayName.toLowerCase()
    const componentCount =
      componentCountByNormalizedName.get(displayName.toLowerCase()) ??
      componentCountByNormalizedName.get(suffix) ??
      0

    return {
      id: repo.id,
      name: displayName,
      capabilityCount: repo.capability_count,
      componentCount,
      language: repo.primary_language,
      htmlUrl: repo.remote_url?.startsWith("git@github.com:")
        ? repo.remote_url
            .replace("git@github.com:", "https://github.com/")
            .replace(/\.git$/, "")
        : repo.remote_url ?? undefined,
      isPrivate: false,
      maturity: repo.maturity,
      confidence: repo.confidence,
    }
  })
}

// Get unique component names across repos
export function getUniqueComponentNames(
  components: Component[]
): { name: string; count: number; avgScore: number }[] {
  const nameMap = new Map<string, { count: number; totalScore: number }>()

  for (const comp of components) {
    const existing = nameMap.get(comp.name) || { count: 0, totalScore: 0 }
    nameMap.set(comp.name, {
      count: existing.count + 1,
      totalScore: existing.totalScore + comp.component_score,
    })
  }

  return Array.from(nameMap.entries())
    .map(([name, data]) => ({
      name,
      count: data.count,
      avgScore: Math.round(data.totalScore / data.count),
    }))
    .sort((a, b) => b.count - a.count)
}

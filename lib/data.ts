import { promises as fs } from "fs"
import path from "path"
import type {
  Component,
  DetailedComponent,
  Repository,
  CatalogStats,
  RepositoryCapability,
  Capability,
} from "./types"

const DATA_DIR = process.cwd()

// Load the component index (lightweight)
export async function loadComponentIndex(): Promise<{
  component_count: number
  components: Component[]
}> {
  const filePath = path.join(DATA_DIR, "components-index.json")
  const data = await fs.readFile(filePath, "utf-8")
  return JSON.parse(data)
}

// Load detailed components (full data)
export async function loadDetailedComponents(): Promise<{
  component_count: number
  classifications: Record<string, number>
  components: DetailedComponent[]
}> {
  const filePath = path.join(DATA_DIR, "components.json")
  const data = await fs.readFile(filePath, "utf-8")
  return JSON.parse(data)
}

// Load repositories from the manifest
export async function loadRepositories(): Promise<Repository[]> {
  const filePath = path.join(
    DATA_DIR,
    "github-recent-manifest",
    "recent_repositories.json"
  )
  const data = await fs.readFile(filePath, "utf-8")
  const parsed = JSON.parse(data)
  return parsed.records || []
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
  const capDir = path.join(
    DATA_DIR,
    "global-capability-catalog",
    "catalog",
    "docs",
    "capabilities"
  )
  const files = await fs.readdir(capDir)
  const capabilities: Capability[] = []

  for (const file of files) {
    if (!file.endsWith(".md")) continue
    const content = await fs.readFile(path.join(capDir, file), "utf-8")
    const lines = content.split("\n")

    // Parse the capability file
    const id = file.replace(".md", "")
    let name = id
    let type = "unknown"
    let reuseScore = 0
    let implementations = 0
    let riskSummary = ""

    for (const line of lines) {
      if (line.startsWith("# ")) {
        name = line.replace("# ", "").trim()
      }
      if (line.startsWith("- Name:")) {
        name = line.replace("- Name:", "").trim()
      }
      if (line.startsWith("- Type:")) {
        type = line.replace("- Type:", "").trim()
      }
      if (line.startsWith("- Reuse score:")) {
        reuseScore = parseInt(line.replace("- Reuse score:", "").trim(), 10)
      }
      if (line.startsWith("- Implementations:")) {
        implementations = parseInt(
          line.replace("- Implementations:", "").trim(),
          10
        )
      }
      if (line.startsWith("- Risk summary:")) {
        riskSummary = line.replace("- Risk summary:", "").trim()
      }
    }

    // Get description from first paragraph
    const descIndex = lines.findIndex(
      (l) => l && !l.startsWith("#") && !l.startsWith("-") && !l.startsWith("##")
    )
    const description = descIndex > -1 ? lines[descIndex] : undefined

    capabilities.push({
      id,
      name,
      type,
      reuse_score: reuseScore,
      implementations,
      risk_summary: riskSummary,
      description,
    })
  }

  return capabilities
}

// Get catalog stats
export async function getCatalogStats(): Promise<CatalogStats> {
  const [componentData, capabilityMarkdown] = await Promise.all([
    loadDetailedComponents(),
    loadCapabilityCatalog(),
  ])

  const capabilityData = parseCapabilityIndex(capabilityMarkdown)

  return {
    totalComponents: componentData.component_count,
    totalRepositories: capabilityData.totalRepositories,
    totalCapabilities: capabilityData.totalCapabilities,
    classifications: componentData.classifications,
    topCapabilityDomains: capabilityData.topDomains,
  }
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

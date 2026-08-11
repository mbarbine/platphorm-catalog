import { promises as fs } from "node:fs"
import path from "node:path"

import type { GithubCensus } from "./catalog-evidence"

const DATA_DIR = process.cwd()
const CATALOG_DIR = path.join(DATA_DIR, "global-capability-catalog", "catalog")
const GENERATED_DIR = path.join(CATALOG_DIR, "generated")
const PUBLICATIONS_DIR = path.join(CATALOG_DIR, "publications")

const KNOWN_GENERATED_FILES = [
  "catalog-summary.json",
  "repos.json",
  "capabilities.json",
  "search-index.json",
  "capabilities.ndjson",
  "best-implementations.json",
  "repo-targets.json",
  "graph.json",
  "normalization-report.json",
  "validation-report.json",
  "global-index.json",
  "github-census.json",
  "catalog-scan-meta.json",
]

export interface ScanArtifactSummary {
  name: string
  path: string
  exists: boolean
  bytes: number | null
  lastModified: string | null
}

export interface ScanMeta {
  generatedAt?: string
  repositoryCount?: number
  packageCount?: number
  technologyCount?: number
  source?: string
  method?: string
  owners?: string[]
}

function asJson<T>(text: string): T {
  return JSON.parse(text) as T
}

async function readJsonIfExists<T>(filePath: string): Promise<T | null> {
  try {
    const text = await fs.readFile(filePath, "utf8")
    return asJson<T>(text)
  } catch {
    return null
  }
}

async function statIfExists(filePath: string): Promise<{ bytes: number; lastModified: string } | null> {
  try {
    const stats = await fs.stat(filePath)
    return {
      bytes: stats.size,
      lastModified: stats.mtime.toISOString(),
    }
  } catch {
    return null
  }
}

export async function loadGithubCensus(): Promise<GithubCensus | null> {
  return readJsonIfExists<GithubCensus>(path.join(GENERATED_DIR, "github-census.json"))
}

export async function loadCatalogScanMeta(): Promise<ScanMeta | null> {
  return readJsonIfExists<ScanMeta>(path.join(GENERATED_DIR, "catalog-scan-meta.json"))
}

export async function listGeneratedCatalogArtifacts(): Promise<ScanArtifactSummary[]> {
  const summaries = await Promise.all(
    KNOWN_GENERATED_FILES.map(async (name) => {
      const filePath = path.join(GENERATED_DIR, name)
      const stat = await statIfExists(filePath)
      return {
        name,
        path: filePath,
        exists: stat !== null,
        bytes: stat?.bytes ?? null,
        lastModified: stat?.lastModified ?? null,
      }
    }),
  )

  return summaries
}

export async function listPublicationArtifactFiles(): Promise<Array<{ name: string; path: string; bytes: number | null; lastModified: string | null }>> {
  try {
    const entries = await fs.readdir(PUBLICATIONS_DIR, { withFileTypes: true })
    const rows = await Promise.all(entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
      .map(async (entry) => {
        const filePath = path.join(PUBLICATIONS_DIR, entry.name)
        const stat = await statIfExists(filePath)
        return {
          name: entry.name,
          path: filePath,
          bytes: stat?.bytes ?? null,
          lastModified: stat?.lastModified ?? null,
        }
      }),
    )
    return rows.sort((a, b) => {
      const left = a.lastModified ?? ""
      const right = b.lastModified ?? ""
      return right.localeCompare(left)
    })
  } catch {
    return []
  }
}

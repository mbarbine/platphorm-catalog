import { promises as fs } from "node:fs"
import path from "node:path"
import type { CatalogPublication } from "@/lib/catalog-evidence"
import { hashText, publicationStorageKey } from "@/lib/catalog-evidence"
import { githubContentText, githubRequest } from "@/lib/github/rest"

export interface PublicationSummary {
  fullName: string
  sha: string
  scannerVersion: string | null
  runTimestamp: string
  filesAnalyzed: number
  durationMs: number
  warnings: number
  route: string
  status: "stored" | "unchanged" | "not_persisted"
  storageStatus: string
  sizeBytes: number
  rawBodySha256: string
  imports?: Array<{ package: string; count: number }>
}

export interface PersistPublicationResult {
  persisted: boolean
  status: "stored" | "unchanged" | "missing_repository_config" | "missing_token" | "error"
  storageKey?: string
  requestId?: string
  message: string
  storageError?: string
}

interface GitHubOwnerRepo {
  owner: string
  repo: string
}

function normalizeBranch(target?: string): string {
  return (target || process.env.GITHUB_CATALOG_PUBLICATION_BRANCH || "main").trim() || "main"
}

function encodeUtf8(value: string): string {
  return Buffer.from(value, "utf8").toString("base64")
}

function localPublicationsDir(): string {
  const root = process.cwd()
  return path.join(root, "global-capability-catalog", "catalog", "publications")
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "")
}

function safePublicationName(name: string): string {
  return sanitizeFilename(name).endsWith(".json") ? sanitizeFilename(name) : `${sanitizeFilename(name)}.json`
}

function parseCatalogPublicationConfig(): GitHubOwnerRepo | null {
  const configured = process.env.GITHUB_CATALOG_PUBLICATION_REPO
  if (!configured) return null
  const [owner, repo] = configured.split("/").map((value) => value.trim())
  if (!owner || !repo) return null
  return { owner, repo }
}

function summarizePublicationForApi(
  publication: CatalogPublication,
  fileName: string,
  status: PublicationSummary["status"] = "stored",
  storageStatus = "ok",
  sizeBytes = 0,
  rawBodySha256?: string,
): PublicationSummary {
  const observedImports = Array.isArray(publication.observations?.imports)
    ? publication.observations.imports
      .map((entry) => {
        const packageName = typeof entry.package === "string" ? entry.package.trim().toLowerCase() : ""
        const count = Number(entry.count)
        if (!packageName || Number.isNaN(count) || !Number.isFinite(count)) return null
        if (count <= 0) return null
        return { package: packageName, count }
      })
      .filter((entry): entry is { package: string; count: number } => entry !== null)
    : []
  return {
    fullName: publication.repository.fullName,
    sha: publication.repository.sha,
    scannerVersion: publication.producer.version || null,
    runTimestamp: publication.run.timestamp,
    filesAnalyzed: publication.summary.filesAnalyzed,
    durationMs: publication.summary.durationMs,
    warnings: publication.summary.warnings.length,
    route: `/api/v1/catalog/publications/${fileName}`,
    status,
    storageStatus,
    sizeBytes,
    rawBodySha256: rawBodySha256 ?? hashText(JSON.stringify(publication)),
    imports: observedImports.length > 0 ? observedImports : undefined,
  }
}

async function parsePublicationText(
  fileName: string,
  data: string,
  status: PublicationSummary["status"] = "stored",
  storageStatus = "ok",
): Promise<PublicationSummary> {
  const fileHash = hashText(data)
  const parsed = JSON.parse(data) as CatalogPublication
  return summarizePublicationForApi(parsed, fileName, status, storageStatus, data.length, fileHash)
}

async function parsePublicationFile(filePath: string, fileName: string): Promise<PublicationSummary> {
  const data = await fs.readFile(filePath, "utf8")
  return parsePublicationText(fileName, data)
}

export async function persistCatalogPublication(
  publication: CatalogPublication,
  requestId?: string,
): Promise<PersistPublicationResult> {
  const storage = parseCatalogPublicationConfig()
  const storageBranch = normalizeBranch(process.env.GITHUB_CATALOG_PUBLICATION_BRANCH)
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
    || process.env.github_pat_read
    || process.env.github_pat_write
    || process.env.github_pat
  const storageKey = publicationStorageKey(publication)
  const requestPath = `catalog/publications/${storageKey}`
  const requestBodyText = JSON.stringify(publication, null, 2)
  const encoded = encodeUtf8(requestBodyText)
  const localDir = localPublicationsDir()
  const localFile = path.join(localDir, storageKey)

  if (!storage) {
    try {
      await fs.mkdir(localDir, { recursive: true })
      await fs.writeFile(localFile, requestBodyText, "utf8")
      return {
        persisted: true,
        status: "missing_repository_config",
        requestId,
        storageKey,
        message: "No repository target configured; publication persisted locally for operator review.",
      }
    } catch (error) {
      return {
        persisted: false,
        status: "missing_repository_config",
        requestId,
        storageKey,
        message: "GITHUB_CATALOG_PUBLICATION_REPO is not configured and local publication persistence failed.",
        storageError: error instanceof Error ? error.message : String(error),
      }
    }
  }

  if (!token) {
    try {
      await fs.mkdir(localDir, { recursive: true })
      await fs.writeFile(localFile, requestBodyText, "utf8")
      return {
        persisted: true,
        status: "missing_token",
        requestId,
        storageKey,
        message: "No write token found; publication persisted locally.",
      }
    } catch (error) {
      return {
        persisted: false,
        status: "missing_token",
        requestId,
        storageKey,
        message: "No write token was provided and local publication persistence failed.",
        storageError: error instanceof Error ? error.message : String(error),
      }
    }
  }

  const apiPath = `/repos/${encodeURIComponent(storage.owner)}/${encodeURIComponent(storage.repo)}/contents/${requestPath}`
  try {
    const branch = storageBranch
    let existingSha: string | null = null

    try {
      const existing = await githubContentText(storage.owner, storage.repo, requestPath, branch)
      existingSha = existing.data.sha
      const decoded = Buffer.from(existing.data.content, "base64").toString("utf8")
      if (decoded === requestBodyText) {
        return {
          persisted: false,
          status: "unchanged",
          requestId,
          storageKey,
          message: "Publication content already exists for this repository state.",
        }
      }
    } catch {
      // no existing file
    }

    await githubRequest(
      apiPath,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Catalog publication ${publication.repository.owner}/${publication.repository.name}@${publication.repository.sha}`,
          content: encoded,
          branch,
          ...(existingSha ? { sha: existingSha } : {}),
        }),
      },
    )

    return {
      persisted: true,
      status: "stored",
      requestId,
      storageKey,
      message: `Catalog publication stored at ${storage.owner}/${storage.repo}@${branch}`,
    }
  } catch (error) {
    const fallbackError = error instanceof Error ? error.message : String(error)
    try {
      await fs.mkdir(localDir, { recursive: true })
      await fs.writeFile(localFile, requestBodyText, "utf8")
      return {
        persisted: false,
        status: "error",
        storageKey,
        requestId,
        message: "Catalog publication storage failed; publication was saved locally for operator review.",
        storageError: fallbackError,
      }
    } catch (localError) {
      return {
        persisted: false,
        status: "error",
        storageKey,
        requestId,
        message: "Catalog publication storage failed and local fallback persistence failed.",
        storageError: `${fallbackError}; ${localError instanceof Error ? localError.message : String(localError)}`,
      }
    }
  }
}

export async function listCatalogPublications(): Promise<PublicationSummary[]> {
  const ownerRepoConfig = parseCatalogPublicationConfig()
  const ownerRepo = ownerRepoConfig ? `${ownerRepoConfig.owner}/${ownerRepoConfig.repo}` : null

  let remoteRecords: PublicationSummary[] = []

  if (ownerRepo && ownerRepoConfig) {
    const [owner, repo] = ownerRepo.split("/").map((value) => value.trim())
    if (owner && repo) {
      try {
        const listResponse = await githubRequest<Array<{ name: string }>>(
          `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/catalog/publications`,
          {
            query: { ref: normalizeBranch(process.env.GITHUB_CATALOG_PUBLICATION_BRANCH) },
          },
        )
        const listData = listResponse.data
        const contents = Array.isArray(listData)
          ? listData.filter((entry) => entry.name.endsWith(".json")).slice(0, 50)
          : []

        for (const file of contents) {
          try {
            const response = await githubContentText(owner, repo, `catalog/publications/${file.name}`)
            const decoded = Buffer.from(response.data.content, "base64").toString("utf8")
            const summary = await parsePublicationText(file.name, decoded, "stored", "ok")
            remoteRecords.push(summary)
          } catch {
            remoteRecords.push({
              fullName: "unknown/unknown",
              sha: "0000000000000000000000000000000000000000",
              scannerVersion: null,
              runTimestamp: new Date(0).toISOString(),
              filesAnalyzed: 0,
              durationMs: 0,
              warnings: 1,
              route: `/api/v1/catalog/publications/${file.name}`,
              status: "not_persisted",
              storageStatus: "corrupt_or_unreadable",
              sizeBytes: 0,
              rawBodySha256: "not_available",
            })
          }
        }
      } catch {
        remoteRecords = []
      }
    }
  }

  const localRecords = await listLocalPublicationSummaries()
  const merged = new Map<string, PublicationSummary>()

  for (const record of remoteRecords) {
    merged.set(record.route, record)
  }

  for (const record of localRecords) {
    if (!merged.has(record.route)) {
      merged.set(record.route, record)
    }
  }

  const records = [...merged.values()]
  records.sort((a, b) => Date.parse(b.runTimestamp) - Date.parse(a.runTimestamp))
  return records
}

export async function getCatalogPublicationByFile(fileName: string): Promise<CatalogPublication | null> {
  const safeFileName = safePublicationName(fileName)
  const ownerRepo = parseCatalogPublicationConfig()
  const storageDir = localPublicationsDir()
  const localPath = path.join(storageDir, safeFileName)

  if (ownerRepo) {
    try {
      const response = await githubContentText(ownerRepo.owner, ownerRepo.repo, `catalog/publications/${safeFileName}`)
      const decoded = Buffer.from(response.data.content, "base64").toString("utf8")
      return JSON.parse(decoded) as CatalogPublication
    } catch {
      // continue to local fallback
    }
  }

  try {
    const data = await fs.readFile(localPath, "utf8")
    return JSON.parse(data) as CatalogPublication
  } catch {
    return null
  }
}

export async function listLocalPublicationSummaries(): Promise<PublicationSummary[]> {
  const publicationsDir = localPublicationsDir()
  try {
    const entries = await fs.readdir(publicationsDir, { withFileTypes: true })
    const summaries: PublicationSummary[] = []
    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".json") || entry.name === "publications.index.json") {
        continue
      }
      const parsed = await parsePublicationFile(path.join(publicationsDir, entry.name), entry.name).catch(() => null)
      if (parsed) summaries.push(parsed)
    }
    return summaries.sort((a, b) => Date.parse(b.runTimestamp) - Date.parse(a.runTimestamp))
  } catch {
    return []
  }
}

export async function persistPublicationIndexFallback(publications: PublicationSummary[]): Promise<void> {
  if (!Array.isArray(publications) || publications.length === 0) return
  const target = localPublicationsDir()
  const indexPath = path.join(target, "publications.index.json")
  await fs.mkdir(target, { recursive: true })
  await fs.writeFile(indexPath, JSON.stringify(publications, null, 2), "utf8")
}

export async function writePublicationFallbackJson(publication: CatalogPublication): Promise<string> {
  const dir = localPublicationsDir()
  const file = path.join(dir, publicationStorageKey(publication))
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(file, JSON.stringify(publication, null, 2), "utf8")
  return file
}

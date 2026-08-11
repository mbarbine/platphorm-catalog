import { promises as fs } from "node:fs"
import path from "node:path"
import { collectGithubCensus } from "@/lib/github/collector"

const root = process.cwd()
const catalogDir = path.join(root, "global-capability-catalog", "catalog")
const generatedDir = path.join(catalogDir, "generated")

async function ensureDir(target: string): Promise<void> {
  await fs.mkdir(target, { recursive: true })
}

async function writeJson(target: string, data: unknown): Promise<void> {
  await fs.writeFile(target, `${JSON.stringify(data, null, 2)}\n`, "utf8")
}

async function main() {
  const maxReposPerOwner = Number(process.env.CATALOG_GITHUB_MAX_REPOS ?? "15")
  const census = await collectGithubCensus({ maxReposPerOwner })
  await ensureDir(generatedDir)
  await writeJson(path.join(generatedDir, "github-census.json"), census)
  await writeJson(path.join(generatedDir, "catalog-scan-meta.json"), {
    generatedAt: census.generatedAt,
    repositoryCount: census.metrics.repositoryCount,
    packageCount: census.packages.length,
    technologyCount: census.technologies.length,
    source: "github",
    method: census.method,
    owners: census.owners,
  })
  console.log(`github census complete: ${census.metrics.repositoryCount} repositories`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})


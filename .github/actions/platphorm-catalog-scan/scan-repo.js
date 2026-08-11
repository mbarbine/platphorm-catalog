const fs = require("node:fs")
const fsp = require("node:fs/promises")
const path = require("node:path")
const { execSync } = require("node:child_process")
const { createHash, randomUUID } = require("node:crypto")

const SCHEMA_VERSION = "1.0.0"
const DEFAULT_API_URL = "https://catalog.platphormnews.com"
const DEFAULT_MAX_FILES = 2400
const MAX_WARNINGS = 200
const MAX_DURATION_MS = 86_400_000

const INPUTS = {
  catalogApiUrl: getInput("catalog_api_url", DEFAULT_API_URL),
  apiKey: getInput("api_key", ""),
  publish: parseBoolean(getInput("publish", "true"), true),
  maxFiles: Math.max(1, Number.parseInt(getInput("max_files", String(DEFAULT_MAX_FILES)), 10) || DEFAULT_MAX_FILES),
  artifactPath: getInput("artifact_path", ".platphorm/catalog.json"),
  scannerVersion: getInput("scanner_version", SCHEMA_VERSION),
  owner: getInput("owner", ""),
  repository: getInput("repository", ""),
}

const STANDARD_ROUTES = [
  "/",
  "/api/health",
  "/api/v1/health",
  "/api/docs",
  "/openapi.yaml",
  "/llms.txt",
  "/llms-full.txt",
  "/llms-index.json",
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap-index.xml",
  "/rss.xml",
  "/feed.xml",
  "/atom.xml",
  "/manifest.webmanifest",
  "/.well-known/mcp.json",
  "/.well-known/agents.json",
  "/.well-known/ai-plugin.json",
  "/.well-known/security.txt",
  "/.well-known/trust.json",
]

const SKIP_DIRS = new Set([
  ".git",
  ".next",
  ".turbo",
  "node_modules",
  ".vercel",
  "out",
  "dist",
  "coverage",
  "platform-analysis-test",
  ".codex-artifacts",
])

const SCAN_EXTS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".cjs",
  ".mjs",
  ".json",
  ".md",
  ".yml",
  ".yaml",
  ".css",
  ".html",
  ".txt",
])

function getInput(name, fallback = "") {
  const raw = process.env[`INPUT_${name.toUpperCase()}`]
  if (raw == null || raw === "") return fallback
  return raw
}

function parseBoolean(value, fallback = false) {
  if (value == null) return fallback
  const normalized = String(value).toLowerCase().trim()
  if (["1", "true", "yes", "on"].includes(normalized)) return true
  if (["0", "false", "no", "off"].includes(normalized)) return false
  return fallback
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex")
}

function writeOutput(name, value) {
  const outputFile = process.env.GITHUB_OUTPUT
  if (!outputFile) return
  const clean = String(value)
    .replace(/%/g, "%25")
    .replace(/\r/g, "%0D")
    .replace(/\n/g, "%0A")
  fs.appendFileSync(outputFile, `${name}=${clean}\n`)
}

function safeText(value, max = 2000) {
  const text = typeof value === "string" ? value : JSON.stringify(value)
  return text.length <= max ? text : `${text.slice(0, max - 8)}...trunc`
}

function parseRepoInfo(repoRoot) {
  if (INPUTS.owner && INPUTS.repository) {
    return {
      owner: INPUTS.owner,
      name: INPUTS.repository,
      fullName: `${INPUTS.owner}/${INPUTS.repository}`,
      url: `https://github.com/${INPUTS.owner}/${INPUTS.repository}`,
    }
  }

  const envRepo = process.env.GITHUB_REPOSITORY
  if (envRepo && envRepo.includes("/")) {
    const [owner, name] = envRepo.split("/")
    return { owner, name, fullName: envRepo, url: `https://github.com/${envRepo}` }
  }

  try {
    const remote = execSync("git config --get remote.origin.url", { cwd: repoRoot }).toString().trim()
    const match = remote.match(/github\.com[:/ ]([^/]+)\/([^./]+)(?:\.git)?$/)
    if (match) {
      const owner = match[1]
      const name = match[2]
      return {
        owner,
        name,
        fullName: `${owner}/${name}`,
        url: `https://github.com/${owner}/${name}`,
      }
    }
  } catch {}

  throw new Error("Could not determine repository owner/name. Set action inputs owner and repository.")
}

function inferSha() {
  if (process.env.GITHUB_SHA && /^[a-f0-9]{40}$/i.test(process.env.GITHUB_SHA)) {
    return process.env.GITHUB_SHA.toLowerCase()
  }
  try {
    const sha = execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim()
    if (/^[a-f0-9]{40}$/i.test(sha)) return sha.toLowerCase()
  } catch {}
  return "0000000000000000000000000000000000000000"
}

function inferBranch() {
  if (process.env.GITHUB_REF_NAME) return process.env.GITHUB_REF_NAME
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim() || "main"
  } catch {
    return "main"
  }
}

function fileExists(filePath) {
  try {
    fs.statSync(filePath)
    return true
  } catch {
    return false
  }
}

function relativeFromRoot(repoRoot, absPath) {
  return path.relative(repoRoot, absPath).replace(/\\/g, "/")
}

function toRouteFromAppFile(relPath) {
  if (!relPath.startsWith("app/")) return null
  const file = path.posix.basename(relPath)
  if (!/^(route|page)\.(ts|tsx|js|jsx)$/.test(file)) return null
  const folders = path.posix.dirname(relPath).replace(/^app\/?/, "")
  return folders === "." || folders === "app" || folders === "" ? "/" : `/${folders}`
}

function collectImports(fileText) {
  const regex = /import\s+(?:[^'"]+?\s+from\s+)?['"]([^'"]+)['"]/g
  const out = []
  for (const match of fileText.matchAll(regex)) {
    out.push(match[1])
  }
  return out
}

function collectExports(fileText) {
  const out = new Set()
  const patterns = [
    /export\s+(?:async\s+)?function\s+([A-Za-z0-9_]+)/g,
    /export\s+(?:const|let|class|interface|type|enum)\s+([A-Za-z0-9_]+)/g,
  ]
  for (const pattern of patterns) {
    for (const match of fileText.matchAll(pattern)) out.add(match[1])
  }
  return [...out]
}

function collectRouteMethods(fileText, isApiRoute) {
  const methods = new Set()
  const regex = /export\s+(?:async\s+)?(?:const|function)\s+(GET|HEAD|POST|PUT|DELETE|PATCH|OPTIONS)\b/g
  for (const match of fileText.matchAll(regex)) methods.add(match[1])
  if (methods.size === 0 && !isApiRoute) methods.add("GET")
  return [...methods]
}

function normalizePackage(raw) {
  if (!raw || raw.startsWith(".") || raw.startsWith("/") || raw.startsWith("node:")) return null
  if (raw.startsWith("@")) {
    const [scope, pkg] = raw.split("/")
    return pkg ? `${scope}/${pkg}` : scope
  }
  return raw.split("/")[0]
}

async function walkFiles(rootDir) {
  const files = []
  const stack = [{ abs: rootDir, rel: "." }]
  const seen = new Set()

  while (stack.length > 0 && files.length < INPUTS.maxFiles) {
    const { abs, rel } = stack.pop()
    if (seen.has(abs)) continue
    seen.add(abs)
    let stat
    try {
      stat = await fsp.stat(abs)
    } catch {
      continue
    }

    if (stat.isDirectory()) {
      const base = path.basename(abs)
      if (SKIP_DIRS.has(base)) continue
      if (base.startsWith(".") && base !== ".well-known") {
        continue
      }
      const entries = await fsp.readdir(abs, { withFileTypes: true })
      for (const entry of entries) {
        stack.push({ abs: path.join(abs, entry.name), rel: rel === "." ? entry.name : `${rel}/${entry.name}` })
      }
      continue
    }

    if (!stat.isFile()) continue
    if (!SCAN_EXTS.has(path.extname(abs))) continue
    files.push({ abs, rel })
  }

  return files
}

async function readJsonMaybe(filePath) {
  try {
    return JSON.parse(await fsp.readFile(filePath, "utf8"))
  } catch {
    return null
  }
}

function isDynamicRoute(route) {
  return route.includes("[") || route.includes("]")
}

async function standardRouteExists(repoRoot, route, routeSet) {
  if (!route.startsWith("/")) return false
  if (route === "/") return fileExists(path.join(repoRoot, "app", "page.tsx")) || fileExists(path.join(repoRoot, "app", "page.jsx"))

  if (isDynamicRoute(route)) return routeSet.has(route)
  const parts = route.replace(/^\//, "").split("/").filter(Boolean)
  if (route.startsWith("/.well-known/")) {
    const target = path.join(repoRoot, "public", route.slice(1))
    return fileExists(target)
  }

  if (route.startsWith("/api/")) {
    return (
      fileExists(path.join(repoRoot, "app", ...parts, "route.ts")) ||
      fileExists(path.join(repoRoot, "app", ...parts, "route.js"))
    )
  }

  const staticRoot = path.join(repoRoot, route.slice(1))
  const staticAtPublic = route === "/openapi.yaml" ? fileExists(staticRoot) : fileExists(staticRoot)
  if (staticAtPublic) return true

  return fileExists(path.join(repoRoot, "app", ...parts, "page.tsx")) || fileExists(path.join(repoRoot, "app", ...parts, "page.jsx"))
}

async function publishPublication(publication) {
  const requestId = randomUUID()
  if (!INPUTS.publish) {
    return { status: "not_published", requestId, message: "publish=false" }
  }
  const apiKey = INPUTS.apiKey || process.env.PLATPHORM_API_KEY
  if (!apiKey) {
    return { status: "fallback", requestId, message: "Missing API key for protected publication endpoint" }
  }

  const endpoint = `${INPUTS.catalogApiUrl.replace(/\/$/, "")}/api/v1/catalog/publications`
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-PlatPhorm-API-Key": apiKey,
        "x-platphorm-request-id": requestId,
      },
      body: JSON.stringify(publication),
    })
    if (!response.ok) {
      const text = await response.text()
      return { status: "fallback", requestId, message: `POST ${endpoint} -> ${response.status} ${text.slice(0, 200)}` }
    }
    return { status: "success", requestId, message: "Publication posted successfully." }
  } catch (error) {
    return { status: "fallback", requestId, message: `Publication failed: ${error instanceof Error ? error.message : String(error)}` }
  }
}

async function buildPublication(repoRoot) {
  const start = Date.now()
  const runTimestamp = new Date().toISOString()
  const repo = parseRepoInfo(repoRoot)
  const branch = inferBranch()
  const sha = inferSha()
  const warnings = []
  const evidence = []
  const files = await walkFiles(repoRoot)

  const packageJson = await readJsonMaybe(path.join(repoRoot, "package.json"))
  const deps = packageJson ? { ...(packageJson.dependencies ?? {}), ...(packageJson.devDependencies ?? {}) } : {}
  const depNames = Object.keys(deps)

  const technologies = depNames.slice(0, 240).map((name) => ({
    name,
    category: "dependency",
    evidence: [`package.json:${name}`],
  }))

  const routeMap = new Map()
  const routes = []
  const contracts = []
  const components = []
  const imports = []
  const allImports = new Map()

  for (const file of files) {
    const rel = relativeFromRoot(repoRoot, file.abs)
    const text = await fsp.readFile(file.abs, "utf8").catch(() => null)
    if (!text) continue

    const importsInFile = collectImports(text)
    for (const imp of importsInFile) {
      const pkg = normalizePackage(imp)
      if (pkg) allImports.set(pkg, (allImports.get(pkg) ?? 0) + 1)
    }

    const route = toRouteFromAppFile(rel)
    if (route) {
      const isApiRoute = route.startsWith("/api/")
      const methods = collectRouteMethods(text, isApiRoute)
      const routeRecord = {
        route,
        path: `/${rel}`,
        methods,
        public: !isApiRoute,
      }
      routeMap.set(route, routeRecord)
      contracts.push({
        kind: "route-handler",
        path: route,
        fingerprint: sha256(text).slice(0, 24),
        evidence: [safeText(`file:${rel}`)],
      })
      evidence.push({
        id: `repo-local-route-${sha256(`${runTimestamp}:${rel}`).slice(0, 12)}`,
        source: "repo_local_action",
        kind: "route",
        repository: repo.fullName,
        sha,
        path: rel,
        value: { route, methods, public: !isApiRoute },
        observedAt: runTimestamp,
        strength: "authoritative",
      })
      continue
    }

    if (rel.startsWith("components/")) {
      const name = path.basename(rel)
      const exports = collectExports(text)
      components.push({
        name,
        path: rel,
        hash: sha256(text).slice(0, 24),
        imports: importsInFile,
        exportedSymbols: exports,
        dependencies: importsInFile.map(normalizePackage).filter(Boolean),
        framework: rel.endsWith(".tsx") ? "react" : "javascript",
        contractFingerprints: [sha256(text).slice(0, 24)],
        accessibilitySignals: [],
      })
      if (components.length <= 240) {
        evidence.push({
          id: `repo-local-component-${sha256(`${runTimestamp}:${rel}`).slice(0, 12)}`,
          source: "repo_local_action",
          kind: "component",
          repository: repo.fullName,
          sha,
          path: rel,
          value: safeText({ name, exports: exports.length, imports: importsInFile.length }),
          observedAt: runTimestamp,
          strength: "strong",
        })
      }
    }
  }

  for (const [route, routeRecord] of routeMap) routes.push(routeRecord)
  routes.sort((a, b) => a.route.localeCompare(b.route))

  const capabilities = []
  if (routeMap.has("/api/v1/catalog/publications")) capabilities.push({ id: "catalog-publication", name: "Catalog publication API", evidence: ["/api/v1/catalog/publications"] })
  if (routeMap.has("/api/mcp")) capabilities.push({ id: "mcp-endpoint", name: "MCP endpoint", evidence: ["/api/mcp"] })
  if (routeMap.has("/")) capabilities.push({ id: "ui", name: "Product UI", evidence: ["/"] })

  if (depNames.length === 0) warnings.push("No package dependencies found")
  if (routes.length === 0) warnings.push("No app routes detected")

  for (const [pkg, count] of [...allImports.entries()].sort((a, b) => b[1] - a[1]).slice(0, 120)) {
    imports.push({
      package: pkg,
      path: "scanned-source",
      count,
      evidence: [`import-count:${pkg}`],
    })
  }

  const standardRouteSet = new Set(routes.map((entry) => entry.route))
  const standards = []
  for (const route of STANDARD_ROUTES) {
    const present = await standardRouteExists(repoRoot, route, standardRouteSet)
    standards.push({ name: route, status: present ? "present" : "absent", evidence: [] })
  }

  evidence.unshift({
    id: `repo-local-meta-${sha256(`${runTimestamp}:${repo.fullName}`).slice(0, 12)}`,
    source: "repo_local_action",
    kind: "repository",
    repository: repo.fullName,
    sha,
    path: "package.json",
    value: {
      owner: repo.owner,
      name: repo.name,
      branch,
      dependencyCount: depNames.length,
      scannedFiles: files.length,
    },
    observedAt: runTimestamp,
    strength: "authoritative",
  })

  if (evidence.length > 5000) evidence.length = 5000

  return {
    publication: {
      schemaVersion: SCHEMA_VERSION,
      producer: {
        name: "platphorm-catalog-scan-action",
        version: INPUTS.scannerVersion,
      },
      repository: {
        owner: repo.owner,
        name: repo.name,
        fullName: repo.fullName,
        branch,
        sha,
        url: repo.url,
      },
      run: {
        id: process.env.GITHUB_RUN_ID || process.env.GITHUB_RUN_NUMBER || "",
        event: process.env.GITHUB_EVENT_NAME || "manual",
        timestamp: runTimestamp,
        traceId: process.env.TRACE_ID,
        requestId: process.env.GITHUB_RUN_ID || randomUUID(),
      },
      observations: {
        technologies,
        capabilities,
        components,
        contracts,
        routes,
        standards,
        imports,
      },
      evidence,
      summary: {
        filesAnalyzed: Math.min(files.length, 100000),
        durationMs: Math.min(Date.now() - start, MAX_DURATION_MS),
        warnings: warnings.slice(0, MAX_WARNINGS),
      },
    },
  }
}

async function writeArtifact(repoRoot, publication) {
  const target = path.resolve(repoRoot, INPUTS.artifactPath)
  await fsp.mkdir(path.dirname(target), { recursive: true })
  await fsp.writeFile(target, `${JSON.stringify(publication, null, 2)}\n`, "utf8")
  return target
}

async function main() {
  const repoRoot = process.cwd()
  const start = Date.now()
  const { publication } = await buildPublication(repoRoot)
  publication.summary.durationMs = Math.min(Date.now() - start, MAX_DURATION_MS)

  const artifactPath = await writeArtifact(repoRoot, publication)
  const publish = await publishPublication(publication)

  writeOutput("publication_file", artifactPath)
  writeOutput("request_id", publish.requestId)
  writeOutput("publication_status", publish.status)
  writeOutput("warnings", publication.summary.warnings.length)

  console.log(`catalog scan status=${publish.status}`)
  console.log(`publication_file=${artifactPath}`)
  console.log(`request_id=${publish.requestId}`)
  if (publish.message) console.log(`message=${publish.message}`)

  if (publish.status === "fallback" && INPUTS.publish) {
    process.exitCode = 1
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error)
  writeOutput("publication_status", "fallback")
  writeOutput("warnings", 1)
  console.error(`[catalog-scan] ${message}`)
  process.exit(1)
})

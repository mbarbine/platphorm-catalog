import { promises as fs } from "node:fs"
import path from "node:path"
import { routeSlug } from "../lib/routing"

const root = process.cwd()
const publicDir = path.join(root, "public")
const catalogDir = path.join(root, "global-capability-catalog", "catalog")
const generatedDir = path.join(catalogDir, "generated")
const docsDir = path.join(catalogDir, "docs")

async function exists(filePath: string) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true })
}

async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await fs.readFile(filePath, "utf8")) as T
}

async function writeText(filePath: string, contents: string) {
  await ensureDir(path.dirname(filePath))
  await fs.writeFile(filePath, contents.endsWith("\n") ? contents : `${contents}\n`)
}

async function writeJson(filePath: string, data: unknown) {
  await writeText(filePath, JSON.stringify(data, null, 2))
}

async function copyFileIfExists(source: string, target: string) {
  if (!(await exists(source))) return
  await ensureDir(path.dirname(target))
  await fs.copyFile(source, target)
}

async function copyDirIfExists(source: string, target: string) {
  if (!(await exists(source))) return
  await fs.rm(target, { recursive: true, force: true })
  await fs.cp(source, target, { recursive: true })
}

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

async function main() {
  await ensureDir(publicDir)
  await copyDirIfExists(generatedDir, path.join(publicDir, "catalog", "generated"))
  await copyDirIfExists(docsDir, path.join(publicDir, "catalog", "docs"))
  await copyDirIfExists(path.join(root, "platform-analysis-output"), path.join(publicDir, "platform-analysis-output"))
  await copyDirIfExists(path.join(root, "github-recent-manifest"), path.join(publicDir, "github-recent-manifest"))

  const rootArtifacts = [
    "components-index.json",
    "components.json",
    "components.llms.txt",
    "components.md",
    "duplicates.json",
    "extraction-candidates.json",
    "missing-stories.json",
    "missing-tests.json",
  ]
  for (const artifact of rootArtifacts) {
    await copyFileIfExists(path.join(root, artifact), path.join(publicDir, "artifacts", artifact))
  }

  const summary = await readJson<{
    generated_at?: string
    repositories_discovered?: number
    manifests_validated?: number
    validation_failures?: number
    capabilities_extracted?: number
    global_capabilities?: number
  }>(path.join(generatedDir, "catalog-summary.json"))
  const capabilitiesIndex = await readJson<{
    capabilities: Array<{ id: string; name: string; implementations: unknown[]; reuse_score: number }>
    repositories: Array<{ id: string; name: string }>
  }>(path.join(generatedDir, "capabilities.json"))
  const componentIndex = await readJson<{
    component_count: number
    components: Array<{ id: string; name: string; repo: string; classification?: string }>
  }>(path.join(root, "components-index.json"))

  const baseUrl = "https://catalog.platphormnews.com"
  const staticRoutes = [
    "",
    "/api/health",
    "/api/v1/health",
    "/repositories",
    "/capabilities",
    "/components",
    "/analysis",
    "/api/docs",
    "/llms.txt",
    "/llms-full.txt",
    "/llms-index.json",
    "/openapi.yaml",
    "/robots.txt",
    "/sitemap.xml",
    "/sitemap-index.xml",
    "/rss.xml",
    "/feed.xml",
    "/atom.xml",
    "/manifest.webmanifest",
    "/.well-known/trust.json",
    "/.well-known/agents.json",
    "/.well-known/mcp.json",
    "/.well-known/ai-plugin.json",
    "/.well-known/security.txt",
  ]
  const detailRoutes = [
    ...capabilitiesIndex.capabilities.map((capability) => `/capabilities/${routeSlug(capability.id)}`),
    ...capabilitiesIndex.repositories.map((repo) => `/repositories/${routeSlug(repo.id)}`),
    ...componentIndex.components.map((component) => `/components/${routeSlug(component.id)}`),
  ]
  const sitemapUrls = [...staticRoutes, ...detailRoutes]
  const generatedAt = summary.generated_at ?? new Date().toISOString()
  const status = summary.validation_failures ? "degraded" : "ok"
  const health = {
    ok: !summary.validation_failures,
    data: {
      service: "platphorm-catalog",
      version: "1.0.0",
      environment: "static-export",
      status,
      timestamp: generatedAt,
      repositories: summary.repositories_discovered ?? capabilitiesIndex.repositories.length,
      manifests_validated: summary.manifests_validated ?? capabilitiesIndex.repositories.length,
      validation_failures: summary.validation_failures ?? 0,
      global_capabilities: summary.global_capabilities ?? capabilitiesIndex.capabilities.length,
      capability_implementations: summary.capabilities_extracted ?? null,
      components: componentIndex.component_count,
      database: { status: "not_applicable", note: "Static catalog artifact deployment." },
      mcp: { status: "unsupported", note: "This public catalog exposes static artifacts, not MCP tool execution." },
      discoveryStatus: "ok",
      sitemapStatus: "ok",
      rssStatus: "ok",
      llmsStatus: "ok",
      openapiStatus: "ok",
      trustedDomainStatus: "ok",
      publicReadAccess: true,
      protectedActionsRequire: "PLATPHORM_API_KEY",
    },
  }

  await writeText(
    path.join(publicDir, "robots.txt"),
    [
      "User-agent: *",
      "Allow: /",
      `Sitemap: ${baseUrl}/sitemap.xml`,
    ].join("\n"),
  )

  await writeText(
    path.join(publicDir, "sitemap.xml"),
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...sitemapUrls.map((route) => {
        const loc = route ? `${baseUrl}${route}` : baseUrl
        return `  <url><loc>${xmlEscape(loc)}</loc><lastmod>${generatedAt}</lastmod></url>`
      }),
      "</urlset>",
    ].join("\n"),
  )
  await writeText(
    path.join(publicDir, "sitemap-index.xml"),
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      `  <sitemap><loc>${baseUrl}/sitemap.xml</loc><lastmod>${generatedAt}</lastmod></sitemap>`,
      "</sitemapindex>",
    ].join("\n"),
  )

  const topCapabilities = capabilitiesIndex.capabilities
    .slice()
    .sort((a, b) => b.implementations.length - a.implementations.length || b.reuse_score - a.reuse_score)
    .slice(0, 12)

  await writeText(
    path.join(publicDir, "llms.txt"),
    [
      "# PlatPhorm Capability Catalog",
      "",
      "A public, static, machine-readable catalog of reusable software capabilities across Michael Barbine / PH3AR / PlatPhormNews repositories.",
      "",
      `Repositories scanned: ${summary.repositories_discovered ?? capabilitiesIndex.repositories.length}`,
      `Validated manifests: ${summary.manifests_validated ?? capabilitiesIndex.repositories.length}`,
      `Capability implementations: ${summary.capabilities_extracted ?? "unknown"}`,
      `Global capabilities: ${summary.global_capabilities ?? capabilitiesIndex.capabilities.length}`,
      `Validation failures: ${summary.validation_failures ?? 0}`,
      `Components indexed: ${componentIndex.component_count}`,
      "",
      "Important files:",
      "- /catalog/generated/capabilities.json",
      "- /catalog/generated/repos.json",
      "- /catalog/generated/search-index.json",
      "- /catalog/generated/best-implementations.json",
      "- /catalog/generated/graph.json",
      "- /catalog/docs/index.md",
      "- /api/docs",
      "- /api/health",
      "- /rss.xml",
      "",
      "Top capabilities:",
      ...topCapabilities.map((capability) => `- ${capability.id}: ${capability.implementations.length} implementation(s), reuse score ${capability.reuse_score}`),
    ].join("\n"),
  )

  await writeText(
    path.join(publicDir, "llms-full.txt"),
    [
      "# PlatPhorm Capability Catalog Full Context",
      "",
      "This site is a static export backed by schema-validated generated artifacts. Deterministic scanners provide source evidence; interpretation is represented in repository manifests and global capability indexes.",
      "",
      `Generated at: ${summary.generated_at ?? "unknown"}`,
      "",
      "Machine endpoints:",
      "- /catalog/generated/repo-targets.json",
      "- /catalog/generated/repos.json",
      "- /catalog/generated/capabilities.json",
      "- /catalog/generated/capabilities.ndjson",
      "- /catalog/generated/graph.json",
      "- /catalog/generated/search-index.json",
      "- /catalog/generated/best-implementations.json",
      "- /catalog/generated/validation-report.json",
      "- /artifacts/components-index.json",
      "- /artifacts/components.json",
      "- /api/health",
      "- /api/v1/health",
      "- /rss.xml",
      "- /sitemap-index.xml",
      "",
      "Human views:",
      "- /",
      "- /repositories",
      "- /capabilities",
      "- /components",
      "- /analysis",
      "",
      "Source discipline:",
      "- Capabilities must have source paths.",
      "- Source paths must exist in deterministic scan evidence.",
      "- Secrets are redacted and environment values are not published.",
      "- Local LLMs files are treated as context evidence, not behavior proof.",
    ].join("\n"),
  )

  await writeJson(path.join(publicDir, "llms-index.json"), {
    ok: true,
    service: "platphorm-catalog",
    generated_at: summary.generated_at ?? new Date().toISOString(),
    routes: {
      home: "/",
      api_docs: "/api/docs",
      llms: "/llms.txt",
      llms_full: "/llms-full.txt",
      openapi: "/openapi.yaml",
      sitemap: "/sitemap.xml",
      sitemap_index: "/sitemap-index.xml",
      rss: "/rss.xml",
      feed: "/feed.xml",
      atom: "/atom.xml",
      health: "/api/health",
      v1_health: "/api/v1/health",
      capabilities: "/catalog/generated/capabilities.json",
      repositories: "/catalog/generated/repos.json",
      search_index: "/catalog/generated/search-index.json",
      graph: "/catalog/generated/graph.json",
      best_implementations: "/catalog/generated/best-implementations.json",
    },
    counts: {
      repositories: summary.repositories_discovered ?? capabilitiesIndex.repositories.length,
      manifests_validated: summary.manifests_validated ?? capabilitiesIndex.repositories.length,
      validation_failures: summary.validation_failures ?? 0,
      capability_implementations: summary.capabilities_extracted ?? null,
      global_capabilities: summary.global_capabilities ?? capabilitiesIndex.capabilities.length,
      components: componentIndex.component_count,
    },
  })

  await writeJson(path.join(publicDir, "api", "health.json"), health)
  await writeJson(path.join(publicDir, "api", "v1", "health.json"), health)

  const feedItems = topCapabilities.map((capability) => ({
    title: capability.name,
    link: `${baseUrl}/capabilities/${routeSlug(capability.id)}`,
    description: `${capability.id}: ${capability.implementations.length} implementation(s), reuse score ${capability.reuse_score}.`,
  }))
  const rss = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "  <channel>",
    "    <title>PlatPhorm Capability Catalog</title>",
    `    <link>${baseUrl}</link>`,
    "    <description>Generated reusable software capability index.</description>",
    `    <lastBuildDate>${new Date(generatedAt).toUTCString()}</lastBuildDate>`,
    ...feedItems.flatMap((item) => [
      "    <item>",
      `      <title>${xmlEscape(item.title)}</title>`,
      `      <link>${xmlEscape(item.link)}</link>`,
      `      <guid>${xmlEscape(item.link)}</guid>`,
      `      <description>${xmlEscape(item.description)}</description>`,
      "    </item>",
    ]),
    "  </channel>",
    "</rss>",
  ].join("\n")
  await writeText(path.join(publicDir, "rss.xml"), rss)
  await writeText(path.join(publicDir, "feed.xml"), rss)
  await writeText(
    path.join(publicDir, "atom.xml"),
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<feed xmlns="http://www.w3.org/2005/Atom">',
      "  <title>PlatPhorm Capability Catalog</title>",
      `  <link href="${baseUrl}/" />`,
      `  <updated>${generatedAt}</updated>`,
      `  <id>${baseUrl}/</id>`,
      ...feedItems.flatMap((item) => [
        "  <entry>",
        `    <title>${xmlEscape(item.title)}</title>`,
        `    <link href="${xmlEscape(item.link)}" />`,
        `    <id>${xmlEscape(item.link)}</id>`,
        `    <updated>${generatedAt}</updated>`,
        `    <summary>${xmlEscape(item.description)}</summary>`,
        "  </entry>",
      ]),
      "</feed>",
    ].join("\n"),
  )

  await writeText(
    path.join(publicDir, "openapi.yaml"),
    [
      "openapi: 3.1.0",
      "info:",
      "  title: PlatPhorm Capability Catalog",
      "  version: 1.0.0",
      "  description: Static public catalog artifacts for repositories, capabilities, search, graph, and reuse recommendations.",
      "servers:",
      `  - url: ${baseUrl}`,
      "paths:",
      "  /api/health:",
      "    get:",
      "      summary: Static catalog health",
      "      responses:",
      "        '200':",
      "          description: Catalog health and generation status",
      "  /api/v1/health:",
      "    get:",
      "      summary: Versioned static catalog health",
      "      responses:",
      "        '200':",
      "          description: Catalog health and generation status",
      "  /catalog/generated/capabilities.json:",
      "    get:",
      "      summary: Global capability index",
      "      responses:",
      "        '200':",
      "          description: Global capability index JSON",
      "  /catalog/generated/repos.json:",
      "    get:",
      "      summary: Repository index",
      "      responses:",
      "        '200':",
      "          description: Repository index JSON",
      "  /catalog/generated/search-index.json:",
      "    get:",
      "      summary: Search index",
      "      responses:",
      "        '200':",
      "          description: Plain JSON search index",
      "  /catalog/generated/best-implementations.json:",
      "    get:",
      "      summary: Best implementation rankings",
      "      responses:",
      "        '200':",
      "          description: Best reusable implementation candidates",
      "  /rss.xml:",
      "    get:",
      "      summary: Capability update feed",
      "      responses:",
      "        '200':",
      "          description: RSS feed of high-signal catalog capabilities",
    ].join("\n"),
  )

  await writeJson(path.join(publicDir, "manifest.webmanifest"), {
    name: "PlatPhorm Capability Catalog",
    short_name: "Catalog",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#10b981",
    description: "Reusable software capability catalog for PlatPhormNews and PH3AR repositories.",
  })

  await writeJson(path.join(publicDir, ".well-known", "trust.json"), {
    ok: true,
    service: "platphorm-catalog",
    public_read_access: true,
    protected_actions: ["catalog regeneration", "repository scanning", "manifest repair", "deployment"],
    auth: {
      shared_key: "PLATPHORM_API_KEY",
      accepted_headers: ["Authorization: Bearer $PLATPHORM_API_KEY", "X-PlatPhorm-API-Key: $PLATPHORM_API_KEY"],
    },
    policy:
      "Web dashboard, public-safe discovery, browser-based operations, trusted-domain discovery, standard route compliance, Vercel metadata capture, trace inspection, and agentic workflow discovery are intentionally supported for public read-only debugging and operator workflows. Mutating, administrative, ingestion, replay, fork, remediation, deployment, sync, test-triggering, reporting, and write actions require PLATPHORM_API_KEY.",
  })
  await writeJson(path.join(publicDir, ".well-known", "agents.json"), {
    ok: true,
    service: "platphorm-catalog",
    purpose: "Public read-only software capability catalog.",
    machine_routes: ["/llms.txt", "/llms-full.txt", "/llms-index.json", "/catalog/generated/search-index.json"],
  })
  await writeJson(path.join(publicDir, ".well-known", "mcp.json"), {
    ok: true,
    service: "platphorm-catalog",
    mcp: {
      supported: false,
      status: "static-export",
      note: "This site publishes static catalog artifacts. MCP mutation or tool execution is not exposed by this static deployment.",
    },
  })
  await writeJson(path.join(publicDir, ".well-known", "ai-plugin.json"), {
    schema_version: "v1",
    name_for_human: "PlatPhorm Capability Catalog",
    name_for_model: "platphorm_catalog",
    description_for_human: "Browse and inspect reusable software capabilities.",
    description_for_model: "Read static capability, repository, graph, and search index artifacts.",
    auth: { type: "none" },
    api: { type: "openapi", url: `${baseUrl}/openapi.yaml` },
    logo_url: `${baseUrl}/manifest.webmanifest`,
    contact_email: "ops@platphormnews.com",
    legal_info_url: `${baseUrl}/.well-known/trust.json`,
  })
  await writeText(
    path.join(publicDir, ".well-known", "security.txt"),
    ["Contact: mailto:ops@platphormnews.com", `Canonical: ${baseUrl}/.well-known/security.txt`].join("\n"),
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { getCatalogStats } from "@/lib/data"
import { Braces, Download, FileJson, Network } from "lucide-react"

const artifacts = [
  {
    href: "/api/health",
    title: "Health",
    description: "Public static health payload with generation status, validated manifests, discovery status, and route-contract status.",
  },
  {
    href: "/catalog/generated/capabilities.json",
    title: "Global Capability Index",
    description: "Normalized reusable capabilities, implementations, recommended source, scores, risks, and source repositories.",
  },
  {
    href: "/catalog/generated/repos.json",
    title: "Repository Index",
    description: "Repository summaries with language, framework, maturity, confidence, and capability counts.",
  },
  {
    href: "/catalog/generated/search-index.json",
    title: "Search Index",
    description: "Plain JSON search records for repositories, capabilities, tags, risks, source paths, and reuse metadata.",
  },
  {
    href: "/catalog/generated/graph.json",
    title: "Graph",
    description: "Node and edge graph connecting repositories to implemented capabilities.",
  },
  {
    href: "/catalog/generated/best-implementations.json",
    title: "Best Implementations",
    description: "Ranked candidate implementations for each global capability.",
  },
  {
    href: "/catalog/generated/validation-report.json",
    title: "Validation Report",
    description: "Schema and evidence-path validation results for generated scans, manifests, and indexes.",
  },
]

export default async function ApiDocsPage() {
  const stats = await getCatalogStats()

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="flex-1">
        <FadeIn className="border-b border-white/5 bg-accent/5">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="font-mono text-sm text-accent">/api/docs</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Catalog API and Public Artifacts
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              The catalog is a static, public read-only API. Every artifact below is generated from the same schema-validated local catalog used to render the UI.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <Metric label="Repositories" value={stats.totalRepositories} />
              <Metric label="Capabilities" value={stats.totalCapabilities} />
              <Metric label="Implementations" value={stats.capabilityImplementations ?? 0} />
              <Metric label="Validation failures" value={stats.validationFailures ?? 0} />
            </div>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {artifacts.map((artifact) => (
              <a key={artifact.href} href={artifact.href} className="glass group rounded-lg p-5 hover:border-accent/40 hover:bg-card">
                <div className="flex items-start justify-between gap-4">
                  <FileJson className="h-5 w-5 text-accent" />
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{artifact.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{artifact.description}</p>
                <p className="mt-4 break-all font-mono text-xs text-accent">{artifact.href}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <Braces className="h-5 w-5 text-accent" />
                Discovery Files
              </div>
              <div className="mt-4 grid gap-2 text-sm">
                {["/api/health", "/api/v1/health", "/llms.txt", "/llms-full.txt", "/llms-index.json", "/openapi.yaml", "/sitemap.xml", "/sitemap-index.xml", "/rss.xml", "/feed.xml", "/atom.xml", "/robots.txt", "/.well-known/trust.json", "/.well-known/agents.json", "/.well-known/mcp.json", "/.well-known/ai-plugin.json", "/.well-known/security.txt"].map((href) => (
                  <a key={href} href={href} className="rounded bg-black/20 px-3 py-2 font-mono text-accent hover:underline">
                    {href}
                  </a>
                ))}
              </div>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <Network className="h-5 w-5 text-accent" />
                Static Contract
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Public read-only catalog artifacts are served directly from the static Vercel output.</li>
                <li>Mutating catalog generation and repair actions are not exposed by this deployment.</li>
                <li>Source evidence is preserved as paths and summaries; secret values are not published.</li>
                <li>Use `PLATPHORM_API_KEY` only for future protected catalog mutation endpoints.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="glass rounded-lg p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-2 text-2xl font-black text-white">{typeof value === "number" ? value.toLocaleString() : value}</p>
    </div>
  )
}

import Link from "next/link"
import { notFound } from "next/navigation"
import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { loadGeneratedRepositories, loadRepositoryCatalog } from "@/lib/data"
import { ArrowLeft, ExternalLink, FileCode2, ShieldAlert } from "lucide-react"

export async function generateStaticParams() {
  const repos = await loadGeneratedRepositories()
  return repos.map((repo) => ({ id: repo.id }))
}

export default async function RepositoryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const manifest = await loadRepositoryCatalog(id)
  if (!manifest) notFound()

  const githubUrl = manifest.repo.remote_url?.startsWith("git@github.com:")
    ? manifest.repo.remote_url.replace("git@github.com:", "https://github.com/").replace(/\.git$/, "")
    : manifest.repo.remote_url

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="flex-1">
        <FadeIn className="border-b border-white/5 bg-accent/5">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <Link href="/repositories" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to repositories
            </Link>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <p className="font-mono text-sm text-accent">{manifest.repo.id}</p>
                <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {manifest.repo.name.replace(/^mbarbine__|^ph3ar__/, "")}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">{manifest.repo.description}</p>
              </div>
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm text-foreground hover:border-accent">
                  GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <Metric label="Capabilities" value={manifest.capabilities.length} />
              <Metric label="Risks" value={manifest.repository_risks.length} />
              <Metric label="Maturity" value={manifest.repo.maturity} />
              <Metric label="Confidence" value={manifest.repo.confidence} />
            </div>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <section className="space-y-6">
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <FileCode2 className="h-5 w-5 text-accent" />
                Capabilities
              </div>
              <div className="mt-5 grid gap-3">
                {manifest.capabilities.map((capability) => (
                  <Link
                    key={capability.id}
                    href={`/capabilities/${encodeURIComponent(capability.id)}`}
                    className="rounded-lg border border-white/10 bg-black/20 p-4 hover:border-accent/40 hover:bg-card"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-foreground">{capability.name}</p>
                        <p className="mt-1 font-mono text-xs text-accent">{capability.id}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">{capability.type}</span>
                        <span className="rounded-full bg-accent/10 px-2 py-1 text-accent">{capability.reuse.reusable}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{capability.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {capability.source_paths.slice(0, 4).map((sourcePath) => (
                        <span key={sourcePath} className="rounded bg-black/30 px-2 py-1 font-mono text-xs text-muted-foreground">
                          {sourcePath}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="glass rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white">Repository Shape</h2>
              <div className="mt-4 space-y-3 text-sm">
                <Info label="Language" value={manifest.repo.primary_language ?? "unknown"} />
                <Info label="Frameworks" value={manifest.repo.frameworks.join(", ") || "none detected"} />
                <Info label="Package manager" value={manifest.repo.package_manager ?? "unknown"} />
                <Info label="Databases" value={manifest.repo.databases.join(", ") || "none detected"} />
                <Info label="Deployment" value={manifest.repo.deployment.join(", ") || "none detected"} />
              </div>
            </div>

            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <ShieldAlert className="h-5 w-5 text-amber-400" />
                Risks and Gaps
              </div>
              <div className="mt-4 space-y-3">
                {manifest.repository_risks.length ? (
                  manifest.repository_risks.map((risk) => (
                    <div key={risk.id} className="rounded-lg border border-white/10 bg-black/20 p-3">
                      <p className="text-sm font-medium text-foreground">[{risk.severity}] {risk.summary}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{risk.recommendation}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No repository-level risks recorded.</p>
                )}
                {manifest.catalog_quality.missing_evidence.map((gap) => (
                  <p key={gap} className="rounded bg-black/20 px-3 py-2 text-xs text-muted-foreground">{gap}</p>
                ))}
              </div>
            </div>
          </aside>
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

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-foreground">{value}</p>
    </div>
  )
}

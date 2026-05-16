import Link from "next/link"
import { notFound } from "next/navigation"
import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { loadCapabilityDetail, loadGlobalCapabilityIndex } from "@/lib/data"
import { catalogRepoHref, routeSlug } from "@/lib/routing"
import { AlertTriangle, ArrowLeft, CheckCircle2, GitBranch, ShieldCheck } from "lucide-react"

export async function generateStaticParams() {
  const data = await loadGlobalCapabilityIndex()
  return data.capabilities.map((capability) => ({ id: routeSlug(capability.id) }))
}

export default async function CapabilityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const capability = await loadCapabilityDetail(id)
  if (!capability) notFound()

  const best = capability.recommended_source
  const implementations = capability.implementations
    .slice()
    .sort((a, b) => b.test_count - a.test_count || a.repo_id.localeCompare(b.repo_id))

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="flex-1">
        <FadeIn className="border-b border-white/5 bg-accent/5">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <Link href="/capabilities" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to capabilities
            </Link>
            <div className="mt-6 max-w-4xl">
              <p className="font-mono text-sm text-accent">{capability.id}</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
                {capability.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{capability.summary}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <Metric label="Implementations" value={capability.implementations.length} />
              <Metric label="Reuse score" value={capability.reuse_score} />
              <Metric label="Type" value={capability.type} />
              <Metric label="Sources" value={capability.source_repos.length} />
            </div>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <section className="space-y-6">
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <GitBranch className="h-5 w-5 text-accent" />
                Implementations
              </div>
              <div className="mt-5 space-y-3">
                {implementations.map((implementation) => (
                  <Link
                    key={implementation.repo_id}
                    href={catalogRepoHref(implementation.repo_id)}
                    className="block rounded-lg border border-white/10 bg-black/20 p-4 hover:border-accent/40 hover:bg-card"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-foreground">{implementation.repo_name}</p>
                        <p className="mt-1 font-mono text-xs text-muted-foreground">{implementation.repo_id}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full bg-accent/10 px-2 py-1 text-accent">{implementation.maturity}</span>
                        <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">{implementation.confidence}</span>
                        <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">{implementation.reuse}</span>
                      </div>
                    </div>
                    <div className="mt-3 grid gap-2 text-xs text-muted-foreground sm:grid-cols-3">
                      <span>{implementation.source_paths.length} source paths</span>
                      <span>{implementation.test_count} tests</span>
                      <span>{implementation.risk_count} risk findings</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                Recommended Source
              </div>
              {best ? (
                <div className="mt-4">
                  <Link href={catalogRepoHref(best.repo_id)} className="font-mono text-sm text-accent hover:underline">
                    {best.repo_id}
                  </Link>
                  <p className="mt-3 text-5xl font-black text-white">{best.score}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{best.reason}</p>
                  <div className="mt-4 space-y-2">
                    {best.source_paths.slice(0, 8).map((sourcePath) => (
                      <p key={sourcePath} className="rounded bg-black/30 px-2 py-1 font-mono text-xs text-muted-foreground">
                        {sourcePath}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">No source recommendation is available.</p>
              )}
            </div>

            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                {capability.risk_summary.includes("No capability-specific") ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                )}
                Risk Summary
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{capability.risk_summary}</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white">Maturity Distribution</h2>
              <div className="mt-4 space-y-2">
                {Object.entries(capability.maturity_distribution).map(([maturity, count]) => (
                  <div key={maturity} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{maturity}</span>
                    <span className="font-medium text-foreground">{count}</span>
                  </div>
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

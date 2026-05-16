import Link from "next/link"
import { notFound } from "next/navigation"
import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { loadComponentDetail, loadComponentIndex, loadGeneratedRepositories } from "@/lib/data"
import { catalogRepoHref, componentHref, routeSlug } from "@/lib/routing"
import { ArrowLeft, Boxes, Check, X } from "lucide-react"

export async function generateStaticParams() {
  const data = await loadComponentIndex()
  return data.components.map((component) => ({ id: routeSlug(component.id) }))
}

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [component, repos] = await Promise.all([
    loadComponentDetail(id),
    loadGeneratedRepositories(),
  ])
  if (!component) notFound()

  const repo = repos.find((candidate) => {
    const shortName = candidate.name.split("__").at(-1)
    return shortName === component.repo || candidate.name === component.repo
  })

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="flex-1">
        <FadeIn className="border-b border-white/5 bg-accent/5">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <Link href="/components" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to components
            </Link>
            <div className="mt-6 max-w-4xl">
              <p className="font-mono text-sm text-accent">{component.id}</p>
              <h1 className="mt-2 flex items-center gap-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                <Boxes className="h-9 w-9 text-accent" />
                {component.name}
              </h1>
              <p className="mt-4 font-mono text-sm text-muted-foreground">{component.path}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <Metric label="Component score" value={component.component_score} />
              <Metric label="Extraction score" value={component.extraction_score} />
              <Metric label="Usage" value={component.usage} />
              <Metric label="Duplicates" value={component.duplicates} />
            </div>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <section className="glass rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white">Reuse Evidence</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Info label="Repository" value={component.repo} />
              <Info label="Framework" value={component.framework} />
              <Info label="Classification" value={component.classification} />
              <Info label="Line count" value={String(component.line_count ?? "unknown")} />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <EvidenceList title="Exports" values={component.exports ?? []} />
              <EvidenceList title="Props" values={component.props ?? []} />
              <EvidenceList title="Imports" values={(component.imports ?? []).slice(0, 20)} />
              <EvidenceList title="Reasons" values={component.reasons ?? []} />
            </div>
          </section>

          <aside className="space-y-6">
            <div className="glass rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white">Source Links</h2>
              <div className="mt-4 space-y-3 text-sm">
                {repo ? (
                  <Link href={catalogRepoHref(repo.id)} className="block rounded bg-black/20 px-3 py-2 text-accent hover:underline">
                    {repo.name}
                  </Link>
                ) : (
                  <Link href={`/repositories?search=${encodeURIComponent(component.repo)}`} className="block rounded bg-black/20 px-3 py-2 text-accent hover:underline">
                    Search repository catalog
                  </Link>
                )}
                {component.repo_remote_url && (
                  <a href={component.repo_remote_url} target="_blank" rel="noopener noreferrer" className="block rounded bg-black/20 px-3 py-2 text-accent hover:underline">
                    Source repository
                  </a>
                )}
                <Link href={componentHref(component.id)} className="block rounded bg-black/20 px-3 py-2 text-muted-foreground">
                  Permalink
                </Link>
              </div>
            </div>

            <div className="glass rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white">Readiness</h2>
              <div className="mt-4 space-y-3 text-sm">
                <CheckLine label="Has test" value={component.has_test} />
                <CheckLine label="Has story" value={component.has_story} />
              </div>
              <div className="mt-5 space-y-2">
                {(component.blockers ?? []).map((blocker) => (
                  <p key={blocker} className="rounded bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
                    {blocker}
                  </p>
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
      <p className="mt-1 break-words text-foreground">{value}</p>
    </div>
  )
}

function EvidenceList({ title, values }: { title: string; values: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-2 space-y-2">
        {values.length ? (
          values.map((value) => (
            <p key={value} className="rounded bg-black/20 px-3 py-2 font-mono text-xs text-muted-foreground">
              {value}
            </p>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">None detected.</p>
        )}
      </div>
    </div>
  )
}

function CheckLine({ label, value }: { label: string; value?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      {value ? <Check className="h-4 w-4 text-emerald-400" /> : <X className="h-4 w-4 text-muted-foreground" />}
    </div>
  )
}

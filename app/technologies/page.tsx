import Link from "next/link"
import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { Cpu, Search, Sparkles } from "lucide-react"
import { loadGithubCensus } from "@/lib/catalog-runtime"

interface SearchParams {
  q?: string
}

export default async function TechnologiesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const { q } = await searchParams
  const census = await loadGithubCensus()

  if (!census) {
    return (
      <div className="flex min-h-screen flex-col">
        <TopBar />
        <main className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
          <div className="glass rounded-lg p-8">
            <p className="text-sm font-mono text-accent">/technologies</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Technologies</h1>
            <p className="mt-3 text-muted-foreground">
              Technology census is not available yet. Run <code>pnpm catalog:github</code>
              to build the repository evidence first.
            </p>
            <a
              href="/api/v1/catalog/census"
              className="mt-4 inline-flex rounded-md border border-white/10 px-3 py-2 text-sm text-accent hover:border-accent"
            >
              Check /api/v1/catalog/census
            </a>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const query = q?.toLowerCase().trim() ?? ""
  const technologies = [...census.technologies]
    .filter((entry) => (query ? `${entry.name} ${entry.category}`.toLowerCase().includes(query) : true))
    .sort((a, b) => b.repositories - a.repositories)

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1">
        <FadeIn className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-accent">/technologies</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Technology Census
              </h1>
              <p className="mt-3 text-muted-foreground">
                GitHub-derived technology detection grouped by repository-wide evidence and evidence counts.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cpu className="h-4 w-4" />
              {technologies.length} technology signals
              <Sparkles className="ml-3 h-4 w-4" />
              {census.repositories.length} repositories
            </div>
          </div>

          <form className="mb-4 grid gap-2 sm:flex sm:items-center">
            <label htmlFor="technology-filter" className="text-sm font-mono text-muted-foreground">
              Filter:
            </label>
            <div className="flex max-w-xl items-center gap-2 rounded-md border border-white/10 bg-card px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                id="technology-filter"
                name="q"
                defaultValue={q ?? ""}
                placeholder="e.g. nextjs, node.js, react"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </form>

          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="min-w-full divide-y divide-border text-sm">
              <thead className="bg-black/20">
                <tr>
                  <th className="px-4 py-3 text-left">Technology</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Repositories</th>
                  <th className="px-4 py-3 text-left">Signals</th>
                  <th className="px-4 py-3 text-left">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {technologies.map((entry) => {
                  const evidences = entry.repositoryIds.slice(0, 3)
                  return (
                    <tr key={`${entry.category}:${entry.name}`} className="odd:bg-white/[0.02]">
                      <td className="px-4 py-3 font-mono text-foreground">
                        {entry.name}
                      </td>
                      <td className="px-4 py-3">{entry.category}</td>
                      <td className="px-4 py-3">{entry.repositories}</td>
                      <td className="px-4 py-3">{entry.evidenceSources.join(", ") || "none"}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {evidences.length > 0 ? (
                            evidences.map((repoId) => (
                              <Link
                                key={repoId}
                                href={`/repositories/${encodeURIComponent(repoId)}`}
                                className="rounded-full border border-border px-2 py-1 text-xs hover:border-accent"
                              >
                                {repoId}
                              </Link>
                            ))
                          ) : (
                            <span className="text-muted-foreground">no evidence</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
                {technologies.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-muted-foreground" colSpan={5}>
                      No technologies matched {query ? `"${query}"` : "your request"}.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

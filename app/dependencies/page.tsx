import Link from "next/link"
import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { BookOpen, PackageCheck, Router, Search } from "lucide-react"
import { loadGithubCensus } from "@/lib/catalog-runtime"

interface SearchParams {
  q?: string
}

export default async function DependenciesPage({
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
            <p className="text-sm font-mono text-accent">/dependencies</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Dependencies</h1>
            <p className="mt-3 text-muted-foreground">
              Dependency census data is not available yet. Run <code>pnpm catalog:github</code>
              to generate the github-native dependency inventory.
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
  const dependencies = [...census.packages]
    .filter((entry) => (query ? entry.name.toLowerCase().includes(query) : true))
    .sort((a, b) => b.repositories - a.repositories)

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1">
        <FadeIn className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-accent">/dependencies</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Dependency Census
              </h1>
              <p className="mt-3 text-muted-foreground">
                Evidence-backed package inventory from GitHub SBOM and dependency graph.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <PackageCheck className="h-4 w-4" />
              {census.packages.length} dependencies
              <Router className="ml-3 h-4 w-4" />
              {census.repositories.length} repositories
            </div>
          </div>

          <form className="mb-4 grid gap-2 sm:flex sm:items-center">
            <label htmlFor="dependency-filter" className="text-sm font-mono text-muted-foreground">
              Filter:
            </label>
            <div className="flex max-w-xl items-center gap-2 rounded-md border border-white/10 bg-card px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                id="dependency-filter"
                name="q"
                defaultValue={q ?? ""}
                placeholder="e.g. react, next, zod"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </form>

          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="min-w-full divide-y divide-border text-sm">
              <thead className="bg-black/20">
                <tr>
                  <th className="px-4 py-3 text-left">Package</th>
                  <th className="px-4 py-3 text-left">Repositories</th>
                  <th className="px-4 py-3 text-left">Production</th>
                  <th className="px-4 py-3 text-left">Version Drift</th>
                  <th className="px-4 py-3 text-left">Dominant Version</th>
                  <th className="px-4 py-3 text-left">Repo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {dependencies.map((entry) => (
                  <tr key={entry.name} className="odd:bg-white/[0.02]">
                    <td className="px-4 py-3 font-mono text-foreground">{entry.name}</td>
                    <td className="px-4 py-3">{entry.repositories}</td>
                    <td className="px-4 py-3">{entry.productionUsage} ({entry.productionRepositories})</td>
                    <td className="px-4 py-3">{entry.versionDrift ? "drift" : "single"}</td>
                    <td className="px-4 py-3">{entry.dominantVersion ?? "unknown"}</td>
                    <td className="px-4 py-3">
                      {entry.repositoryIds.slice(0, 3).map((repoId) => (
                        <Link
                          key={repoId}
                          href={`/repositories/${encodeURIComponent(repoId)}`}
                          className="mr-2 inline-block rounded-full border border-border px-2 py-1 text-xs hover:border-accent"
                        >
                          {repoId}
                        </Link>
                      ))}
                    </td>
                  </tr>
                ))}
                {dependencies.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-muted-foreground" colSpan={6}>
                      No dependencies matched {query ? `"${query}"` : "your request"}.
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

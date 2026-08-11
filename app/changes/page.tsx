import Link from "next/link"
import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { FileClock, Search } from "lucide-react"
import { listCatalogPublications } from "@/lib/catalog-store"

interface SearchParams {
  status?: "stored" | "unchanged" | "not_persisted"
}

export default async function ChangesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const { status } = await searchParams
  const publications = await listCatalogPublications()
  const selectedStatus = status?.trim().toLowerCase() as "stored" | "unchanged" | "not_persisted" | undefined
  const filtered = selectedStatus ? publications.filter((entry) => entry.status === selectedStatus) : publications

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="flex-1">
        <FadeIn className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-accent">/changes</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Publication Change Log
              </h1>
              <p className="mt-3 max-w-3xl text-muted-foreground">
                Repository-local catalog publication updates are stored by repository owner/repo/sha and surfaced with trusted integrity hashes.
              </p>
            </div>
            <a
              href="/api/v1/catalog/publications"
              className="rounded-md border border-white/10 px-3 py-2 text-sm text-accent hover:border-accent"
            >
              API endpoint
            </a>
          </div>

          <form className="mb-4 grid gap-2 sm:flex sm:items-center">
            <label htmlFor="status-filter" className="text-sm font-mono text-muted-foreground">
              Filter status:
            </label>
            <div className="flex max-w-xl items-center gap-2 rounded-md border border-white/10 bg-card px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                id="status-filter"
                name="status"
                defaultValue={status ?? ""}
                placeholder="stored | unchanged | not_persisted"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </form>

          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="min-w-full divide-y divide-border text-sm">
              <thead className="bg-black/20">
                <tr>
                  <th className="px-4 py-3 text-left">Repository</th>
                  <th className="px-4 py-3 text-left">SHA</th>
                  <th className="px-4 py-3 text-left">Files</th>
                  <th className="px-4 py-3 text-left">Runtime</th>
                  <th className="px-4 py-3 text-left">Warnings</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filtered.map((entry) => (
                  <tr key={`${entry.fullName}:${entry.sha}`} className="odd:bg-white/[0.02]">
                    <td className="px-4 py-3 font-mono text-foreground">{entry.fullName}</td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {entry.sha.slice(0, 12)}
                    </td>
                    <td className="px-4 py-3">{entry.filesAnalyzed}</td>
                    <td className="px-4 py-3">{entry.durationMs} ms</td>
                    <td className="px-4 py-3">{entry.warnings}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs">
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={entry.route}
                        className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-accent hover:border-accent"
                      >
                        <FileClock className="h-3.5 w-3.5" />
                        publication
                      </Link>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-muted-foreground" colSpan={7}>
                      No publications matched this filter.
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

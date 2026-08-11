import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { FadeIn } from "@/components/ui/fade-in"
import { CalendarClock, FolderOutput, Radar, ServerCog } from "lucide-react"
import { listGeneratedCatalogArtifacts, listPublicationArtifactFiles } from "@/lib/catalog-runtime"

export default async function ScansPage() {
  const [generatedArtifacts, publicationArtifacts] = await Promise.all([
    listGeneratedCatalogArtifacts(),
    listPublicationArtifactFiles(),
  ])

  const generatedAvailable = generatedArtifacts.filter((entry) => entry.exists)
  const generatedMissing = generatedArtifacts.filter((entry) => !entry.exists)

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="flex-1">
        <FadeIn className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-mono text-accent">/scans</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Scan and Publication Artifacts
              </h1>
              <p className="mt-3 text-muted-foreground">
                Inventory of generated GitHub census outputs and publication files that are currently available in this deployment.
              </p>
            </div>
            <a
              href="/api/v1/scans"
              className="shrink-0 rounded-md border border-white/10 px-3 py-2 text-sm text-accent hover:border-accent"
            >
              API endpoint
            </a>
          </div>

          <section className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-lg p-5">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                <Radar className="h-5 w-5 text-accent" />
                Generated Artifacts
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Source path: <code className="text-foreground">global-capability-catalog/catalog/generated</code>
              </p>
              <p className="mt-4">
                <span className="rounded bg-black/20 px-2 py-1 text-xs">
                  {generatedAvailable.length}/{generatedArtifacts.length} files present
                </span>
              </p>
            </div>
            <div className="glass rounded-lg p-5">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                <FolderOutput className="h-5 w-5 text-accent" />
                Publication Outputs
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Source path: <code className="text-foreground">global-capability-catalog/catalog/publications</code>
              </p>
              <p className="mt-4">
                <span className="rounded bg-black/20 px-2 py-1 text-xs">
                  {publicationArtifacts.length} publication JSON files available
                </span>
              </p>
            </div>
          </section>

          <div className="grid gap-4 lg:grid-cols-2">
            <section className="glass rounded-lg p-5">
              <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <ServerCog className="h-5 w-5 text-accent" />
                Generated Files
              </div>
              <div className="space-y-2 text-sm">
                {generatedArtifacts.map((entry) => (
                  <a
                    key={entry.name}
                    href={`/catalog/generated/${entry.name}`}
                    className={`flex items-center justify-between rounded px-3 py-2 ${entry.exists ? "bg-black/20" : "bg-black/10"}`}
                  >
                    <span className="font-mono text-accent">{entry.name}</span>
                    <span className="text-muted-foreground">
                      {entry.exists ? `${entry.bytes ?? "?"} B` : "missing"}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section className="glass rounded-lg p-5">
              <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <CalendarClock className="h-5 w-5 text-accent" />
                Publications
              </div>
              <div className="space-y-2 text-sm">
                {publicationArtifacts.length ? publicationArtifacts.map((entry) => (
                  <a
                    key={entry.name}
                    href={`/api/v1/catalog/publications/${encodeURIComponent(entry.name)}`}
                    className="block rounded bg-black/20 px-3 py-2 font-mono text-accent hover:bg-card"
                  >
                    {entry.name}
                    <span className="ml-3 text-xs text-muted-foreground">
                      {entry.bytes ? `${entry.bytes} B` : "unknown size"}
                    </span>
                  </a>
                )) : (
                  <div className="rounded bg-black/20 px-3 py-2 text-muted-foreground">
                    No publication artifacts in local repository yet.
                  </div>
                )}
                <div className="rounded bg-black/20 px-3 py-2 text-xs text-muted-foreground">
                  Missing generated artifacts: {generatedMissing.length}
                  {generatedMissing.length > 0 && (
                    <span className="ml-2 text-amber-300">
                      ({generatedMissing.slice(0, 3).map((entry) => entry.name).join(", ")})
                    </span>
                  )}
                </div>
              </div>
            </section>
          </div>
        </FadeIn>
      </main>
      <Footer />
    </div>
  )
}

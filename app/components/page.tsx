import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { ComponentsList } from "@/components/components-list"
import { FadeIn } from "@/components/ui/fade-in"
import { loadComponentIndex, loadGeneratedRepositories } from "@/lib/data"
import { catalogRepoHref } from "@/lib/routing"

export default async function ComponentsPage() {
  const [data, repos] = await Promise.all([
    loadComponentIndex(),
    loadGeneratedRepositories(),
  ])

  // Get unique classifications and frameworks
  const classifications = [
    ...new Set(data.components.map((c) => c.classification)),
  ].sort()
  const frameworks = [
    ...new Set(data.components.map((c) => c.framework)),
  ].sort()
  const repoHrefByName = Object.fromEntries(
    repos.flatMap((repo) => {
      const shortName = repo.name.split("__").at(-1) ?? repo.name
      return [
        [repo.name, catalogRepoHref(repo.id)],
        [shortName, catalogRepoHref(repo.id)],
      ]
    })
  )

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1">
        <FadeIn className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Components
            </h1>
            <p className="mt-3 text-lg text-muted-foreground font-light">
              Browse all {data.component_count.toLocaleString()} UI components
              discovered across repositories. Filter by classification,
              framework, or search by name.
            </p>
          </div>

          <ComponentsList
            components={data.components}
            classifications={classifications}
            frameworks={frameworks}
            repoHrefByName={repoHrefByName}
          />
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

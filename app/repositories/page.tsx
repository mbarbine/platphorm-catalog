import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { RepositoriesList } from "@/components/repositories-list"
import { FadeIn } from "@/components/ui/fade-in"
import {
  loadGeneratedRepositories,
  loadComponentIndex,
  getUniqueRepositories,
  toRepositoryCards,
} from "@/lib/data"

export default async function RepositoriesPage() {
  const [repoManifest, componentData] = await Promise.all([
    loadGeneratedRepositories(),
    loadComponentIndex(),
  ])

  const componentRepos = getUniqueRepositories(componentData.components)
  const repositories = toRepositoryCards(repoManifest, componentRepos)

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1">
        <FadeIn className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Repositories
            </h1>
            <p className="mt-3 text-lg text-muted-foreground font-light">
              Browse all {repositories.length} schema-validated repository manifests with
              their capabilities, components, maturity, confidence, source links, and risk counts.
            </p>
          </div>

          <RepositoriesList repositories={repositories} />
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

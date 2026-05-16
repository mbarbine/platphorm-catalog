import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { RepositoriesList } from "@/components/repositories-list"
import { FadeIn } from "@/components/ui/fade-in"
import {
  loadCapabilityCatalog,
  parseCapabilityIndex,
  loadRepositories,
  loadComponentIndex,
  getUniqueRepositories,
} from "@/lib/data"

export default async function RepositoriesPage() {
  const [capabilityMarkdown, repoManifest, componentData] = await Promise.all([
    loadCapabilityCatalog(),
    loadRepositories(),
    loadComponentIndex(),
  ])

  const { repositories: capRepos } = parseCapabilityIndex(capabilityMarkdown)
  const componentRepos = getUniqueRepositories(componentData.components)

  // Merge capability and component data
  const repoMap = new Map<
    string,
    {
      id: string
      name: string
      capabilityCount: number
      componentCount: number
      language?: string | null
      htmlUrl?: string
      isPrivate?: boolean
    }
  >()

  // Add capability repos
  for (const r of capRepos) {
    repoMap.set(r.name, {
      id: r.id,
      name: r.name,
      capabilityCount: r.capabilityCount,
      componentCount: 0,
    })
  }

  // Add component counts
  for (const r of componentRepos) {
    const existing = repoMap.get(r.name)
    if (existing) {
      existing.componentCount = r.componentCount
    } else {
      repoMap.set(r.name, {
        id: r.name,
        name: r.name,
        capabilityCount: 0,
        componentCount: r.componentCount,
      })
    }
  }

  // Enrich with manifest data
  for (const r of repoManifest) {
    const name = r.full_name.replace("/", "__")
    const existing = repoMap.get(name)
    if (existing) {
      existing.language = r.language
      existing.htmlUrl = r.html_url
      existing.isPrivate = r.private
    }
  }

  const repositories = Array.from(repoMap.values())

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
              Browse all {repositories.length} repositories in the catalog with
              their capabilities and components.
            </p>
          </div>

          <RepositoriesList repositories={repositories} />
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

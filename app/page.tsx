import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { StatCard } from "@/components/ui/stat-card"
import { RepositoryCard } from "@/components/ui/repository-card"
import { CapabilityCard } from "@/components/ui/capability-card"
import { ComponentCard } from "@/components/ui/component-card"
import {
  getCatalogStats,
  loadComponentIndex,
  loadCapabilities,
  loadCapabilityCatalog,
  parseCapabilityIndex,
  getUniqueRepositories,
} from "@/lib/data"
import { Database, FolderGit2, Cpu, Layers } from "lucide-react"
import Link from "next/link"

export default async function HomePage() {
  const [stats, componentData, capabilities, capabilityMarkdown] =
    await Promise.all([
      getCatalogStats(),
      loadComponentIndex(),
      loadCapabilities(),
      loadCapabilityCatalog(),
    ])

  const { repositories: capRepos } = parseCapabilityIndex(capabilityMarkdown)
  const uniqueRepos = getUniqueRepositories(componentData.components)

  // Get top items for preview
  const topRepos = capRepos.slice(0, 6)
  const topCapabilities = capabilities.slice(0, 6)
  const topComponents = componentData.components.slice(0, 6)

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Human / Machine Catalog
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                A comprehensive index of repositories, capabilities, and
                components. Designed for both human browsing and machine
                scanning.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard
                title="Components"
                value={stats.totalComponents}
                icon={<Layers className="h-5 w-5" />}
              />
              <StatCard
                title="Repositories"
                value={stats.totalRepositories}
                icon={<FolderGit2 className="h-5 w-5" />}
              />
              <StatCard
                title="Capabilities"
                value={stats.totalCapabilities}
                icon={<Cpu className="h-5 w-5" />}
              />
              <StatCard
                title="Unique Repos"
                value={uniqueRepos.length}
                icon={<Database className="h-5 w-5" />}
              />
            </div>
          </div>
        </section>

        {/* Classification Breakdown */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-foreground">
              Component Classifications
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Distribution of components by classification status
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Object.entries(stats.classifications).map(([name, count]) => (
                <div
                  key={name}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <p className="text-2xl font-bold text-foreground">
                    {count.toLocaleString()}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground capitalize">
                    {name.replace(/-/g, " ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Capability Domains */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-foreground">
              Top Capability Domains
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Most common capability types across repositories
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {Object.entries(stats.topCapabilityDomains)
                .slice(0, 12)
                .map(([domain, count]) => (
                  <Link
                    key={domain}
                    href={`/capabilities?type=${encodeURIComponent(domain)}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-accent hover:bg-card/80"
                  >
                    <span className="text-foreground">{domain}</span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {count}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Top Repositories */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Top Repositories
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Repositories with the most capabilities
                </p>
              </div>
              <Link
                href="/repositories"
                className="text-sm text-accent hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topRepos.map((repo) => (
                <RepositoryCard
                  key={repo.id}
                  name={repo.name}
                  capabilityCount={repo.capabilityCount}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Preview */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Capabilities
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Detected technical capabilities across repositories
                </p>
              </div>
              <Link
                href="/capabilities"
                className="text-sm text-accent hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topCapabilities.map((cap) => (
                <CapabilityCard
                  key={cap.id}
                  id={cap.id}
                  name={cap.name}
                  type={cap.type}
                  description={cap.description}
                  reuseScore={cap.reuse_score}
                  implementations={cap.implementations}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Components Preview */}
        <section>
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Components
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Reusable UI components discovered across repositories
                </p>
              </div>
              <Link
                href="/components"
                className="text-sm text-accent hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topComponents.map((comp) => (
                <ComponentCard
                  key={comp.id}
                  id={comp.id}
                  name={comp.name}
                  path={comp.path}
                  repo={comp.repo}
                  framework={comp.framework}
                  classification={comp.classification}
                  componentScore={comp.component_score}
                  duplicates={comp.duplicates}
                  usage={comp.usage}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

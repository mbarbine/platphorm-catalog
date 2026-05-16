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
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/fade-in"

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
        <section className="border-b border-white/5 bg-gradient-to-b from-accent/10 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative z-10">
            <FadeIn className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl text-balance bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Human / Machine Catalog
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground text-pretty font-light">
                A comprehensive index of repositories, capabilities, and
                components. Designed for both human browsing and machine
                scanning.
              </p>
            </FadeIn>

            {/* Stats Grid */}
            <StaggerChildren className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
              <StaggerItem><StatCard
                title="Components"
                value={stats.totalComponents}
                icon={<Layers className="h-6 w-6" />}
              /></StaggerItem>
              <StaggerItem><StatCard
                title="Repositories"
                value={stats.totalRepositories}
                icon={<FolderGit2 className="h-6 w-6" />}
              /></StaggerItem>
              <StaggerItem><StatCard
                title="Capabilities"
                value={stats.totalCapabilities}
                icon={<Cpu className="h-6 w-6" />}
              /></StaggerItem>
              <StaggerItem><StatCard
                title="Unique Repos"
                value={uniqueRepos.length}
                icon={<Database className="h-6 w-6" />}
              /></StaggerItem>
            </StaggerChildren>
          </div>
        </section>

        {/* Classification Breakdown */}
        <FadeIn className="border-b border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Component Classifications
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Distribution of components by classification status
            </p>
            <StaggerChildren className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
              {Object.entries(stats.classifications).map(([name, count]) => (
                <StaggerItem key={name}>
                  <div className="glass rounded-xl p-6 group transition-all hover:border-accent/30 hover:shadow-lg hover:-translate-y-1">
                    <p className="text-3xl font-black text-white group-hover:text-accent transition-colors">
                      {count.toLocaleString()}
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground capitalize">
                      {name.replace(/-/g, " ")}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>

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
        <FadeIn className="border-b border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Top Repositories
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Repositories with the most capabilities
                </p>
              </div>
              <Link
                href="/repositories"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View all &rarr;
              </Link>
            </div>
            <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topRepos.map((repo) => (
                <StaggerItem key={repo.id}>
                  <RepositoryCard
                    name={repo.name}
                    capabilityCount={repo.capabilityCount}
                  />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>

        {/* Capabilities Preview */}
        <FadeIn className="border-b border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Capabilities
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Detected technical capabilities across repositories
                </p>
              </div>
              <Link
                href="/capabilities"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View all &rarr;
              </Link>
            </div>
            <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topCapabilities.map((cap) => (
                <StaggerItem key={cap.id}>
                  <CapabilityCard
                    id={cap.id}
                    name={cap.name}
                    type={cap.type}
                    description={cap.description}
                    reuseScore={cap.reuse_score}
                    implementations={cap.implementations}
                  />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>

        {/* Components Preview */}
        <FadeIn className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Components
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Reusable UI components discovered across repositories
                </p>
              </div>
              <Link
                href="/components"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                View all &rarr;
              </Link>
            </div>
            <StaggerChildren className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topComponents.map((comp) => (
                <StaggerItem key={comp.id}>
                  <ComponentCard
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
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { CapabilitiesList } from "@/components/capabilities-list"
import { loadCapabilities } from "@/lib/data"

export default async function CapabilitiesPage() {
  const capabilities = await loadCapabilities()

  // Get unique types
  const types = [...new Set(capabilities.map((c) => c.type))].sort()

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Capabilities
            </h1>
            <p className="mt-2 text-muted-foreground">
              Browse all {capabilities.length} detected capabilities across
              repositories. Each capability represents a technical feature or
              integration pattern.
            </p>
          </div>

          <CapabilitiesList capabilities={capabilities} types={types} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

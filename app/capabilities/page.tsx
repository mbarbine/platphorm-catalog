import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { CapabilitiesList } from "@/components/capabilities-list"
import { FadeIn } from "@/components/ui/fade-in"
import { loadCapabilities } from "@/lib/data"

export default async function CapabilitiesPage() {
  const capabilities = await loadCapabilities()

  // Get unique types
  const types = [...new Set(capabilities.map((c) => c.type))].sort()

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1">
        <FadeIn className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Capabilities
            </h1>
            <p className="mt-3 text-lg text-muted-foreground font-light">
              Browse all {capabilities.length} detected capabilities across
              repositories. Each capability represents a technical feature or
              integration pattern.
            </p>
          </div>

          <CapabilitiesList capabilities={capabilities} types={types} />
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

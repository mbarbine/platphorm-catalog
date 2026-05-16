import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { ComponentsList } from "@/components/components-list"
import { loadComponentIndex } from "@/lib/data"

export default async function ComponentsPage() {
  const data = await loadComponentIndex()

  // Get unique classifications and frameworks
  const classifications = [
    ...new Set(data.components.map((c) => c.classification)),
  ].sort()
  const frameworks = [
    ...new Set(data.components.map((c) => c.framework)),
  ].sort()

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Components
            </h1>
            <p className="mt-2 text-muted-foreground">
              Browse all {data.component_count.toLocaleString()} UI components
              discovered across repositories. Filter by classification,
              framework, or search by name.
            </p>
          </div>

          <ComponentsList
            components={data.components}
            classifications={classifications}
            frameworks={frameworks}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

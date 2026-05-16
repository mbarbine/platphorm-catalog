import Link from "next/link"
import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <p className="font-mono text-sm text-accent">Catalog route not found</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white">
          This catalog item is not in the generated index.
        </h1>
        <p className="mt-4 text-muted-foreground">
          The main catalog, machine artifacts, and generated detail pages are available from the current validated output.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
            Overview
          </Link>
          <Link href="/api/docs" className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
            API Docs
          </Link>
          <a href="/catalog/generated/search-index.json" className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
            Search Index
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function Footer() {
  const generatedAt = "2026-05-16"

  return (
    <footer className="border-t border-border bg-muted/50 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono text-xs bg-card px-2 py-1 rounded">
              v1.0.0
            </span>
            <span>PlatPhorm Catalog</span>
            <span className="hidden sm:inline">Generated {generatedAt}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="/api/docs"
              className="hover:text-foreground transition-colors"
            >
              API
            </a>
            <a
              href="/dependencies"
              className="hover:text-foreground transition-colors"
            >
              Dependencies
            </a>
            <a
              href="/technologies"
              className="hover:text-foreground transition-colors"
            >
              Technologies
            </a>
            <a
              href="/changes"
              className="hover:text-foreground transition-colors"
            >
              Changes
            </a>
            <a
              href="/llms.txt"
              className="hover:text-foreground transition-colors"
            >
              llms.txt
            </a>
            <a
              href="/scans"
              className="hover:text-foreground transition-colors"
            >
              Scans
            </a>
            <a
              href="/catalog/generated/search-index.json"
              className="hover:text-foreground transition-colors"
            >
              Search JSON
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

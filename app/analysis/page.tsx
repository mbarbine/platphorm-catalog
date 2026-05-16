import { TopBar } from "@/components/layout/top-bar"
import { Footer } from "@/components/layout/footer"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/fade-in"
import { loadExecutiveSummary, loadAnalysisInventory } from "@/lib/analysis"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { FileSpreadsheet, Download, FileJson } from "lucide-react"

function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export default async function AnalysisPage() {
  const [summary, inventory] = await Promise.all([
    loadExecutiveSummary(),
    loadAnalysisInventory()
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1 bg-background">
        <FadeIn className="border-b border-white/5 bg-gradient-to-b from-accent/5 to-transparent relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Platform Analysis
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground font-light">
              Executive summary and raw artifact datasets generated from analyzing the global capability catalog and repository components.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-3">
          {/* Executive Summary Markdown */}
          <FadeIn className="lg:col-span-2">
            <div className="glass rounded-lg p-6 sm:p-10 relative overflow-hidden">
              <div className="prose prose-invert prose-accent max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {summary}
                </ReactMarkdown>
              </div>
            </div>
          </FadeIn>

          {/* Artifacts Inventory */}
          <div className="space-y-6">
            <FadeIn>
              <h2 className="text-xl font-bold text-white tracking-tight">Artifact Datasets</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Raw data outputs available for programmatic consumption.
              </p>
            </FadeIn>
            
            <StaggerChildren className="grid gap-3">
              {inventory.map((file) => (
                <StaggerItem key={file.name}>
                  <div className="glass group flex items-center justify-between rounded-lg p-4 transition-all hover:border-accent/30 hover:bg-card/80">
                    <div className="flex items-center gap-3 overflow-hidden">
                      {file.name.endsWith('.json') ? (
                        <FileJson className="h-5 w-5 shrink-0 text-amber-500" />
                      ) : (
                        <FileSpreadsheet className="h-5 w-5 shrink-0 text-emerald-500" />
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                          {file.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {formatBytes(file.size)}
                        </p>
                      </div>
                    </div>
                    <a
                      className="shrink-0 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-white transition-colors"
                      title={`Download ${file.name}`}
                      href={`/platform-analysis-output/${encodeURIComponent(file.name)}`}
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

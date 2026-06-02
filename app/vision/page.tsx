import Link from "next/link"
import {
  AlertTriangle,
  Archive,
  Camera,
  CheckCircle2,
  Cloud,
  Download,
  FileText,
  ShieldCheck,
  ShieldOff,
  Target,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { TopBar } from "@/components/layout/top-bar"
import { FadeIn } from "@/components/ui/fade-in"
import { loadVisionEvidencePack, loadVisionToolSelection } from "@/lib/data"
import { capabilityHref, catalogRepoHref } from "@/lib/routing"
import type { VisionOperatorTool } from "@/lib/types"

const toolIcons: Record<VisionOperatorTool["plugin"], LucideIcon> = {
  Browser: Camera,
  "PlatPhorm Content": Cloud,
  "PlatPhorm Docs": FileText,
}

export default async function VisionPage() {
  const [selection, evidencePack] = await Promise.all([
    loadVisionToolSelection(),
    loadVisionEvidencePack(),
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1">
        <FadeIn className="border-b border-white/5 bg-accent/5">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="font-mono text-sm text-accent">
              /api/vision/capabilities
            </p>
            <div className="mt-3 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {selection.vision.title}
                </h1>
                <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                  {selection.vision.site_purpose}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Metric
                  label="Repositories"
                  value={selection.source_catalog.repositories}
                />
                <Metric
                  label="Capabilities"
                  value={selection.source_catalog.global_capabilities}
                />
                <Metric
                  label="Tools"
                  value={selection.selected_tools.length}
                />
                <Metric
                  label="Gaps"
                  value={selection.missing_capability_ids.length}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <section className="grid gap-4 lg:grid-cols-3">
            {selection.selected_tools.map((tool) => {
              const Icon = toolIcons[tool.plugin]

              return (
                <article key={tool.id} className="glass rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-lg font-semibold text-white">
                          {tool.title}
                        </h2>
                        <p className="font-mono text-xs text-muted-foreground">
                          {tool.plugin}
                        </p>
                        {tool.platform_url && (
                          <a
                            href={tool.platform_url}
                            className="mt-1 block font-mono text-xs text-accent hover:underline"
                          >
                            {tool.platform_url}
                          </a>
                        )}
                      </div>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {tool.platform_fit}
                  </p>
                  <p className="mt-3 rounded-md border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
                    {tool.privacy_boundary}
                  </p>
                  <div className="mt-4 space-y-2">
                    {tool.capabilities.slice(0, 4).map((capability) => (
                      <CapabilityLine
                        key={capability.id}
                        id={capability.id}
                        name={capability.name}
                        implementations={capability.implementations}
                      />
                    ))}
                  </div>
                </article>
              )
            })}
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-bold text-white">
                  Mission Tracks
                </h2>
              </div>

              {selection.mission_tracks.map((track) => (
                <article key={track.id} className="glass rounded-lg p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {track.title}
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                        {track.vision_fit}
                      </p>
                    </div>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
                      {track.capabilities.length} mapped capabilities
                    </span>
                  </div>
                  <p className="mt-4 rounded-md border border-white/10 bg-black/20 px-3 py-2 text-xs text-muted-foreground">
                    {track.phase_one_boundary}
                  </p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {track.capabilities.map((capability) => (
                      <div
                        key={capability.id}
                        className="rounded-lg border border-white/10 bg-black/20 p-3"
                      >
                        <Link
                          href={capabilityHref(capability.id)}
                          className="block hover:text-accent"
                        >
                          <p className="font-medium text-foreground">
                            {capability.name}
                          </p>
                          <p className="mt-1 font-mono text-xs text-accent">
                            {capability.id}
                          </p>
                        </Link>
                        {capability.recommended_source && (
                          <div className="mt-3 text-xs text-muted-foreground">
                            <Link
                              href={catalogRepoHref(
                                capability.recommended_source.repo_id
                              )}
                              className="font-mono text-accent hover:underline"
                            >
                              {capability.recommended_source.repo_id}
                            </Link>
                            <p className="mt-1">
                              Score {capability.recommended_source.score}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-4">
              <div className="glass rounded-lg p-5">
                <div className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Download className="h-5 w-5 text-accent" />
                  Evidence Pack
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {evidencePack.summary}
                </p>
                <div className="mt-4 grid gap-2">
                  <a
                    href="/api/vision/evidence-pack"
                    className="rounded-md border border-border px-3 py-2 text-sm text-foreground hover:border-accent"
                  >
                    API preview
                  </a>
                  <a
                    href="/catalog/generated/vision-evidence-pack.json"
                    className="rounded-md border border-border px-3 py-2 text-sm text-foreground hover:border-accent"
                  >
                    Static JSON
                  </a>
                </div>
                <div className="mt-4 space-y-2">
                  {evidencePack.export_targets.map((target) => (
                    <div
                      key={target.id}
                      className="rounded-lg border border-white/10 bg-black/20 p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold text-foreground">
                          {target.title}
                        </p>
                        <span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
                          {target.status}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {target.note}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-md bg-black/20 px-3 py-2">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Not executed
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {evidencePack.not_executed.slice(0, 3).join(" ")}
                  </p>
                </div>
              </div>

              <div className="glass rounded-lg p-5">
                <div className="flex items-center gap-2 text-lg font-semibold text-white">
                  <ShieldOff className="h-5 w-5 text-amber-400" />
                  Protection Controls
                </div>
                <p className="mt-3 rounded-md border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
                  Enforcement off. Functionality-first mode is active while
                  the workflow is being proven.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {selection.protection_mode.note}
                </p>
                <div className="mt-4 space-y-3">
                  {selection.protection_controls.map((control) => (
                    <div
                      key={control.id}
                      className="rounded-lg border border-white/10 bg-black/20 p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold text-foreground">
                          {control.title}
                        </p>
                        <span className="rounded-full bg-amber-400/10 px-2 py-1 text-xs text-amber-200">
                          {control.enforcement}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {control.current_behavior}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-lg p-5">
                <div className="flex items-center gap-2 text-lg font-semibold text-white">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  Auth Boundary
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Protected catalog regeneration, scans, remediation,
                  connector writes, report publication, and workflow runs
                  require {selection.auth_boundary.protected_actions_require}.
                </p>
                <div className="mt-4 space-y-2">
                  {selection.auth_boundary.accepted_headers.map((header) => (
                    <p
                      key={header}
                      className="rounded bg-black/20 px-3 py-2 font-mono text-xs text-muted-foreground"
                    >
                      {header}
                    </p>
                  ))}
                </div>
              </div>

              <div className="glass rounded-lg p-5">
                <div className="flex items-center gap-2 text-lg font-semibold text-white">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  Claims Boundary
                </div>
                <div className="mt-4 space-y-3">
                  {selection.claims_boundary.map((claim) => (
                    <p key={claim} className="text-sm text-muted-foreground">
                      {claim}
                    </p>
                  ))}
                </div>
                <a
                  href="/catalog/generated/vision-tool-selection.json"
                  className="mt-5 inline-flex rounded-md border border-border px-3 py-2 text-sm text-foreground hover:border-accent"
                >
                  JSON selection
                </a>
              </div>

              <div className="glass rounded-lg p-5">
                <div className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Archive className="h-5 w-5 text-accent" />
                  Deferred Capabilities
                </div>
                <div className="mt-4 space-y-4">
                  {selection.deferred_capabilities.map((capability) => (
                    <div
                      key={capability.id}
                      className="rounded-lg border border-white/10 bg-black/20 p-3"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {capability.title}
                      </p>
                      <p className="mt-1 text-xs text-amber-200">
                        {capability.status}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {capability.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="glass rounded-lg p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-2xl font-black text-white">
        {typeof value === "number" ? value.toLocaleString() : value}
      </p>
    </div>
  )
}

function CapabilityLine({
  id,
  name,
  implementations,
}: {
  id: string
  name: string
  implementations: number
}) {
  return (
    <Link
      href={capabilityHref(id)}
      className="block rounded-md bg-black/20 px-3 py-2 hover:bg-card"
    >
      <p className="truncate text-sm text-foreground">{name}</p>
      <p className="mt-1 font-mono text-xs text-muted-foreground">
        {id} | {implementations} implementations
      </p>
    </Link>
  )
}

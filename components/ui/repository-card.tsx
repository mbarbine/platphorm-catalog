import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight, ExternalLink, GitFork } from "lucide-react"

interface RepositoryCardProps {
  name: string
  componentCount?: number
  capabilityCount?: number
  language?: string | null
  htmlUrl?: string
  isPrivate?: boolean
  className?: string
}

export function RepositoryCard({
  name,
  componentCount,
  capabilityCount,
  language,
  htmlUrl,
  isPrivate,
  className,
}: RepositoryCardProps) {
  // Clean up display name
  const displayName = name
    .replace(/^(mbarbine__|github-recent__mbarbine__|ph3ar__)/, "")
    .replace(/__/g, "/")

  return (
    <div
      className={cn(
        "group rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/50 hover:bg-card/80",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <GitFork className="h-4 w-4 shrink-0 text-muted-foreground" />
            <h3 className="truncate font-medium text-foreground group-hover:text-accent transition-colors">
              {displayName}
            </h3>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            {language && (
              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5">
                {language}
              </span>
            )}
            {isPrivate && (
              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5">
                Private
              </span>
            )}
            {componentCount !== undefined && (
              <span>{componentCount} components</span>
            )}
            {capabilityCount !== undefined && (
              <span>{capabilityCount} capabilities</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {htmlUrl && (
            <a
              href={htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Open on GitHub"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <Link
            href={`/repositories/${encodeURIComponent(name)}`}
            className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="View details"
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

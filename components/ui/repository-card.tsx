"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { catalogRepoHref } from "@/lib/routing"
import { motion } from "framer-motion"
import { ChevronRight, ExternalLink, GitFork } from "lucide-react"

interface RepositoryCardProps {
  id?: string
  name: string
  componentCount?: number
  capabilityCount?: number
  language?: string | null
  htmlUrl?: string
  isPrivate?: boolean
  maturity?: string
  confidence?: string
  className?: string
}

export function RepositoryCard({
  id,
  name,
  componentCount,
  capabilityCount,
  language,
  htmlUrl,
  isPrivate,
  maturity,
  confidence,
  className,
}: RepositoryCardProps) {
  // Clean up display name
  const displayName = name
    .replace(/^(mbarbine__|github-recent__mbarbine__|ph3ar__)/, "")
    .replace(/__/g, "/")

  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -2 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass group relative overflow-hidden rounded-lg p-5 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-start justify-between gap-3 relative z-10">
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
            {maturity && (
              <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-accent">
                {maturity}
              </span>
            )}
            {confidence && (
              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5">
                {confidence}
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
            href={catalogRepoHref(id ?? name)}
            className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="View details"
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

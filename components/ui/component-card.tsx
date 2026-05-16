"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRight, Boxes, Check, X } from "lucide-react"

interface ComponentCardProps {
  id: string
  name: string
  path: string
  repo: string
  framework: string
  classification: string
  componentScore: number
  extractionScore?: number
  duplicates?: number
  usage?: number
  hasTest?: boolean
  hasStory?: boolean
  repoHref?: string
  className?: string
}

export function ComponentCard({
  id,
  name,
  path,
  repo,
  framework,
  classification,
  componentScore,
  extractionScore,
  duplicates,
  usage,
  hasTest,
  hasStory,
  repoHref,
  className,
}: ComponentCardProps) {
  const classificationColor: Record<string, string> = {
    experimental: "bg-blue-500/10 text-blue-400",
    "extraction-candidate": "bg-green-500/10 text-green-400",
    "needs-review": "bg-amber-500/10 text-amber-400",
    "site-specific": "bg-purple-500/10 text-purple-400",
  }

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
            <Boxes className="h-4 w-4 shrink-0 text-muted-foreground" />
            <h3 className="truncate font-mono text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              {name}
            </h3>
          </div>

          <p className="mt-1 truncate text-xs text-muted-foreground font-mono">
            {path}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-xs",
                classificationColor[classification] ||
                  "bg-muted text-muted-foreground"
              )}
            >
              {classification}
            </span>
            <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {framework}
            </span>
            <span className="text-xs text-muted-foreground">
              Score: {componentScore}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {duplicates !== undefined && duplicates > 1 && (
              <span>{duplicates} duplicates</span>
            )}
            {usage !== undefined && usage > 0 && (
              <span>{usage.toLocaleString()} imports</span>
            )}
            {hasTest !== undefined && (
              <span className="flex items-center gap-1">
                {hasTest ? (
                  <Check className="h-3 w-3 text-green-400" />
                ) : (
                  <X className="h-3 w-3 text-muted-foreground/50" />
                )}
                Test
              </span>
            )}
            {hasStory !== undefined && (
              <span className="flex items-center gap-1">
                {hasStory ? (
                  <Check className="h-3 w-3 text-green-400" />
                ) : (
                  <X className="h-3 w-3 text-muted-foreground/50" />
                )}
                Story
              </span>
            )}
          </div>

          <p className="mt-2 text-xs text-muted-foreground truncate">
            From:{" "}
            <Link
              href={repoHref ?? `/repositories?search=${encodeURIComponent(repo)}`}
              className="hover:text-foreground transition-colors"
            >
              {repo}
            </Link>
          </p>
        </div>

        <Link
          href={`/components/${encodeURIComponent(id)}`}
          className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0"
          aria-label="View details"
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

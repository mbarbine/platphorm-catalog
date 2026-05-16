"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRight, Cpu, AlertCircle } from "lucide-react"

interface CapabilityCardProps {
  id: string
  name: string
  type: string
  description?: string
  reuseScore?: number
  implementations?: number
  riskSummary?: string
  className?: string
}

export function CapabilityCard({
  id,
  name,
  type,
  description,
  reuseScore,
  implementations,
  riskSummary,
  className,
}: CapabilityCardProps) {
  const hasRisk = riskSummary && !riskSummary.includes("0 risk")

  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -2 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass group relative overflow-hidden rounded-xl p-5 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 shrink-0 text-accent" />
            <h3 className="truncate font-medium text-foreground group-hover:text-accent transition-colors">
              {name}
            </h3>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {type}
            </span>
            {reuseScore !== undefined && reuseScore > 0 && (
              <span className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                Reuse: {reuseScore}
              </span>
            )}
            {implementations !== undefined && implementations > 0 && (
              <span className="text-xs text-muted-foreground">
                {implementations} implementations
              </span>
            )}
          </div>

          {description && (
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}

          {hasRisk && (
            <div className="mt-2 flex items-center gap-1 text-xs text-amber-500">
              <AlertCircle className="h-3 w-3" />
              <span>{riskSummary}</span>
            </div>
          )}
        </div>

        <Link
          href={`/capabilities/${encodeURIComponent(id)}`}
          className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0"
          aria-label="View details"
        >
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

"use client"

import { useEffect, useState, useMemo } from "react"
import { CapabilityCard } from "@/components/ui/capability-card"
import { SearchInput } from "@/components/ui/search-input"
import type { Capability } from "@/lib/types"

interface CapabilitiesListProps {
  capabilities: Capability[]
  types: string[]
}

export function CapabilitiesList({
  capabilities,
  types,
}: CapabilitiesListProps) {
  const [search, setSearch] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [sortBy, setSortBy] = useState<"implementations" | "reuse" | "name">(
    "implementations"
  )

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const type = params.get("type")
    if (type && types.includes(type)) {
      setSelectedType(type)
    }
  }, [types])

  const filteredAndSorted = useMemo(() => {
    let result = capabilities

    // Filter by type
    if (selectedType !== "all") {
      result = result.filter((c) => c.type === selectedType)
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase()
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(searchLower) ||
          c.id.toLowerCase().includes(searchLower) ||
          c.type.toLowerCase().includes(searchLower) ||
          c.description?.toLowerCase().includes(searchLower)
      )
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "implementations") {
        return (b.implementations || 0) - (a.implementations || 0)
      }
      if (sortBy === "reuse") {
        return (b.reuse_score || 0) - (a.reuse_score || 0)
      }
      return a.name.localeCompare(b.name)
    })

    return result
  }, [capabilities, search, selectedType, sortBy])

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search capabilities..."
            className="sm:w-64"
          />

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="all">All types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "implementations" | "reuse" | "name")
            }
            className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="implementations">Implementations</option>
            <option value="reuse">Reuse Score</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="mt-4 text-sm text-muted-foreground">
        Showing {filteredAndSorted.length} of {capabilities.length} capabilities
      </p>

      {/* Capabilities Grid */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAndSorted.map((cap) => (
          <CapabilityCard
            key={cap.id}
            id={cap.id}
            name={cap.name}
            type={cap.type}
            description={cap.description}
            reuseScore={cap.reuse_score}
            implementations={cap.implementations}
            riskSummary={cap.risk_summary}
          />
        ))}
      </div>

      {filteredAndSorted.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">No capabilities found</p>
          <button
            onClick={() => {
              setSearch("")
              setSelectedType("all")
            }}
            className="mt-2 text-sm text-accent hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}

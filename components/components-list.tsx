"use client"

import { useState, useMemo } from "react"
import { ComponentCard } from "@/components/ui/component-card"
import { SearchInput } from "@/components/ui/search-input"
import type { Component } from "@/lib/types"

interface ComponentsListProps {
  components: Component[]
  classifications: string[]
  frameworks: string[]
}

export function ComponentsList({
  components,
  classifications,
  frameworks,
}: ComponentsListProps) {
  const [search, setSearch] = useState("")
  const [selectedClassification, setSelectedClassification] =
    useState<string>("all")
  const [selectedFramework, setSelectedFramework] = useState<string>("all")
  const [sortBy, setSortBy] = useState<"usage" | "score" | "name">("usage")
  const [page, setPage] = useState(1)
  const perPage = 24

  const filteredAndSorted = useMemo(() => {
    let result = components

    // Filter by classification
    if (selectedClassification !== "all") {
      result = result.filter((c) => c.classification === selectedClassification)
    }

    // Filter by framework
    if (selectedFramework !== "all") {
      result = result.filter((c) => c.framework === selectedFramework)
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase()
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(searchLower) ||
          c.path.toLowerCase().includes(searchLower) ||
          c.repo.toLowerCase().includes(searchLower)
      )
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "usage") {
        return b.usage - a.usage
      }
      if (sortBy === "score") {
        return b.component_score - a.component_score
      }
      return a.name.localeCompare(b.name)
    })

    return result
  }, [components, search, selectedClassification, selectedFramework, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredAndSorted.length / perPage)
  const paginatedComponents = filteredAndSorted.slice(
    (page - 1) * perPage,
    page * perPage
  )

  // Reset page when filters change
  useMemo(() => {
    setPage(1)
  }, [search, selectedClassification, selectedFramework, sortBy])

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search components..."
            className="sm:w-64"
          />

          <select
            value={selectedClassification}
            onChange={(e) => setSelectedClassification(e.target.value)}
            className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="all">All classifications</option>
            {classifications.map((c) => (
              <option key={c} value={c}>
                {c.replace(/-/g, " ")}
              </option>
            ))}
          </select>

          <select
            value={selectedFramework}
            onChange={(e) => setSelectedFramework(e.target.value)}
            className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="all">All frameworks</option>
            {frameworks.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {paginatedComponents.length} of {filteredAndSorted.length}{" "}
            components
          </p>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "usage" | "score" | "name")
              }
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="usage">Usage Count</option>
              <option value="score">Component Score</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedComponents.map((comp) => (
          <ComponentCard
            key={comp.id}
            id={comp.id}
            name={comp.name}
            path={comp.path}
            repo={comp.repo}
            framework={comp.framework}
            classification={comp.classification}
            componentScore={comp.component_score}
            extractionScore={comp.extraction_score}
            duplicates={comp.duplicates}
            usage={comp.usage}
          />
        ))}
      </div>

      {paginatedComponents.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">No components found</p>
          <button
            onClick={() => {
              setSearch("")
              setSelectedClassification("all")
              setSelectedFramework("all")
            }}
            className="mt-2 text-sm text-accent hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground disabled:opacity-50 hover:bg-muted disabled:hover:bg-card"
          >
            Previous
          </button>

          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground disabled:opacity-50 hover:bg-muted disabled:hover:bg-card"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

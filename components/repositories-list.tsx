"use client"

import { useState, useMemo } from "react"
import { RepositoryCard } from "@/components/ui/repository-card"
import { SearchInput } from "@/components/ui/search-input"

interface Repository {
  id: string
  name: string
  capabilityCount: number
  componentCount?: number
  language?: string | null
  htmlUrl?: string
  isPrivate?: boolean
}

interface RepositoriesListProps {
  repositories: Repository[]
}

export function RepositoriesList({ repositories }: RepositoriesListProps) {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState<"capabilities" | "components" | "name">(
    "capabilities"
  )

  const filteredAndSorted = useMemo(() => {
    let result = repositories

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase()
      result = result.filter((r) =>
        r.name.toLowerCase().includes(searchLower)
      )
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "capabilities") {
        return b.capabilityCount - a.capabilityCount
      }
      if (sortBy === "components") {
        return (b.componentCount || 0) - (a.componentCount || 0)
      }
      return a.name.localeCompare(b.name)
    })

    return result
  }, [repositories, search, sortBy])

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search repositories..."
          className="sm:max-w-xs"
        />

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "capabilities" | "components" | "name")
            }
            className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="capabilities">Capabilities</option>
            <option value="components">Components</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="mt-4 text-sm text-muted-foreground">
        Showing {filteredAndSorted.length} of {repositories.length} repositories
      </p>

      {/* Repository Grid */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAndSorted.map((repo) => (
          <RepositoryCard
            key={repo.id}
            name={repo.name}
            capabilityCount={repo.capabilityCount}
            componentCount={repo.componentCount}
            language={repo.language}
            htmlUrl={repo.htmlUrl}
            isPrivate={repo.isPrivate}
          />
        ))}
      </div>

      {filteredAndSorted.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">No repositories found</p>
          <button
            onClick={() => setSearch("")}
            className="mt-2 text-sm text-accent hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  )
}

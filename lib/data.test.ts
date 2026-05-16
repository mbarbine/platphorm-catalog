import { describe, it, expect, vi } from "vitest"
import { getUniqueRepositories, getUniqueComponentNames, parseCapabilityIndex } from "./data"
import type { Component } from "./types"
import { capabilityHref, catalogRepoHref, routeSlugToId } from "./routing"

describe("Data Utilities", () => {
  describe("getUniqueRepositories", () => {
    it("should count components per repository correctly", () => {
      const components = [
        { repo: "repo-a" },
        { repo: "repo-b" },
        { repo: "repo-a" },
      ] as Component[]
      
      const result = getUniqueRepositories(components)
      
      expect(result).toHaveLength(2)
      expect(result).toEqual([
        { name: "repo-a", componentCount: 2 },
        { name: "repo-b", componentCount: 1 }
      ])
    })
  })

  describe("getUniqueComponentNames", () => {
    it("should calculate average scores and count correctly", () => {
      const components = [
        { name: "Button", component_score: 80 },
        { name: "Button", component_score: 90 },
        { name: "Card", component_score: 100 },
      ] as Component[]
      
      const result = getUniqueComponentNames(components)
      
      expect(result).toHaveLength(2)
      expect(result).toEqual([
        { name: "Button", count: 2, avgScore: 85 },
        { name: "Card", count: 1, avgScore: 100 }
      ])
    })
  })

  describe("parseCapabilityIndex", () => {
    it("should parse capability markdown correctly", () => {
      const markdown = `
Generated repositories: 5
Generated capabilities: 10
Duplicate capabilities: 2

## Top Capability Domains
- Authentication: 3
- Database: 2

## Repositories
- [repo__one](url): 4 capabilities
- [repo__two](url): 6 capabilities
      `
      
      const result = parseCapabilityIndex(markdown)
      
      expect(result.totalRepositories).toBe(5)
      expect(result.totalCapabilities).toBe(10)
      expect(result.duplicateCapabilities).toBe(2)
      expect(result.topDomains).toEqual({
        Authentication: 3,
        Database: 2
      })
      expect(result.repositories).toEqual([
        { id: "repo__one", name: "repo/one", capabilityCount: 4 },
        { id: "repo__two", name: "repo/two", capabilityCount: 6 }
      ])
    })
  })

  describe("routing helpers", () => {
    it("creates static-safe slugs for ids that contain dots", () => {
      expect(capabilityHref("api.route-handlers")).toBe(
        "/capabilities/api~2e~route-handlers"
      )
      expect(catalogRepoHref("github-recent__process-charts__.github")).toBe(
        "/repositories/github-recent__process-charts__~2e~github"
      )
      expect(routeSlugToId("api~2e~route-handlers")).toBe("api.route-handlers")
      expect(routeSlugToId("api%252Eroute-handlers")).toBe("api.route-handlers")
    })
  })
})

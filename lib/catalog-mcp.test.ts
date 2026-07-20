import { describe, expect, it } from "vitest"
import { catalogPrompts, catalogResources, catalogTools, dispatchCatalogMcp } from "./catalog-mcp"

function request(method: string, params?: Record<string, unknown>) {
  return dispatchCatalogMcp({ jsonrpc: "2.0", id: "test", method, ...(params ? { params } : {}) }) as {
    result?: Record<string, unknown>
    error?: { code: number; message: string }
  }
}

describe("catalog MCP", () => {
  it("advertises real tools, resources, and prompts", () => {
    expect(catalogTools.map((tool) => tool.name)).toContain("search_catalog")
    expect(catalogResources.map((resource) => resource.uri)).toContain("catalog://capabilities")
    expect(catalogPrompts.map((prompt) => prompt.name)).toContain("evaluate_implementation")
    expect((request("tools/list").result?.tools as unknown[]).length).toBe(catalogTools.length)
  })

  it("searches generated catalog evidence", () => {
    const response = request("tools/call", {
      name: "search_catalog",
      arguments: { query: "MCP", kind: "capability", limit: 5 },
    })
    const structured = response.result?.structuredContent as { total_matches: number; results: Array<{ kind: string }> }
    expect(structured.total_matches).toBeGreaterThan(0)
    expect(structured.results.every((entry) => entry.kind === "capability")).toBe(true)
  })

  it("returns an evidence-backed capability recommendation", () => {
    const response = request("tools/call", {
      name: "recommend_implementation",
      arguments: { capability_id: "mcp.tool-server" },
    })
    const structured = response.result?.structuredContent as { recommended_source: unknown; generated_at: string }
    expect(structured.recommended_source).toBeTruthy()
    expect(structured.generated_at).toMatch(/^\d{4}-/)
  })

  it("reads resources and builds prompts", () => {
    const resource = request("resources/read", { uri: "catalog://summary" })
    const contents = resource.result?.contents as Array<{ text: string }>
    expect(JSON.parse(contents[0].text).validation_failures).toBe(0)

    const prompt = request("prompts/get", {
      name: "find_reusable_capability",
      arguments: { use_case: "JSON-RPC capability discovery" },
    })
    expect(JSON.stringify(prompt.result)).toContain("JSON-RPC capability discovery")
  })

  it("returns honest errors for unknown capabilities", () => {
    const response = request("tools/call", {
      name: "get_capability",
      arguments: { id: "does.not.exist" },
    })
    expect(response.result?.isError).toBe(true)
    expect(JSON.stringify(response.result)).toContain("Capability not found")
  })
})

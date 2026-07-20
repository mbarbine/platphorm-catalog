import bestImplementationsJson from "@/global-capability-catalog/catalog/generated/best-implementations.json"
import capabilitiesJson from "@/global-capability-catalog/catalog/generated/capabilities.json"
import catalogSummaryJson from "@/global-capability-catalog/catalog/generated/catalog-summary.json"
import componentsJson from "@/components-index.json"
import repositoriesJson from "@/global-capability-catalog/catalog/generated/repos.json"
import type {
  BestImplementationIndex,
  CatalogRepositorySummary,
  GlobalCapability,
  GlobalCapabilityIndex,
} from "@/lib/types"
import { buildVisionToolSelection } from "@/lib/vision-tools"

export const MCP_SERVER_NAME = "platphorm-catalog"
export const MCP_PROTOCOL_VERSION = "2024-11-05"

type JsonRpcMessage = {
  jsonrpc?: unknown
  id?: unknown
  method?: unknown
  params?: unknown
}

type JsonObject = Record<string, unknown>

const capabilityIndex = capabilitiesJson as unknown as GlobalCapabilityIndex
const bestImplementations = bestImplementationsJson as BestImplementationIndex
const visionSelection = buildVisionToolSelection(capabilityIndex, bestImplementations)
const repositories = (repositoriesJson as { repositories: CatalogRepositorySummary[] }).repositories
const components = (componentsJson as {
  component_count: number
  components: Array<{
    id: string
    name: string
    repo: string
    path: string
    framework: string
    classification: string
    component_score: number
    extraction_score: number
    duplicates: number
    usage: number
  }>
}).components

export const catalogTools = [
  {
    name: "search_catalog",
    description: "Search real catalog capabilities, repositories, and reusable UI components.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", minLength: 1, description: "Case-insensitive search text." },
        kind: { type: "string", enum: ["all", "capability", "repository", "component"], default: "all" },
        limit: { type: "integer", minimum: 1, maximum: 50, default: 10 },
      },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "get_catalog_summary",
    description: "Return the recorded catalog generation status and evidence-backed counts.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_capability",
    description: "Read a catalog capability and its evidenced implementations.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", minLength: 1 } },
      required: ["id"],
      additionalProperties: false,
    },
  },
  {
    name: "get_repository",
    description: "Read a repository summary from the generated capability catalog.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", minLength: 1 } },
      required: ["id"],
      additionalProperties: false,
    },
  },
  {
    name: "recommend_implementation",
    description: "Return the catalog's ranked, evidence-backed implementation recommendation for a capability.",
    inputSchema: {
      type: "object",
      properties: { capability_id: { type: "string", minLength: 1 } },
      required: ["capability_id"],
      additionalProperties: false,
    },
  },
] as const

export const catalogResources = [
  { uri: "catalog://summary", name: "Catalog summary", description: "Generation status and real catalog counts.", mimeType: "application/json" },
  { uri: "catalog://capabilities", name: "Capability index", description: "All generated global capability records.", mimeType: "application/json" },
  { uri: "catalog://repositories", name: "Repository index", description: "All generated repository summaries.", mimeType: "application/json" },
  { uri: "catalog://best-implementations", name: "Best implementations", description: "Ranked reuse candidates backed by source paths.", mimeType: "application/json" },
  { uri: "catalog://vision/tool-selection", name: "Vision tool selection", description: "Catalog-backed operator tool selection and protection boundaries.", mimeType: "application/json" },
] as const

export const catalogPrompts = [
  {
    name: "find_reusable_capability",
    description: "Build a catalog search brief for a concrete product need.",
    arguments: [{ name: "use_case", description: "The product behavior or capability needed.", required: true }],
  },
  {
    name: "evaluate_implementation",
    description: "Evaluate a catalog recommendation against implementation constraints.",
    arguments: [
      { name: "capability_id", description: "Catalog capability id.", required: true },
      { name: "constraints", description: "Framework, security, maturity, or delivery constraints.", required: false },
    ],
  },
  {
    name: "plan_platform_contract_reuse",
    description: "Plan reuse while preserving a PlatPhorm site's product identity and platform contract.",
    arguments: [
      { name: "site_purpose", description: "The site's unique product purpose.", required: true },
      { name: "needed_capabilities", description: "Comma-separated capability needs.", required: true },
    ],
  },
] as const

function success(id: unknown, result: unknown) {
  return { jsonrpc: "2.0", id, result }
}

function failure(id: unknown, code: number, message: string, data?: unknown) {
  return { jsonrpc: "2.0", id, error: { code, message, ...(data === undefined ? {} : { data }) } }
}

function asObject(value: unknown): JsonObject | null {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : null
}

function requiredString(input: JsonObject, key: string): string | null {
  const value = input[key]
  return typeof value === "string" && value.trim() ? value.trim() : null
}

function toolResult(data: unknown) {
  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
    structuredContent: data,
  }
}

function toolError(message: string) {
  return {
    content: [{ type: "text", text: message }],
    isError: true,
  }
}

function searchText(query: string, kind: string, limit: number) {
  const normalized = query.toLowerCase()
  const results: Array<Record<string, unknown>> = []

  if (kind === "all" || kind === "capability") {
    for (const capability of capabilityIndex.capabilities) {
      if (`${capability.id} ${capability.name} ${capability.summary} ${capability.type}`.toLowerCase().includes(normalized)) {
        results.push({
          kind: "capability",
          id: capability.id,
          name: capability.name,
          summary: capability.summary,
          implementations: capability.implementations.length,
          reuse_score: capability.reuse_score,
        })
      }
    }
  }

  if (kind === "all" || kind === "repository") {
    for (const repository of repositories) {
      if (`${repository.id} ${repository.name} ${repository.description} ${repository.frameworks.join(" ")}`.toLowerCase().includes(normalized)) {
        results.push({
          kind: "repository",
          id: repository.id,
          name: repository.name,
          description: repository.description,
          capability_count: repository.capability_count,
          maturity: repository.maturity,
          confidence: repository.confidence,
        })
      }
    }
  }

  if (kind === "all" || kind === "component") {
    for (const component of components) {
      if (`${component.id} ${component.name} ${component.repo} ${component.path} ${component.framework}`.toLowerCase().includes(normalized)) {
        results.push({ kind: "component", ...component })
      }
    }
  }

  return { query, kind, total_matches: results.length, returned: Math.min(results.length, limit), results: results.slice(0, limit) }
}

function callTool(name: string, input: JsonObject) {
  switch (name) {
    case "search_catalog": {
      const query = requiredString(input, "query")
      if (!query) return toolError("query is required")
      const kind = typeof input.kind === "string" && ["all", "capability", "repository", "component"].includes(input.kind)
        ? input.kind
        : "all"
      const requestedLimit = typeof input.limit === "number" && Number.isInteger(input.limit) ? input.limit : 10
      const limit = Math.min(50, Math.max(1, requestedLimit))
      return toolResult(searchText(query, kind, limit))
    }
    case "get_catalog_summary":
      return toolResult({
        ...catalogSummaryJson,
        component_count: components.length,
        source: "generated catalog artifacts",
        freshness: { generated_at: catalogSummaryJson.generated_at },
      })
    case "get_capability": {
      const id = requiredString(input, "id")
      if (!id) return toolError("id is required")
      const capability = capabilityIndex.capabilities.find((entry) => entry.id === id)
      return capability ? toolResult(capability) : toolError(`Capability not found: ${id}`)
    }
    case "get_repository": {
      const id = requiredString(input, "id")
      if (!id) return toolError("id is required")
      const repository = repositories.find((entry) => entry.id === id || entry.name === id)
      return repository ? toolResult(repository) : toolError(`Repository not found: ${id}`)
    }
    case "recommend_implementation": {
      const id = requiredString(input, "capability_id")
      if (!id) return toolError("capability_id is required")
      const ranked = bestImplementations.global_capabilities.find((entry) => entry.id === id)
      if (!ranked) return toolError(`Capability recommendation not found: ${id}`)
      return toolResult({
        capability_id: ranked.id,
        capability_name: ranked.name,
        recommended_source: ranked.recommended_source,
        ranked_implementations: ranked.implementations,
        generated_at: bestImplementations.generated_at,
        note: "Recommendations are generated from catalog evidence and should be verified against the current source repository before reuse.",
      })
    }
    default:
      return null
  }
}

function readResource(uri: string) {
  const resources: Record<string, unknown> = {
    "catalog://summary": catalogSummaryJson,
    "catalog://capabilities": capabilityIndex,
    "catalog://repositories": repositoriesJson,
    "catalog://best-implementations": bestImplementations,
    "catalog://vision/tool-selection": visionSelection,
  }
  return Object.hasOwn(resources, uri) ? resources[uri] : undefined
}

function getPrompt(name: string, args: JsonObject) {
  switch (name) {
    case "find_reusable_capability": {
      const useCase = requiredString(args, "use_case")
      if (!useCase) return null
      return {
        description: "Search and compare real catalog evidence for a product use case.",
        messages: [{ role: "user", content: { type: "text", text: `Use search_catalog to find capabilities relevant to: ${useCase}. Compare implementation count, reuse score, maturity, confidence, risks, and source paths. Do not claim the generated catalog is current beyond its recorded generated_at timestamp.` } }],
      }
    }
    case "evaluate_implementation": {
      const capabilityId = requiredString(args, "capability_id")
      if (!capabilityId) return null
      const constraints = requiredString(args, "constraints") ?? "No additional constraints supplied."
      return {
        description: "Evaluate a ranked implementation using catalog evidence and current-source verification.",
        messages: [{ role: "user", content: { type: "text", text: `Call recommend_implementation for ${capabilityId}. Evaluate the recommendation against: ${constraints}. Verify the current source repository before adoption; catalog rankings are evidence, not proof of present runtime health.` } }],
      }
    }
    case "plan_platform_contract_reuse": {
      const sitePurpose = requiredString(args, "site_purpose")
      const neededCapabilities = requiredString(args, "needed_capabilities")
      if (!sitePurpose || !neededCapabilities) return null
      return {
        description: "Reuse catalog capabilities without flattening the site's product identity.",
        messages: [{ role: "user", content: { type: "text", text: `The site's unique purpose is: ${sitePurpose}. Needed capabilities: ${neededCapabilities}. Use Catalog tools to find evidence-backed implementations. Preserve product identity, separate public reads from PLATPHORM_API_KEY-protected writes, and include route, discovery, auth, trace, and test implications.` } }],
      }
    }
    default:
      return null
  }
}

export function dispatchCatalogMcp(message: JsonRpcMessage | unknown) {
  if (!message || typeof message !== "object" || Array.isArray(message)) return failure(null, -32600, "Invalid Request")
  const rpc = message as JsonRpcMessage
  if (rpc.jsonrpc !== "2.0" || typeof rpc.method !== "string") return failure(rpc.id ?? null, -32600, "Invalid Request")

  const id = rpc.id ?? null
  const params = asObject(rpc.params) ?? {}
  switch (rpc.method) {
    case "initialize":
      return success(id, {
        protocolVersion: MCP_PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false }, resources: { listChanged: false }, prompts: { listChanged: false } },
        serverInfo: { name: MCP_SERVER_NAME, version: "1.1.0" },
        instructions: "Public read-only access to the generated PlatPhorm capability catalog. Results include their recorded generation timestamp; verify source repositories before reuse.",
      })
    case "ping": return success(id, {})
    case "tools/list": return success(id, { tools: catalogTools })
    case "resources/list": return success(id, { resources: catalogResources })
    case "prompts/list": return success(id, { prompts: catalogPrompts })
    case "tools/call": {
      const name = requiredString(params, "name")
      const args = asObject(params.arguments) ?? {}
      if (!name) return failure(id, -32602, "Tool name is required.")
      const result = callTool(name, args)
      return result ? success(id, result) : failure(id, -32601, `Unknown tool: ${name}`)
    }
    case "resources/read": {
      const uri = requiredString(params, "uri")
      if (!uri) return failure(id, -32602, "Resource uri is required.")
      const resource = readResource(uri)
      return resource === undefined
        ? failure(id, -32002, `Resource not found: ${uri}`)
        : success(id, { contents: [{ uri, mimeType: "application/json", text: JSON.stringify(resource) }] })
    }
    case "prompts/get": {
      const name = requiredString(params, "name")
      if (!name) return failure(id, -32602, "Prompt name is required.")
      const prompt = getPrompt(name, asObject(params.arguments) ?? {})
      return prompt ? success(id, prompt) : failure(id, -32602, `Prompt not found or required arguments missing: ${name}`)
    }
    case "notifications/initialized": return null
    default: return failure(id, -32601, "Method not found")
  }
}

export function findCapabilityForTest(id: string): GlobalCapability | undefined {
  return capabilityIndex.capabilities.find((capability) => capability.id === id)
}

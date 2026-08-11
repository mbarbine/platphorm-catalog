import {
  MCP_PROTOCOL_VERSION,
  MCP_SERVER_NAME,
  catalogPrompts,
  catalogResources,
  catalogTools,
  dispatchCatalogMcp,
} from "@/lib/catalog-mcp"

export const dynamic = "force-dynamic"

export function GET(request: Request) {
  return Response.json({
    ok: true,
    data: {
      server: { name: MCP_SERVER_NAME, version: "1.1.0" },
      endpoint: new URL("/api/v1/mcp", request.url).toString(),
      protocol: "JSON-RPC 2.0",
      protocolVersion: MCP_PROTOCOL_VERSION,
      status: "active",
      access: "public_read_only",
      capabilities: {
        tools: catalogTools.map((tool) => tool.name),
        resources: catalogResources.map((resource) => resource.uri),
        prompts: catalogPrompts.map((prompt) => prompt.name),
      },
      methods: ["initialize", "ping", "tools/list", "tools/call", "resources/list", "resources/read", "prompts/list", "prompts/get"],
      limitations: ["Catalog results reflect their recorded generated_at timestamp; verify the current source repository before reuse."],
    },
  })
}

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return Response.json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }, { status: 400 })
  }

  if (Array.isArray(payload)) {
    if (payload.length === 0) {
      return Response.json({ jsonrpc: "2.0", id: null, error: { code: -32600, message: "Invalid Request" } }, { status: 400 })
    }
    const responses = payload.map(dispatchCatalogMcp).filter((response) => response !== null)
    return responses.length ? Response.json(responses) : new Response(null, { status: 204 })
  }

  const response = dispatchCatalogMcp(payload)
  return response ? Response.json(response) : new Response(null, { status: 204 })
}

const SERVER_NAME = "platphorm-catalog"
const PROTOCOL_VERSION = "2024-11-05"

type JsonRpcMessage = {
  jsonrpc?: unknown
  id?: unknown
  method?: unknown
}
function success(id: unknown, result: unknown) {
  return { jsonrpc: "2.0", id, result }
}

function failure(id: unknown, code: number, message: string, data?: unknown) {
  return { jsonrpc: "2.0", id, error: { code, message, ...(data === undefined ? {} : { data }) } }
}

function dispatch(message: JsonRpcMessage | unknown) {
  if (!message || typeof message !== "object" || Array.isArray(message)) return failure(null, -32600, "Invalid Request")
  const rpc = message as JsonRpcMessage
  if (rpc.jsonrpc !== "2.0" || typeof rpc.method !== "string") return failure(rpc.id ?? null, -32600, "Invalid Request")

  const id = rpc.id ?? null
  switch (rpc.method) {
    case "initialize":
      return success(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false }, resources: { listChanged: false }, prompts: { listChanged: false } },
        serverInfo: { name: SERVER_NAME, version: "1.0.0" },
        instructions: "This site exposes MCP introspection but has no registered product tools, resources, or prompts.",
      })
    case "ping": return success(id, {})
    case "tools/list": return success(id, { tools: [] })
    case "resources/list": return success(id, { resources: [] })
    case "prompts/list": return success(id, { prompts: [] })
    case "tools/call": return failure(id, -32602, "No tools are registered for this site.")
    case "resources/read": return failure(id, -32002, "Resource not found.")
    case "prompts/get": return failure(id, -32602, "Prompt not found.")
    case "notifications/initialized": return null
    default: return failure(id, -32601, "Method not found")
  }
}

export function GET(request: Request) {
  return Response.json({
    ok: true,
    data: {
      server: { name: SERVER_NAME, version: "1.0.0" },
      endpoint: new URL("/api/mcp", request.url).toString(),
      protocol: "JSON-RPC 2.0",
      protocolVersion: PROTOCOL_VERSION,
      status: "introspection_only",
      capabilities: { tools: [], resources: [], prompts: [] },
      limitations: ["No product MCP handlers are registered in this deployment."],
      methods: ["initialize", "ping", "tools/list", "tools/call", "resources/list", "resources/read", "prompts/list", "prompts/get"],
    },
  })
}

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return Response.json(failure(null, -32700, "Parse error"), { status: 400 })
  }

  if (Array.isArray(payload)) {
    if (payload.length === 0) return Response.json(failure(null, -32600, "Invalid Request"), { status: 400 })
    const responses = payload.map(dispatch).filter((response) => response !== null)
    return responses.length ? Response.json(responses) : new Response(null, { status: 204 })
  }

  const response = dispatch(payload)
  return response ? Response.json(response) : new Response(null, { status: 204 })
}

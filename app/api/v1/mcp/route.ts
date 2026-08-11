import { GET as parentGet, POST as parentPost } from "../mcp/route"

export function GET(request: Request) {
  return parentGet(request)
}

export function POST(request: Request) {
  return parentPost(request)
}

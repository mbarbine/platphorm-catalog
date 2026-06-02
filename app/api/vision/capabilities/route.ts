import { loadVisionToolSelection } from "@/lib/data"

export const dynamic = "force-static"

export async function GET() {
  const selection = await loadVisionToolSelection()
  return Response.json({
    ok: selection.ok,
    data: selection,
  })
}

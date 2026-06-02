import { loadVisionEvidencePack } from "@/lib/data"

export const dynamic = "force-static"

export async function GET() {
  const pack = await loadVisionEvidencePack()
  return Response.json({
    ok: pack.ok,
    data: pack,
  })
}

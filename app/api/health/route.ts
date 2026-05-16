import { getCatalogHealthPayload } from "@/lib/catalog-health"

export const dynamic = "force-static"

export async function GET() {
  return Response.json(await getCatalogHealthPayload())
}

import { loadGithubCensus } from "@/lib/catalog-runtime"

export const dynamic = "force-dynamic"

function safeLimit(value: string | null, fallback: number) {
  if (!value) return fallback
  const parsed = Number.parseInt(value, 10)
  if (Number.isNaN(parsed) || parsed < 1) return fallback
  return Math.min(parsed, 500)
}

export async function GET(request: Request) {
  const census = await loadGithubCensus()
  if (!census) {
    return Response.json(
      {
        ok: false,
        error: {
          code: "census_not_ready",
          message: "Technology data is available only after a completed github census scan.",
        },
      },
      { status: 404 },
    )
  }

  const url = new URL(request.url)
  const limit = safeLimit(url.searchParams.get("limit"), 250)
  const query = url.searchParams.get("q")?.toLowerCase() ?? ""

  const technologies = [...census.technologies]
    .filter((entry) => (query ? entry.name.toLowerCase().includes(query) : true))
    .sort((a, b) => b.repositories - a.repositories)
    .slice(0, limit)

  return Response.json({
    ok: true,
    data: {
      source: "github-native-first",
      generatedAt: census.generatedAt,
      total: census.technologies.length,
      returned: technologies.length,
      technologies,
      query: query || null,
      filters: { limit },
    },
    meta: {
      route: "/api/v1/catalog/technologies",
    },
  })
}

import { loadGithubCensusWithPublicationState } from "@/lib/catalog-runtime"

export const dynamic = "force-dynamic"

export async function GET() {
  const census = await loadGithubCensusWithPublicationState()

  if (!census) {
    return Response.json(
      {
        ok: false,
        error: {
          code: "census_not_ready",
          message: "Github-native census data is not available yet. Run `pnpm catalog:github`.",
        },
      },
      { status: 404 },
    )
  }

  return Response.json({
    ok: true,
    data: census,
    meta: {
      source: "github-native-first",
      route: "/api/v1/catalog/census",
      generated_at: census.generatedAt,
    },
  })
}

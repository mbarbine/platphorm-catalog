import { listGeneratedCatalogArtifacts, listPublicationArtifactFiles } from "@/lib/catalog-runtime"

export const dynamic = "force-dynamic"

export async function GET() {
  const generatedArtifacts = await listGeneratedCatalogArtifacts()
  const publicationArtifacts = await listPublicationArtifactFiles()

  const now = new Date().toISOString()
  const generated = generatedArtifacts
    .filter((entry) => entry.exists)
    .map((entry) => ({
      name: entry.name,
      status: "available",
      bytes: entry.bytes,
      lastModified: entry.lastModified,
      path: `/catalog/generated/${entry.name}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name))

  const missing = generatedArtifacts
    .filter((entry) => !entry.exists)
    .map((entry) => ({
      name: entry.name,
      status: "missing",
      bytes: null,
      lastModified: null,
      path: `/catalog/generated/${entry.name}`,
      message: "Not present in repository output yet",
    }))

  return Response.json({
    ok: true,
    data: {
      generatedAt: now,
      scans: {
        generatedArtifacts: {
          source: "/catalog/generated",
          total: generatedArtifacts.length,
          available: generated.length,
          missing: missing.length,
          items: [...generated, ...missing],
        },
        publicationArtifacts: {
          source: "/api/v1/catalog/publications",
          total: publicationArtifacts.length,
          items: publicationArtifacts.map((entry) => ({
            name: entry.name,
            bytes: entry.bytes,
            lastModified: entry.lastModified,
            path: `/api/v1/catalog/publications/${encodeURIComponent(entry.name)}`,
            status: "available",
          })),
        },
      },
    },
    meta: {
      route: "/api/v1/scans",
      updatedAt: now,
    },
  })
}

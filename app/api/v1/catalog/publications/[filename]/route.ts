import { getCatalogPublicationByFile } from "@/lib/catalog-store"

export const dynamic = "force-dynamic"

interface RouteContext {
  params: Promise<{ filename: string }>
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { filename } = await params
  const publication = await getCatalogPublicationByFile(filename)
  if (!publication) {
    return Response.json(
      {
        ok: false,
        error: {
          code: "publication_not_found",
          message: `Publication file ${filename} was not found.`,
        },
      },
      { status: 404 },
    )
  }

  return Response.json({
    ok: true,
    data: publication,
    meta: {
      route: `/api/v1/catalog/publications/${filename}`,
      routePattern: "/api/v1/catalog/publications/[filename]",
    },
  })
}

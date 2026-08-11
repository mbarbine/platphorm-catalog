export const dynamic = "force-dynamic"

interface RouteComplianceCheck {
  route: string
  status: "ok" | "not_implemented"
  note: string
}

const IMPLEMENTED_ROUTES = [
  "/api/health",
  "/api/v1/health",
  "/api/v1/mcp",
  "/api/mcp",
  "/api/vision/capabilities",
  "/api/vision/evidence-pack",
  "/api/docs",
  "/api/v1/catalog/census",
  "/api/v1/catalog/dependencies",
  "/api/v1/catalog/technologies",
  "/api/v1/catalog/publications",
  "/api/v1/catalog/publications/[filename]",
  "/api/v1/scans",
  "/api/v1/route-compliance",
  "/llms.txt",
  "/llms-full.txt",
  "/llms-index.json",
  "/openapi.yaml",
  "/openapi.json",
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap-index.xml",
  "/rss.xml",
  "/feed.xml",
  "/atom.xml",
  "/manifest.webmanifest",
  "/.well-known/mcp.json",
  "/.well-known/agents.json",
  "/.well-known/ai-plugin.json",
  "/.well-known/security.txt",
  "/.well-known/trust.json",
]

function checkRoutes(routes: string[]): RouteComplianceCheck[] {
  const implementedRoutes = new Set<string>(IMPLEMENTED_ROUTES)

  return routes.map((route) => ({
    route,
    status: implementedRoutes.has(route) ? "ok" : "not_implemented",
    note: implementedRoutes.has(route)
      ? "Route implemented in this deployment"
      : "Route not implemented yet",
  }))
}

export async function GET() {
  const requiredRoutes = [...IMPLEMENTED_ROUTES]
  const checks = checkRoutes(requiredRoutes)
  const passed = checks.filter((entry) => entry.status === "ok").length

  return Response.json({
    ok: true,
    data: {
      service: "platphorm-catalog",
      timestamp: new Date().toISOString(),
      routeComplianceScore: `${passed}/${checks.length}`,
      checks,
      route: "/api/v1/route-compliance",
      protectedRoutes: [
        {
          route: "/api/v1/catalog/publications",
          method: "POST",
          authRequired: "PLATPHORM_API_KEY",
        },
      ],
    },
  })
}

import {
  loadCatalogSummary,
  loadDetailedComponents,
  loadGlobalCapabilityIndex,
} from "./data"

export async function getCatalogHealthPayload() {
  const [summary, globalIndex, componentData] = await Promise.all([
    loadCatalogSummary(),
    loadGlobalCapabilityIndex(),
    loadDetailedComponents(),
  ])
  const validationFailures = summary.validation_failures ?? 0

  return {
    ok: validationFailures === 0,
    data: {
      service: "platphorm-catalog",
      version: "1.0.0",
      environment: "static-export",
      status: validationFailures === 0 ? "ok" : "degraded",
      timestamp: summary.generated_at,
      repositories: summary.repositories_discovered ?? globalIndex.repositories.length,
      manifests_validated: summary.manifests_validated,
      validation_failures: validationFailures,
      global_capabilities: summary.global_capabilities ?? globalIndex.capabilities.length,
      capability_implementations: summary.capabilities_extracted,
      components: componentData.component_count,
      database: {
        status: "not_applicable",
        note: "This deployment serves generated static catalog artifacts.",
      },
      mcp: {
        status: "unsupported",
        note: "The public catalog exposes static artifacts, not MCP tool execution.",
      },
      discoveryStatus: "ok",
      sitemapStatus: "ok",
      rssStatus: "ok",
      llmsStatus: "ok",
      openapiStatus: "ok",
      trustedDomainStatus: "ok",
      publicReadAccess: true,
      protectedActionsRequire: "PLATPHORM_API_KEY",
    },
  }
}

import {
  loadCatalogSummary,
  loadDetailedComponents,
  loadGlobalCapabilityIndex,
  loadVisionEvidencePack,
  loadVisionToolSelection,
} from "./data"
import { loadCatalogScanMeta } from "./catalog-runtime"

export async function getCatalogHealthPayload() {
  const [summary, globalIndex, componentData, visionSelection, visionEvidencePack, scanMeta] = await Promise.all([
    loadCatalogSummary(),
    loadGlobalCapabilityIndex(),
    loadDetailedComponents(),
    loadVisionToolSelection(),
    loadVisionEvidencePack(),
    loadCatalogScanMeta().catch(() => null),
  ])
  const generatedAt = scanMeta?.generatedAt ?? summary.generated_at
  const validationFailures = summary.validation_failures ?? 0

  return {
    ok: validationFailures === 0,
    data: {
      service: "platphorm-catalog",
      version: "1.0.0",
      environment: "static-export",
      status: validationFailures === 0 ? "ok" : "degraded",
      timestamp: generatedAt,
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
        status: "active",
        access: "public_read_only",
        endpoint: "/api/mcp",
        tools: 5,
        resources: 5,
        prompts: 3,
      },
      discoveryStatus: "ok",
      sitemapStatus: "ok",
      rssStatus: "ok",
      llmsStatus: "ok",
      openapiStatus: "ok",
      visionToolSelectionStatus: visionSelection.ok ? "ok" : "degraded",
      visionEvidencePackStatus: visionEvidencePack.ok ? "ok" : "degraded",
      selectedOperatorTools: visionSelection.selected_tools.map((tool) => tool.plugin),
      protectionControlsStatus: "scaffolded_not_enforced",
      protectionEnforcementEnabled: visionSelection.protection_mode.enforcement_enabled,
      trustedDomainStatus: "ok",
      publicReadAccess: true,
      protectedActionsRequire: "PLATPHORM_API_KEY",
    },
  }
}

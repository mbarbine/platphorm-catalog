import path from "node:path";
import { CATALOG_DIRS } from "./lib/constants.js";
import { buildGlobalCapabilities, loadCatalogManifests } from "./lib/indexing.js";
import { writeJson } from "./lib/fs-utils.js";

export function normalizeCapabilitiesReport(): unknown {
  const manifests = loadCatalogManifests();
  const capabilities = buildGlobalCapabilities(manifests);
  const duplicates = capabilities.filter((capability) => capability.implementations.length > 1);
  const singleton = capabilities.filter((capability) => capability.implementations.length === 1);
  const domains = new Map<string, number>();
  for (const capability of capabilities) {
    const domain = capability.id.split(".")[0];
    domains.set(domain, (domains.get(domain) ?? 0) + 1);
  }
  const output = {
    schema_version: "1.0.0",
    generated_at: new Date().toISOString(),
    total_capabilities: capabilities.length,
    duplicate_capabilities: duplicates.map((capability) => ({
      id: capability.id,
      implementations: capability.implementations.map((implementation) => implementation.repo_id)
    })),
    singleton_capabilities: singleton.length,
    domains: [...domains.entries()]
      .map(([domain, count]) => ({ domain, count }))
      .sort((a, b) => b.count - a.count || a.domain.localeCompare(b.domain))
  };
  writeJson(path.join(CATALOG_DIRS.generated, "normalization-report.json"), output);
  return output;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const output = normalizeCapabilitiesReport() as { total_capabilities: number; duplicate_capabilities: unknown[] };
  console.log(`Normalized ${output.total_capabilities} capabilities; duplicates: ${output.duplicate_capabilities.length}`);
}


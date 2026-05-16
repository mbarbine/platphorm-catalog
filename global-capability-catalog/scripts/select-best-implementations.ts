import path from "node:path";
import { CATALOG_DIRS } from "./lib/constants.js";
import { buildGlobalCapabilities, loadCatalogManifests, scoreImplementation } from "./lib/indexing.js";
import { writeJson } from "./lib/fs-utils.js";
import { validateAgainstSchema } from "./lib/schema.js";

export function selectBestImplementations(): unknown {
  const manifests = loadCatalogManifests();
  const generatedAt = new Date().toISOString();
  const capabilities = buildGlobalCapabilities(manifests, generatedAt);
  const byRepo = new Map(manifests.map((manifest) => [manifest.repo.id, manifest]));
  const global_capabilities = capabilities.map((globalCapability) => {
    const implementations = globalCapability.implementations
      .map((implementation) => {
        const manifest = byRepo.get(implementation.repo_id);
        const capability = manifest?.capabilities.find((candidate) => candidate.id === globalCapability.id);
        if (!manifest || !capability) {
          return {
            repo_id: implementation.repo_id,
            score: 0,
            reason: "Implementation source was not available during ranking.",
            source_paths: implementation.source_paths
          };
        }
        return scoreImplementation(manifest, capability);
      })
      .sort((a, b) => b.score - a.score || a.repo_id.localeCompare(b.repo_id));
    return {
      id: globalCapability.id,
      name: globalCapability.name,
      implementations,
      recommended_source: implementations[0] ?? null
    };
  });
  const output = { schema_version: "1.0.0", generated_at: generatedAt, global_capabilities };
  writeJson(path.join(CATALOG_DIRS.generated, "best-implementations.json"), output);
  const validation = validateAgainstSchema("bestImplementations", output);
  if (!validation.valid) throw new Error(`Best implementation validation failed:\n${validation.errors.join("\n")}`);
  return output;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const output = selectBestImplementations() as { global_capabilities: unknown[] };
  console.log(`Ranked ${output.global_capabilities.length} global capabilities`);
}


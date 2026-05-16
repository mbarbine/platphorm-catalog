import path from "node:path";
import { CATALOG_DIRS } from "./lib/constants.js";
import { loadCatalogManifests, writeIndexes } from "./lib/indexing.js";
import { validateAgainstSchema } from "./lib/schema.js";
import { readJson } from "./lib/fs-utils.js";

export function buildIndex(): ReturnType<typeof writeIndexes> {
  const manifests = loadCatalogManifests();
  const result = writeIndexes(manifests);
  const globalIndex = readJson<unknown>(path.join(CATALOG_DIRS.generated, "capabilities.json"));
  const validation = validateAgainstSchema("globalIndex", globalIndex);
  if (!validation.valid) {
    throw new Error(`Global index validation failed:\n${validation.errors.join("\n")}`);
  }
  return result;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const result = buildIndex();
  console.log(`Indexed ${result.repositories.length} repositories and ${result.capabilities.length} capabilities`);
}


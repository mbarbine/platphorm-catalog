import { spawnSync } from "node:child_process";
import path from "node:path";
import { CATALOG_ROOT } from "./lib/constants.js";
import { getArg, parseArgs } from "./lib/cli.js";
import { readJson, writeJson } from "./lib/fs-utils.js";
import { buildBootstrapCatalog } from "./lib/analyze.js";
import { validateRepositoryManifest } from "./lib/schema.js";
import type { CatalogManifest, ScanArtifact } from "./lib/types.js";

export interface RepairOptions {
  manifestPath: string;
  useCodex?: boolean;
  verbose?: boolean;
}

export function repairManifest(options: RepairOptions): CatalogManifest {
  const manifestPath = path.resolve(options.manifestPath);
  let manifest = readJson<CatalogManifest>(manifestPath);

  if (options.useCodex && runCodexRepair(manifestPath, options.verbose)) {
    manifest = readJson<CatalogManifest>(manifestPath);
  } else {
    const scanPath = path.resolve(CATALOG_ROOT, manifest.repo.scan_artifact);
    const scan = readJson<ScanArtifact>(scanPath);
    manifest = buildBootstrapCatalog(scan, manifest.repo.scan_artifact);
  }

  const validation = validateRepositoryManifest(manifest);
  manifest.catalog_quality.validation_status = validation.valid ? "repaired" : "invalid";
  manifest.catalog_quality.validated_at = new Date().toISOString();
  writeJson(manifestPath, manifest);
  return manifest;
}

function runCodexRepair(manifestPath: string, verbose = false): boolean {
  const prompt = [
    `Repair ${path.relative(CATALOG_ROOT, manifestPath)} so it conforms to schemas/repository.catalog.schema.json.`,
    "Preserve source-backed facts. Do not invent missing data. Keep source paths real.",
    "Use local LLMs files only as supplemental context."
  ].join(" ");
  const result = spawnSync(
    "codex",
    [
      "exec",
      "--sandbox",
      "workspace-write",
      "--output-schema",
      "./schemas/repository.catalog.schema.json",
      "-o",
      manifestPath,
      prompt
    ],
    {
      cwd: CATALOG_ROOT,
      encoding: "utf8",
      stdio: verbose ? "inherit" : "pipe"
    }
  );
  return result.status === 0;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = parseArgs();
  const manifestPath = getArg(args, "manifest") ?? args.positional[0];
  if (!manifestPath) {
    console.error("Usage: npm run repair -- --manifest <catalog/repositories/repo.catalog.json>");
    process.exit(2);
  }
  const useCodex = args.flags.has("use-codex") || process.env.CATALOG_USE_CODEX === "1";
  const repaired = repairManifest({ manifestPath, useCodex, verbose: args.flags.has("verbose") });
  const validation = validateRepositoryManifest(repaired);
  if (!validation.valid) {
    console.error(validation.errors.join("\n"));
    process.exit(1);
  }
  console.log(`Repaired ${repaired.repo.id}`);
}


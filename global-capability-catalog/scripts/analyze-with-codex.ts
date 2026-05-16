import { spawnSync } from "node:child_process";
import path from "node:path";
import { CATALOG_DIRS, CATALOG_ROOT } from "./lib/constants.js";
import { getArg, parseArgs } from "./lib/cli.js";
import { readJson, writeJson } from "./lib/fs-utils.js";
import { buildBootstrapCatalog } from "./lib/analyze.js";
import type { CatalogManifest, ScanArtifact } from "./lib/types.js";
import { validateRepositoryManifest } from "./lib/schema.js";

export interface AnalyzeOptions {
  scanPath: string;
  outputPath?: string;
  useCodex?: boolean;
  verbose?: boolean;
}

export function analyzeRepository(options: AnalyzeOptions): CatalogManifest {
  const scan = readJson<ScanArtifact>(options.scanPath);
  const outputPath = options.outputPath ?? path.join(CATALOG_DIRS.repositories, `${scan.repo.id}.catalog.json`);

  if (options.useCodex) {
    const success = runCodexAnalysis(scan, options.scanPath, outputPath, options.verbose);
    if (success) return readJson<CatalogManifest>(outputPath);
    if (options.verbose) console.warn(`Codex analysis failed for ${scan.repo.id}; falling back to bootstrap manifest.`);
  }

  const manifest = buildBootstrapCatalog(scan, path.relative(CATALOG_ROOT, options.scanPath).split(path.sep).join("/"));
  const validation = validateRepositoryManifest(manifest);
  manifest.catalog_quality.validation_status = validation.valid ? "valid" : "invalid";
  manifest.catalog_quality.validated_at = new Date().toISOString();
  writeJson(outputPath, manifest);
  return manifest;
}

function runCodexAnalysis(scan: ScanArtifact, scanPath: string, outputPath: string, verbose = false): boolean {
  const prompt = [
    `Analyze repository ${scan.repo.name} at ${scan.repo.path} using scan artifact ${path.relative(CATALOG_ROOT, scanPath)}.`,
    "Produce a schema-valid reusable capability catalog manifest.",
    "Use local llms files from the scan as high-signal context when present, but do not invent hard facts."
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
      outputPath,
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
  const scanPath = getArg(args, "scan") ?? args.positional[0];
  if (!scanPath) {
    console.error("Usage: npm run analyze -- --scan <catalog/scans/repo.scan.json>");
    process.exit(2);
  }
  const outputPath = getArg(args, "output");
  const useCodex = args.flags.has("use-codex") || process.env.CATALOG_USE_CODEX === "1";
  const manifest = analyzeRepository({ scanPath: path.resolve(scanPath), outputPath, useCodex, verbose: args.flags.has("verbose") });
  console.log(`Analyzed ${manifest.repo.id}: ${manifest.capabilities.length} capabilities`);
}


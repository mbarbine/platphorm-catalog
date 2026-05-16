import path from "node:path";
import { CATALOG_DIRS, DEFAULT_SOURCE_ROOT } from "./lib/constants.js";
import { getArg, getArgList, getNumberArg, parseArgs } from "./lib/cli.js";
import { ensureDir, exists, readJson, writeJson } from "./lib/fs-utils.js";
import { discoverRepos, writeRepoTargets } from "./discover-repos.js";
import { scanRepo } from "./scan-repo.js";
import { analyzeRepository } from "./analyze-with-codex.js";
import { repairManifest } from "./repair-manifest.js";
import { validateRepositoryManifest, validateScanArtifact } from "./lib/schema.js";
import { writeIndexes } from "./lib/indexing.js";
import { selectBestImplementations } from "./select-best-implementations.js";
import { normalizeCapabilitiesReport } from "./normalize-capabilities.js";
import { generateDocs } from "./generate-docs.js";
import type { CatalogManifest, RepoTarget, ScanArtifact } from "./lib/types.js";

export interface CatalogOptions {
  root?: string;
  limit?: number;
  include?: string[];
  exclude?: string[];
  resume?: boolean;
  dryRun?: boolean;
  parallel?: number;
  verbose?: boolean;
  useCodex?: boolean;
}

interface RepoRunResult {
  repo_id: string;
  scanned: boolean;
  manifest_generated: boolean;
  manifest_valid: boolean;
  capabilities: number;
  errors: string[];
}

export async function catalogAllRepos(options: CatalogOptions = {}): Promise<{
  repositories_discovered: number;
  repositories_selected: number;
  repositories_scanned: number;
  manifests_generated: number;
  manifests_validated: number;
  validation_failures: number;
  capabilities_extracted: number;
  results: RepoRunResult[];
}> {
  ensureOutputDirs();
  const root = options.root ?? DEFAULT_SOURCE_ROOT;
  const discovered = discoverRepos({ root });
  writeRepoTargets(discovered);
  const selected = applyFilters(discovered, options);

  if (options.dryRun) {
    const summary = {
      schema_version: "1.0.0",
      generated_at: new Date().toISOString(),
      mode: "dry-run",
      repositories_discovered: discovered.length,
      repositories_selected: selected.length,
      selected_repositories: selected.map((repo) => repo.id)
    };
    writeJson(path.join(CATALOG_DIRS.generated, "catalog-summary.json"), summary);
    if (options.verbose) console.log(JSON.stringify(summary, null, 2));
    return {
      repositories_discovered: discovered.length,
      repositories_selected: selected.length,
      repositories_scanned: 0,
      manifests_generated: 0,
      manifests_validated: 0,
      validation_failures: 0,
      capabilities_extracted: 0,
      results: []
    };
  }

  const results = await mapLimit(selected, options.parallel ?? 1, (repo) => processRepo(repo, root, options));
  const manifests = selected
    .map((repo) => path.join(CATALOG_DIRS.repositories, `${repo.id}.catalog.json`))
    .filter(exists)
    .map((manifestPath) => readJson<CatalogManifest>(manifestPath));
  const indexResult = writeIndexes(manifests);
  selectBestImplementations();
  normalizeCapabilitiesReport();
  generateDocs();

  const summary = {
    schema_version: "1.0.0",
    generated_at: new Date().toISOString(),
    source_root: root,
    analysis_mode: options.useCodex ? "codex" : "bootstrap",
    repositories_discovered: discovered.length,
    repositories_selected: selected.length,
    repositories_scanned: results.filter((result) => result.scanned).length,
    manifests_generated: results.filter((result) => result.manifest_generated).length,
    manifests_validated: results.filter((result) => result.manifest_valid).length,
    validation_failures: results.filter((result) => !result.manifest_valid).length,
    capabilities_extracted: indexResult.capabilities.reduce((sum, capability) => sum + capability.implementations.length, 0),
    global_capabilities: indexResult.capabilities.length,
    duplicate_capabilities: indexResult.duplicateCapabilities.length,
    results
  };
  writeJson(path.join(CATALOG_DIRS.generated, "catalog-summary.json"), summary);
  return summary;
}

async function processRepo(repo: RepoTarget, sourceRoot: string, options: CatalogOptions): Promise<RepoRunResult> {
  const scanPath = path.join(CATALOG_DIRS.scans, `${repo.id}.scan.json`);
  const manifestPath = path.join(CATALOG_DIRS.repositories, `${repo.id}.catalog.json`);
  const errors: string[] = [];
  let scanned = false;
  let manifestGenerated = false;
  let manifestValid = false;
  let capabilities = 0;

  try {
    if (options.verbose) console.log(`scan ${repo.id}`);
    let scan: ScanArtifact;
    if (options.resume && exists(scanPath)) {
      scan = readJson<ScanArtifact>(scanPath);
    } else {
      scan = scanRepo({ repoPath: repo.path, sourceRoot, repoId: repo.id });
      const scanValidation = validateScanArtifact(scan);
      if (!scanValidation.valid) throw new Error(`scan validation failed:\n${scanValidation.errors.join("\n")}`);
      writeJson(scanPath, scan);
    }
    scanned = true;

    if (options.verbose) console.log(`analyze ${repo.id}`);
    let manifest: CatalogManifest;
    if (options.resume && exists(manifestPath)) {
      manifest = readJson<CatalogManifest>(manifestPath);
    } else {
      manifest = analyzeRepository({ scanPath, outputPath: manifestPath, useCodex: options.useCodex, verbose: options.verbose });
    }
    manifestGenerated = true;

    let validation = validateRepositoryManifest(manifest);
    if (!validation.valid) {
      errors.push(...validation.errors);
      if (options.verbose) console.warn(`repair ${repo.id}: ${validation.errors.length} validation issue(s)`);
      for (let attempt = 0; attempt < 2 && !validation.valid; attempt += 1) {
        manifest = repairManifest({ manifestPath, useCodex: options.useCodex, verbose: options.verbose });
        validation = validateRepositoryManifest(manifest);
      }
    }

    manifest.catalog_quality.validation_status = validation.valid ? "valid" : "invalid";
    manifest.catalog_quality.validated_at = new Date().toISOString();
    writeJson(manifestPath, manifest);
    manifestValid = validation.valid;
    capabilities = manifest.capabilities.length;
    if (!validation.valid) errors.push(...validation.errors);
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
  }

  if (options.verbose) {
    const status = manifestValid ? "ok" : "fail";
    console.log(`${status} ${repo.id}: ${capabilities} capabilities`);
  }
  return {
    repo_id: repo.id,
    scanned,
    manifest_generated: manifestGenerated,
    manifest_valid: manifestValid,
    capabilities,
    errors: [...new Set(errors)]
  };
}

function applyFilters(repos: RepoTarget[], options: CatalogOptions): RepoTarget[] {
  const include = options.include ?? [];
  const exclude = options.exclude ?? [];
  let selected = repos;
  if (include.length) {
    selected = selected.filter((repo) => include.some((pattern) => matchesRepo(repo, pattern)));
  }
  if (exclude.length) {
    selected = selected.filter((repo) => !exclude.some((pattern) => matchesRepo(repo, pattern)));
  }
  if (options.limit !== undefined) selected = selected.slice(0, options.limit);
  return selected;
}

function matchesRepo(repo: RepoTarget, pattern: string): boolean {
  return repo.id.includes(pattern) || repo.name.includes(pattern) || repo.relative_path.includes(pattern);
}

async function mapLimit<T, R>(items: T[], limit: number, worker: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = [];
  let nextIndex = 0;
  const workers = Array.from({ length: Math.max(1, limit) }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await worker(items[index]);
    }
  });
  await Promise.all(workers);
  return results;
}

function ensureOutputDirs(): void {
  for (const dir of [CATALOG_DIRS.scans, CATALOG_DIRS.repositories, CATALOG_DIRS.generated, CATALOG_DIRS.docs, CATALOG_DIRS.repoDocs, CATALOG_DIRS.capabilityDocs]) {
    ensureDir(dir);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = parseArgs();
  const summary = await catalogAllRepos({
    root: getArg(args, "root", DEFAULT_SOURCE_ROOT),
    limit: getNumberArg(args, "limit"),
    include: getArgList(args, "include"),
    exclude: getArgList(args, "exclude"),
    resume: args.flags.has("resume"),
    dryRun: args.flags.has("dry-run"),
    parallel: getNumberArg(args, "parallel", 1),
    verbose: args.flags.has("verbose"),
    useCodex: args.flags.has("use-codex") || process.env.CATALOG_USE_CODEX === "1"
  });
  console.log(
    `Cataloged ${summary.manifests_validated}/${summary.repositories_selected} selected repositories; ${summary.capabilities_extracted} capability implementations.`
  );
  process.exit(summary.validation_failures ? 1 : 0);
}


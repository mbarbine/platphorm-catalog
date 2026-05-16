import path from "node:path";
import { CATALOG_ROOT } from "./lib/constants.js";
import { parseArgs } from "./lib/cli.js";
import { catalogJsonFiles, inferSchemaKind, validateAgainstSchema, validateRepositoryManifest, validateScanArtifact } from "./lib/schema.js";
import { readJson, writeJson } from "./lib/fs-utils.js";
import type { CatalogManifest, ScanArtifact } from "./lib/types.js";

export interface FileValidation {
  file: string;
  valid: boolean;
  errors: string[];
}

export function validateFile(filePath: string): FileValidation {
  const resolved = path.resolve(filePath);
  const kind = inferSchemaKind(resolved);
  if (!kind) {
    return { file: resolved, valid: false, errors: [`Cannot infer schema kind for ${resolved}`] };
  }
  const data = readJson<unknown>(resolved);
  if (kind === "scan") {
    const result = validateScanArtifact(data as ScanArtifact);
    return { file: resolved, ...result };
  }
  if (kind === "repository") {
    const result = validateRepositoryManifest(data as CatalogManifest);
    return { file: resolved, ...result };
  }
  const result = validateAgainstSchema(kind, data);
  return { file: resolved, ...result };
}

export function validateAll(): FileValidation[] {
  return catalogJsonFiles().map(validateFile);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = parseArgs();
  const files = args.flags.has("all") ? catalogJsonFiles() : args.positional;
  if (!files.length) {
    console.error("Usage: npm run validate -- [--all] <file...>");
    process.exit(2);
  }

  const results = files.map((file) => validateFile(path.resolve(CATALOG_ROOT, file)));
  const failures = results.filter((result) => !result.valid);
  for (const result of results) {
    const rel = path.relative(CATALOG_ROOT, result.file);
    if (result.valid) {
      console.log(`ok ${rel}`);
    } else {
      console.error(`fail ${rel}`);
      for (const error of result.errors) console.error(`  - ${error}`);
    }
  }
  writeJson(path.join(CATALOG_ROOT, "catalog/generated/validation-report.json"), {
    schema_version: "1.0.0",
    generated_at: new Date().toISOString(),
    total: results.length,
    failures: failures.length,
    results: results.map((result) => ({
      file: path.relative(CATALOG_ROOT, result.file).split(path.sep).join("/"),
      valid: result.valid,
      errors: result.errors
    }))
  });
  process.exit(failures.length ? 1 : 0);
}


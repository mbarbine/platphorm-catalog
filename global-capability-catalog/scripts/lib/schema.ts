import fs from "node:fs";
import path from "node:path";
import type { ErrorObject } from "ajv";
import Ajv2020Module from "ajv/dist/2020.js";
import addFormatsModule from "ajv-formats";
import { CATALOG_DIRS, SCHEMA_PATHS } from "./constants.js";
import { readJson, sourcePathExists } from "./fs-utils.js";
import type { CatalogManifest, ScanArtifact } from "./types.js";

export type SchemaKind = "scan" | "repository" | "capability" | "globalIndex" | "bestImplementations";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

type ValidatorFunction = ((data: unknown) => boolean) & { errors?: ErrorObject[] | null };

export function createAjv() {
  const ajv = new (Ajv2020Module as unknown as { new (options: Record<string, unknown>): { addSchema: (schema: unknown) => void; getSchema: (id: string) => ((data: unknown) => boolean) | undefined; compile: (schema: unknown) => ((data: unknown) => boolean) } })({
    allErrors: true,
    strict: false
  });
  (addFormatsModule as unknown as (ajv: unknown) => void)(ajv);
  const schemas = Object.values(SCHEMA_PATHS).map((schemaPath) => readJson<Record<string, unknown>>(schemaPath));
  for (const schema of schemas) ajv.addSchema(schema);
  return ajv;
}

export function validateAgainstSchema(kind: SchemaKind, data: unknown): ValidationResult {
  const ajv = createAjv();
  const schema = readJson<Record<string, unknown>>(SCHEMA_PATHS[kind]);
  const schemaId = typeof schema.$id === "string" ? schema.$id : undefined;
  const validate = ((schemaId ? ajv.getSchema(schemaId) : undefined) ?? ajv.compile(schema)) as ValidatorFunction;
  const valid = validate(data);
  return {
    valid,
    errors: valid ? [] : formatAjvErrors(validate.errors ?? [])
  };
}

function formatAjvErrors(errors: ErrorObject[]): string[] {
  return errors.map((error) => `${error.instancePath || "/"} ${error.message ?? "schema error"}`);
}

export function validateScanArtifact(scan: ScanArtifact): ValidationResult {
  const schemaResult = validateAgainstSchema("scan", scan);
  const errors = [...schemaResult.errors];
  const repoRoot = scan.repo.path;

  const sourcePaths = new Set<string>();
  for (const route of [...scan.routes.api_routes, ...scan.routes.app_routes]) sourcePaths.add(route.source_path);
  for (const item of [...scan.components, ...scan.data_models, ...scan.tests]) sourcePaths.add(item.source_path);
  for (const file of [
    ...scan.database.schemas,
    ...scan.database.migrations,
    ...scan.ci.workflows,
    ...scan.containers.dockerfiles,
    ...scan.containers.compose_files,
    ...scan.env.example_files,
    ...scan.configs,
    ...scan.docs.readme_paths,
    ...scan.docs.doc_paths,
    ...scan.docs.llms_context_paths,
    ...Object.values(scan.discovery_files).flat(),
    ...scan.license.paths
  ]) {
    sourcePaths.add(file.path);
  }

  for (const sourcePath of sourcePaths) {
    if (!sourcePathExists(repoRoot, sourcePath)) errors.push(`scan path does not exist: ${sourcePath}`);
  }

  return { valid: errors.length === 0, errors };
}

export function validateRepositoryManifest(manifest: CatalogManifest): ValidationResult {
  const schemaResult = validateAgainstSchema("repository", manifest);
  const errors = [...schemaResult.errors];
  const repoRoot = manifest.repo.path;

  for (const capability of manifest.capabilities) {
    for (const sourcePath of capability.source_paths) {
      if (!sourcePathExists(repoRoot, sourcePath)) errors.push(`${capability.id} source path does not exist: ${sourcePath}`);
    }
    for (const testPath of capability.tests.test_paths) {
      if (!sourcePathExists(repoRoot, testPath)) errors.push(`${capability.id} test path does not exist: ${testPath}`);
    }
    for (const docsPath of [...capability.docs.docs_paths, ...capability.docs.llms_context_paths]) {
      if (!sourcePathExists(repoRoot, docsPath)) errors.push(`${capability.id} doc path does not exist: ${docsPath}`);
    }
    for (const risk of capability.risks) {
      for (const evidencePath of risk.evidence_paths) {
        if (!sourcePathExists(repoRoot, evidencePath)) errors.push(`${capability.id}/${risk.id} evidence path does not exist: ${evidencePath}`);
      }
    }
  }

  for (const risk of manifest.repository_risks) {
    for (const evidencePath of risk.evidence_paths) {
      if (!sourcePathExists(repoRoot, evidencePath)) errors.push(`${risk.id} evidence path does not exist: ${evidencePath}`);
    }
  }

  const secretFindings = findSecretLikeValues(manifest);
  errors.push(...secretFindings.map((finding) => `secret-like value in catalog output at ${finding}`));

  return { valid: errors.length === 0, errors };
}

export function findSecretLikeValues(value: unknown, currentPath = "$"): string[] {
  const findings: string[] = [];
  if (typeof value === "string") {
    if (isCatalogReferencePath(currentPath)) return findings;
    if (looksLikeSecretValue(value)) findings.push(currentPath);
    return findings;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => findings.push(...findSecretLikeValues(item, `${currentPath}[${index}]`)));
    return findings;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      findings.push(...findSecretLikeValues(child, `${currentPath}.${key}`));
    }
  }
  return findings;
}

export function looksLikeSecretValue(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < 20) return false;
  if (trimmed.startsWith("/") || trimmed.startsWith("catalog/") || /^[A-Za-z]:[\\/]/.test(trimmed)) return false;
  const secretPatterns = [
    /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
    /\bAKIA[0-9A-Z]{16}\b/,
    /\bgh[pousr]_[A-Za-z0-9_]{24,}\b/,
    /\bsk-[A-Za-z0-9_-]{24,}\b/,
    /\bxox[baprs]-[A-Za-z0-9-]{24,}\b/
  ];
  return secretPatterns.some((pattern) => pattern.test(trimmed));
}

function isCatalogReferencePath(currentPath: string): boolean {
  return /\.(source_paths|evidence_paths|test_paths|docs_paths|llms_context_paths)\[\d+\]$/.test(currentPath) || /\.(path|scan_artifact|remote_url)$/.test(currentPath);
}

export function inferSchemaKind(filePath: string): SchemaKind | null {
  const base = path.basename(filePath);
  if (base.endsWith(".scan.json")) return "scan";
  if (base.endsWith(".catalog.json")) return "repository";
  if (base === "capabilities.json" || base === "global-index.json") return "globalIndex";
  if (base === "best-implementations.json") return "bestImplementations";
  return null;
}

export function catalogJsonFiles(): string[] {
  const files: string[] = [];
  for (const dir of [CATALOG_DIRS.scans, CATALOG_DIRS.repositories]) {
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir)) {
      if (entry.endsWith(".json")) files.push(path.join(dir, entry));
    }
  }
  for (const name of ["capabilities.json", "best-implementations.json", "global-index.json"]) {
    const generatedPath = path.join(CATALOG_DIRS.generated, name);
    if (fs.existsSync(generatedPath)) files.push(generatedPath);
  }
  return files.sort((a, b) => a.localeCompare(b));
}

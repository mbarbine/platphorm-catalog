import fs from "node:fs";
import path from "node:path";
import {
  FRAMEWORK_DEPENDENCIES,
  INTEGRATION_HINTS,
  LANGUAGE_BY_EXTENSION,
  SCANNER_VERSION,
  SCHEMA_VERSION,
  SENSITIVE_DATA_KEYWORDS
} from "./lib/constants.js";
import { getArg, parseArgs } from "./lib/cli.js";
import {
  isLikelyTextFile,
  readJson,
  readTextSafe,
  safeRelative,
  uniqueBy,
  uniqueSorted,
  walkFiles,
  writeJson
} from "./lib/fs-utils.js";
import { getGitMetadata } from "./lib/git.js";
import { likelySecretName, redactSecretLine } from "./lib/secret-redaction.js";
import type { DetectedItem, RepoTarget, RouteItem, ScanArtifact, SourceFile, SourceNamedItem } from "./lib/types.js";
import { CATALOG_DIRS } from "./lib/constants.js";
import { validateScanArtifact } from "./lib/schema.js";

const TEST_FILE_PATTERN = /(^|[./_-])(test|spec|e2e|playwright|cypress)([./_-]|$)/i;
const ENV_REF_PATTERN = /\b(?:process\.env\.|import\.meta\.env\.|env\.|Deno\.env\.get\(["'])([A-Z][A-Z0-9_]{2,})/g;
const ENV_ASSIGN_PATTERN = /^\s*(?:export\s+)?([A-Z][A-Z0-9_]{2,})\s*=/;
const METHOD_EXPORT_PATTERN = /export\s+(?:async\s+)?function\s+(GET|POST|PUT|PATCH|DELETE|OPTIONS|HEAD)\b/g;

export interface ScanOptions {
  repoPath: string;
  sourceRoot?: string;
  repoId?: string;
}

export function scanRepo(options: ScanOptions): ScanArtifact {
  const repoPath = path.resolve(options.repoPath);
  const sourceRoot = options.sourceRoot ? path.resolve(options.sourceRoot) : path.dirname(repoPath);
  const repoName = path.basename(repoPath);
  const relative_path = path.relative(sourceRoot, repoPath).split(path.sep).join("/") || repoName;
  const repo: RepoTarget = {
    id: options.repoId ?? relative_path.replaceAll("/", "__").toLowerCase().replace(/[^a-z0-9._-]+/g, "-"),
    name: repoName,
    path: repoPath,
    relative_path,
    ...getGitMetadata(repoPath)
  };

  const files = walkFiles(repoPath, { includeHidden: true });
  const relFiles = files.map((file) => safeRelative(repoPath, file));
  const packageManifests = collectPackageManifests(repoPath, relFiles);
  const dependencies = mergeDependencies(packageManifests);
  const textCache = new Map<string, string>();
  const textFor = (relative: string): string => {
    const existing = textCache.get(relative);
    if (existing !== undefined) return existing;
    const absolute = path.join(repoPath, relative);
    if (!isLikelyTextFile(absolute)) return "";
    try {
      const text = readTextSafe(absolute);
      textCache.set(relative, text);
      return text;
    } catch {
      return "";
    }
  };

  const languages = collectLanguages(repoPath, files);
  const frameworks = collectFrameworks(relFiles, dependencies);
  const routes = collectRoutes(relFiles, textFor);
  const components = collectComponents(relFiles);
  const dataModels = collectDataModels(relFiles);
  const database = collectDatabase(relFiles, dependencies);
  const tests = collectTests(relFiles);
  const ci = { workflows: relFiles.filter((file) => file.startsWith(".github/workflows/") && /\.ya?ml$/i.test(file)).map(pathFile) };
  const containers = {
    dockerfiles: relFiles.filter((file) => /(^|\/)Dockerfile(\..*)?$/i.test(file)).map(pathFile),
    compose_files: relFiles.filter((file) => /(^|\/)docker-compose[^/]*\.ya?ml$/i.test(file) || /(^|\/)compose\.ya?ml$/i.test(file)).map(pathFile)
  };
  const env = collectEnv(relFiles, textFor);
  const configs = collectConfigs(relFiles);
  const docs = collectDocs(relFiles);
  const discovery_files = collectDiscoveryFiles(relFiles);
  const integrations = collectIntegrations(relFiles, dependencies, env.variables.map((variable) => variable.name), textFor);
  const license = collectLicense(repoPath, relFiles);
  const comments = collectComments(relFiles, textFor);
  const security = collectSecurity(relFiles, textFor, env.variables.map((variable) => variable.name));

  return {
    schema_version: SCHEMA_VERSION,
    scanner: { name: "global-capability-catalog", version: SCANNER_VERSION },
    repo,
    languages,
    frameworks,
    packages: {
      package_manager: detectPackageManager(relFiles),
      manifests: packageManifests
    },
    routes,
    components,
    data_models: dataModels,
    database,
    tests,
    ci,
    containers,
    env,
    configs,
    docs,
    discovery_files,
    integrations,
    license,
    comments,
    security,
    generated_at: new Date().toISOString()
  };
}

function pathFile(file: string): SourceFile {
  return { path: file };
}

function collectPackageManifests(repoPath: string, relFiles: string[]): ScanArtifact["packages"]["manifests"] {
  return relFiles
    .filter((file) => file.endsWith("package.json"))
    .map((file) => {
      try {
        const json = readJson<{
          name?: string;
          version?: string;
          scripts?: Record<string, string>;
          dependencies?: Record<string, string>;
          devDependencies?: Record<string, string>;
        }>(path.join(repoPath, file));
        return {
          path: file,
          name: json.name ?? null,
          version: json.version ?? null,
          scripts: json.scripts ?? {},
          dependencies: json.dependencies ?? {},
          dev_dependencies: json.devDependencies ?? {}
        };
      } catch {
        return {
          path: file,
          name: null,
          version: null,
          scripts: {},
          dependencies: {},
          dev_dependencies: {}
        };
      }
    });
}

function mergeDependencies(manifests: ScanArtifact["packages"]["manifests"]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const manifest of manifests) {
    Object.assign(out, manifest.dependencies, manifest.dev_dependencies);
  }
  return out;
}

function collectLanguages(repoPath: string, files: string[]): ScanArtifact["languages"] {
  const stats = new Map<string, { files: number; bytes: number }>();
  for (const file of files) {
    const language = LANGUAGE_BY_EXTENSION[path.extname(file)] ?? (path.basename(file) === "Dockerfile" ? "Dockerfile" : null);
    if (!language) continue;
    const existing = stats.get(language) ?? { files: 0, bytes: 0 };
    let bytes = 0;
    try {
      bytes = fs.statSync(file).size;
    } catch {
      bytes = 0;
    }
    stats.set(language, { files: existing.files + 1, bytes: existing.bytes + bytes });
  }
  return [...stats.entries()]
    .map(([language, value]) => ({ language, ...value }))
    .sort((a, b) => b.bytes - a.bytes || a.language.localeCompare(b.language));
}

function collectFrameworks(relFiles: string[], dependencies: Record<string, string>): DetectedItem[] {
  const items: DetectedItem[] = [];
  for (const [dependency, name] of Object.entries(FRAMEWORK_DEPENDENCIES)) {
    if (dependencies[dependency]) items.push({ name, confidence: "high", evidence_paths: packageEvidence(relFiles) });
  }
  const configHints: Array<[RegExp, string]> = [
    [/next\.config\.[cm]?[jt]s$/, "Next.js"],
    [/vite\.config\.[cm]?[jt]s$/, "Vite"],
    [/svelte\.config\.[cm]?[jt]s$/, "Svelte"],
    [/astro\.config\.[cm]?[jt]s$/, "Astro"],
    [/tailwind\.config\.[cm]?[jt]s$/, "Tailwind CSS"],
    [/prisma\/schema\.prisma$/, "Prisma"]
  ];
  for (const [pattern, name] of configHints) {
    const evidence = relFiles.filter((file) => pattern.test(file));
    if (evidence.length) items.push({ name, confidence: "high", evidence_paths: evidence });
  }
  return uniqueBy(items, (item) => item.name).sort((a, b) => a.name.localeCompare(b.name));
}

function packageEvidence(relFiles: string[]): string[] {
  return relFiles.filter((file) => file.endsWith("package.json")).slice(0, 5);
}

function collectRoutes(relFiles: string[], textFor: (relative: string) => string): ScanArtifact["routes"] {
  const api_routes: RouteItem[] = [];
  const app_routes: RouteItem[] = [];
  for (const file of relFiles) {
    if (/^app\/api\/.*\/route\.(ts|tsx|js|jsx)$/.test(file) || /^src\/app\/api\/.*\/route\.(ts|tsx|js|jsx)$/.test(file)) {
      api_routes.push({
        route: nextRouteFromFile(file, /(?:^|\/)app\/api\/(.+)\/route\.(ts|tsx|js|jsx)$/),
        source_path: file,
        kind: "next-app-api-route",
        methods: methodsFromText(textFor(file))
      });
    } else if (/^pages\/api\/.+\.(ts|tsx|js|jsx)$/.test(file) || /^src\/pages\/api\/.+\.(ts|tsx|js|jsx)$/.test(file)) {
      api_routes.push({
        route: pagesRouteFromFile(file, /(?:^|\/)pages\/api\/(.+)\.(ts|tsx|js|jsx)$/),
        source_path: file,
        kind: "next-pages-api-route",
        methods: methodsFromText(textFor(file), ["UNKNOWN"])
      });
    } else if (/^app\/.*\/page\.(ts|tsx|js|jsx|mdx)$/.test(file) || /^src\/app\/.*\/page\.(ts|tsx|js|jsx|mdx)$/.test(file)) {
      app_routes.push({
        route: nextRouteFromFile(file, /(?:^|\/)app\/(.+)\/page\.(ts|tsx|js|jsx|mdx)$/),
        source_path: file,
        kind: "next-app-page",
        methods: ["GET"]
      });
    } else if (/^pages\/.+\.(ts|tsx|js|jsx|mdx)$/.test(file) || /^src\/pages\/.+\.(ts|tsx|js|jsx|mdx)$/.test(file)) {
      if (!file.includes("/api/")) {
        app_routes.push({
          route: pagesRouteFromFile(file, /(?:^|\/)pages\/(.+)\.(ts|tsx|js|jsx|mdx)$/),
          source_path: file,
          kind: "next-pages-route",
          methods: ["GET"]
        });
      }
    } else if (/^src\/routes\/.+\+page\.(svelte|ts|js)$/.test(file) || /^src\/routes\/.+\+server\.(ts|js)$/.test(file)) {
      const isApi = file.endsWith("+server.ts") || file.endsWith("+server.js");
      const route = svelteRouteFromFile(file);
      (isApi ? api_routes : app_routes).push({
        route,
        source_path: file,
        kind: isApi ? "sveltekit-server-route" : "sveltekit-page",
        methods: isApi ? methodsFromText(textFor(file), ["UNKNOWN"]) : ["GET"]
      });
    }
  }
  return {
    api_routes: uniqueBy(api_routes, (route) => `${route.kind}:${route.source_path}`),
    app_routes: uniqueBy(app_routes, (route) => `${route.kind}:${route.source_path}`)
  };
}

function nextRouteFromFile(file: string, pattern: RegExp): string {
  const match = file.match(pattern);
  const raw = match?.[1] ?? "";
  const normalized = raw.replace(/\/?\(.*?\)\//g, "/").replace(/\/page$/, "");
  return `/${normalized.replace(/\/route$/, "").replace(/\/index$/, "").replace(/^\//, "")}`.replace(/\/$/, "") || "/";
}

function pagesRouteFromFile(file: string, pattern: RegExp): string {
  const match = file.match(pattern);
  const raw = match?.[1] ?? "";
  return `/${raw.replace(/\/index$/, "").replace(/^\//, "")}`.replace(/\/$/, "") || "/";
}

function svelteRouteFromFile(file: string): string {
  return `/${file.replace(/^src\/routes\//, "").replace(/\/?\+(page|server)\.(svelte|ts|js)$/, "").replace(/^\//, "")}`.replace(/\/$/, "") || "/";
}

function methodsFromText(text: string, fallback: string[] = ["GET"]): string[] {
  const methods = new Set<string>();
  for (const match of text.matchAll(METHOD_EXPORT_PATTERN)) methods.add(match[1]);
  for (const match of text.matchAll(/\b(app|router)\.(get|post|put|patch|delete|options|head)\s*\(/gi)) methods.add(match[2].toUpperCase());
  return methods.size ? [...methods].sort() : fallback;
}

function collectComponents(relFiles: string[]): SourceNamedItem[] {
  return relFiles
    .filter((file) => /(components|ui)\//i.test(file) && /\.(tsx|jsx|svelte|vue|astro)$/.test(file))
    .map((file) => ({ name: componentName(file), kind: "ui-component", source_path: file }))
    .slice(0, 500);
}

function componentName(file: string): string {
  return path.basename(file).replace(/\.(tsx|jsx|svelte|vue|astro)$/, "");
}

function collectDataModels(relFiles: string[]): SourceNamedItem[] {
  const patterns: Array<[RegExp, string]> = [
    [/prisma\/schema\.prisma$/, "prisma-schema"],
    [/(^|\/)(schema|schemas|model|models)\.(ts|js|sql|prisma|py)$/i, "schema-file"],
    [/(^|\/)(models|schemas|entities)\/.+\.(ts|js|py|rb|go)$/i, "model-file"],
    [/(^|\/)drizzle\/.+\.(ts|js|sql)$/i, "drizzle-model"],
    [/(^|\/)migrations\/.+\.(sql|ts|js)$/i, "migration"]
  ];
  const out: SourceNamedItem[] = [];
  for (const file of relFiles) {
    for (const [pattern, kind] of patterns) {
      if (pattern.test(file)) {
        out.push({ name: path.basename(file).replace(/\.[^.]+$/, ""), kind, source_path: file });
        break;
      }
    }
  }
  return uniqueBy(out, (item) => item.source_path).slice(0, 500);
}

function collectDatabase(relFiles: string[], dependencies: Record<string, string>): ScanArtifact["database"] {
  const databases = new Set<string>();
  for (const dependency of Object.keys(dependencies)) {
    if (/prisma/i.test(dependency)) databases.add("prisma");
    if (/drizzle/i.test(dependency)) databases.add("drizzle");
    if (/mongoose|mongodb/i.test(dependency)) databases.add("mongodb");
    if (/pg|postgres|postgresql/i.test(dependency)) databases.add("postgres");
    if (/mysql/i.test(dependency)) databases.add("mysql");
    if (/sqlite/i.test(dependency)) databases.add("sqlite");
    if (/redis/i.test(dependency)) databases.add("redis");
  }
  const schemas = relFiles.filter((file) => /(schema\.prisma|schema\.(sql|ts|js)|drizzle\/.+\.(ts|js|sql))$/i.test(file)).map(pathFile);
  const migrations = relFiles.filter((file) => /(^|\/)(migrations|migration)\/.+\.(sql|ts|js|json)$/i.test(file)).map(pathFile);
  return { databases: uniqueSorted(databases), schemas, migrations };
}

function collectTests(relFiles: string[]): SourceNamedItem[] {
  return relFiles
    .filter((file) => TEST_FILE_PATTERN.test(file) && /\.(ts|tsx|js|jsx|mjs|cjs|py|rb|go|rs)$/.test(file))
    .map((file) => ({ name: path.basename(file), kind: inferTestKind(file), source_path: file }))
    .slice(0, 1000);
}

function inferTestKind(file: string): string {
  if (/playwright/i.test(file)) return "playwright";
  if (/cypress/i.test(file)) return "cypress";
  if (/e2e/i.test(file)) return "e2e";
  return "unit-or-integration";
}

function collectEnv(relFiles: string[], textFor: (relative: string) => string): ScanArtifact["env"] {
  const example_files = relFiles.filter((file) => /(^|\/)\.env(\..*)?$/.test(file) || /\.env\.example$/i.test(file) || /env\.sample$/i.test(file)).map(pathFile);
  const variables = new Map<string, { source_paths: Set<string>; likely_secret: boolean }>();

  for (const file of relFiles) {
    const text = textFor(file);
    if (!text) continue;
    if (example_files.some((example) => example.path === file)) {
      for (const line of text.split(/\r?\n/)) {
        const match = line.match(ENV_ASSIGN_PATTERN);
        if (match) addEnvVar(variables, match[1], file);
      }
    }
    for (const match of text.matchAll(ENV_REF_PATTERN)) addEnvVar(variables, match[1], file);
  }

  return {
    example_files,
    variables: [...variables.entries()]
      .map(([name, value]) => ({
        name,
        source_paths: uniqueSorted(value.source_paths),
        likely_secret: value.likely_secret || likelySecretName(name)
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  };
}

function addEnvVar(target: Map<string, { source_paths: Set<string>; likely_secret: boolean }>, name: string, file: string): void {
  const existing = target.get(name) ?? { source_paths: new Set<string>(), likely_secret: likelySecretName(name) };
  existing.source_paths.add(file);
  existing.likely_secret = existing.likely_secret || likelySecretName(name);
  target.set(name, existing);
}

function collectConfigs(relFiles: string[]): SourceFile[] {
  const patterns = [
    /(^|\/)(tsconfig|jsconfig|next\.config|vite\.config|svelte\.config|astro\.config|tailwind\.config|postcss\.config|eslint\.config|biome|prettier|turbo|vercel|netlify|wrangler|remix\.config)\./i,
    /(^|\/)(package|pnpm-workspace|docker-compose|compose)\.(json|ya?ml)$/i
  ];
  return relFiles.filter((file) => patterns.some((pattern) => pattern.test(file))).map(pathFile);
}

function collectDocs(relFiles: string[]): ScanArtifact["docs"] {
  const readme_paths = relFiles.filter((file) => /(^|\/)README(\.[a-z0-9]+)?$/i.test(file)).map(pathFile);
  const doc_paths = relFiles.filter((file) => /(^|\/)(docs|documentation|doc)\//i.test(file) && /\.(md|mdx|txt|rst)$/i.test(file)).map(pathFile);
  const llms_context_paths = relFiles.filter((file) => /(^|\/)llms(-full|-index)?\.(txt|json)$/i.test(file)).map(pathFile);
  return { readme_paths, doc_paths, llms_context_paths };
}

function collectDiscoveryFiles(relFiles: string[]): ScanArtifact["discovery_files"] {
  return {
    openapi: relFiles.filter((file) => /(^|\/)(openapi|swagger)\.(ya?ml|json)$/i.test(file)).map(pathFile),
    mcp: relFiles.filter((file) => /(^|\/)(mcp|mcp-server|\.well-known\/mcp)\.(json|ya?ml|ts|js)$/i.test(file) || /(^|\/)api\/mcp\//i.test(file)).map(pathFile),
    llms: relFiles.filter((file) => /(^|\/)llms(-full|-index)?\.(txt|json)$/i.test(file)).map(pathFile),
    sitemaps: relFiles.filter((file) => /(^|\/)sitemap(-index)?\.xml$/i.test(file)).map(pathFile),
    feeds: relFiles.filter((file) => /(^|\/)(rss|feed|atom)\.xml$/i.test(file)).map(pathFile),
    well_known: relFiles.filter((file) => /(^|\/)\.well-known\//i.test(file)).map(pathFile),
    robots: relFiles.filter((file) => /(^|\/)robots\.txt$/i.test(file)).map(pathFile),
    manifests: relFiles.filter((file) => /(^|\/)manifest\.webmanifest$/i.test(file)).map(pathFile)
  };
}

function collectIntegrations(
  relFiles: string[],
  dependencies: Record<string, string>,
  envVarNames: string[],
  textFor: (relative: string) => string
): DetectedItem[] {
  const evidenceByName = new Map<string, Set<string>>();
  const combinedNames = [...Object.keys(dependencies), ...envVarNames];
  for (const hint of INTEGRATION_HINTS) {
    for (const name of combinedNames) {
      if (hint.patterns.some((pattern) => pattern.test(name))) {
        const evidence = evidenceByName.get(hint.name) ?? new Set<string>();
        for (const packageFile of packageEvidence(relFiles)) evidence.add(packageFile);
        for (const file of relFiles.filter((candidate) => textFor(candidate).includes(name)).slice(0, 8)) evidence.add(file);
        evidenceByName.set(hint.name, evidence);
      }
    }
  }
  return [...evidenceByName.entries()]
    .map(([name, evidence]) => ({ name, confidence: evidence.size ? "medium" as const : "low" as const, evidence_paths: uniqueSorted(evidence) }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function collectLicense(repoPath: string, relFiles: string[]): ScanArtifact["license"] {
  const paths = relFiles.filter((file) => /(^|\/)(LICENSE|LICENCE|COPYING)(\.[a-z0-9]+)?$/i.test(file)).map(pathFile);
  let spdx: string | null = null;
  if (paths[0]) {
    const text = readTextSafe(path.join(repoPath, paths[0].path), 20_000);
    if (/MIT License/i.test(text)) spdx = "MIT";
    else if (/Apache License/i.test(text)) spdx = "Apache-2.0";
    else if (/GNU GENERAL PUBLIC LICENSE/i.test(text)) spdx = "GPL";
    else if (/BSD/i.test(text)) spdx = "BSD";
  }
  return { spdx, paths };
}

function collectComments(relFiles: string[], textFor: (relative: string) => string): ScanArtifact["comments"] {
  const out: ScanArtifact["comments"] = [];
  for (const file of relFiles) {
    const text = textFor(file);
    if (!text) continue;
    const lines = text.split(/\r?\n/);
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      let kind: ScanArtifact["comments"][number]["kind"] | null = null;
      if (/\bTODO\b/i.test(trimmed)) kind = "todo";
      if (/\bFIXME\b/i.test(trimmed)) kind = "fixme";
      if (/\bSECURITY\b/i.test(trimmed)) kind = "security";
      if (/\bDEPRECATED\b/i.test(trimmed)) kind = "deprecated";
      if (/\bUNSAFE\b|\bHACK\b/i.test(trimmed)) kind = "unsafe";
      if (kind) out.push({ kind, source_path: file, line: index + 1, text: trimmed.slice(0, 240) });
    });
  }
  return out.slice(0, 1000);
}

function collectSecurity(relFiles: string[], textFor: (relative: string) => string, envVarNames: string[]): ScanArtifact["security"] {
  const secret_risks: ScanArtifact["security"]["secret_risks"] = [];
  const unsafeEvidence = new Map<string, Set<string>>();
  const sensitiveEvidence = new Map<string, Set<string>>();
  const unsafePatterns: Array<[string, RegExp]> = [
    ["unsafe-eval", /\beval\s*\(/],
    ["new-function", /\bnew\s+Function\s*\(/],
    ["child-process-exec", /\b(exec|execSync)\s*\(/],
    ["dangerously-set-html", /dangerouslySetInnerHTML|\.innerHTML\s*=/],
    ["ssrf-review-needed", /\bfetch\s*\(\s*(req|request|url|input|target|href)/i],
    ["sql-injection-review-needed", /\$\{.*\}.*(SELECT|INSERT|UPDATE|DELETE)|\bquery\s*\([^)]*\+/is]
  ];
  const secretValuePatterns: Array<[string, RegExp]> = [
    ["aws-access-key", /\bAKIA[0-9A-Z]{16}\b/],
    ["github-token", /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/],
    ["openai-key", /\bsk-[A-Za-z0-9_-]{20,}\b/],
    ["private-key", /-----BEGIN [A-Z ]*PRIVATE KEY-----/]
  ];

  for (const file of relFiles) {
    const text = textFor(file);
    if (!text) continue;
    const lines = text.split(/\r?\n/);
    lines.forEach((line, index) => {
      for (const [kind, pattern] of secretValuePatterns) {
        if (pattern.test(line)) secret_risks.push({ kind, source_path: file, line: index + 1, redacted_sample: redactSecretLine(line.trim()).slice(0, 240) });
      }
      for (const [name, pattern] of unsafePatterns) {
        if (pattern.test(line)) addEvidence(unsafeEvidence, name, file);
      }
      const lower = line.toLowerCase();
      for (const keyword of SENSITIVE_DATA_KEYWORDS) {
        if (lower.includes(keyword)) addEvidence(sensitiveEvidence, keyword, file);
      }
    });
  }

  for (const envVarName of envVarNames) {
    if (likelySecretName(envVarName)) addEvidence(sensitiveEvidence, "secret-like environment variables", "package.json");
  }

  return {
    secret_risks: secret_risks.slice(0, 500),
    unsafe_patterns: detectedItemsFromEvidence(unsafeEvidence),
    sensitive_data_indicators: detectedItemsFromEvidence(sensitiveEvidence)
  };
}

function addEvidence(target: Map<string, Set<string>>, name: string, file: string): void {
  const existing = target.get(name) ?? new Set<string>();
  existing.add(file);
  target.set(name, existing);
}

function detectedItemsFromEvidence(evidence: Map<string, Set<string>>): DetectedItem[] {
  return [...evidence.entries()]
    .map(([name, paths]) => ({ name, confidence: "medium" as const, evidence_paths: uniqueSorted(paths).filter((file) => file !== "package.json" || true).slice(0, 20) }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function detectPackageManager(relFiles: string[]): string | null {
  if (relFiles.includes("pnpm-lock.yaml")) return "pnpm";
  if (relFiles.includes("yarn.lock")) return "yarn";
  if (relFiles.includes("package-lock.json")) return "npm";
  if (relFiles.includes("bun.lockb") || relFiles.includes("bun.lock")) return "bun";
  if (relFiles.includes("poetry.lock")) return "poetry";
  if (relFiles.includes("Pipfile.lock")) return "pipenv";
  if (relFiles.some((file) => file.endsWith("package.json"))) return "npm";
  return null;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = parseArgs();
  const repoPath = getArg(args, "repo") ?? args.positional[0];
  if (!repoPath) {
    console.error("Usage: npm run scan -- --repo <path>");
    process.exit(2);
  }
  const sourceRoot = getArg(args, "root");
  const scan = scanRepo({ repoPath, sourceRoot });
  const output = getArg(args, "output") ?? path.join(CATALOG_DIRS.scans, `${scan.repo.id}.scan.json`);
  const validation = validateScanArtifact(scan);
  if (!validation.valid) {
    console.error(validation.errors.join("\n"));
    process.exit(1);
  }
  writeJson(output, scan);
  console.log(`Wrote ${output}`);
}

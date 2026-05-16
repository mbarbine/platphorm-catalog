import fs from "node:fs";
import path from "node:path";
import { CATALOG_DIRS, CATALOG_ROOT, DEFAULT_SOURCE_ROOT } from "./lib/constants.js";
import { getArg, getNumberArg, parseArgs } from "./lib/cli.js";
import { ensureDir, isDirectory, isInside, sanitizeId, writeJson } from "./lib/fs-utils.js";
import { getGitMetadata } from "./lib/git.js";
import type { RepoTarget } from "./lib/types.js";

export interface DiscoverOptions {
  root?: string;
  maxDepth?: number;
  verbose?: boolean;
}

export function discoverRepos(options: DiscoverOptions = {}): RepoTarget[] {
  const root = path.resolve(options.root ?? DEFAULT_SOURCE_ROOT);
  const maxDepth = options.maxDepth ?? 6;
  const catalogRoot = path.resolve(CATALOG_ROOT);
  const repos: RepoTarget[] = [];
  const seen = new Set<string>();

  function walk(current: string, depth: number): void {
    if (depth > maxDepth) return;
    if (!isDirectory(current)) return;

    const resolvedCurrent = path.resolve(current);
    if (resolvedCurrent === catalogRoot || isInside(catalogRoot, resolvedCurrent)) return;

    const gitDir = path.join(current, ".git");
    if (isDirectory(gitDir) || fs.existsSync(gitDir)) {
      const repoPath = path.resolve(current);
      if (!seen.has(repoPath)) {
        seen.add(repoPath);
        const name = path.basename(repoPath);
        const relative_path = path.relative(root, repoPath).split(path.sep).join("/");
        const idBase = relative_path === "" ? name : relative_path.replaceAll("/", "__");
        repos.push({
          id: sanitizeId(idBase),
          name,
          path: repoPath,
          relative_path: relative_path || name,
          ...getGitMetadata(repoPath)
        });
      }
      return;
    }

    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (["node_modules", ".cache", ".next", "dist", "build", "coverage"].includes(entry.name)) continue;
      walk(path.join(current, entry.name), depth + 1);
    }
  }

  walk(root, 0);
  return repos.sort((a, b) => a.id.localeCompare(b.id));
}

export function writeRepoTargets(repos: RepoTarget[], outputPath = path.join(CATALOG_DIRS.generated, "repo-targets.json")): void {
  ensureDir(path.dirname(outputPath));
  writeJson(outputPath, {
    schema_version: "1.0.0",
    generated_at: new Date().toISOString(),
    source_root: DEFAULT_SOURCE_ROOT,
    repositories: repos
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = parseArgs();
  const root = getArg(args, "root", DEFAULT_SOURCE_ROOT);
  const maxDepth = getNumberArg(args, "max-depth", 6);
  const output = getArg(args, "output", path.join(CATALOG_DIRS.generated, "repo-targets.json"));
  const repos = discoverRepos({ root, maxDepth });
  writeRepoTargets(repos, output);
  console.log(`Discovered ${repos.length} repositories under ${root}`);
}


import fs from "node:fs";
import path from "node:path";
import { IGNORED_DIR_NAMES, MAX_SCAN_FILES, MAX_TEXT_READ_BYTES, TEXT_EXTENSIONS } from "./constants.js";

export function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

export function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

export function writeJson(filePath: string, data: unknown): void {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

export function writeText(filePath: string, data: string): void {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, data.endsWith("\n") ? data : `${data}\n`);
}

export function exists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

export function isDirectory(filePath: string): boolean {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch {
    return false;
  }
}

export function isFile(filePath: string): boolean {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

export function safeRelative(root: string, target: string): string {
  return path.relative(root, target).split(path.sep).join("/");
}

export function sanitizeId(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^[^a-z0-9]+/, "")
    .replace(/[^a-z0-9]+$/, "")
    .slice(0, 120);
}

export function uniqueSorted(values: Iterable<string>): string[] {
  return [...new Set([...values].filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

export function uniqueBy<T>(values: T[], key: (item: T) => string): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const value of values) {
    const itemKey = key(value);
    if (!seen.has(itemKey)) {
      seen.add(itemKey);
      out.push(value);
    }
  }
  return out;
}

export function readTextSafe(filePath: string, maxBytes = MAX_TEXT_READ_BYTES): string {
  const stat = fs.statSync(filePath);
  const bytes = Math.min(stat.size, maxBytes);
  const fd = fs.openSync(filePath, "r");
  try {
    const buffer = Buffer.alloc(bytes);
    fs.readSync(fd, buffer, 0, bytes, 0);
    return buffer.toString("utf8");
  } finally {
    fs.closeSync(fd);
  }
}

export function isLikelyTextFile(filePath: string): boolean {
  const base = path.basename(filePath);
  if (base === "Dockerfile" || base.startsWith(".env")) return true;
  return TEXT_EXTENSIONS.has(path.extname(filePath));
}

export interface WalkOptions {
  maxFiles?: number;
  includeHidden?: boolean;
  ignoredDirNames?: Set<string>;
}

export function walkFiles(root: string, options: WalkOptions = {}): string[] {
  const maxFiles = options.maxFiles ?? MAX_SCAN_FILES;
  const ignored = options.ignoredDirNames ?? IGNORED_DIR_NAMES;
  const out: string[] = [];

  function walk(current: string): void {
    if (out.length >= maxFiles) return;
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (out.length >= maxFiles) return;
      if (!options.includeHidden && entry.name.startsWith(".") && entry.name !== ".github" && entry.name !== ".well-known" && entry.name !== ".env.example") {
        if (entry.name !== ".env" && entry.name !== ".env.local") continue;
      }
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (!ignored.has(entry.name)) walk(absolute);
      } else if (entry.isFile()) {
        out.push(absolute);
      }
    }
  }

  walk(root);
  return out.sort((a, b) => a.localeCompare(b));
}

export function isInside(parent: string, child: string): boolean {
  const relative = path.relative(parent, child);
  return Boolean(relative) && !relative.startsWith("..") && !path.isAbsolute(relative);
}

export function sourcePathExists(repoRoot: string, sourcePath: string): boolean {
  if (!sourcePath || sourcePath.includes("\0")) return false;
  const absolute = path.resolve(repoRoot, sourcePath);
  if (absolute !== repoRoot && !isInside(repoRoot, absolute)) return false;
  return fs.existsSync(absolute);
}


import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { discoverRepos } from "../scripts/discover-repos.js";
import { scanRepo } from "../scripts/scan-repo.js";
import { buildBootstrapCatalog } from "../scripts/lib/analyze.js";
import { validateRepositoryManifest, validateScanArtifact } from "../scripts/lib/schema.js";
import { buildGlobalCapabilities } from "../scripts/lib/indexing.js";

function makeTempRepo(): { root: string; repo: string } {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-test-"));
  const repo = path.join(root, "owner__demo-repo");
  fs.mkdirSync(path.join(repo, ".git"), { recursive: true });
  fs.mkdirSync(path.join(repo, "app/api/health"), { recursive: true });
  fs.mkdirSync(path.join(repo, "components"), { recursive: true });
  fs.mkdirSync(path.join(repo, "tests"), { recursive: true });
  fs.writeFileSync(
    path.join(repo, "package.json"),
    JSON.stringify({
      name: "demo-repo",
      scripts: { build: "next build", test: "vitest run" },
      dependencies: { next: "15.0.0", react: "19.0.0", zod: "3.24.0" },
      devDependencies: { vitest: "2.0.0" }
    })
  );
  fs.writeFileSync(path.join(repo, "README.md"), "# Demo Repo\n\nA test dashboard repository.");
  fs.writeFileSync(path.join(repo, "llms.txt"), "# Demo Repo\n\nMachine-readable project context.");
  fs.writeFileSync(path.join(repo, "app/api/health/route.ts"), "export async function GET() { return Response.json({ ok: true }) }");
  fs.writeFileSync(path.join(repo, "components/status-card.tsx"), "export function StatusCard() { return <div /> }");
  fs.writeFileSync(path.join(repo, "tests/status-card.test.ts"), "import { expect, test } from 'vitest'; test('ok', () => expect(true).toBe(true));");
  return { root, repo };
}

describe("capability catalog", () => {
  it("discovers repositories recursively from a source root", () => {
    const { root } = makeTempRepo();
    const repos = discoverRepos({ root });
    expect(repos).toHaveLength(1);
    expect(repos[0].id).toBe("owner__demo-repo");
  });

  it("generates schema-valid deterministic scan artifacts with llms context", () => {
    const { root, repo } = makeTempRepo();
    const scan = scanRepo({ repoPath: repo, sourceRoot: root, repoId: "owner__demo-repo" });
    expect(scan.docs.llms_context_paths.map((file) => file.path)).toContain("llms.txt");
    expect(scan.routes.api_routes[0].route).toBe("/health");
    const validation = validateScanArtifact(scan);
    expect(validation.valid).toBe(true);
  });

  it("builds schema-valid bootstrap manifests with source-backed capabilities", () => {
    const { root, repo } = makeTempRepo();
    const scan = scanRepo({ repoPath: repo, sourceRoot: root, repoId: "owner__demo-repo" });
    const manifest = buildBootstrapCatalog(scan, "catalog/scans/owner__demo-repo.scan.json");
    expect(manifest.capabilities.some((capability) => capability.id === "discovery.llms-files")).toBe(true);
    expect(manifest.capabilities.every((capability) => capability.source_paths.length > 0)).toBe(true);
    const validation = validateRepositoryManifest(manifest);
    expect(validation.valid).toBe(true);
  });

  it("rejects manifests with nonexistent source paths", () => {
    const { root, repo } = makeTempRepo();
    const scan = scanRepo({ repoPath: repo, sourceRoot: root, repoId: "owner__demo-repo" });
    const manifest = buildBootstrapCatalog(scan);
    manifest.capabilities[0].source_paths.push("missing.ts");
    const validation = validateRepositoryManifest(manifest);
    expect(validation.valid).toBe(false);
    expect(validation.errors.join("\n")).toContain("missing.ts");
  });

  it("rejects invalid capability ids and confidence values", () => {
    const { root, repo } = makeTempRepo();
    const scan = scanRepo({ repoPath: repo, sourceRoot: root, repoId: "owner__demo-repo" });
    const manifest = buildBootstrapCatalog(scan);
    manifest.capabilities[0].id = "misc feature";
    // @ts-expect-error intentional invalid value for validation coverage
    manifest.capabilities[0].confidence = "certain";
    const validation = validateRepositoryManifest(manifest);
    expect(validation.valid).toBe(false);
    expect(validation.errors.join("\n")).toMatch(/pattern|enum/);
  });

  it("builds duplicate-normalized global capabilities and best candidates", () => {
    const { root, repo } = makeTempRepo();
    const scan = scanRepo({ repoPath: repo, sourceRoot: root, repoId: "owner__demo-repo" });
    const manifestA = buildBootstrapCatalog(scan);
    const manifestB = {
      ...manifestA,
      repo: { ...manifestA.repo, id: "owner__demo-repo-copy", name: "demo-repo-copy" }
    };
    const capabilities = buildGlobalCapabilities([manifestA, manifestB]);
    const apiCapability = capabilities.find((capability) => capability.id === "api.route-handlers");
    expect(apiCapability?.implementations).toHaveLength(2);
    expect(apiCapability?.recommended_source?.repo_id).toBeTruthy();
  });
});


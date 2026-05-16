import path from "node:path";
import { CATALOG_DIRS } from "./lib/constants.js";
import { ensureDir, readJson, writeText } from "./lib/fs-utils.js";
import { buildGlobalCapabilities, loadCatalogManifests, type GlobalCapability } from "./lib/indexing.js";
import type { CatalogManifest } from "./lib/types.js";

export function generateDocs(): { repositories: number; capabilities: number } {
  const manifests = loadCatalogManifests();
  const capabilities = buildGlobalCapabilities(manifests);
  ensureDir(CATALOG_DIRS.docs);
  ensureDir(CATALOG_DIRS.repoDocs);
  ensureDir(CATALOG_DIRS.capabilityDocs);
  writeText(path.join(CATALOG_DIRS.docs, "index.md"), renderIndex(manifests, capabilities));
  for (const manifest of manifests) {
    writeText(path.join(CATALOG_DIRS.repoDocs, `${manifest.repo.id}.md`), renderRepository(manifest));
  }
  for (const capability of capabilities) {
    writeText(path.join(CATALOG_DIRS.capabilityDocs, `${capability.id}.md`), renderCapability(capability));
  }
  return { repositories: manifests.length, capabilities: capabilities.length };
}

function renderIndex(manifests: CatalogManifest[], capabilities: GlobalCapability[]): string {
  const duplicates = capabilities.filter((capability) => capability.implementations.length > 1);
  const topDomains = domainCounts(capabilities).slice(0, 12);
  return [
    "# Global Capability Catalog",
    "",
    `Generated repositories: ${manifests.length}`,
    `Generated capabilities: ${capabilities.length}`,
    `Duplicate capabilities: ${duplicates.length}`,
    "",
    "## Top Capability Domains",
    "",
    ...topDomains.map((entry) => `- ${entry.domain}: ${entry.count}`),
    "",
    "## Repositories",
    "",
    ...manifests.map((manifest) => `- [${manifest.repo.name}](repositories/${manifest.repo.id}.md): ${manifest.capabilities.length} capabilities`),
    "",
    "## Capabilities",
    "",
    ...capabilities.map((capability) => `- [${capability.id}](capabilities/${capability.id}.md): ${capability.implementations.length} implementation(s)`)
  ].join("\n");
}

function renderRepository(manifest: CatalogManifest): string {
  return [
    `# ${manifest.repo.name}`,
    "",
    manifest.repo.description,
    "",
    "## Metadata",
    "",
    `- ID: \`${manifest.repo.id}\``,
    `- Path: \`${manifest.repo.path}\``,
    `- Remote: ${manifest.repo.remote_url ? `\`${manifest.repo.remote_url}\`` : "unknown"}`,
    `- Primary language: ${manifest.repo.primary_language ?? "unknown"}`,
    `- Frameworks: ${manifest.repo.frameworks.length ? manifest.repo.frameworks.join(", ") : "none detected"}`,
    `- Maturity: ${manifest.repo.maturity}`,
    `- Confidence: ${manifest.repo.confidence}`,
    "",
    "## Capabilities",
    "",
    ...manifest.capabilities.flatMap((capability) => [
      `### ${capability.name}`,
      "",
      `- ID: \`${capability.id}\``,
      `- Type: ${capability.type}`,
      `- Maturity: ${capability.maturity}`,
      `- Confidence: ${capability.confidence}`,
      `- Reuse: ${capability.reuse.reusable}, difficulty ${capability.reuse.extraction_difficulty}`,
      `- Source paths: ${capability.source_paths.map((sourcePath) => `\`${sourcePath}\``).join(", ")}`,
      `- Tests: ${capability.tests.has_tests ? capability.tests.test_paths.length : "none detected"}`,
      `- LLMs context: ${capability.docs.llms_context_paths.length ? capability.docs.llms_context_paths.map((sourcePath) => `\`${sourcePath}\``).join(", ") : "none detected"}`,
      "",
      capability.summary,
      ""
    ]),
    "## Repository Risks",
    "",
    ...(manifest.repository_risks.length
      ? manifest.repository_risks.map((risk) => `- [${risk.severity}] ${risk.summary} Evidence: ${risk.evidence_paths.map((sourcePath) => `\`${sourcePath}\``).join(", ")}`)
      : ["- None recorded."]),
    "",
    "## Gaps",
    "",
    ...(manifest.catalog_quality.missing_evidence.length ? manifest.catalog_quality.missing_evidence.map((gap) => `- ${gap}`) : ["- None recorded."])
  ].join("\n");
}

function renderCapability(capability: GlobalCapability): string {
  return [
    `# ${capability.id}`,
    "",
    capability.summary,
    "",
    "## Metadata",
    "",
    `- Name: ${capability.name}`,
    `- Type: ${capability.type}`,
    `- Reuse score: ${capability.reuse_score}`,
    `- Implementations: ${capability.implementations.length}`,
    `- Risk summary: ${capability.risk_summary}`,
    "",
    "## Recommended Source",
    "",
    capability.recommended_source
      ? `- ${capability.recommended_source.repo_id}: ${capability.recommended_source.score} - ${capability.recommended_source.reason}`
      : "- No implementation selected.",
    "",
    "## Implementations",
    "",
    ...capability.implementations.map((implementation) =>
      [
        `### ${implementation.repo_id}`,
        "",
        `- Maturity: ${implementation.maturity}`,
        `- Confidence: ${implementation.confidence}`,
        `- Reuse: ${implementation.reuse}`,
        `- Risk count: ${implementation.risk_count}`,
        `- Test count: ${implementation.test_count}`,
        `- Source paths: ${implementation.source_paths.map((sourcePath) => `\`${sourcePath}\``).join(", ")}`
      ].join("\n")
    )
  ].join("\n");
}

function domainCounts(capabilities: GlobalCapability[]): Array<{ domain: string; count: number }> {
  const counts = new Map<string, number>();
  for (const capability of capabilities) {
    const domain = capability.id.split(".")[0];
    counts.set(domain, (counts.get(domain) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([domain, count]) => ({ domain, count }))
    .sort((a, b) => b.count - a.count || a.domain.localeCompare(b.domain));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const result = generateDocs();
  console.log(`Generated docs for ${result.repositories} repositories and ${result.capabilities} capabilities`);
}


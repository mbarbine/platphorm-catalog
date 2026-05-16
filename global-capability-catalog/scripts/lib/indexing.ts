import fs from "node:fs";
import path from "node:path";
import { CATALOG_DIRS } from "./constants.js";
import { readJson, uniqueSorted, writeJson, writeText } from "./fs-utils.js";
import type { CapabilityManifest, CatalogManifest } from "./types.js";

export interface ImplementationScore {
  repo_id: string;
  score: number;
  reason: string;
  source_paths: string[];
}

export interface GlobalCapability {
  id: string;
  name: string;
  type: string;
  summary: string;
  implementations: Array<{
    repo_id: string;
    repo_name: string;
    maturity: string;
    confidence: string;
    source_paths: string[];
    reuse: string;
    risk_count: number;
    test_count: number;
  }>;
  recommended_source: ImplementationScore | null;
  related_capabilities: string[];
  reuse_score: number;
  maturity_distribution: Record<string, number>;
  risk_summary: string;
  source_repos: string[];
  lastUpdatedAt: string;
}

export function loadCatalogManifests(dir = CATALOG_DIRS.repositories): CatalogManifest[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((entry) => entry.endsWith(".catalog.json"))
    .sort((a, b) => a.localeCompare(b))
    .map((entry) => readJson<CatalogManifest>(path.join(dir, entry)));
}

export function buildGlobalCapabilities(manifests: CatalogManifest[], generatedAt = new Date().toISOString()): GlobalCapability[] {
  const groups = new Map<string, Array<{ manifest: CatalogManifest; capability: CapabilityManifest }>>();
  for (const manifest of manifests) {
    for (const capability of manifest.capabilities) {
      const existing = groups.get(capability.id) ?? [];
      existing.push({ manifest, capability });
      groups.set(capability.id, existing);
    }
  }

  return [...groups.entries()]
    .map(([id, implementations]) => {
      const first = implementations[0].capability;
      const scored = implementations
        .map(({ manifest, capability }) => scoreImplementation(manifest, capability))
        .sort((a, b) => b.score - a.score || a.repo_id.localeCompare(b.repo_id));
      const implementationRecords = implementations
        .map(({ manifest, capability }) => ({
          repo_id: manifest.repo.id,
          repo_name: manifest.repo.name,
          maturity: capability.maturity,
          confidence: capability.confidence,
          source_paths: capability.source_paths,
          reuse: capability.reuse.reusable,
          risk_count: capability.risks.length,
          test_count: capability.tests.test_paths.length
        }))
        .sort((a, b) => a.repo_id.localeCompare(b.repo_id));
      const maturity_distribution: Record<string, number> = {};
      for (const implementation of implementationRecords) {
        maturity_distribution[implementation.maturity] = (maturity_distribution[implementation.maturity] ?? 0) + 1;
      }
      const totalRisks = implementationRecords.reduce((sum, implementation) => sum + implementation.risk_count, 0);
      const averageScore = scored.length ? Math.round(scored.reduce((sum, item) => sum + item.score, 0) / scored.length) : 0;
      return {
        id,
        name: first.name,
        type: first.type,
        summary: first.summary,
        implementations: implementationRecords,
        recommended_source: scored[0] ?? null,
        related_capabilities: uniqueSorted(implementations.flatMap(({ capability }) => capability.related_capabilities)),
        reuse_score: averageScore,
        maturity_distribution,
        risk_summary: totalRisks ? `${totalRisks} risk findings across ${implementationRecords.length} implementations.` : "No capability-specific risk findings recorded.",
        source_repos: uniqueSorted(implementationRecords.map((implementation) => implementation.repo_id)),
        lastUpdatedAt: generatedAt
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id));
}

export function scoreImplementation(manifest: CatalogManifest, capability: CapabilityManifest): ImplementationScore {
  let score = 0;
  const reasons: string[] = [];
  const maturityScores: Record<string, number> = {
    production: 25,
    internal: 18,
    prototype: 8,
    experimental: 6,
    deprecated: 0,
    unknown: 3
  };
  score += maturityScores[capability.maturity] ?? 3;
  reasons.push(`${capability.maturity} maturity`);

  if (capability.confidence === "high") score += 15;
  else if (capability.confidence === "medium") score += 8;
  else score += 2;

  if (capability.tests.has_tests) {
    score += Math.min(20, 8 + capability.tests.test_paths.length);
    reasons.push("test evidence present");
  } else {
    score -= 8;
    reasons.push("missing test evidence");
  }

  if (capability.docs.readme || capability.docs.docs_paths.length || capability.docs.llms_context_paths.length) {
    score += 8;
    reasons.push("documentation/context present");
  }

  const reuseScores: Record<string, number> = {
    full: 15,
    partial: 11,
    pattern_only: 6,
    unknown: 1,
    not_recommended: -15
  };
  score += reuseScores[capability.reuse.reusable] ?? 0;

  const difficultyScores: Record<string, number> = { low: 10, medium: 5, high: -6, unknown: 0 };
  score += difficultyScores[capability.reuse.extraction_difficulty] ?? 0;

  for (const value of Object.values(capability.reuse.coupling)) {
    if (value === "low") score += 2;
    if (value === "high") score -= 4;
  }

  if (capability.data_handling.validation.length) score += 4;
  if (capability.data_handling.auth_requirements.length) score += 2;
  if (capability.data_handling.sensitive_data.length) score -= 4;
  score -= capability.risks.length * 6;
  if (manifest.repository_risks.some((risk) => risk.severity === "critical")) score -= 10;

  const bounded = Math.max(0, Math.min(100, Math.round(score)));
  return {
    repo_id: manifest.repo.id,
    score: bounded,
    reason: reasons.join(", "),
    source_paths: capability.source_paths
  };
}

export function writeIndexes(manifests: CatalogManifest[], outputDir = CATALOG_DIRS.generated): {
  repositories: unknown[];
  capabilities: GlobalCapability[];
  duplicateCapabilities: GlobalCapability[];
} {
  const generatedAt = new Date().toISOString();
  const capabilities = buildGlobalCapabilities(manifests, generatedAt);
  const repositories = manifests
    .map((manifest) => ({
      id: manifest.repo.id,
      name: manifest.repo.name,
      path: manifest.repo.path,
      remote_url: manifest.repo.remote_url,
      description: manifest.repo.description,
      primary_language: manifest.repo.primary_language,
      languages: manifest.repo.languages,
      frameworks: manifest.repo.frameworks,
      capability_count: manifest.capabilities.length,
      maturity: manifest.repo.maturity,
      confidence: manifest.repo.confidence,
      risks: manifest.repository_risks.length
    }))
    .sort((a, b) => a.id.localeCompare(b.id));
  const duplicateCapabilities = capabilities.filter((capability) => capability.implementations.length > 1);

  writeJson(path.join(outputDir, "repos.json"), {
    schema_version: "1.0.0",
    generated_at: generatedAt,
    repositories
  });

  const globalIndex = {
    schema_version: "1.0.0",
    generated_at: generatedAt,
    repositories: repositories.map((repo) => ({
      id: repo.id,
      name: repo.name,
      path: repo.path,
      capability_count: repo.capability_count,
      maturity: repo.maturity,
      confidence: repo.confidence
    })),
    capabilities
  };
  writeJson(path.join(outputDir, "capabilities.json"), globalIndex);
  writeJson(path.join(outputDir, "global-index.json"), globalIndex);
  writeText(path.join(outputDir, "capabilities.ndjson"), capabilities.map((capability) => JSON.stringify(capability)).join("\n"));
  writeJson(path.join(outputDir, "graph.json"), buildGraph(manifests, capabilities, generatedAt));
  writeJson(path.join(outputDir, "search-index.json"), buildSearchIndex(manifests, capabilities, generatedAt));
  return { repositories, capabilities, duplicateCapabilities };
}

function buildGraph(manifests: CatalogManifest[], capabilities: GlobalCapability[], generatedAt: string): unknown {
  const nodes = [
    ...manifests.map((manifest) => ({
      id: `repo:${manifest.repo.id}`,
      type: "repo",
      label: manifest.repo.name,
      data: {
        path: manifest.repo.path,
        maturity: manifest.repo.maturity,
        confidence: manifest.repo.confidence
      }
    })),
    ...capabilities.map((capability) => ({
      id: `capability:${capability.id}`,
      type: "capability",
      label: capability.name,
      data: {
        capability_type: capability.type,
        reuse_score: capability.reuse_score,
        implementations: capability.implementations.length
      }
    }))
  ];

  const edges = manifests.flatMap((manifest) =>
    manifest.capabilities.map((capability) => ({
      source: `repo:${manifest.repo.id}`,
      target: `capability:${capability.id}`,
      type: "implements",
      data: {
        maturity: capability.maturity,
        confidence: capability.confidence,
        source_paths: capability.source_paths
      }
    }))
  );

  return { schema_version: "1.0.0", generated_at: generatedAt, nodes, edges };
}

function buildSearchIndex(manifests: CatalogManifest[], capabilities: GlobalCapability[], generatedAt: string): unknown {
  const repoRecords = manifests.map((manifest) => ({
    id: `repo:${manifest.repo.id}`,
    kind: "repo",
    repo_id: manifest.repo.id,
    title: manifest.repo.name,
    text: [manifest.repo.name, manifest.repo.description, manifest.repo.languages.join(" "), manifest.repo.frameworks.join(" ")].join("\n"),
    tags: [...manifest.repo.languages, ...manifest.repo.frameworks],
    source_paths: [],
    maturity: manifest.repo.maturity,
    risks: manifest.repository_risks.map((risk) => risk.summary),
    reuse: null
  }));
  const capabilityRecords = capabilities.flatMap((globalCapability) =>
    globalCapability.implementations.map((implementation) => ({
      id: `capability:${globalCapability.id}:${implementation.repo_id}`,
      kind: "capability",
      repo_id: implementation.repo_id,
      capability_id: globalCapability.id,
      title: globalCapability.name,
      text: [globalCapability.id, globalCapability.name, globalCapability.summary, globalCapability.type, implementation.repo_id].join("\n"),
      tags: [globalCapability.type, implementation.maturity, implementation.confidence],
      source_paths: implementation.source_paths,
      maturity: implementation.maturity,
      risks: globalCapability.risk_summary,
      reuse: implementation.reuse
    }))
  );
  return {
    schema_version: "1.0.0",
    generated_at: generatedAt,
    records: [...repoRecords, ...capabilityRecords].sort((a, b) => a.id.localeCompare(b.id))
  };
}


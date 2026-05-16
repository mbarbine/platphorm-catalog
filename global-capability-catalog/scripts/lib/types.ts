export type Confidence = "low" | "medium" | "high";
export type Maturity = "prototype" | "experimental" | "internal" | "production" | "deprecated" | "unknown";
export type ReuseLevel = "full" | "partial" | "pattern_only" | "not_recommended" | "unknown";
export type CouplingLevel = "low" | "medium" | "high" | "unknown";

export interface RepoTarget {
  id: string;
  name: string;
  path: string;
  relative_path: string;
  remote_url: string | null;
  default_branch: string | null;
  current_commit: string | null;
}

export interface SourceFile {
  path: string;
}

export interface DetectedItem {
  name: string;
  confidence: Confidence;
  evidence_paths: string[];
}

export interface SourceNamedItem {
  name: string;
  kind: string;
  source_path: string;
}

export interface RouteItem {
  route: string;
  source_path: string;
  kind: string;
  methods: string[];
}

export interface ScanArtifact {
  schema_version: "1.0.0";
  scanner: { name: string; version: string };
  repo: RepoTarget;
  languages: Array<{ language: string; files: number; bytes: number }>;
  frameworks: DetectedItem[];
  packages: {
    package_manager: string | null;
    manifests: Array<{
      path: string;
      name: string | null;
      version: string | null;
      scripts: Record<string, string>;
      dependencies: Record<string, string>;
      dev_dependencies: Record<string, string>;
    }>;
  };
  routes: { api_routes: RouteItem[]; app_routes: RouteItem[] };
  components: SourceNamedItem[];
  data_models: SourceNamedItem[];
  database: { databases: string[]; schemas: SourceFile[]; migrations: SourceFile[] };
  tests: SourceNamedItem[];
  ci: { workflows: SourceFile[] };
  containers: { dockerfiles: SourceFile[]; compose_files: SourceFile[] };
  env: { example_files: SourceFile[]; variables: Array<{ name: string; source_paths: string[]; likely_secret: boolean }> };
  configs: SourceFile[];
  docs: { readme_paths: SourceFile[]; doc_paths: SourceFile[]; llms_context_paths: SourceFile[] };
  discovery_files: {
    openapi: SourceFile[];
    mcp: SourceFile[];
    llms: SourceFile[];
    sitemaps: SourceFile[];
    feeds: SourceFile[];
    well_known: SourceFile[];
    robots: SourceFile[];
    manifests: SourceFile[];
  };
  integrations: DetectedItem[];
  license: { spdx: string | null; paths: SourceFile[] };
  comments: Array<{ kind: "todo" | "fixme" | "security" | "deprecated" | "unsafe"; source_path: string; line: number; text: string }>;
  security: {
    secret_risks: Array<{ kind: string; source_path: string; line: number; redacted_sample: string }>;
    unsafe_patterns: DetectedItem[];
    sensitive_data_indicators: DetectedItem[];
  };
  generated_at: string;
}

export interface CatalogManifest {
  schema_version: "1.0.0";
  repo: {
    id: string;
    name: string;
    path: string;
    remote_url: string | null;
    description: string;
    primary_language: string | null;
    languages: string[];
    frameworks: string[];
    package_manager: string | null;
    databases: string[];
    deployment: string[];
    maturity: Maturity;
    confidence: Confidence;
    scan_artifact: string;
    analyzed_at: string;
  };
  capabilities: CapabilityManifest[];
  repository_risks: RiskManifest[];
  catalog_quality: {
    coverage: {
      scan_artifact: boolean;
      readme: boolean;
      docs: boolean;
      routes: boolean;
      tests: boolean;
      llms_context: boolean;
    };
    missing_evidence: string[];
    uncertainty_notes: string[];
    validation_status: "valid" | "invalid" | "unvalidated" | "repaired";
    validated_at: string | null;
  };
}

export interface CapabilityManifest {
  id: string;
  name: string;
  type: string;
  summary: string;
  maturity: Maturity;
  reusable: boolean;
  confidence: Confidence;
  source_paths: string[];
  interfaces: {
    api_routes: string[];
    ui_components: string[];
    cli_commands: string[];
    events: string[];
    exports: string[];
    inputs: string[];
    outputs: string[];
  };
  data_handling: {
    reads: string[];
    writes: string[];
    sensitive_data: string[];
    external_data_flows: string[];
    persistence_layer: string[];
    validation: string[];
    auth_requirements: string[];
    privacy_security_notes: string[];
  };
  dependencies: {
    packages: string[];
    internal: string[];
    external_services: string[];
    env_vars: string[];
  };
  reuse: {
    reusable: ReuseLevel;
    extraction_difficulty: "low" | "medium" | "high" | "unknown";
    coupling: {
      framework: CouplingLevel;
      database: CouplingLevel;
      external_services: CouplingLevel;
      auth: CouplingLevel;
    };
    recommended_reuse_approach: string;
    extraction_steps: string[];
    notes: string[];
  };
  risks: RiskManifest[];
  tests: { has_tests: boolean; test_paths: string[]; notes: string[] };
  docs: { readme: boolean; docs_paths: string[]; llms_context_paths: string[]; notes: string[] };
  related_capabilities: string[];
  notes: string[];
}

export interface RiskManifest {
  id: string;
  severity: "low" | "medium" | "high" | "critical" | "unknown";
  summary: string;
  evidence_paths: string[];
  recommendation: string;
}


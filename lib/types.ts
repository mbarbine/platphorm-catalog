export interface Component {
  id: string
  name: string
  path: string
  repo: string
  framework: string
  classification: string
  component_score: number
  extraction_score: number
  duplicates: number
  usage: number
}

export interface DetailedComponent extends Component {
  component_id?: string
  component_name?: string
  file_path?: string
  duplicate_name_count?: number
  import_usage_count?: number
  absolute_path?: string
  blockers?: string[]
  exports?: string[]
  imports?: string[]
  props?: string[]
  reasons?: string[]
  line_count?: number
  has_story?: boolean
  has_test?: boolean
  repo_remote_url?: string
}

export interface CatalogRepositorySummary {
  id: string
  name: string
  path: string
  remote_url: string | null
  description: string
  primary_language: string | null
  languages: string[]
  frameworks: string[]
  capability_count: number
  maturity: string
  confidence: string
  risks: number
}

export interface CapabilityImplementation {
  repo_id: string
  repo_name: string
  maturity: string
  confidence: string
  source_paths: string[]
  reuse: string
  risk_count: number
  test_count: number
}

export interface RecommendedSource {
  repo_id: string
  score: number
  reason: string
  source_paths: string[]
}

export interface GlobalCapability {
  id: string
  name: string
  type: string
  summary: string
  implementations: CapabilityImplementation[]
  recommended_source: RecommendedSource | null
  related_capabilities: string[]
  reuse_score: number
  maturity_distribution: Record<string, number>
  risk_summary: string
  source_repos: string[]
  lastUpdatedAt: string
}

export interface GlobalCapabilityIndex {
  schema_version: string
  generated_at: string
  repositories: CatalogRepositorySummary[]
  capabilities: GlobalCapability[]
}

export interface RepositoryCatalogManifest {
  schema_version: string
  repo: {
    id: string
    name: string
    path: string
    remote_url: string | null
    description: string
    primary_language: string | null
    languages: string[]
    frameworks: string[]
    package_manager: string | null
    databases: string[]
    deployment: string[]
    maturity: string
    confidence: string
    scan_artifact: string
    analyzed_at: string
  }
  capabilities: Array<{
    id: string
    name: string
    type: string
    summary: string
    maturity: string
    reusable: boolean
    confidence: string
    source_paths: string[]
    interfaces: {
      api_routes: string[]
      ui_components: string[]
      cli_commands: string[]
      events: string[]
      exports: string[]
      inputs: string[]
      outputs: string[]
    }
    data_handling: {
      reads: string[]
      writes: string[]
      sensitive_data: string[]
      external_data_flows: string[]
      persistence_layer: string[]
      validation: string[]
      auth_requirements: string[]
      privacy_security_notes: string[]
    }
    dependencies: {
      packages: string[]
      internal: string[]
      external_services: string[]
      env_vars: string[]
    }
    reuse: {
      reusable: string
      extraction_difficulty: string
      coupling: {
        framework: string
        database: string
        external_services: string
        auth: string
      }
      recommended_reuse_approach: string
      extraction_steps: string[]
      notes: string[]
    }
    risks: RepositoryRisk[]
    tests: { has_tests: boolean; test_paths: string[]; notes: string[] }
    docs: {
      readme: boolean
      docs_paths: string[]
      llms_context_paths: string[]
      notes: string[]
    }
    related_capabilities: string[]
    notes: string[]
  }>
  repository_risks: RepositoryRisk[]
  catalog_quality: {
    coverage: Record<string, boolean>
    missing_evidence: string[]
    uncertainty_notes: string[]
    validation_status: string
    validated_at: string | null
  }
}

export interface RepositoryRisk {
  id: string
  severity: string
  summary: string
  evidence_paths: string[]
  recommendation: string
}

export interface BestImplementationIndex {
  schema_version: string
  generated_at: string
  global_capabilities: Array<{
    id: string
    name: string
    implementations: RecommendedSource[]
    recommended_source: RecommendedSource | null
  }>
}

export interface Repository {
  name: string
  full_name: string
  owner: string
  html_url: string
  clone_url: string
  language: string | null
  pushed_at: string
  updated_at: string
  private: boolean
  archived: boolean
  source: string
}

export interface Capability {
  id: string
  name: string
  type: string
  description?: string
  reuse_score?: number
  implementations?: number
  risk_summary?: string
  recommended_repo_id?: string | null
  recommended_score?: number | null
}

export interface RepositoryCapability {
  id: string
  name: string
  capabilityCount: number
  primaryLanguage?: string
  frameworks?: string[]
  maturity?: string
  confidence?: string
}

export interface CatalogStats {
  totalComponents: number
  totalRepositories: number
  totalCapabilities: number
  classifications: Record<string, number>
  topCapabilityDomains: Record<string, number>
  validatedManifests?: number
  validationFailures?: number
  capabilityImplementations?: number
  duplicateCapabilities?: number
  generatedAt?: string
}

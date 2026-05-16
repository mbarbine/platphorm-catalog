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
}

export type OwnerType = "user" | "organization"

export interface GitHubApiErrorDetails {
  message: string
  documentation_url?: string
}

export interface GitHubRateLimit {
  limit: number | null
  remaining: number | null
  resetAt: string | null
}

export interface GitHubLinkInfo {
  next?: string
  prev?: string
}

export interface GitHubRepository {
  id: number
  node_id: string
  name: string
  full_name: string
  owner: {
    login: string
    id: number
    avatar_url?: string
  }
  html_url: string
  description: string | null
  private: boolean
  fork: boolean
  created_at: string
  updated_at: string
  pushed_at: string | null
  size: number
  stargazers_count: number
  watchers_count: number
  language: string | null
  has_issues: boolean
  has_projects: boolean
  has_wiki: boolean
  archived: boolean
  disabled: boolean
  visibility: "public" | "private" | "internal"
  default_branch: string
  topics?: string[]
  license?: { key: string; name: string } | null
  open_issues_count: number
}

export interface GitHubCommit {
  sha: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    } | null
    message: string
  }
}

export interface GitHubTreeItem {
  path: string
  mode: string
  type: "tree" | "blob" | "commit"
  sha: string
  size: number
}

export interface GitHubTree {
  sha: string
  tree: GitHubTreeItem[]
  truncated: boolean
}

export interface GitHubWorkflowItem {
  id: number
  name: string
  path: string
  state: string
}

export interface GitHubWorkflowResponse {
  total_count: number
  workflows: GitHubWorkflowItem[]
}

export interface GitHubDependencyPackage {
  packageManager: string
  packageName: string
  packageVersion: string
  dependencies?: string[]
}

export interface GitHubSbomDependency {
  ref: string
  dependsOn?: string[]
}

export interface GitHubSbomPackage {
  id: string
  name: string
  version: string | null
  scope: string
  relationships?: {
    dependsOn: string[]
  }
}

export interface GitHubSBOM {
  metadata: {
    name?: string
    SPDXID?: string
    created?: string
    packages?: number
  }
  packages?: GitHubSbomPackage[]
  relationships?: Array<{
    dependencyPackage?: {
      purl?: string
      externalRefs?: Array<{ type: string; locator: string }>
    }
    dependentPackage?: { purl?: string; externalRefs?: Array<{ type: string; locator: string }> }
    relationshipType?: string
  }>
}

import { githubRequest } from "./client"

export interface GitHubGraphQLError {
  message: string
  path?: Array<string | number>
  locations?: Array<{ line: number; column: number }>
}

export interface GitHubGraphQLEnvelope<T> {
  data?: T
  errors?: GitHubGraphQLError[]
}

export interface GitHubGraphQLRequest {
  query: string
  variables?: Record<string, unknown>
}

export async function githubGraphQL<T>(request: GitHubGraphQLRequest): Promise<GitHubGraphQLEnvelope<T>> {
  const response = await githubRequest<GitHubGraphQLEnvelope<T>>("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  })

  return response.data
}

export function extractGraphQLErrors<T>(response: GitHubGraphQLEnvelope<T>): GitHubGraphQLError[] {
  return response.errors ?? []
}

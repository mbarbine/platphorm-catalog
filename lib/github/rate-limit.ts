import type { GitHubRateLimit } from "./types"

export function lowestRateLimit(values: GitHubRateLimit[]): GitHubRateLimit | null {
  if (!values.length) return null
  return values.reduce((lowest, current) => {
    if (!lowest) return current
    if (current.remaining === null) return lowest
    if (lowest.remaining === null) return current
    return current.remaining < lowest.remaining ? current : lowest
  }, values[0])
}

export function isRateLimited(rateLimit: GitHubRateLimit): boolean {
  return rateLimit.remaining === 0
}

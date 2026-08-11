import { timingSafeEqual } from "node:crypto"

export const PLATFORM_API_KEY_HEADER = "x-platphorm-api-key"
export const PLATFORM_BEARER_PREFIX = "Bearer "

export interface PlatformAuthResult {
  authorized: boolean
  status: "ok" | "missing_key" | "missing_auth" | "invalid_auth"
  code: "ok" | "PROTECTED_REQUIRED" | "AUTH_MISSING" | "AUTH_INVALID"
}

function compareKeys(expected: string, candidate: string): boolean {
  if (expected.length !== candidate.length) return false
  return timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(candidate),
  )
}

function extractApiKey(request: Request): string | null {
  const header = request.headers.get(PLATFORM_API_KEY_HEADER)
  if (header) return header.trim()
  const auth = request.headers.get("authorization")?.trim()
  if (!auth) return null
  if (!auth.toLowerCase().startsWith(PLATFORM_BEARER_PREFIX.toLowerCase())) return null
  return auth.slice(PLATFORM_BEARER_PREFIX.length).trim()
}

export function validatePlatphormAuth(request: Request): PlatformAuthResult {
  const configured = process.env.PLATPHORM_API_KEY
  if (!configured) {
    return {
      authorized: false,
      status: "missing_key",
      code: "PROTECTED_REQUIRED",
    }
  }

  const provided = extractApiKey(request)
  if (!provided) {
    return {
      authorized: false,
      status: "missing_auth",
      code: "AUTH_MISSING",
    }
  }

  if (!compareKeys(configured, provided)) {
    return {
      authorized: false,
      status: "invalid_auth",
      code: "AUTH_INVALID",
    }
  }

  return {
    authorized: true,
    status: "ok",
    code: "ok",
  }
}

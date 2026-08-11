import { createSign, generateKeyPairSync, randomUUID } from "node:crypto"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { validatePlatphormAuth } from "./platform-auth"

function base64UrlEncode(value: string) {
  return Buffer.from(value).toString("base64url")
}

function buildJwt({
  privateKey,
  kid,
  claims,
}: {
  privateKey: string
  kid: string
  claims: Record<string, unknown>
}) {
  const header = base64UrlEncode(
    JSON.stringify({
      alg: "RS256",
      typ: "JWT",
      kid,
    }),
  )
  const payload = base64UrlEncode(
    JSON.stringify({
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60,
      ...claims,
    }),
  )
  const body = `${header}.${payload}`
  const signature = createSign("RSA-SHA256").update(body).end().sign(privateKey, "base64url")
  return `${body}.${signature}`
}

function installMockJwks(keys: object[]) {
  return vi.spyOn(globalThis, "fetch").mockImplementation(async (input: RequestInfo | URL) => {
    void (typeof input === "string" ? input : input.toString())
    return new Response(JSON.stringify({ keys }), { status: 200 }) as Response
  })
}

describe("platform authentication", () => {
  const originalEnv = { ...process.env }

  beforeEach(() => {
    Object.assign(process.env, {
      ...originalEnv,
      PLATPHORM_API_KEY: "",
      CATALOG_OIDC_ALLOWED_ISSUERS: "",
      CATALOG_OIDC_AUDIENCE: "",
      CATALOG_OIDC_ALLOWED_REPOSITORIES: "",
      CATALOG_OIDC_ALLOWED_WORKFLOWS: "",
      CATALOG_OIDC_JWKS_URLS: "",
    })
    vi.restoreAllMocks()
  })

  it("accepts API key authentication via Authorization Bearer", async () => {
    process.env.PLATPHORM_API_KEY = "catalog-api-key"

    const request = new Request("https://catalog.platphormnews.com/api/v1/catalog/publications", {
      method: "POST",
      headers: {
        Authorization: "Bearer catalog-api-key",
      },
    })

    const result = await validatePlatphormAuth(request)

    expect(result.authorized).toBe(true)
    expect(result.status).toBe("ok")
    expect(result.principal).toMatchObject({ strategy: "api_key" })
  })

  it("returns missing key state when no auth mechanism is configured", async () => {
    const request = new Request("https://catalog.platphormnews.com/api/v1/catalog/publications", {
      method: "POST",
      headers: {
        Authorization: "Bearer anything",
      },
    })

    const result = await validatePlatphormAuth(request)

    expect(result.authorized).toBe(false)
    expect(result.status).toBe("missing_key")
    expect(result.code).toBe("PROTECTED_REQUIRED")
  })

  it("accepts GitHub OIDC tokens when token and policy are valid", async () => {
    const { publicKey, privateKey } = generateKeyPairSync("rsa", {
      modulusLength: 2048,
    })
    const publicJwk = publicKey.export({ format: "jwk" }) as Record<string, unknown>
    const kid = randomUUID()

    process.env.PLATPHORM_API_KEY = ""
    const jwksUrl = `https://example.test/.well-known/jwks?run=${randomUUID()}`
    process.env.CATALOG_OIDC_ALLOWED_REPOSITORIES = "mbarbine/platphorm-catalog"
    process.env.CATALOG_OIDC_ALLOWED_WORKFLOWS = "publish.yml"
    process.env.CATALOG_OIDC_AUDIENCE = "https://catalog.platphormnews.com"
    process.env.CATALOG_OIDC_ALLOWED_ISSUERS = "https://token.actions.githubusercontent.com"
    process.env.CATALOG_OIDC_JWKS_URLS = jwksUrl

    installMockJwks([{ ...publicJwk, kid }])

    const token = buildJwt({
      privateKey: privateKey.export({ format: "pem", type: "pkcs8" }).toString(),
      kid,
      claims: {
        iss: "https://token.actions.githubusercontent.com",
        aud: "https://catalog.platphormnews.com",
        repository: "mbarbine/platphorm-catalog",
        job_workflow_ref: "mbarbine/platphorm-catalog/.github/workflows/publish.yml@refs/heads/main",
        actor: "ci-runner",
        run_id: "98765",
      },
    })

    const request = new Request("https://catalog.platphormnews.com/api/v1/catalog/publications", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })

    const result = await validatePlatphormAuth(request)

    expect(result.authorized).toBe(true)
    expect(result.status).toBe("ok")
    expect(result.principal).toMatchObject({
      strategy: "github_oidc",
      repository: "mbarbine/platphorm-catalog",
      actor: "ci-runner",
      workflow: "mbarbine/platphorm-catalog/.github/workflows/publish.yml@refs/heads/main",
      runId: "98765",
    })
  })

  it("rejects unknown OIDC issuer", async () => {
    const { publicKey, privateKey } = generateKeyPairSync("rsa", {
      modulusLength: 2048,
    })
    const publicJwk = publicKey.export({ format: "jwk" }) as Record<string, unknown>
    const kid = randomUUID()

    const jwksUrl = `https://example.test/.well-known/jwks?run=${randomUUID()}`
    process.env.CATALOG_OIDC_ALLOWED_REPOSITORIES = "mbarbine/platphorm-catalog"
    process.env.CATALOG_OIDC_AUDIENCE = "https://catalog.platphormnews.com"
    process.env.CATALOG_OIDC_ALLOWED_ISSUERS = "https://token.actions.githubusercontent.com"
    process.env.CATALOG_OIDC_JWKS_URLS = jwksUrl
    process.env.CATALOG_OIDC_ALLOWED_WORKFLOWS = "publish.yml"

    installMockJwks([{ ...publicJwk, kid }])

    const token = buildJwt({
      privateKey: privateKey.export({ format: "pem", type: "pkcs8" }).toString(),
      kid,
      claims: {
        iss: "https://malicious.example",
        aud: "https://catalog.platphormnews.com",
        repository: "mbarbine/platphorm-catalog",
        workflow: "bad-workflow",
      },
    })

    const request = new Request("https://catalog.platphormnews.com/api/v1/catalog/publications", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })

    const result = await validatePlatphormAuth(request)

    expect(result.authorized).toBe(false)
    expect(result.status).toBe("invalid_auth")
    expect(result.code).toBe("AUTH_INVALID")
  })
})

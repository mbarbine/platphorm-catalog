import { randomUUID } from "node:crypto"
import { validateCatalogPublication, publicationStorageKey, hashText, type CatalogPublication } from "@/lib/catalog-evidence"
import { validatePlatphormAuth } from "@/lib/platform-auth"
import { listCatalogPublications, persistCatalogPublication } from "@/lib/catalog-store"

export const dynamic = "force-dynamic"

function normalizeLimit(value: string | null, fallback: number): number {
  if (!value) return fallback
  const parsed = Number.parseInt(value, 10)
  if (Number.isNaN(parsed) || parsed <= 0) return fallback
  return Math.min(parsed, 500)
}

function authErrorResponse(reason: string, status: number, code: string) {
  return Response.json({
    ok: false,
    error: {
      code,
      message: reason,
      protected_by: [
        "Authorization: Bearer $PLATPHORM_API_KEY",
        "Authorization: Bearer <GitHub/Vercel OIDC token>",
        "X-PlatPhorm-API-Key: $PLATPHORM_API_KEY",
      ],
    },
  }, { status })
}

function mapAuthStatus(status: Awaited<ReturnType<typeof validatePlatphormAuth>>): { status: number; code: string; message: string } {
  if (status.status === "missing_key") return {
    status: 503,
    code: "PROTECTED_REQUIRED",
    message: "PLATPHORM_API_KEY is not configured on this deployment.",
  }
  if (status.status === "missing_auth") return {
    status: 401,
    code: "AUTH_MISSING",
    message: "A valid PLATPHORM_API_KEY or trusted OIDC bearer token is required for publication writes.",
  }
  return {
    status: 403,
    code: "AUTH_INVALID",
    message: "Authorization failed for this protected catalog endpoint.",
  }
}

function publicationSummary(
  publication: CatalogPublication,
  status: "stored" | "unchanged" | "not_persisted",
  storageStatus = "ok",
) {
  const payload = JSON.stringify(publication)
  const storageSize = payload.length
  const payloadHash = hashText(payload)
  return {
    fullName: publication.repository.fullName,
    sha: publication.repository.sha,
    scannerVersion: publication.producer.version || null,
    runTimestamp: publication.run.timestamp,
    filesAnalyzed: publication.summary.filesAnalyzed,
    durationMs: publication.summary.durationMs,
    warnings: publication.summary.warnings.length,
    route: `/api/v1/catalog/publications/${publicationStorageKey(publication)}`,
    status,
    storageStatus,
    sizeBytes: storageSize,
    rawBodySha256: payloadHash,
  }
}

export async function GET(request: Request) {
  const statusFilter = new URL(request.url).searchParams.get("status")
  const limit = normalizeLimit(new URL(request.url).searchParams.get("limit"), 100)

  let publications = await listCatalogPublications()
  if (statusFilter) {
    publications = publications.filter((entry) => entry.status === statusFilter)
  }

  const sorted = publications
    .slice()
    .sort((a, b) => Date.parse(b.runTimestamp) - Date.parse(a.runTimestamp))

  return Response.json({
    ok: true,
    data: {
      count: sorted.length,
      returned: Math.min(sorted.length, limit),
      publications: sorted.slice(0, limit),
      filters: { status: statusFilter },
      route: "/api/v1/catalog/publications",
    },
  })
}

export async function POST(request: Request) {
  const requestId = request.headers.get("x-platphorm-request-id") ?? randomUUID()
  const auth = await validatePlatphormAuth(request)
  if (!auth.authorized) {
    const mapped = mapAuthStatus(auth)
    return authErrorResponse(mapped.message, mapped.status, mapped.code)
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return Response.json({ ok: false, error: { code: "INVALID_JSON", message: "Request body must be valid JSON." } }, { status: 400 })
  }

  const validation = validateCatalogPublication(payload)
  if (!validation.valid) {
    return Response.json({
      ok: false,
      error: {
        code: "INVALID_PUBLICATION",
        message: "Publication payload does not match catalog schema.",
        details: validation.errors,
      },
    }, { status: 400 })
  }

  const publication = payload as CatalogPublication
  const persistResult = await persistCatalogPublication(publication, requestId)
  const summaryStatus =
    persistResult.status === "stored"
      ? "stored"
      : persistResult.status === "unchanged"
        ? "unchanged"
        : "not_persisted"
  const summaryStorageStatus = persistResult.storageError ? "fallback_or_error" : "ok"
  const summary = publicationSummary(publication, summaryStatus, summaryStorageStatus)

  return Response.json({
    ok: persistResult.status === "stored" || persistResult.status === "unchanged",
    data: {
      requestId,
      publication: {
        summary,
        validation: "ok",
      },
      persist: persistResult,
      writeRoute: `/api/v1/catalog/publications/${publicationStorageKey(publication)}`,
    },
  }, { status: persistResult.status === "stored" ? 201 : 200 })
}

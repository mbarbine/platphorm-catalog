# integration.platphorm

Repository has source-backed indicators for a PlatPhorm integration.

## Metadata

- Name: PlatPhorm Integration
- Type: integration
- Reuse score: 44
- Implementations: 49
- Risk summary: 60 risk findings across 49 implementations.

## Recommended Source

- github-recent__mbarbine__platphorm-jobs: 68 - internal maturity, test evidence present, documentation/context present

## Implementations

### github-recent__mbarbine__calendar-app-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/api/v1/api-keys.test.ts`, `__tests__/api/v1/public-events.test.ts`, `__tests__/lib/auth.test.ts`, `app/.well-known/[...path]/route.ts`, `app/(dashboard)/settings/api/page.tsx`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `package.json`
### github-recent__mbarbine__desert-bus

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 19
- Source paths: `__tests__/lib/platform-contract.test.ts`, `app/stats/page.tsx`, `lib/auth.ts`, `lib/desertbus-data.ts`, `lib/discovery.ts`, `lib/events.ts`, `lib/model-adapter.ts`, `lib/openapi.ts`, `lib/trace.ts`, `package.json`
### github-recent__mbarbine__fortune-cookie-webby-yj

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/fortunes/create/route.ts`, `app/favorites/page.tsx`, `app/terms/page.tsx`, `lib/fortune/discovery.ts`, `lib/fortune/mcp.ts`, `lib/platform/auth.ts`, `lib/platform/constants.ts`, `lib/platform/trace.ts`, `package.json`
### github-recent__mbarbine__onboard-platphorm-boilerplate-repo

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `.env.example`, `app/api/mcp/register/route.ts`, `package.json`, `scripts/provision-ops.mjs`
### github-recent__mbarbine__platphorm-404

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 3
- Source paths: `app/api/cron/refresh/route.ts`, `app/privacy/page.tsx`, `app/terms/page.tsx`, `components/404/recovery/phase1-recovery-panel.tsx`, `components/404/terminal-log.tsx`, `docs/PHASE1.md`, `lib/platform/auth.ts`, `lib/platform/constants.ts`, `lib/platform/discovery.ts`, `lib/platform/trace.ts`, `package.json`, `README.md`
### github-recent__mbarbine__platphorm-agentui

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `.env.example`, `app/.well-known/agents.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/(builder)/builder/[id]/page.tsx`, `app/(builder)/builder/[id]/publish/page.tsx`, `app/(builder)/builder/[id]/run/page.tsx`, `app/(builder)/builder/page.tsx`, `app/(workspace)/dashboard/approvals/page.tsx`, `lib/config/env.ts`, `package.json`
### github-recent__mbarbine__platphorm-ascii

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 19
- Source paths: `__tests__/api-routes.test.ts`, `__tests__/discovery.test.ts`, `__tests__/mcp-integration.test.ts`, `__tests__/mcp-route.test.ts`, `__tests__/schema-api.test.ts`, `__tests__/webhooks-advanced.test.ts`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `package.json`
### github-recent__mbarbine__platphorm-auction-vice

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 12
- Source paths: `lib/integrations/platphorm-mcp.ts`, `package.json`
### github-recent__mbarbine__platphorm-base

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/app/route-standard.test.ts`, `app/.well-known/trust.json/route.ts`, `app/api/health/route.ts`, `app/llms-full.txt/route.ts`, `app/llms.txt/route.ts`, `lib/trace/client.ts`, `package.json`
### github-recent__mbarbine__platphorm-bbs

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 7
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/announcements/page.tsx`, `app/api/docs/route.ts`, `app/api/telnet/ws/route.ts`, `app/api/v1/messages/route.ts`, `app/games/[id]/page.tsx`, `app/privacy/page.tsx`, `lib/bbs/auth.ts`, `lib/bbs/discovery.ts`, `package.json`, `README.md`
### github-recent__mbarbine__platphorm-browserops

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 12
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/journeys/page.tsx`, `app/llms-index.json/route.ts`, `app/page.tsx`, `app/runs/page.tsx`, `BUILD_STATUS.md`, `lib/config/env.ts`, `lib/integrations/agentui.ts`, `lib/integrations/claws.ts`, `lib/integrations/docs.ts`, `lib/integrations/evals.ts`, `lib/integrations/mcp.ts`, `lib/integrations/network-graph.ts`, `lib/integrations/sandbox.ts`, `lib/integrations/spec.ts`, `lib/integrations/trace.ts`, `lib/integrations/webhooklab.ts`, `lib/platform/contract.ts`, `lib/publish/docs-verification.ts`, `lib/publish/evals-export.ts`, `lib/publish/trace-export.ts`, `lib/registry/canonical.ts`, `lib/registry/network-sync.ts`, `package.json`
### github-recent__mbarbine__platphorm-cobol

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/cron/refresh/route.ts`, `app/api/jobs/route.ts`, `app/faq/page.tsx`, `app/jobs/page.tsx`, `app/roadmap/page.tsx`, `components/cobol-playground.tsx`, `lib/auth.ts`, `lib/discovery.ts`, `lib/openapi-spec.ts`, `lib/platform.ts`, `package.json`, `README.md`
### github-recent__mbarbine__platphorm-codex

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 10
- Source paths: `__tests__/api/routes.test.ts`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/api/cron/refresh-network/route.ts`, `cypress/e2e/cinematic-slideshow.cy.ts`, `lib/codex/auth.ts`, `lib/codex/discovery.ts`, `package.json`
### github-recent__mbarbine__platphorm-desa

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/.well-known/trust.json/route.ts`, `app/api/v1/integrations/mcp/route.ts`, `app/contributors/page.tsx`, `app/faq/page.tsx`, `app/page.tsx`, `docs/API.md`, `docs/architecture/API_SPECIFICATION.md`, `docs/architecture/SYSTEM_ARCHITECTURE.md`, `lib/platform/auth.ts`, `package.json`
### github-recent__mbarbine__platphorm-design

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 23
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/jsonld/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/route.ts`, `app/docs/api/page.tsx`, `app/docs/export/page.tsx`, `package.json`
### github-recent__mbarbine__platphorm-emoji

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 15
- Source paths: `app/api/docs/route.ts`, `app/api/page.tsx`, `app/docs/page.tsx`, `app/faq/page.tsx`, `components/submit/proposal-form.tsx`, `lib/discovery.ts`, `lib/mcp-server.ts`, `lib/model-adapter.ts`, `lib/platform.ts`, `package.json`
### github-recent__mbarbine__platphorm-evals

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `.env.example`, `app/.well-known/trust.json/route.ts`, `app/api/health/route.ts`, `app/settings/page.tsx`, `app/usage/page.tsx`, `BUILD_INDEX.md`, `components/registry/registry-sync-button.tsx`, `docs/IMPLEMENTATION_PLAN.md`, `lib/api/auth.ts`, `lib/config/build-validation.ts`, `lib/config/env.ts`, `lib/config/policy.ts`, `lib/discovery/openapi.ts`, `lib/integrations/agentui-client.ts`, `lib/integrations/browserops-client.ts`, `lib/integrations/claws-client.ts`, `lib/integrations/docs-client.ts`, `lib/integrations/mcp-hub-client.ts`, `lib/integrations/network-graph-client.ts`, `lib/integrations/sandbox-client.ts`, `lib/integrations/spec-client.ts`, `lib/integrations/trace-client.ts`, `lib/integrations/webhooklab-client.ts`, `lib/local/persistent-store.ts`, `lib/registry/claws-sync.ts`, `lib/registry/mcp-sync.ts`, `lib/standards/llms.ts`, `lib/standards/network-manifest.ts`, `package.json`, `tests/policy.test.ts`
### github-recent__mbarbine__platphorm-fingerprint-service

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 3
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/events/route.ts`, `app/api/webhooks/route.ts`, `app/docs/page.tsx`, `app/faq/page.tsx`, `app/privacy/page.tsx`, `components/fingerprint/fingerprint-dashboard.tsx`, `lib/discovery/generators.ts`, `lib/platform/auth.ts`, `package.json`
### github-recent__mbarbine__platphorm-insights

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 30
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/[locale]/docs/page.tsx`, `app/[locale]/network/page.tsx`, `app/[locale]/page.tsx`, `app/api/docs/route.ts`, `package.json`
### github-recent__mbarbine__platphorm-jobs

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 19
- Source paths: `__tests__/api/events.test.ts`, `__tests__/api/grok-parse-jd.test.ts`, `__tests__/api/interviews.test.ts`, `__tests__/api/network-calendar.test.ts`, `__tests__/api/team.test.ts`, `__tests__/api/webhooks.test.ts`, `__tests__/lib/events.test.ts`, `app/.well-known/agents.json/route.ts`, `package.json`
### github-recent__mbarbine__platphorm-json

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 7
- Source paths: `__tests__/health.test.ts`, `__tests__/phase1-api.test.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/api/cron/refresh/route.ts`, `app/api/mcp/register/route.ts`, `app/api/mcp/route.ts`, `app/docs/api-docs-client.tsx`, `app/faq/page.tsx`, `lib/auth.ts`, `package.json`
### github-recent__mbarbine__platphorm-jules

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `app/api/health/route.test.ts`, `app/api/health/route.ts`, `app/api/register/__tests__/route.test.ts`, `app/api/register/route.ts`, `app/api/v1/auth-status/route.ts`, `app/api/v1/calendar/events/route.ts`, `app/api/v1/kanban/board/route.ts`, `app/api/v1/kanban/tasks/route.ts`, `package.json`
### github-recent__mbarbine__platphorm-kanban

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/api/calendar-projects.test.ts`, `__tests__/api/calendar.test.ts`, `__tests__/api/onboard.test.ts`, `__tests__/api/tasks.test.ts`, `__tests__/api/webhook.test.ts`, `__tests__/integration/calendar-sync.test.ts`, `__tests__/proxy.test.ts`, `app/.well-known/trust.json/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/calendar/mcp/route.ts`, `app/api/webhooks/platphormnews/route.ts`, `INTEGRATION.md`, `package.json`, `README.md`
### github-recent__mbarbine__platphorm-keys

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 7
- Source paths: `__tests__/lib/logger.test.ts`, `__tests__/lib/mask.test.ts`, `__tests__/setup.ts`, `.env.example`, `BUILD_SUMMARY.md`, `COMPLETION_REPORT.md`, `FILE_MANIFEST.md`, `IMPLEMENTATION_GUIDE.md`, `package.json`
### github-recent__mbarbine__platphorm-layout

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 11
- Source paths: `app/.well-known/mcp.json/route.ts`, `app/[locale]/docs/page.tsx`, `app/[locale]/faq/page.tsx`, `app/[locale]/privacy/page.tsx`, `app/[locale]/terms/page.tsx`, `app/api/health/route.test.ts`, `app/llms.txt/route.test.ts`, `components/layout-workbench/layout-workbench.tsx`, `lib/layout/discovery.ts`, `lib/layout/openapi.ts`, `lib/layout/registry.ts`, `lib/platform/auth.ts`, `package.json`, `README.md`, `tests/layout/auth.test.ts`
### github-recent__mbarbine__platphorm-mcp

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/seed/route.ts`, `app/faq/page.tsx`, `package.json`
### github-recent__mbarbine__platphorm-mini-games-webby

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 6
- Source paths: `app/.well-known/agents.json/route.ts`, `app/api/cron/refresh/route.ts`, `app/api/v1/leaderboard/local-info/route.ts`, `app/api/webhooks/route.ts`, `app/games/[slug]/game-page-client.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`, `docs/phase-1-platform-contract.md`, `lib/auth.ts`, `lib/openapi.ts`, `package.json`
### github-recent__mbarbine__platphorm-monitor

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `.env.example`, `app/.well-known/ai-plugin.json/route.ts`, `app/(dashboard)/firewall/page.tsx`, `app/(dashboard)/notifications/page.tsx`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/docs/page.tsx`, `app/mcp/route.ts`, `lib/monitor/trace.ts`, `package.json`
### github-recent__mbarbine__platphorm-msi-editor

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 11
- Source paths: `app/api/__tests__/api-endpoints.test.ts`, `app/docs/page.tsx`, `app/export/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`, `components/msi/empty-state.tsx`, `components/msi/header.tsx`, `lib/platform/auth.ts`, `lib/platform/discovery.ts`, `package.json`
### github-recent__mbarbine__platphorm-onboard

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 20
- Source paths: `__tests__/api/application-status-review.test.ts`, `__tests__/api/integrations-routes.test.ts`, `__tests__/lib/onboard-platform-helpers.test.ts`, `app/.well-known/trust.json/route.ts`, `app/[locale]/docs/api/page.tsx`, `app/api/integrations/route.ts`, `app/api/mcp/register/route.ts`, `app/api/mcp/route.ts`, `app/api/openapi/route.ts`, `lib/onboard/auth-policy.ts`, `package.json`
### github-recent__mbarbine__platphorm-openclaw

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `.Jules/sentinel.md`, `app/.well-known/agents.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/search/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/integrations/gridnet/route.ts`, `app/api/v1/integrations/trace/route.ts`, `app/api/v1/network/graph/sync/route.ts`, `app/api/v1/openclaw/session/route.ts`, `app/api/v1/openclaw/workspace/route.ts`, `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/webhooks/route.ts`, `lib/openclaw/config.ts`, `lib/openclaw/integrations/network-graph.ts`, `package.json`, `sandbox.md`, `tests/setup.ts`
### github-recent__mbarbine__platphorm-opencontent

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `__tests__/integration/api/content-metadata-routes.test.ts`, `__tests__/integration/mcp/mcp-server.test.ts`, `__tests__/integration/mcp/platphorm-service-extended.test.ts`, `__tests__/unit/build-validation.test.ts`, `__tests__/unit/lib/platphorm-service.test.ts`, `__tests__/unit/lib/trace.test.ts`, `API.md`, `app/.well-known/agent.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/docs/route.ts`, `lib/trace.ts`, `LOCAL_DEV.md`, `package.json`
### github-recent__mbarbine__platphorm-opendocs

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `__tests__/integration/api/clip.test.ts`, `__tests__/integration/api/ingest.test.ts`, `__tests__/integration/api/keys.test.ts`, `__tests__/integration/mcp/mcp-server.test.ts`, `API.md`, `app/.well-known/[...path]/route.ts`, `app/.well-known/agent.json/route.ts`, `app/api/docs/route.ts`, `lib/api-helpers.ts`, `lib/trace.ts`, `package.json`
### github-recent__mbarbine__platphorm-podcasts

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/discovery.test.ts`, `__tests__/ingest.test.ts`, `__tests__/phase1-archive.test.ts`, `.next.preverify-20260419-2027/package.json`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/api/ai/analyze/route.ts`, `app/api/ai/recommend/route.ts`, `app/api/health/route.ts`, `lib/platform/discovery.ts`, `lib/platform/trace.ts`, `package.json`
### github-recent__mbarbine__platphorm-polymarket-rss-feed

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `.env.example`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/sync/status/route.ts`, `app/feeds/page.tsx`, `lib/trace.ts`, `package.json`
### github-recent__mbarbine__platphorm-polymaths

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 28
- Source paths: `app/.well-known/trust.json/route.ts`, `app/api/cron/refresh/route.ts`, `app/api/docs/page.tsx`, `app/api/mentor/chat/route.ts`, `app/api/mentor/publish/route.ts`, `app/api/v1/mentor/route.ts`, `app/api/v1/mentor/status/route.ts`, `app/llms-full.txt/route.ts`, `lib/platphorm/auth.ts`, `lib/polymaths/openapi.ts`, `package.json`
### github-recent__mbarbine__platphorm-quake

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/app/api/docs.test.ts`, `__tests__/app/api/events.test.ts`, `__tests__/app/api/matches.test.ts`, `__tests__/app/api/v1/catalog-routes.test.ts`, `__tests__/app/api/v1/servers/[id]/route.test.ts`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/llms-index.json/route.ts`, `lib/platform/auth.ts`, `package.json`
### github-recent__mbarbine__platphorm-sandbox

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 2
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/(dashboard)/playground/new/playground-client.tsx`, `app/(dashboard)/settings/page.tsx`, `app/api/mcp/route.ts`, `app/api/network/register/route.ts`, `app/api/v1/[...slug]/route.ts`, `app/page.tsx`, `lib/cosmic/claws-client.ts`, `lib/cosmic/trace-client.ts`, `package.json`
### github-recent__mbarbine__platphorm-sheets

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 6
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/api-docs/page.tsx`, `app/api/mcp/route.test.ts`, `app/api/mcp/route.ts`, `app/api/v1/sheets/route.test.ts`, `app/mcp/page.tsx`, `package.json`
### github-recent__mbarbine__platphorm-shipments

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `__tests__/lib/platphorm-service.test.ts`, `__tests__/lib/usps-service.test.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/packages/presets/route.ts`, `app/api/v1/reports/quote/route.ts`, `app/api/v1/tests/route.ts`, `app/faq/page.tsx`, `lib/openapi.ts`, `lib/phase1.ts`, `lib/platphorm-service.ts`, `package.json`, `README.md`
### github-recent__mbarbine__platphorm-space-news

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 7
- Source paths: `__tests__/api/health.test.ts`, `__tests__/unit/auth.test.ts`, `__tests__/unit/discovery.test.ts`, `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/network/register/route.ts`, `app/api/v1/sync/run/route.ts`, `app/faq/page.tsx`, `lib/platform/auth.ts`, `package.json`
### github-recent__mbarbine__platphorm-spec-workbench

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 27
- Source paths: `__tests__/api/phase1-routes.test.ts`, `__tests__/api/platform-contract.test.ts`, `.env.example`, `app/.well-known/agents.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/network/spec-sources/route.ts`, `app/api/v1/templates/[id]/instantiate/route.ts`, `package.json`
### github-recent__mbarbine__platphorm-svg-factory

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 8
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/api/mcp/route.ts`, `app/api/network/register/route.ts`, `app/llms-full.txt/route.ts`, `app/llms.txt/route.ts`, `lib/discovery.ts`, `lib/platform-response.ts`, `package.json`
### github-recent__mbarbine__platphorm-trace

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/.well-known/[...path]/route.ts`, `app/.well-known/agent.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/docs/page.tsx`, `app/llms-full.txt/route.ts`, `lib/env.ts`, `package.json`, `scripts/publish-job.ts`, `scripts/register-network.ts`
### github-recent__mbarbine__platphorm-usl

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 6
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/health/route.test.ts`, `app/api/mcp/route.ts`, `app/careers/page.tsx`, `app/privacy/page.tsx`, `app/roadmap/page.tsx`, `lib/auth.ts`, `lib/discovery.test.ts`, `lib/model-adapter.ts`, `package.json`
### github-recent__mbarbine__platphorm-vercel-atlas

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/api.test.ts`, `__tests__/e2e.test.ts`, `__tests__/setup.ts`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/admin/page.tsx`, `app/api/config/route.ts`, `package.json`
### github-recent__mbarbine__platphorm-webhook-simulator

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust-policy.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/api-keys/route.ts`, `app/api/v1/events/route.test.ts`, `package.json`
### github-recent__mbarbine__platphorm-xml

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 11
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/v1/network/route.ts`, `app/faq/page.tsx`, `app/llms-index.json/route.test.ts`, `components/xml-viewer/xml-toolbar.tsx`, `components/xml-viewer/xml-utility-panels.tsx`, `components/xml-viewer/xml-viewer.tsx`, `lib/auth.ts`, `lib/discovery.ts`, `lib/trace.ts`, `package.json`
### github-recent__mbarbine__platphormnews-www-prod

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 24
- Source paths: `package.json`, `src/lib/__tests__/mcp.test.ts`, `src/lib/__tests__/phase1-root.test.ts`, `src/lib/platform-contract.ts`, `src/lib/root-discovery.ts`, `src/routes/.well-known/agent.json/+server.ts`, `src/routes/.well-known/mcp.json/+server.ts`, `src/routes/.well-known/trust-policy.json/+server.ts`, `src/routes/+layout.svelte`

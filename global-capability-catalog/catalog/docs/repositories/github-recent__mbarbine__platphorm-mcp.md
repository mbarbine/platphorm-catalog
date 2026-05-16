# mbarbine__platphorm-mcp

> **mcp.platphormnews.com** — Central MCP federation hub for the [PlatPhorm News](https://www.platphormnews.com) network

## Metadata

- ID: `github-recent__mbarbine__platphorm-mcp`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-mcp`
- Remote: `git@github.com:mbarbine/platphorm-mcp.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### Accessibility UI Support

- ID: `accessibility.ui-a11y`
- Type: accessibility
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `docs/accessibility.md`
- Tests: 30
- LLMs context: none detected

Source evidence indicates ARIA, accessibility, keyboard, or screen-reader oriented UI behavior.

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/api/v1/model/generate-client-config/route.ts`, `app/api/v1/model/generate-remediation-summary/route.ts`, `app/api/v1/prompts/[name]/route.ts`, `app/api/v1/prompts/route.ts`, `components/mcp/client/server-prompts.tsx`, `components/mcp/prompts-section.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`, `next.config.mjs`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/[...path]/route.ts`, `app/api/callback/route.ts`, `app/api/capabilities/route.ts`, `app/api/client/route.ts`, `app/api/cron/daily/route.ts`, `app/api/cron/discovery/route.ts`, `app/api/cron/health-check/route.ts`, `app/api/cron/maintenance/route.ts`, `app/api/cron/sitemap-sync/route.ts`, `app/api/docs/[slug]/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/icons/route.ts`, `app/api/mcp/capabilities/route.ts`, `app/api/mcp/register/route.ts`, `app/api/mcp/route.ts`, `app/api/mcp/validate/route.ts`, `app/api/ping/route.ts`, `app/api/register/route.ts`, `app/api/v1/capabilities/[id]/deprecate/route.ts`, `app/api/v1/capabilities/[id]/route.ts`, `app/api/v1/capabilities/register/route.ts`, `app/api/v1/capabilities/route.ts`, `app/api/v1/discovery/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/mcp-servers/[id]/proxy/route.ts`, `app/api/v1/mcp-servers/[id]/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/callback/route.ts`, `lib/mcp/auth.ts`, `lib/mcp/dynamo.ts`, `lib/platform/auth.ts`, `package.json`, `tests/__tests__/auth.test.ts`, `tests/test_callback.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/mcp/dynamo.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/daily/route.ts`, `app/api/cron/discovery/route.ts`, `app/api/cron/health-check/route.ts`, `app/api/cron/maintenance/route.ts`, `app/api/cron/sitemap-sync/route.ts`, `components/mcp/tool-runner.tsx`, `inline_cron.js`, `proxy.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/[slug]/route.ts`, `app/api/docs/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/docs/page.tsx`, `docs/accessibility.md`, `docs/api.md`, `docs/architecture.md`, `docs/discovery.md`, `docs/internationalization.md`, `docs/license.md`, `docs/mcp-config.md`, `docs/onboarding-observability.md`, `docs/PHASE-2-PLAN.md`, `docs/PHASE-2-PRODUCTION-PLAN.md`, `docs/principles.md`, `docs/roadmap.md`, `docs/secret-modal.md`, `docs/security.md`, `package.json`, `postcss.config.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/mcp/discovery-dashboard.tsx`, `components/mcp/status-badge.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty high
- Source paths: `package.json`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/mcp/tools/orchestrator.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `docs/PHASE-2-PRODUCTION-PLAN.md`, `lib/mcp/tools/producthunt.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/model/generate-remediation-summary/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform/auth.ts`, `lib/platform/trust-policy.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `docs/license.md`, `docs/mcp-config.md`, `docs/PHASE-2-PLAN.md`, `docs/PHASE-2-PRODUCTION-PLAN.md`, `docs/security.md`, `lib/mcp/dynamo.ts`, `lib/mcp/tools/dynamo.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `README.md`, `tests/__tests__/dynamo-store.test.ts`, `tests/__tests__/dynamo.test.ts`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### Neon Integration

- ID: `integration.neon`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/mcp/registry.ts`, `lib/mcp/tools/orchestrator.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Neon integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/seed/route.ts`, `app/faq/page.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Redis Integration

- ID: `integration.redis`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `docs/license.md`, `lib/mcp/redis.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `scripts/seed-mcp-data.js`, `scripts/seed-sites-registry.js`, `tests/__tests__/redis/config.test.ts`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Redis integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/callback/route.ts`, `app/api/webhooks/deploy/route.ts`, `app/api/webhooks/vercel/route.ts`, `app/layout.tsx`, `lib/mcp/dynamo.ts`, `lib/mcp/registry.ts`, `lib/mcp/tools/orchestrator.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `README.md`, `tests/__tests__/dynamo.test.ts`, `tests/__tests__/webhooks-vercel-route.test.ts`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.vscode/mcp.json`, `app/api/mcp/capabilities/route.ts`, `app/api/mcp/register/route.ts`, `app/api/mcp/route.ts`, `app/api/mcp/validate/route.ts`, `app/api/v1/mcp-servers/[id]/proxy/route.ts`, `app/api/v1/mcp-servers/[id]/route.ts`, `app/api/v1/mcp-servers/[id]/sync/route.ts`, `app/api/v1/mcp-servers/[id]/validate/route.ts`, `app/api/v1/mcp-servers/route.ts`, `app/api/v1/mcp/route.ts`, `app/api/v1/test/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/health-check/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/network/health/route.ts`, `components/mcp/batch-health-checker.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `docs/onboarding-observability.md`, `package.json`, `tests/__tests__/smoke/site-health.test.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/client/page.tsx`, `app/docs/page.tsx`, `app/faq/page.tsx`, `app/mcp/discovery/page.tsx`, `app/mcp/page.tsx`, `app/mcp/test/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/search/route.ts`, `lib/mcp/__tests__/discovery-search.test.ts`, `next.config.mjs`, `tests/__tests__/search-tools.test.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/.well-known/[...path]/route.ts`, `app/.well-known/agents.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/[...path]/route.ts`, `app/api/callback/route.ts`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/sitemaps/sync/route.ts`, `app/api/webhooks/deploy/route.ts`, `app/api/webhooks/vercel/route.ts`, `docs/PHASE-2-PRODUCTION-PLAN.md`, `inline_cron.js`, `lib/mcp/__tests__/discovery-search.test.ts`, `lib/mcp/auth.ts`, `lib/mcp/autodiscovery.ts`, `lib/mcp/dynamo.ts`, `lib/mcp/github-sitemap.ts`, `lib/mcp/redis.ts`, `lib/mcp/security.ts`, `lib/mcp/tools/dynamo.ts`, `lib/mcp/tools/github.ts`, `lib/mcp/tools/orchestrator.ts`, `lib/mcp/tools/producthunt.ts`, `lib/platform/auth.ts`, `lib/platform/trust-policy.ts`, `next.config.mjs`, `proxy.ts`, `scripts/seed-mcp-data.js`, `scripts/seed-sites-registry.js`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/search/route.test.ts`, `app/api/v1/test/mcp/route.ts`, `app/api/v1/test/sites/route.ts`, `app/mcp/test/page.tsx`, `hooks/__tests__/use-toast.test.ts`, `lib/mcp/__tests__/discovery-search.test.ts`, `lib/mcp/tools/__tests__/network.test.ts`, `tests/__tests__/auth.test.ts`, `tests/__tests__/autodiscovery.test.ts`, `tests/__tests__/canonical-registry.test.ts`, `tests/__tests__/capabilities-route.test.ts`, `tests/__tests__/chart-security.test.ts`, `tests/__tests__/client.test.ts`, `tests/__tests__/connect-configs.test.ts`, `tests/__tests__/cors.test.ts`, `tests/__tests__/docs-route.test.ts`, `tests/__tests__/dynamo-store.test.ts`, `tests/__tests__/dynamo.test.ts`, `tests/__tests__/github-sitemap.test.ts`, `tests/__tests__/health-route.test.ts`, `tests/__tests__/hooks-ordering.test.ts`, `tests/__tests__/hooks/use-capabilities.test.ts`, `tests/__tests__/icons-route.test.ts`, `tests/__tests__/icons.test.ts`, `tests/__tests__/integration/mcp-protocol.test.ts`, `tests/__tests__/network-graph.test.ts`, `tests/__tests__/network-tools.test.ts`, `tests/__tests__/network.test.ts`, `tests/__tests__/phase1-surfaces.test.ts`, `tests/__tests__/ping-route.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/layout/footer.tsx`, `components/layout/topbar.tsx`, `components/mcp/batch-health-checker.tsx`, `components/mcp/client/connection-manager.tsx`, `components/mcp/client/server-prompts.tsx`, `components/mcp/client/server-resources.tsx`, `components/mcp/client/server-tools.tsx`, `components/mcp/connect-section.tsx`, `components/mcp/discovery-dashboard.tsx`, `components/mcp/hero-section.tsx`, `components/mcp/live-site-tester.tsx`, `components/mcp/network-section.tsx`, `components/mcp/prompts-section.tsx`, `components/mcp/resources-section.tsx`, `components/mcp/roadmap-section.tsx`, `components/mcp/status-badge.tsx`, `components/mcp/tool-runner.tsx`, `components/mcp/tools-section.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/callback/route.ts`, `app/api/webhooks/deploy/route.ts`, `app/api/webhooks/vercel/route.ts`, `proxy.ts`, `tests/__tests__/webhooks-vercel-route.test.ts`, `tests/test_callback.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.jules/bolt.md`, `app/api/client/route.ts`, `app/api/cron/health-check/route.ts`, `app/api/cron/sitemap-sync/route.ts`, `app/api/v1/test/sites/route.ts`, `app/faq/page.tsx`, `app/feed.xml/route.ts`, `app/layout.tsx`, `components/mcp/live-site-tester.tsx`, `components/ui/chart.tsx`, `lib/mcp/autodiscovery.ts`, `lib/mcp/discovery-search.ts`, `lib/mcp/redis.ts`, `lib/mcp/sitemap-index.ts`, `lib/mcp/tools/github.ts`, `lib/mcp/tools/network.ts`, `lib/mcp/tools/orchestrator.ts`, `lib/mcp/tools/phase1-contract.ts`, `lib/mcp/tools/verticals.ts`, `scripts/backfill-verticals.ts`, `scripts/seed-mcp-data.js`, `scripts/seed-sites-registry.js`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/callback/route.ts`, `app/api/mcp/route.ts`, `app/api/webhooks/deploy/route.ts`, `app/api/webhooks/vercel/route.ts`, `docs/PHASE-2-PRODUCTION-PLAN.md`, `inline_cron.js`, `lib/mcp/__tests__/discovery-search.test.ts`, `lib/mcp/auth.ts`, `lib/mcp/dynamo.ts`, `lib/mcp/github-sitemap.ts`, `lib/mcp/redis.ts`, `lib/mcp/security.ts`, `lib/mcp/tools/github.ts`, `lib/mcp/tools/orchestrator.ts`, `lib/mcp/tools/producthunt.ts`, `proxy.ts`, `scripts/seed-mcp-data.js`, `scripts/seed-sites-registry.js`, `tests/__tests__/auth.test.ts`, `tests/__tests__/dynamo-store.test.ts`, `tests/__tests__/github-sitemap.test.ts`, `tests/__tests__/phase1-surfaces.test.ts`, `tests/__tests__/redis/config.test.ts`, `tests/__tests__/redis/redis.test.ts`, `tests/__tests__/search-tools.test.ts`, `tests/__tests__/security_vulnerability.test.ts`, `tests/__tests__/security.test.ts`, `tests/__tests__/site-store.test.ts`, `tests/__tests__/webhooks-vercel-route.test.ts`, `tests/test_callback.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

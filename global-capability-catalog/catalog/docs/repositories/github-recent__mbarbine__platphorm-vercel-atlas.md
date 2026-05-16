# mbarbine__platphorm-vercel-atlas

A comprehensive threat intelligence platform for real-time JA4 fingerprint analysis, threat attribution, and security monitoring.

## Metadata

- ID: `github-recent__mbarbine__platphorm-vercel-atlas`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-vercel-atlas`
- Remote: `git@github.com:mbarbine/platphorm-vercel-atlas.git`
- Primary language: TypeScript
- Frameworks: Jest, Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/api/ai-plugin.json/route.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/performance/metrics/route.ts`, `package.json`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/actors/route.ts`, `app/api/admin/purge/route.ts`, `app/api/ai-plugin.json/route.ts`, `app/api/alerts/[id]/actions/route.ts`, `app/api/alerts/[id]/route.ts`, `app/api/alerts/auto-respond/route.ts`, `app/api/alerts/feed/route.ts`, `app/api/alerts/route.ts`, `app/api/campaigns/route.ts`, `app/api/challenges/route.ts`, `app/api/config/route.ts`, `app/api/cron/daily/route.ts`, `app/api/cron/enrich/route.ts`, `app/api/cron/vercel-sync/route.ts`, `app/api/ddos/detect/route.ts`, `app/api/docs/route.ts`, `app/api/enrich/route.ts`, `app/api/enrich/trigger/route.ts`, `app/api/features/route.ts`, `app/api/fingerprint/route.ts`, `app/api/fingerprints/label/route.ts`, `app/api/fingerprints/lookup/route.ts`, `app/api/fingerprints/route.ts`, `app/api/firewall/rules/[id]/route.ts`, `app/api/firewall/rules/route.ts`, `app/api/firewall/sync-edge-config/route.ts`, `app/api/health/route.ts`, `app/api/import/pcap/route.ts`, `app/api/infrastructure/route.ts`, `app/api/ingest/batch/route.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/api/admin/purge/route.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/cron.bench.test.ts`, `.env.example`, `app/api/cron/daily/route.ts`, `app/api/cron/enrich/route.ts`, `app/api/cron/vercel-sync/route.ts`, `instrumentation.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/setup.ts`, `.env.example`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/docs/page.tsx`, `app/lookup/page.tsx`, `DEPLOYMENT.md`, `docs/DATABASE_DYNAMIC_FIELDS.md`, `docs/DATABASE_MANAGEMENT.md`, `docs/DATABASE_MIGRATION_PLAN.md`, `docs/DEPLOYMENT_CHECKLIST.md`, `docs/ENRICHMENT_DROPDOWN_GUIDE.md`, `docs/FAQ.md`, `docs/FEATURE_GUIDE.md`, `docs/IMPROVEMENT_PLAN.md`, `docs/INGEST_SOURCES.md`, `docs/ja4-standards.md`, `docs/N8N_INTEGRATION.md`, `docs/NEXTJS_16_MIGRATION.md`, `docs/SENSOR_VERIFICATION.md`, `docs/SYSTEM_STATUS.md`, `docs/V2.0.0_IMPLEMENTATION_GUIDE.md`, `docs/V2.0.0_ROADMAP.md`, `docs/VERCEL_FIREWALL_INTEGRATION.md`, `lib/config.ts`, `lib/db.ts`, `lib/platform.ts`, `package.json`, `postcss.config.mjs`, `README.md`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/api/admin/purge/route.ts`, `app/api/performance/metrics/route.ts`, `app/api/soc/dashboard/route.ts`, `app/dashboard/page.tsx`, `docs/SYSTEM_STATUS.md`, `INTEGRATION_STATUS.md`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/api/ai-plugin.json/route.ts`, `app/api/import/pcap/route.ts`, `app/api/mcp.json/route.ts`, `app/api/openapi.json/route.ts`, `app/import/page.tsx`, `lib/trace.ts`, `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/01-create-schema.sql`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/fingerprints/lookup/route.ts`, `app/api/lookup/route.ts`, `app/api/lookup/suggestions/route.ts`, `app/lookup/page.tsx`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-index.txt`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/config.ts`, `proxy.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/performance/metrics/route.ts`, `lib/platform.ts`, `package.json`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `fix-logger-tests.js`, `lib/config.ts`, `lib/logger.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api.test.ts`, `__tests__/e2e.test.ts`, `__tests__/setup.ts`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/admin/page.tsx`, `app/api/config/route.ts`, `package.json`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/setup.ts`, `.env.example`, `app/api/mcp/route.ts`, `app/lookup/page.tsx`, `DEPLOYMENT.md`, `docs/DATABASE_DYNAMIC_FIELDS.md`, `docs/DATABASE_MIGRATION_PLAN.md`, `docs/DEPLOYMENT_CHECKLIST.md`, `lib/config.ts`, `lib/db.ts`, `lib/platform.ts`, `package.json`, `README.md`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/cron/daily/route.ts`, `app/api/cron/vercel-sync/route.ts`, `app/api/fingerprint/route.ts`, `app/api/firewall/sync-edge-config/route.ts`, `app/api/health/route.ts`, `app/api/vercel/projects/route.ts`, `app/api/vercel/sync-firewall/route.ts`, `app/integrate/page.tsx`, `app/layout.tsx`, `DEPLOYMENT.md`, `docs/DATABASE_DYNAMIC_FIELDS.md`, `docs/DATABASE_MIGRATION_PLAN.md`, `docs/DEPLOYMENT_CHECKLIST.md`, `docs/SENSOR_VERIFICATION.md`, `docs/SYSTEM_STATUS.md`, `docs/VERCEL_FIREWALL_INTEGRATION.md`, `INTEGRATION_STATUS.md`, `lib/config.ts`, `lib/logger.ts`, `package-lock.json`, `package.json`, `proxy.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp.json/route.ts`, `app/api/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/ingest/syslog/route.ts`, `app/api/v1/health/route.ts`, `components/project-keys-dialog.tsx`, `components/ui/dialog.tsx`, `fix-logger-tests.js`, `lib/config.ts`, `lib/logger.ts`, `lib/trace.ts`, `package.json`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/actors/page.tsx`, `app/admin/page.tsx`, `app/campaigns/page.tsx`, `app/dashboard/page.tsx`, `app/docs/page.tsx`, `app/faq/page.tsx`, `app/fingerprints/[id]/page.tsx`, `app/fingerprints/page.tsx`, `app/import/page.tsx`, `app/infrastructure/page.tsx`, `app/integrate/page.tsx`, `app/integration/page.tsx`, `app/lookup/page.tsx`, `app/observations/page.tsx`, `app/projects/page.tsx`, `app/sensors/page.tsx`, `app/soc/alerts/[id]/page.tsx`, `app/soc/alerts/page.tsx`, `app/soc/firewall/new/page.tsx`, `app/soc/firewall/page.tsx`, `app/soc/page.tsx`, `app/threats/page.tsx`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api.test.ts`, `__tests__/cron.bench.test.ts`, `__tests__/e2e.test.ts`, `__tests__/sensor-data-validation.test.ts`, `__tests__/setup.ts`, `__tests__/utils/server-check.ts`, `__tests__/vercel-integration.test.ts`, `.env.example`, `app/api/cron/daily/route.ts`, `app/api/cron/enrich/route.ts`, `app/api/cron/vercel-sync/route.ts`, `app/api/ddos/detect/route.ts`, `app/api/fingerprint/route.ts`, `app/api/firewall/sync-edge-config/route.ts`, `app/api/health/route.ts`, `app/api/ingest/http/route.ts`, `app/api/vercel/projects/route.ts`, `app/api/vercel/sync-firewall/route.ts`, `app/integrate/page.tsx`, `app/integration/page.tsx`, `components/enrich-button.tsx`, `fix-logger-tests.js`, `instrumentation.ts`, `lib/config.ts`, `lib/db.ts`, `lib/logger.ts`, `lib/platform.ts`, `lib/trace.ts`, `playwright.config.ts`, `proxy.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/fingerprints/label/route.ts`, `components/ui/label.tsx`, `package.json`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api-health.test.ts`, `__tests__/api-keys.test.ts`, `__tests__/api.test.ts`, `__tests__/build-config.test.ts`, `__tests__/components.test.tsx`, `__tests__/cron.bench.test.ts`, `__tests__/database.test.ts`, `__tests__/discovery.test.ts`, `__tests__/driftnet-client.test.ts`, `__tests__/e2e.test.ts`, `__tests__/error-handler.test.ts`, `__tests__/hooks.test.ts`, `__tests__/huntio-client.test.ts`, `__tests__/ipinfo-client.test.ts`, `__tests__/ja4-validator.test.ts`, `__tests__/lib/abuseipdb-client.test.ts`, `__tests__/lib/crypto.test.ts`, `__tests__/lib/fingerprint-client.test.ts`, `__tests__/lib/ipinfo-client.test.ts`, `__tests__/lib/openapi.test.ts`, `__tests__/logger.test.ts`, `__tests__/observations-date.test.ts`, `__tests__/pcap.test.ts`, `__tests__/security_fix.test.ts`, `__tests__/sensor-data-validation.test.ts`, `__tests__/stats.test.ts`, `__tests__/utils.test.ts`, `__tests__/vercel-integration.test.ts`, `__tests__/webhook_alerts_vulnerability.test.ts`, `app/api/webhooks/test/route.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/enrich-button.tsx`, `components/enrich-dropdown.tsx`, `components/enrichment-sources-provider.tsx`, `components/fingerprint-collector.tsx`, `components/fingerprints/fingerprints-header.tsx`, `components/fingerprints/fingerprints-list.tsx`, `components/footer.tsx`, `components/info-tooltip.tsx`, `components/project-keys-dialog.tsx`, `components/real-time-alert-toast.tsx`, `components/severity-badge.tsx`, `components/sidebar.tsx`, `components/stat-card.tsx`, `components/theme-provider.tsx`, `components/ui/alert.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/dialog.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/select.tsx`, `components/ui/separator.tsx`, `components/ui/skeleton.tsx`, `components/ui/switch.tsx`, `components/ui/table.tsx`, `components/ui/tabs.tsx`, `components/ui/textarea.tsx`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/sensor-data-validation.test.ts`, `app/api/ingest/webhook/route.ts`, `app/api/webhooks/alerts/route.ts`, `app/api/webhooks/test/route.ts`, `components/enrich-button.tsx`, `lib/config.ts`
- Tests: 30
- LLMs context: `public/llms-index.txt`

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.Jules/bolt.md`, `app/api/mcp/route.ts`, `app/docs/page.tsx`, `app/sensors/page.tsx`, `app/soc/page.tsx`, `lib/discovery.ts`, `scripts/benchmark-observations.js`, `scripts/benchmark-observations.ts`, `scripts/benchmark-stats.js`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/api.test.ts`, `__tests__/cron.bench.test.ts`, `__tests__/e2e.test.ts`, `__tests__/sensor-data-validation.test.ts`, `__tests__/setup.ts`, `.env.example`, `app/api/cron/daily/route.ts`, `app/api/cron/enrich/route.ts`, `app/api/cron/vercel-sync/route.ts`, `app/api/firewall/sync-edge-config/route.ts`, `app/api/health/route.ts`, `app/api/ingest/http/route.ts`, `app/api/vercel/projects/route.ts`, `app/api/vercel/sync-firewall/route.ts`, `app/integrate/page.tsx`, `app/integration/page.tsx`, `instrumentation.ts`, `lib/config.ts`, `lib/db.ts`, `lib/platform.ts`, `lib/trace.ts`, `proxy.ts`, `README.md`, `scripts/test-async-flow.mjs`

## Gaps

- CI workflows not detected

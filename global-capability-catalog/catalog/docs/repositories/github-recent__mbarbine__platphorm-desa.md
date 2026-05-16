# mbarbine__platphorm-desa

Dynamic Execution Script Analysis

## Metadata

- ID: `github-recent__mbarbine__platphorm-desa`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-desa`
- Remote: `git@github.com:mbarbine/platphorm-desa.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: production
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/model/adapter.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/analysis/__tests__/threat-score.test.tsx`, `components/analysis/threat-score.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/discovery/route.ts`, `app/api/docs/[slug]/route.ts`, `app/api/docs/route.ts`, `app/api/faq/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/analyze-url/route.ts`, `app/api/v1/analyze/route.ts`, `app/api/v1/decode/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/export/route.ts`, `app/api/v1/extract-iocs/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/history/route.ts`, `app/api/v1/integrations/ascii/route.ts`, `app/api/v1/integrations/json/route.ts`, `app/api/v1/integrations/mcp/route.ts`, `app/api/v1/integrations/msi/route.ts`, `app/api/v1/integrations/route.ts`, `app/api/v1/integrations/svg/route.ts`, `app/api/v1/integrations/virustotal/route.ts`, `app/api/v1/integrations/xml/route.ts`, `app/api/v1/iocs/route.ts`, `app/api/v1/rules/[id]/route.ts`, `app/api/v1/rules/route.ts`, `app/api/v1/samples/route.ts`, `app/api/v1/scripts/[id]/analysis/route.ts`, `app/api/v1/scripts/[id]/export/route.ts`, `app/api/v1/scripts/[id]/iocs/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/platform/auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/docs/[slug]/route.ts`, `app/api/docs/route.ts`, `app/docs/page.tsx`, `docs/API_SPECIFICATION.md`, `docs/API.md`, `docs/ARCHITECTURE.md`, `docs/architecture/API_SPECIFICATION.md`, `docs/architecture/MAINTENANCE.md`, `docs/architecture/SYSTEM_ARCHITECTURE.md`, `docs/CONTRIBUTORS.md`, `docs/DATA.md`, `docs/GUIDANCE.md`, `docs/MAINTENANCE.md`, `docs/MCP.md`, `docs/PLATPHORMNEWS.md`, `docs/PRIVACY.md`, `docs/PRODUCT_ROADMAP.md`, `docs/ROADMAP.md`, `docs/roadmap/INTEGRATION_ROADMAP.md`, `docs/roadmap/UX_UI_ROADMAP.md`, `docs/testing/TESTING_GUIDE.md`, `lib/__tests__/db.test.ts`, `lib/__tests__/rules-api.test.ts`, `lib/__tests__/rules-store.test.ts`, `lib/db.ts`, `package.json`, `postcss.config.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/trust.json/route.ts`, `app/api/v1/export/route.ts`, `app/api/v1/integrations/json/route.ts`, `app/api/v1/integrations/xml/route.ts`, `app/api/v1/scripts/[id]/export/route.ts`, `components/ioc-viewer/__tests__/ioc-json-tree.test.tsx`, `components/ioc-viewer/ioc-json-tree.tsx`, `components/seo/__tests__/json-ld.test.tsx`, `components/seo/json-ld.tsx`, `components/seo/roadmap-json-ld.tsx`, `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/001-init-schema.sql`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/ci.yml`, `Dockerfile`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/extract-iocs/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `docs/PRODUCT_ROADMAP.md`
- Tests: 30
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform/auth.ts`, `lib/platform/vercel.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/analysis/__tests__/threat-score.test.tsx`, `components/analysis/threat-score.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/trust.json/route.ts`, `app/api/v1/integrations/mcp/route.ts`, `app/contributors/page.tsx`, `app/faq/page.tsx`, `app/page.tsx`, `docs/API.md`, `docs/architecture/API_SPECIFICATION.md`, `docs/architecture/SYSTEM_ARCHITECTURE.md`, `lib/platform/auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `docs/architecture/MAINTENANCE.md`, `docs/architecture/SYSTEM_ARCHITECTURE.md`, `docs/MAINTENANCE.md`, `lib/__tests__/db.test.ts`, `lib/__tests__/rules-api.test.ts`, `lib/__tests__/rules-store.test.ts`, `lib/db.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/v1/integrations/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/analyze/page.tsx`, `app/contributors/page.tsx`, `app/docs/page.tsx`, `app/faq/page.tsx`, `app/guidance/page.tsx`, `app/history/page.tsx`, `app/integrations/page.tsx`, `app/iocs/page.tsx`, `app/license/page.tsx`, `app/privacy/page.tsx`, `app/roadmap/page.tsx`, `app/roadmap/ux/page.tsx`, `app/rules/page.tsx`, `app/script/[id]/page.tsx`, `app/settings/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/api/faq/route.ts`, `app/api/health/route.ts`, `app/api/v1/integrations/virustotal/route.ts`, `docs/architecture/API_SPECIFICATION.md`, `docs/architecture/MAINTENANCE.md`, `docs/testing/TESTING_GUIDE.md`, `lib/__tests__/db.test.ts`, `lib/__tests__/mcp-client.test.ts`, `lib/db.ts`, `lib/integrations/platphormnews/client.ts`, `lib/mcp/__tests__/client.test.ts`, `lib/mcp/client.ts`, `lib/mcp/discovery.ts`, `lib/mcp/registry.ts`, `lib/model/adapter.ts`, `lib/platform/auth.ts`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/v1/integrations/json/route.test.ts`, `components/analysis/__tests__/results-panel.test.tsx`, `components/analysis/__tests__/threat-score.test.tsx`, `components/analysis/__tests__/virustotal-panel.test.tsx`, `components/ioc-viewer/__tests__/ioc-json-tree.test.tsx`, `components/ioc-viewer/__tests__/ioc-viewer.test.tsx`, `components/layout/__tests__/footer.test.tsx`, `components/seo/__tests__/json-ld.test.tsx`, `components/ui/__tests__/chart.test.tsx`, `lib/__tests__/analysis.test.ts`, `lib/__tests__/api.test.ts`, `lib/__tests__/c2-extractor.test.ts`, `lib/__tests__/db.test.ts`, `lib/__tests__/decoders.test.ts`, `lib/__tests__/engine.test.ts`, `lib/__tests__/exporters.test.ts`, `lib/__tests__/integration.test.ts`, `lib/__tests__/ioc-extractor-categorization.test.ts`, `lib/__tests__/ioc-extractor.test.ts`, `lib/__tests__/mcp-client.test.ts`, `lib/__tests__/mcp-route.test.ts`, `lib/__tests__/patterns.test.ts`, `lib/__tests__/rules-api.test.ts`, `lib/__tests__/rules-store.test.ts`, `lib/__tests__/utils.test.ts`, `lib/__tests__/vt-submissions-store.test.ts`, `lib/analysis/__tests__/c2-extractor.test.ts`, `lib/api/__tests__/helpers.test.ts`, `lib/integrations/__tests__/platphormnews.test.ts`, `lib/integrations/__tests__/virustotal.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/analysis/__tests__/results-panel.test.tsx`, `components/analysis/__tests__/threat-score.test.tsx`, `components/analysis/__tests__/virustotal-panel.test.tsx`, `components/analysis/results-panel.tsx`, `components/analysis/threat-score.tsx`, `components/analysis/virustotal-panel.tsx`, `components/editor/code-editor.tsx`, `components/ioc-viewer/__tests__/ioc-json-tree.test.tsx`, `components/ioc-viewer/__tests__/ioc-viewer.test.tsx`, `components/ioc-viewer/ioc-json-tree.tsx`, `components/ioc-viewer/ioc-viewer.tsx`, `components/layout/__tests__/footer.test.tsx`, `components/layout/footer.tsx`, `components/layout/topbar.tsx`, `components/providers/theme-provider.tsx`, `components/roadmap/integration-grid.tsx`, `components/roadmap/roadmap-hero.tsx`, `components/roadmap/roadmap-stats.tsx`, `components/roadmap/roadmap-timeline.tsx`, `components/seo/__tests__/json-ld.test.tsx`, `components/seo/json-ld.tsx`, `components/seo/roadmap-json-ld.tsx`, `components/theme-provider.tsx`, `components/ui/__tests__/chart.test.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/events/route.ts`, `app/api/v1/webhooks/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [critical] Secret-like literal values were detected in source. Samples are redacted in scan output. Evidence: `lib/__tests__/analysis.test.ts`, `lib/__tests__/integration.test.ts`
- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.Jules/bolt.md`, `.Jules/sentinel.md`, `app/api/v1/integrations/json/route.ts`, `app/api/v1/integrations/svg/route.ts`, `app/api/v1/scripts/[id]/export/route.ts`, `app/api/v1/scripts/[id]/route.ts`, `app/history/page.tsx`, `app/integrations/page.tsx`, `app/rules/page.tsx`, `app/script/[id]/page.tsx`, `lib/__tests__/rules-api.test.ts`, `lib/analysis/c2-extractor.ts`, `lib/analysis/decoders.ts`, `lib/analysis/engine.ts`, `lib/analysis/ioc-extractor.ts`, `lib/analysis/patterns.ts`, `lib/integrations/platphormnews/client.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`, `app/api/v1/integrations/virustotal/route.ts`, `docs/architecture/API_SPECIFICATION.md`, `docs/architecture/MAINTENANCE.md`, `docs/testing/TESTING_GUIDE.md`, `lib/__tests__/db.test.ts`, `lib/__tests__/mcp-client.test.ts`, `lib/db.ts`, `lib/integrations/platphormnews/client.ts`, `lib/mcp/client.ts`, `lib/platform/auth.ts`

## Gaps

- LLMs context files not detected

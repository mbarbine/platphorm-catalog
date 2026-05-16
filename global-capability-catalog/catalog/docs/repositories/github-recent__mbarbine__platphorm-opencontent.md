# mbarbine__platphorm-opencontent

OpenContent is an AI-native content platform for documents, media ingestion, machine-readable discovery, and agent access.

## Metadata

- ID: `github-recent__mbarbine__platphorm-opencontent`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-opencontent`
- Remote: `git@github.com:mbarbine/platphorm-opencontent.git`
- Primary language: TypeScript
- Frameworks: MCP SDK, Next.js, Playwright, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/content/[slug]/metadata/regenerate/route.ts`, `app/api/v1/content/[slug]/share-card/regenerate/route.ts`, `app/api/v1/content/[slug]/share-links/regenerate/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/analytics/page.tsx`, `app/api/v1/analytics/route.ts`, `app/api/v1/scores/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/categories/route.ts`, `app/api/cron/content-health/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/register/route.ts`, `app/api/mcp/route.ts`, `app/api/og/route.tsx`, `app/api/session/route.ts`, `app/api/v1/analytics/route.ts`, `app/api/v1/automation/route.ts`, `app/api/v1/categories/route.ts`, `app/api/v1/content/[slug]/aeo/route.ts`, `app/api/v1/content/[slug]/attribution/route.ts`, `app/api/v1/content/[slug]/metadata/regenerate/route.ts`, `app/api/v1/content/[slug]/metadata/route.ts`, `app/api/v1/content/[slug]/og/route.ts`, `app/api/v1/content/[slug]/route.ts`, `app/api/v1/content/[slug]/seo/route.ts`, `app/api/v1/content/[slug]/share-card/regenerate/route.ts`, `app/api/v1/content/[slug]/share-card/route.ts`, `app/api/v1/content/[slug]/share-links/regenerate/route.ts`, `app/api/v1/content/[slug]/share-links/route.ts`, `app/api/v1/content/[slug]/twitter-card/route.ts`, `app/api/v1/content/ingest/route.ts`, `app/api/v1/content/route.ts`, `app/api/v1/discover/route.ts`, `app/api/v1/docs/[slug]/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/documents/[slug]/route.ts`, `app/api/v1/documents/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/session/route.ts`, `lib/fingerprint.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/integration/api/cron-categories.test.ts`, `__tests__/performance/categories.test.ts`, `app/api/cron/categories/route.ts`, `app/api/cron/content-health/route.ts`, `app/api/v1/automation/route.ts`, `app/api/v1/workflow/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/integration/api/content-ingest.test.ts`, `__tests__/integration/api/content-metadata-routes.test.ts`, `__tests__/integration/api/docs-openapi.test.ts`, `__tests__/unit/components/content-type-icon.test.tsx`, `__tests__/unit/components/docs-list-client.test.tsx`, `__tests__/unit/lib/aeo-geo.test.ts`, `__tests__/unit/lib/db.test.ts`, `__tests__/unit/lib/fingerprint-enhanced.test.ts`, `__tests__/unit/lib/fingerprint.test.ts`, `__tests__/unit/lib/query-builder.test.ts`, `__tests__/unit/lib/tagging.test.ts`, `app/api/cron/content-health/route.ts`, `app/api/docs/route.ts`, `app/api/v1/content/[slug]/aeo/route.ts`, `app/api/v1/content/[slug]/attribution/route.ts`, `app/api/v1/content/[slug]/metadata/regenerate/route.ts`, `app/api/v1/content/[slug]/metadata/route.ts`, `app/api/v1/content/[slug]/og/route.ts`, `app/api/v1/content/[slug]/route.ts`, `app/api/v1/content/[slug]/seo/route.ts`, `app/api/v1/content/[slug]/share-card/regenerate/route.ts`, `app/api/v1/content/[slug]/share-card/route.ts`, `app/api/v1/content/[slug]/share-links/regenerate/route.ts`, `app/api/v1/content/[slug]/share-links/route.ts`, `app/api/v1/content/[slug]/twitter-card/route.ts`, `app/api/v1/content/ingest/route.ts`, `app/api/v1/content/route.ts`, `app/api/v1/docs/[slug]/route.ts`, `app/api/v1/docs/route.ts`, `app/content-policy/page.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/dashboard/page.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agent.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/llms-index.json/route.ts`, `app/rss.xml/route.ts`, `app/sitemap.xml/route.ts`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/001-init-schema.sql`, `scripts/002-media-content-schema.sql`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `docker-compose.yml`, `Dockerfile`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/unit/components/markdown-renderer-xss.test.tsx`, `app/api/v1/documents/[slug]/route.ts`, `app/api/v1/documents/route.ts`, `components/markdown-renderer.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/media/media-embed.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/performance/categories.test.ts`, `app/submit/page.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/scores/route.ts`, `lib/logger.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### MCP Integration

- ID: `integration.mcp`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `LOCAL_DEV.md`, `package.json`, `PACKAGES.md`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a MCP integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/integration/api/content-metadata-routes.test.ts`, `__tests__/integration/mcp/mcp-server.test.ts`, `__tests__/integration/mcp/platphorm-service-extended.test.ts`, `__tests__/unit/build-validation.test.ts`, `__tests__/unit/lib/platphorm-service.test.ts`, `__tests__/unit/lib/trace.test.ts`, `API.md`, `app/.well-known/agent.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/docs/route.ts`, `lib/trace.ts`, `LOCAL_DEV.md`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/unit/lib/aeo-geo.test.ts`, `__tests__/unit/lib/db.test.ts`, `__tests__/unit/lib/fingerprint-enhanced.test.ts`, `__tests__/unit/lib/fingerprint.test.ts`, `__tests__/unit/lib/query-builder.test.ts`, `__tests__/unit/lib/tagging.test.ts`, `CONTRIBUTING.md`, `DEPLOYMENT.md`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/register/route.ts`, `app/api/og/route.tsx`, `app/api/v1/version/route.ts`, `app/layout.tsx`, `lib/version.ts`, `LOCAL_DEV.md`, `package.json`, `PACKAGES.md`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/register/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/integrations/[name]/mcp/route.ts`, `lib/mcp-server.ts`, `lib/mcp.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/unit/build-validation.test.ts`, `__tests__/unit/components/command-dialog.test.tsx`, `__tests__/unit/lib/trace.test.ts`, `app/api/cron/content-health/route.ts`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/trace/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/logger.ts`, `lib/trace.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/dashboard/page.tsx`, `app/analytics/page.tsx`, `app/content-policy/page.tsx`, `app/content/[slug]/page.tsx`, `app/content/api/page.tsx`, `app/content/category/[slug]/page.tsx`, `app/content/mcp/page.tsx`, `app/content/page.tsx`, `app/discover/page.tsx`, `app/docs/[slug]/page.tsx`, `app/docs/api/page.tsx`, `app/docs/category/[slug]/page.tsx`, `app/docs/mcp/page.tsx`, `app/docs/page.tsx`, `app/explore/[slug]/page.tsx`, `app/explore/audio/page.tsx`, `app/explore/page.tsx`, `app/explore/videos/page.tsx`, `app/operations/ingest/page.tsx`, `app/search/page.tsx`, `app/settings/page.tsx`, `app/submit/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/unit/lib/query-builder.test.ts`, `app/api/v1/search/route.ts`, `app/search/page.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/e2e/ingest.spec.ts`, `__tests__/integration/api/content-ingest.test.ts`, `__tests__/integration/api/cron-categories.test.ts`, `__tests__/integration/api/discovery-routes.test.ts`, `__tests__/integration/api/docs-openapi.test.ts`, `__tests__/integration/mcp/platphorm-service-extended.test.ts`, `__tests__/performance/categories.test.ts`, `__tests__/unit/build-validation.test.ts`, `__tests__/unit/lib/base-url.test.ts`, `__tests__/unit/lib/db.test.ts`, `__tests__/unit/lib/mcp-network.test.ts`, `__tests__/unit/lib/platphorm-service.test.ts`, `__tests__/unit/lib/query-builder.test.ts`, `__tests__/unit/lib/tagging.test.ts`, `__tests__/unit/lib/trace.test.ts`, `app/.well-known/agent.json/route.ts`, `app/.well-known/mcp/route.ts`, `app/.well-known/security.txt/route.ts`, `app/api/cron/categories/route.ts`, `app/api/cron/content-health/route.ts`, `app/api/docs/route.ts`, `app/api/mcp/register/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/ingest/route.ts`, `app/api/v1/version/route.ts`, `app/content/[slug]/page.tsx`, `app/docs/[slug]/page.tsx`, `app/llms-index.json/route.ts`, `app/llms.txt/route.ts`, `app/robots.txt/route.ts`
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
- Source paths: `__tests__/e2e/api-full-coverage.spec.ts`, `__tests__/e2e/api-health.spec.ts`, `__tests__/e2e/ingest.spec.ts`, `__tests__/e2e/navigation.spec.ts`, `__tests__/e2e/search.spec.ts`, `__tests__/integration/api/automation.test.ts`, `__tests__/integration/api/categories.test.ts`, `__tests__/integration/api/content-ingest.test.ts`, `__tests__/integration/api/content-metadata-routes.test.ts`, `__tests__/integration/api/content-slug-detail.test.ts`, `__tests__/integration/api/content-slug.test.ts`, `__tests__/integration/api/content.test.ts`, `__tests__/integration/api/cron-categories.test.ts`, `__tests__/integration/api/cron-content-health.test.ts`, `__tests__/integration/api/discovery-routes.test.ts`, `__tests__/integration/api/docs-openapi.test.ts`, `__tests__/integration/api/docs-slug-detail.test.ts`, `__tests__/integration/api/documents-slug-detail.test.ts`, `__tests__/integration/api/documents-slug.test.ts`, `__tests__/integration/api/documents.test.ts`, `__tests__/integration/api/explore.test.ts`, `__tests__/integration/api/health.test.ts`, `__tests__/integration/api/ingest.test.ts`, `__tests__/integration/api/integrations-mcp.test.ts`, `__tests__/integration/api/integrations.test.ts`, `__tests__/integration/api/keys.test.ts`, `__tests__/integration/api/mcp-register.test.ts`, `__tests__/integration/api/openapi-docs.test.ts`, `__tests__/integration/api/scores.test.ts`, `__tests__/integration/api/search.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/unit/components/attribution.test.tsx`, `__tests__/unit/components/command-dialog.test.tsx`, `__tests__/unit/components/content-type-icon.test.tsx`, `__tests__/unit/components/docs-list-client.test.tsx`, `__tests__/unit/components/markdown-renderer-xss.test.tsx`, `__tests__/unit/components/settings-page.test.tsx`, `__tests__/unit/components/share-buttons.test.tsx`, `components/accessible-theme-switcher.tsx`, `components/attribution.tsx`, `components/content-card.tsx`, `components/content-grid.tsx`, `components/content-layout.tsx`, `components/content-list-client.tsx`, `components/content-metadata-actions.tsx`, `components/content-type-icon.tsx`, `components/docs-layout.tsx`, `components/docs-list-client.tsx`, `components/locale-switcher.tsx`, `components/markdown-renderer.tsx`, `components/media/media-embed.tsx`, `components/operations/bulk-ingest-console.tsx`, `components/share-buttons.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/webhooks/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `__tests__/integration/api/content-ingest.test.ts`, `__tests__/integration/mcp/platphorm-service-extended.test.ts`, `app/[locale]/dashboard/page.tsx`, `app/api/cron/content-health/route.ts`, `app/api/v1/automation/route.ts`, `app/api/v1/content/[slug]/route.ts`, `app/api/v1/content/ingest/route.ts`, `app/api/v1/ingest/route.ts`, `app/api/v1/settings/route.ts`, `app/api/v1/workflow/route.ts`, `app/content/[slug]/page.tsx`, `app/docs/[slug]/page.tsx`, `app/llms-full.txt/route.ts`, `app/page.tsx`, `components/docs-layout.tsx`, `components/markdown-renderer.tsx`, `components/ui/chart.tsx`, `lib/api-helpers.ts`, `lib/extractors/apple-podcasts.ts`, `lib/extractors/bluesky.ts`, `lib/extractors/boxcast.ts`, `lib/extractors/facebook.ts`, `lib/extractors/index.ts`, `lib/extractors/instagram.ts`, `lib/extractors/podcast.ts`, `lib/extractors/shared.ts`, `lib/extractors/x.ts`, `lib/markdown.ts`, `lib/mcp-server.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/e2e/ingest.spec.ts`, `__tests__/integration/api/cron-categories.test.ts`, `__tests__/integration/mcp/platphorm-service-extended.test.ts`, `__tests__/performance/categories.test.ts`, `__tests__/unit/lib/db.test.ts`, `__tests__/unit/lib/platphorm-service.test.ts`, `__tests__/unit/lib/query-builder.test.ts`, `__tests__/unit/lib/tagging.test.ts`, `app/api/cron/categories/route.ts`, `app/api/cron/content-health/route.ts`, `lib/api-helpers.ts`, `lib/db.ts`, `lib/fingerprint.ts`, `lib/mcp-server.ts`, `lib/platphorm-service.ts`, `PACKAGES.md`, `playwright-global-setup.ts`, `playwright-global-teardown.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

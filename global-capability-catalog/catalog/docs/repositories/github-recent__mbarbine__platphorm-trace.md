# mbarbine__platphorm-trace

This project now includes complete OpenTelemetry support.

## Metadata

- ID: `github-recent__mbarbine__platphorm-trace`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-trace`
- Remote: `git@github.com:mbarbine/platphorm-trace.git`
- Primary language: TypeScript
- Frameworks: Jest, Next.js, Playwright, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/ai/analyze/route.ts`, `components/lcars/ai-panel.tsx`, `components/observatory/ai-analysis-panel.tsx`, `package.json`, `tests/app/api/v1/ai/analyze/route.test.ts`, `tests/components/observatory/ai-analysis-panel.test.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/observatory/health-score-badge.tsx`, `package.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### OpenAPI Documentation

- ID: `api.openapi-docs`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/openapi.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository includes OpenAPI or Swagger documentation files.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/[...path]/route.ts`, `app/api/capabilities/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/schemas/route.ts`, `app/api/telemetry/route.ts`, `app/api/v1/ai/analyze/route.ts`, `app/api/v1/capabilities/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/forks/[id]/route.ts`, `app/api/v1/forks/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/live/route.ts`, `app/api/v1/mcp/route.ts`, `app/api/v1/network/[...path]/route.ts`, `app/api/v1/network/route.ts`, `app/api/v1/otel/v1/traces/route.ts`, `app/api/v1/propagation/tests/route.ts`, `app/api/v1/propagation/tests/run/route.ts`, `app/api/v1/replay/[id]/route.ts`, `app/api/v1/replay/route.ts`, `app/api/v1/sessions/[sessionId]/route.ts`, `app/api/v1/sessions/route.ts`, `app/api/v1/sitemaps/sync/route.ts`, `app/api/v1/sites/[slug]/observability/route.ts`, `app/api/v1/sites/[slug]/route-compliance/route.ts`, `app/api/v1/sites/[slug]/vercel/route.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/sessions/[sessionId]/route.ts`, `app/api/v1/sessions/route.ts`, `app/session/[sessionId]/page.tsx`, `components/session/session-observatory.tsx`, `lib/security/platform-auth.ts`, `package.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/workflows/[id]/dry-run/route.ts`, `app/api/v1/workflows/[id]/run/route.ts`, `app/api/v1/workflows/route.ts`, `app/jobs/page.tsx`, `scripts/publish-job.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/v1/docs/route.ts`, `app/docs/page.tsx`, `components/about/about-content.tsx`, `components/faq/faq-content.tsx`, `lib/db.ts`, `lib/env.ts`, `lib/platform/route-probe-storage.ts`, `lib/platform/route-probes.ts`, `package.json`, `postcss.config.mjs`, `scripts/publish-job.ts`, `tests/components/about/about-content.test.tsx`, `tests/lib/route-probe-storage.test.ts`, `tests/lib/route-probe-tracing.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/status/page.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agent.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/traces/[traceId]/export/route.ts`, `components/seo/json-ld.tsx`, `instrumentation.node.ts`, `package-lock.json`, `package.json`, `tsconfig.jest.json`, `tsconfig.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty high
- Source paths: `package.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository includes CI workflows, deployment config, or containerization files.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-full.txt`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform/route-probe-storage.ts`, `lib/platform/route-probes.ts`, `lib/security/platform-auth.ts`, `package.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/observatory/health-score-badge.tsx`, `lib/logging/index.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/[...path]/route.ts`, `app/.well-known/agent.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/docs/page.tsx`, `app/llms-full.txt/route.ts`, `lib/env.ts`, `package.json`, `scripts/publish-job.ts`, `scripts/register-network.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/db.ts`, `lib/env.ts`, `lib/platform/route-probe-storage.ts`, `lib/platform/route-probes.ts`, `package.json`, `tests/lib/route-probe-storage.test.ts`, `tests/lib/route-probe-tracing.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository has source-backed indicators for a Postgres integration.

### Redis Integration

- ID: `integration.redis`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/redis.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `tests/lib/redis.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository has source-backed indicators for a Redis integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/v1/mcp/route.ts`, `package.json`, `tests/app/api/mcp/route.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/otel/v1/traces/route.ts`, `app/api/v1/sites/[slug]/observability/route.ts`, `app/api/v1/spans/orphans/route.ts`, `app/api/v1/spans/route.ts`, `app/api/v1/traces/[traceId]/analyze/route.ts`, `app/api/v1/traces/[traceId]/annotations/route.ts`, `app/api/v1/traces/[traceId]/completeness/route.ts`, `app/api/v1/traces/[traceId]/export/route.ts`, `app/api/v1/traces/[traceId]/fork/route.ts`, `app/api/v1/traces/[traceId]/route.ts`, `app/api/v1/traces/[traceId]/service-map/route.ts`, `app/api/v1/traces/[traceId]/spans/route.ts`, `app/api/v1/traces/[traceId]/timeline/route.ts`, `app/api/v1/traces/[traceId]/tree/route.ts`, `app/api/v1/traces/[traceId]/waterfall/route.ts`, `app/api/v1/traces/compare/route.ts`, `app/api/v1/traces/route.ts`, `app/trace/[traceId]/page.tsx`, `app/traces/page.tsx`, `components/home/live-trace-feed.tsx`, `components/home/trace-preview-row.tsx`, `components/observatory/health-score-badge.tsx`, `components/observatory/span-detail-panel.tsx`, `components/observatory/trace-observatory.tsx`, `components/trace/trace-card.tsx`, `components/traces/traces-explorer.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/about/page.tsx`, `app/docs/page.tsx`, `app/faq/page.tsx`, `app/jobs/page.tsx`, `app/network/page.tsx`, `app/roadmap/page.tsx`, `app/session/[sessionId]/page.tsx`, `app/status/page.tsx`, `app/trace/[traceId]/page.tsx`, `app/traces/page.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/.well-known/[...path]/route.ts`, `app/api/health/route.ts`, `app/api/v1/ai/analyze/route.ts`, `app/traces/page.tsx`, `instrumentation.node.ts`, `instrumentation.ts`, `lib/db.ts`, `lib/lab-trace-store.ts`, `lib/logging/index.ts`, `lib/redis.ts`, `lib/security/headers.ts`, `lib/security/platform-auth.ts`, `lib/security/trust.ts`, `scripts/publish-job.ts`, `scripts/register-network.ts`, `tests/app/api/v1/ai/analyze/route.test.ts`, `tests/lib/logging/index.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/tests/app/docs/page.test.tsx`, `lib/openapi/spec.ts`, `test-sdk-network.ts`, `test-sdk.ts`, `test-ux.js`, `tests/analysis/plain-english.test.ts`, `tests/app/api/health/route.test.ts`, `tests/app/api/mcp/route.test.ts`, `tests/app/api/telemetry/route.test.ts`, `tests/app/api/v1/ai/analyze/route.test.ts`, `tests/app/api/v1/live/route.test.ts`, `tests/app/api/v1/network/route.test.ts`, `tests/app/api/v1/sessions/[sessionId]/route.test.ts`, `tests/app/api/v1/traces/[traceId]/analyze/route.test.ts`, `tests/app/api/v1/traces/[traceId]/annotations/route.test.ts`, `tests/app/api/v1/traces/[traceId]/export/route.test.ts`, `tests/app/api/v1/traces/[traceId]/route.test.ts`, `tests/app/api/v1/traces/[traceId]/spans/route.test.ts`, `tests/app/api/v1/traces/compare/route.test.ts`, `tests/app/api/v1/traces/route.test.ts`, `tests/app/feed.xml/route.test.ts`, `tests/app/sitemap.test.ts`, `tests/benchmark.test.ts`, `tests/components/about/about-content.test.tsx`, `tests/components/home/hero-panel.test.tsx`, `tests/components/home/left-sidebar.test.tsx`, `tests/components/home/live-trace-feed.test.tsx`, `tests/components/home/right-sidebar.test.tsx`, `tests/components/observatory/ai-analysis-panel.test.tsx`, `tests/components/observatory/annotation-panel.test.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/network/components/network-constellation.tsx`, `app/network/components/site-card.tsx`, `app/network/components/site-details-panel.tsx`, `components/about/about-content.tsx`, `components/faq/faq-content.tsx`, `components/home/feature-panel.tsx`, `components/home/hero-panel.tsx`, `components/home/left-sidebar.tsx`, `components/home/live-feed-section.tsx`, `components/home/live-trace-feed.tsx`, `components/home/nav-button.tsx`, `components/home/right-sidebar.tsx`, `components/home/trace-preview-row.tsx`, `components/layout/footer.tsx`, `components/layout/header.tsx`, `components/layout/language-selector.tsx`, `components/layout/network-bar.tsx`, `components/layout/theme-toggle.tsx`, `components/lc3rs/index.tsx`, `components/lcars/ai-panel.tsx`, `components/lcars/index.tsx`, `components/live/live-feed.tsx`, `components/observatory/ai-analysis-panel.tsx`, `components/observatory/annotation-panel.tsx`, `components/observatory/health-score-badge.tsx`, `components/observatory/span-detail-panel.tsx`, `components/observatory/trace-observatory.tsx`, `components/observatory/waterfall-view.tsx`, `components/plain-english/jargon-toggle.tsx`, `components/seo/json-ld.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/about/page.tsx`, `app/faq/page.tsx`, `app/page.tsx`, `components/live/live-feed.tsx`, `components/seo/json-ld.tsx`, `components/ui/chart.tsx`, `hooks/use-atlas-sensor.ts`, `lib/mcp/client.ts`, `lib/platform/network-registry.ts`, `lib/platform/route-probes.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/v1/ai/analyze/route.ts`, `lib/db.ts`, `lib/redis.ts`, `lib/security/platform-auth.ts`, `lib/security/trust.ts`, `scripts/publish-job.ts`, `scripts/register-network.ts`, `tests/app/api/v1/ai/analyze/route.test.ts`

## Gaps

- CI workflows not detected

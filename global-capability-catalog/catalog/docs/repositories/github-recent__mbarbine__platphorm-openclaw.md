# mbarbine__platphorm-openclaw

CLAWS.platphormnews.com - OpenClaw Integration Platphorm

## Metadata

- ID: `github-recent__mbarbine__platphorm-openclaw`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-openclaw`
- Remote: `git@github.com:mbarbine/platphorm-openclaw.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.docker`, `app/.well-known/ai-plugin.json/route.ts`, `app/api/chat/route.ts`, `app/api/v1/health/route.ts`, `app/chat/page.tsx`, `lib/ai/platphorm-agent.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(dashboard)/integrations/insights/page.tsx`, `app/api/v1/integrations/insights/route.ts`, `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`, `lib/openclaw/integrations/insights.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### OpenAPI Documentation

- ID: `api.openapi-docs`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/openapi.json`
- Tests: 30
- LLMs context: none detected

Repository includes OpenAPI or Swagger documentation files.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/[...path]/route.ts`, `app/api/capabilities/route.ts`, `app/api/chat/route.ts`, `app/api/cron/queue/route.ts`, `app/api/cron/webhooks/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/llms-full/route.ts`, `app/api/llms-index/route.ts`, `app/api/llms/route.ts`, `app/api/mcp/route.ts`, `app/api/network/route.ts`, `app/api/rss/route.ts`, `app/api/search/route.ts`, `app/api/stats/route.ts`, `app/api/tools/execute/route.ts`, `app/api/tools/route.ts`, `app/api/v1/agent/route.ts`, `app/api/v1/capabilities/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/graph/route.ts`, `app/api/v1/integrations/gridnet/route.ts`, `app/api/v1/integrations/insights/route.ts`, `app/api/v1/integrations/platphormnews/route.ts`, `app/api/v1/integrations/trace/route.ts`, `app/api/v1/mcp/route.ts`, `app/api/v1/network/compliance/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/openclaw/session/route.ts`, `lib/auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.Jules/sentinel.md`, `app/api/cron/queue/route.ts`, `app/api/cron/webhooks/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/workflow-runs/[id]/route.ts`, `app/api/v1/workflow-runs/route.ts`, `app/api/v1/workflows/[id]/dry-run/route.ts`, `app/api/v1/workflows/[id]/route.ts`, `app/api/v1/workflows/[id]/run/route.ts`, `app/api/v1/workflows/route.ts`, `scripts/automation.ts`, `tests/api/cron/queue.test.ts`, `tests/api/cron/webhooks.test.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.docker`, `app/.well-known/trust.json/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/network/graph/sync/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/sitemaps/sync/route.ts`, `app/api/v1/workflow-runs/[id]/route.ts`, `docker-compose.yml`, `lib/openclaw/config.ts`, `package.json`, `postcss.config.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/agent/page.tsx`, `app/(dashboard)/integrations/insights/page.tsx`, `app/(dashboard)/integrations/trace/page.tsx`, `app/(dashboard)/page.tsx`, `components/dashboard/header.tsx`, `components/dashboard/nav.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `components/seo/json-ld.tsx`, `package-lock.json`, `package.json`, `tsconfig.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/01-init-schema.sql`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `docker-compose.yml`, `Dockerfile`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/health/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.docker`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.Jules/sentinel.md`, `app/.well-known/agents.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/search/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/integrations/gridnet/route.ts`, `app/api/v1/integrations/trace/route.ts`, `app/api/v1/network/graph/sync/route.ts`, `app/api/v1/openclaw/session/route.ts`, `app/api/v1/openclaw/workspace/route.ts`, `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/webhooks/route.ts`, `lib/openclaw/config.ts`, `lib/openclaw/integrations/network-graph.ts`, `package.json`, `sandbox.md`, `tests/setup.ts`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.docker`, `app/.well-known/trust.json/route.ts`, `app/api/health/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/network/graph/sync/route.ts`, `app/api/v1/sitemaps/sync/route.ts`, `app/api/v1/workflow-runs/[id]/route.ts`, `docker-compose.yml`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Redis Integration

- ID: `integration.redis`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.docker`, `lib/cache/index.ts`, `lib/redis.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `tests/lib/cache.test.ts`, `tests/lib/cache/index.test.ts`, `tests/lib/redis.test.ts`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Redis integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/v1/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(dashboard)/integrations/trace/page.tsx`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/trace/route.ts`, `app/api/v1/mcp/route.ts`, `app/api/v1/network/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/observability.ts`, `lib/openclaw/integrations/trace.ts`, `package.json`, `tests/api/v1/integrations/trace/route.test.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/agent/page.tsx`, `app/(dashboard)/integrations/insights/page.tsx`, `app/(dashboard)/integrations/trace/page.tsx`, `app/(dashboard)/page.tsx`, `app/chat/page.tsx`, `app/network/page.tsx`, `app/tools/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/search/route.ts`, `lib/search.ts`, `lib/search/index.ts`, `package.json`, `tests/api/search.test.ts`, `tests/api/search/route.test.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.docker`, `.Jules/sentinel.md`, `app/.well-known/[...path]/route.ts`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/security.txt/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/[...path]/route.ts`, `app/api/capabilities/route.ts`, `app/api/chat/route.ts`, `app/api/cron/queue/route.ts`, `app/api/cron/webhooks/route.ts`, `app/api/health/route.ts`, `app/api/llms-full/route.ts`, `app/api/llms-index/route.ts`, `app/api/rss/route.ts`, `app/api/search/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/gridnet/route.ts`, `app/api/v1/integrations/trace/route.ts`, `app/api/v1/mcp/route.ts`, `app/api/v1/openclaw/session/route.ts`, `app/api/v1/openclaw/workspace/route.ts`, `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`, `app/api/v1/sitemaps/sync/route.ts`, `app/api/v1/tests/agentui/route.ts`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/manifest.webmanifest`
- Tests: 30
- LLMs context: none detected

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

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
- Source paths: `tests/.well-known/ai-plugin.test.ts`, `tests/api/agent.test.ts`, `tests/api/cron/queue.test.ts`, `tests/api/cron/webhooks.test.ts`, `tests/api/health.test.ts`, `tests/api/llms-index.test.ts`, `tests/api/platphormnews-tools.test.ts`, `tests/api/rss.test.ts`, `tests/api/search.test.ts`, `tests/api/search/route.test.ts`, `tests/api/v1/integrations/insights/route.test.ts`, `tests/api/v1/integrations/trace/route.test.ts`, `tests/e2e/trace.e2e.test.ts`, `tests/hooks/use-mobile.test.ts`, `tests/hooks/use-toast.test.ts`, `tests/lib/cache.test.ts`, `tests/lib/cache/index.test.ts`, `tests/lib/crypto.test.ts`, `tests/lib/db.test.ts`, `tests/lib/gridnet.test.ts`, `tests/lib/insights.test.ts`, `tests/lib/mcp-server.test.ts`, `tests/lib/network-graph.test.ts`, `tests/lib/network/discovery.test.ts`, `tests/lib/observability.test.ts`, `tests/lib/openclaw-mcp.test.ts`, `tests/lib/openclaw/config.test.ts`, `tests/lib/openclaw/integrations/docs.test.ts`, `tests/lib/openclaw/mcp-tools.test.ts`, `tests/lib/openclaw/schemas/validate.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/dashboard/header.tsx`, `components/dashboard/nav.tsx`, `components/seo/json-ld.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`, `components/ui/dialog.tsx`, `components/ui/drawer.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/empty.tsx`, `components/ui/field.tsx`, `components/ui/form.tsx`, `components/ui/hover-card.tsx`, `components/ui/input-group.tsx`, `components/ui/input-otp.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/webhooks/route.ts`, `app/api/v1/tests/webhooklab/route.ts`, `app/api/webhooks/route.ts`, `tests/api/cron/webhooks.test.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [critical] Secret-like literal values were detected in source. Samples are redacted in scan output. Evidence: `.env.docker`
- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.Jules/sentinel.md`, `app/(dashboard)/integrations/insights/page.tsx`, `app/(dashboard)/integrations/trace/page.tsx`, `app/(dashboard)/page.tsx`, `app/api/v1/health/route.ts`, `app/api/webhooks/route.ts`, `app/network/page.tsx`, `app/page.tsx`, `app/tools/page.tsx`, `components/seo/json-ld.tsx`, `components/ui/chart.tsx`, `lib/cache/index.ts`, `lib/openclaw/integrations/gridnet.ts`, `lib/openclaw/integrations/network-graph.ts`, `lib/openclaw/integrations/platphormnews.ts`, `lib/sdk/client.ts`, `lib/search.ts`, `lib/ssrf.ts`, `lib/webhooks.ts`, `tests/api/platphormnews-tools.test.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.docker`, `.Jules/sentinel.md`, `app/api/chat/route.ts`, `app/api/cron/queue/route.ts`, `app/api/cron/webhooks/route.ts`, `app/api/health/route.ts`, `app/api/search/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/gridnet/route.ts`, `app/api/v1/integrations/trace/route.ts`, `app/api/v1/openclaw/session/route.ts`, `app/api/v1/openclaw/workspace/route.ts`, `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`, `app/api/v1/tests/agentui/route.ts`, `app/api/v1/tests/browserops/route.ts`, `app/api/v1/tests/evals/route.ts`, `app/api/v1/tests/sandbox/route.ts`, `app/api/v1/tests/webhooklab/route.ts`, `app/api/webhooks/route.ts`, `lib/ai/platphorm-agent.ts`, `lib/auth.ts`, `lib/cache/index.ts`, `lib/db.ts`, `lib/db/index.ts`, `lib/openclaw/integrations/gridnet.ts`, `lib/openclaw/integrations/insights.ts`, `lib/openclaw/integrations/network-graph.ts`, `lib/openclaw/integrations/platphormnews.ts`, `lib/openclaw/integrations/trace.ts`, `lib/openclaw/mcp/client.ts`, `lib/redis.ts`, `lib/sdk/client.ts`, `lib/search.ts`, `lib/search/index.ts`, `scripts/automation.ts`, `scripts/migrate.ts`, `tests/api/cron/queue.test.ts`, `tests/api/cron/webhooks.test.ts`, `tests/api/search.test.ts`, `tests/api/search/route.test.ts`, `tests/api/v1/integrations/trace/route.test.ts`, `tests/lib/redis.test.ts`, `tests/sdk/client.test.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

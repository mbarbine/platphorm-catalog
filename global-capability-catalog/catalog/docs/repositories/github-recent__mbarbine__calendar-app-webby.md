# mbarbine__calendar-app-webby

Package repository for platphorm-calendar.

## Metadata

- ID: `github-recent__mbarbine__calendar-app-webby`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__calendar-app-webby`
- Remote: `git@github.com:mbarbine/calendar-app-webby.git`
- Primary language: TypeScript
- Frameworks: Jest, Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/[...path]/route.ts`, `app/api/capabilities/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/og/route.tsx`, `app/api/v1/api-keys/route.ts`, `app/api/v1/calendars/[id]/feed/route.ts`, `app/api/v1/calendars/[id]/ics/route.ts`, `app/api/v1/calendars/[id]/route.ts`, `app/api/v1/calendars/route.ts`, `app/api/v1/capabilities/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/events/[id]/cancel/route.ts`, `app/api/v1/events/[id]/google-link/route.ts`, `app/api/v1/events/[id]/ics/route.ts`, `app/api/v1/events/[id]/outlook-link/route.ts`, `app/api/v1/events/[id]/revisions/route.ts`, `app/api/v1/events/[id]/route.ts`, `app/api/v1/events/[id]/trace/route.ts`, `app/api/v1/events/ics/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/claws/route.ts`, `app/api/v1/integrations/docs/route.ts`, `app/api/v1/integrations/google/route.ts`, `app/api/v1/integrations/jobs/route.ts`, `app/api/v1/integrations/json/route.ts`, `app/api/v1/integrations/jules/sessions/route.ts`, `app/api/v1/integrations/jules/sync/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/lib/auth.test.ts`, `app/api/v1/integrations/jules/sessions/route.ts`, `lib/auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/integrations/jobs/route.ts`, `app/api/v1/integrations/kanban/tasks/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/v1/health.test.ts`, `__tests__/feeds/rss.test.ts`, `__tests__/lib/store.test.ts`, `AGENTS.md`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/integrations/docs/route.ts`, `app/api/v1/integrations/status/route.ts`, `app/llms-full.txt/route.ts`, `docs/api.md`, `docs/architecture.md`, `docs/faq.md`, `docs/integration.md`, `docs/mcp.md`, `docs/platphorm-news.md`, `docs/principles.md`, `docs/roadmap.md`, `package.json`, `postcss.config.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/page.tsx`, `app/(dashboard)/settings/api/page.tsx`, `app/(dashboard)/settings/page.tsx`, `app/api/v1/integrations/status/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/integrations/json/route.ts`, `package-lock.json`, `package.json`, `tsconfig.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/001-init-schema.sql`, `scripts/001-initial-schema.sql`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/ci.yml`, `Dockerfile`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/integrations/producthunt/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

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

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/v1/api-keys.test.ts`, `__tests__/api/v1/public-events.test.ts`, `__tests__/lib/auth.test.ts`, `app/.well-known/[...path]/route.ts`, `app/(dashboard)/settings/api/page.tsx`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/v1/health.test.ts`, `__tests__/feeds/rss.test.ts`, `__tests__/lib/store.test.ts`, `AGENTS.md`, `app/api/health/route.ts`, `app/api/v1/integrations/status/route.ts`, `app/llms-full.txt/route.ts`, `docs/architecture.md`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/v1/mcp/register/route.ts`, `app/api/v1/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/v1/health.test.ts`, `__tests__/lib/logger.test.ts`, `app/api/health/route.ts`, `app/api/v1/events/[id]/trace/route.ts`, `app/api/v1/health/route.ts`, `components/calendar/create-event-dialog.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/logger.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/page.tsx`, `app/(dashboard)/settings/api/page.tsx`, `app/(dashboard)/settings/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/v1/health.test.ts`, `__tests__/lib/auth.test.ts`, `__tests__/lib/logger.test.ts`, `__tests__/lib/store.test.ts`, `app/.well-known/[...path]/route.ts`, `app/api/[...path]/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/integrations/status/route.ts`, `lib/auth.ts`, `lib/db.ts`, `lib/logger.ts`, `lib/store.ts`, `middleware.ts`
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
- Source paths: `__tests__/api/docs.test.ts`, `__tests__/api/mcp-client.test.ts`, `__tests__/api/mcp-json-rpc.test.ts`, `__tests__/api/routes-smoke.test.ts`, `__tests__/api/v1/api-keys.test.ts`, `__tests__/api/v1/calendars.test.ts`, `__tests__/api/v1/docs.test.ts`, `__tests__/api/v1/events-ics.test.ts`, `__tests__/api/v1/events-id.test.ts`, `__tests__/api/v1/events-move.test.ts`, `__tests__/api/v1/events.test.ts`, `__tests__/api/v1/health.test.ts`, `__tests__/api/v1/integrations/claws.test.ts`, `__tests__/api/v1/integrations/docs.test.ts`, `__tests__/api/v1/integrations/google.test.ts`, `__tests__/api/v1/integrations/jobs.test.ts`, `__tests__/api/v1/integrations/json.test.ts`, `__tests__/api/v1/integrations/kanban.test.ts`, `__tests__/api/v1/integrations/onboard.test.ts`, `__tests__/api/v1/integrations/outlook.test.ts`, `__tests__/api/v1/integrations/producthunt.test.ts`, `__tests__/api/v1/mcp.test.ts`, `__tests__/api/v1/mcp/register.test.ts`, `__tests__/api/v1/public-events.test.ts`, `__tests__/api/v1/settings.test.ts`, `__tests__/api/v1/webhooks.test.ts`, `__tests__/api/well-known-network.test.ts`, `__tests__/feeds/atom.test.ts`, `__tests__/feeds/humans.test.ts`, `__tests__/feeds/llms.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/calendar/agenda-view.tsx`, `components/calendar/calendar-view.tsx`, `components/calendar/create-event-dialog.tsx`, `components/calendar/day-view.tsx`, `components/calendar/event-card.tsx`, `components/calendar/event-detail.tsx`, `components/calendar/mini-calendar.tsx`, `components/calendar/month-view.tsx`, `components/calendar/week-view.tsx`, `components/layout/app-sidebar.tsx`, `components/layout/footer.tsx`, `components/layout/top-bar.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/events/[id]/cancel/route.ts`, `app/api/v1/events/[id]/google-link/route.ts`, `app/api/v1/events/[id]/ics/route.ts`, `app/api/v1/events/[id]/outlook-link/route.ts`, `app/api/v1/events/[id]/revisions/route.ts`, `app/api/v1/events/[id]/route.ts`, `app/api/v1/events/[id]/trace/route.ts`, `app/api/v1/events/ics/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/integrations/onboard/events/route.ts`, `app/api/v1/public/events/route.ts`, `app/api/v1/webhooks/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/feed.xml/route.ts`, `app/layout.tsx`, `components/calendar/mini-calendar.tsx`, `components/ui/chart.tsx`, `hooks/use-events.ts`, `lib/store.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/api/v1/health.test.ts`, `__tests__/lib/auth.test.ts`, `__tests__/lib/store.test.ts`, `app/api/health/route.ts`, `app/api/v1/integrations/status/route.ts`, `lib/auth.ts`, `lib/db.ts`, `lib/store.ts`

## Gaps

- README not detected
- LLMs context files not detected

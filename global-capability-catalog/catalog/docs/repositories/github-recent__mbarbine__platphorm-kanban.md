# mbarbine__platphorm-kanban

Beep Boop

## Metadata

- ID: `github-recent__mbarbine__platphorm-kanban`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-kanban`
- Remote: `git@github.com:mbarbine/platphorm-kanban.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`, `lib/constants.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/activities/route.ts`, `app/api/v1/ascii/route.ts`, `app/api/v1/board/route.ts`, `app/api/v1/boards/[id]/columns/route.ts`, `app/api/v1/boards/[id]/export/route.ts`, `app/api/v1/boards/[id]/route.ts`, `app/api/v1/boards/import/route.ts`, `app/api/v1/boards/route.ts`, `app/api/v1/calendar/mcp/route.ts`, `app/api/v1/calendar/projects/route.ts`, `app/api/v1/calendar/route.ts`, `app/api/v1/columns/[id]/reorder/route.ts`, `app/api/v1/columns/[id]/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/v1/network/graph/sync/route.ts`, `app/api/v1/network/route-compliance/route.ts`, `app/api/v1/network/sites/route.ts`, `app/api/v1/network/trusted-domains/route.ts`, `app/api/v1/onboard/route.ts`, `app/api/v1/openapi.json/route.ts`, `app/api/v1/projects/route.ts`, `app/api/v1/projects/sync/route.ts`, `app/api/v1/reports/decks/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/tasks.test.ts`, `__tests__/components/task-detail-sidebar.test.tsx`, `app/api/v1/tasks/[id]/complete/route.ts`, `app/api/v1/tasks/[id]/history/route.ts`, `app/api/v1/tasks/[id]/move/route.ts`, `app/api/v1/tasks/[id]/reopen/route.ts`, `app/api/v1/tasks/[id]/route.ts`, `app/api/v1/tasks/route.ts`, `components/automation-rules.tsx`, `components/task-card.tsx`, `components/task-detail-sidebar.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/sync/status/route.ts`, `package.json`, `postcss.config.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/sync/status/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/trust.json/route.ts`, `app/api/v1/boards/[id]/export/route.ts`, `app/api/v1/boards/import/route.ts`, `app/api/v1/openapi.json/route.ts`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

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

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/columns/[id]/reorder/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform-api.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/calendar-projects.test.ts`, `__tests__/api/calendar.test.ts`, `__tests__/api/onboard.test.ts`, `__tests__/api/tasks.test.ts`, `__tests__/api/webhook.test.ts`, `__tests__/integration/calendar-sync.test.ts`, `__tests__/proxy.test.ts`, `app/.well-known/trust.json/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/calendar/mcp/route.ts`, `app/api/webhooks/platphormnews/route.ts`, `INTEGRATION.md`, `package.json`, `README.md`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/health/route.ts`, `app/api/v1/sync/status/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/lib/vercel.test.ts`, `app/api/v1/health/route.ts`, `app/layout.tsx`, `lib/constants.ts`, `lib/vercel.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/v1/calendar/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/faq/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/calendar-projects.test.ts`, `__tests__/api/calendar.test.ts`, `__tests__/api/onboard.test.ts`, `__tests__/api/tasks.test.ts`, `__tests__/api/webhook.test.ts`, `__tests__/integration/calendar-sync.test.ts`, `__tests__/lib/board-store.test.ts`, `__tests__/lib/vercel.test.ts`, `__tests__/proxy.test.ts`, `app/api/v1/calendar/mcp/route.ts`, `app/api/v1/calendar/projects/route.ts`, `app/api/v1/calendar/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/onboard/route.ts`, `app/api/v1/sync/status/route.ts`, `app/api/webhooks/platphormnews/route.ts`, `instrumentation.ts`, `lib/board-store.ts`, `lib/constants.ts`, `lib/platform-api.ts`, `lib/vercel.ts`, `proxy.ts`
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
- Source paths: `__tests__/api/activities.test.ts`, `__tests__/api/ascii.test.ts`, `__tests__/api/board.test.ts`, `__tests__/api/calendar-mcp.test.ts`, `__tests__/api/calendar-projects.test.ts`, `__tests__/api/calendar.test.ts`, `__tests__/api/discovery.test.ts`, `__tests__/api/docs.test.ts`, `__tests__/api/events.test.ts`, `__tests__/api/feed.test.ts`, `__tests__/api/health.test.ts`, `__tests__/api/mcp-tools.test.ts`, `__tests__/api/mcp.test.ts`, `__tests__/api/onboard.test.ts`, `__tests__/api/openapi.test.ts`, `__tests__/api/sitemap.test.ts`, `__tests__/api/tasks-id.test.ts`, `__tests__/api/tasks.test.ts`, `__tests__/api/webhook.test.ts`, `__tests__/components/task-detail-sidebar.test.tsx`, `__tests__/components/user-settings.test.tsx`, `__tests__/hooks/use-keyboard-shortcuts.test.tsx`, `__tests__/hooks/use-mobile.test.tsx`, `__tests__/hooks/use-toast.test.ts`, `__tests__/hooks/use-toast.test.tsx`, `__tests__/integration/board-workflow.test.ts`, `__tests__/integration/calendar-sync.test.ts`, `__tests__/integration/mcp-workflow.test.ts`, `__tests__/lib/automation.test.ts`, `__tests__/lib/board-store.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/task-detail-sidebar.test.tsx`, `__tests__/components/user-settings.test.tsx`, `components/automation-rules.tsx`, `components/calendar-integration.tsx`, `components/column.tsx`, `components/faq.tsx`, `components/kanban-board.tsx`, `components/network-breadcrumbs.tsx`, `components/ph3ar-modal.tsx`, `components/task-card.tsx`, `components/task-detail-sidebar.tsx`, `components/theme-provider.tsx`, `components/theme-toggle.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/webhook.test.ts`, `__tests__/integration/calendar-sync.test.ts`, `app/api/v1/events/route.ts`, `app/api/v1/tests/webhooklab/route.ts`, `app/api/webhooks/platphormnews/route.ts`, `app/api/webhooks/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/atom.xml/route.ts`, `app/layout.tsx`, `lib/mcp-client.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/api/calendar-projects.test.ts`, `__tests__/api/calendar.test.ts`, `__tests__/api/onboard.test.ts`, `__tests__/api/tasks.test.ts`, `__tests__/api/webhook.test.ts`, `__tests__/integration/calendar-sync.test.ts`, `__tests__/lib/board-store.test.ts`, `__tests__/proxy.test.ts`, `app/api/v1/calendar/mcp/route.ts`, `app/api/v1/calendar/projects/route.ts`, `app/api/v1/calendar/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/onboard/route.ts`, `app/api/v1/sync/status/route.ts`, `app/api/webhooks/platphormnews/route.ts`, `lib/board-store.ts`, `lib/platform-api.ts`, `proxy.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

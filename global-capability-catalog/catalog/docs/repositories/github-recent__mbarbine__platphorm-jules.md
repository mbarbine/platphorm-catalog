# mbarbine__platphorm-jules

Jules is the PlatPhormNews coding-session workspace and Onboard-to-implementation handoff layer. It helps humans and agents turn onboarding applications, platform gaps, repo work, MCP/API tools, BrowserOps/Evals findings, docs requirements, and trace findings into trace-linked plans, tasks, and developer workflow handoffs.

## Metadata

- ID: `github-recent__mbarbine__platphorm-jules`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-jules`
- Remote: `git@github.com:mbarbine/platphorm-jules.git`
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
- Source paths: `app/api/v1/onboard/import/[id]/generate-docs/route.ts`, `app/api/v1/onboard/import/[id]/generate-plan/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/integrations/docs/report/route.ts`, `lib/__tests__/analytics.test.ts`, `lib/analytics.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/[...path]/route.ts`, `app/api/capabilities/route.ts`, `app/api/docs/route.ts`, `app/api/github/auth-status/route.ts`, `app/api/github/repositories/create/route.ts`, `app/api/github/repositories/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/register/route.ts`, `app/api/v0/agent-run/[id]/route.ts`, `app/api/v0/agent-run/[id]/tool-calls/route.ts`, `app/api/v0/realm/[id]/route.ts`, `app/api/v1/auth-status/route.ts`, `app/api/v1/calendar/events/route.ts`, `app/api/v1/capabilities/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/browserops/run/route.ts`, `app/api/v1/integrations/docs/report/route.ts`, `app/api/v1/integrations/evals/run/route.ts`, `app/api/v1/integrations/kanban/create-tasks/route.ts`, `app/api/v1/integrations/mcp/sync/route.ts`, `app/api/v1/integrations/route.ts`, `app/api/v1/integrations/sandbox/dry-run/route.ts`, `app/api/v1/integrations/status/route.ts`, `app/api/v1/kanban/board/route.ts`, `app/api/v1/kanban/tasks/route.ts`, `app/api/v1/mcp/network/route.ts`, `app/api/v1/mcp/route.ts`, `app/api/v1/mcp/sites/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(main)/modernize/callback/page.tsx`, `app/api/github/auth-status/route.test.ts`, `app/api/github/auth-status/route.ts`, `app/api/v1/auth-status/route.ts`, `app/api/v1/onboard/import/[id]/create-session/route.ts`, `app/api/v1/sessions/[id]/export/route.ts`, `app/api/v1/sessions/[id]/messages/route.ts`, `app/api/v1/sessions/[id]/plans/route.ts`, `app/api/v1/sessions/[id]/route.ts`, `app/api/v1/sessions/import/route.ts`, `app/api/v1/sessions/route.ts`, `app/api/v1alpha/auth-status/route.test.ts`, `app/api/v1alpha/auth-status/route.ts`, `app/api/v1alpha/sessions/[sessionId]/activities/route.ts`, `app/api/v1alpha/sessions/[sessionId]/route.ts`, `app/api/v1alpha/sessions/route.ts`, `app/session/[id]/page.tsx`, `components/jules/session-card.test.tsx`, `components/jules/session-card.tsx`, `lib/server/platform-auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/integrations/kanban/create-tasks/route.ts`, `app/api/v1/kanban/tasks/route.ts`, `app/api/v1/onboard/import/[id]/create-kanban-tasks/route.ts`, `app/jobs/page.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(main)/page.test.tsx`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/v1/docs/route.ts`, `app/api/v1/integrations/docs/report/route.ts`, `app/api/v1/onboard/import/[id]/generate-docs/route.ts`, `lib/jules-model.ts`, `lib/platform-discovery.ts`, `lib/server/jules-store.ts`, `package.json`, `postcss.config.mjs`, `README.md`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(main)/dashboard/page.tsx`, `app/api/github/auth-status/route.test.ts`, `app/api/github/auth-status/route.ts`, `app/api/v1/auth-status/route.ts`, `app/api/v1/integrations/status/route.ts`, `app/api/v1alpha/auth-status/route.test.ts`, `app/api/v1alpha/auth-status/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/onboard/import/[id]/create-kanban-tasks/route.ts`, `app/api/v1/onboard/import/[id]/create-session/route.ts`, `app/api/v1/onboard/import/[id]/generate-docs/route.ts`, `app/api/v1/onboard/import/[id]/generate-plan/route.ts`, `app/api/v1/onboard/import/route.test.ts`, `app/api/v1/onboard/import/route.ts`, `app/api/v1/sessions/[id]/export/route.ts`, `app/api/v1/sessions/import/route.ts`, `package-lock.json`, `package.json`, `tsconfig.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform-discovery.ts`, `lib/server/platform-auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.test.ts`, `app/api/health/route.ts`, `app/api/register/__tests__/route.test.ts`, `app/api/register/route.ts`, `app/api/v1/auth-status/route.ts`, `app/api/v1/calendar/events/route.ts`, `app/api/v1/kanban/board/route.ts`, `app/api/v1/kanban/tasks/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(main)/page.test.tsx`, `app/api/health/route.ts`, `lib/jules-model.ts`, `lib/platform-discovery.ts`, `lib/server/jules-store.ts`, `package.json`, `README.md`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/onboard/import/route.test.ts`, `app/layout.tsx`, `lib/server/jules-store.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.test.ts`, `app/api/mcp/route.ts`, `app/api/v1/integrations/mcp/sync/route.ts`, `app/api/v1/mcp/network/route.ts`, `app/api/v1/mcp/route.ts`, `app/api/v1/mcp/sites/route.ts`, `app/api/v1/mcp/tools/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.test.ts`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(main)/create/page.tsx`, `app/(main)/dashboard/page.tsx`, `app/(main)/faq/page.tsx`, `app/(main)/modernize/callback/page.tsx`, `app/(main)/modernize/page.tsx`, `app/(main)/page.tsx`, `app/(main)/roadmap/page.tsx`, `app/jobs/page.tsx`, `app/session/[id]/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/.well-known/[...path]/route.ts`, `app/api/[...path]/route.ts`, `app/api/github/auth-status/route.test.ts`, `app/api/github/repositories/create/route.test.ts`, `app/api/github/repositories/route.test.ts`, `app/api/health/route.ts`, `app/api/register/__tests__/route.test.ts`, `app/api/register/route.ts`, `app/api/v1/calendar/events/route.ts`, `app/api/v1/kanban/board/route.ts`, `app/api/v1/kanban/tasks/route.ts`, `app/api/v1/onboard/import/route.test.ts`, `app/api/v1alpha/auth-status/route.test.ts`, `app/api/webhooks/route.ts`, `e2e/jules-live.spec.ts`, `lib/__tests__/analytics.test.ts`, `lib/analytics.ts`, `lib/jules-mcp-server.ts`, `lib/platform-discovery.ts`, `lib/server/jules-proxy.test.ts`, `lib/server/jules-proxy.ts`, `lib/server/jules-store.ts`, `lib/server/platform-auth.ts`, `middleware.ts`, `playwright.config.ts`
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
- Source paths: `app/(main)/dashboard/page.test.tsx`, `app/(main)/faq/faq.test.tsx`, `app/(main)/page.test.tsx`, `app/(main)/roadmap/roadmap.test.tsx`, `app/api/docs/spec.ts`, `app/api/github/auth-status/route.test.ts`, `app/api/github/repositories/create/route.test.ts`, `app/api/github/repositories/route.test.ts`, `app/api/health/route.test.ts`, `app/api/mcp/route.test.ts`, `app/api/register/__tests__/route.test.ts`, `app/api/v0/agent-run/[id]/route.test.ts`, `app/api/v0/agent-run/[id]/tool-calls/route.test.ts`, `app/api/v1/calendar/events/__tests__/route.test.ts`, `app/api/v1/integrations/kanban/create-tasks/route.test.ts`, `app/api/v1/kanban/board/__tests__/route.test.ts`, `app/api/v1/kanban/tasks/route.test.ts`, `app/api/v1/mcp/network/__tests__/route.test.ts`, `app/api/v1/mcp/sites/__tests__/route.test.ts`, `app/api/v1/mcp/tools/route.test.ts`, `app/api/v1/onboard/import/route.test.ts`, `app/api/v1alpha/auth-status/route.test.ts`, `app/api/v1alpha/sessions/[sessionId]/activities/__tests__/route.test.ts`, `app/api/v1alpha/sessions/[sessionId]/route.test.ts`, `app/api/v1alpha/sessions/route.test.ts`, `app/api/v1alpha/sources/__tests__/route.test.ts`, `app/api/webhooks/route.test.ts`, `app/jobs/page.test.tsx`, `components/jules/activity-item.test.tsx`, `components/jules/breadcrumb-usage.test.tsx`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/jules/activity-item.test.tsx`, `components/jules/activity-item.tsx`, `components/jules/bottom-nav.tsx`, `components/jules/breadcrumb-usage.test.tsx`, `components/jules/breadcrumbs.test.tsx`, `components/jules/breadcrumbs.tsx`, `components/jules/code-block.test.tsx`, `components/jules/code-block.tsx`, `components/jules/empty-state.test.tsx`, `components/jules/empty-state.tsx`, `components/jules/header.test.tsx`, `components/jules/header.tsx`, `components/jules/loading-overlay.test.tsx`, `components/jules/loading-overlay.tsx`, `components/jules/session-card.test.tsx`, `components/jules/session-card.tsx`, `components/providers.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/calendar/events/route.ts`, `app/api/webhooks/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/(main)/create/page.tsx`, `app/(main)/dashboard/page.tsx`, `app/(main)/page.tsx`, `app/api/register/route.ts`, `app/api/v1alpha/sessions/[sessionId]/route.ts`, `app/session/[id]/page.tsx`, `components/ui/chart.tsx`, `hooks/use-calendar.ts`, `hooks/use-jules-api.ts`, `hooks/use-kanban.ts`, `hooks/use-mcp.ts`, `lib/analytics.ts`, `lib/platform-discovery.ts`, `lib/server/jules-proxy.ts`, `lib/server/network-discovery.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/github/auth-status/route.test.ts`, `app/api/github/repositories/create/route.test.ts`, `app/api/github/repositories/route.test.ts`, `app/api/health/route.ts`, `app/api/register/__tests__/route.test.ts`, `app/api/register/route.ts`, `app/api/v1/calendar/events/route.ts`, `app/api/v1/kanban/board/route.ts`, `app/api/v1/kanban/tasks/route.ts`, `app/api/v1alpha/auth-status/route.test.ts`, `app/api/webhooks/route.ts`, `lib/server/jules-proxy.test.ts`, `lib/server/jules-proxy.ts`, `lib/server/jules-store.ts`, `lib/server/platform-auth.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

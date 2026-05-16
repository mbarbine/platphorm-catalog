# mbarbine__platphorm-jobs

> Bring your references with you. Never face a panel alone.

## Metadata

- ID: `github-recent__mbarbine__platphorm-jobs`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-jobs`
- Remote: `git@github.com:mbarbine/platphorm-jobs.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: internal
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/interviews/[id]/debrief/generate/route.ts`, `package.json`
- Tests: 19
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 19
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/events/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/grok/parse-jd/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/calendar/sync/route.ts`, `app/api/v1/integrations/kanban/sync/route.ts`, `app/api/v1/integrations/status/route.ts`, `app/api/v1/interviews/[id]/archive/route.ts`, `app/api/v1/interviews/[id]/debrief/generate/route.ts`, `app/api/v1/interviews/[id]/debrief/route.ts`, `app/api/v1/interviews/[id]/export/route.ts`, `app/api/v1/interviews/[id]/invites/route.ts`, `app/api/v1/interviews/[id]/observations/route.ts`, `app/api/v1/interviews/[id]/prep/route.ts`, `app/api/v1/interviews/[id]/route.ts`, `app/api/v1/interviews/ics/route.ts`, `app/api/v1/interviews/import/route.ts`, `app/api/v1/interviews/route.ts`, `app/api/v1/invites/[token]/accept/route.ts`, `app/api/v1/invites/[token]/revoke/route.ts`, `app/api/v1/invites/[token]/route.ts`, `app/api/v1/jd/parse/route.ts`, `app/api/v1/network/calendar/route.ts`, `app/api/v1/network/kanban/route.ts`, `app/api/v1/network/mcp/route.ts`, `app/api/v1/team/[id]/route.ts`, `app/api/v1/team/route.ts`
- Tests: 19
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 19
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/jobs-server-store.ts`
- Tests: 19
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/events/route.ts`, `app/api/health/route.ts`, `app/api/v1/interviews/route.ts`, `app/api/v1/team/route.ts`, `app/docs/page.tsx`, `components/api-docs-viewer.tsx`, `docs/integrations/calendar.md`, `docs/integrations/grok.md`, `docs/integrations/jitsi.md`, `docs/integrations/kanban.md`, `docs/integrations/mcp.md`, `docs/integrations/sitemap.md`, `lib/discovery.ts`, `lib/jobs-server-store.ts`, `package.json`, `postcss.config.mjs`, `README.md`
- Tests: 19
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/components/dashboard/countdown-timer.test.tsx`, `app/api/v1/integrations/status/route.ts`, `app/dashboard/interviews/[id]/page.tsx`, `app/dashboard/interviews/new/page.tsx`, `app/dashboard/interviews/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/prep/page.tsx`, `app/dashboard/settings/page.tsx`, `app/dashboard/team/page.tsx`, `components/dashboard/command-palette.tsx`, `components/dashboard/countdown-timer.tsx`, `components/dashboard/dashboard-overview.tsx`, `components/dashboard/dashboard-shell.tsx`, `components/dashboard/dashboard-sidebar.tsx`, `components/dashboard/interview-detail.tsx`, `components/dashboard/interviews-list.tsx`, `components/dashboard/mobile-bottom-nav.tsx`, `components/dashboard/new-interview-form.tsx`, `components/dashboard/prep-room.tsx`, `components/dashboard/settings-page.tsx`, `components/dashboard/team-manager.tsx`
- Tests: 19
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/api/v1/interviews/[id]/export/route.ts`, `app/api/v1/interviews/import/route.ts`, `components/json-ld.tsx`, `package-lock.json`, `package.json`, `tsconfig.json`
- Tests: 19
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/terms/page.tsx`
- Tests: 19
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/components/join-team-form.test.tsx`, `components/dashboard/new-interview-form.tsx`, `components/join-by-token-form.tsx`, `components/join-team-form.tsx`, `components/ui/form.tsx`, `lib/platform.ts`, `package.json`
- Tests: 19
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/events.test.ts`, `__tests__/api/grok-parse-jd.test.ts`, `__tests__/api/interviews.test.ts`, `__tests__/api/network-calendar.test.ts`, `__tests__/api/team.test.ts`, `__tests__/api/webhooks.test.ts`, `__tests__/lib/events.test.ts`, `app/.well-known/agents.json/route.ts`, `package.json`
- Tests: 19
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/events/route.ts`, `app/api/health/route.ts`, `app/api/v1/interviews/route.ts`, `app/api/v1/team/route.ts`, `lib/discovery.ts`, `lib/jobs-server-store.ts`, `package.json`, `README.md`
- Tests: 19
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 19
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/v1/network/mcp/route.ts`, `package.json`
- Tests: 19
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 19
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/dashboard/interviews/[id]/page.tsx`, `app/dashboard/interviews/new/page.tsx`, `app/dashboard/interviews/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/prep/page.tsx`, `app/dashboard/settings/page.tsx`, `app/dashboard/team/page.tsx`, `app/docs/page.tsx`, `app/faq/page.tsx`, `app/join/[token]/page.tsx`, `app/join/team/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`
- Tests: 19
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.jules/sentinel.md`, `app/api/health/route.ts`, `app/api/v1/grok/parse-jd/route.ts`, `app/api/v1/integrations/status/route.ts`, `lib/events.ts`, `lib/jobs-server-store.ts`, `lib/platform.ts`
- Tests: 19
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 19
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/docs.test.ts`, `__tests__/api/events.test.ts`, `__tests__/api/grok-parse-jd.test.ts`, `__tests__/api/health.test.ts`, `__tests__/api/interviews-ics.test.ts`, `__tests__/api/interviews.test.ts`, `__tests__/api/network-calendar.test.ts`, `__tests__/api/network-mcp.test.ts`, `__tests__/api/team.test.ts`, `__tests__/api/webhooks.test.ts`, `__tests__/components/dashboard/countdown-timer.test.tsx`, `__tests__/components/join-team-form.test.tsx`, `__tests__/components/theme-toggle.test.tsx`, `__tests__/lib/events.test.ts`, `__tests__/lib/ics.test.ts`, `__tests__/lib/network.test.ts`, `__tests__/lib/store.test.ts`, `__tests__/lib/utils.test.ts`, `app/api/v1/webhooks/test/route.ts`
- Tests: 19
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/dashboard/countdown-timer.test.tsx`, `__tests__/components/join-team-form.test.tsx`, `__tests__/components/theme-toggle.test.tsx`, `components/api-docs-viewer.tsx`, `components/breadcrumbs.tsx`, `components/dashboard/command-palette.tsx`, `components/dashboard/countdown-timer.tsx`, `components/dashboard/dashboard-overview.tsx`, `components/dashboard/dashboard-shell.tsx`, `components/dashboard/dashboard-sidebar.tsx`, `components/dashboard/interview-detail.tsx`, `components/dashboard/interviews-list.tsx`, `components/dashboard/mobile-bottom-nav.tsx`, `components/dashboard/new-interview-form.tsx`, `components/dashboard/prep-room.tsx`, `components/dashboard/settings-page.tsx`, `components/dashboard/team-manager.tsx`, `components/join-by-token-form.tsx`, `components/join-team-form.tsx`, `components/json-ld.tsx`, `components/landing/cta-section.tsx`, `components/landing/features-section.tsx`, `components/landing/hero-section.tsx`, `components/landing/how-it-works-section.tsx`, `components/landing/network-section.tsx`, `components/landing/scenarios-section.tsx`, `components/site-footer.tsx`, `components/site-header.tsx`, `components/theme-provider.tsx`, `components/theme-toggle.tsx`
- Tests: 19
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/webhooks.test.ts`, `app/api/events/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/webhooks/test/route.ts`, `app/api/webhooks/route.ts`
- Tests: 19
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.jules/sentinel.md`, `components/api-docs-viewer.tsx`, `components/json-ld.tsx`, `components/ui/chart.tsx`, `lib/discovery.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.jules/sentinel.md`, `app/api/health/route.ts`, `app/api/v1/grok/parse-jd/route.ts`, `app/api/v1/integrations/status/route.ts`, `lib/events.ts`, `lib/jobs-server-store.ts`, `lib/platform.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

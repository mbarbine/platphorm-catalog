# mbarbine__platphorm-fingerprint-service

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Metadata

- ID: `github-recent__mbarbine__platphorm-fingerprint-service`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-fingerprint-service`
- Remote: `git@github.com:mbarbine/platphorm-fingerprint-service.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/model/provider.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/events/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/analysis/headless/route.ts`, `app/api/v1/analyze/bot/route.ts`, `app/api/v1/analyze/components/route.ts`, `app/api/v1/analyze/lies/route.ts`, `app/api/v1/analyze/local/route.ts`, `app/api/v1/analyze/resistance/route.ts`, `app/api/v1/compare/route.ts`, `app/api/v1/edge-info/route.ts`, `app/api/v1/export/route.ts`, `app/api/v1/fingerprint/[id]/route.ts`, `app/api/v1/fingerprint/compare/route.ts`, `app/api/v1/fingerprint/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/atlas/ja4/[fingerprint]/route.ts`, `app/api/v1/integrations/atlas/ja4/batch/route.ts`, `app/api/v1/integrations/atlas/route.ts`, `app/api/v1/integrations/status/route.ts`, `app/api/v1/provider/status/route.ts`, `app/api/v1/stats/overview/route.ts`, `app/api/webhooks/route.ts`
- Tests: 3
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/platform/auth.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/supabase/server.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/docs/page.tsx`, `package.json`, `postcss.config.mjs`
- Tests: 3
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/integrations/status/route.ts`, `app/api/v1/provider/status/route.ts`, `app/api/v1/stats/overview/route.ts`, `components/analysis/analysis-dashboard.tsx`, `components/fingerprint/fingerprint-dashboard.tsx`, `components/stats/stats-overview.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/export/route.ts`, `components/layout/json-ld.tsx`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`, `vercel.json`
- Tests: 3
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/terms/page.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform/auth.ts`, `lib/platform/site.ts`, `lib/platform/vercel.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Anthropic Integration

- ID: `integration.anthropic`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/model/provider.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Anthropic integration.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/model/provider.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/events/route.ts`, `app/api/webhooks/route.ts`, `app/docs/page.tsx`, `app/faq/page.tsx`, `app/privacy/page.tsx`, `components/fingerprint/fingerprint-dashboard.tsx`, `lib/discovery/generators.ts`, `lib/platform/auth.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/supabase/client.ts`, `lib/supabase/server.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/layout.tsx`, `lib/fingerprint/modules/vercel.ts`, `lib/model/provider.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/analysis/page.tsx`, `app/compare/page.tsx`, `app/components/page.tsx`, `app/disclaimer/page.tsx`, `app/docs/page.tsx`, `app/education/page.tsx`, `app/faq/page.tsx`, `app/privacy/page.tsx`, `app/stats/page.tsx`, `app/terms/page.tsx`
- Tests: 3
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/layout.tsx`, `lib/fingerprint/modules/vercel.ts`, `lib/model/provider.ts`, `lib/platform/auth.ts`, `lib/platform/site.ts`, `lib/supabase/client.ts`, `lib/supabase/server.ts`
- Tests: 3
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `playwright.config.ts`, `tests/e2e/fingerprint.spec.ts`, `tests/phase1-contract.test.mjs`
- Tests: 3
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/components/page.tsx`, `components/analysis/analysis-dashboard.tsx`, `components/fingerprint/compare-view.tsx`, `components/fingerprint/component-grid.tsx`, `components/fingerprint/confidence-gauge.tsx`, `components/fingerprint/fingerprint-dashboard.tsx`, `components/fingerprint/threat-indicators.tsx`, `components/layout/breadcrumbs.tsx`, `components/layout/footer.tsx`, `components/layout/json-ld.tsx`, `components/layout/topbar.tsx`, `components/stats/stats-overview.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`
- Tests: 3
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `components/layout/json-ld.tsx`, `components/ui/chart.tsx`, `lib/discovery/generators.ts`, `lib/fingerprint/modules/domrect.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `lib/model/provider.ts`, `lib/platform/auth.ts`, `lib/supabase/client.ts`, `lib/supabase/server.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

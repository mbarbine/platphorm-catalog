# mbarbine__platphorm-sandbox

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Metadata

- ID: `github-recent__mbarbine__platphorm-sandbox`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-sandbox`
- Remote: `git@github.com:mbarbine/platphorm-sandbox.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`
- Tests: 2
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 2
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/network/register/route.ts`, `app/api/v1/[...slug]/route.ts`, `app/api/v1/agents/[sessionId]/route.ts`, `app/api/v1/agents/route.ts`, `app/api/v1/api-keys/route.ts`, `app/api/v1/audit-logs/route.ts`, `app/api/v1/dashboard/stats/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/execute/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/gateway/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/mcp/tools/route.ts`, `app/api/v1/network/route.ts`, `app/api/v1/request-access/route.ts`, `app/api/v1/sandboxes/[id]/execute/route.ts`, `app/api/v1/sandboxes/route.ts`, `app/api/v1/webhooks/route.ts`
- Tests: 2
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/agents/[sessionId]/route.ts`, `app/auth/error/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `package.json`
- Tests: 2
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api.test.ts`, `lib/supabase/server.ts`, `scripts/migrate.mjs`, `scripts/setup-db.ts`
- Tests: 2
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `lib/pnn/index.ts`, `package.json`, `postcss.config.mjs`
- Tests: 2
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/activity/page.tsx`, `app/(dashboard)/dashboard/api-keys/page.tsx`, `app/(dashboard)/dashboard/page.tsx`, `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/(dashboard)/executions/page.tsx`, `app/(dashboard)/explore/page.tsx`, `app/(dashboard)/mcp/servers/page.tsx`, `app/(dashboard)/mcp/tools/page.tsx`, `app/(dashboard)/network/page.tsx`, `app/(dashboard)/playground/new/page.tsx`, `app/(dashboard)/playground/new/playground-client.tsx`, `app/(dashboard)/playground/page.tsx`, `app/(dashboard)/sandboxes/page.tsx`, `app/(dashboard)/settings/api-keys/page.tsx`, `app/(dashboard)/settings/page.tsx`, `app/(dashboard)/settings/webhooks/page.tsx`, `app/(dashboard)/templates/[id]/page.tsx`, `app/(dashboard)/templates/page.tsx`, `app/api/v1/dashboard/stats/route.ts`, `FINAL_STATUS.md`
- Tests: 2
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `package.json`, `tsconfig.json`
- Tests: 2
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/01-init-schema.sql`
- Tests: 2
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/pnn/index.ts`
- Tests: 2
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `package.json`
- Tests: 2
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/cosmic/claws-client.ts`, `lib/pnn/index.ts`, `package.json`
- Tests: 2
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/(dashboard)/playground/new/playground-client.tsx`, `app/(dashboard)/settings/page.tsx`, `app/api/mcp/route.ts`, `app/api/network/register/route.ts`, `app/api/v1/[...slug]/route.ts`, `app/page.tsx`, `lib/cosmic/claws-client.ts`, `lib/cosmic/trace-client.ts`, `package.json`
- Tests: 2
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api.test.ts`, `COMPLETE_SUMMARY.md`, `components/app-header.tsx`, `components/app-shell.tsx`, `FINAL_STATUS.md`, `lib/sandbox/server.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `package.json`, `pnpm-lock.yaml`, `scripts/migrate.mjs`, `scripts/setup-db.ts`, `verify.sh`
- Tests: 2
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 2
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/v1/mcp/tools/route.ts`, `package.json`
- Tests: 2
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/audit-logs/route.ts`, `app/api/v1/health/route.ts`, `app/auth/login/page.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/cosmic/trace-client.ts`, `lib/pnn/index.ts`, `package.json`
- Tests: 2
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/activity/page.tsx`, `app/(dashboard)/dashboard/api-keys/page.tsx`, `app/(dashboard)/dashboard/page.tsx`, `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/(dashboard)/executions/page.tsx`, `app/(dashboard)/explore/page.tsx`, `app/(dashboard)/mcp/servers/page.tsx`, `app/(dashboard)/mcp/tools/page.tsx`, `app/(dashboard)/network/page.tsx`, `app/(dashboard)/playground/new/page.tsx`, `app/(dashboard)/playground/page.tsx`, `app/(dashboard)/sandboxes/page.tsx`, `app/(dashboard)/settings/api-keys/page.tsx`, `app/(dashboard)/settings/page.tsx`, `app/(dashboard)/settings/webhooks/page.tsx`, `app/(dashboard)/templates/[id]/page.tsx`, `app/(dashboard)/templates/page.tsx`, `app/auth/error/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `app/faq/page.tsx`, `app/request-access/page.tsx`, `app/roadmap/page.tsx`
- Tests: 2
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api.test.ts`, `app/api/health/route.ts`, `app/api/network/register/route.ts`, `app/api/v1/[...slug]/route.ts`, `app/api/v1/request-access/route.ts`, `lib/cosmic/claws-client.ts`, `lib/cosmic/trace-client.ts`, `lib/pnn/index.ts`, `lib/sandbox/core.ts`, `lib/sandbox/server.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `scripts/migrate.mjs`, `scripts/setup-db.ts`
- Tests: 2
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 2
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api.test.ts`, `tests/core.test.ts`
- Tests: 2
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/activity-feed.tsx`, `components/app-header.tsx`, `components/app-shell.tsx`, `components/app-sidebar.tsx`, `components/breadcrumbs.tsx`, `components/code-editor.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`, `components/ui/dialog.tsx`, `components/ui/drawer.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/empty.tsx`, `components/ui/field.tsx`, `components/ui/form.tsx`
- Tests: 2
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/(dashboard)/settings/webhooks/page.tsx`, `app/api/v1/events/route.ts`, `app/api/v1/webhooks/route.ts`
- Tests: 2
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/(dashboard)/activity/activity-client.tsx`, `components/activity-feed.tsx`, `components/ui/chart.tsx`, `lib/pnn/clients.ts`, `lib/pnn/feeds.ts`, `lib/sandbox/core.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/api.test.ts`, `app/api/network/register/route.ts`, `lib/cosmic/claws-client.ts`, `lib/cosmic/trace-client.ts`, `lib/pnn/index.ts`, `lib/sandbox/server.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `scripts/migrate.mjs`, `scripts/setup-db.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

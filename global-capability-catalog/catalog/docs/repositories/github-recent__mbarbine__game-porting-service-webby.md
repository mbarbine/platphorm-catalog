# mbarbine__game-porting-service-webby

Game porting service

## Metadata

- ID: `github-recent__mbarbine__game-porting-service-webby`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__game-porting-service-webby`
- Remote: `git@github.com:mbarbine/game-porting-service-webby.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/network/graph/route.ts`
- Tests: 3
- LLMs context: `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/login/page.tsx`, `app/auth/sign-up/page.tsx`, `app/auth/verify-email/page.tsx`, `package.json`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/messages/page.tsx`, `app/admin/page.tsx`, `app/admin/projects/[id]/page.tsx`, `app/admin/projects/page.tsx`, `app/admin/quotes/page.tsx`, `app/admin/settings/page.tsx`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/jobs/page.tsx`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `package.json`, `postcss.config.mjs`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/messages/page.tsx`, `app/admin/page.tsx`, `app/admin/projects/[id]/page.tsx`, `app/admin/projects/page.tsx`, `app/admin/quotes/page.tsx`, `app/admin/settings/page.tsx`, `app/dashboard/messages/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/projects/[id]/page.tsx`, `app/dashboard/projects/new/page.tsx`, `app/dashboard/projects/page.tsx`, `app/dashboard/quotes/page.tsx`, `app/dashboard/settings/page.tsx`, `components/dashboard-header.tsx`, `components/dashboard-sidebar.tsx`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/001_create_game_porting_schema.sql`
- Tests: 3
- LLMs context: `public/llms.txt`

Repository includes database schemas, migrations, or database framework dependencies.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms.txt`
- Tests: 3
- LLMs context: `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/contact/page.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.jules/bolt.md`, `app/auth/sign-up/page.tsx`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: `public/llms.txt`

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 3
- LLMs context: `public/llms.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/auth/login/page.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/messages/page.tsx`, `app/admin/page.tsx`, `app/admin/projects/[id]/page.tsx`, `app/admin/projects/page.tsx`, `app/admin/quotes/page.tsx`, `app/admin/settings/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up/page.tsx`, `app/auth/verify-email/page.tsx`, `app/contact/page.tsx`, `app/dashboard/messages/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/projects/[id]/page.tsx`, `app/dashboard/projects/new/page.tsx`, `app/dashboard/projects/page.tsx`, `app/dashboard/quotes/page.tsx`, `app/dashboard/settings/page.tsx`, `app/faq/page.tsx`, `app/jobs/page.tsx`, `app/roadmap/page.tsx`
- Tests: 3
- LLMs context: `public/llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/sign-up/page.tsx`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`
- Tests: 3
- LLMs context: `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 3
- LLMs context: `public/llms.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `tests/api.test.mjs`, `tests/api.test.ts`, `tests/integration.test.mjs`
- Tests: 3
- LLMs context: `public/llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/dashboard-header.tsx`, `components/dashboard-sidebar.tsx`, `components/site-footer.tsx`, `components/site-header.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`, `components/ui/dialog.tsx`, `components/ui/drawer.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/empty.tsx`, `components/ui/field.tsx`, `components/ui/form.tsx`, `components/ui/hover-card.tsx`, `components/ui/input-group.tsx`
- Tests: 3
- LLMs context: `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.jules/sentinel.md`, `app/faq/page.tsx`, `app/jobs/page.tsx`, `app/page.tsx`, `components/ui/chart.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`

## Gaps

- CI workflows not detected

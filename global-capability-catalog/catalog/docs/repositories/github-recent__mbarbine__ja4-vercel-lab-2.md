# mbarbine__ja4-vercel-lab-2

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Metadata

- ID: `github-recent__mbarbine__ja4-vercel-lab-2`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__ja4-vercel-lab-2`
- Remote: `git@github.com:mbarbine/ja4-vercel-lab-2.git`
- Primary language: YAML
- Frameworks: Next.js, React, Tailwind CSS
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
- Tests: 1
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/pages/api/cron.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `postcss.config.mjs`
- Tests: 1
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/components/Dashboard.tsx`, `app/components/VercelDashboard.tsx`, `app/pages/api/update-status.js`
- Tests: 1
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `supabase/migrations/20250217202548_remote_schema.sql`, `supabase/migrations/20250217202726_remote_schema.sql`, `supabase/migrations/20250217204148_remote_schema.sql`
- Tests: 1
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.jules/bolt.md`, `app/components/Dashboard.tsx`, `app/lib/supabase.ts`, `app/middleware/middleware.js`, `app/pages/api/logs.js`, `app/pages/api/poll-vercel.js`, `app/pages/api/stats.js`, `app/pages/api/update-status.js`, `package.json`, `scripts/setup-supabase.sh`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/components/VercelDashboard.tsx`, `app/layout.tsx`, `app/middleware/middleware.js`, `app/pages/api/cron.ts`, `app/pages/api/poll-vercel.js`, `app/test-get/page.tsx`, `package.json`, `pnpm-lock.yaml`, `scripts/verify-vercel.js`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/pages/api/logs.js`
- Tests: 1
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/test-get/page.tsx`
- Tests: 1
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/components/Dashboard.tsx`, `app/components/VercelDashboard.tsx`, `app/lib/supabase.ts`, `app/middleware/middleware.js`, `app/pages/api/cron.ts`, `app/pages/api/logs.js`, `app/pages/api/poll-vercel.js`, `app/pages/api/stats.js`, `app/pages/api/update-status.js`, `app/test-get/page.tsx`, `scripts/verify-vercel.js`
- Tests: 1
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/test-get/page.tsx`
- Tests: 1
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/components/Dashboard.tsx`, `app/components/ToasterProvider.tsx`, `app/components/VercelDashboard.tsx`
- Tests: 1
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Secret-like environment variable names are referenced. Evidence: `app/components/Dashboard.tsx`, `app/lib/supabase.ts`, `app/middleware/middleware.js`, `app/pages/api/cron.ts`, `app/pages/api/logs.js`, `app/pages/api/poll-vercel.js`, `app/pages/api/stats.js`, `app/pages/api/update-status.js`, `app/test-get/page.tsx`, `scripts/verify-vercel.js`

## Gaps

- CI workflows not detected
- LLMs context files not detected

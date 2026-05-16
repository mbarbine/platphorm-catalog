# mbarbine__platphorm-real-estate-property-evaluation

Welcome to the shared documentation template for the PlatPhorm News Network.

## Metadata

- ID: `github-recent__mbarbine__platphorm-real-estate-property-evaluation`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-real-estate-property-evaluation`
- Remote: `git@github.com:mbarbine/platphorm-real-estate-property-evaluation.git`
- Primary language: TypeScript
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
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/api/auth/signup/route.ts`, `app/api/db/migrate/route.ts`, `app/api/db/test/route.ts`, `app/api/docs/route.ts`, `app/api/evaluations/[id]/route.ts`, `app/api/evaluations/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/route.ts`, `app/api/zillow/seed/route.ts`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/api/auth/signup/route.ts`, `app/auth/error/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `lib/auth/session.ts`, `package.json`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/db/migrate/route.ts`, `app/api/db/test/route.ts`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/jobs/page.tsx`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.local`, `app/api/db/test/route.ts`, `app/api/docs/route.ts`, `app/api/zillow/seed/route.ts`, `docs/README.md`, `lib/db/neon.ts`, `lib/zillow-etl/data-loader.ts`, `package.json`, `postcss.config.mjs`, `scripts/seed-zillow-data.ts`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/db/migrate/route.ts`, `app/api/db/test/route.ts`, `app/dashboard/page.tsx`, `components/dashboard-header.tsx`, `components/stats-overview.tsx`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package-lock.json`, `package.json`, `public/llms-index.json`, `tsconfig.json`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/002_zillow_market_data_schema.sql`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository includes database schemas, migrations, or database framework dependencies.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/property-evaluation-form.tsx`, `package.json`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Neon Integration

- ID: `integration.neon`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.local`, `app/api/db/test/route.ts`, `app/api/zillow/seed/route.ts`, `lib/db/neon.ts`, `lib/zillow-etl/data-loader.ts`, `package.json`, `scripts/seed-zillow-data.ts`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository has source-backed indicators for a Neon integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.local`, `app/api/db/test/route.ts`, `app/api/zillow/seed/route.ts`, `lib/db/neon.ts`, `lib/zillow-etl/data-loader.ts`, `package.json`, `scripts/seed-zillow-data.ts`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/auth/login/page.tsx`, `package.json`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/error/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `app/dashboard/page.tsx`, `app/evaluate/page.tsx`, `app/jobs/page.tsx`, `app/setup/page.tsx`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.local`, `app/api/db/migrate/route.ts`, `app/api/db/test/route.ts`, `app/api/zillow/seed/route.ts`, `lib/auth/session.ts`, `lib/db/neon.ts`, `lib/zillow-etl/data-loader.ts`, `scripts/seed-zillow-data.ts`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`, `public/rss.xml`, `public/sitemap.xml`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/db/test/route.ts`, `test-api.py`, `test-ui.py`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/dashboard-header.tsx`, `components/evaluation-card.tsx`, `components/footer.tsx`, `components/navbar.tsx`, `components/property-evaluation-form.tsx`, `components/stats-overview.tsx`, `components/theme-provider.tsx`, `components/ui/alert.tsx`, `components/ui/badge.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/select.tsx`, `components/ui/tabs.tsx`, `components/ui/textarea.tsx`
- Tests: 3
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `lib/zillow-etl/csv-parser.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.local`, `app/api/db/migrate/route.ts`, `app/api/db/test/route.ts`, `app/api/zillow/seed/route.ts`, `lib/db/neon.ts`, `lib/zillow-etl/data-loader.ts`, `scripts/seed-zillow-data.ts`

## Gaps

- CI workflows not detected

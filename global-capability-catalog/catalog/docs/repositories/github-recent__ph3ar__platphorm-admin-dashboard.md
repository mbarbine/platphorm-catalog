# ph3ar__platphorm-admin-dashboard

<div align="center"><strong>Next.js 14 Admin Dashboard Template</strong></div>

## Metadata

- ID: `github-recent__ph3ar__platphorm-admin-dashboard`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/ph3ar__platphorm-admin-dashboard`
- Remote: `git@github.com:ph3ar/platphorm-admin-dashboard.git`
- Primary language: TypeScript
- Frameworks: Drizzle ORM, Next.js, React, Tailwind CSS, Vitest
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
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/[...nextauth]/route.ts`, `app/api/mcp/route.ts`, `app/api/seed/route.ts`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/api/auth/[...nextauth]/route.ts`, `app/login/page.tsx`, `package.json`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `.Jules/bolt.md`, `lib/db.ts`, `package.json`, `postcss.config.js`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/customers/page.tsx`, `app/(dashboard)/page.tsx`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty high
- Source paths: `package.json`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository includes database schemas, migrations, or database framework dependencies.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-index.txt`, `public/llms.txt`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `.Jules/bolt.md`, `lib/db.ts`, `package.json`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.Jules/bolt.md`, `app/layout.tsx`, `package.json`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/login/page.tsx`, `package.json`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/customers/page.tsx`, `app/(dashboard)/page.tsx`, `app/login/page.tsx`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `.Jules/bolt.md`, `lib/db.ts`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/__tests__/robots.test.ts`, `app/__tests__/sitemap.test.ts`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/icons.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/input.tsx`, `components/ui/sheet.tsx`, `components/ui/table.tsx`, `components/ui/tabs.tsx`, `components/ui/tooltip.tsx`
- Tests: 2
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`

## Gaps

- CI workflows not detected

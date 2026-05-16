# mbarbine__ph3ar-admin-dashboard

<div align="center"><strong>Next.js 15 Admin Dashboard Template</strong></div>

## Metadata

- ID: `github-recent__mbarbine__ph3ar-admin-dashboard`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__ph3ar-admin-dashboard`
- Remote: `git@github.com:mbarbine/ph3ar-admin-dashboard.git`
- Primary language: YAML
- Frameworks: Drizzle ORM, Next.js, React, Tailwind CSS, Vitest
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
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/[...nextauth]/route.ts`, `app/api/seed/route.ts`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/[...nextauth]/route.ts`, `app/login/page.tsx`, `package.json`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/db.ts`, `package.json`, `postcss.config.js`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/customers/page.tsx`, `app/(dashboard)/layout.tsx`, `app/(dashboard)/page.tsx`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty high
- Source paths: `package.json`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Repository includes database schemas, migrations, or database framework dependencies.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/db.ts`, `package.json`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(dashboard)/layout.tsx`, `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `public/.well-known/mcp.json`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/login/page.tsx`, `package.json`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/customers/page.tsx`, `app/(dashboard)/page.tsx`, `app/login/page.tsx`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/db.ts`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/utils.test.ts`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/icons.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/input.tsx`, `components/ui/sheet.tsx`, `components/ui/table.tsx`, `components/ui/tabs.tsx`, `components/ui/tooltip.tsx`
- Tests: 1
- LLMs context: `public/.well-known/llms.txt`, `public/llms-full.txt`, `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- None recorded.

## Gaps

- CI workflows not detected

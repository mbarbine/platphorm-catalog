# mbarbine__platphorm-agentui

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Metadata

- ID: `github-recent__mbarbine__platphorm-agentui`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-agentui`
- Remote: `git@github.com:mbarbine/platphorm-agentui.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vite, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(workspace)/dashboard/prompts/page.tsx`, `app/api/v1/prompts/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/api/auth/me/route.ts`, `app/api/auth/signup/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/api-keys/route.ts`, `app/api/v1/approvals/[id]/approve/route.ts`, `app/api/v1/approvals/[id]/reject/route.ts`, `app/api/v1/approvals/[id]/route.ts`, `app/api/v1/approvals/route.ts`, `app/api/v1/flows/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/prompts/route.ts`, `app/api/v1/publish/route.ts`, `app/api/v1/resources/route.ts`, `app/api/v1/runs/[id]/artifacts/route.ts`, `app/api/v1/runs/[id]/cancel/route.ts`, `app/api/v1/runs/[id]/route.ts`, `app/api/v1/runs/[id]/steps/route.ts`, `app/api/v1/runs/[id]/trace/route.ts`, `app/api/v1/runs/route.ts`, `app/api/v1/services/route.ts`, `app/api/v1/stats/runs/route.ts`, `app/api/v1/templates/[id]/instantiate/route.ts`, `app/api/v1/templates/[id]/route.ts`, `app/api/v1/templates/route.ts`, `app/api/v1/tools/route.ts`, `app/api/v1/traces/[id]/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(public)/login/page.tsx`, `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/api/auth/me/route.ts`, `app/api/auth/signup/route.ts`, `lib/auth/platform-key.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/workflows/[id]/dry-run/route.ts`, `app/api/v1/workflows/[id]/publish/route.ts`, `app/api/v1/workflows/[id]/route.ts`, `app/api/v1/workflows/[id]/run/route.ts`, `app/api/v1/workflows/[id]/validate/route.ts`, `app/api/v1/workflows/[id]/versions/route.ts`, `app/api/v1/workflows/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/(builder)/builder/[id]/publish/page.tsx`, `app/(public)/docs/page.tsx`, `app/api/docs/route.ts`, `app/api/v1/publish/route.ts`, `app/api/v1/workflows/[id]/publish/route.ts`, `DEPLOYMENT.md`, `docs/ARCHITECTURE.md`, `docs/FEATURES.md`, `docs/NETWORK_ALIGNMENT.md`, `docs/TOOL_FLOW_DIAGRAM.md`, `lib/config/env.ts`, `lib/db/client.ts`, `package.json`, `postcss.config.mjs`, `PRODUCTION_CHECKLIST.md`, `QUICK_START.md`, `scripts/run-migrations.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(workspace)/dashboard/approvals/page.tsx`, `app/(workspace)/dashboard/components/quick-actions.tsx`, `app/(workspace)/dashboard/components/recent-activity.tsx`, `app/(workspace)/dashboard/components/recent-flows.tsx`, `app/(workspace)/dashboard/components/stats-grid.tsx`, `app/(workspace)/dashboard/flows/page.tsx`, `app/(workspace)/dashboard/observability/page.tsx`, `app/(workspace)/dashboard/observability/services/page.tsx`, `app/(workspace)/dashboard/observability/traces/[id]/page.tsx`, `app/(workspace)/dashboard/observability/traces/page.tsx`, `app/(workspace)/dashboard/page.tsx`, `app/(workspace)/dashboard/prompts/page.tsx`, `app/(workspace)/dashboard/registry/page.tsx`, `app/(workspace)/dashboard/resources/page.tsx`, `app/(workspace)/dashboard/runs/page.tsx`, `app/(workspace)/dashboard/settings/page.tsx`, `app/(workspace)/dashboard/tools/page.tsx`, `app/(workspace)/dashboard/usage/page.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/trust.json/route.ts`, `package.json`, `tsconfig.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/005_complete_schema.sql`, `scripts/migrations/001-init-schema.sql`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `PRODUCTION_CHECKLIST.md`
- Tests: 30
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/auth/platform-key.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/builder/flow-canvas.tsx`, `tests/components/flow-canvas.test.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `lib/config/env.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/.well-known/agents.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/(builder)/builder/[id]/page.tsx`, `app/(builder)/builder/[id]/publish/page.tsx`, `app/(builder)/builder/[id]/run/page.tsx`, `app/(builder)/builder/page.tsx`, `app/(workspace)/dashboard/approvals/page.tsx`, `lib/config/env.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `DEPLOYMENT.md`, `lib/db/client.ts`, `package.json`, `PRODUCTION_CHECKLIST.md`, `QUICK_START.md`, `scripts/run-migrations.mjs`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/(public)/changelog/page.tsx`, `app/(public)/login/page.tsx`, `app/(workspace)/dashboard/observability/page.tsx`, `app/(workspace)/dashboard/observability/services/page.tsx`, `app/(workspace)/dashboard/observability/traces/[id]/page.tsx`, `app/(workspace)/dashboard/observability/traces/page.tsx`, `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/runs/[id]/trace/route.ts`, `app/api/v1/traces/[id]/route.ts`, `app/api/v1/traces/route.ts`, `components/observability/live-run-monitor.tsx`, `components/ui/dialog.tsx`, `lib/config/env.ts`, `tests/components/observability/live-run-monitor.test.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(builder)/builder/[id]/inspect/page.tsx`, `app/(builder)/builder/[id]/page.tsx`, `app/(builder)/builder/[id]/publish/page.tsx`, `app/(builder)/builder/[id]/run/page.tsx`, `app/(builder)/builder/page.tsx`, `app/(public)/changelog/page.tsx`, `app/(public)/docs/page.tsx`, `app/(public)/features/page.tsx`, `app/(public)/gallery/page.tsx`, `app/(public)/login/page.tsx`, `app/(public)/page.tsx`, `app/(public)/request-access/page.tsx`, `app/(public)/signup/page.tsx`, `app/(public)/templates/page.tsx`, `app/(workspace)/dashboard/approvals/page.tsx`, `app/(workspace)/dashboard/flows/page.tsx`, `app/(workspace)/dashboard/observability/page.tsx`, `app/(workspace)/dashboard/observability/services/page.tsx`, `app/(workspace)/dashboard/observability/traces/[id]/page.tsx`, `app/(workspace)/dashboard/observability/traces/page.tsx`, `app/(workspace)/dashboard/page.tsx`, `app/(workspace)/dashboard/prompts/page.tsx`, `app/(workspace)/dashboard/registry/page.tsx`, `app/(workspace)/dashboard/resources/page.tsx`, `app/(workspace)/dashboard/runs/page.tsx`, `app/(workspace)/dashboard/settings/page.tsx`, `app/(workspace)/dashboard/tools/page.tsx`, `app/(workspace)/dashboard/usage/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/layout/search-trigger.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/api/auth/signup/route.ts`, `lib/auth/platform-key.ts`, `lib/config/env.ts`, `lib/db/client.ts`, `scripts/run-migrations.mjs`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `tests/api/api-keys-security.test.ts`, `tests/api/api-keys.test.ts`, `tests/api/auth/login.test.ts`, `tests/api/auth/signup.test.ts`, `tests/api/docs.test.ts`, `tests/api/health.test.ts`, `tests/api/mcp.test.ts`, `tests/api/public-access.test.ts`, `tests/api/tools.test.ts`, `tests/api/well-known.test.ts`, `tests/components/builder/run-inspector.test.tsx`, `tests/components/button.test.tsx`, `tests/components/card.test.tsx`, `tests/components/editor/lightweight-editor.test.tsx`, `tests/components/editor/monaco-editor-client.test.tsx`, `tests/components/error-boundary.test.tsx`, `tests/components/flow-canvas.test.tsx`, `tests/components/footer.test.tsx`, `tests/components/input.test.tsx`, `tests/components/layout/command-palette.test.tsx`, `tests/components/observability/live-run-monitor.test.tsx`, `tests/components/providers/theme-provider.test.tsx`, `tests/components/registry/tool-browser.test.tsx`, `tests/components/run-activity-feed.test.tsx`, `tests/components/theme-provider.test.tsx`, `tests/components/toast.test.tsx`, `tests/components/ui/toast.test.tsx`, `tests/lib/auth/session-cache.test.tsx`, `tests/lib/utils.test.ts`, `tests/proxy.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(workspace)/dashboard/components/quick-actions.tsx`, `app/(workspace)/dashboard/components/recent-activity.tsx`, `app/(workspace)/dashboard/components/recent-flows.tsx`, `app/(workspace)/dashboard/components/stats-grid.tsx`, `components/builder/flow-canvas.tsx`, `components/builder/run-inspector.tsx`, `components/editor/lightweight-editor.tsx`, `components/editor/monaco-editor-client.tsx`, `components/error-boundary.tsx`, `components/layout/command-palette.tsx`, `components/layout/footer.tsx`, `components/layout/mobile-menu.tsx`, `components/layout/search-trigger.tsx`, `components/layout/sidebar.tsx`, `components/layout/top-bar.tsx`, `components/layout/user-menu.tsx`, `components/observability/live-run-monitor.tsx`, `components/providers/theme-provider.tsx`, `components/registry/tool-browser.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/dialog.tsx`, `components/ui/input.tsx`, `components/ui/select.tsx`, `components/ui/skeleton.tsx`, `components/ui/spinner.tsx`, `components/ui/tabs.tsx`, `components/ui/toast.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/(workspace)/dashboard/observability/services/page.tsx`, `app/(workspace)/dashboard/observability/traces/[id]/page.tsx`, `app/(workspace)/dashboard/observability/traces/page.tsx`, `app/feed.xml/route.ts`, `components/observability/live-run-monitor.tsx`, `components/registry/tool-browser.tsx`, `components/ui/select.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`, `lib/auth/platform-key.ts`, `lib/db/client.ts`, `scripts/run-migrations.mjs`

## Gaps

- CI workflows not detected
- LLMs context files not detected

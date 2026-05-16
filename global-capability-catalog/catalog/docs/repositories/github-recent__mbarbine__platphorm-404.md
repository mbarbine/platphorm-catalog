# mbarbine__platphorm-404

PlatPhorm 404 is the canonical public 404 recovery layer for the PlatPhormNews web mesh.

## Metadata

- ID: `github-recent__mbarbine__platphorm-404`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-404`
- Remote: `git@github.com:mbarbine/platphorm-404.git`
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
- Source paths: `lib/platform/model.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/report/[id]/route.ts`, `app/api/v1/report/route.ts`, `app/report/page.tsx`, `lib/platform/reports.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/discovery/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/network/route.ts`, `app/api/v1/dead-links/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/link-check/route.ts`, `app/api/v1/network/discovery-compliance/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/v1/network/route-compliance/route.ts`, `app/api/v1/network/sites/route.ts`, `app/api/v1/recover/route.ts`, `app/api/v1/redirects/suggest/route.ts`, `app/api/v1/report/[id]/route.ts`, `app/api/v1/report/route.ts`, `app/api/v1/routes/[id]/route.ts`, `app/api/v1/routes/route.ts`, `app/api/v1/search/route.ts`, `app/api/v1/sitemap/status/route.ts`, `app/api/v1/sitemap/validate/route.ts`
- Tests: 3
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/platform/auth.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `lib/platform/auth.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/v1/report/route.ts`, `app/faq/page.tsx`, `app/report/page.tsx`, `components/404/particle-field.tsx`, `components/404/recovery/phase1-recovery-panel.tsx`, `docs/PHASE1.md`, `lib/platform/discovery.ts`, `lib/platform/mcp.ts`, `lib/platform/reports.ts`, `package.json`, `postcss.config.mjs`
- Tests: 3
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/sitemap/status/route.ts`, `app/sitemap-status/page.tsx`, `components/404/status-indicator.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/platform/discovery.ts`, `lib/platform/trace.ts`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`, `vercel.json`
- Tests: 3
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/terms/page.tsx`, `components/404/terminal-log.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform/auth.ts`, `lib/platform/constants.ts`, `lib/platform/discovery.ts`, `lib/platform/mcp.ts`, `lib/platform/model.ts`, `lib/platform/reports.ts`, `lib/platform/trace.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/platform/model.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/privacy/page.tsx`, `app/terms/page.tsx`, `components/404/recovery/phase1-recovery-panel.tsx`, `components/404/terminal-log.tsx`, `docs/PHASE1.md`, `lib/platform/auth.ts`, `lib/platform/constants.ts`, `lib/platform/discovery.ts`, `lib/platform/trace.ts`, `package.json`, `README.md`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/report/route.ts`, `app/faq/page.tsx`, `app/report/page.tsx`, `components/404/recovery/phase1-recovery-panel.tsx`, `docs/PHASE1.md`, `lib/platform/discovery.ts`, `lib/platform/mcp.ts`, `lib/platform/reports.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `lib/platform/discovery.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `lib/platform/mcp.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/404/terminal-log.tsx`, `components/404/trace-integration.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/platform/discovery.ts`, `lib/platform/trace.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/dead-links/page.tsx`, `app/faq/page.tsx`, `app/network/page.tsx`, `app/privacy/page.tsx`, `app/redirects/page.tsx`, `app/report/page.tsx`, `app/routes/page.tsx`, `app/search/page.tsx`, `app/sitemap-status/page.tsx`, `app/terms/page.tsx`
- Tests: 3
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/search/route.ts`, `app/search/page.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/report/route.ts`, `components/404/trace-integration.tsx`, `lib/platform/auth.ts`, `lib/platform/discovery.ts`, `lib/platform/mcp.ts`, `lib/platform/model.ts`, `lib/platform/reports.ts`, `lib/platform/trace.ts`, `playwright.config.ts`
- Tests: 3
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `playwright.config.ts`, `tests/e2e/recovery.spec.ts`, `tests/unit/recovery.test.ts`
- Tests: 3
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/404/ascii-art-display.tsx`, `components/404/audio-visualizer.tsx`, `components/404/crypto-tip.tsx`, `components/404/dimensional-rift.tsx`, `components/404/easter-egg.tsx`, `components/404/glitch-text.tsx`, `components/404/grid-background.tsx`, `components/404/live-network-stats.tsx`, `components/404/navigation-links.tsx`, `components/404/network-404-window.tsx`, `components/404/network-explorer.tsx`, `components/404/particle-field.tsx`, `components/404/recovery/phase1-recovery-panel.tsx`, `components/404/recovery/recovery-page.tsx`, `components/404/status-indicator.tsx`, `components/404/terminal-log.tsx`, `components/404/trace-integration.tsx`, `components/404/void-message-generator.tsx`, `components/404/void-portal.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`
- Tests: 3
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/layout.tsx`, `components/404/recovery/phase1-recovery-panel.tsx`, `components/404/recovery/recovery-page.tsx`, `components/ui/chart.tsx`, `lib/platform/discovery.ts`, `lib/platform/inventory.ts`, `lib/platform/link-check.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/v1/report/route.ts`, `lib/platform/auth.ts`, `lib/platform/discovery.ts`, `lib/platform/mcp.ts`, `lib/platform/model.ts`, `lib/platform/reports.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

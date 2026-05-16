# mbarbine__platphorm-msi-editor

Package repository for msi-tree.

## Metadata

- ID: `github-recent__mbarbine__platphorm-msi-editor`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-msi-editor`
- Remote: `git@github.com:mbarbine/platphorm-msi-editor.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
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
- Tests: 11
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 11
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/events/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/export/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/ascii/route.ts`, `app/api/v1/integrations/json/route.ts`, `app/api/v1/integrations/status/route.ts`, `app/api/v1/integrations/svg/route.ts`, `app/api/v1/integrations/xml/route.ts`, `app/api/v1/msi/analyze/route.ts`, `app/api/v1/msi/demo/route.ts`, `app/api/v1/msi/export/csv/route.ts`, `app/api/v1/msi/export/json/route.ts`, `app/api/v1/msi/export/sql/route.ts`, `app/api/v1/msi/export/xml/route.ts`, `app/api/v1/msi/parse/route.ts`, `app/api/v1/msi/search/route.ts`, `app/api/v1/msi/security/route.ts`, `app/api/v1/msi/summary/route.ts`, `app/api/v1/msi/tables/[tableName]/route.ts`, `app/api/v1/msi/tables/route.ts`, `app/api/v1/parse/route.ts`, `app/api/webhooks/route.ts`
- Tests: 11
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/platform/auth.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`
- Tests: 11
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/docs/page.tsx`, `lib/platform/discovery.ts`, `package.json`, `postcss.config.mjs`
- Tests: 11
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/integrations/status/route.ts`
- Tests: 11
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/export/route.ts`, `app/api/v1/integrations/json/route.ts`, `app/api/v1/integrations/xml/route.ts`, `app/api/v1/msi/export/csv/route.ts`, `app/api/v1/msi/export/json/route.ts`, `app/api/v1/msi/export/sql/route.ts`, `app/api/v1/msi/export/xml/route.ts`, `app/export/page.tsx`, `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 11
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`, `vercel.json`
- Tests: 11
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/terms/page.tsx`
- Tests: 11
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform/auth.ts`, `lib/platform/discovery.ts`, `lib/platform/model.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/platform/model.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/__tests__/api-endpoints.test.ts`, `app/docs/page.tsx`, `app/export/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`, `components/msi/empty-state.tsx`, `components/msi/header.tsx`, `lib/platform/auth.ts`, `lib/platform/discovery.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/platform/discovery.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `lib/platform/discovery.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 11
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 11
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/analyze/page.tsx`, `app/demo/page.tsx`, `app/disclaimer/page.tsx`, `app/docs/page.tsx`, `app/export/page.tsx`, `app/faq/page.tsx`, `app/integrations/page.tsx`, `app/privacy/page.tsx`, `app/search/page.tsx`, `app/tables/page.tsx`, `app/terms/page.tsx`, `app/viewer/page.tsx`
- Tests: 11
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/msi/search/route.ts`, `app/search/page.tsx`
- Tests: 11
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/platform/auth.ts`, `lib/platform/discovery.ts`, `lib/platform/model.ts`
- Tests: 11
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 11
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/__tests__/api-endpoints.test.ts`, `app/api/__tests__/api.test.ts`, `app/api/__tests__/mcp-route.test.ts`, `app/api/health/route.test.ts`, `app/sitemap.test.ts`, `components/msi/__tests__/components.test.tsx`, `components/msi/__tests__/graph-tree-viewer.test.ts`, `components/msi/__tests__/integration-panel.test.tsx`, `lib/__tests__/mcp-client.test.ts`, `lib/__tests__/msi-parser-extended.test.ts`, `lib/__tests__/msi-parser.test.ts`
- Tests: 11
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/msi/__tests__/components.test.tsx`, `components/msi/__tests__/integration-panel.test.tsx`, `components/msi/empty-state.tsx`, `components/msi/graph-tree-viewer.tsx`, `components/msi/header.tsx`, `components/msi/integration-panel.tsx`, `components/msi/pages/static-info-page.tsx`, `components/msi/summary-panel.tsx`, `components/msi/table-list.tsx`, `components/msi/table-viewer.tsx`, `components/msi/tree-view.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`, `components/ui/dialog.tsx`
- Tests: 11
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`
- Tests: 11
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/layout.tsx`, `components/msi/pages/static-info-page.tsx`, `components/ui/chart.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `lib/platform/auth.ts`, `lib/platform/discovery.ts`, `lib/platform/model.ts`

## Gaps

- README not detected
- CI workflows not detected
- LLMs context files not detected

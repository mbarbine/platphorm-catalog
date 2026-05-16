# mbarbine__platphorm-spec-workbench

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Metadata

- ID: `github-recent__mbarbine__platphorm-spec-workbench`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-spec-workbench`
- Remote: `git@github.com:mbarbine/platphorm-spec-workbench.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: internal
- Confidence: high

## Capabilities

### Accessibility UI Support

- ID: `accessibility.ui-a11y`
- Type: accessibility
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/workbench/keyboard-shortcuts.tsx`
- Tests: 27
- LLMs context: none detected

Source evidence indicates ARIA, accessibility, keyboard, or screen-reader oriented UI behavior.

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/generate/client/route.ts`, `app/api/v1/generate/examples/route.ts`, `app/api/v1/generate/mcp/route.ts`, `app/api/v1/generate/tests/route.ts`, `app/generate/page.tsx`
- Tests: 27
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`, `package.json`
- Tests: 27
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/nodeinfo/2.1/route.ts`, `app/api/v1/diff-runs/[id]/route.ts`, `app/api/v1/diff-runs/route.ts`, `app/api/v1/diff/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/generate/client/route.ts`, `app/api/v1/generate/examples/route.ts`, `app/api/v1/generate/mcp/route.ts`, `app/api/v1/generate/tests/route.ts`, `app/api/v1/generation-runs/[id]/artifacts/route.ts`, `app/api/v1/generation-runs/[id]/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/import/probe/route.ts`, `app/api/v1/import/route.ts`, `app/api/v1/imports/[id]/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/v1/network/route-compliance/route.ts`, `app/api/v1/network/route.ts`, `app/api/v1/network/sites/route.ts`, `app/api/v1/network/spec-coverage/route.ts`, `app/api/v1/network/spec-sources/route.ts`, `app/api/v1/network/spec-sources/sync/route.ts`, `app/api/v1/network/trusted-domains/route.ts`, `app/api/v1/repair-runs/[id]/route.ts`, `app/api/v1/repair/route.ts`, `app/api/v1/reports/decks/route.ts`
- Tests: 27
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 27
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/docs/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/docs/page.tsx`, `ARCHITECTURE.md`, `docs/ROADMAP.md`, `lib/db/client.ts`, `lib/generators/mcp/deployment.ts`, `package.json`, `postcss.config.mjs`, `vitest.setup.ts`
- Tests: 27
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/status/page.tsx`, `components/ui/status-badge.tsx`
- Tests: 27
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/.well-known/agents.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/import/probe/route.ts`, `app/api/v1/import/route.ts`, `app/api/v1/imports/[id]/route.ts`, `app/feed.xml/route.ts`, `app/import/page.tsx`, `lib/platform-contract.ts`, `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 27
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 27
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/terms/page.tsx`
- Tests: 27
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/platform-contract.test.ts`, `components/ui/form.tsx`, `components/workbench/format-selector.tsx`, `lib/platform-contract.ts`, `package.json`
- Tests: 27
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/generators/mcp/deployment.ts`, `lib/logger.ts`
- Tests: 27
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### Neon Integration

- ID: `integration.neon`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/lib/generators/mcp.test.ts`, `app/api/v1/generate/mcp/route.ts`, `app/llms-full.txt/route.ts`, `lib/db/client.ts`, `lib/generators/mcp/deployment.ts`, `lib/generators/mcp/index.ts`, `lib/generators/mcp/persistence.ts`, `lib/generators/mcp/registry.ts`, `package.json`
- Tests: 27
- LLMs context: none detected

Repository has source-backed indicators for a Neon integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/phase1-routes.test.ts`, `__tests__/api/platform-contract.test.ts`, `.env.example`, `app/.well-known/agents.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/network/spec-sources/route.ts`, `app/api/v1/templates/[id]/instantiate/route.ts`, `package.json`
- Tests: 27
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `ARCHITECTURE.md`, `lib/db/client.ts`, `lib/generators/mcp/deployment.ts`, `package.json`, `vitest.setup.ts`
- Tests: 27
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/platform-contract.test.ts`, `.env.example`, `app/layout.tsx`, `ARCHITECTURE.md`, `lib/generators/mcp/deployment.ts`, `lib/generators/mcp/identity.ts`, `lib/generators/mcp/index.ts`, `lib/generators/mcp/tracing.ts`, `lib/logger.ts`, `lib/platphorm/fingerprint.ts`, `lib/platphorm/identity.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 27
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/v1/generate/mcp/route.ts`, `package.json`
- Tests: 27
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/traces/[traceId]/route.ts`, `app/api/v1/traces/route.ts`, `app/changelog/page.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/generators/mcp/deployment.ts`, `lib/logger.ts`, `package.json`
- Tests: 27
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/changelog/page.tsx`, `app/diff/page.tsx`, `app/docs/page.tsx`, `app/faq/page.tsx`, `app/generate/page.tsx`, `app/import/page.tsx`, `app/privacy/page.tsx`, `app/roadmap/page.tsx`, `app/status/page.tsx`, `app/terms/page.tsx`, `app/validate/page.tsx`
- Tests: 27
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/platform-contract.test.ts`, `.env.example`, `app/feed.xml/route.ts`, `app/llms-full.txt/route.ts`, `app/robots.ts`, `app/sitemap.ts`, `lib/db/client.ts`, `lib/generators/clients/tests.ts`, `lib/generators/mcp/deployment.ts`, `lib/generators/mcp/identity.ts`, `lib/generators/mcp/index.ts`, `lib/generators/mcp/tracing.ts`, `lib/logger.ts`, `lib/network-spec-sources.ts`, `lib/platform-contract.ts`, `lib/platphorm/fingerprint.ts`, `lib/platphorm/identity.ts`, `vitest.setup.ts`
- Tests: 27
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 27
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/docs.test.ts`, `__tests__/api/health.test.ts`, `__tests__/api/phase1-routes.test.ts`, `__tests__/api/platform-contract.test.ts`, `__tests__/api/well-known/well-known.test.ts`, `__tests__/app/faq/page.test.tsx`, `__tests__/app/roadmap/page.test.tsx`, `__tests__/components/site-breadcrumbs.test.tsx`, `__tests__/db/schema.test.ts`, `__tests__/lib/generators/mcp.test.ts`, `__tests__/lib/platphorm/network-client.test.ts`, `__tests__/lib/spec-engine/validator.test.ts`, `__tests__/middleware.test.ts`, `app/api/v1/network/spec-coverage/route.ts`, `app/api/v1/network/spec-sources/route.ts`, `app/api/v1/network/spec-sources/sync/route.ts`, `components/workbench/spec-editor.tsx`, `lib/network-spec-sources.ts`, `lib/spec-engine/diff.ts`, `lib/spec-engine/parser.ts`, `lib/spec-engine/repair.ts`, `lib/spec-engine/types.ts`, `lib/spec-engine/validator.ts`, `lib/spec-runs.ts`, `playwright.config.ts`, `test-well-known.ts`, `tests/e2e/workbench.spec.ts`
- Tests: 27
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/site-breadcrumbs.test.tsx`, `components/layout/app-sidebar.tsx`, `components/layout/footer.tsx`, `components/layout/site-breadcrumbs.tsx`, `components/layout/top-bar.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`, `components/ui/dialog.tsx`, `components/ui/drawer.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/empty.tsx`, `components/ui/field.tsx`, `components/ui/form.tsx`, `components/ui/hover-card.tsx`
- Tests: 27
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/api/v1/specs/[id]/repair/route.ts`, `app/api/v1/specs/[id]/route.ts`, `app/api/v1/specs/[id]/validate/route.ts`, `app/layout.tsx`, `components/ui/chart.tsx`, `lib/platphorm/network-client.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`, `lib/db/client.ts`, `lib/generators/mcp/deployment.ts`, `lib/platform-contract.ts`, `vitest.setup.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

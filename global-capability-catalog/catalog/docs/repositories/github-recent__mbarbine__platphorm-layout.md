# mbarbine__platphorm-layout

PlatPhorm Layout is the public layout design and responsive preview workbench for the PlatPhormNews web mesh.

## Metadata

- ID: `github-recent__mbarbine__platphorm-layout`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-layout`
- Remote: `git@github.com:mbarbine/platphorm-layout.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### Accessibility UI Support

- ID: `accessibility.ui-a11y`
- Type: accessibility
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/accessibility/check/route.ts`, `components/a11y/skip-links.tsx`
- Tests: 11
- LLMs context: none detected

Source evidence indicates ARIA, accessibility, keyboard, or screen-reader oriented UI behavior.

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/layout/model-adapter.ts`
- Tests: 11
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/[locale]/score/page.tsx`, `app/api/v1/layouts/score/route.ts`, `app/api/v1/reports/layout/route.ts`, `lib/config/env.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/indexnow/route.ts`, `app/api/mcp/route.ts`, `app/api/og/route.tsx`, `app/api/v1/accessibility/check/route.ts`, `app/api/v1/grid/analyze/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/browserops/route.ts`, `app/api/v1/integrations/decks/route.ts`, `app/api/v1/integrations/docs/route.ts`, `app/api/v1/integrations/phorm/route.ts`, `app/api/v1/integrations/status/route.ts`, `app/api/v1/layouts/[id]/route.ts`, `app/api/v1/layouts/export/route.ts`, `app/api/v1/layouts/preview/route.ts`, `app/api/v1/layouts/route.ts`, `app/api/v1/layouts/score/route.ts`, `app/api/v1/reports/layout/route.ts`, `app/api/v1/responsive/check/route.ts`, `app/api/v1/templates/[slug]/route.ts`, `app/api/v1/templates/route.ts`, `app/api/v1/viewport/check/route.ts`
- Tests: 11
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/layout/auth-menu.tsx`, `lib/config/env.ts`, `lib/platform/auth.ts`, `package.json`, `tests/layout/auth.test.ts`
- Tests: 11
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `lib/config/env.ts`
- Tests: 11
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/[locale]/docs/page.tsx`, `app/api/docs/route.ts`, `app/api/v1/integrations/docs/route.ts`, `lib/layout/api-handlers.ts`, `lib/layout/discovery.ts`, `lib/layout/integrations.ts`, `lib/layout/registry.ts`, `lib/layout/templates.ts`, `package.json`, `postcss.config.mjs`
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
- Source paths: `app/.well-known/mcp.json/route.ts`, `app/[locale]/export/page.tsx`, `app/api/v1/layouts/export/route.ts`, `package.json`, `tsconfig.json`, `vercel.json`
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
- Source paths: `app/[locale]/terms/page.tsx`
- Tests: 11
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/config/env.ts`, `lib/platform/auth.ts`, `lib/platform/vercel.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/[locale]/score/page.tsx`, `app/api/v1/layouts/score/route.ts`, `lib/config/env.ts`
- Tests: 11
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### Google Integration

- ID: `integration.google`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/config/meta.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Repository has source-backed indicators for a Google integration.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/layout/model-adapter.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/mcp.json/route.ts`, `app/[locale]/docs/page.tsx`, `app/[locale]/faq/page.tsx`, `app/[locale]/privacy/page.tsx`, `app/[locale]/terms/page.tsx`, `app/api/health/route.test.ts`, `app/llms.txt/route.test.ts`, `components/layout-workbench/layout-workbench.tsx`, `lib/layout/discovery.ts`, `lib/layout/openapi.ts`, `lib/layout/registry.ts`, `lib/platform/auth.ts`, `package.json`, `README.md`, `tests/layout/auth.test.ts`
- Tests: 11
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/layout/api-handlers.ts`, `lib/layout/discovery.ts`, `lib/layout/registry.ts`, `lib/layout/templates.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/providers/observability-provider.tsx`, `lib/config/env.ts`, `lib/config/features.ts`, `lib/config/site.ts`, `lib/layout/api-handlers.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 11
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `lib/layout/mcp.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.test.ts`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/layout/network-logo.tsx`, `components/providers/observability-provider.tsx`, `components/providers/trace-provider.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/config/env.ts`, `lib/trace/index.ts`, `package.json`
- Tests: 11
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/builder/page.tsx`, `app/[locale]/docs/page.tsx`, `app/[locale]/export/page.tsx`, `app/[locale]/faq/page.tsx`, `app/[locale]/gallery/page.tsx`, `app/[locale]/page.tsx`, `app/[locale]/preview/page.tsx`, `app/[locale]/privacy/page.tsx`, `app/[locale]/score/page.tsx`, `app/[locale]/templates/page.tsx`, `app/[locale]/terms/page.tsx`, `app/offline/page.tsx`
- Tests: 11
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/layout/search-bar.tsx`
- Tests: 11
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/.well-known/change-password/route.ts`, `app/api/indexnow/route.ts`, `lib/config/env.ts`, `lib/config/features.ts`, `lib/config/meta.ts`, `lib/config/site.ts`, `lib/layout/api-handlers.ts`, `lib/layout/integrations.ts`, `lib/layout/model-adapter.ts`, `lib/platform/auth.ts`, `lib/security/headers.ts`, `lib/trace/index.ts`
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
- Source paths: `app/api/health/route.test.ts`, `app/llms.txt/route.test.ts`, `app/robots.txt/route.test.ts`, `app/sitemap.xml/route.test.ts`, `playwright.config.ts`, `tests/api/mcp.test.ts`, `tests/layout/analyzer.test.ts`, `tests/layout/auth.test.ts`, `tests/layout/discovery.test.ts`, `tests/layout/exporters.test.ts`, `tests/playwright/layout-workbench.spec.ts`
- Tests: 11
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/a11y/skip-links.tsx`, `components/layout-workbench/layout-workbench.tsx`, `components/layout/auth-menu.tsx`, `components/layout/footer.tsx`, `components/layout/locale-switcher.tsx`, `components/layout/network-drawer.tsx`, `components/layout/network-logo.tsx`, `components/layout/search-bar.tsx`, `components/layout/top-bar.tsx`, `components/navigation/Breadcrumbs.tsx`, `components/providers/aeo-provider.tsx`, `components/providers/index.tsx`, `components/providers/network-provider.tsx`, `components/providers/observability-provider.tsx`, `components/providers/theme-provider.tsx`, `components/providers/trace-provider.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`
- Tests: 11
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.Jules/sentinel.md`, `components/layout-workbench/layout-workbench.tsx`, `components/providers/aeo-provider.tsx`, `components/ui/chart.tsx`, `lib/services/network.ts`, `lib/services/svg.ts`, `lib/utils/xml.tsx`, `public/sw.js`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/indexnow/route.ts`, `lib/config/env.ts`, `lib/config/meta.ts`, `lib/layout/api-handlers.ts`, `lib/layout/model-adapter.ts`, `lib/platform/auth.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

# mbarbine__platphorm-space-news

Space News is the canonical public SpaceX, Starbase, Boca Chica, South Padre Island, and Cameron County news aggregation surface for PlatPhormNews.

## Metadata

- ID: `github-recent__mbarbine__platphorm-space-news`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-space-news`
- Remote: `git@github.com:mbarbine/platphorm-space-news.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: internal
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/ai-summary/page.tsx`, `app/ai/chat/page.tsx`, `app/ai/summary/page.tsx`, `app/api/v1/ai/ask/route.ts`, `app/api/v1/ai/summary/route.ts`, `app/ask-ai/page.tsx`
- Tests: 7
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/aggregate-feeds/route.ts`, `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/network/register/route.ts`, `app/api/v1/ai/ask/route.ts`, `app/api/v1/ai/summary/route.ts`, `app/api/v1/categories/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/live-cameras/route.ts`, `app/api/v1/locations/route.ts`, `app/api/v1/news/[id]/route.ts`, `app/api/v1/news/route.ts`, `app/api/v1/search/route.ts`, `app/api/v1/sources/[id]/route.ts`, `app/api/v1/sources/route.ts`, `app/api/v1/sync/run/route.ts`, `app/api/v1/sync/status/route.ts`, `app/api/v1/trending/route.ts`
- Tests: 7
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/unit/auth.test.ts`, `lib/platform/auth.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/aggregate-feeds/route.ts`, `app/api/cron/refresh/route.ts`
- Tests: 7
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/articles/[id]/page.tsx`, `lib/space/feed-service.ts`, `lib/space/mcp.ts`, `package.json`, `postcss.config.mjs`
- Tests: 7
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/sync/status/route.ts`
- Tests: 7
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/seo/json-ld.tsx`, `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`, `vercel.json`
- Tests: 7
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/terms/page.tsx`
- Tests: 7
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform/auth.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/health.test.ts`, `__tests__/unit/auth.test.ts`, `__tests__/unit/discovery.test.ts`, `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/network/register/route.ts`, `app/api/v1/sync/run/route.ts`, `app/faq/page.tsx`, `lib/platform/auth.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/space/feed-service.ts`, `lib/space/mcp.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 7
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `lib/space/mcp.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/health.test.ts`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/ai-summary/page.tsx`, `app/ai/chat/page.tsx`, `app/ai/summary/page.tsx`, `app/articles/[id]/page.tsx`, `app/ask-ai/page.tsx`, `app/faq/page.tsx`, `app/feed/[slug]/page.tsx`, `app/live/page.tsx`, `app/locations/[slug]/page.tsx`, `app/privacy/page.tsx`, `app/roadmap/page.tsx`, `app/source/[type]/page.tsx`, `app/sources/[type]/page.tsx`, `app/sources/page.tsx`, `app/starbase/page.tsx`, `app/terms/page.tsx`, `app/video/page.tsx`
- Tests: 7
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/search/route.ts`
- Tests: 7
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/unit/auth.test.ts`, `lib/platform/auth.ts`, `lib/space/feed-service.ts`, `lib/space/mcp.ts`
- Tests: 7
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/health.test.ts`, `__tests__/mcp/mcp.test.ts`, `__tests__/unit/auth.test.ts`, `__tests__/unit/discovery.test.ts`, `__tests__/unit/rss-parser.test.ts`, `e2e/home.spec.ts`, `playwright.config.ts`
- Tests: 7
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/hero-section.tsx`, `components/layout/footer.tsx`, `components/layout/sidebar.tsx`, `components/layout/top-bar.tsx`, `components/news/feed-filters.tsx`, `components/news/news-card.tsx`, `components/news/news-feed.tsx`, `components/news/trending-sidebar.tsx`, `components/seo/json-ld.tsx`, `components/space/feed-page.tsx`, `components/space/help-tooltip.tsx`, `components/space/page-shell.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`
- Tests: 7
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/ai/summary/page.tsx`, `app/atom.xml/route.ts`, `components/hero-section.tsx`, `components/news/news-feed.tsx`, `components/news/trending-sidebar.tsx`, `components/seo/json-ld.tsx`, `components/ui/chart.tsx`, `lib/space/feed-service.ts`, `lib/space/model-service.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/unit/auth.test.ts`, `lib/platform/auth.ts`, `lib/space/feed-service.ts`, `lib/space/mcp.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

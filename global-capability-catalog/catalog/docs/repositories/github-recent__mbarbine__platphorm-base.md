# mbarbine__platphorm-base

> News for 8 Billion People. Free Forever. No Ads. No Paywalls.

## Metadata

- ID: `github-recent__mbarbine__platphorm-base`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-base`
- Remote: `git@github.com:mbarbine/platphorm-base.git`
- Primary language: TypeScript
- Frameworks: Jest, Next.js, React, Tailwind CSS
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
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/[...slug]/route.ts`, `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/network/graph/route.ts`, `app/api/v1/headlines/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/jobs/apply/route.ts`, `app/api/v1/network/route.ts`, `app/api/v1/route-compliance/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/app/api/cron.test.ts`, `app/api/cron/refresh/route.ts`, `app/api/v1/jobs/apply/route.ts`, `app/jobs/page.tsx`, `components/jobs/application-form.tsx`, `components/jobs/job-listings.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `package.json`, `postcss.config.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/trace/trace-status.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/trust.json/route.ts`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/jobs/application-form.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/app/route-standard.test.ts`, `app/.well-known/trust.json/route.ts`, `app/api/health/route.ts`, `app/llms-full.txt/route.ts`, `app/llms.txt/route.ts`, `lib/trace/client.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/health/route.ts`, `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

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
- Source paths: `__tests__/components/providers/trace-provider.test.tsx`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/providers/trace-provider.tsx`, `components/trace/trace-status.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/trace/client.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[...slug]/page.tsx`, `app/faq/page.tsx`, `app/feeds/page.tsx`, `app/jobs/page.tsx`, `app/network/category/[category]/page.tsx`, `app/network/page.tsx`, `app/roadmap/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/app/api/cron.test.ts`, `app/api/cron/refresh/route.ts`, `app/api/health/route.ts`, `lib/trace/client.ts`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/app/api/cron.test.ts`, `__tests__/app/api/docs.test.ts`, `__tests__/app/api/health.test.ts`, `__tests__/app/api/mcp.test.ts`, `__tests__/app/api/network.test.ts`, `__tests__/app/api/network/graph/route.test.ts`, `__tests__/app/api/route-compliance.test.ts`, `__tests__/app/api/v1/jobs/apply/route.test.ts`, `__tests__/app/faq/page.test.tsx`, `__tests__/app/feeds/page.test.ts`, `__tests__/app/network/category-page.test.ts`, `__tests__/app/network/page.test.ts`, `__tests__/app/route-standard.test.ts`, `__tests__/app/rss-history.test.ts`, `__tests__/app/rss.xml/route.test.ts`, `__tests__/app/sitemap.xml/route.test.ts`, `__tests__/components/network/sitemap/site-card.test.tsx`, `__tests__/components/network/sitemap/sitemap-external-links.test.tsx`, `__tests__/components/network/sitemap/sitemap-grid.test.tsx`, `__tests__/components/network/sitemap/sitemap-quick-links.test.tsx`, `__tests__/components/providers/trace-provider.test.tsx`, `__tests__/lib/config/feature-flags.test.ts`, `__tests__/lib/network-filters.test.ts`, `__tests__/lib/network.test.ts`, `__tests__/lib/network/discovery.test.ts`, `__tests__/lib/network/feed-pagination.test.ts`, `__tests__/lib/network/index.test.ts`, `__tests__/lib/network/route-compliance.test.ts`, `__tests__/lib/network/types.test.ts`, `__tests__/lib/rss.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/network/sitemap/site-card.test.tsx`, `__tests__/components/network/sitemap/sitemap-external-links.test.tsx`, `__tests__/components/network/sitemap/sitemap-grid.test.tsx`, `__tests__/components/network/sitemap/sitemap-quick-links.test.tsx`, `__tests__/components/providers/trace-provider.test.tsx`, `components/home/hero-feed.tsx`, `components/jobs/application-form.tsx`, `components/jobs/job-listings.tsx`, `components/layout/app-shell.tsx`, `components/layout/footer.tsx`, `components/layout/sidebar.tsx`, `components/layout/top-bar.tsx`, `components/network/category-site-grid.tsx`, `components/network/network-sitemap.tsx`, `components/network/route-compliance-panel.tsx`, `components/network/site-tags.tsx`, `components/network/sitemap/site-card.tsx`, `components/network/sitemap/sitemap-external-links.tsx`, `components/network/sitemap/sitemap-filters.tsx`, `components/network/sitemap/sitemap-grid.tsx`, `components/network/sitemap/sitemap-header.tsx`, `components/network/sitemap/sitemap-quick-links.tsx`, `components/providers/trace-provider.tsx`, `components/theme-provider.tsx`, `components/trace/trace-status.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.jules/sentinel.md`, `app/faq/page.tsx`, `app/feed.xml/route.ts`, `app/layout.tsx`, `components/layout/top-bar.tsx`, `components/network/route-compliance-panel.tsx`, `components/ui/chart.tsx`, `lib/network/route-compliance.ts`, `lib/network/rss.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/app/api/cron.test.ts`, `app/api/cron/refresh/route.ts`, `app/api/health/route.ts`, `lib/trace/client.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

# mbarbine__front-runners-webby

A comprehensive landing page for Front Runners, a regional social run club based in Front Royal, Virginia, serving the greater Shenandoah Valley region.

## Metadata

- ID: `github-recent__mbarbine__front-runners-webby`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__front-runners-webby`
- Remote: `git@github.com:mbarbine/front-runners-webby.git`
- Primary language: JSON
- Frameworks: Next.js, React, Tailwind CSS
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
- Tests: 1
- LLMs context: `public/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/community/posts/route.ts`, `app/api/cron/sync/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/network/graph/route.ts`, `app/api/weather/route.ts`
- Tests: 1
- LLMs context: `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 1
- LLMs context: `public/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/sync/route.ts`
- Tests: 1
- LLMs context: `public/llms.txt`

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/community/posts/route.ts`, `app/api/docs/route.ts`, `package.json`, `postcss.config.mjs`
- Tests: 1
- LLMs context: `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/weather-status.tsx`
- Tests: 1
- LLMs context: `public/llms.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 1
- LLMs context: `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 1
- LLMs context: `public/llms.txt`

Repository includes CI workflows, deployment config, or containerization files.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms.txt`
- Tests: 1
- LLMs context: `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/signup-form.tsx`, `package.json`
- Tests: 1
- LLMs context: `public/llms.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 1
- LLMs context: `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `package.json`
- Tests: 1
- LLMs context: `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/cron/sync/route.ts`, `lib/community.ts`
- Tests: 1
- LLMs context: `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`
- Tests: 1
- LLMs context: `public/llms.txt`

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 1
- LLMs context: `public/llms.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `test_frontend.py`
- Tests: 1
- LLMs context: `public/llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/about.tsx`, `components/breadcrumbs.tsx`, `components/community-updates.tsx`, `components/faq.tsx`, `components/footer.tsx`, `components/header.tsx`, `components/hero.tsx`, `components/regional-imagery.tsx`, `components/routes.tsx`, `components/schedule.tsx`, `components/signup-form.tsx`, `components/supporters.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/weather-status.tsx`
- Tests: 1
- LLMs context: `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/atom.xml/route.ts`, `app/layout.tsx`, `lib/community.ts`, `lib/weather.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/cron/sync/route.ts`, `lib/community.ts`

## Gaps

- CI workflows not detected

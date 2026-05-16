# mbarbine__drone-reel-webby

Package repository for my-project.

## Metadata

- ID: `github-recent__mbarbine__drone-reel-webby`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__drone-reel-webby`
- Remote: `git@github.com:mbarbine/drone-reel-webby.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
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
- Tests: 6
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/network/graph/route.ts`, `app/api/network/jobs/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/product/route.ts`, `app/api/v1/waitlist/route.ts`, `app/api/webhooks/route.ts`, `app/api/well-known/network-manifest/route.ts`, `app/api/well-known/security/route.ts`, `app/api/well-known/webfinger/route.ts`
- Tests: 6
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 6
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/network/jobs/route.ts`
- Tests: 6
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `package.json`, `postcss.config.mjs`
- Tests: 6
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 6
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 6
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/product/route.ts`
- Tests: 6
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/sections/contact.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: 6
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 6
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `components/sections/technology.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/logger.ts`, `package.json`
- Tests: 6
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/webhooks/route.ts`, `lib/logger.ts`
- Tests: 6
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 6
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/health/__tests__/route.test.ts`, `app/api/network/graph/__tests__/route.test.ts`, `app/api/network/jobs/__tests__/route.test.ts`, `components/breadcrumbs.test.tsx`, `components/sections/faq.test.tsx`, `components/sections/roadmap.test.tsx`
- Tests: 6
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/breadcrumbs.test.tsx`, `components/breadcrumbs.tsx`, `components/layout/footer.tsx`, `components/layout/header.tsx`, `components/sections/about.tsx`, `components/sections/applications.tsx`, `components/sections/contact.tsx`, `components/sections/faq.test.tsx`, `components/sections/faq.tsx`, `components/sections/hero.tsx`, `components/sections/roadmap.test.tsx`, `components/sections/roadmap.tsx`, `components/sections/technology.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`
- Tests: 6
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/events/route.ts`, `app/api/webhooks/route.ts`
- Tests: 6
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.Jules/sentinel.md`, `app/feed.xml/route.ts`, `app/layout.tsx`, `components/ui/chart.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/webhooks/route.ts`

## Gaps

- README not detected
- CI workflows not detected
- LLMs context files not detected

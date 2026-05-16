# mbarbine__platphorm-stannp-api-wrapper

- **Health Check:** `/api/health`

## Metadata

- ID: `github-recent__mbarbine__platphorm-stannp-api-wrapper`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-stannp-api-wrapper`
- Remote: `git@github.com:mbarbine/platphorm-stannp-api-wrapper.git`
- Primary language: JSON
- Frameworks: Jest, Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/analytics.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/admin/save-stannp-key/route.ts`, `app/api/admin/stannp-status/route.ts`, `app/api/admin/test-stannp/route.ts`, `app/api/auth/login/route.ts`, `app/api/auth/register/route.ts`, `app/api/claws/route.ts`, `app/api/credits/purchase/route.ts`, `app/api/credits/transactions/route.ts`, `app/api/cron/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/network/graph/route.ts`, `app/api/postcards/[id]/cancel/route.ts`, `app/api/postcards/[id]/events/route.ts`, `app/api/postcards/[id]/route.ts`, `app/api/postcards/route.ts`, `app/api/postcards/send/route.ts`, `app/api/recipients/route.ts`, `app/api/templates/route.ts`, `app/api/test-db/route.ts`, `app/api/user/profile/route.ts`, `app/api/webhooks/stannp/route.ts`
- Tests: 20
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/login/route.ts`, `app/api/auth/register/route.ts`, `app/login/page.tsx`, `lib/auth.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/api/admin/save-stannp-key/route.ts`, `app/api/admin/stannp-status/route.ts`, `app/api/admin/test-stannp/route.ts`, `components/admin-link.tsx`
- Tests: 20
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/route.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/api/docs/route.ts`, `app/api/postcards/[id]/cancel/route.ts`, `app/api/postcards/[id]/events/route.ts`, `app/api/postcards/[id]/route.ts`, `app/api/postcards/route.ts`, `app/api/postcards/send/route.ts`, `app/credits/page.tsx`, `app/postcard/[id]/page.tsx`, `lib/db.ts`, `package.json`, `postcss.config.mjs`
- Tests: 20
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/api/admin/save-stannp-key/route.ts`, `app/api/admin/stannp-status/route.ts`, `app/api/admin/test-stannp/route.ts`, `app/dashboard/page.tsx`, `components/admin-link.tsx`
- Tests: 20
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/rss.xml/route.ts`, `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 20
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `scripts/003-add-production-fields.sql`
- Tests: 20
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Stannp Integration

- ID: `email.stannp`
- Type: email
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/api/admin/save-stannp-key/route.ts`, `app/api/admin/stannp-status/route.ts`, `lib/stannp-client.ts`, `lib/stannp.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Repository has source-backed indicators for a Stannp integration.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/file-upload.tsx`, `lib/blob-storage.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/page.tsx`, `lib/db.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `lib/analytics.ts`, `lib/blob-storage.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 20
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/login/route.ts`, `app/api/health/route.ts`, `app/login/page.tsx`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/api/credits/purchase/route.ts`, `app/credits/page.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `scripts/000-drop-and-recreate-all-tables.sql`, `scripts/003-add-production-fields.sql`
- Tests: 20
- LLMs context: none detected

Repository has source-backed indicators for a Stripe integration.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/credits/page.tsx`, `app/dashboard/page.tsx`, `app/faq/page.tsx`, `app/history/page.tsx`, `app/login/page.tsx`, `app/postcard/[id]/page.tsx`, `app/profile/page.tsx`, `app/register/page.tsx`, `app/roadmap/page.tsx`, `app/send/page.tsx`
- Tests: 20
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/llms.txt/route.ts`, `app/api/auth/login/route.ts`, `app/api/credits/purchase/route.ts`, `app/api/cron/route.ts`, `app/api/health/route.ts`, `app/api/postcards/send/route.ts`, `app/credits/page.tsx`, `app/llms-index.txt/route.ts`, `app/llms.txt/route.ts`, `app/robots.ts`, `app/rss.xml/route.ts`, `app/sitemap.ts`, `lib/auth.ts`, `lib/db.ts`, `lib/stannp-client.ts`, `lib/stannp.ts`
- Tests: 20
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/api/admin/save-stannp-key/route.ts`, `app/api/admin/stannp-status/route.ts`, `app/api/admin/test-stannp/route.ts`, `app/api/postcards/[id]/cancel/route.ts`, `app/api/postcards/[id]/events/route.ts`, `app/api/postcards/[id]/route.ts`, `app/api/postcards/route.ts`, `app/api/postcards/send/route.ts`, `app/api/webhooks/stannp/route.ts`, `app/postcard/[id]/page.tsx`, `components/ui/label.test.tsx`, `components/ui/label.tsx`, `lib/stannp-client.ts`, `lib/stannp.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/health.test.ts`, `__tests__/button.test.tsx`, `__tests__/components/breadcrumbs.test.tsx`, `__tests__/home.test.tsx`, `app/api/admin/test-stannp/route.ts`, `app/api/auth/login/route.test.ts`, `app/api/auth/register/route.test.ts`, `app/api/test-db/route.ts`, `app/api/user/profile/route.test.ts`, `app/dashboard/page.test.tsx`, `app/login/page.test.tsx`, `app/page.test.tsx`, `app/register/page.test.tsx`, `components/ui/badge.test.tsx`, `components/ui/button.test.tsx`, `components/ui/card.test.tsx`, `components/ui/input.test.tsx`, `components/ui/label.test.tsx`, `components/ui/textarea.test.tsx`, `lib/auth.test.ts`
- Tests: 20
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/breadcrumbs.test.tsx`, `components/admin-link.tsx`, `components/breadcrumbs.tsx`, `components/theme-provider.tsx`, `components/ui/alert.tsx`, `components/ui/badge.test.tsx`, `components/ui/badge.tsx`, `components/ui/button.test.tsx`, `components/ui/button.tsx`, `components/ui/card.test.tsx`, `components/ui/card.tsx`, `components/ui/file-upload.tsx`, `components/ui/input.test.tsx`, `components/ui/input.tsx`, `components/ui/label.test.tsx`, `components/ui/label.tsx`, `components/ui/select.tsx`, `components/ui/textarea.test.tsx`, `components/ui/textarea.tsx`
- Tests: 20
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/postcards/[id]/events/route.ts`, `app/api/webhooks/stannp/route.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/api/webhooks/stannp/route.ts`, `lib/auth.ts`, `lib/stannp-client.ts`, `lib/stannp.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/credits/purchase/route.ts`, `app/credits/page.tsx`, `lib/auth.ts`, `lib/db.ts`, `lib/stannp-client.ts`, `lib/stannp.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

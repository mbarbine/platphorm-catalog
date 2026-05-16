# mbarbine__platphorm-onboard

Canonical documentation for this repository lives in this directory.

## Metadata

- ID: `github-recent__mbarbine__platphorm-onboard`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-onboard`
- Remote: `git@github.com:mbarbine/platphorm-onboard.git`
- Primary language: TypeScript
- Frameworks: MCP SDK, Next.js, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/lib/onboard-platform-helpers.test.ts`, `app/api/health/route.ts`, `lib/onboard/model.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `docs/deep-research-report-v2.md`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/[...path]/route.ts`, `app/api/applications/[id]/route.ts`, `app/api/applications/route.ts`, `app/api/automation/route.ts`, `app/api/capabilities/route.ts`, `app/api/categories/route.ts`, `app/api/check-subdomain/route.ts`, `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/documents/[slug]/route.ts`, `app/api/documents/route.ts`, `app/api/health/route.ts`, `app/api/indexnow/route.ts`, `app/api/ingest/route.ts`, `app/api/integrations/[name]/mcp/route.ts`, `app/api/integrations/route.ts`, `app/api/keys/route.ts`, `app/api/mcp/register/route.ts`, `app/api/mcp/route.ts`, `app/api/og/route.tsx`, `app/api/openapi/route.ts`, `app/api/project-docs/[slug]/route.ts`, `app/api/project-docs/route.ts`, `app/api/search/route.ts`, `app/api/session/route.ts`, `app/api/settings/route.ts`, `app/api/submissions/[id]/route.ts`, `app/api/submissions/route.ts`, `app/api/url-preview/route.ts`, `app/api/v1/[...path]/route.ts`
- Tests: 20
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/session/route.ts`, `lib/onboard/auth-policy.ts`, `lib/site-config.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.jules/sentinel.md`, `lib/db/client.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/[locale]/jobs/page.tsx`, `app/api/automation/route.ts`, `app/api/cron/refresh/route.ts`, `app/api/workflow/route.ts`, `app/jobs/page.tsx`, `docs/phase-2-automation.md`, `lib/integrations/post-registration.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/integrations/post-registration.test.ts`, `app/[locale]/docs/api/page.tsx`, `app/api/docs/route.ts`, `app/api/project-docs/[slug]/route.ts`, `app/api/project-docs/route.ts`, `app/api/v1/docs/route.ts`, `app/docs/api/page.tsx`, `docs/anoms-do-not-delete.md`, `docs/API.md`, `docs/ARCHITECTURE.md`, `docs/CHANGELOG.md`, `docs/CODE_OF_CONDUCT.md`, `docs/CONTRIBUTING.md`, `docs/deep-research-report-v2.md`, `docs/License FAQ.md`, `docs/LOCAL_DEV.md`, `docs/minimum-discoverability-matrix.md`, `docs/NEW_INTERNET_V1_FULL_SPEC.md`, `docs/PACKAGES.md`, `docs/phase-2-automation.md`, `docs/PRINCIPLES.md`, `docs/README.md`, `docs/ROADMAP.md`, `docs/SECURITY.md`, `lib/db.ts`, `lib/integrations/post-registration.ts`, `package.json`, `postcss.config.mjs`
- Tests: 20
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/application-status-review.test.ts`, `.jules/sentinel.md`, `app/api/v1/applications/status/[token]/route.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/trust.json/route.ts`, `app/rss.xml/route.ts`, `components/seo/json-ld.tsx`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`, `vercel.json`
- Tests: 20
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/documents/[slug]/route.ts`, `app/api/documents/route.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/lib/onboard-platform-helpers.test.ts`, `app/api/v1/applications/[id]/submit/route.ts`, `components/forms/application-form.tsx`, `lib/site-config.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/logger.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/db/client.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 20
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/application-status-review.test.ts`, `__tests__/api/integrations-routes.test.ts`, `__tests__/lib/onboard-platform-helpers.test.ts`, `app/.well-known/trust.json/route.ts`, `app/[locale]/docs/api/page.tsx`, `app/api/integrations/route.ts`, `app/api/mcp/register/route.ts`, `app/api/mcp/route.ts`, `app/api/openapi/route.ts`, `lib/onboard/auth-policy.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `docs/CONTRIBUTING.md`, `docs/LOCAL_DEV.md`, `docs/PACKAGES.md`, `lib/db.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/integrations-routes.test.ts`, `app/[locale]/layout.tsx`, `app/api/health/route.ts`, `app/api/mcp/register/route.ts`, `docs/LOCAL_DEV.md`, `docs/PACKAGES.md`, `docs/phase-2-automation.md`, `lib/db/client.ts`, `lib/integrations/vercel.ts`, `lib/onboard/integrations.ts`, `lib/version.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 20
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/integrations/[name]/mcp/route.ts`, `app/api/mcp/register/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/mcp/route.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `docs/CHANGELOG.md`, `lib/logger.ts`, `lib/site-config.ts`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/docs/api/page.tsx`, `app/[locale]/faq/page.tsx`, `app/[locale]/jobs/page.tsx`, `app/[locale]/onboarding/[id]/page.tsx`, `app/[locale]/page.tsx`, `app/docs/api/page.tsx`, `app/faq/page.tsx`, `app/jobs/page.tsx`
- Tests: 20
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/search/route.ts`, `docs/deep-research-report-v2.md`
- Tests: 20
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/discoverability-routes.test.ts`, `__tests__/api/integrations-routes.test.ts`, `__tests__/integrations/post-registration.test.ts`, `__tests__/lib/onboard-platform-helpers.test.ts`, `.jules/sentinel.md`, `app/.well-known/[...path]/route.ts`, `app/api/[...path]/route.ts`, `app/api/health/route.ts`, `app/api/indexnow/route.ts`, `app/api/mcp/register/route.ts`, `app/api/og/route.tsx`, `app/api/url-preview/route.ts`, `app/robots.txt/route.ts`, `app/rss.xml/route.ts`, `docs/PACKAGES.md`, `lib/api-helpers.ts`, `lib/db.ts`, `lib/db/client.ts`, `lib/integrations/github.ts`, `lib/integrations/post-registration.ts`, `lib/integrations/vercel.ts`, `lib/logger.ts`, `lib/onboard/auth-policy.ts`, `lib/onboard/integrations.ts`, `lib/onboard/model.ts`, `lib/site-config.ts`, `lib/version.ts`
- Tests: 20
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 20
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/application-status-review.test.ts`, `__tests__/api/applications.test.ts`, `__tests__/api/check-subdomain.test.ts`, `__tests__/api/discoverability-routes.test.ts`, `__tests__/api/docs-routes.test.ts`, `__tests__/api/documents-routes.test.ts`, `__tests__/api/integrations-routes.test.ts`, `__tests__/api/keys-and-webhooks-routes.test.ts`, `__tests__/api/phase1-platform-routes.test.ts`, `__tests__/api/settings-route.test.ts`, `__tests__/api/submission-review-routes.test.ts`, `__tests__/api/submissions-routes.test.ts`, `__tests__/api/sw-route.test.ts`, `__tests__/api/url-preview.test.ts`, `__tests__/integrations/post-registration.test.ts`, `__tests__/lib/markdown.test.ts`, `__tests__/lib/onboard-platform-helpers.test.ts`, `__tests__/onboarding/quick-onboarding.test.ts`, `e2e/onboarding-wizard.spec.ts`, `playwright.config.ts`
- Tests: 20
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/accessible-theme-switcher.tsx`, `components/forms/application-form.tsx`, `components/layout/footer.tsx`, `components/layout/header.tsx`, `components/locale-switcher.tsx`, `components/sections/benefits.tsx`, `components/sections/hero.tsx`, `components/sections/how-it-works.tsx`, `components/sections/network-showcase.tsx`, `components/seo/json-ld.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumbs.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/field.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/separator.tsx`, `components/ui/skeleton.tsx`, `components/ui/spinner.tsx`, `components/ui/textarea.tsx`, `components/ui/toast.tsx`, `components/ui/toggle.tsx`, `components/ui/tooltip-note.tsx`
- Tests: 20
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/webhooks/route.ts`, `lib/site-config.ts`
- Tests: 20
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/[locale]/faq/page.tsx`, `app/[locale]/jobs/page.tsx`, `app/api/automation/route.ts`, `app/api/ingest/route.ts`, `app/api/settings/route.ts`, `app/api/url-preview/route.ts`, `app/api/workflow/route.ts`, `app/llms.txt/route.ts`, `components/accessible-theme-switcher.tsx`, `components/seo/json-ld.tsx`, `components/ui/breadcrumbs.tsx`, `docs/anoms-do-not-delete.md`, `lib/api-helpers.ts`, `lib/integrations/post-registration.ts`, `lib/integrations/vercel.ts`, `lib/markdown.ts`, `lib/network/client.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/api/integrations-routes.test.ts`, `__tests__/integrations/post-registration.test.ts`, `__tests__/lib/onboard-platform-helpers.test.ts`, `.jules/sentinel.md`, `app/api/indexnow/route.ts`, `app/api/mcp/register/route.ts`, `docs/PACKAGES.md`, `lib/api-helpers.ts`, `lib/db.ts`, `lib/db/client.ts`, `lib/integrations/github.ts`, `lib/integrations/post-registration.ts`, `lib/integrations/vercel.ts`, `lib/onboard/auth-policy.ts`, `lib/onboard/integrations.ts`, `lib/site-config.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

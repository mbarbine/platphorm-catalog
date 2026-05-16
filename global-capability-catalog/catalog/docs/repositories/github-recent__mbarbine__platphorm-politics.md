# mbarbine__platphorm-politics

A modern web application that digitizes, simplifies, and streamlines the FEC Form 2 (Statement of Candidacy) filing process. Built with Next.js, Supabase, and integrated with Lob for automated physical mailing.

## Metadata

- ID: `github-recent__mbarbine__platphorm-politics`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-politics`
- Remote: `git@github.com:mbarbine/platphorm-politics.git`
- Primary language: JSON
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
- Source paths: `app/api/generate-pdf/route.ts`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/complete-onboarding/route.ts`, `app/api/docs/route.ts`, `app/api/generate-pdf/route.ts`, `app/api/health/route.ts`, `app/api/network/graph/route.ts`, `app/api/save-form/route.ts`, `app/api/send-mail/route.ts`, `app/api/well-known/route.ts`
- Tests: 3
- LLMs context: `llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `package.json`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `scripts/create-test-user.ts`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `package.json`, `postcss.config.mjs`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/dashboard/page.tsx`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package-lock.json`, `package.json`, `tsconfig.json`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `llms.txt`
- Tests: 3
- LLMs context: `llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/generate-pdf/route.ts`, `package.json`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/save-form/route.ts`, `app/form/[id]/page.tsx`, `app/form/new/page.tsx`, `components/fec-form-2.tsx`, `components/form-detail.tsx`, `package.json`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/auth/sign-up/page.tsx`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `README.md`, `scripts/create-test-user.ts`
- Tests: 3
- LLMs context: `llms.txt`

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/generate-pdf/route.ts`, `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: `llms.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.well-known/mcp.json`, `package.json`
- Tests: 3
- LLMs context: `llms.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/auth/login/page.tsx`, `package.json`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `app/dashboard/page.tsx`, `app/faq/page.tsx`, `app/form/[id]/page.tsx`, `app/form/new/page.tsx`
- Tests: 3
- LLMs context: `llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/send-mail/route.ts`, `app/auth/sign-up/page.tsx`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `scripts/create-test-user.ts`
- Tests: 3
- LLMs context: `llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`
- Tests: 3
- LLMs context: `llms.txt`

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 3
- LLMs context: `llms.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `scripts/create-test-user.ts`, `tests/components/button.test.tsx`, `tests/ui/page.test.tsx`
- Tests: 3
- LLMs context: `llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/env-setup-banner.tsx`, `components/fec-form-2.tsx`, `components/fec-tracking.tsx`, `components/footer.tsx`, `components/form-detail.tsx`, `components/header.tsx`, `components/onboarding-wizard.tsx`, `components/social-share.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/checkbox.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/select.tsx`, `components/ui/skeleton.tsx`, `components/ui/sonner.tsx`, `components/ui/textarea.tsx`, `components/ui/tooltip.tsx`, `tests/components/button.test.tsx`, `tests/ui/page.test.tsx`
- Tests: 3
- LLMs context: `llms.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/send-mail/route.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `scripts/create-test-user.ts`

## Gaps

- CI workflows not detected

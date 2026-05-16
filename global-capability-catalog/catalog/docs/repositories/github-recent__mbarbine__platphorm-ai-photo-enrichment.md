# mbarbine__platphorm-ai-photo-enrichment

A full-stack Next.js application that automatically enhances your Google Photos using professional-grade AI to make every photo look like it was taken with a high-end camera.

## Metadata

- ID: `github-recent__mbarbine__platphorm-ai-photo-enrichment`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-ai-photo-enrichment`
- Remote: `git@github.com:mbarbine/platphorm-ai-photo-enrichment.git`
- Primary language: YAML
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
- Source paths: `lib/ai/enhancement.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/google/callback/route.ts`, `app/api/auth/google/route.ts`, `app/api/automation/enhance-all/route.ts`, `app/api/automation/sync-all/route.ts`, `app/api/cron/process-queue/route.ts`, `app/api/google-photos/disconnect/route.ts`, `app/api/google-photos/sync/route.ts`, `app/api/photos/[id]/enhance/route.ts`, `app/api/photos/batch-enhance/route.ts`, `app/api/process-job/route.ts`, `app/api/process-queue/route.ts`, `app/api/queue/stats/route.ts`, `app/api/settings/update/route.ts`
- Tests: 3
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/auth/google/oauth.test.ts`, `app/api/auth/google/callback/route.ts`, `app/api/auth/google/route.ts`, `app/auth/error/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/automation/enhance-all/route.ts`, `app/api/automation/sync-all/route.ts`, `app/api/cron/process-queue/route.ts`, `app/api/process-job/route.ts`, `app/api/process-queue/route.ts`, `app/api/queue/stats/route.ts`, `components/automation-settings.tsx`, `components/queue-monitor.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `postcss.config.mjs`
- Tests: 3
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/dashboard/page.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/storage/blob-storage.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Google Integration

- ID: `integration.google`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/auth/google/oauth.test.ts`, `app/api/auth/google/callback/route.ts`, `app/api/auth/google/route.ts`, `lib/google-photos/client.ts`, `package.json`, `README.md`, `SETUP.md`, `TESTING_PLAN.md`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Google integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/auth/login/page.tsx`, `app/auth/sign-up/page.tsx`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `package.json`, `pnpm-lock.yaml`, `README.md`, `SETUP.md`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `lib/storage/blob-storage.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/auth/login/page.tsx`, `app/monitoring/page.tsx`, `components/queue-monitor.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/error/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `app/dashboard/page.tsx`, `app/monitoring/page.tsx`, `app/photos/page.tsx`, `app/settings/page.tsx`
- Tests: 3
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/auth/google/oauth.test.ts`, `app/api/auth/google/callback/route.ts`, `app/api/auth/google/route.ts`, `app/api/automation/enhance-all/route.ts`, `app/api/automation/sync-all/route.ts`, `app/api/cron/process-queue/route.ts`, `app/auth/login/page.tsx`, `app/auth/sign-up/page.tsx`, `lib/ai/enhancement.ts`, `lib/google-photos/client.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`
- Tests: 3
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/auth/google/oauth.test.ts`, `__tests__/schemas/schema.test.ts`, `scripts/test-helpers.ts`
- Tests: 3
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/app-footer.tsx`, `components/app-header.tsx`, `components/automation-settings.tsx`, `components/enhance-button.tsx`, `components/google-photos-settings.tsx`, `components/photo-filters.tsx`, `components/photo-gallery.tsx`, `components/queue-monitor.tsx`, `components/theme-provider.tsx`, `components/ui/badge.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/dialog.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/progress.tsx`, `components/ui/select.tsx`, `components/ui/switch.tsx`, `components/ui/toast.tsx`, `components/usage-stats.tsx`
- Tests: 3
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `components/photo-gallery.tsx`, `lib/storage/blob-storage.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/api/auth/google/oauth.test.ts`, `app/api/auth/google/callback/route.ts`, `app/api/automation/enhance-all/route.ts`, `app/api/automation/sync-all/route.ts`, `app/api/cron/process-queue/route.ts`, `lib/ai/enhancement.ts`, `lib/google-photos/client.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

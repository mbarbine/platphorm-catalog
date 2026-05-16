# mbarbine__civic-engagement-platform-webby

*Automatically synced with your [v0.app](https://v0.app) deployments*

## Metadata

- ID: `github-recent__mbarbine__civic-engagement-platform-webby`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__civic-engagement-platform-webby`
- Remote: `git@github.com:mbarbine/civic-engagement-platform-webby.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/ai/analyze-municipality/route.ts`, `app/api/ai/chat/route.ts`, `app/api/ai/summarize-document/route.ts`, `app/municipality/[id]/ai/page.tsx`, `components/municipality/ai-chat.tsx`, `components/municipality/ai-insights.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/municipality/ai-insights.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/ai/analyze-municipality/route.ts`, `app/api/ai/chat/route.ts`, `app/api/ai/summarize-document/route.ts`
- Tests: none detected
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/error/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/admin/tasks/page.tsx`, `app/admin/verify/expenditures/page.tsx`, `app/admin/verify/laws/page.tsx`, `app/admin/verify/meeting-minutes/page.tsx`, `components/admin/verification-list.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/tasks/page.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `postcss.config.mjs`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/admin/tasks/page.tsx`, `app/admin/verify/expenditures/page.tsx`, `app/admin/verify/laws/page.tsx`, `app/admin/verify/meeting-minutes/page.tsx`, `components/admin/verification-list.tsx`, `components/municipality/overview-tab.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/ai/summarize-document/route.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/discussions/new-discussion-form.tsx`, `components/profile/profile-edit-form.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/auth/sign-up/page.tsx`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/auth/login/page.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/page.tsx`, `app/admin/tasks/page.tsx`, `app/admin/verify/expenditures/page.tsx`, `app/admin/verify/laws/page.tsx`, `app/admin/verify/meeting-minutes/page.tsx`, `app/auth/error/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `app/municipalities/page.tsx`, `app/municipality/[id]/ai/page.tsx`, `app/municipality/[id]/discussions/[discussionId]/page.tsx`, `app/municipality/[id]/discussions/new/page.tsx`, `app/municipality/[id]/discussions/page.tsx`, `app/municipality/[id]/page.tsx`, `app/profile/page.tsx`
- Tests: none detected
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/municipality-search.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/sign-up/page.tsx`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/admin/verification-list.tsx`, `components/discussions/comment-section.tsx`, `components/discussions/new-discussion-form.tsx`, `components/header-nav.tsx`, `components/municipality-card.tsx`, `components/municipality-search.tsx`, `components/municipality/ai-chat.tsx`, `components/municipality/ai-insights.tsx`, `components/municipality/expenditure-chart.tsx`, `components/municipality/expenditures-tab.tsx`, `components/municipality/laws-tab.tsx`, `components/municipality/meeting-minutes-tab.tsx`, `components/municipality/overview-tab.tsx`, `components/municipality/recent-activity.tsx`, `components/profile/profile-edit-form.tsx`, `components/profile/sign-out-button.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `components/ui/chart.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`
- [medium] No automated test files were detected. Evidence: `app/admin/page.tsx`, `app/admin/tasks/page.tsx`, `app/admin/verify/expenditures/page.tsx`, `app/admin/verify/laws/page.tsx`, `app/admin/verify/meeting-minutes/page.tsx`, `app/api/ai/analyze-municipality/route.ts`, `app/api/ai/chat/route.ts`, `app/api/ai/summarize-document/route.ts`, `app/auth/error/page.tsx`, `app/auth/login/page.tsx`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected

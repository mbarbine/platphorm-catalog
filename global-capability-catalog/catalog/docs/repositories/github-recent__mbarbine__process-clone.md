# mbarbine__process-clone

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

## Metadata

- ID: `github-recent__mbarbine__process-clone`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__process-clone`
- Remote: `git@github.com:mbarbine/process-clone.git`
- Primary language: TypeScript
- Frameworks: Next.js, Prisma, React, Tailwind CSS, Vite, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/ai/summarize/route.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `hooks/use-analytics.ts`, `lib/vercel-analytics.ts`, `package.json`, `server-tracking.ts`, `vercel-analytics.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/ai/summarize/route.ts`, `app/api/auth/[...nextauth]/route.ts`, `app/api/blob/upload/route.ts`, `app/api/health/route.ts`, `app/api/tracking/route.ts`, `app/api/turnstile/verify/route.ts`, `app/api/webhooks/email/route.ts`
- Tests: 3
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `api/socketio/route.ts`, `api/tracking/route.ts`, `app/api/auth/[...nextauth]/route.ts`, `app/api/health/route.ts`, `components/auth-provider.tsx`, `lib/auth.ts`, `middleware.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `actions/workflow-actions.ts`, `app/dashboard/workflows/[templateId]/page.tsx`, `app/dashboard/workflows/page.tsx`, `components/workflow-executor.tsx`, `components/workflow-input.tsx`, `components/workflow-library.tsx`, `components/workflow-template-card.tsx`, `components/workflow-validator.tsx`, `components/workflows/execute-template-button.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `DEPLOYMENT.md`, `docker-compose.yml`, `lib/neon.ts`, `package.json`, `postcss.config.mjs`, `prisma/schema.prisma`, `schema.prisma`, `scripts/deploy.js`, `vercel.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/dashboard/executions/[executionId]/page.tsx`, `app/dashboard/executions/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/settings/page.tsx`, `app/dashboard/workflows/[templateId]/page.tsx`, `app/dashboard/workflows/page.tsx`, `components/dashboard-header.tsx`, `components/dashboard-sidebar.tsx`, `components/execution-status-badge.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `prisma/schema.prisma`, `schema.prisma`
- Tests: 3
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `docker-compose.yml`, `Dockerfile`, `vercel.json`
- Tests: 3
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/blob/upload/route.ts`, `components/blob-uploader.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/email-intake.ts`, `lib/server-tracking.ts`, `package.json`, `ui/form.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/board/board-canvas.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### Google Integration

- ID: `integration.google`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `DEPLOYMENT.md`, `lib/auth.ts`, `lib/env.ts`, `package.json`, `scripts/deploy.js`, `server-tracking.ts`, `vercel.json`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Google integration.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/webhooks/email/route.ts`, `package.json`, `pnpm-lock.yaml`, `scripts/deploy.js`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `DEPLOYMENT.md`, `docker-compose.yml`, `lib/neon.ts`, `package.json`, `prisma/schema.prisma`, `schema.prisma`, `scripts/deploy.js`, `vercel.json`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/env.ts`, `lib/supabase-client.ts`, `lib/supabase-server.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/blob/upload/route.ts`, `app/deploy/page.tsx`, `app/deploy/server-actions.ts`, `app/layout.tsx`, `hooks/use-analytics.ts`, `lib/env.ts`, `lib/vercel-analytics.ts`, `package.json`, `pnpm-lock.yaml`, `vercel-analytics.ts`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `components/execution-log-view.tsx`, `components/integration-logos.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`, `ui/alert-dialog.tsx`, `ui/dialog.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/board/[boardId]/page.tsx`, `app/dashboard/executions/[executionId]/page.tsx`, `app/dashboard/executions/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/settings/page.tsx`, `app/dashboard/workflows/[templateId]/page.tsx`, `app/dashboard/workflows/page.tsx`, `app/deploy/page.tsx`, `app/files/page.tsx`, `app/signin/page.tsx`
- Tests: 3
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `actions/workflow-actions.ts`, `api/socketio/route.ts`, `api/tracking/route.ts`, `app/api/blob/upload/route.ts`, `app/api/health/route.ts`, `app/api/turnstile/verify/route.ts`, `app/api/webhooks/email/route.ts`, `app/deploy/server-actions.ts`, `app/signin/page.tsx`, `components/board/collaborative-board.tsx`, `components/env-diagnostics.tsx`, `hooks/use-analytics.ts`, `lib/auth.ts`, `lib/email-intake.ts`, `lib/neon.ts`, `lib/process-co-api.ts`, `lib/server-tracking.ts`, `lib/supabase-client.ts`, `lib/tracking.ts`, `lib/utils.ts`, `lib/wildduck-api.ts`, `middleware.ts`, `process-co-api.ts`, `scripts/deploy.js`, `server-tracking.ts`, `wildduck-api.ts`, `wildduck-enhanced.ts`
- Tests: 3
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`, `ui/label.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/dashboard.test.tsx`, `__tests__/sidebar.test.tsx`, `__tests__/workflows.test.ts`
- Tests: 3
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/auth-provider.tsx`, `components/auto-tooltips.tsx`, `components/blob-uploader.tsx`, `components/board-card.tsx`, `components/board-list.tsx`, `components/board/board-canvas.tsx`, `components/board/board-toolbar.tsx`, `components/board/collaborative-board.tsx`, `components/board/collaborators-list.tsx`, `components/board/comment-panel.tsx`, `components/board/connection-manager.tsx`, `components/board/miro-features.tsx`, `components/board/real-time-collaboration.tsx`, `components/board/template-selector.tsx`, `components/collaborative-board.tsx`, `components/cookie-consent.tsx`, `components/dashboard-header.tsx`, `components/dashboard-sidebar.tsx`, `components/editor/code-editor.tsx`, `components/env-diagnostics.tsx`, `components/error-boundary.tsx`, `components/execution-log-view.tsx`, `components/execution-status-badge.tsx`, `components/header.tsx`, `components/integration-logos.tsx`, `components/integrations/process-co-integration.tsx`, `components/landing/feature-section.tsx`, `components/theme-provider.tsx`, `components/turnstile.tsx`, `components/ui/accordion.tsx`
- Tests: 3
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/webhooks/email/route.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `actions/workflow-actions.ts`, `components/ui/chart.tsx`, `lib/client-analytics.ts`, `lib/github-integration.ts`, `lib/process-co-api.ts`, `lib/telemetry-client.ts`, `lib/utils.ts`, `lib/wildduck-api.ts`, `lib/wildduck-enhanced.ts`, `process-co-api.ts`, `scripts/deploy.js`, `ui/chart.tsx`, `webhook-management.tsx`, `wildduck-api.ts`, `wildduck-enhanced.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `actions/workflow-actions.ts`, `api/socketio/route.ts`, `api/tracking/route.ts`, `app/api/blob/upload/route.ts`, `app/api/health/route.ts`, `app/api/turnstile/verify/route.ts`, `app/api/webhooks/email/route.ts`, `app/deploy/server-actions.ts`, `app/signin/page.tsx`, `lib/auth.ts`, `lib/email-intake.ts`, `lib/neon.ts`, `lib/process-co-api.ts`, `lib/server-tracking.ts`, `lib/supabase-client.ts`, `lib/tracking.ts`, `lib/wildduck-api.ts`, `middleware.ts`, `process-co-api.ts`, `server-tracking.ts`, `wildduck-api.ts`, `wildduck-enhanced.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

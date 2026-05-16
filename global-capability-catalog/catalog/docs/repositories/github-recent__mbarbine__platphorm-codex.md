# mbarbine__platphorm-codex

Codex is the screenshot-backed, tool-aware narrative and catalog layer for the PlatPhormNews web mesh.

## Metadata

- ID: `github-recent__mbarbine__platphorm-codex`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-codex`
- Remote: `git@github.com:mbarbine/platphorm-codex.git`
- Primary language: TypeScript
- Frameworks: Cypress, Next.js, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `package.json`
- Tests: 10
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh-network/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/indexnow/route.ts`, `app/api/mcp/route.ts`, `app/api/network/register/route.ts`, `app/api/slides/route.ts`, `app/api/v1/browserops/capture/route.ts`, `app/api/v1/browserops/captures/[id]/route.ts`, `app/api/v1/chapters/[id]/route.ts`, `app/api/v1/chapters/route.ts`, `app/api/v1/dns/files/[fileId]/route.ts`, `app/api/v1/dns/files/[fileId]/stripes/route.ts`, `app/api/v1/dns/files/route.ts`, `app/api/v1/dns/jobs/[jobId]/route.ts`, `app/api/v1/dns/jobs/route.ts`, `app/api/v1/dns/zones/[zoneId]/route.ts`, `app/api/v1/dns/zones/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/inspect/runs/[id]/route.ts`, `app/api/v1/inspect/tool/[slug]/route.ts`, `app/api/v1/network/discovery-compliance/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/v1/network/graph/sync/route.ts`, `app/api/v1/network/route-compliance/route.ts`, `app/api/v1/network/route.ts`, `app/api/v1/network/sites/route.ts`, `app/api/v1/network/trusted-domains/route.ts`, `app/api/v1/slides/[id]/route.ts`, `app/api/v1/slides/route.ts`
- Tests: 10
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/codex/auth.ts`, `package.json`
- Tests: 10
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh-network/route.ts`, `app/api/v1/dns/jobs/[jobId]/route.ts`, `app/api/v1/dns/jobs/route.ts`, `app/dns/jobs/page.tsx`, `app/jobs/page.tsx`, `components/dns/jobs-list.tsx`
- Tests: 10
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `docs/CINEMATIC_SCROLL_ENHANCEMENT_PLAN.md`, `docs/SLIDES_PLATFORM_ARCHITECTURE.md`, `docs/SLIDES_PLATFORM_SPEC.md`, `docs/SLIDES_ROADMAP.md`, `package.json`, `postcss.config.mjs`
- Tests: 10
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/dns/dns-dashboard.tsx`
- Tests: 10
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `components/seo/json-ld.tsx`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 10
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `config/slideshow.schema.ts`, `lib/codex/schema.ts`, `package.json`, `scripts/001_create_schema.sql`
- Tests: 10
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 10
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/dns/files/upload/page.tsx`, `components/dns/file-uploader.tsx`
- Tests: 10
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/dns/zone-form.tsx`, `components/ui/form.tsx`, `docs/SLIDES_PLATFORM_ARCHITECTURE.md`, `docs/SLIDES_PLATFORM_SPEC.md`, `package.json`
- Tests: 10
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/routes.test.ts`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/api/cron/refresh-network/route.ts`, `cypress/e2e/cinematic-slideshow.cy.ts`, `lib/codex/auth.ts`, `lib/codex/discovery.ts`, `package.json`
- Tests: 10
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `package.json`
- Tests: 10
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Redis Integration

- ID: `integration.redis`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `package.json`
- Tests: 10
- LLMs context: none detected

Repository has source-backed indicators for a Redis integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/supabase/client.ts`, `lib/supabase/server.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 10
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `package.json`
- Tests: 10
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `lib/codex/mcp.ts`, `package.json`
- Tests: 10
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/trace/spans/route.ts`, `components/codex/tool-catalog.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 10
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/cinematic-scroll-v2/page.tsx`, `app/dns/files/[fileId]/page.tsx`, `app/dns/files/page.tsx`, `app/dns/files/upload/page.tsx`, `app/dns/jobs/page.tsx`, `app/dns/page.tsx`, `app/dns/zones/new/page.tsx`, `app/dns/zones/page.tsx`, `app/faq/page.tsx`, `app/jobs/page.tsx`, `app/network/[siteId]/page.tsx`, `app/network/page.tsx`, `app/roadmap/page.tsx`, `app/slides/page.tsx`, `app/tools/[slug]/page.tsx`, `app/tools/page.tsx`
- Tests: 10
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/routes.test.ts`, `app/api/cron/refresh-network/route.ts`, `app/api/health/route.ts`, `app/api/indexnow/route.ts`, `app/api/v1/dns/zones/[zoneId]/route.ts`, `app/api/v1/dns/zones/route.ts`, `app/cinematic-scroll-v2/scroll-progress.tsx`, `cypress.config.ts`, `lib/codex/auth.ts`, `lib/codex/storage.ts`, `lib/supabase/client.ts`, `lib/supabase/server.ts`
- Tests: 10
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 10
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/routes.test.ts`, `__tests__/components/cinematic-slideshow.test.tsx`, `__tests__/mcp/client.test.ts`, `__tests__/scroll-engine/hooks.test.ts`, `__tests__/scroll-engine/interpolators.test.ts`, `__tests__/scroll-engine/scroll-engine.test.ts`, `__tests__/scroll-engine/section-manager.test.ts`, `cypress.config.ts`, `cypress/e2e/cinematic-slideshow.cy.ts`, `cypress/support/e2e.ts`
- Tests: 10
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/cinematic-slideshow.test.tsx`, `components/cinematic-scroll/announcement-section.tsx`, `components/cinematic-scroll/hero-section.tsx`, `components/cinematic-scroll/masked-text-section.tsx`, `components/cinematic-scroll/narrative-section.tsx`, `components/cinematic-scroll/scroll-section.tsx`, `components/codex/tool-catalog.tsx`, `components/cursor/precision-cursor.tsx`, `components/dns/dns-dashboard.tsx`, `components/dns/dns-header.tsx`, `components/dns/dns-nav.tsx`, `components/dns/file-detail.tsx`, `components/dns/file-uploader.tsx`, `components/dns/files-list.tsx`, `components/dns/jobs-list.tsx`, `components/dns/zone-form.tsx`, `components/dns/zones-list.tsx`, `components/network/network-categories.tsx`, `components/network/network-cta.tsx`, `components/network/network-directory.tsx`, `components/network/network-footer.tsx`, `components/network/network-hero.tsx`, `components/network/network-nav.tsx`, `components/network/network-showcase.tsx`, `components/network/network-stats.tsx`, `components/network/site-detail.tsx`, `components/network/site-icon.tsx`, `components/seo/json-ld.tsx`, `components/slides/cinematic-slides.tsx`, `components/ui/accordion.tsx`
- Tests: 10
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/api/v1/dns/files/route.ts`, `app/feed.xml/route.ts`, `app/jobs/page.tsx`, `app/slides/page.tsx`, `components/dns/file-detail.tsx`, `components/dns/zone-form.tsx`, `components/seo/json-ld.tsx`, `components/ui/chart.tsx`, `hooks/use-network-data.ts`, `lib/dns/cloudflare.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/api/routes.test.ts`, `app/api/cron/refresh-network/route.ts`, `app/api/health/route.ts`, `app/api/indexnow/route.ts`, `app/api/v1/dns/zones/[zoneId]/route.ts`, `app/api/v1/dns/zones/route.ts`, `lib/codex/auth.ts`, `lib/supabase/client.ts`, `lib/supabase/server.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

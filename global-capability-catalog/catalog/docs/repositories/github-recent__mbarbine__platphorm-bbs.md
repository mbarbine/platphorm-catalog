# mbarbine__platphorm-bbs

PlatPhorm BBS is the canonical public bulletin board and retro terminal community layer for the PlatPhormNews web mesh.

## Metadata

- ID: `github-recent__mbarbine__platphorm-bbs`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-bbs`
- Remote: `git@github.com:mbarbine/platphorm-bbs.git`
- Primary language: TypeScript
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
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/api/chat/[roomId]/messages/route.ts`, `app/api/chat/[roomId]/route.ts`, `app/api/chat/rooms/route.ts`, `app/api/v1/chat/rooms/[roomId]/messages/route.ts`, `app/api/v1/chat/rooms/route.ts`, `app/api/v1/chat/route.ts`, `app/chat/page.tsx`, `components/chat/chat-interface.tsx`, `components/chat/chat-room-list.tsx`, `components/chat/chat-room.tsx`, `components/chat/chat-user-list.tsx`, `lib/bbs/model.ts`
- Tests: 7
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/v1/games/[slug]/scores/route.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/announcements/route.ts`, `app/api/auth/ip/route.ts`, `app/api/auth/logout/route.ts`, `app/api/auth/user/route.ts`, `app/api/boards/route.ts`, `app/api/chat/[roomId]/messages/route.ts`, `app/api/chat/[roomId]/route.ts`, `app/api/chat/rooms/route.ts`, `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/file-areas/route.ts`, `app/api/files/areas/route.ts`, `app/api/files/delete/route.ts`, `app/api/files/get/route.ts`, `app/api/files/upload/route.ts`, `app/api/games/route.ts`, `app/api/health/route.ts`, `app/api/init/route.ts`, `app/api/mcp/route.ts`, `app/api/telnet/ws/route.ts`, `app/api/v1/activity/route.ts`, `app/api/v1/announcements/route.ts`, `app/api/v1/ascii/convert/route.ts`, `app/api/v1/boards/[slug]/route.ts`, `app/api/v1/boards/[slug]/threads/route.ts`, `app/api/v1/boards/route.ts`, `app/api/v1/chat/rooms/[roomId]/messages/route.ts`, `app/api/v1/chat/rooms/route.ts`, `app/api/v1/chat/route.ts`, `app/api/v1/files/[id]/download/route.ts`
- Tests: 7
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/ip/route.ts`, `app/api/auth/logout/route.ts`, `app/api/auth/user/route.ts`, `app/auth/challenge/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up/page.tsx`, `lib/actions/auth.ts`, `lib/bbs/auth.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `scripts/migrate.mjs`, `scripts/setup-db.mjs`
- Tests: 7
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`
- Tests: 7
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/v1/posts/route.ts`, `app/api/v1/threads/[id]/posts/route.ts`, `docs/API.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN.md`, `docs/QUICKSTART.md`, `docs/ROADMAP.md`, `docs/TESTING.md`, `lib/bbs/content.ts`, `lib/bbs/discovery.ts`, `package.json`, `postcss.config.mjs`
- Tests: 7
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/sysop/sysop-dashboard.tsx`
- Tests: 7
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/files/[id]/download/route.ts`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/001_schema.sql`
- Tests: 7
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`, `vercel.json`
- Tests: 7
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/terminal/page.tsx`, `app/terms/page.tsx`, `components/bbs/terminal-panel.tsx`, `components/bbs/terminal-welcome.tsx`, `components/telnet/terminal-emulator.tsx`
- Tests: 7
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/files/upload/route.ts`, `app/api/v1/files/upload/route.ts`, `components/files/file-upload.tsx`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/games/route.ts`, `app/api/v1/games/[slug]/route.ts`, `app/api/v1/games/[slug]/scores/route.ts`, `app/api/v1/games/route.ts`, `app/games/[id]/page.tsx`, `app/games/page.tsx`, `components/games/games-hub.tsx`
- Tests: 7
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/bbs/model.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/announcements/page.tsx`, `app/api/docs/route.ts`, `app/api/telnet/ws/route.ts`, `app/api/v1/messages/route.ts`, `app/games/[id]/page.tsx`, `app/privacy/page.tsx`, `lib/bbs/auth.ts`, `lib/bbs/discovery.ts`, `package.json`, `README.md`
- Tests: 7
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/bbs/content.ts`, `lib/bbs/discovery.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Redis Integration

- ID: `integration.redis`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/redis.test.ts`, `lib/redis.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 7
- LLMs context: none detected

Repository has source-backed indicators for a Redis integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `docs/QUICKSTART.md`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `package.json`, `pnpm-lock.yaml`, `scripts/migrate.mjs`, `scripts/setup-db.mjs`, `TESTING_GUIDE.md`
- Tests: 7
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/files/delete/route.ts`, `app/layout.tsx`, `lib/bbs/discovery.ts`, `lib/bbs/model.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 7
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `lib/bbs/mcp.ts`, `package.json`
- Tests: 7
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/logout/route.ts`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/auth/login/page.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/announcements/[id]/page.tsx`, `app/announcements/page.tsx`, `app/auth/challenge/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up/page.tsx`, `app/boards/[slug]/[topicSlug]/page.tsx`, `app/boards/[slug]/page.tsx`, `app/boards/[slug]/threads/[id]/page.tsx`, `app/boards/page.tsx`, `app/chat/page.tsx`, `app/faq/page.tsx`, `app/files/page.tsx`, `app/games/[id]/page.tsx`, `app/games/page.tsx`, `app/messages/page.tsx`, `app/portal/page.tsx`, `app/privacy/page.tsx`, `app/search/page.tsx`, `app/settings/page.tsx`, `app/sysop/announcements/new/page.tsx`, `app/sysop/page.tsx`, `app/telnet/page.tsx`, `app/terminal/page.tsx`, `app/terms/page.tsx`
- Tests: 7
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/search/route.ts`, `app/search/page.tsx`
- Tests: 7
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/layout.tsx`, `lib/actions/auth.ts`, `lib/bbs/auth.ts`, `lib/bbs/discovery.ts`, `lib/bbs/model.ts`, `lib/redis.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `scripts/migrate.mjs`, `scripts/setup-db.mjs`
- Tests: 7
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 7
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `e2e/bbs.spec.ts`, `lib/auth/fingerprint.test.ts`, `lib/bbs/content.test.ts`, `lib/bbs/discovery.test.ts`, `lib/bbs/mcp.test.ts`, `lib/redis.test.ts`, `playwright.config.ts`
- Tests: 7
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/bbs/announcements.tsx`, `components/bbs/footer.tsx`, `components/bbs/online-users.tsx`, `components/bbs/quick-stats.tsx`, `components/bbs/recent-activity.tsx`, `components/bbs/services-grid.tsx`, `components/bbs/shell.tsx`, `components/bbs/sidebar.tsx`, `components/bbs/terminal-panel.tsx`, `components/bbs/terminal-welcome.tsx`, `components/bbs/topbar.tsx`, `components/boards/board-detail.tsx`, `components/boards/boards-header.tsx`, `components/boards/boards-list.tsx`, `components/boards/boards-stats.tsx`, `components/boards/topic-view.tsx`, `components/boards/topics-list.tsx`, `components/chat/chat-interface.tsx`, `components/chat/chat-room-list.tsx`, `components/chat/chat-room.tsx`, `components/chat/chat-user-list.tsx`, `components/database-initializer.tsx`, `components/files/file-upload.tsx`, `components/files/files-header.tsx`, `components/files/files-library.tsx`, `components/games/games-hub.tsx`, `components/locale-switcher.tsx`, `components/sysop/sysop-dashboard.tsx`, `components/telnet/terminal-emulator.tsx`, `components/theme-provider.tsx`
- Tests: 7
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/faq/page.tsx`, `app/layout.tsx`, `components/bbs/services-grid.tsx`, `components/boards/board-detail.tsx`, `components/boards/topic-view.tsx`, `components/boards/topics-list.tsx`, `components/files/files-library.tsx`, `components/telnet/terminal-emulator.tsx`, `components/ui/chart.tsx`, `lib/bbs/security.ts`, `lib/hooks/use-data.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`, `lib/bbs/auth.ts`, `lib/bbs/discovery.ts`, `lib/bbs/model.ts`, `lib/redis.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `scripts/migrate.mjs`, `scripts/setup-db.mjs`

## Gaps

- CI workflows not detected
- LLMs context files not detected

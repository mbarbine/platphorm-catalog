# mbarbine__platphorm-quake

> Quake Arena–style first-person shooter running entirely in your browser. No downloads. No plugins. Just frags.

## Metadata

- ID: `github-recent__mbarbine__platphorm-quake`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-quake`
- Remote: `git@github.com:mbarbine/platphorm-quake.git`
- Primary language: TypeScript
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
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `components/game/ai/bot-manager.tsx`, `lib/model/quake-model.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/game/hud/scoreboard.test.tsx`, `components/game/hud/scoreboard.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### OpenAPI Documentation

- ID: `api.openapi-docs`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `app/api/docs/openapi.json`
- Tests: 30
- LLMs context: none detected

Repository includes OpenAPI or Swagger documentation files.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/errors/route.ts`, `app/api/events/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/multiplayer/sessions/[sessionId]/events/route.ts`, `app/api/multiplayer/sessions/[sessionId]/join/route.ts`, `app/api/multiplayer/sessions/[sessionId]/leave/route.ts`, `app/api/multiplayer/sessions/[sessionId]/route.ts`, `app/api/v1/bots/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/game/config/route.ts`, `app/api/v1/game/manifest/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/leaderboard/route.ts`, `app/api/v1/maps/[id]/route.ts`, `app/api/v1/maps/route.ts`, `app/api/v1/matches/[id]/events/route.ts`, `app/api/v1/matches/[id]/join/route.ts`, `app/api/v1/matches/[id]/leave/route.ts`, `app/api/v1/matches/[id]/record/route.ts`, `app/api/v1/matches/[id]/route.ts`, `app/api/v1/matches/route.ts`, `app/api/v1/model/status/route.ts`, `app/api/v1/modes/route.ts`, `app/api/v1/performance/status/route.ts`, `app/api/v1/player/local-schema/route.ts`, `app/api/v1/practice/[id]/record/route.ts`, `app/api/v1/practice/[id]/route.ts`, `app/api/v1/practice/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/multiplayer/sessions/[sessionId]/events/route.ts`, `app/api/multiplayer/sessions/[sessionId]/join/route.ts`, `app/api/multiplayer/sessions/[sessionId]/leave/route.ts`, `app/api/multiplayer/sessions/[sessionId]/route.ts`, `lib/multiplayer/session-store.ts`, `lib/platform/auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/app/api/docs.test.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `components/content/quake-page-shell.tsx`, `lib/game/arena-state.ts`, `lib/game/catalog.ts`, `lib/platform/metadata.ts`, `package.json`, `postcss.config.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/model/status/route.ts`, `app/api/v1/performance/status/route.ts`, `app/api/v1/webhooks/status/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/llms-index.json/route.ts`, `package.json`, `tsconfig.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty high
- Source paths: `package.json`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/terms/page.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/leaderboard/route.ts`, `app/api/v1/performance/status/route.ts`, `app/leaderboard/page.tsx`, `components/leaderboard/leaderboard-table.tsx`, `components/ui/form.tsx`, `lib/platform/auth.ts`, `lib/platform/metadata.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/game/end-screen.test.tsx`, `__tests__/components/game/game-canvas.test.tsx`, `__tests__/components/game/hud/crosshair.test.tsx`, `__tests__/components/game/hud/hud-overlay.test.tsx`, `__tests__/components/game/hud/kill-feed.test.tsx`, `__tests__/components/game/hud/minimap.test.tsx`, `__tests__/components/game/hud/scoreboard.test.tsx`, `__tests__/components/game/hud/screen-effects.test.tsx`, `__tests__/components/game/mobile/mobile-controller.test.tsx`, `__tests__/components/game/player-controller.test.tsx`, `__tests__/e2e/multiplayer.spec.ts`, `app/api/multiplayer/sessions/[sessionId]/events/route.ts`, `app/api/multiplayer/sessions/[sessionId]/join/route.ts`, `app/api/multiplayer/sessions/[sessionId]/leave/route.ts`, `app/api/multiplayer/sessions/[sessionId]/route.ts`, `app/api/v1/game/config/route.ts`, `app/api/v1/game/manifest/route.ts`, `app/api/v1/player/local-schema/route.ts`, `components/game/ai/bot-manager.tsx`, `components/game/arena-map.tsx`, `components/game/end-screen.tsx`, `components/game/environment/jump-pad.tsx`, `components/game/environment/kill-volume.tsx`, `components/game/environment/skybox.tsx`, `components/game/environment/teleporter.tsx`, `components/game/game-canvas.tsx`, `components/game/hud/crosshair.tsx`, `components/game/hud/hud-overlay.tsx`, `components/game/hud/kill-feed.tsx`, `components/game/hud/minimap.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/app/api/docs.test.ts`, `__tests__/app/api/events.test.ts`, `__tests__/app/api/matches.test.ts`, `__tests__/app/api/v1/catalog-routes.test.ts`, `__tests__/app/api/v1/servers/[id]/route.test.ts`, `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/llms-index.json/route.ts`, `lib/platform/auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `lib/game/arena-state.ts`, `lib/game/catalog.ts`, `lib/platform/metadata.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Redis Integration

- ID: `integration.redis`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/e2e/multiplayer.spec.ts`, `lib/multiplayer/session-store.ts`, `lib/platform/metadata.ts`, `package.json`, `pnpm-lock.yaml`, `README.md`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Redis integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/app/api/mcp/route.test.ts`, `app/api/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/app/api/v1/catalog-routes.test.ts`, `__tests__/components/layout/quake-logo.test.tsx`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/layout/quake-logo.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/game/catalog.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/disclaimer/page.tsx`, `app/faq/page.tsx`, `app/leaderboard/page.tsx`, `app/maps/[id]/page.tsx`, `app/maps/page.tsx`, `app/matches/page.tsx`, `app/modes/page.tsx`, `app/play/page.tsx`, `app/privacy/page.tsx`, `app/servers/page.tsx`, `app/settings/page.tsx`, `app/stats/page.tsx`, `app/terms/page.tsx`, `app/weapons/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/app/api/matches.test.ts`, `__tests__/app/api/v1/servers/[id]/route.test.ts`, `__tests__/app/api/webhooks.test.ts`, `__tests__/e2e/multiplayer.spec.ts`, `app/api/health/route.ts`, `app/api/webhooks/route.ts`, `app/llms-index.json/route.ts`, `instrumentation.ts`, `lib/game/arena-state.ts`, `lib/game/audio-engine.ts`, `lib/model/quake-model.ts`, `lib/multiplayer/session-store.ts`, `lib/platform/metadata.ts`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/app/.well-known/mcp-json.test.ts`, `__tests__/app/api/docs.test.ts`, `__tests__/app/api/errors.test.ts`, `__tests__/app/api/events.test.ts`, `__tests__/app/api/health.test.ts`, `__tests__/app/api/matches.test.ts`, `__tests__/app/api/mcp/route.test.ts`, `__tests__/app/api/multiplayer/sessions.test.ts`, `__tests__/app/api/v1/catalog-routes.test.ts`, `__tests__/app/api/v1/leaderboard/route.test.ts`, `__tests__/app/api/v1/servers/[id]/route.test.ts`, `__tests__/app/api/v1/servers/route.test.ts`, `__tests__/app/api/v1/stats/route.test.ts`, `__tests__/app/api/webhooks.test.ts`, `__tests__/app/breadcrumb-jsonld.test.ts`, `__tests__/app/faq/page.test.tsx`, `__tests__/app/leaderboard/page.test.tsx`, `__tests__/app/llms-index.json/route.test.ts`, `__tests__/app/llms.txt/route.test.ts`, `__tests__/app/page.test.tsx`, `__tests__/app/robots.test.ts`, `__tests__/app/settings/page.test.tsx`, `__tests__/app/sitemap.test.ts`, `__tests__/components/game/end-screen.test.tsx`, `__tests__/components/game/game-canvas.test.tsx`, `__tests__/components/game/hud/crosshair.test.tsx`, `__tests__/components/game/hud/hud-overlay.test.tsx`, `__tests__/components/game/hud/kill-feed.test.tsx`, `__tests__/components/game/hud/minimap.test.tsx`, `__tests__/components/game/hud/scoreboard.test.tsx`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/game/end-screen.test.tsx`, `__tests__/components/game/game-canvas.test.tsx`, `__tests__/components/game/hud/crosshair.test.tsx`, `__tests__/components/game/hud/hud-overlay.test.tsx`, `__tests__/components/game/hud/kill-feed.test.tsx`, `__tests__/components/game/hud/minimap.test.tsx`, `__tests__/components/game/hud/scoreboard.test.tsx`, `__tests__/components/game/hud/screen-effects.test.tsx`, `__tests__/components/game/mobile/mobile-controller.test.tsx`, `__tests__/components/game/player-controller.test.tsx`, `__tests__/components/landing/hero-section.test.tsx`, `__tests__/components/layout/footer.test.tsx`, `__tests__/components/layout/quake-logo.test.tsx`, `__tests__/components/layout/top-bar.test.tsx`, `__tests__/components/server-browser/server-list.test.tsx`, `__tests__/components/settings/settings-panel.test.tsx`, `__tests__/components/settings/settings-sections.test.tsx`, `__tests__/components/settings/ui-components.test.tsx`, `components/content/quake-page-shell.tsx`, `components/game/ai/bot-manager.tsx`, `components/game/arena-map.tsx`, `components/game/end-screen.tsx`, `components/game/environment/jump-pad.tsx`, `components/game/environment/kill-volume.tsx`, `components/game/environment/skybox.tsx`, `components/game/environment/teleporter.tsx`, `components/game/game-canvas.tsx`, `components/game/hud/crosshair.tsx`, `components/game/hud/hud-overlay.tsx`, `components/game/hud/kill-feed.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/app/api/webhooks.test.ts`, `app/api/events/route.ts`, `app/api/multiplayer/sessions/[sessionId]/events/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/matches/[id]/events/route.ts`, `app/api/v1/webhooks/route.ts`, `app/api/v1/webhooks/status/route.ts`, `app/api/webhooks/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `__tests__/app/breadcrumb-jsonld.test.ts`, `app/faq/page.tsx`, `app/feed.xml/route.ts`, `app/layout.tsx`, `components/seo/breadcrumb-jsonld.tsx`, `components/server-browser/server-list.tsx`, `components/ui/chart/chart-style.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/app/api/matches.test.ts`, `__tests__/app/api/v1/servers/[id]/route.test.ts`, `__tests__/app/api/webhooks.test.ts`, `app/api/webhooks/route.ts`, `app/llms-index.json/route.ts`, `lib/game/arena-state.ts`, `lib/multiplayer/session-store.ts`, `lib/platform/metadata.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

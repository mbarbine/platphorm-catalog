# mbarbine__platphormnews-www-prod

Boop Beep...

## Metadata

- ID: `github-recent__mbarbine__platphormnews-www-prod`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphormnews-www-prod`
- Remote: `git@github.com:mbarbine/platphormnews-www-prod.git`
- Primary language: TypeScript
- Frameworks: React, Svelte, Tailwind CSS, Vite, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `src/routes/api/v1/reports/decks/+server.ts`, `src/routes/api/v1/reports/docs/+server.ts`, `src/routes/api/v1/reports/sheets/+server.ts`, `vite.config.ts`
- Tests: 24
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `src/routes/.well-known/agent-config.json/+server.ts`, `src/routes/.well-known/agent.json/+server.ts`, `src/routes/.well-known/agents.json/+server.ts`, `src/routes/.well-known/mcp.json/+server.ts`, `src/routes/.well-known/security.txt/+server.ts`, `src/routes/.well-known/trust-policy.json/+server.ts`, `src/routes/.well-known/trust.json/+server.ts`, `src/routes/[key].txt/+server.ts`, `src/routes/api/auth/+server.ts`, `src/routes/api/capabilities/+server.ts`, `src/routes/api/cron/outreach/+server.ts`, `src/routes/api/cron/refresh/+server.ts`, `src/routes/api/docs/+server.ts`, `src/routes/api/domains/+server.ts`, `src/routes/api/dynamodb/+server.ts`, `src/routes/api/faq/+server.ts`, `src/routes/api/games/+server.ts`, `src/routes/api/hackernews/+server.ts`, `src/routes/api/health/+server.ts`, `src/routes/api/mcp/+server.ts`, `src/routes/api/mcp/client/+server.ts`, `src/routes/api/network/graph/+server.ts`, `src/routes/api/network/sites/+server.ts`, `src/routes/api/news/+server.ts`, `src/routes/api/og/+server.ts`, `src/routes/api/platform/+server.ts`, `src/routes/api/quake/+server.ts`, `src/routes/api/v1/atom/+server.ts`, `src/routes/api/v1/capabilities/+server.ts`, `src/routes/api/v1/categories/+server.ts`
- Tests: 24
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `src/components/Auth.svelte`, `src/routes/api/auth/+server.ts`, `src/routes/login/+page.svelte`
- Tests: 24
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `src/lib/dynamodb.ts`, `src/routes/api/webhooks/+server.ts`
- Tests: 24
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/routes/api/cron/outreach/+server.ts`, `src/routes/api/cron/refresh/+server.ts`, `src/routes/jobs/+page.svelte`, `src/routes/jobs/+page.ts`
- Tests: 24
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/routes/api/docs/+page.svelte`, `src/routes/api/docs/+server.ts`, `src/routes/api/v1/docs/+server.ts`, `src/routes/api/v1/reports/docs/+server.ts`, `src/routes/blog/ph3ar/+page.svelte`, `static/blog-post-ph3ar-2026-02-19.md`
- Tests: 24
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `src/routes/api/webhooks/+server.ts`
- Tests: 24
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `src/routes/.well-known/agent-config.json/+server.ts`, `src/routes/.well-known/agent.json/+server.ts`, `src/routes/.well-known/agents.json/+server.ts`, `src/routes/.well-known/mcp.json/+server.ts`, `src/routes/.well-known/trust-policy.json/+server.ts`, `src/routes/.well-known/trust.json/+server.ts`, `src/routes/atom.xml/+server.ts`, `src/routes/feed.xml/+server.ts`, `src/routes/llms-index.json/+server.ts`, `src/routes/rss.xml/+server.ts`, `src/routes/sitemap-index.xml/+server.ts`, `src/routes/sitemap-main.xml/+server.ts`, `src/routes/sitemap-network.xml/+server.ts`, `src/routes/sitemap.xml/+server.ts`, `tsconfig.json`, `vercel.json`
- Tests: 24
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `compose.yaml`, `Dockerfile`, `vercel.json`
- Tests: 24
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/lib/outreach.ts`
- Tests: 24
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `package.json`, `src/components/ContactCallout.svelte`, `src/lib/platform-contract.ts`, `src/routes/api/platform/+server.ts`, `src/routes/platform/+page.svelte`, `src/routes/platform/+page.ts`
- Tests: 24
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/game/hud/minimap.tsx`, `components/game/weapons/projectile-manager.tsx`, `src/routes/api/games/+server.ts`, `src/routes/games/+page.svelte`, `src/routes/games/+page.ts`
- Tests: 24
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `pnpm-lock.yaml`, `src/lib/dynamodb.ts`
- Tests: 24
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `src/lib/__tests__/mcp.test.ts`, `src/lib/__tests__/phase1-root.test.ts`, `src/lib/platform-contract.ts`, `src/lib/root-discovery.ts`, `src/routes/.well-known/agent.json/+server.ts`, `src/routes/.well-known/mcp.json/+server.ts`, `src/routes/.well-known/trust-policy.json/+server.ts`, `src/routes/+layout.svelte`
- Tests: 24
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Slack Integration

- ID: `integration.slack`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `src/routes/api/webhooks/+server.ts`
- Tests: 24
- LLMs context: none detected

Repository has source-backed indicators for a Slack integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `pnpm-lock.yaml`, `README.md`, `src/lib/dynamodb.ts`, `src/lib/vercel-domains.ts`, `src/routes/+layout.svelte`, `src/routes/api/domains/+server.ts`, `src/routes/api/health/+server.ts`, `src/routes/api/mcp/+server.ts`, `static/blog-post-ph3ar-2026-02-19.md`, `svelte.config.js`, `vite.config.ts`
- Tests: 24
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.vscode/mcp.json`, `package.json`, `src/routes/.well-known/mcp.json/+server.ts`, `src/routes/api/mcp/+server.ts`, `src/routes/api/mcp/client/+server.ts`, `src/routes/api/v1/mcp/+server.ts`, `src/routes/api/v1/network/mcp-enabled/+server.ts`
- Tests: 24
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/routes/api/health/+server.ts`, `src/routes/api/mcp/+server.ts`, `src/routes/api/v1/health/+server.ts`, `src/routes/blog/ph3ar/+page.svelte`, `src/routes/login/+page.svelte`, `static/blog-post-ph3ar-2026-02-19.md`
- Tests: 24
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `src/routes/api/docs/+page.svelte`, `src/routes/ask/+page.svelte`, `src/routes/ask/+page.ts`, `src/routes/best/+page.svelte`, `src/routes/best/+page.ts`, `src/routes/blog/ph3ar/+page.svelte`, `src/routes/faq/+page.svelte`, `src/routes/games/+page.svelte`, `src/routes/games/+page.ts`, `src/routes/jobs/+page.svelte`, `src/routes/jobs/+page.ts`, `src/routes/login/+page.svelte`, `src/routes/platform/+page.svelte`, `src/routes/platform/+page.ts`, `src/routes/show/+page.svelte`, `src/routes/show/+page.ts`, `src/routes/signup/+page.svelte`, `src/routes/story/[id]/+page.svelte`, `src/routes/top/+page.svelte`, `src/routes/top/+page.ts`
- Tests: 24
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/routes/api/v1/search/+server.ts`
- Tests: 24
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `src/app.html`, `src/lib/dynamodb.ts`, `src/lib/outreach.ts`, `src/lib/platform-contract.ts`, `src/lib/vercel-domains.ts`, `src/routes/[key].txt/+server.ts`, `src/routes/api/cron/outreach/+server.ts`, `src/routes/api/cron/refresh/+server.ts`, `src/routes/api/dynamodb/+server.ts`, `src/routes/api/health/+server.ts`, `src/routes/api/mcp/+server.ts`, `src/routes/api/webhooks/+server.ts`, `vite.config.ts`
- Tests: 24
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `components/game/weapons/__tests__/projectile-manager.test.ts`, `playwright.config.ts`, `src/components/settings/ui-components.test.tsx`, `src/lib/__tests__/docs-news.test.ts`, `src/lib/__tests__/faq.test.ts`, `src/lib/__tests__/games.test.ts`, `src/lib/__tests__/health.test.ts`, `src/lib/__tests__/hn.test.ts`, `src/lib/__tests__/hooks.server.test.ts`, `src/lib/__tests__/i18n.test.ts`, `src/lib/__tests__/jsonld.test.ts`, `src/lib/__tests__/mcp-client.test.ts`, `src/lib/__tests__/mcp.test.ts`, `src/lib/__tests__/network-graph.test.ts`, `src/lib/__tests__/news-api.test.ts`, `src/lib/__tests__/phase1-root.test.ts`, `src/lib/__tests__/root-feed-sources.test.ts`, `src/lib/__tests__/sanitize.test.ts`, `src/lib/__tests__/schema.test.ts`, `src/lib/__tests__/seo.test.ts`, `src/lib/__tests__/sitemap-discovery.test.ts`, `src/lib/__tests__/sitemap.test.ts`, `src/lib/game/audio-engine.test.ts`, `tests/e2e/root.spec.ts`
- Tests: 24
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/game/hud/minimap.tsx`, `components/game/weapons/projectile-manager.tsx`, `src/components/Auth.svelte`, `src/components/ContactCallout.svelte`, `src/components/Footer.svelte`, `src/components/Header.svelte`, `src/components/LanguageSwitcher.svelte`, `src/components/NewsHeader.svelte`, `src/components/settings/ui-components.test.tsx`, `src/components/settings/ui-components.tsx`
- Tests: 24
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/routes/api/v1/webhooks/+server.ts`, `src/routes/api/webhooks/+server.ts`
- Tests: 24
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `pre_commit.js`, `src/lib/outreach.ts`, `src/lib/sitemap-discovery.ts`, `src/routes/api/games/+server.ts`, `src/routes/api/hackernews/+server.ts`, `src/routes/api/quake/+server.ts`, `src/routes/atom.xml/+server.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `src/lib/dynamodb.ts`, `src/lib/outreach.ts`, `src/lib/platform-contract.ts`, `src/lib/vercel-domains.ts`, `src/routes/[key].txt/+server.ts`, `src/routes/api/cron/outreach/+server.ts`, `src/routes/api/cron/refresh/+server.ts`, `src/routes/api/webhooks/+server.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

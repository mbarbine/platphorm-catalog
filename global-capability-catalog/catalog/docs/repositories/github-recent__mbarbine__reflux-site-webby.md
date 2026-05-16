# mbarbine__reflux-site-webby

Reflux Landing Page

## Metadata

- ID: `github-recent__mbarbine__reflux-site-webby`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__reflux-site-webby`
- Remote: `git@github.com:mbarbine/reflux-site-webby.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/catalog/[slug]/route.ts`, `app/api/catalog/route.ts`, `app/api/docs/route.ts`, `app/api/etsy/sync/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/network/graph/route.ts`, `app/api/search/route.ts`, `app/api/spotify/authorize/route.ts`, `app/api/spotify/callback/route.ts`, `app/api/spotify/token/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/zapier/route.ts`
- Tests: 1
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/spotify/authorize/route.ts`, `app/api/spotify/callback/route.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/etsy/sync/route.ts`, `app/api/spotify/authorize/route.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/[lang]/docs/page.tsx`, `app/api/docs/route.ts`, `package.json`, `postcss.config.js`
- Tests: 1
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/etsy/sync/route.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/mcp/server-card.json/route.ts`, `app/llms-index.json/route.ts`, `components/json-ld.tsx`, `package.json`, `tsconfig.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/product-card.tsx`
- Tests: 1
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/spotify-player.tsx`
- Tests: 1
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`, `public/.well-known/mcp.json`
- Tests: 1
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/catalog/[slug]/route.ts`, `app/api/catalog/route.ts`, `app/api/health/route.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[lang]/docs/page.tsx`, `app/[lang]/faq/page.tsx`, `app/[lang]/music/page.tsx`, `app/[lang]/page.tsx`, `app/[lang]/shop/[slug]/page.tsx`, `app/[lang]/shop/page.tsx`, `app/[lang]/story/page.tsx`
- Tests: 1
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/search/route.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/.well-known/mcp/server-card.json/route.ts`, `app/api/etsy/sync/route.ts`, `app/api/mcp/route.ts`, `app/api/network/graph/route.ts`, `app/llms-full.txt/route.ts`, `app/llms-index.json/route.ts`, `app/llms.txt/route.ts`, `app/robots.ts`, `app/sitemap.ts`, `lib/etsy.ts`, `lib/spotify.ts`
- Tests: 1
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/manifest.webmanifest`, `public/rss.xml`
- Tests: 1
- LLMs context: none detected

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `tests/api.test.ts`
- Tests: 1
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/breadcrumbs.tsx`, `components/footer.tsx`, `components/header.tsx`, `components/json-ld.tsx`, `components/product-card.tsx`, `components/shop-filters.tsx`, `components/shop-grid.tsx`, `components/spotify-player.tsx`
- Tests: 1
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/zapier/route.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `components/json-ld.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/etsy/sync/route.ts`, `lib/etsy.ts`, `lib/spotify.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

# mbarbine__platphorm-real-estate-NAD

*Automatically synced with your [v0.app](https://v0.app) deployments*

## Metadata

- ID: `github-recent__mbarbine__platphorm-real-estate-nad`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-real-estate-NAD`
- Remote: `git@github.com:mbarbine/platphorm-real-estate-NAD.git`
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
- Source paths: `app/api/properties/generate-image/route.ts`, `components/properties/ai-image-generator.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/analytics/page.tsx`, `app/analytics/forecasts/page.tsx`, `app/analytics/market/page.tsx`, `app/analytics/page.tsx`, `app/api/analytics/market/route.ts`, `app/api/analytics/pageview/route.ts`, `app/api/metrics/route.ts`, `app/api/reports/route.ts`, `app/reports/page.tsx`, `components/admin/error-log-analytics.tsx`, `components/admin/performance-metrics.tsx`, `components/admin/session-analytics.tsx`, `components/analytics/geographic-heatmap.tsx`, `components/analytics/market-overview.tsx`, `components/analytics/price-distribution.tsx`, `components/analytics/property-trends.tsx`, `components/analytics/recent-activity.tsx`, `components/reports/market-insights.tsx`, `components/reports/portfolio-stats.tsx`, `components/reports/price-distribution-chart.tsx`, `lib/db/reports.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/agents/route.ts`, `app/api/analytics/market/route.ts`, `app/api/analytics/pageview/route.ts`, `app/api/bridge/agent-reviews/route.ts`, `app/api/bridge/fetch-by-mls/route.ts`, `app/api/bridge/fetch-listings/route.ts`, `app/api/bridge/sync-properties/route.ts`, `app/api/errors/route.ts`, `app/api/favorites/route.ts`, `app/api/health/route.ts`, `app/api/log-error/route.ts`, `app/api/mcp/route.ts`, `app/api/metrics/route.ts`, `app/api/properties/[id]/route.ts`, `app/api/properties/generate-image/route.ts`, `app/api/properties/route.ts`, `app/api/properties/sync/route.ts`, `app/api/reports/route.ts`, `app/api/saved-searches/route.ts`, `app/api/seller-opportunities/route.ts`, `app/api/sessions/end/route.ts`, `app/api/sessions/event/route.ts`, `app/api/sessions/route.ts`, `app/api/sessions/update/route.ts`, `app/api/stripe/create-checkout-session/route.ts`, `app/api/stripe/webhook/route.ts`, `app/api/webhooks/route.ts`, `app/api/zillow/market/[regionId]/route.ts`, `app/api/zillow/regions/route.ts`
- Tests: 3
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/sessions/end/route.ts`, `app/api/sessions/event/route.ts`, `app/api/sessions/route.ts`, `app/api/sessions/update/route.ts`, `app/api/stripe/create-checkout-session/route.ts`, `components/admin/session-analytics.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/analytics/page.tsx`, `components/admin/error-log-analytics.tsx`, `components/admin/performance-metrics.tsx`, `components/admin/session-analytics.tsx`, `components/admin/user-activity-feed.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api-docs/page.tsx`, `app/api/analytics/market/route.ts`, `app/api/analytics/pageview/route.ts`, `app/api/bridge/fetch-by-mls/route.ts`, `app/api/bridge/fetch-listings/route.ts`, `app/api/bridge/sync-properties/route.ts`, `app/api/errors/route.ts`, `app/api/health/route.ts`, `app/api/log-error/route.ts`, `package.json`, `postcss.config.mjs`
- Tests: 3
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/analytics/page.tsx`, `app/api/metrics/route.ts`, `app/dashboard/page.tsx`, `components/admin/error-log-analytics.tsx`, `components/admin/performance-metrics.tsx`, `components/admin/session-analytics.tsx`, `components/admin/user-activity-feed.tsx`, `components/analytics/market-overview.tsx`, `components/sellers/seller-finder-dashboard.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/properties/mls-import-dialog.tsx`, `package.json`, `scripts/import-bridge-data.ts`, `scripts/import-local-data.ts`, `tsconfig.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/_combined_schema.sql`
- Tests: 3
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/stripe/create-checkout-session/route.ts`, `scripts/seed-production-data.ts`, `scripts/seed-production.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Financial Workflow

- ID: `finance.financial-workflow`
- Type: finance
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/billing/page.tsx`
- Tests: 3
- LLMs context: none detected

Source evidence indicates finance, invoices, billing, payments, revenue, or market data behavior.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/admin/performance-metrics.tsx`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/analytics/market/route.ts`, `app/api/analytics/pageview/route.ts`, `app/api/bridge/fetch-by-mls/route.ts`, `app/api/bridge/fetch-listings/route.ts`, `app/api/bridge/sync-properties/route.ts`, `app/api/errors/route.ts`, `app/api/health/route.ts`, `app/api/log-error/route.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/properties/generate-image/route.ts`, `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/log-error/route.ts`, `components/admin/error-log-analytics.tsx`, `components/properties/mls-import-dialog.tsx`, `components/providers/monitoring-provider.tsx`, `components/saved-searches/create-search-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`, `scripts/test-health.mjs`
- Tests: 3
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/stripe/create-checkout-session/route.ts`, `app/api/stripe/webhook/route.ts`, `components/pricing/pricing-cards.tsx`, `lib/stripe.ts`, `package.json`, `pnpm-lock.yaml`, `ROADMAP.md`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Stripe integration.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/analytics/page.tsx`, `app/agents/page.tsx`, `app/agents/reviews/page.tsx`, `app/alerts/page.tsx`, `app/analytics/forecasts/page.tsx`, `app/analytics/market/page.tsx`, `app/analytics/page.tsx`, `app/api-docs/page.tsx`, `app/billing/page.tsx`, `app/dashboard/page.tsx`, `app/favorites/page.tsx`, `app/integrations/page.tsx`, `app/pricing/page.tsx`, `app/properties/[id]/page.tsx`, `app/properties/page.tsx`, `app/reports/page.tsx`, `app/saved-searches/page.tsx`, `app/sellers/page.tsx`, `app/settings/page.tsx`, `app/zillow/page.tsx`
- Tests: 3
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/saved-searches/route.ts`, `app/saved-searches/page.tsx`, `components/properties/property-search.tsx`, `components/saved-searches/create-search-dialog.tsx`, `components/saved-searches/saved-searches-list.tsx`, `lib/db/saved-searches.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/analytics/market/route.ts`, `app/api/analytics/pageview/route.ts`, `app/api/bridge/fetch-by-mls/route.ts`, `app/api/bridge/fetch-listings/route.ts`, `app/api/bridge/sync-properties/route.ts`, `app/api/errors/route.ts`, `app/api/health/route.ts`, `app/api/log-error/route.ts`, `app/api/metrics/route.ts`, `app/api/properties/[id]/route.ts`, `app/api/properties/generate-image/route.ts`, `app/api/properties/route.ts`, `app/api/saved-searches/route.ts`, `app/api/sessions/end/route.ts`, `app/api/sessions/event/route.ts`, `app/api/sessions/route.ts`, `app/api/sessions/update/route.ts`, `app/api/stripe/create-checkout-session/route.ts`, `app/api/stripe/webhook/route.ts`, `app/api/webhooks/route.ts`, `app/sitemap.ts`, `lib/api-client.ts`, `lib/bridge-api/client.ts`, `lib/data-sync.ts`, `lib/db/agents.ts`, `lib/db/client.ts`, `lib/db/favorites.ts`, `lib/db/market-forecasts.ts`, `lib/db/properties.ts`, `lib/db/reports.ts`
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
- Source paths: `__tests__/page.test.tsx`, `__tests__/sitemap.test.ts`, `scripts/test-health.mjs`
- Tests: 3
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/admin/error-log-analytics.tsx`, `components/admin/performance-metrics.tsx`, `components/admin/session-analytics.tsx`, `components/admin/user-activity-feed.tsx`, `components/agents/agent-filters.tsx`, `components/agents/agents-grid.tsx`, `components/analytics/geographic-heatmap.tsx`, `components/analytics/market-overview.tsx`, `components/analytics/price-distribution.tsx`, `components/analytics/property-trends.tsx`, `components/analytics/recent-activity.tsx`, `components/error-boundary.tsx`, `components/favorites/favorites-list.tsx`, `components/layout/footer.tsx`, `components/layout/header.tsx`, `components/layout/page-wrapper.tsx`, `components/layout/sidebar.tsx`, `components/loading-boundary.tsx`, `components/market/forecast-table.tsx`, `components/market/market-heatmap.tsx`, `components/market/market-trends-chart.tsx`, `components/market/price-growth-indicators.tsx`, `components/market/top-markets.tsx`, `components/pricing/pricing-cards.tsx`, `components/properties/ai-image-generator.tsx`, `components/properties/mls-import-dialog.tsx`, `components/properties/property-card.tsx`, `components/properties/property-details.tsx`, `components/properties/property-filters.tsx`, `components/properties/property-grid.tsx`
- Tests: 3
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/sessions/event/route.ts`, `app/api/stripe/webhook/route.ts`, `app/api/webhooks/route.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/api/bridge/sync-properties/route.ts`, `app/api/properties/[id]/route.ts`, `app/zillow/page.tsx`, `components/admin/error-log-analytics.tsx`, `components/favorites/favorites-list.tsx`, `components/ui/chart.tsx`, `scripts/import-bridge-data.ts`, `scripts/reset-and-seed.mjs`, `scripts/test-health.mjs`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/analytics/market/route.ts`, `app/api/analytics/pageview/route.ts`, `app/api/bridge/fetch-by-mls/route.ts`, `app/api/bridge/fetch-listings/route.ts`, `app/api/bridge/sync-properties/route.ts`, `app/api/errors/route.ts`, `app/api/health/route.ts`, `app/api/log-error/route.ts`, `app/api/metrics/route.ts`, `app/api/properties/[id]/route.ts`, `app/api/properties/generate-image/route.ts`, `app/api/properties/route.ts`, `app/api/saved-searches/route.ts`, `app/api/sessions/end/route.ts`, `app/api/sessions/event/route.ts`, `app/api/sessions/route.ts`, `app/api/sessions/update/route.ts`, `app/api/stripe/create-checkout-session/route.ts`, `app/api/stripe/webhook/route.ts`, `app/api/webhooks/route.ts`, `lib/bridge-api/client.ts`, `lib/data-sync.ts`, `lib/db/agents.ts`, `lib/db/client.ts`, `lib/db/favorites.ts`, `lib/db/market-forecasts.ts`, `lib/db/properties.ts`, `lib/db/reports.ts`, `lib/db/saved-searches.ts`, `lib/db/seller-opportunities.ts`, `lib/db/zillow.ts`, `lib/stripe.ts`, `scripts/FINAL_SEED_PROPERTIES.ts`, `scripts/import-bridge-data.ts`, `scripts/import-local-data.ts`, `scripts/INSERT_DATA_ONLY.ts`, `scripts/INSERT_PROPERTIES.ts`, `scripts/reset-and-seed.mjs`, `scripts/SEED_DATABASE_NOW.ts`, `scripts/seed-complete-database.ts`, `scripts/seed-comprehensive.ts`, `scripts/seed-database.ts`, `scripts/seed-production-data.ts`, `scripts/seed-production.ts`, `scripts/seed-properties-now.ts`, `scripts/seed-users.ts`, `scripts/test-health.mjs`

## Gaps

- CI workflows not detected
- LLMs context files not detected

# mbarbine__platphorm-content-showback-dashboard

ECHO is a comprehensive content monitoring and analytics platform that helps creators, podcasters, and musicians track their content across streaming platforms, detect policy violations, monitor unauthorized usage, and recover lost revenue. Built with Next.js 15, NeonDB, and Stripe.

## Metadata

- ID: `github-recent__mbarbine__platphorm-content-showback-dashboard`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-content-showback-dashboard`
- Remote: `git@github.com:mbarbine/platphorm-content-showback-dashboard.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: internal
- Confidence: high

## Capabilities

### Accessibility UI Support

- ID: `accessibility.ui-a11y`
- Type: accessibility
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/keyboard-shortcuts.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates ARIA, accessibility, keyboard, or screen-reader oriented UI behavior.

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ai-confidence-indicator.tsx`, `package.json`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/analytics/page.tsx`, `components/analytics-content.tsx`, `components/detailed-analytics.tsx`, `components/device-analytics-chart.tsx`, `components/devsecops-metrics.tsx`, `components/export-reporting-system.tsx`, `components/immediate-insights.tsx`, `components/live-analytics.tsx`, `components/metadata-aggregation.tsx`, `components/metrics-overview.tsx`, `components/miracle-insights-engine.tsx`, `components/miracle-insights-panel.tsx`, `components/platform-efficiency-score.tsx`, `components/platform-insights.tsx`, `components/smart-insights-panel.tsx`, `lib/analytics-tracker.ts`, `package.json`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/errors/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/notifications/route.ts`, `app/api/register-mcp/route.ts`, `app/api/register-network/route.ts`, `app/api/session/data/route.ts`, `app/api/session/migrate/route.ts`, `app/api/signup/route.ts`, `app/api/track-event/route.ts`, `app/api/url/process/route.ts`, `app/api/url/status/[processingId]/route.ts`, `app/api/user/api-keys/route.ts`, `app/api/user/monitored-urls/route.ts`, `app/api/user/profile/route.ts`, `app/api/user/settings/route.ts`, `app/api/v1/artist/[artistId]/route.ts`, `app/api/v1/content/analyze/route.ts`, `app/api/v1/revenue/summary/route.ts`, `app/api/waitlist/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/stripe/route.ts`, `app/api/webhooks/subscribe/route.ts`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/session/data/route.ts`, `app/api/session/migrate/route.ts`, `components/auth-dialog.tsx`, `components/session-recovery-overlay.tsx`, `lib/auth.ts`, `package.json`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/jobs/page.tsx`, `app/workflows/page.tsx`, `components/workflow-status.tsx`, `components/workflows-content.tsx`, `components/workflows-overview.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/actions/stripe.ts`, `app/api-docs/page.tsx`, `app/api/docs/route.ts`, `app/api/errors/route.ts`, `app/api/mcp/route.ts`, `app/api/notifications/route.ts`, `app/api/session/data/route.ts`, `app/api/session/migrate/route.ts`, `app/api/signup/route.ts`, `app/api/track-event/route.ts`, `app/api/v1/content/analyze/route.ts`, `components/analytics-content.tsx`, `components/api-docs-content.tsx`, `components/artist-detail-content.tsx`, `components/artist-tools-content.tsx`, `components/content-type-breakdown.tsx`, `components/home-content.tsx`, `components/pricing-content.tsx`, `components/stripe-checkout.tsx`, `components/workflows-content.tsx`, `package.json`, `postcss.config.mjs`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/url/status/[processingId]/route.ts`, `components/accountability-dashboard.tsx`, `components/bot-detection-dashboard.tsx`, `components/dashboard-header.tsx`, `components/devsecops-metrics.tsx`, `components/metrics-overview.tsx`, `components/showback-dashboard.tsx`, `components/signed-in-dashboard.tsx`, `components/workflow-status.tsx`, `components/workflows-overview.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/export-menu.tsx`, `components/export-reporting-system.tsx`, `package-lock.json`, `package.json`, `tsconfig.json`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/stripe-checkout.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/immediate-insights.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates upload, attachment, media, or multipart file handling.

### Financial Workflow

- ID: `finance.financial-workflow`
- Type: finance
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/revenue/summary/route.ts`, `components/d3-revenue-chart.tsx`, `components/revenue-flow-sankey.tsx`, `components/revenue-impact.tsx`, `components/revenue-opportunity-matrix.tsx`, `components/revenue-prediction-engine.tsx`, `components/revenue-recovery-chart.tsx`, `components/revenue-recovery.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates finance, invoices, billing, payments, revenue, or market data behavior.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/d3-platform-chart.tsx`, `components/platform-efficiency-score.tsx`, `components/platform-insights.tsx`, `components/platform-network-3d.tsx`, `components/platform-targets.tsx`, `lib/performance-monitor.ts`, `package.json`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/platform-efficiency-score.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/actions/stripe.ts`, `app/api/errors/route.ts`, `app/api/mcp/route.ts`, `app/api/notifications/route.ts`, `app/api/session/data/route.ts`, `app/api/session/migrate/route.ts`, `app/api/signup/route.ts`, `app/api/track-event/route.ts`, `package.json`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/error-tracker.test.ts`, `app/layout.tsx`, `lib/analytics-tracker.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/register-mcp/route.ts`, `package.json`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/user/monitored-urls/route.ts`, `components/auth-dialog.tsx`, `components/fingerprinting-technology.tsx`, `components/radial-monitoring-chart.tsx`, `components/technology-showcase.tsx`, `components/ui/dialog.tsx`, `lib/performance-monitor.ts`, `package.json`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/actions/stripe.ts`, `app/api/webhooks/stripe/route.ts`, `ARCHITECTURE.md`, `components/email-capture.tsx`, `components/pricing-modal.tsx`, `components/stripe-checkout.tsx`, `lib/stripe.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `README.md`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository has source-backed indicators for a Stripe integration.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/analytics/page.tsx`, `app/api-docs/page.tsx`, `app/artist-tools/page.tsx`, `app/artist/[slug]/page.tsx`, `app/creator-demo/page.tsx`, `app/faq/page.tsx`, `app/jobs/page.tsx`, `app/onboarding/page.tsx`, `app/pricing/page.tsx`, `app/workflows/page.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/actions/stripe.ts`, `app/api/errors/route.ts`, `app/api/mcp/route.ts`, `app/api/notifications/route.ts`, `app/api/session/data/route.ts`, `app/api/session/migrate/route.ts`, `app/api/signup/route.ts`, `app/api/track-event/route.ts`, `app/api/url/process/route.ts`, `app/api/url/status/[processingId]/route.ts`, `app/api/user/api-keys/route.ts`, `app/api/user/monitored-urls/route.ts`, `app/api/user/profile/route.ts`, `app/api/user/settings/route.ts`, `app/api/waitlist/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/stripe/route.ts`, `app/layout.tsx`, `components/api-integration-guide.tsx`, `components/stripe-checkout.tsx`, `lib/auth.ts`, `lib/error-tracker.ts`, `lib/performance-monitor.ts`, `lib/stripe.ts`, `middleware.ts`, `scripts/seed_data.ts`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`, `public/sitemap.xml`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api-docs.test.ts`, `__tests__/api-errors.test.ts`, `__tests__/api-notifications.test.ts`, `__tests__/api-register-mcp.test.ts`, `__tests__/api-session-migrate.test.ts`, `__tests__/api-session.test.ts`, `__tests__/api-signup.test.ts`, `__tests__/api-track-event.test.ts`, `__tests__/api-url.test.ts`, `__tests__/api-user.test.ts`, `__tests__/api-v1.test.ts`, `__tests__/api-waitlist.test.ts`, `__tests__/api-webhooks.test.ts`, `__tests__/api/health.test.ts`, `__tests__/error-tracker.test.ts`, `__tests__/faq/page.test.tsx`, `__tests__/mcp.test.ts`, `__tests__/middleware.test.ts`, `__tests__/mock-data.test.ts`, `__tests__/notification-service.test.ts`, `__tests__/performance-monitor.test.ts`, `__tests__/session-manager.test.ts`, `__tests__/utils.test.ts`, `__tests__/well-known.test.ts`, `components/automated-test-results.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/accountability-dashboard.tsx`, `components/ad-analysis.tsx`, `components/ad-timeline.tsx`, `components/advanced-filtering-system.tsx`, `components/advertiser-accountability.tsx`, `components/ai-confidence-indicator.tsx`, `components/analysis-progress.tsx`, `components/analytics-content.tsx`, `components/anomaly-detection.tsx`, `components/api-architecture-diagram.tsx`, `components/api-docs-content.tsx`, `components/api-integration-guide.tsx`, `components/api-key-generator.tsx`, `components/api-key-manager.tsx`, `components/api-playground.tsx`, `components/artist-detail-content.tsx`, `components/artist-tools-content.tsx`, `components/artist-tools.tsx`, `components/auth-dialog.tsx`, `components/automated-test-results.tsx`, `components/big-bang-win-showcase.tsx`, `components/bot-detection-dashboard.tsx`, `components/breadcrumbs.tsx`, `components/channel-input.tsx`, `components/claim-your-data-banner.tsx`, `components/content-type-breakdown.tsx`, `components/creator-flow-hub.tsx`, `components/creator-transparency-overlay.tsx`, `components/cta-section.tsx`, `components/d3-platform-chart.tsx`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/track-event/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/stripe/route.ts`, `app/api/webhooks/subscribe/route.ts`
- Tests: 25
- LLMs context: `public/llms-full.txt`, `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/api/notifications/route.ts`, `app/layout.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/actions/stripe.ts`, `app/api/errors/route.ts`, `app/api/mcp/route.ts`, `app/api/notifications/route.ts`, `app/api/session/data/route.ts`, `app/api/session/migrate/route.ts`, `app/api/signup/route.ts`, `app/api/track-event/route.ts`, `app/api/url/process/route.ts`, `app/api/url/status/[processingId]/route.ts`, `app/api/user/api-keys/route.ts`, `app/api/user/monitored-urls/route.ts`, `app/api/user/profile/route.ts`, `app/api/user/settings/route.ts`, `app/api/waitlist/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/stripe/route.ts`, `components/api-integration-guide.tsx`, `components/stripe-checkout.tsx`, `lib/stripe.ts`, `middleware.ts`, `scripts/seed_data.ts`

## Gaps

- CI workflows not detected

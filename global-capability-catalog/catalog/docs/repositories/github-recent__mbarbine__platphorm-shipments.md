# mbarbine__platphorm-shipments

Public-safe USPS REST API v3 shipping rate calculator and logistics tooling surface for [PlatPhorm News Network](https://platphormnews.com), with VanAgain/VW parts package workflows supported as one useful e-commerce pattern.

## Metadata

- ID: `github-recent__mbarbine__platphorm-shipments`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-shipments`
- Remote: `git@github.com:mbarbine/platphorm-shipments.git`
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
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `lib/phase1.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/reports/quote/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/audit/route.ts`, `app/api/v1/customs/validate/route.ts`, `app/api/v1/ecommerce/quote/route.ts`, `app/api/v1/fingerprint/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/packages/presets/automotive/route.ts`, `app/api/v1/packages/presets/route.ts`, `app/api/v1/quickbooks/status/route.ts`, `app/api/v1/rates/calculate/route.ts`, `app/api/v1/rates/domestic/route.ts`, `app/api/v1/rates/international/route.ts`, `app/api/v1/rates/route.ts`, `app/api/v1/reports/quote/route.ts`, `app/api/v1/services/route.ts`, `app/api/v1/shipments/route.ts`, `app/api/v1/status/route.ts`, `app/api/v1/tests/route.ts`, `app/api/v1/tracking/[trackingNumber]/route.ts`, `app/api/v1/usps/status/route.ts`, `app/api/webhooks/shiprush/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/jobs/page.tsx`, `components/shipping/test-runner.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/audit.test.ts`, `__tests__/lib/db.test.ts`, `__tests__/lib/fingerprint.test.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/v1/audit/route.ts`, `app/api/v1/rates/calculate/route.ts`, `app/api/v1/rates/international/route.ts`, `components/shipping/api-docs-tab.tsx`, `components/shipping/developer-docs.tsx`, `components/shipping/health-status.tsx`, `docs/EDGE_RUNTIME_COMPATIBILITY.md`, `docs/ROADMAP.md`, `docs/VANAGAIN_SHIPPING_SOLUTION_PLAN.md`, `package.json`, `postcss.config.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/quickbooks/status/route.ts`, `app/api/v1/status/route.ts`, `app/api/v1/usps/status/route.ts`, `components/shipping/health-status.tsx`, `components/shipping/mcp-status.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `components/json-ld.tsx`, `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/001-create-schema.sql`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`, `vercel.json`
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

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/lib/platphorm-service.test.ts`, `app/api/v1/ecommerce/quote/route.ts`, `lib/platphorm-service.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/shipping/international-rate-form.tsx`, `components/shipping/rate-calculator-form.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/logger.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/phase1.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/lib/platphorm-service.test.ts`, `__tests__/lib/usps-service.test.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/packages/presets/route.ts`, `app/api/v1/reports/quote/route.ts`, `app/api/v1/tests/route.ts`, `app/faq/page.tsx`, `lib/openapi.ts`, `lib/phase1.ts`, `lib/platphorm-service.ts`, `package.json`, `README.md`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/audit.test.ts`, `__tests__/lib/db.test.ts`, `__tests__/lib/fingerprint.test.ts`, `app/api/health/route.ts`, `app/api/v1/audit/route.ts`, `app/api/v1/rates/calculate/route.ts`, `app/api/v1/rates/international/route.ts`, `components/shipping/health-status.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/shipping/health-status.tsx`, `components/shipping/trace-viewer.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/client-logger.ts`, `lib/logger.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api-policy/page.tsx`, `app/faq/page.tsx`, `app/jobs/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/audit.test.ts`, `__tests__/api/shiprush-webhook.test.ts`, `__tests__/lib/db.test.ts`, `__tests__/lib/platphorm-service.test.ts`, `__tests__/lib/shiprush-service.test.ts`, `__tests__/lib/usps-service-rates.test.ts`, `__tests__/lib/usps-service.test.ts`, `.Jules/sentinel.md`, `app/api/health/route.ts`, `app/api/v1/audit/route.ts`, `app/api/v1/rates/calculate/route.ts`, `app/api/v1/rates/international/route.ts`, `app/api/v1/shipments/route.ts`, `app/api/v1/tracking/[trackingNumber]/route.ts`, `app/api/webhooks/shiprush/route.ts`, `lib/__tests__/config.test.ts`, `lib/client-logger.ts`, `lib/config.ts`, `lib/db.ts`, `lib/fingerprint.ts`, `lib/logger.ts`, `lib/mcp-client.ts`, `lib/phase1.ts`, `lib/platphorm-service.ts`, `lib/shiprush-service.ts`, `lib/test-config.ts`, `lib/usps-service.ts`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/shiprush-webhook.test.ts`, `__tests__/lib/shiprush-service.test.ts`, `app/api/v1/shipments/route.ts`, `app/api/webhooks/shiprush/route.ts`, `components/shipping/api-debug-panel.tsx`, `components/shipping/api-docs-tab.tsx`, `components/shipping/api-tester.tsx`, `components/shipping/developer-docs.tsx`, `components/shipping/developer-panel.tsx`, `components/shipping/health-status.tsx`, `components/shipping/international-rate-form.tsx`, `components/shipping/mcp-status.tsx`, `components/shipping/rate-calculator-form.tsx`, `components/shipping/test-runner.tsx`, `components/shipping/testing-panel.tsx`, `components/shipping/trace-viewer.tsx`, `components/ui/label.tsx`, `docs/VANAGAIN_SHIPPING_SOLUTION_PLAN.md`, `lib/shiprush-service.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/audit.test.ts`, `__tests__/api/domestic-rates-comprehensive.test.ts`, `__tests__/api/health.test.ts`, `__tests__/api/international-rates-comprehensive.test.ts`, `__tests__/api/rates.test.ts`, `__tests__/api/shipments.test.ts`, `__tests__/api/shiprush-webhook.test.ts`, `__tests__/api/tracking.test.ts`, `__tests__/components/api-tester.test.tsx`, `__tests__/components/copy-button.test.tsx`, `__tests__/components/error-boundary.test.tsx`, `__tests__/components/faq-section.test.tsx`, `__tests__/components/not-found.test.tsx`, `__tests__/components/site-footer.test.tsx`, `__tests__/components/site-header.test.tsx`, `__tests__/components/theme-toggle.test.tsx`, `__tests__/hooks/use-mobile.test.ts`, `__tests__/hooks/use-toast.test.ts`, `__tests__/integration/api-ui-sync.test.ts`, `__tests__/integration/e2e-rate-flow.test.ts`, `__tests__/integration/form-ui-sync.test.ts`, `__tests__/integration/rate-calculator-form-e2e.test.tsx`, `__tests__/lib/ai-tools.test.ts`, `__tests__/lib/client-logger.test.ts`, `__tests__/lib/country-codes.test.ts`, `__tests__/lib/db.test.ts`, `__tests__/lib/emoji.test.ts`, `__tests__/lib/fingerprint.test.ts`, `__tests__/lib/hmac.test.ts`, `__tests__/lib/i18n.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/api-tester.test.tsx`, `__tests__/components/copy-button.test.tsx`, `__tests__/components/error-boundary.test.tsx`, `__tests__/components/faq-section.test.tsx`, `__tests__/components/not-found.test.tsx`, `__tests__/components/site-footer.test.tsx`, `__tests__/components/site-header.test.tsx`, `__tests__/components/theme-toggle.test.tsx`, `components/api-policy/available-endpoints-card.tsx`, `components/api-policy/best-practices-card.tsx`, `components/api-policy/rate-limits-card.tsx`, `components/api-policy/response-headers-card.tsx`, `components/api-policy/security-requirements-card.tsx`, `components/copy-button.tsx`, `components/faq-section.tsx`, `components/footer.tsx`, `components/i18n-provider.tsx`, `components/json-ld.tsx`, `components/language-selector.tsx`, `components/shipping/api-debug-panel.tsx`, `components/shipping/api-docs-tab.tsx`, `components/shipping/api-tester.tsx`, `components/shipping/developer-docs.tsx`, `components/shipping/developer-panel.tsx`, `components/shipping/health-status.tsx`, `components/shipping/international-rate-form.tsx`, `components/shipping/mcp-status.tsx`, `components/shipping/rate-calculator-form.tsx`, `components/shipping/test-runner.tsx`, `components/shipping/testing-panel.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/api/shiprush-webhook.test.ts`, `app/api/webhooks/shiprush/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `components/json-ld.tsx`, `components/shipping/trace-viewer.tsx`, `components/ui/chart.tsx`, `lib/db.ts`, `lib/mcp-client.ts`, `lib/platphorm-service.ts`, `lib/polymarket-api.ts`, `lib/shiprush-service.ts`, `lib/usps-service.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `__tests__/api/audit.test.ts`, `__tests__/api/shiprush-webhook.test.ts`, `__tests__/lib/db.test.ts`, `__tests__/lib/shiprush-service.test.ts`, `__tests__/lib/usps-service-rates.test.ts`, `__tests__/lib/usps-service.test.ts`, `.Jules/sentinel.md`, `app/api/health/route.ts`, `app/api/v1/audit/route.ts`, `app/api/v1/rates/calculate/route.ts`, `app/api/v1/rates/international/route.ts`, `app/api/webhooks/shiprush/route.ts`, `lib/db.ts`, `lib/fingerprint.ts`, `lib/mcp-client.ts`, `lib/phase1.ts`, `lib/platphorm-service.ts`, `lib/shiprush-service.ts`, `lib/usps-service.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

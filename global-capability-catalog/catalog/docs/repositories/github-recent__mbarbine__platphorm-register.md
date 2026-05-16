# mbarbine__platphorm-register

Register

## Metadata

- ID: `github-recent__mbarbine__platphorm-register`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-register`
- Remote: `git@github.com:mbarbine/platphorm-register.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### OpenAPI Documentation

- ID: `api.openapi-docs`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `openapi.json`
- Tests: 1
- LLMs context: none detected

Repository includes OpenAPI or Swagger documentation files.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/network/graph/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/registrations/[id]/route.ts`, `app/api/v1/registrations/[id]/trust/route.ts`, `app/api/v1/registrations/[id]/verify/dns/route.ts`, `app/api/v1/registrations/[id]/verify/email/route.ts`, `app/api/v1/registrations/route.ts`, `app/api/v1/webhooks/route.ts`
- Tests: 1
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `lib/db.ts`, `package.json`, `postcss.config.mjs`
- Tests: 1
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/status/page.tsx`
- Tests: 1
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/003-fix-schema.sql`
- Tests: 1
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/db.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/registration-form.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/db.ts`, `package.json`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 1
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/integrations/trace-client.ts`, `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/faq/page.tsx`, `app/register/page.tsx`, `app/status/page.tsx`, `app/trust/page.tsx`
- Tests: 1
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/health/route.ts`, `lib/db.ts`, `lib/integrations/mcp-client.ts`, `lib/integrations/trace-client.ts`
- Tests: 1
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

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
- Source paths: `components/breadcrumbs.tsx`, `components/footer.tsx`, `components/header.tsx`, `components/registration-form.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`, `components/ui/dialog.tsx`, `components/ui/drawer.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/empty.tsx`, `components/ui/field.tsx`, `components/ui/form.tsx`, `components/ui/hover-card.tsx`, `components/ui/input-group.tsx`
- Tests: 1
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/events/route.ts`, `app/api/v1/webhooks/route.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/api/health/route.ts`, `app/api/v1/registrations/[id]/route.ts`, `app/api/v1/registrations/[id]/verify/dns/route.ts`, `app/api/v1/registrations/[id]/verify/email/route.ts`, `app/api/v1/registrations/route.ts`, `app/api/v1/webhooks/route.ts`, `components/ui/chart.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `lib/db.ts`, `lib/integrations/mcp-client.ts`, `lib/integrations/trace-client.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

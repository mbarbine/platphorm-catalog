# mbarbine__platphorm-webhook-simulator

Production-ready webhook simulator, signer, replay engine, and contract tester. Purpose-built for the PlatPhorm ecosystem with MCP integration.

## Metadata

- ID: `github-recent__mbarbine__platphorm-webhook-simulator`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-webhook-simulator`
- Remote: `git@github.com:mbarbine/platphorm-webhook-simulator.git`
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
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/api/v1/signatures/generate/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/metrics/route.ts`, `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### OpenAPI Documentation

- ID: `api.openapi-docs`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/openapi.json`, `public/schemas/openapi.json`
- Tests: 30
- LLMs context: none detected

Repository includes OpenAPI or Swagger documentation files.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/agent/route.ts`, `app/api/v1/api-keys/route.ts`, `app/api/v1/contracts/[id]/route.ts`, `app/api/v1/contracts/[id]/test/route.ts`, `app/api/v1/contracts/[id]/validate/route.ts`, `app/api/v1/contracts/route.ts`, `app/api/v1/deliveries/[id]/attempts/route.ts`, `app/api/v1/deliveries/[id]/cancel/route.ts`, `app/api/v1/deliveries/[id]/replay/route.ts`, `app/api/v1/deliveries/[id]/route.ts`, `app/api/v1/deliveries/route.ts`, `app/api/v1/endpoints/[id]/route.ts`, `app/api/v1/endpoints/[id]/test/route.ts`, `app/api/v1/endpoints/route.ts`, `app/api/v1/events/[id]/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/mcp/sync/route.ts`, `app/api/v1/mcp/tools/route.ts`, `app/api/v1/metrics/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/v1/network/graph/sync/route.ts`, `app/api/v1/network/route-compliance/route.ts`, `app/api/v1/network/sites/route.ts`, `app/api/v1/network/trusted-domains/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/api/auth.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(public)/docs/page.tsx`, `app/api/docs/route.ts`, `app/api/v1/reports/docs/route.ts`, `lib/config/env.ts`, `lib/neon/schema.ts`, `package.json`, `postcss.config.cjs`, `README.md`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/dashboard/api-keys/page.tsx`, `app/(dashboard)/dashboard/contracts/page.tsx`, `app/(dashboard)/dashboard/endpoints/page.tsx`, `app/(dashboard)/dashboard/events/page.tsx`, `app/(dashboard)/dashboard/page.tsx`, `app/(dashboard)/dashboard/replays/page.tsx`, `app/(dashboard)/dashboard/settings/page.tsx`, `app/(dashboard)/dashboard/usage/page.tsx`, `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/api/v1/metrics/route.ts`, `app/api/v1/receive/[endpointSlug]/status/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust-policy.json/route.ts`, `app/.well-known/trust.json/route.ts`, `package.json`, `tsconfig.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `lib/neon/schema.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/integrations/producthunt.test.ts`, `lib/integrations/producthunt.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/config/env.ts`, `lib/cosmic/claws-client.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust-policy.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/api-keys/route.ts`, `app/api/v1/events/route.test.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/config/env.ts`, `lib/neon/schema.ts`, `package.json`, `README.md`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.Jules/sentinel.md`, `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/api/webhooks/route.ts`, `lib/config/env.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.test.ts`, `app/api/mcp/route.ts`, `app/api/v1/mcp/sync/route.ts`, `app/api/v1/mcp/tools/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(public)/changelog/page.tsx`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `lib/config/env.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/dashboard/api-keys/page.tsx`, `app/(dashboard)/dashboard/contracts/page.tsx`, `app/(dashboard)/dashboard/endpoints/page.tsx`, `app/(dashboard)/dashboard/events/page.tsx`, `app/(dashboard)/dashboard/page.tsx`, `app/(dashboard)/dashboard/replays/page.tsx`, `app/(dashboard)/dashboard/settings/page.tsx`, `app/(dashboard)/dashboard/usage/page.tsx`, `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/(lab)/lab/contracts/[id]/page.tsx`, `app/(lab)/lab/endpoints/[id]/page.tsx`, `app/(lab)/lab/events/[id]/page.tsx`, `app/(lab)/lab/page.tsx`, `app/(lab)/lab/replays/[id]/page.tsx`, `app/(public)/changelog/page.tsx`, `app/(public)/docs/page.tsx`, `app/(public)/explore/page.tsx`, `app/(public)/page.tsx`, `app/(public)/request-access/page.tsx`, `app/(public)/simulator/page.tsx`, `app/(public)/w/[id]/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/api/v1/events/route.test.ts`, `app/api/webhooks/route.ts`, `lib/api/auth.ts`, `lib/api/request-context.ts`, `lib/config/env.ts`, `lib/integrations/producthunt.test.ts`, `lib/integrations/producthunt.ts`, `lib/neon/schema.ts`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(public)/simulator/validation-pro.test.tsx`, `app/api/docs/route.test.ts`, `app/api/health/route.test.ts`, `app/api/mcp/route.test.ts`, `app/api/v1/api-keys/route.test.ts`, `app/api/v1/contracts/[id]/test/route.ts`, `app/api/v1/endpoints/[id]/test/route.ts`, `app/api/v1/events/route.test.ts`, `app/feed.xml/route.test.ts`, `app/llms.txt/route.test.ts`, `components/layout/footer.test.tsx`, `components/layout/top-bar.test.tsx`, `lib/api/correlation.test.ts`, `lib/api/errors.test.ts`, `lib/api/response.test.ts`, `lib/api/ssrf.test.ts`, `lib/config/env.test.ts`, `lib/config/policy.test.ts`, `lib/config/service.test.ts`, `lib/cosmic/claws-client.test.ts`, `lib/cosmic/cuid.test.ts`, `lib/cosmic/fingerprint.test.ts`, `lib/cosmic/key-generator.test.ts`, `lib/cosmic/signatures.test.ts`, `lib/cosmic/trace-client.test.ts`, `lib/discovery/network-manifest.test.ts`, `lib/integrations/producthunt.test.ts`, `lib/mcp/executor.test.ts`, `lib/mcp/prompts.test.ts`, `lib/mcp/resources.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/layout/footer.test.tsx`, `components/layout/footer.tsx`, `components/layout/top-bar.test.tsx`, `components/layout/top-bar.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/api/v1/events/[id]/route.ts`, `app/api/v1/events/route.test.ts`, `app/api/v1/events/route.ts`, `app/api/v1/signatures/generate/route.ts`, `app/api/v1/signatures/verify/route.ts`, `app/api/webhooks/route.ts`, `lib/config/env.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/(dashboard)/dashboard/events/page.tsx`, `app/(dashboard)/dashboard/page.tsx`, `app/feed.xml/route.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/api/v1/events/route.test.ts`, `app/api/webhooks/route.ts`, `lib/api/auth.ts`, `lib/config/env.ts`, `lib/integrations/producthunt.test.ts`, `lib/integrations/producthunt.ts`, `lib/neon/schema.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

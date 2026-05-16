# mbarbine__platphorm-radio-backend

*Automatically synced with your [v0.app](https://v0.app) deployments*

## Metadata

- ID: `github-recent__mbarbine__platphorm-radio-backend`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-radio-backend`
- Remote: `git@github.com:mbarbine/platphorm-radio-backend.git`
- Primary language: YAML
- Frameworks: Jest, Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/events/route.ts`, `app/api/health/route.ts`, `app/api/mcp/events/route.ts`, `app/api/mcp/route.ts`
- Tests: 3
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/docs/page.tsx`, `components/api-docs.tsx`, `package.json`, `postcss.config.mjs`
- Tests: 3
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/events/route.ts`, `app/api/mcp/route.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/docs/page.tsx`
- Tests: 3
- LLMs context: none detected

Repository contains user-facing application page routes.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/docs.test.ts`, `__tests__/api/health.test.ts`, `__tests__/api/mcp.test.ts`
- Tests: 3
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/api-docs.tsx`, `components/audio-visualizer.tsx`, `components/event-feed.tsx`, `components/module-toggle.tsx`, `components/theme-provider.tsx`, `components/ui/button.tsx`, `components/ui/slider.tsx`, `components/ui/switch.tsx`
- Tests: 3
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/events/route.ts`, `app/api/mcp/events/route.ts`
- Tests: 3
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/feed.xml/route.ts`, `app/layout.tsx`

## Gaps

- CI workflows not detected
- LLMs context files not detected

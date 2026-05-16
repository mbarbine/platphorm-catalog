# mbarbine__threatrelay-webby

> An open-source educational platform for learning, practicing, and mastering JA4+ network fingerprinting methods. Part of the [PlatPhorm News Network](https://platphormnews.com).

## Metadata

- ID: `github-recent__mbarbine__threatrelay-webby`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__threatrelay-webby`
- Remote: `git@github.com:mbarbine/threatrelay-webby.git`
- Primary language: MDX
- Frameworks: Next.js, React, Tailwind CSS, Vitest
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
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/content/route.ts`, `app/api/docs/route.ts`, `app/api/fingerprints/route.ts`, `app/api/health/route.ts`, `app/api/mcp/register/route.ts`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/content/route.ts`, `app/api/docs/route.ts`, `components/inbound-detection-content.tsx`, `components/tutorial-content.tsx`, `package.json`, `postcss.config.mjs`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/json-ld.tsx`, `package.json`, `tsconfig.json`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-full.txt`, `public/llms.txt`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `MODERNIZATION_PLAN.md`, `package.json`, `pnpm-lock.yaml`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/register/route.ts`, `package.json`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `package.json`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/about/page.tsx`, `app/faq/page.tsx`, `app/guides/inbound-detection/page.tsx`, `app/integrations/page.tsx`, `app/roadmap/page.tsx`, `app/tutorials/advanced-labs/page.tsx`, `app/tutorials/page.tsx`, `app/tutorials/quick-labs/ja4/page.tsx`, `app/tutorials/quick-labs/ja4h/page.tsx`, `app/tutorials/quick-labs/ja4l/page.tsx`, `app/tutorials/quick-labs/ja4s/page.tsx`, `app/tutorials/quick-labs/ja4ssh/page.tsx`, `app/tutorials/quick-labs/ja4t/page.tsx`, `app/tutorials/quick-labs/ja4ts/page.tsx`, `app/tutorials/quick-labs/ja4tscan/page.tsx`, `app/tutorials/quick-labs/ja4x/page.tsx`, `app/tutorials/quick-labs/page.tsx`, `app/tutorials/quick-labs/wireshark-plugin/page.tsx`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/health/route.ts`, `MODERNIZATION_PLAN.md`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/health.test.ts`, `__tests__/social-share.test.tsx`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/breadcrumbs.tsx`, `components/inbound-detection-content.tsx`, `components/json-ld.tsx`, `components/site-footer.tsx`, `components/site-header.tsx`, `components/social-share.tsx`, `components/theme-provider.tsx`, `components/theme-toggle.tsx`, `components/tutorial-content.tsx`, `components/tutorials-shell.tsx`, `components/ui/accordion.tsx`, `components/ui/badge.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/scroll-area.tsx`, `components/ui/sheet.tsx`, `components/ui/tabs.tsx`
- Tests: 2
- LLMs context: `public/llms-full.txt`, `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.jules/sentinel.md`, `app/faq/page.tsx`, `app/roadmap/page.tsx`, `components/breadcrumbs.tsx`, `components/json-ld.tsx`, `Drafts/Vercel/ja4-vercel.md`

## Gaps

- CI workflows not detected

# mbarbine__platphorm-browserops

BrowserOps is the PlatPhormNews browser proof layer. It runs real browser journeys across trusted `*.platphormnews.com` sites, captures screenshots and artifacts, checks route/discovery/UI/accessibility compliance, and propagates W3C trace context into target requests so failures can be correlated in Trace.

## Metadata

- ID: `github-recent__mbarbine__platphorm-browserops`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-browserops`
- Remote: `git@github.com:mbarbine/platphorm-browserops.git`
- Primary language: JSON
- Frameworks: Drizzle ORM, Next.js, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `app/api/v1/runs/[id]/generate-deck/route.ts`, `package.json`
- Tests: 12
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/runs/[id]/report/route.ts`, `components/runs/readiness-report-card.tsx`
- Tests: 12
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/artifacts/route.ts`, `app/api/v1/feeds/route.ts`, `app/api/v1/feeds/sync/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/journeys/[id]/dry-run/route.ts`, `app/api/v1/journeys/[id]/route.ts`, `app/api/v1/journeys/[id]/run/route.ts`, `app/api/v1/journeys/route.ts`, `app/api/v1/network/discovery-compliance/route.ts`, `app/api/v1/network/domains/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/v1/network/graph/sync/route.ts`, `app/api/v1/network/route-compliance/route.ts`, `app/api/v1/network/run-smoke/route.ts`, `app/api/v1/network/sites/route.ts`, `app/api/v1/network/sync/route.ts`, `app/api/v1/network/trace-propagation/route.ts`, `app/api/v1/network/trusted-domains/route.ts`, `app/api/v1/network/ui-compliance/route.ts`, `app/api/v1/readiness/route.ts`, `app/api/v1/red-team/route.ts`, `app/api/v1/runs/[id]/artifacts/route.ts`, `app/api/v1/runs/[id]/cancel/route.ts`, `app/api/v1/runs/[id]/export-sheets/route.ts`, `app/api/v1/runs/[id]/generate-deck/route.ts`, `app/api/v1/runs/[id]/publish-docs/route.ts`, `app/api/v1/runs/[id]/report/route.ts`
- Tests: 12
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/security/auth.ts`, `package.json`
- Tests: 12
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/v1/runs/[id]/publish-docs/route.ts`, `app/docs/page.tsx`, `BUILD_STATUS.md`, `DEPLOYMENT.md`, `docs/ARCHITECTURE.md`, `docs/INTEGRATIONS.md`, `docs/SCHEMA.md`, `drizzle.config.ts`, `lib/config/env.ts`, `lib/integrations/docs.ts`, `lib/neon/client.ts`, `lib/platform/contract.ts`, `lib/publish/docs-verification.ts`, `lib/publish/evals-export.ts`, `lib/publish/trace-export.ts`, `lib/registry/canonical.ts`, `package.json`, `postcss.config.mjs`, `README.md`
- Tests: 12
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `BUILD_STATUS.md`
- Tests: 12
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/runs/[id]/export-sheets/route.ts`, `app/llms-index.json/route.ts`, `lib/publish/evals-export.ts`, `lib/publish/trace-export.ts`, `package-lock.json`, `package.json`, `tests/mcp-json-rpc.test.ts`, `tsconfig.json`, `vercel.json`
- Tests: 12
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `lib/neon/schema.ts`, `package.json`
- Tests: 12
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 12
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/artifacts/store.ts`, `package.json`
- Tests: 12
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/platform/contract.ts`
- Tests: 12
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/config/env.ts`, `lib/integrations/claws.ts`, `lib/platform/contract.ts`, `package.json`
- Tests: 12
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 12
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/journeys/page.tsx`, `app/llms-index.json/route.ts`, `app/page.tsx`, `app/runs/page.tsx`, `BUILD_STATUS.md`, `lib/config/env.ts`, `lib/integrations/agentui.ts`, `lib/integrations/claws.ts`, `lib/integrations/docs.ts`, `lib/integrations/evals.ts`, `lib/integrations/mcp.ts`, `lib/integrations/network-graph.ts`, `lib/integrations/sandbox.ts`, `lib/integrations/spec.ts`, `lib/integrations/trace.ts`, `lib/integrations/webhooklab.ts`, `lib/platform/contract.ts`, `lib/publish/docs-verification.ts`, `lib/publish/evals-export.ts`, `lib/publish/trace-export.ts`, `lib/registry/canonical.ts`, `lib/registry/network-sync.ts`, `package.json`
- Tests: 12
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `BUILD_STATUS.md`, `DEPLOYMENT.md`, `drizzle.config.ts`, `lib/config/env.ts`, `lib/neon/client.ts`, `lib/registry/canonical.ts`, `package.json`, `README.md`
- Tests: 12
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/artifacts/store.ts`, `lib/config/env.ts`, `lib/config/service.ts`, `lib/integrations/vercel.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 12
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `lib/integrations/mcp.ts`, `package.json`
- Tests: 12
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/network/trace-propagation/route.ts`, `app/api/v1/runs/[id]/trace/route.ts`, `lib/integrations/trace.ts`, `lib/platform/contract.ts`, `lib/publish/trace-export.ts`, `lib/registry/canonical.ts`, `package.json`
- Tests: 12
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/docs/page.tsx`, `app/faq/page.tsx`, `app/journeys/page.tsx`, `app/network/page.tsx`, `app/runs/[id]/page.tsx`, `app/runs/page.tsx`
- Tests: 12
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/journey-search.tsx`
- Tests: 12
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/network/run-smoke/route.ts`, `drizzle.config.ts`, `lib/artifacts/store.ts`, `lib/config/service.ts`, `lib/cosmic/cuid.ts`, `lib/integrations/agentui.ts`, `lib/integrations/claws.ts`, `lib/integrations/docs.ts`, `lib/integrations/evals.ts`, `lib/integrations/mcp.ts`, `lib/integrations/network-graph.ts`, `lib/integrations/sandbox.ts`, `lib/integrations/spec.ts`, `lib/integrations/trace.ts`, `lib/integrations/vercel.ts`, `lib/integrations/webhooklab.ts`, `lib/neon/client.ts`, `lib/platform/contract.ts`, `lib/publish/docs-verification.ts`, `lib/publish/evals-export.ts`, `lib/publish/trace-export.ts`, `lib/registry/canonical.ts`, `lib/registry/network-sync.ts`, `lib/security/auth.ts`, `playwright.config.ts`, `tests/mcp-json-rpc.test.ts`
- Tests: 12
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/browser/playwright-runner.ts`, `lib/integrations/spec.ts`, `playwright.config.ts`, `tests-e2e/home.spec.ts`, `tests-e2e/journeys.spec.ts`, `tests-e2e/network.spec.ts`, `tests-e2e/runs.spec.ts`, `tests/journey-synthesizer.test.ts`, `tests/mcp-json-rpc.test.ts`, `tests/platform-contract.test.ts`, `tests/registry.test.ts`, `tests/well-known.test.ts`
- Tests: 12
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/journeys/journey-list.tsx`, `components/layout/footer.tsx`, `components/layout/sidebar.tsx`, `components/layout/top-bar.tsx`, `components/runs/readiness-report-card.tsx`, `components/ui/badge.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/journey-search.tsx`
- Tests: 12
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/integrations/webhooklab.ts`, `lib/platform/contract.ts`
- Tests: 12
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.jules/bolt.md`, `app/docs/page.tsx`, `app/faq/page.tsx`, `app/feed.xml/route.ts`, `lib/integrations/vercel.ts`, `lib/registry/canonical.ts`, `patch_docs_again_v3.js`, `patch_feed.js`
- [medium] Secret-like environment variable names are referenced. Evidence: `drizzle.config.ts`, `lib/artifacts/store.ts`, `lib/integrations/vercel.ts`, `lib/neon/client.ts`, `lib/security/auth.ts`, `tests/mcp-json-rpc.test.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

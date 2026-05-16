# mbarbine__platphorm-evals

Platphorm Evals

## Metadata

- ID: `github-recent__mbarbine__platphorm-evals`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-evals`
- Remote: `git@github.com:mbarbine/platphorm-evals.git`
- Primary language: TypeScript
- Frameworks: Drizzle ORM, Next.js, React, Tailwind CSS, Vitest
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
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### OpenAPI Documentation

- ID: `api.openapi-docs`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `platphorm_schemas/openapi.json`
- Tests: 30
- LLMs context: none detected

Repository includes OpenAPI or Swagger documentation files.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/compare/route.ts`, `app/api/v1/datasets/[id]/route.ts`, `app/api/v1/datasets/route.ts`, `app/api/v1/evals/[id]/route.ts`, `app/api/v1/evals/route.ts`, `app/api/v1/gates/route.ts`, `app/api/v1/graders/[id]/route.ts`, `app/api/v1/graders/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/publish/route.ts`, `app/api/v1/registry/probe/route.ts`, `app/api/v1/registry/services/route.ts`, `app/api/v1/registry/sync/route.ts`, `app/api/v1/regressions/[id]/route.ts`, `app/api/v1/regressions/route.ts`, `app/api/v1/runs/[id]/route.ts`, `app/api/v1/runs/route.ts`, `app/api/v1/targets/import/route.ts`, `app/api/v1/templates/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/api/auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.github/workflows/ci.yml`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `.github/workflows/ci.yml`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/v1/publish/route.ts`, `app/docs/page.tsx`, `app/settings/page.tsx`, `BUILD_FIX_SUMMARY.md`, `BUILD_INDEX.md`, `COMMIT_MESSAGE.md`, `docs/API_SURFACE.md`, `docs/ARCHITECTURE.md`, `docs/BUILD_CHECKLIST.md`, `docs/BUILD_GUIDE.md`, `docs/DATA_MODEL.md`, `docs/IMPLEMENTATION_CHECKLIST.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/INTEGRATIONS.md`, `docs/ROADMAP.md`, `docs/TROUBLESHOOTING.md`, `lib/config/env.ts`, `lib/integrations/docs-client.ts`, `lib/neon/client.ts`, `lib/standards/network-manifest.ts`, `package.json`, `postcss.config.mjs`, `tests/integration/no-404-ui.test.tsx`, `tests/integration/regressions-ui-data-flow.test.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/dashboard/page.tsx`, `components/evals/suite-overview.tsx`, `components/status/honest-status-page.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/trust.json/route.ts`, `app/api/v1/targets/import/route.ts`, `package-lock.json`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `lib/neon/schema.ts`, `package.json`, `test-db-schema.ts`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/ci.yml`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.env.example`
- Tests: 30
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/health/route.ts`, `BUILD_INDEX.md`, `docs/IMPLEMENTATION_PLAN.md`, `lib/config/env.ts`, `lib/cosmic/claws-client.ts`, `lib/integrations/claws-client.ts`, `lib/registry/claws-sync.ts`, `lib/standards/network-manifest.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### Neon Integration

- ID: `integration.neon`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/neon/client.ts`, `package.json`, `tests/integration/no-404-ui.test.tsx`, `tests/integration/regressions-ui-data-flow.test.tsx`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Neon integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/.well-known/trust.json/route.ts`, `app/api/health/route.ts`, `app/settings/page.tsx`, `app/usage/page.tsx`, `BUILD_INDEX.md`, `components/registry/registry-sync-button.tsx`, `docs/IMPLEMENTATION_PLAN.md`, `lib/api/auth.ts`, `lib/config/build-validation.ts`, `lib/config/env.ts`, `lib/config/policy.ts`, `lib/discovery/openapi.ts`, `lib/integrations/agentui-client.ts`, `lib/integrations/browserops-client.ts`, `lib/integrations/claws-client.ts`, `lib/integrations/docs-client.ts`, `lib/integrations/mcp-hub-client.ts`, `lib/integrations/network-graph-client.ts`, `lib/integrations/sandbox-client.ts`, `lib/integrations/spec-client.ts`, `lib/integrations/trace-client.ts`, `lib/integrations/webhooklab-client.ts`, `lib/local/persistent-store.ts`, `lib/registry/claws-sync.ts`, `lib/registry/mcp-sync.ts`, `lib/standards/llms.ts`, `lib/standards/network-manifest.ts`, `package.json`, `tests/policy.test.ts`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `.github/workflows/ci.yml`, `app/settings/page.tsx`, `BUILD_FIX_SUMMARY.md`, `BUILD_INDEX.md`, `COMMIT_MESSAGE.md`, `docs/BUILD_CHECKLIST.md`, `docs/BUILD_GUIDE.md`, `docs/IMPLEMENTATION_PLAN.md`, `lib/config/env.ts`, `lib/neon/client.ts`, `package.json`, `tests/integration/no-404-ui.test.tsx`, `tests/integration/regressions-ui-data-flow.test.tsx`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/api/correlation.ts`, `lib/config/build-validation.ts`, `lib/config/service.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `tests/api-correlation.test.ts`
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
- Source paths: `.env.example`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/changelog/page.tsx`, `app/methodology/page.tsx`, `app/runs/[id]/trace/page.tsx`, `lib/cosmic/trace-client.ts`, `lib/integrations/trace-client.ts`, `lib/standards/network-manifest.ts`, `lib/utils/logger.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(public)/page.tsx`, `app/[...slug]/page.tsx`, `app/approvals/page.tsx`, `app/benchmarks/page.tsx`, `app/builder/datasets/[id]/page.tsx`, `app/builder/datasets/new/page.tsx`, `app/builder/evals/[id]/page.tsx`, `app/builder/evals/new/page.tsx`, `app/builder/gates/[id]/page.tsx`, `app/builder/gates/new/page.tsx`, `app/builder/graders/[id]/page.tsx`, `app/builder/graders/new/page.tsx`, `app/changelog/page.tsx`, `app/dashboard/page.tsx`, `app/datasets/page.tsx`, `app/docs/page.tsx`, `app/evals/page.tsx`, `app/features/page.tsx`, `app/gates/page.tsx`, `app/graders/page.tsx`, `app/methodology/page.tsx`, `app/registry/page.tsx`, `app/regressions/[id]/page.tsx`, `app/regressions/page.tsx`, `app/runs/[id]/browser/page.tsx`, `app/runs/[id]/compare/page.tsx`, `app/runs/[id]/page.tsx`, `app/runs/[id]/trace/page.tsx`, `app/runs/[id]/webhook/page.tsx`, `app/runs/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/api/health/route.ts`, `docs/TROUBLESHOOTING.md`, `lib/api/auth.ts`, `lib/api/correlation.ts`, `lib/config/build-validation.ts`, `lib/config/policy.ts`, `lib/config/service.ts`, `lib/cosmic/claws-client.ts`, `lib/cosmic/cuid.ts`, `lib/cosmic/key-generator.ts`, `lib/cosmic/trace-client.ts`, `lib/integrations/agentui-client.ts`, `lib/integrations/browserops-client.ts`, `lib/integrations/claws-client.ts`, `lib/integrations/docs-client.ts`, `lib/integrations/mcp-hub-client.ts`, `lib/integrations/network-graph-client.ts`, `lib/integrations/sandbox-client.ts`, `lib/integrations/spec-client.ts`, `lib/integrations/trace-client.ts`, `lib/integrations/webhooklab-client.ts`, `lib/local/persistent-store.ts`, `lib/neon/client.ts`, `lib/registry/claws-sync.ts`, `lib/registry/mcp-sync.ts`, `lib/standards/network-manifest.ts`, `lib/utils/logger.ts`, `scripts/seed-default-suites.ts`, `tests/api-correlation.test.ts`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/integrations/spec-client.ts`, `lib/tests/registry/sync.test.ts`, `test-db-schema.ts`, `test-neon.ts`, `test-neon2.ts`, `test-neon3.ts`, `tests/api-auth.test.ts`, `tests/api-correlation.test.ts`, `tests/claws-client.test.ts`, `tests/cn.test.ts`, `tests/grader-service.test.ts`, `tests/graders-page.test.tsx`, `tests/integration/discovery.test.ts`, `tests/integration/health.test.ts`, `tests/integration/mcp.test.ts`, `tests/integration/no-404-ui.test.tsx`, `tests/integration/openapi.test.ts`, `tests/integration/regressions-ui-data-flow.test.tsx`, `tests/integration/service-probing.test.ts`, `tests/manifest.test.ts`, `tests/mcp-hub-client.test.ts`, `tests/mcp-route.test.ts`, `tests/mcp-tools.test.ts`, `tests/network-coverage-graph.test.ts`, `tests/network-graph-client.test.ts`, `tests/policy.test.ts`, `tests/registry-services.test.ts`, `tests/registry/sync.test.ts`, `tests/run-orchestrator.test.ts`, `tests/service-config.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/evals/suite-overview.tsx`, `components/layout/app-shell.tsx`, `components/registry/registry-sync-button.tsx`, `components/registry/service-grid.tsx`, `components/status/honest-status-page.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/health/route.ts`, `app/runs/[id]/webhook/page.tsx`, `lib/integrations/webhooklab-client.ts`, `lib/standards/network-manifest.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/api/v1/compare/route.ts`, `app/api/v1/regressions/[id]/route.ts`, `app/feed.xml/route.ts`, `app/regressions/[id]/page.tsx`, `app/runs/[id]/compare/page.tsx`, `app/runs/[id]/page.tsx`, `app/runs/[id]/trace/page.tsx`, `app/targets/[service]/[capability]/page.tsx`, `lib/datasets/dataset-service.ts`, `lib/evals/run-orchestrator.ts`, `lib/evals/suite-service.ts`, `lib/gates/release-gate-service.ts`, `lib/graders/grader-service.ts`, `lib/registry/service-probing.ts`, `lib/registry/sync.ts`, `lib/scorecards/scorecard-service.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`, `lib/api/auth.ts`, `lib/cosmic/key-generator.ts`, `lib/neon/client.ts`, `scripts/seed-default-suites.ts`, `tests/integration/no-404-ui.test.tsx`, `tests/integration/regressions-ui-data-flow.test.tsx`

## Gaps

- LLMs context files not detected

# mbarbine__platphorm-insights

> AI-First Web Performance & Discovery Analysis Platform

## Metadata

- ID: `github-recent__mbarbine__platphorm-insights`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-insights`
- Remote: `git@github.com:mbarbine/platphorm-insights.git`
- Primary language: TypeScript
- Frameworks: Next.js
- Maturity: deprecated
- Confidence: high

## Capabilities

### Accessibility UI Support

- ID: `accessibility.ui-a11y`
- Type: accessibility
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/accessibility/page.tsx`, `app/[locale]/results/components/accessibility-tab.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates ARIA, accessibility, keyboard, or screen-reader oriented UI behavior.

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `components/analysis/ai-recommendations.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/advanced-scores/route.ts`, `app/api/v1/insights/route.ts`, `app/api/v1/network/reports/latest/route.ts`, `app/api/v1/reports/[id]/route.ts`, `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`, `components/analysis/category-score-card.tsx`, `components/analysis/score-gauge.tsx`, `components/insights-provider.tsx`, `lib/insights/page-insights-sdk.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/cleanup/route.ts`, `app/api/cron/maintenance/route.ts`, `app/api/cron/mcp-ping/route.ts`, `app/api/cron/scheduled-analyses/route.ts`, `app/api/cron/sitemap-update/route.ts`, `app/api/docs/route.ts`, `app/api/events/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/og/route.tsx`, `app/api/v1/advanced-scores/route.ts`, `app/api/v1/analyses/[id]/export/route.ts`, `app/api/v1/analyses/[id]/route.ts`, `app/api/v1/analyses/[id]/status/route.ts`, `app/api/v1/analyze/route.ts`, `app/api/v1/bulk/route.ts`, `app/api/v1/compare/[id]/route.ts`, `app/api/v1/compare/route.ts`, `app/api/v1/dashboard/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/history/route.ts`, `app/api/v1/insights/route.ts`, `app/api/v1/integrations/platphorm/route.ts`, `app/api/v1/llm-instructions/route.ts`, `app/api/v1/network/analyze/route.ts`, `app/api/v1/network/compliance/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/v1/network/rankings/route.ts`, `app/api/v1/network/reports/latest/route.ts`, `app/api/v1/network/route-compliance/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/platform/auth.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/[locale]/jobs/page.tsx`, `app/api/cron/cleanup/route.ts`, `app/api/cron/maintenance/route.ts`, `app/api/cron/mcp-ping/route.ts`, `app/api/cron/scheduled-analyses/route.ts`, `app/api/cron/sitemap-update/route.ts`, `tests/api/cron.test.ts`, `tests/api/cron/sitemap-update.test.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/[locale]/docs/page.tsx`, `app/api/docs/route.ts`, `app/api/v1/analyses/[id]/status/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/webhooks/route.ts`, `app/sitemap.ts`, `COMPLETE_INTEGRATION_SUMMARY.md`, `INTEGRATION_EXAMPLES.md`, `lib/db.ts`, `package.json`, `postcss.config.mjs`, `README.md`, `tests/setup.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/dashboard/page.tsx`, `app/api/v1/analyses/[id]/status/route.ts`, `app/api/v1/dashboard/route.ts`, `components/analysis/stats-overview.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/analyses/[id]/export/route.ts`, `app/api/v1/results/[id]/export/route.ts`, `app/feed.xml/route.ts`, `components/analysis/export-button.tsx`, `components/seo/json-ld.tsx`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/001_pageinsights_schema.sql`, `scripts/001-create-schema.sql`, `scripts/002-enhanced-schema.sql`, `scripts/007-enhanced-analysis-schema.sql`, `scripts/008-enhanced-comparisons-schema.sql`, `scripts/migrations/001_create_schemas.sql`, `scripts/migrations/002_registry_layer.sql`, `scripts/migrations/003_core_layer.sql`, `scripts/migrations/004_evidence_layer.sql`, `scripts/migrations/005_results_layer.sql`, `scripts/migrations/006_advisory_layer.sql`, `scripts/migrations/007_ops_layer.sql`, `scripts/migrations/008_seed_registry_v1.sql`, `scripts/migrations/009_backfill_existing_data.sql`, `scripts/migrations/010_compatibility_views.sql`, `scripts/migrations/011_row_level_security.sql`, `scripts/migrations/012_retention_maintenance.sql`, `scripts/migrations/013_seed_test_definitions.sql`
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
- Source paths: `app/[locale]/terms/page.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `lib/platform/auth.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/advanced-scores/route.ts`, `components/analysis/category-score-card.tsx`, `components/analysis/score-gauge.tsx`, `scripts/migrations/011_row_level_security.sql`
- Tests: 30
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/ai-plugin.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/[locale]/docs/page.tsx`, `app/[locale]/network/page.tsx`, `app/[locale]/page.tsx`, `app/api/docs/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/analyses/[id]/status/route.ts`, `app/api/webhooks/route.ts`, `app/sitemap.ts`, `COMPLETE_INTEGRATION_SUMMARY.md`, `INTEGRATION_EXAMPLES.md`, `lib/db.ts`, `package.json`, `README.md`, `tests/setup.ts`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/mcp-ping/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/validate/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/results/[id]/trace/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/integrations/trace-sdk.ts`, `lib/logger.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/about/page.tsx`, `app/[locale]/accessibility/page.tsx`, `app/[locale]/compare/page.tsx`, `app/[locale]/dashboard/page.tsx`, `app/[locale]/data-policy/page.tsx`, `app/[locale]/docs/page.tsx`, `app/[locale]/faq/page.tsx`, `app/[locale]/history/page.tsx`, `app/[locale]/jobs/page.tsx`, `app/[locale]/network/page.tsx`, `app/[locale]/page.tsx`, `app/[locale]/privacy/page.tsx`, `app/[locale]/rankings/page.tsx`, `app/[locale]/results/page.tsx`, `app/[locale]/terms/page.tsx`, `app/[locale]/tests/page.tsx`, `app/[locale]/timeline/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/scoring/searchability/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.Jules/sentinel.md`, `app/api/cron/mcp-ping/route.ts`, `app/api/cron/scheduled-analyses/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/analyses/[id]/status/route.ts`, `app/api/v1/bulk/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/webhooks/route.ts`, `app/feed.xml/route.ts`, `app/layout.tsx`, `app/llms-full.txt/route.ts`, `app/llms.txt/route.ts`, `app/robots.ts`, `app/sitemap.ts`, `COMPLETE_INTEGRATION_SUMMARY.md`, `INTEGRATION_EXAMPLES.md`, `lib/api/pagespeed.ts`, `lib/config/site.ts`, `lib/db.ts`, `lib/insights/page-insights-sdk.ts`, `lib/integrations/trace-sdk.ts`, `lib/logger.ts`, `lib/mcp/client.ts`, `lib/platform/auth.ts`, `next.config.mjs`, `tests/api/cron.test.ts`, `tests/api/cron/sitemap-update.test.ts`, `tests/api/webhooks/route.test.ts`, `tests/mcp/client.test.ts`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/api/trace-propagation.test.ts`, `__tests__/e2e/full-integration.test.ts`, `__tests__/integrations/pageinsights-integration.test.ts`, `__tests__/quality/bridge.test.ts`, `__tests__/quality/types.test.ts`, `components/analysis/comprehensive-test-panel.tsx`, `components/analysis/test-comparison.tsx`, `components/analysis/test-results-panel.tsx`, `lib/phase2/test-registry.ts`, `scripts/db-tests/test_db_bulk.ts`, `scripts/db-tests/test_score.ts`, `scripts/db-tests/test_scoring.ts`, `scripts/db-tests/test_searchability.ts`, `scripts/db-tests/test_sec.ts`, `tests/analysis/carbon-footprint.test.ts`, `tests/analysis/core-web-vitals.test.ts`, `tests/analysis/discovery_engine.test.ts`, `tests/analysis/discovery_engine2.test.ts`, `tests/analysis/engine.test.ts`, `tests/analysis/internationalization.test.ts`, `tests/api/analyze.test.ts`, `tests/api/carbon.test.ts`, `tests/api/compare-enhanced.test.ts`, `tests/api/compare.test.ts`, `tests/api/cron.test.ts`, `tests/api/cron/sitemap-update.test.ts`, `tests/api/health.test.ts`, `tests/api/health/route.test.ts`, `tests/api/llms-txt.test.ts`, `tests/api/mcp.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty unknown
- Source paths: `app/[locale]/results/components/accessibility-tab.tsx`, `app/[locale]/results/components/check-result.tsx`, `app/[locale]/results/components/compare-tab.tsx`, `app/[locale]/results/components/discovery-tab.tsx`, `app/[locale]/results/components/i18n-tab.tsx`, `app/[locale]/results/components/security-tab.tsx`, `app/[locale]/results/components/seo-tab.tsx`, `app/[locale]/results/components/validation-tab.tsx`, `components/analysis/ai-recommendations.tsx`, `components/analysis/analysis-progress.tsx`, `components/analysis/analysis-skeleton.tsx`, `components/analysis/carbon-footprint.tsx`, `components/analysis/category-score-card.tsx`, `components/analysis/command-viewer.tsx`, `components/analysis/comprehensive-test-panel.tsx`, `components/analysis/cwv-cards.tsx`, `components/analysis/export-button.tsx`, `components/analysis/history-trend.tsx`, `components/analysis/opportunities-list.tsx`, `components/analysis/score-gauge.tsx`, `components/analysis/screenshot-viewer.tsx`, `components/analysis/security-headers.tsx`, `components/analysis/site-suggestions.tsx`, `components/analysis/stats-overview.tsx`, `components/analysis/test-comparison.tsx`, `components/analysis/test-results-panel.tsx`, `components/analysis/trend-chart.tsx`, `components/analysis/url-input.tsx`, `components/insights-provider.tsx`, `components/layout/breadcrumbs.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`, `tests/api/webhooks/route.test.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.Jules/bolt.md`, `app/[locale]/dashboard/dashboard-client.tsx`, `app/[locale]/timeline/timeline-client.tsx`, `app/api/cron/maintenance/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/advanced-scores/route.ts`, `app/api/v1/analyze/route.ts`, `app/api/v1/compare/route.ts`, `app/api/v1/llm-instructions/route.ts`, `app/api/v1/scoring/answerability/route.ts`, `app/api/v1/scoring/audience/route.ts`, `app/api/v1/scoring/readability/route.ts`, `app/api/v1/scoring/searchability/route.ts`, `app/api/v1/validate/route.ts`, `app/layout.tsx`, `components/layout/breadcrumbs.tsx`, `components/seo/json-ld.tsx`, `components/ui/chart.tsx`, `hooks/use-analysis.ts`, `lib/api/pagespeed.ts`, `lib/api/platphorm.ts`, `lib/api/security.ts`, `lib/db.ts`, `lib/integrations/server-insights.ts`, `lib/phase2/validation.ts`, `lib/scoring/design.ts`, `lib/validators/accessibility.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/mcp/route.ts`, `app/api/v1/analyses/[id]/status/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/webhooks/route.ts`, `app/sitemap.ts`, `COMPLETE_INTEGRATION_SUMMARY.md`, `INTEGRATION_EXAMPLES.md`, `lib/api/pagespeed.ts`, `lib/db.ts`, `lib/integrations/trace-sdk.ts`, `lib/platform/auth.ts`, `tests/api/cron.test.ts`, `tests/api/cron/sitemap-update.test.ts`, `tests/api/webhooks/route.test.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

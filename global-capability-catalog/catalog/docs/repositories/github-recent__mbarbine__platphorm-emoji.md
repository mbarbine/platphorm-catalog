# mbarbine__platphorm-emoji

> Score, explore, and propose emoji. Powered by the Unicode Standard.

## Metadata

- ID: `github-recent__mbarbine__platphorm-emoji`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-emoji`
- Remote: `git@github.com:mbarbine/platphorm-emoji.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### Accessibility UI Support

- ID: `accessibility.ui-a11y`
- Type: accessibility
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/model/accessibility-review/route.ts`
- Tests: 15
- LLMs context: none detected

Source evidence indicates ARIA, accessibility, keyboard, or screen-reader oriented UI behavior.

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/model/image-prompt/route.ts`, `lib/model-adapter.ts`
- Tests: 15
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/emoji/score/route.ts`, `app/api/score/route.ts`, `app/api/v1/combinations/score/route.ts`, `app/api/v1/emoji/score/route.ts`, `app/api/v1/proposals/score/route.ts`, `app/api/v1/score/route.ts`, `app/api/v1/sentiment/score/route.ts`, `components/landing/emoji-score-hero.tsx`, `components/landing/sentiment-score-panel.tsx`, `components/results/factor-scores.tsx`, `components/results/score-radar-chart.tsx`
- Tests: 15
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`, `app/api/docs/route.ts`, `app/api/emoji/all/route.ts`, `app/api/emoji/categories/route.ts`, `app/api/emoji/local-search/route.ts`, `app/api/emoji/recent/route.ts`, `app/api/emoji/score/route.ts`, `app/api/emoji/search/route.ts`, `app/api/emoji/suggest/route.ts`, `app/api/emoji/timeline/route.ts`, `app/api/factors/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/results/[id]/route.ts`, `app/api/results/route.ts`, `app/api/score/route.ts`, `app/api/v1/combinations/score/route.ts`, `app/api/v1/datasets/emoji/inventory/exists/route.ts`, `app/api/v1/datasets/emoji/inventory/search/route.ts`, `app/api/v1/datasets/emoji/keywords/search/route.ts`, `app/api/v1/emoji/from-description/route.ts`, `app/api/v1/emoji/score/route.ts`, `app/api/v1/emojis/[codepoint]/route.ts`, `app/api/v1/emojis/categories/route.ts`, `app/api/v1/emojis/route.ts`, `app/api/v1/emojis/search/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/mcp/discover/route.ts`, `app/api/v1/mcp/register/route.ts`, `app/api/v1/mcp/tools/route.ts`
- Tests: 15
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 15
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cron/refresh/route.ts`
- Tests: 15
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/docs/page.tsx`, `docs/MCP_INTEGRATION.md`, `docs/PROJECT_PLAN.md`, `package.json`, `postcss.config.mjs`
- Tests: 15
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/model/status/route.ts`
- Tests: 15
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/proposals/[id]/download/route.ts`, `app/api/v1/proposals/[id]/export/route.ts`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 15
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 15
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/submit/page.tsx`, `components/submit/proposal-form.tsx`, `components/submit/proposal-generator.tsx`, `components/ui/form.tsx`, `lib/platform.ts`, `package.json`
- Tests: 15
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/emoji/score/route.ts`, `app/api/score/route.ts`, `app/api/v1/combinations/score/route.ts`, `app/api/v1/emoji/score/route.ts`, `app/api/v1/proposals/score/route.ts`, `app/api/v1/score/route.ts`, `app/api/v1/sentiment/score/route.ts`, `components/landing/emoji-score-hero.tsx`, `components/landing/sentiment-score-panel.tsx`, `components/results/factor-scores.tsx`, `components/results/score-radar-chart.tsx`
- Tests: 15
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### Anthropic Integration

- ID: `integration.anthropic`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/model-adapter.ts`, `package.json`
- Tests: 15
- LLMs context: none detected

Repository has source-backed indicators for a Anthropic integration.

### Google Integration

- ID: `integration.google`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/model-adapter.ts`, `package.json`
- Tests: 15
- LLMs context: none detected

Repository has source-backed indicators for a Google integration.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/model-adapter.ts`, `package.json`
- Tests: 15
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/page.tsx`, `app/docs/page.tsx`, `app/faq/page.tsx`, `components/submit/proposal-form.tsx`, `lib/discovery.ts`, `lib/mcp-server.ts`, `lib/model-adapter.ts`, `lib/platform.ts`, `package.json`
- Tests: 15
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `package.json`
- Tests: 15
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `package.json`
- Tests: 15
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/v1/mcp/discover/route.ts`, `app/api/v1/mcp/register/route.ts`, `app/api/v1/mcp/tools/route.ts`, `lib/mcp-server.ts`, `package.json`
- Tests: 15
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/proposals/[id]/trace/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/platform.ts`, `package.json`
- Tests: 15
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/about/page.tsx`, `app/api/page.tsx`, `app/docs/page.tsx`, `app/explore/page.tsx`, `app/faq/page.tsx`, `app/new/page.tsx`, `app/propose/page.tsx`, `app/recently-added/page.tsx`, `app/results/[id]/page.tsx`, `app/submit/page.tsx`, `app/timeline/page.tsx`
- Tests: 15
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/emoji/local-search/route.ts`, `app/api/emoji/search/route.ts`, `app/api/v1/datasets/emoji/inventory/search/route.ts`, `app/api/v1/datasets/emoji/keywords/search/route.ts`, `app/api/v1/emojis/search/route.ts`
- Tests: 15
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `lib/model-adapter.ts`, `lib/platform.ts`
- Tests: 15
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 15
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `tests/api-routes.test.ts`, `tests/app/api/v1/datasets/emoji/inventory/exists/route.test.ts`, `tests/config.test.ts`, `tests/emoji-database.test.ts`, `tests/emoji-from-description.test.ts`, `tests/i18n.test.ts`, `tests/llms-discovery.test.ts`, `tests/mcp-client-mock.test.ts`, `tests/mcp-client.test.ts`, `tests/mcp-manifest.test.ts`, `tests/mcp-registration.test.ts`, `tests/scoring-engine.test.ts`, `tests/store.test.ts`, `tests/types.test.ts`, `tests/utils.test.ts`
- Tests: 15
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/explore/emoji-explorer.tsx`, `components/landing/cta-section.tsx`, `components/landing/emoji-score-hero.tsx`, `components/landing/factors-section.tsx`, `components/landing/hero-section.tsx`, `components/landing/how-it-works-section.tsx`, `components/landing/proposal-cta-section.tsx`, `components/landing/sentiment-score-panel.tsx`, `components/page-breadcrumbs.tsx`, `components/ph3ar-easter-egg.tsx`, `components/recent/recent-emoji-view.tsx`, `components/results/factor-scores.tsx`, `components/results/result-detail.tsx`, `components/results/score-radar-chart.tsx`, `components/results/tier-badge.tsx`, `components/site-footer.tsx`, `components/site-header.tsx`, `components/submit/proposal-form.tsx`, `components/submit/proposal-generator.tsx`, `components/theme-provider.tsx`, `components/theme-toggle.tsx`, `components/timeline/timeline-view.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button.tsx`
- Tests: 15
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.Jules/sentinel.md`, `app/faq/page.tsx`, `app/layout.tsx`, `components/page-breadcrumbs.tsx`, `components/recent/recent-emoji-view.tsx`, `components/results/result-detail.tsx`, `components/timeline/timeline-view.tsx`, `components/ui/chart.tsx`, `lib/discovery.ts`, `lib/mcp-client.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `lib/model-adapter.ts`, `lib/platform.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

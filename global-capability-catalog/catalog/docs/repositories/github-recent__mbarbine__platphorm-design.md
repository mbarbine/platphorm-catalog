# mbarbine__platphorm-design

Welcome to the documentation for Platphorm Design. This directory serves as the source of truth for all architectural, API, user experience, and testing documentation.

## Metadata

- ID: `github-recent__mbarbine__platphorm-design`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-design`
- Remote: `git@github.com:mbarbine/platphorm-design.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### Accessibility UI Support

- ID: `accessibility.ui-a11y`
- Type: accessibility
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 23
- LLMs context: none detected

Source evidence indicates ARIA, accessibility, keyboard, or screen-reader oriented UI behavior.

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/designs/[id]/prompts/route.ts`, `app/api/v1/generate/route.ts`, `components/design/ai-assistant.tsx`
- Tests: 23
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`, `lib/analytics.ts`, `package.json`
- Tests: 23
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/jsonld/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/artifacts/[id]/route.ts`, `app/api/v1/designs/[id]/artifacts/route.ts`, `app/api/v1/designs/[id]/export/route.ts`, `app/api/v1/designs/[id]/preview/route.ts`, `app/api/v1/designs/[id]/prompts/route.ts`, `app/api/v1/designs/[id]/review/browserops/route.ts`, `app/api/v1/designs/[id]/review/evals/route.ts`, `app/api/v1/designs/[id]/reviews/route.ts`, `app/api/v1/designs/[id]/route.ts`, `app/api/v1/designs/[id]/screenshot/route.ts`, `app/api/v1/designs/route.ts`, `app/api/v1/export/route.ts`, `app/api/v1/export/svg/route.ts`, `app/api/v1/generate/route.ts`, `app/api/v1/generation-runs/[id]/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/integrations/route.ts`, `app/api/v1/network/discovery-compliance/route.ts`, `app/api/v1/network/graph/route.ts`, `app/api/v1/network/graph/sync/route.ts`, `app/api/v1/network/route-compliance/route.ts`, `app/api/v1/network/sites/route.ts`, `app/api/v1/network/trusted-domains/route.ts`, `app/api/v1/reports/decks/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/api/v1/reports/sheets/route.ts`
- Tests: 23
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 23
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/v1/reports/docs/route.ts`, `app/docs/api/page.tsx`, `app/docs/architecture/page.tsx`, `app/docs/canvas/page.tsx`, `app/docs/drag-drop/page.tsx`, `app/docs/elements/page.tsx`, `app/docs/export/page.tsx`, `app/docs/integrations/data/page.tsx`, `app/docs/integrations/page.tsx`, `app/docs/integrations/svg/page.tsx`, `app/docs/mcp/page.tsx`, `app/docs/page.tsx`, `app/docs/quickstart/page.tsx`, `app/docs/sharing/page.tsx`, `app/docs/webhooks/page.tsx`, `docs/api.md`, `docs/architecture.md`, `docs/ax-ux.md`, `docs/FEATURES_IMPLEMENTED.md`, `docs/i18n.md`, `docs/README.md`, `docs/seo-aeo.md`, `lib/phorm/platform.ts`, `package.json`, `postcss.config.mjs`
- Tests: 23
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/v1/designs/[id]/export/route.ts`, `app/api/v1/export/route.ts`, `app/api/v1/export/svg/route.ts`, `app/docs/export/page.tsx`, `components/design/export-panel.tsx`, `package-lock.json`, `package.json`, `tests/api/v1-export.test.ts`, `tsconfig.json`
- Tests: 23
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 23
- LLMs context: none detected

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/design/image-uploader.tsx`
- Tests: 23
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/v1/submit/design/route.ts`, `components/ui/form.tsx`, `lib/phorm/platform.ts`, `package.json`, `tests/api/submit-design.test.ts`
- Tests: 23
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/docs/canvas/page.tsx`, `components/design/canvas.tsx`, `tests/components/canvas.test.tsx`
- Tests: 23
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/agents.json/route.ts`, `app/.well-known/mcp.json/route.ts`, `app/.well-known/trust.json/route.ts`, `app/api/jsonld/route.ts`, `app/api/mcp/route.ts`, `app/api/v1/route.ts`, `app/docs/api/page.tsx`, `app/docs/export/page.tsx`, `package.json`
- Tests: 23
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/phorm/platform.ts`, `package.json`
- Tests: 23
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 23
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 23
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `components/design/share-dialog.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `lib/phorm/platform.ts`, `package.json`
- Tests: 23
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/docs/api/page.tsx`, `app/docs/architecture/page.tsx`, `app/docs/canvas/page.tsx`, `app/docs/drag-drop/page.tsx`, `app/docs/elements/page.tsx`, `app/docs/export/page.tsx`, `app/docs/integrations/data/page.tsx`, `app/docs/integrations/page.tsx`, `app/docs/integrations/svg/page.tsx`, `app/docs/mcp/page.tsx`, `app/docs/page.tsx`, `app/docs/quickstart/page.tsx`, `app/docs/sharing/page.tsx`, `app/docs/webhooks/page.tsx`, `app/faq/page.tsx`, `app/roadmap/page.tsx`
- Tests: 23
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/health/route.ts`, `app/docs/integrations/page.tsx`, `app/docs/webhooks/page.tsx`, `lib/analytics.ts`, `lib/api/mcp-client.ts`, `lib/api/middleware.ts`, `lib/phorm/platform.ts`, `tests/api/submit-design.test.ts`, `tests/api/v1-designs.test.ts`, `tests/api/v1-export.test.ts`, `tests/api/v1-integrations.test.ts`
- Tests: 23
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 23
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `e2e/layers.spec.ts`, `e2e/navigation.spec.ts`, `e2e/submit.spec.ts`, `e2e/theme.spec.ts`, `playwright.config.ts`, `test_debug.py`, `tests/api/discovery.test.ts`, `tests/api/docs.test.ts`, `tests/api/health.test.ts`, `tests/api/submit-design.test.ts`, `tests/api/v1-designs.test.ts`, `tests/api/v1-export.test.ts`, `tests/api/v1-integrations.test.ts`, `tests/app/page.test.tsx`, `tests/components/canvas.test.tsx`, `tests/components/design/header.test.tsx`, `tests/components/design/toolbar.test.tsx`, `tests/components/ui/badge.test.tsx`, `tests/components/ui/button.test.tsx`, `tests/hooks/use-design-persistence.test.ts`, `tests/hooks/use-mobile.test.tsx`, `tests/hooks/use-toast.test.ts`, `tests/lib/utils.test.ts`
- Tests: 23
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/design/ai-assistant.tsx`, `components/design/canvas.tsx`, `components/design/drop-zone.tsx`, `components/design/export-panel.tsx`, `components/design/header.tsx`, `components/design/image-uploader.tsx`, `components/design/integrations-panel.tsx`, `components/design/layers-panel-dnd.tsx`, `components/design/layers-panel.tsx`, `components/design/share-dialog.tsx`, `components/design/template-library.tsx`, `components/design/toolbar.tsx`, `components/phorm-loader.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`
- Tests: 23
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/docs/webhooks/page.tsx`
- Tests: 23
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/faq/page.tsx`, `app/layout.tsx`, `components/ui/chart.tsx`, `lib/design/export-utils.ts`, `lib/phorm/design.ts`, `lib/phorm/discovery.ts`, `lib/phorm/network.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/docs/integrations/page.tsx`, `app/docs/webhooks/page.tsx`, `lib/api/mcp-client.ts`, `lib/api/middleware.ts`, `lib/phorm/platform.ts`, `tests/api/submit-design.test.ts`, `tests/api/v1-designs.test.ts`, `tests/api/v1-export.test.ts`, `tests/api/v1-integrations.test.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

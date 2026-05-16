# mbarbine__microwave-stickers-

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

## Metadata

- ID: `github-recent__mbarbine__microwave-stickers`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__microwave-stickers-`
- Remote: `git@github.com:mbarbine/microwave-stickers-.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `postcss.config.mjs`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/form.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`, `components/ui/dialog.tsx`, `components/ui/drawer.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/form.tsx`, `components/ui/hover-card.tsx`, `components/ui/input-otp.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/menubar.tsx`, `components/ui/navigation-menu.tsx`, `components/ui/pagination.tsx`, `components/ui/popover.tsx`, `components/ui/progress.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/layout.tsx`, `components/ui/chart.tsx`
- [medium] No automated test files were detected. Evidence: `package.json`, `README.md`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected
- framework route files not detected

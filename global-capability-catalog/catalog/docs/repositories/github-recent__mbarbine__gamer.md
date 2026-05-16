# mbarbine__gamer

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

## Metadata

- ID: `github-recent__mbarbine__gamer`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__gamer`
- Remote: `git@github.com:mbarbine/gamer.git`
- Primary language: YAML
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/steam/games/route.ts`, `app/api/steam/user/route.ts`
- Tests: none detected
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

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

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/dashboard-card.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

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
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/steam/games/route.ts`, `components/retro-audio-player.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/dialog.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/steam-search-modal.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

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
- Source paths: `components/add-friend-modal.tsx`, `components/dashboard-card.tsx`, `components/friend-card.tsx`, `components/retro-audio-player.tsx`, `components/steam-search-modal.tsx`, `components/theme-provider.tsx`, `components/ui/badge.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/dialog.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/tooltip.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] No automated test files were detected. Evidence: `app/api/steam/games/route.ts`, `app/api/steam/user/route.ts`, `package.json`, `README.md`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected

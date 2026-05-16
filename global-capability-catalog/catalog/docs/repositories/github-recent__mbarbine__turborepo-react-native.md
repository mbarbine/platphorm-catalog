# mbarbine__turborepo-react-native

A [react-native](https://reactnative.dev/) app built using [expo](https://docs.expo.dev/)

## Metadata

- ID: `github-recent__mbarbine__turborepo-react-native`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__turborepo-react-native`
- Remote: `git@github.com:mbarbine/turborepo-react-native.git`
- Primary language: JSON
- Frameworks: Next.js, React
- Maturity: internal
- Confidence: high

## Capabilities

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `apps/native/package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `apps/native/package.json`, `apps/native/tsconfig.json`, `apps/web/package.json`, `apps/web/tsconfig.json`, `package.json`, `packages/typescript-config/package.json`, `packages/ui/package.json`, `packages/ui/tsconfig.json`, `turbo.json`
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

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `packages/ui/src/button.tsx`, `packages/ui/src/index.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] No automated test files were detected. Evidence: `apps/native/package.json`, `apps/native/README.md`, `apps/web/package.json`, `apps/web/README.md`, `package.json`, `packages/typescript-config/package.json`, `packages/ui/package.json`, `README.md`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected
- framework route files not detected

# ph3ar__ph3ar_radio_backend

React / Tone.js frontend for Glide Radio

## Metadata

- ID: `github-recent__ph3ar__ph3ar_radio_backend`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/ph3ar__ph3ar_radio_backend`
- Remote: `git@github.com:ph3ar/ph3ar_radio_backend.git`
- Primary language: JSON
- Frameworks: Express, React
- Maturity: deprecated
- Confidence: high

## Capabilities

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `actions_runner/bin/hashFiles/index.js`
- Tests: 2
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `client/package.json`, `client/tsconfig.json`, `dummy-server/package.json`, `dummy-server/tsconfig.json`
- Tests: 2
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `client/src/components/modules/module-renderer-styles.tsx`, `client/src/components/modules/module-renderer.tsx`
- Tests: 2
- LLMs context: none detected

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `actions_runner/bin/hashFiles/index.js`, `client/.env`
- Tests: 2
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `client/public/robots.txt`
- Tests: 2
- LLMs context: none detected

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `client/src/stats.test.ts`, `client/src/utils.test.ts`
- Tests: 2
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `client/src/components/modules/meter.tsx`, `client/src/components/modules/module-renderer-styles.tsx`, `client/src/components/modules/module-renderer.tsx`
- Tests: 2
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.github/svc.sh`

## Gaps

- CI workflows not detected
- LLMs context files not detected
- framework route files not detected

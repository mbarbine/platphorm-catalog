# process-co__npm-element-dev-server

[<img src="https://img.shields.io/npm/v/%40process.co%2Felement-dev-server" />](https://www.npmjs.com/package/@process.co/element-dev-server)

## Metadata

- ID: `github-recent__process-co__npm-element-dev-server`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/process-co__npm-element-dev-server`
- Remote: `git@github.com:process-co/npm-element-dev-server.git`
- Primary language: TypeScript
- Frameworks: Jest, React, Vite
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

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/publish-element-dev-server.yml`
- Tests: none detected
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.process/index.tsx`, `.process/vite.config.cjs`, `src/ui.tsx`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.github/workflows/publish-element-dev-server.yml`, `.process/index.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `.process/index.tsx`, `.process/vite.config.cjs`, `src/ui.tsx`
- [medium] No automated test files were detected. Evidence: `.github/README.md`, `package.json`, `README.md`

## Gaps

- test files not detected
- LLMs context files not detected
- framework route files not detected

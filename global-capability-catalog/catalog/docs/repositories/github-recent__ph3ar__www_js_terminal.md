# ph3ar__www_js_terminal

> Web-based SSH/Telnet client, useful in environments where only http(s) is allowed

## Metadata

- ID: `github-recent__ph3ar__www_js_terminal`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/ph3ar__www_js_terminal`
- Remote: `git@github.com:ph3ar/www_js_terminal.git`
- Primary language: JavaScript
- Frameworks: Express, Playwright
- Maturity: deprecated
- Confidence: high

## Capabilities

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `www_js_terminal/package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `vercel.json`, `www_js_terminal/package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `Dockerfile`, `Dockerfile.arm`, `vercel.json`, `www_js_terminal/Dockerfile`, `www_js_terminal/Dockerfile.arm`, `www_js_terminal/www_js_terminal/Dockerfile`, `www_js_terminal/www_js_terminal/Dockerfile.arm`
- Tests: 3
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`, `www_js_terminal/package.json`, `www_js_terminal/README.md`, `www_js_terminal/www_js_terminal/README.md`
- Tests: 3
- LLMs context: none detected

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `test-ux.js`, `test/app.test.js`, `test/frontend.spec.js`
- Tests: 3
- LLMs context: none detected

Repository includes automated test files.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `public/hterm_all.js`, `www_js_terminal/public/hterm_all.js`

## Gaps

- CI workflows not detected
- LLMs context files not detected
- framework route files not detected

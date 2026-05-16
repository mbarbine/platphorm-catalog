# mbarbine__cdf-sanitize

python -m app.cdf_redactor input/sample_cardiology_report.cdf output/redacted_cardiology_report.cdf --config app/config.json --llm --debug

## Metadata

- ID: `github-recent__mbarbine__cdf-sanitize`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__cdf-sanitize`
- Remote: `git@github.com:mbarbine/cdf-sanitize.git`
- Primary language: Python
- Frameworks: none detected
- Maturity: prototype
- Confidence: medium

## Capabilities

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: prototype
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.github/workflows/release.yml`
- Tests: 1
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: prototype
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/codeql.yml`, `.github/workflows/docker-tests.yml`, `.github/workflows/lint.yml`, `.github/workflows/nightly-e2e.yml`, `.github/workflows/release.yml`, `.github/workflows/tests.yml`, `docker-compose.yml`, `Dockerfile`
- Tests: 1
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: prototype
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/release.yml`
- Tests: 1
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: prototype
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/tests/test_cdf_redactor.py`
- Tests: 1
- LLMs context: none detected

Repository includes automated test files.

## Repository Risks

- None recorded.

## Gaps

- LLMs context files not detected
- framework route files not detected

# mbarbine__aws-lab

These files are default error files that can be customized

## Metadata

- ID: `github-recent__mbarbine__aws-lab`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__aws-lab`
- Remote: `git@github.com:mbarbine/aws-lab.git`
- Primary language: YAML
- Frameworks: none detected
- Maturity: deprecated
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.env`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `.env`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.env`, `terraform/lambda/package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `.env`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `terraform/lambda/package-lock.json`, `terraform/lambda/package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/build-deepstack.yml`, `.github/workflows/build-portainer.yml`, `.github/workflows/build-privatebin.yml`, `.github/workflows/build-uptime-kuma.yml`, `.github/workflows/deploy.yml`, `.github/workflows/main.yml`, `.github/workflows/static.yml`, `docker-compose.yml`, `docker/deepstack/Dockerfile`, `docker/haproxy/Dockerfile`, `docker/portainer/Dockerfile`, `docker/privatebin/Dockerfile`, `docker/uptime-kuma/Dockerfile`
- Tests: none detected
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `terraform/lambda/index.js`, `terraform/lambda/package-lock.json`, `terraform/lambda/package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.env`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `docker-compose.yml`, `README.md`, `run_all.sh`, `terraform/lambda/index.js`, `terraform/lambda/package-lock.json`, `terraform/lambda/package.json`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### S3 Integration

- ID: `integration.s3`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `backup/s3_backup.sh`, `docker-compose.yml`, `README.md`, `run_all.sh`, `terraform/lambda/package-lock.json`, `terraform/lambda/package.json`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a S3 integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.env`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.env`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

## Repository Risks

- [critical] Secret-like literal values were detected in source. Samples are redacted in scan output. Evidence: `.env`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env`
- [medium] No automated test files were detected. Evidence: `docker/haproxy/errors/README`, `README.md`, `terraform/lambda/package.json`, `tests/readme.md`

## Gaps

- test files not detected
- LLMs context files not detected
- framework route files not detected

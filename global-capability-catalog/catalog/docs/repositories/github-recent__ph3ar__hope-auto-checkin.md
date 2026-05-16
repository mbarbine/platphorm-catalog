# ph3ar__hope-auto-checkin

Smart volunteer shift automation for HOPE conference staff and volunteers.

## Metadata

- ID: `github-recent__ph3ar__hope-auto-checkin`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/ph3ar__hope-auto-checkin`
- Remote: `git@github.com:ph3ar/hope-auto-checkin.git`
- Primary language: JavaScript
- Frameworks: none detected
- Maturity: prototype
- Confidence: medium

## Capabilities

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: prototype
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/main.yml`, `.github/workflows/test.yml`
- Tests: none detected
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: prototype
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

## Repository Risks

- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`
- [medium] No automated test files were detected. Evidence: `README.md`

## Gaps

- test files not detected
- LLMs context files not detected
- framework route files not detected

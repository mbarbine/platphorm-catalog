# mbarbine__job-manager

This guide explains how to use the DigitalOcean App Platform to run a Job Manager that demonstrates leases in a scalable environment.

## Metadata

- ID: `github-recent__mbarbine__job-manager`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__job-manager`
- Remote: `git@github.com:mbarbine/job-manager.git`
- Primary language: JSON
- Frameworks: Jest, Next.js, Prisma, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `leases/package.json`, `package.json`, `task-service/.env`, `task-service/eslint.config.mjs`, `task-service/jsconfig.json`, `task-service/next.config.mjs`, `task-service/package.json`, `task-service/postcss.config.mjs`, `task-service/prisma/migrations/20250114235715_initial/migration.sql`, `task-service/prisma/schema.prisma`, `task-service/README.md`, `task-service/src/app/lib/generator.js`, `task-service/src/app/lib/tasks-client.js`, `task-service/tailwind.config.mjs`, `task-worker/.env`, `task-worker/main.js`, `task-worker/package.json`, `task-worker/tasks-client.js`
- Tests: 3
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.do/app.yaml`, `leases/.env`, `leases/package.json`, `leases/postcss.config.mjs`, `leases/prisma/schema.prisma`, `package.json`, `task-service/.env`, `task-service/package.json`, `task-service/postcss.config.mjs`, `task-service/prisma/schema.prisma`, `task-worker/package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `leases/jsconfig.json`, `leases/package.json`, `package.json`, `task-service/jsconfig.json`, `task-service/package.json`, `task-worker/package.json`
- Tests: 3
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `leases/package.json`, `leases/prisma/migrations/20250114235748_initial/migration.sql`, `leases/prisma/schema.prisma`, `package.json`, `task-service/package.json`, `task-service/prisma/migrations/20250114235715_initial/migration.sql`, `task-service/prisma/schema.prisma`, `task-worker/package.json`
- Tests: 3
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/build-test.yaml`, `.github/workflows/validate-app-spec.yaml`
- Tests: 3
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.do/app.yaml`, `leases/.env`, `leases/package.json`, `leases/prisma/schema.prisma`, `package.json`, `task-service/.env`, `task-service/package.json`, `task-service/prisma/schema.prisma`, `task-worker/package.json`
- Tests: 3
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `leases/.env`, `task-service/.env`, `task-service/src/app/lib/generator.js`, `task-service/src/app/lib/tasks-client.js`, `task-worker/.env`, `task-worker/main.js`, `task-worker/tasks-client.js`
- Tests: 3
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `leases/src/app/lib/leases-client.test.js`, `task-service/src/app/api/tasks/[id]/heartbeat/PUT.test.js`, `task-service/src/app/lib/worker-manager.test.js`
- Tests: 3
- LLMs context: none detected

Repository includes automated test files.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `leases/src/app/page.js`, `task-service/src/app/components/TaskGenerator.js`, `task-service/src/app/components/TasksView.js`
- [medium] Secret-like environment variable names are referenced. Evidence: `leases/.env`, `task-service/.env`

## Gaps

- LLMs context files not detected
- framework route files not detected

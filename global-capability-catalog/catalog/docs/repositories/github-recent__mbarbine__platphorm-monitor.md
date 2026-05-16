# mbarbine__platphorm-monitor

Monitor vercel projects

## Metadata

- ID: `github-recent__mbarbine__platphorm-monitor`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-monitor`
- Remote: `git@github.com:mbarbine/platphorm-monitor.git`
- Primary language: TypeScript
- Frameworks: Next.js, Playwright, React, Tailwind CSS, Vitest
- Maturity: internal
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/(dashboard)/analytics/page.tsx`, `app/api/analytics/route.ts`, `app/api/v1/analytics/route.ts`, `components/analytics/analytics-stats.tsx`, `components/analytics/anomaly-alerts.tsx`, `components/analytics/traffic-chart.tsx`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/analytics/route.ts`, `app/api/anomalies/route.ts`, `app/api/cron/register/route.ts`, `app/api/cron/snapshot/route.ts`, `app/api/deployments/[deploymentId]/events/route.ts`, `app/api/deployments/[deploymentId]/route.ts`, `app/api/deployments/route.ts`, `app/api/docs/route.ts`, `app/api/domains/route.ts`, `app/api/firewall/route.ts`, `app/api/health/route.ts`, `app/api/mcp/route.ts`, `app/api/notifications/route.ts`, `app/api/notifications/stream/route.ts`, `app/api/projects/route.ts`, `app/api/rate-limit/route.ts`, `app/api/snapshots/route.ts`, `app/api/v1/analytics/route.ts`, `app/api/v1/cache/status/route.ts`, `app/api/v1/checks/run/route.ts`, `app/api/v1/deployments/[id]/route.ts`, `app/api/v1/deployments/route.ts`, `app/api/v1/domains/[id]/route.ts`, `app/api/v1/domains/route.ts`, `app/api/v1/firewall/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/incidents/[id]/route.ts`, `app/api/v1/incidents/route.ts`, `app/api/v1/network/discovery-compliance/route.ts`, `app/api/v1/network/graph/route.ts`
- Tests: 30
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/api/auth.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `lib/db.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/cron/register/route.ts`, `app/api/cron/snapshot/route.ts`, `lib/api/auth.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/docs/page.tsx`, `docs/roadmap.md`, `package.json`, `postcss.config.mjs`
- Tests: 30
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/analytics/page.tsx`, `app/(dashboard)/deployments/page.tsx`, `app/(dashboard)/domains/page.tsx`, `app/(dashboard)/firewall/page.tsx`, `app/(dashboard)/notifications/page.tsx`, `app/(dashboard)/page.tsx`, `app/(dashboard)/projects/[projectId]/deployments/page.tsx`, `app/(dashboard)/projects/[projectId]/page.tsx`, `app/(dashboard)/projects/page.tsx`, `app/(dashboard)/settings/page.tsx`, `app/(dashboard)/system-health/page.tsx`, `app/api/v1/cache/status/route.ts`, `app/api/v1/rate-limit/status/route.ts`, `app/api/v1/status/route.ts`, `components/dashboard/cache-status.tsx`, `components/dashboard/deployment-sparkline.tsx`, `components/dashboard/health-indicator.tsx`, `components/dashboard/overview-cards.tsx`, `components/dashboard/recent-activity.tsx`, `components/deployments/deployment-status-badge.tsx`, `components/infra/VercelDomainsDashboard.tsx`, `components/shared/status-message.tsx`
- Tests: 30
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/.well-known/ai-plugin.json/route.ts`, `package.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty high
- Source paths: `package.json`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/(dashboard)/notifications/page.tsx`, `lib/anomalies/store.ts`, `lib/anomaly/__tests__/baselines.test.ts`, `lib/anomaly/baselines.ts`, `lib/cache.ts`, `lib/db.ts`, `lib/monitor/incidents.ts`, `lib/monitor/system.ts`, `lib/notifications/store.ts`, `package.json`, `pnpm-lock.yaml`, `scripts/setup-dynamodb.mjs`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a AWS integration.

### PlatPhorm Integration

- ID: `integration.platphorm`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/.well-known/ai-plugin.json/route.ts`, `app/(dashboard)/firewall/page.tsx`, `app/(dashboard)/notifications/page.tsx`, `app/api/docs/route.ts`, `app/api/mcp/route.ts`, `app/docs/page.tsx`, `app/mcp/route.ts`, `lib/monitor/trace.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a PlatPhorm integration.

### Redis Integration

- ID: `integration.redis`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `pnpm-lock.yaml`, `proxy.ts`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Redis integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/(dashboard)/deployments/page.tsx`, `app/(dashboard)/domains/page.tsx`, `app/(dashboard)/page.tsx`, `app/api/deployments/[deploymentId]/route.ts`, `app/api/deployments/route.ts`, `app/api/domains/route.ts`, `app/api/firewall/route.ts`, `app/api/projects/route.ts`, `app/infra/vercel/page.tsx`, `app/layout.tsx`, `components/layout/sidebar.tsx`, `components/settings/general-tab.tsx`, `lib/db.ts`, `lib/ja4/client.ts`, `lib/mcp/__tests__/register.test.ts`, `lib/mcp/register.ts`, `lib/monitor/system.ts`, `lib/vercel/__tests__/client.test.ts`, `lib/vercel/client.ts`, `lib/vercel/infra.ts`, `lib/webhooks/__tests__/verify.test.ts`, `lib/webhooks/verify.ts`, `package.json`, `pnpm-lock.yaml`, `proxy.ts`
- Tests: 30
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/domains/add-domain-dialog.test.tsx`, `app/(dashboard)/system-health/page.tsx`, `app/api/health/route.ts`, `app/api/v1/health/route.ts`, `app/api/v1/system-health/route.ts`, `components/dashboard/health-indicator.tsx`, `components/domains/add-domain-dialog.tsx`, `lib/monitor/constants.ts`, `lib/monitor/discovery.ts`, `lib/monitor/incidents.ts`, `lib/monitor/system.ts`, `lib/monitor/trace.ts`, `package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/(dashboard)/analytics/page.tsx`, `app/(dashboard)/deployments/page.tsx`, `app/(dashboard)/domains/page.tsx`, `app/(dashboard)/firewall/page.tsx`, `app/(dashboard)/notifications/page.tsx`, `app/(dashboard)/page.tsx`, `app/(dashboard)/projects/[projectId]/deployments/page.tsx`, `app/(dashboard)/projects/[projectId]/page.tsx`, `app/(dashboard)/projects/page.tsx`, `app/(dashboard)/settings/page.tsx`, `app/(dashboard)/system-health/page.tsx`, `app/docs/page.tsx`, `app/infra/vercel/page.tsx`
- Tests: 30
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/(dashboard)/page.tsx`, `app/api/deployments/route.ts`, `app/api/domains/route.ts`, `app/api/firewall/route.ts`, `app/api/mcp/route.ts`, `app/api/projects/route.ts`, `app/api/v1/deployments/route.ts`, `app/api/v1/domains/[id]/route.ts`, `app/api/v1/domains/route.ts`, `app/api/v1/firewall/route.ts`, `app/api/v1/projects/route.ts`, `app/api/v1/sync/vercel/route.ts`, `app/layout.tsx`, `app/mcp/route.ts`, `app/robots.ts`, `app/sitemap.ts`, `components/layout/sidebar.tsx`, `components/settings/integrations-tab.tsx`, `lib/api/auth.ts`, `lib/db.ts`, `lib/ja4/client.ts`, `lib/mcp/__tests__/register.test.ts`, `lib/mcp/client.ts`, `lib/mcp/register.ts`, `lib/monitor/constants.ts`, `lib/monitor/discovery.ts`, `lib/monitor/system.ts`, `lib/monitor/trace.ts`, `lib/vercel/client.ts`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/app/api/cron/snapshot/route.benchmark.test.ts`, `__tests__/app/api/firewall/route.test.ts`, `__tests__/components/domains/add-domain-dialog.test.tsx`, `__tests__/components/domains/dns-config-panel.test.tsx`, `__tests__/components/domains/domain-table.test.tsx`, `__tests__/components/domains/domains-client.test.tsx`, `__tests__/components/firewall/firewall-rule-editor.test.tsx`, `__tests__/lib/utils.test.ts`, `__tests__/lib/vercel/client.test.ts`, `__tests__/lib/vercel/deployments.test.ts`, `__tests__/proxy.test.ts`, `__tests__/seo-llm.test.ts`, `app/api/cron/snapshot/__tests__/route.test.ts`, `app/api/firewall/__tests__/route.test.ts`, `app/api/rate-limit/__tests__/route.test.ts`, `lib/__tests__/cache.test.ts`, `lib/__tests__/db.test.ts`, `lib/__tests__/logger.test.ts`, `lib/__tests__/utils.test.ts`, `lib/__tests__/version.test.ts`, `lib/__tests__/webhooks/store.test.ts`, `lib/anomaly/__tests__/baselines.test.ts`, `lib/anomaly/__tests__/detector.test.ts`, `lib/api/__tests__/auth.test.ts`, `lib/api/__tests__/response.test.ts`, `lib/mcp/__tests__/client.test.ts`, `lib/mcp/__tests__/handler.test.ts`, `lib/mcp/__tests__/manifest.test.ts`, `lib/mcp/__tests__/register.test.ts`, `lib/mcp/__tests__/resources.test.ts`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `__tests__/components/domains/add-domain-dialog.test.tsx`, `__tests__/components/domains/dns-config-panel.test.tsx`, `__tests__/components/domains/domain-table.test.tsx`, `__tests__/components/domains/domains-client.test.tsx`, `__tests__/components/firewall/firewall-rule-editor.test.tsx`, `components/analytics/analytics-stats.tsx`, `components/analytics/anomaly-alerts.tsx`, `components/analytics/traffic-chart.tsx`, `components/dashboard/cache-status.tsx`, `components/dashboard/deployment-sparkline.tsx`, `components/dashboard/health-indicator.tsx`, `components/dashboard/overview-cards.tsx`, `components/dashboard/recent-activity.tsx`, `components/deployments/cancel-deployment-button.tsx`, `components/deployments/deployment-row.tsx`, `components/deployments/deployment-status-badge.tsx`, `components/deployments/deployment-table.tsx`, `components/domains/add-domain-dialog.tsx`, `components/domains/dns-config-panel.tsx`, `components/domains/domain-stats.tsx`, `components/domains/domain-table.tsx`, `components/domains/domains-by-project.tsx`, `components/domains/domains-client.tsx`, `components/domains/subdomains-view.tsx`, `components/firewall/firewall-rule-editor.tsx`, `components/firewall/firewall-rules-table.tsx`, `components/firewall/rule-editor/rule-action.tsx`, `components/firewall/rule-editor/rule-basic-info.tsx`, `components/firewall/rule-editor/rule-conditions.tsx`, `components/infra/DeploymentList.tsx`
- Tests: 30
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/deployments/[deploymentId]/events/route.ts`, `app/api/webhooks/history/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/vercel/route.ts`, `lib/api/auth.ts`, `lib/webhooks/__tests__/verify.test.ts`, `lib/webhooks/outbound.ts`, `lib/webhooks/verify.ts`
- Tests: 30
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.Jules/sentinel.md`, `app/layout.tsx`, `components/shared/project-selector.tsx`, `lib/mcp/client.ts`, `lib/mcp/tools.ts`, `lib/monitor/checks.ts`, `lib/monitor/discovery.ts`, `lib/vercel/client.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`, `app/(dashboard)/page.tsx`, `app/api/deployments/route.ts`, `app/api/domains/route.ts`, `app/api/firewall/route.ts`, `app/api/mcp/route.ts`, `app/api/projects/route.ts`, `app/api/v1/deployments/route.ts`, `app/api/v1/domains/[id]/route.ts`, `app/api/v1/domains/route.ts`, `app/api/v1/firewall/route.ts`, `app/api/v1/projects/route.ts`, `app/api/v1/sync/vercel/route.ts`, `app/mcp/route.ts`, `lib/api/auth.ts`, `lib/db.ts`, `lib/mcp/client.ts`, `lib/monitor/discovery.ts`, `lib/monitor/system.ts`, `lib/monitor/trace.ts`, `lib/vercel/client.ts`, `lib/webhooks/verify.ts`, `proxy.ts`, `scripts/setup-dynamodb.mjs`

## Gaps

- CI workflows not detected
- LLMs context files not detected

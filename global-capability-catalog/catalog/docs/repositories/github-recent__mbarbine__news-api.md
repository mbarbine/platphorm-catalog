# mbarbine__news-api

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), deployed to [Vercel](https://vercel.com).

## Metadata

- ID: `github-recent__mbarbine__news-api`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__news-api`
- Remote: `git@github.com:mbarbine/news-api.git`
- Primary language: YAML
- Frameworks: Playwright, Svelte, Tailwind CSS, Vite, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `vite.config.js`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `src/routes/api/getLatestNews/+server.ts`, `src/routes/api/getNewsDetails/+server.ts`, `src/routes/api/hackernews/getAskStories/+server.ts`, `src/routes/api/hackernews/getBestStories/+server.ts`, `src/routes/api/hackernews/getJobStories/+server.ts`, `src/routes/api/hackernews/getShowStories/+server.ts`, `src/routes/api/hackernews/getTopStories/+server.ts`
- Tests: none detected
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `src/components/Auth.svelte`, `src/routes/login/+page.svelte`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/components/JobStories.svelte`, `src/routes/api/hackernews/getAskStories/+server.ts`, `src/routes/api/hackernews/getJobStories/+server.ts`, `src/routes/jobs/+page.svelte`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `jsconfig.json`, `package.json`, `src/vercel.json`, `tsconfig.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `pnpm-lock.yaml`, `src/+layout.svelte`, `src/app.svelte`, `src/news.svelte`, `src/routes/+layout.svelte`, `src/routes/app.svelte`, `src/routes/news.svelte`, `svelte.config.js`, `vite.config.js`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/routes/login/+page.svelte`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `src/routes/ask/+page.svelte`, `src/routes/best/+page.svelte`, `src/routes/jobs/+page.svelte`, `src/routes/login/+page.svelte`, `src/routes/show/+page.svelte`, `src/routes/signup/+page.svelte`, `src/routes/top/+page.svelte`
- Tests: none detected
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `src/routes/api/getLatestNews/+server.ts`, `vite.config.js`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `src/static/robots.txt`, `static/robots.txt`
- Tests: none detected
- LLMs context: none detected

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/components/AskStories.svelte`, `src/components/Auth.svelte`, `src/components/BestStories.svelte`, `src/components/Footer.svelte`, `src/components/Header.svelte`, `src/components/JobStories.svelte`, `src/components/Layout.svelte`, `src/components/News.svelte`, `src/components/NewsComments.svelte`, `src/components/NewsHeader.svelte`, `src/components/NewsMore.svelte`, `src/components/ShowStories.svelte`, `src/components/Story.svelte`, `src/components/TopStories.svelte`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `src/routes/api/getLatestNews/+server.ts`, `src/routes/api/getNewsDetails/+server.ts`, `src/utils/utils.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `src/routes/api/getLatestNews/+server.ts`
- [medium] No automated test files were detected. Evidence: `package.json`, `README.md`, `src/routes/api/getLatestNews/+server.ts`, `src/routes/api/getNewsDetails/+server.ts`, `src/routes/api/hackernews/getAskStories/+server.ts`, `src/routes/api/hackernews/getBestStories/+server.ts`, `src/routes/api/hackernews/getJobStories/+server.ts`, `src/routes/api/hackernews/getShowStories/+server.ts`, `src/routes/api/hackernews/getTopStories/+server.ts`, `src/routes/ask/+page.svelte`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected

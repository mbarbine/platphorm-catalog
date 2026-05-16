# mbarbine__legacy-platphorm-news

Package repository for @platphorm/news.

## Metadata

- ID: `github-recent__mbarbine__legacy-platphorm-news`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__legacy-platphorm-news`
- Remote: `git@github.com:mbarbine/legacy-platphorm-news.git`
- Primary language: Svelte
- Frameworks: Playwright, Svelte, Tailwind CSS, Vite, Vitest
- Maturity: internal
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.env`
- Tests: 1
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `vite.config.js`
- Tests: 1
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `src/routes/api/auth/login/+server.ts`, `src/routes/api/auth/signup/+server.ts`, `src/routes/api/getLatestNews/+server.ts`, `src/routes/api/getNewsDetails/+server.ts`, `src/routes/api/getTopStories/+server.ts`, `src/routes/api/hackernews/getAskStories/+server.ts`, `src/routes/api/hackernews/getBestStories/+server.ts`, `src/routes/api/hackernews/getJobStories/+server.ts`, `src/routes/api/hackernews/getShowStories/+server.ts`, `src/routes/api/hackernews/getStoryDetails/+server.ts`, `src/routes/api/hackernews/getTopStories/+server.ts`, `src/routes/llms.txt/+server.ts`, `src/routes/sitemap-main.xml/+server.ts`
- Tests: 1
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `src/components/Auth.svelte`, `src/routes/api/auth/login/+server.ts`, `src/routes/api/auth/signup/+server.ts`, `src/routes/login/+page.svelte`
- Tests: 1
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/components/JobDetails.svelte`, `src/components/JobStories.svelte`, `src/routes/api/hackernews/getAskStories/+server.ts`, `src/routes/api/hackernews/getJobStories/+server.ts`, `src/routes/jobs/+page.svelte`
- Tests: 1
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `jsconfig.json`, `package.json`, `src/routes/sitemap-main.xml/+server.ts`, `src/vercel.json`, `tsconfig.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/test-docker-no-compose.yml`, `.github/workflows/test-docker.yml`, `compose.yaml`, `docker-compose.override.yml`, `docker-compose.yml`, `Dockerfile`, `src/vercel.json`
- Tests: 1
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Google Integration

- ID: `integration.google`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package.json`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Google integration.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package.json`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package.json`, `src/+layout.svelte`, `src/app.svelte`, `src/components/NewsHeader.svelte`, `src/routes/+layout.svelte`, `src/routes/app.svelte`, `src/routes/news.svelte`, `src/routes/show.svelte`, `vite.config.js`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/routes/api/auth/login/+server.ts`, `src/routes/login/+page.svelte`
- Tests: 1
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `src/routes/ask/+page.svelte`, `src/routes/best/+page.svelte`, `src/routes/jobs/+page.svelte`, `src/routes/login/+page.svelte`, `src/routes/show/+page.svelte`, `src/routes/signup/+page.svelte`, `src/routes/story/[id]/+page.svelte`, `src/routes/top/+page.svelte`
- Tests: 1
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/components/SearchBar.svelte`
- Tests: 1
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env`, `src/routes/api/getLatestNews/+server.ts`, `src/routes/api/getNewsDetails/+server.ts`, `src/routes/api/getTopStories/+server.ts`, `src/routes/api/hackernews/getAskStories/+server.ts`, `src/routes/api/hackernews/getTopStories/+server.ts`, `vite.config.js`
- Tests: 1
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `src/static/robots.txt`
- Tests: 1
- LLMs context: none detected

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `src/tests/legacy.test.js`
- Tests: 1
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/components/AskStories.svelte`, `src/components/Auth.svelte`, `src/components/BestStories.svelte`, `src/components/Footer.svelte`, `src/components/Header.svelte`, `src/components/JobDetails.svelte`, `src/components/JobStories.svelte`, `src/components/Layout.svelte`, `src/components/NavigationTree.svelte`, `src/components/News.svelte`, `src/components/NewsComments.svelte`, `src/components/NewsHeader.svelte`, `src/components/NewsMore.svelte`, `src/components/SearchBar.svelte`, `src/components/ShowStories.svelte`, `src/components/Story.svelte`, `src/components/TopStories.svelte`
- Tests: 1
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [critical] Secret-like literal values were detected in source. Samples are redacted in scan output. Evidence: `.env`
- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `src/routes/api/getLatestNews/+server.ts`, `src/routes/api/getNewsDetails/+server.ts`, `src/routes/api/getTopStories/+server.ts`, `src/routes/api/hackernews/getAskStories/+server.ts`, `src/routes/api/hackernews/getStoryDetails/+server.ts`, `src/routes/api/hackernews/getTopStories/+server.ts`, `src/routes/show.svelte`, `src/routes/show/+page.svelte`, `src/routes/story/[id]/+page.svelte`, `src/services/hackernewsService.js`, `src/utils/utils.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env`, `src/routes/api/getLatestNews/+server.ts`, `src/routes/api/getNewsDetails/+server.ts`

## Gaps

- README not detected
- LLMs context files not detected

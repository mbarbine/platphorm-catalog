# mbarbine__ph3ar-blog

> ⚡ Live at: [https://blog.ph3ar.com](https://blog.ph3ar.com)

## Metadata

- ID: `github-recent__mbarbine__ph3ar-blog`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__ph3ar-blog`
- Remote: `git@github.com:mbarbine/ph3ar-blog.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `src/app/api/v1/health/route.ts`, `src/app/api/v1/openapi.json/route.ts`, `src/app/api/v1/posts/[slug]/route.ts`, `src/app/api/v1/posts/route.ts`, `src/app/api/v1/sitemap-tree/route.ts`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `postcss.config.js`, `src/app/_components/hero-post.tsx`, `src/app/_components/post-body.tsx`, `src/app/_components/post-header.tsx`, `src/app/_components/post-preview.tsx`, `src/app/_components/post-title.tsx`, `src/app/api/v1/docs/page.tsx`, `src/app/api/v1/posts/[slug]/route.ts`, `src/app/api/v1/posts/route.ts`, `src/app/posts/[slug]/page.tsx`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `public/llms-index.json`, `src/app/api/v1/openapi.json/route.ts`, `tsconfig.json`, `vercel.json`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `.github/workflows/blog-post-automation.yml`, `.github/workflows/deploy.yml`, `.github/workflows/nextjs.yml`, `vercel.json`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository includes CI workflows, deployment config, or containerization files.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `api/subscribe/route.tsx`, `src/app/_components/date-formatter.tsx`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `pnpm-lock.yaml`, `UPGRADE-PLAN.md`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `src/app/api/v1/health/route.ts`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `src/app/api/v1/docs/page.tsx`, `src/app/posts/[slug]/page.tsx`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `api/subscribe/route.tsx`, `src/lib/cors.ts`, `src/middleware.ts`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`, `public/sitemap.xml`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/app/_components/alert.tsx`, `src/app/_components/avatar.tsx`, `src/app/_components/container.tsx`, `src/app/_components/cover-image.tsx`, `src/app/_components/date-formatter.tsx`, `src/app/_components/easter-egg.tsx`, `src/app/_components/footer.tsx`, `src/app/_components/header.tsx`, `src/app/_components/hero-post.tsx`, `src/app/_components/intro.tsx`, `src/app/_components/more-stories.tsx`, `src/app/_components/newsletter-signup.tsx`, `src/app/_components/post-body.tsx`, `src/app/_components/post-header.tsx`, `src/app/_components/post-preview.tsx`, `src/app/_components/post-title.tsx`, `src/app/_components/section-separator.tsx`, `src/app/_components/social-share.tsx`, `src/app/_components/theme-switcher.tsx`
- Tests: none detected
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.github/copilot-instructions.md`, `scripts/image-resizer.py`, `src/app/_components/post-body.tsx`, `src/app/_components/theme-switcher.tsx`, `src/app/api/v1/docs/page.tsx`, `src/app/api/v1/health/route.ts`, `src/app/layout.tsx`, `src/app/posts/[slug]/page.tsx`, `UPGRADE-PLAN.md`
- [medium] Secret-like environment variable names are referenced. Evidence: `api/subscribe/route.tsx`
- [medium] No automated test files were detected. Evidence: `package.json`, `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`, `README.md`, `scripts/README.md`, `src/app/api/v1/docs/page.tsx`, `src/app/api/v1/health/route.ts`, `src/app/api/v1/openapi.json/route.ts`, `src/app/api/v1/posts/[slug]/route.ts`

## Gaps

- test files not detected

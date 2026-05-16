# mbarbine__platphorm-business-EmployerServicesIncorporated

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Metadata

- ID: `github-recent__mbarbine__platphorm-business-employerservicesincorporated`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__platphorm-business-EmployerServicesIncorporated`
- Remote: `git@github.com:mbarbine/platphorm-business-EmployerServicesIncorporated.git`
- Primary language: JSON
- Frameworks: Jest, Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `src/app/api/llms-index/route.ts`, `src/app/api/lob/route.ts`, `src/app/api/mcp/query/route.ts`, `src/app/api/mcp/resources/route.ts`, `src/app/api/mcp/route.ts`, `src/app/api/news/route.ts`, `src/app/api/scripts/linkedin/route.ts`, `src/app/api/scripts/lob/route.ts`
- Tests: 13
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `postcss.config.mjs`
- Tests: 13
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: 13
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `src/app/api/mcp/query/route.ts`, `src/app/api/mcp/resources/route.ts`, `src/app/api/mcp/route.ts`
- Tests: 13
- LLMs context: none detected

Repository contains MCP-related routes, manifests, files, or dependencies.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `src/app/about/page.tsx`, `src/app/news/page.tsx`
- Tests: 13
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/app/api/mcp/query/route.ts`
- Tests: 13
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `src/app/api/llms-index/route.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`
- Tests: 13
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/Navbar.test.tsx`, `__tests__/news.test.tsx`, `__tests__/page.test.tsx`, `lob-python/tests/test_address.py`, `lob-python/tests/test_bankaccount.py`, `lob-python/tests/test_check.py`, `lob-python/tests/test_intl_verification.py`, `lob-python/tests/test_letter.py`, `lob-python/tests/test_lob.py`, `lob-python/tests/test_postcard.py`, `lob-python/tests/test_us_autocompletion.py`, `lob-python/tests/test_us_verification.py`, `lob-python/tests/test_us_zip_lookup.py`
- Tests: 13
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/components/ui/Navbar.tsx`
- Tests: 13
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.jules/bolt.md`

## Gaps

- CI workflows not detected
- LLMs context files not detected

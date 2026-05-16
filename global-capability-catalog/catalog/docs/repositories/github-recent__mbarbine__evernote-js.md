# mbarbine__evernote-js

- Node.js 16+ installed

## Metadata

- ID: `github-recent__mbarbine__evernote-js`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__evernote-js`
- Remote: `git@github.com:mbarbine/evernote-js.git`
- Primary language: YAML
- Frameworks: Express, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env`, `index.js`, `package.json`, `server.js`, `src/express.js`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `postcss.config.js`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `src/components/NoteForm.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/components/SearchBar.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env`, `index.js`, `server.js`, `src/express.js`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/components/NoteCard.tsx`, `src/components/NoteForm.tsx`, `src/components/SearchBar.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `public/index.html`, `src/components/NoteCard.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env`, `index.js`, `server.js`, `src/express.js`
- [medium] No automated test files were detected. Evidence: `package.json`, `README.md`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected
- framework route files not detected

# mbarbine__mailthing-api

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Metadata

- ID: `github-recent__mbarbine__mailthing-api`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__mailthing-api`
- Remote: `git@github.com:mbarbine/mailthing-api.git`
- Primary language: YAML
- Frameworks: Express, Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/src/config/env.ts`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/addresses/route.ts`, `app/api/credits/route.ts`, `app/api/letters/cancel/route.ts`, `app/api/letters/list/route.ts`, `app/api/letters/route.ts`, `app/api/mailitems/[stannpId]/route.ts`, `app/api/mailitems/route.ts`, `app/api/payments/route.ts`, `app/api/user/route.ts`
- Tests: none detected
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `postcss.config.mjs`
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

### Gmail Integration

- ID: `email.gmail`
- Type: email
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/src/config/env.ts`, `package.json`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Gmail integration.

### Stannp Integration

- ID: `email.stannp`
- Type: email
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/src/config/env.ts`, `app/src/controllers/addressesController.ts`, `app/src/controllers/lettersController.ts`, `app/src/controllers/mailItemsController.ts`, `package.json`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Stannp integration.

### Financial Workflow

- ID: `finance.financial-workflow`
- Type: finance
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/payments/route.ts`, `app/src/controllers/paymentsController.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates finance, invoices, billing, payments, revenue, or market data behavior.

### Google Integration

- ID: `integration.google`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/src/config/env.ts`, `package.json`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Google integration.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/src/config/env.ts`, `package.json`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a OpenAI integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/src/config/env.ts`, `app/src/controllers/creditsController.ts`, `app/src/controllers/paymentsController.ts`, `app/src/server.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Stripe integration.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/src/config/env.ts`, `app/src/controllers/addressesController.ts`, `app/src/controllers/lettersController.ts`, `app/src/controllers/mailItemsController.ts`, `app/src/controllers/paymentsController.ts`, `app/src/db/edgedb.ts`, `app/src/server.ts`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mailitems/[stannpId]/route.ts`, `app/src/config/env.ts`, `app/src/controllers/addressesController.ts`, `app/src/controllers/lettersController.ts`, `app/src/controllers/mailItemsController.ts`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/src/controllers/addressesController.ts`, `app/src/controllers/lettersController.ts`, `app/src/controllers/mailItemsController.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/src/config/env.ts`, `app/src/controllers/addressesController.ts`, `app/src/controllers/lettersController.ts`, `app/src/controllers/mailItemsController.ts`, `app/src/db/edgedb.ts`
- [medium] No automated test files were detected. Evidence: `app/api/addresses/route.ts`, `app/api/credits/route.ts`, `app/api/letters/cancel/route.ts`, `app/api/letters/list/route.ts`, `app/api/letters/route.ts`, `app/api/mailitems/[stannpId]/route.ts`, `app/api/mailitems/route.ts`, `app/api/payments/route.ts`, `app/api/user/route.ts`, `package.json`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected

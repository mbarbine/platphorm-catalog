# mbarbine__mailthing

Package repository for api.email2letter.com.

## Metadata

- ID: `github-recent__mbarbine__mailthing`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__mailthing`
- Remote: `git@github.com:mbarbine/mailthing.git`
- Primary language: TypeScript
- Frameworks: Express
- Maturity: prototype
- Confidence: high

## Capabilities

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: prototype
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env`, `src/config/env.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: prototype
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env`, `src/config/env.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: prototype
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package.json`, `src/config/env.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: prototype
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Stannp Integration

- ID: `email.stannp`
- Type: email
- Maturity: prototype
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package.json`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Stannp integration.

### Financial Workflow

- ID: `finance.financial-workflow`
- Type: finance
- Maturity: prototype
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/controllers/paymentsController.ts`, `src/routes/create-payment-intent.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates finance, invoices, billing, payments, revenue, or market data behavior.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: prototype
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package.json`, `src/config/env.ts`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: prototype
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package.json`, `src/config/env.ts`, `src/config/supabase.ts`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: prototype
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package.json`, `src/config/env.ts`, `src/controllers/creditsController.ts`, `src/controllers/paymentsController.ts`, `src/routes/create-payment-intent.ts`, `src/routes/credits.ts`, `src/routes/get-credits.ts`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Stripe integration.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: prototype
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env`, `src/config/env.ts`, `src/routes/create-payment-intent.ts`, `src/routes/get-credits.ts`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: prototype
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `.env`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

## Repository Risks

- [medium] Secret-like environment variable names are referenced. Evidence: `.env`, `src/config/env.ts`, `src/routes/create-payment-intent.ts`, `src/routes/get-credits.ts`
- [medium] No automated test files were detected. Evidence: `package.json`

## Gaps

- README not detected
- test files not detected
- CI workflows not detected
- LLMs context files not detected
- framework route files not detected

# mbarbine__stannp-gpt-5-test

*Your complete solution for building, testing, and managing mail APIs*

## Metadata

- ID: `github-recent__mbarbine__stannp-gpt-5-test`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__stannp-gpt-5-test`
- Remote: `git@github.com:mbarbine/stannp-gpt-5-test.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 9
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/[...auth0]/route.ts`, `app/api/credits/route.ts`, `app/api/credits/transactions/route.ts`, `app/api/mail/cancel/route.ts`, `app/api/mail/items/route.ts`, `app/api/mail/recipients/delete/route.ts`, `app/api/mail/recipients/route.ts`, `app/api/responses/[id]/cancel/route.ts`, `app/api/responses/[id]/route.ts`, `app/api/responses/route.ts`, `app/api/responses/stats/route.ts`, `app/api/stannp/route.ts`, `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`, `app/api/users/route.ts`
- Tests: 9
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/[...auth0]/route-mock.ts`, `app/api/auth/[...auth0]/route.ts`, `app/mock-auth/login/page.tsx`, `components/auth-button.tsx`, `docs/AUTH0_AUTO_SAVE_IMPLEMENTATION.md`, `docs/AUTH0_CALLBACK_HANGING_FIX.md`, `docs/AUTH0_DATABASE_FIXES.md`, `docs/AUTH0_LOGIN_FIX.md`, `docs/AUTH0_SETUP.md`, `docs/AUTH0_STRIPE_INTEGRATION_COMPLETE.md`, `docs/AUTH0_USER_MANAGEMENT_COMPLETE.md`, `docs/STRIPE_AUTH_IMPLEMENTATION.md`, `package.json`
- Tests: 9
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/responses/[id]/route.ts`, `app/api/responses/route.ts`, `app/api/responses/stats/route.ts`, `app/api/users/route.ts`, `components/postcard-form.tsx`, `components/postcard-help.tsx`, `components/postcard-validation-summary.tsx`, `components/request-builder.tsx`, `components/stored-responses.tsx`, `components/user-selector.tsx`, `docs/AUTH0_AUTO_SAVE_IMPLEMENTATION.md`, `docs/AUTH0_CALLBACK_HANGING_FIX.md`, `docs/AUTH0_DATABASE_FIXES.md`, `docs/AUTH0_LOGIN_FIX.md`, `docs/AUTH0_SETUP.md`, `docs/AUTH0_STRIPE_INTEGRATION_COMPLETE.md`, `docs/AUTH0_USER_MANAGEMENT_COMPLETE.md`, `docs/CHANGELOG.md`, `docs/CREDIT_REFUND_SYSTEM.md`, `docs/FINAL_QA_CHECKLIST.md`, `docs/FOREIGN_KEY_FIX_IMPLEMENTED.md`, `docs/INTEGRATION_COMPLETE.md`, `docs/POSTCARD_ENHANCEMENTS.md`, `docs/README.md`, `docs/STANNP_API_SETUP.md`, `docs/STRIPE_AUTH_IMPLEMENTATION.md`, `docs/STRIPE_SETUP.md`, `docs/UUID_CONVERSION_FIX.md`, `lib/database.ts`, `package.json`
- Tests: 9
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/json-viewer.tsx`, `package.json`, `tsconfig.json`
- Tests: 9
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/reset-database-schema.sql`
- Tests: 9
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/enhanced-form-field-renderer.tsx`, `components/form-field-renderer.tsx`
- Tests: 9
- LLMs context: none detected

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/stripe/create-checkout/route.ts`
- Tests: 9
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Stannp Integration

- ID: `email.stannp`
- Type: email
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mail/cancel/route.ts`, `app/api/stannp/route.ts`, `app/page.tsx`, `components/mail-management.tsx`, `components/request-builder.tsx`, `docs/FINAL_QA_CHECKLIST.md`, `docs/STANNP_API_SETUP.md`, `lib/stannp-api.ts`, `package.json`
- Tests: 9
- LLMs context: none detected

Repository has source-backed indicators for a Stannp integration.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/enhanced-form-field-renderer.tsx`, `components/form-field-renderer.tsx`, `components/postcard-form.tsx`, `package.json`
- Tests: 9
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Neon Integration

- ID: `integration.neon`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/responses/[id]/route.ts`, `app/api/responses/route.ts`, `app/api/responses/stats/route.ts`, `app/api/users/route.ts`, `components/request-builder.tsx`, `components/stored-responses.tsx`, `components/user-selector.tsx`, `lib/database.ts`, `package.json`
- Tests: 9
- LLMs context: none detected

Repository has source-backed indicators for a Neon integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/responses/[id]/route.ts`, `app/api/responses/route.ts`, `app/api/responses/stats/route.ts`, `app/api/users/route.ts`, `components/request-builder.tsx`, `components/stored-responses.tsx`, `components/user-selector.tsx`, `docs/AUTH0_STRIPE_INTEGRATION_COMPLETE.md`, `lib/database.ts`, `package.json`
- Tests: 9
- LLMs context: none detected

Repository has source-backed indicators for a Postgres integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `app/page.tsx`, `components/error-boundary.tsx`, `components/mail-management.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 9
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/mock-auth/login/page.tsx`, `docs/AUTH0_LOGIN_FIX.md`, `docs/CHANGELOG.md`, `package.json`
- Tests: 9
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`, `components/user-credits.tsx`, `docs/AUTH0_DATABASE_FIXES.md`, `docs/AUTH0_STRIPE_INTEGRATION_COMPLETE.md`, `docs/FOREIGN_KEY_FIX_IMPLEMENTED.md`, `docs/INTEGRATION_COMPLETE.md`, `docs/STRIPE_AUTH_IMPLEMENTATION.md`, `docs/STRIPE_SETUP.md`, `package.json`
- Tests: 9
- LLMs context: none detected

Repository has source-backed indicators for a Stripe integration.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/mock-auth/login/page.tsx`, `app/profile/page.tsx`
- Tests: 9
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/query-params-editor.tsx`
- Tests: 9
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/[...auth0]/route-mock.ts`, `app/api/mail/recipients/delete/route.ts`, `app/api/stannp/route.ts`, `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`, `components/error-boundary.tsx`, `components/stored-responses.tsx`, `docs/STRIPE_SETUP.md`, `lib/database.ts`, `lib/stannp-api.ts`
- Tests: 9
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mail/cancel/route.ts`, `app/api/stannp/route.ts`, `app/page.tsx`, `components/mail-management.tsx`, `components/postcard-form.tsx`, `components/postcard-help.tsx`, `components/postcard-validation-summary.tsx`, `components/request-builder.tsx`, `components/ui/label.tsx`, `docs/FINAL_QA_CHECKLIST.md`, `docs/POSTCARD_ENHANCEMENTS.md`, `docs/STANNP_API_SETUP.md`, `lib/stannp-api.ts`, `package.json`
- Tests: 9
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `scripts/test-auth0-autosave.js`, `scripts/test-auth0-stripe-integration.js`, `scripts/test-cancel-debug.js`, `scripts/test-cancel-fix.js`, `scripts/test-postcard-implementation.js`, `scripts/test-postcards.js`, `scripts/test-preset-fields.js`, `scripts/test-presets.js`, `scripts/test-specific-id.js`
- Tests: 9
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/auth-button.tsx`, `components/custom-user-provider.tsx`, `components/enhanced-form-field-renderer.tsx`, `components/error-boundary.tsx`, `components/form-field-renderer.tsx`, `components/json-viewer.tsx`, `components/key-input.tsx`, `components/mail-management.tsx`, `components/postcard-form.tsx`, `components/postcard-help.tsx`, `components/postcard-validation-summary.tsx`, `components/query-params-editor.tsx`, `components/recipient-dropdown.tsx`, `components/request-builder.tsx`, `components/response-storage.tsx`, `components/stored-responses.tsx`, `components/theme-provider.tsx`, `components/ui/alert.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/select.tsx`, `components/ui/switch.tsx`, `components/ui/tabs.tsx`, `components/ui/textarea.tsx`, `components/ui/tooltip.tsx`, `components/user-credits.tsx`
- Tests: 9
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/stripe/webhook/route.ts`, `docs/STRIPE_SETUP.md`
- Tests: 9
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/api/stannp/route.ts`, `components/mail-management.tsx`, `components/postcard-validation-summary.tsx`, `components/query-params-editor.tsx`, `components/stored-responses.tsx`, `lib/database.ts`, `lib/presets.ts`, `lib/stannp-api.ts`, `scripts/audit-all-presets.js`, `scripts/test-postcards.js`, `scripts/test-preset-fields.js`, `scripts/verify-postcard-fields.js`, `scripts/verify-ui-display.js`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/stannp/route.ts`, `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`, `docs/STRIPE_SETUP.md`, `lib/database.ts`, `lib/stannp-api.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

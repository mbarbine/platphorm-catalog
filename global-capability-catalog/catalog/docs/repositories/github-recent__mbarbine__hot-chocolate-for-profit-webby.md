# mbarbine__hot-chocolate-for-profit-webby

Hot Chocolate

## Metadata

- ID: `github-recent__mbarbine__hot-chocolate-for-profit-webby`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__hot-chocolate-for-profit-webby`
- Remote: `git@github.com:mbarbine/hot-chocolate-for-profit-webby.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS, Vitest
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
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/v1/kanban/route.ts`, `app/api/v1/orders/sync/route.ts`, `app/api/v1/products/[slug]/route.ts`, `app/api/v1/products/route.ts`, `app/api/v1/suppliers/greens/route.ts`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api-docs/page.tsx`, `app/api/docs/route.ts`, `app/checkout/page.tsx`, `package.json`, `postcss.config.mjs`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/json-ld.tsx`, `package-lock.json`, `package.json`, `public/llms-index.json`, `public/version.json`, `tsconfig.json`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/terms/page.tsx`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/v1/orders/sync/route.ts`, `app/api/v1/products/[slug]/route.ts`, `app/api/v1/products/route.ts`, `app/checkout/page.tsx`, `app/checkout/success/page.tsx`, `app/products/[slug]/page.tsx`, `components/cart-drawer.tsx`, `components/cart-provider.tsx`, `components/product-card.tsx`, `components/product-details.tsx`, `lib/products.ts`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/contact/page.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/supabase/client.ts`, `lib/supabase/proxy.ts`, `lib/supabase/server.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/health/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/actions/stripe.ts`, `app/checkout/page.tsx`, `lib/products.ts`, `lib/stripe.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `public/version.json`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository has source-backed indicators for a Stripe integration.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/about/page.tsx`, `app/api-docs/page.tsx`, `app/careers/page.tsx`, `app/checkout/page.tsx`, `app/checkout/success/page.tsx`, `app/contact/page.tsx`, `app/faq/page.tsx`, `app/privacy/page.tsx`, `app/products/[slug]/page.tsx`, `app/roadmap/page.tsx`, `app/shipping/page.tsx`, `app/shop/page.tsx`, `app/suppliers/page.tsx`, `app/terms/page.tsx`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/checkout/page.tsx`, `lib/stripe.ts`, `lib/supabase/client.ts`, `lib/supabase/proxy.ts`, `lib/supabase/server.ts`, `middleware.ts`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/shipping/page.tsx`, `components/ui/label.tsx`, `package.json`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `__tests__/breadcrumb.test.tsx`, `__tests__/header.test.tsx`, `__tests__/health.test.ts`, `__tests__/middleware.test.ts`, `__tests__/pages.test.tsx`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/breadcrumb.tsx`, `components/cart-drawer.tsx`, `components/cart-provider.tsx`, `components/footer.tsx`, `components/header.tsx`, `components/json-ld.tsx`, `components/language-switcher.tsx`, `components/product-card.tsx`, `components/product-details.tsx`, `components/shop-filters.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button-group.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`, `components/ui/dialog.tsx`, `components/ui/drawer.tsx`
- Tests: 5
- LLMs context: `public/llms-full.txt`, `public/llms-index.json`, `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `components/json-ld.tsx`, `components/ui/chart.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/checkout/page.tsx`, `lib/stripe.ts`, `lib/supabase/client.ts`, `lib/supabase/proxy.ts`, `lib/supabase/server.ts`, `middleware.ts`

## Gaps

- CI workflows not detected

# mbarbine__vanagain-2025

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

## Metadata

- ID: `github-recent__mbarbine__vanagain-2025`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__vanagain-2025`
- Remote: `git@github.com:mbarbine/vanagain-2025.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/check-vanagain-session/route.ts`, `app/api/auth/logout-vanagain/route.ts`, `app/api/cart/add/route.ts`, `app/api/cart/create/route.ts`, `app/api/cart/sync-vanagain/route.ts`, `app/api/categories/route.ts`, `app/api/newsletter/subscribe/route.ts`, `app/api/products/[slug]/route.ts`, `app/api/products/route.ts`, `app/api/shopify/product/[handle]/route.ts`, `app/api/shopify/products/route.ts`
- Tests: none detected
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/check-vanagain-session/route.ts`, `app/api/auth/logout-vanagain/route.ts`, `components/auth-integration.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `lib/supabase.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/articles/page.tsx`, `package.json`, `postcss.config.mjs`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/order-status/page.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/cart/add/route.ts`, `app/api/cart/create/route.ts`, `app/api/cart/sync-vanagain/route.ts`, `app/api/products/[slug]/route.ts`, `app/api/products/route.ts`, `app/api/shopify/product/[handle]/route.ts`, `app/api/shopify/products/route.ts`, `app/order-status/page.tsx`, `app/products/[handle]/page.tsx`, `components/cart-sync.tsx`, `components/product-card.tsx`, `components/product-search.tsx`, `components/shopping-cart.tsx`, `lib/shopify.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/contact/page.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Shopify Integration

- ID: `integration.shopify`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/shopify.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Shopify integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/supabase.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/logout-vanagain/route.ts`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/about/page.tsx`, `app/articles/page.tsx`, `app/category/[slug]/page.tsx`, `app/contact/page.tsx`, `app/order-status/page.tsx`, `app/products/[handle]/page.tsx`
- Tests: none detected
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/product-search.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/check-vanagain-session/route.ts`, `app/api/auth/logout-vanagain/route.ts`, `app/api/cart/sync-vanagain/route.ts`, `lib/shopify.ts`, `lib/supabase.ts`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/auth-integration.tsx`, `components/cart-sync.tsx`, `components/newsletter-signup.tsx`, `components/product-card.tsx`, `components/product-search.tsx`, `components/shopping-cart.tsx`, `components/theme-provider.tsx`, `components/ui/accordion.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/alert.tsx`, `components/ui/aspect-ratio.tsx`, `components/ui/avatar.tsx`, `components/ui/badge.tsx`, `components/ui/breadcrumb.tsx`, `components/ui/button.tsx`, `components/ui/calendar.tsx`, `components/ui/card.tsx`, `components/ui/carousel.tsx`, `components/ui/chart.tsx`, `components/ui/checkbox.tsx`, `components/ui/collapsible.tsx`, `components/ui/command.tsx`, `components/ui/context-menu.tsx`, `components/ui/dialog.tsx`, `components/ui/drawer.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/form.tsx`, `components/ui/hover-card.tsx`, `components/ui/input-otp.tsx`, `components/ui/input.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `components/ui/chart.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/auth/check-vanagain-session/route.ts`, `app/api/auth/logout-vanagain/route.ts`, `app/api/cart/sync-vanagain/route.ts`, `lib/shopify.ts`, `lib/supabase.ts`
- [medium] No automated test files were detected. Evidence: `app/about/page.tsx`, `app/api/auth/check-vanagain-session/route.ts`, `app/api/auth/logout-vanagain/route.ts`, `app/api/cart/add/route.ts`, `app/api/cart/create/route.ts`, `app/api/cart/sync-vanagain/route.ts`, `app/api/categories/route.ts`, `app/api/newsletter/subscribe/route.ts`, `app/api/products/[slug]/route.ts`, `app/api/products/route.ts`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected

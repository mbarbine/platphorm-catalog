# mbarbine__mermaid-community-platform

Mermaid Community Platphorm

## Metadata

- ID: `github-recent__mbarbine__mermaid-community-platform`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__mermaid-community-platform`
- Remote: `git@github.com:mbarbine/mermaid-community-platform.git`
- Primary language: YAML
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/dashboard/analytics/page.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/bookings/route.ts`, `app/api/track-view/route.ts`
- Tests: none detected
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `postcss.config.mjs`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/dashboard/analytics/page.tsx`, `app/dashboard/events/[id]/page.tsx`, `app/dashboard/events/new/page.tsx`, `app/dashboard/events/page.tsx`, `app/dashboard/news/new/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/products/[id]/page.tsx`, `app/dashboard/products/new/page.tsx`, `app/dashboard/products/page.tsx`, `app/dashboard/profile/page.tsx`
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
- Source paths: `app/dashboard/products/[id]/page.tsx`, `app/dashboard/products/new/page.tsx`, `app/dashboard/products/page.tsx`, `components/product-edit-form.tsx`, `components/product-form.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/performers/[id]/page.tsx`, `app/performers/page.tsx`, `components/booking-form.tsx`, `components/event-edit-form.tsx`, `components/event-form.tsx`, `components/news-form.tsx`, `components/product-edit-form.tsx`, `components/product-form.tsx`, `components/profile-form.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/auth/sign-up/page.tsx`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`, `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/auth/login/page.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/about/page.tsx`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `app/dashboard/analytics/page.tsx`, `app/dashboard/events/[id]/page.tsx`, `app/dashboard/events/new/page.tsx`, `app/dashboard/events/page.tsx`, `app/dashboard/news/new/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/products/[id]/page.tsx`, `app/dashboard/products/new/page.tsx`, `app/dashboard/products/page.tsx`, `app/dashboard/profile/page.tsx`, `app/events/[id]/page.tsx`, `app/events/page.tsx`, `app/news/[id]/page.tsx`, `app/news/page.tsx`, `app/performers/[id]/page.tsx`, `app/performers/page.tsx`, `app/shop/[id]/page.tsx`, `app/shop/page.tsx`
- Tests: none detected
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/auth/sign-up/page.tsx`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`
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
- Source paths: `components/booking-form.tsx`, `components/event-edit-form.tsx`, `components/event-form.tsx`, `components/news-form.tsx`, `components/product-edit-form.tsx`, `components/product-form.tsx`, `components/profile-form.tsx`, `components/site-footer.tsx`, `components/site-nav.tsx`, `components/theme-provider.tsx`, `components/ui/badge.tsx`, `components/ui/button.tsx`, `components/ui/card.tsx`, `components/ui/checkbox.tsx`, `components/ui/input.tsx`, `components/ui/label.tsx`, `components/ui/select.tsx`, `components/ui/textarea.tsx`, `components/view-tracker.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Secret-like environment variable names are referenced. Evidence: `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`
- [medium] No automated test files were detected. Evidence: `app/about/page.tsx`, `app/api/bookings/route.ts`, `app/api/track-view/route.ts`, `app/auth/login/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `app/dashboard/analytics/page.tsx`, `app/dashboard/events/[id]/page.tsx`, `app/dashboard/events/new/page.tsx`, `app/dashboard/events/page.tsx`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected

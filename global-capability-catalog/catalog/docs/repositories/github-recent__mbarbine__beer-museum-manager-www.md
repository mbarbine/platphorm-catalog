# mbarbine__beer-museum-manager-www

*Automatically synced with your [v0.app](https://v0.app) deployments*

## Metadata

- ID: `github-recent__mbarbine__beer-museum-manager-www`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__beer-museum-manager-www`
- Remote: `git@github.com:mbarbine/beer-museum-manager-www.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/analytics/page.tsx`, `app/api/admin/analytics/route.ts`, `lib/integrations/google-services.ts`, `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/admin/analytics/route.ts`, `app/api/admin/beers/[id]/route.ts`, `app/api/admin/beers/route.ts`, `app/api/admin/exhibits/route.ts`, `app/api/admin/users/route.ts`, `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/api/beers/route.ts`, `app/api/dashboard/stats/route.ts`, `app/api/events/register/route.ts`, `app/api/events/route.ts`, `app/api/integrations/toast/config/route.ts`, `app/api/integrations/toast/test/route.ts`, `app/api/webhooks/n8n/route.ts`
- Tests: 1
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/login/page.tsx`, `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/auth/error/page.tsx`, `app/auth/forgot-password/page.tsx`, `app/auth/login/page.tsx`, `app/auth/onboarding/member/page.tsx`, `app/auth/onboarding/museum/page.tsx`, `app/auth/onboarding/supporter/page.tsx`, `app/auth/register/member/page.tsx`, `app/auth/register/museum/page.tsx`, `app/auth/register/page.tsx`, `app/auth/register/success/page.tsx`, `app/auth/register/supporter/page.tsx`, `app/auth/resend-confirmation/page.tsx`, `app/auth/sign-up-success/page.tsx`, `app/auth/sign-up/page.tsx`, `components/auth-guard.tsx`, `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/analytics/page.tsx`, `app/admin/api-settings/page.tsx`, `app/admin/beers/new/page.tsx`, `app/admin/beers/page.tsx`, `app/admin/collection/page.tsx`, `app/admin/dashboard/page.tsx`, `app/admin/education/page.tsx`, `app/admin/events/page.tsx`, `app/admin/exhibits/[id]/page.tsx`, `app/admin/exhibits/new/page.tsx`, `app/admin/exhibits/page.tsx`, `app/admin/login/page.tsx`, `app/admin/page.tsx`, `app/admin/settings/page.tsx`, `app/admin/users/page.tsx`, `app/admin/visitors/page.tsx`, `app/api/admin/analytics/route.ts`, `app/api/admin/beers/[id]/route.ts`, `app/api/admin/beers/route.ts`, `app/api/admin/exhibits/route.ts`, `app/api/admin/users/route.ts`, `app/museum-admin/dns-setup/page.tsx`, `app/museum-admin/events/page.tsx`, `app/museum-admin/exhibits/page.tsx`, `app/museum-admin/layout.tsx`, `app/museum-admin/page.tsx`, `components/admin/beer-filters.tsx`, `components/admin/beer-form.tsx`, `components/admin/beer-grid.tsx`, `components/admin/dashboard.tsx`
- Tests: 1
- LLMs context: none detected

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `docs/DEPLOYMENT.md`, `docs/SECURITY.md`, `package.json`, `postcss.config.mjs`
- Tests: 1
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/analytics/page.tsx`, `app/admin/api-settings/page.tsx`, `app/admin/beers/new/page.tsx`, `app/admin/beers/page.tsx`, `app/admin/collection/page.tsx`, `app/admin/dashboard/page.tsx`, `app/admin/education/page.tsx`, `app/admin/events/page.tsx`, `app/admin/exhibits/[id]/page.tsx`, `app/admin/exhibits/new/page.tsx`, `app/admin/exhibits/page.tsx`, `app/admin/login/page.tsx`, `app/admin/page.tsx`, `app/admin/settings/page.tsx`, `app/admin/users/page.tsx`, `app/admin/visitors/page.tsx`, `app/api/admin/analytics/route.ts`, `app/api/admin/beers/[id]/route.ts`, `app/api/admin/beers/route.ts`, `app/api/admin/exhibits/route.ts`, `app/api/admin/users/route.ts`, `app/api/dashboard/stats/route.ts`, `app/dashboard/page.tsx`, `app/museum-admin/dns-setup/page.tsx`, `app/museum-admin/events/page.tsx`, `app/museum-admin/exhibits/page.tsx`, `app/museum-admin/layout.tsx`, `app/museum-admin/page.tsx`, `components/admin/beer-filters.tsx`, `components/admin/beer-form.tsx`
- Tests: 1
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/001_create_database_schema.sql`, `scripts/001_virginia_beer_museum_schema.sql`, `scripts/007_ticketing_and_booking_schema.sql`, `scripts/010_update_database_schema.sql`
- Tests: 1
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/contact/page.tsx`, `components/admin/beer-form.tsx`, `components/admin/exhibit-form.tsx`, `components/event-registration-form.tsx`, `components/integration-config-forms.tsx`, `components/shared/form-wrapper.tsx`, `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Google Integration

- ID: `integration.google`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/webhooks/n8n/route.ts`, `lib/integrations/google-services.ts`, `package.json`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Google integration.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/login/page.tsx`, `app/admin/page.tsx`, `app/api/webhooks/n8n/route.ts`, `app/auth/forgot-password/page.tsx`, `app/auth/onboarding/member/page.tsx`, `app/auth/onboarding/museum/page.tsx`, `app/auth/onboarding/supporter/page.tsx`, `app/auth/register/member/page.tsx`, `app/auth/register/museum/page.tsx`, `app/auth/register/supporter/page.tsx`, `app/auth/resend-confirmation/page.tsx`, `app/auth/sign-up/page.tsx`, `app/museum-admin/dns-setup/page.tsx`, `app/museum-admin/events/page.tsx`, `components/site-header.tsx`, `docs/DEPLOYMENT.md`, `package.json`, `pnpm-lock.yaml`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/layout.tsx`, `package.json`, `pnpm-lock.yaml`
- Tests: 1
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/admin/login/page.tsx`, `app/api/auth/login/route.ts`, `app/api/auth/logout/route.ts`, `app/auth/login/page.tsx`, `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/about/page.tsx`, `app/admin/analytics/page.tsx`, `app/admin/api-settings/page.tsx`, `app/admin/beers/new/page.tsx`, `app/admin/beers/page.tsx`, `app/admin/collection/page.tsx`, `app/admin/dashboard/page.tsx`, `app/admin/education/page.tsx`, `app/admin/events/page.tsx`, `app/admin/exhibits/[id]/page.tsx`, `app/admin/exhibits/new/page.tsx`, `app/admin/exhibits/page.tsx`, `app/admin/login/page.tsx`, `app/admin/page.tsx`, `app/admin/settings/page.tsx`, `app/admin/users/page.tsx`, `app/admin/visitors/page.tsx`, `app/auth/error/page.tsx`, `app/auth/forgot-password/page.tsx`, `app/auth/login/page.tsx`, `app/auth/onboarding/member/page.tsx`, `app/auth/onboarding/museum/page.tsx`, `app/auth/onboarding/supporter/page.tsx`, `app/auth/register/member/page.tsx`, `app/auth/register/museum/page.tsx`, `app/auth/register/page.tsx`, `app/auth/register/success/page.tsx`, `app/auth/register/supporter/page.tsx`, `app/auth/resend-confirmation/page.tsx`, `app/auth/sign-up-success/page.tsx`
- Tests: 1
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/admin/login/page.tsx`, `app/admin/page.tsx`, `app/api/integrations/toast/test/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/auth/forgot-password/page.tsx`, `app/auth/onboarding/member/page.tsx`, `app/auth/onboarding/museum/page.tsx`, `app/auth/onboarding/supporter/page.tsx`, `app/auth/register/member/page.tsx`, `app/auth/register/museum/page.tsx`, `app/auth/register/supporter/page.tsx`, `app/auth/resend-confirmation/page.tsx`, `app/auth/sign-up/page.tsx`, `app/layout.tsx`, `app/museum-admin/dns-setup/page.tsx`, `app/museum-admin/events/page.tsx`, `app/museum-admin/exhibits/page.tsx`, `app/museum-admin/layout.tsx`, `app/museum-admin/page.tsx`, `app/sitemap.ts`, `lib/error-handler.ts`, `lib/integrations/google-services.ts`, `lib/integrations/n8n.ts`, `lib/integrations/toast-pos.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`
- Tests: 1
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`
- Tests: 1
- LLMs context: none detected

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: 1
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/integrations/toast/test/route.ts`
- Tests: 1
- LLMs context: none detected

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/admin/beer-filters.tsx`, `components/admin/beer-form.tsx`, `components/admin/beer-grid.tsx`, `components/admin/dashboard.tsx`, `components/admin/exhibit-form.tsx`, `components/admin/exhibit-grid.tsx`, `components/admin/header.tsx`, `components/admin/sidebar.tsx`, `components/auth-guard.tsx`, `components/dns-simulation.tsx`, `components/error-boundary.tsx`, `components/event-registration-form.tsx`, `components/global-error-handler.tsx`, `components/image-gallery.tsx`, `components/integration-config-forms.tsx`, `components/loading-spinner.tsx`, `components/mobile-navigation.tsx`, `components/museum-placeholder.tsx`, `components/museum-selector.tsx`, `components/profile-avatar.tsx`, `components/role-badge.tsx`, `components/shared/data-table.tsx`, `components/shared/form-wrapper.tsx`, `components/shared/page-header.tsx`, `components/shared/stats-grid.tsx`, `components/site-footer.tsx`, `components/site-header.tsx`, `components/theme-provider.tsx`, `components/toast-provider.tsx`, `components/ui/alert.tsx`
- Tests: 1
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/events/register/route.ts`, `app/api/events/route.ts`, `app/api/webhooks/n8n/route.ts`, `lib/integrations/n8n.ts`
- Tests: 1
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/layout.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `app/admin/page.tsx`, `app/api/integrations/toast/test/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/auth/onboarding/member/page.tsx`, `app/auth/onboarding/museum/page.tsx`, `app/auth/onboarding/supporter/page.tsx`, `app/auth/register/member/page.tsx`, `app/auth/register/supporter/page.tsx`, `app/museum-admin/dns-setup/page.tsx`, `app/museum-admin/events/page.tsx`, `app/museum-admin/exhibits/page.tsx`, `app/museum-admin/layout.tsx`, `app/museum-admin/page.tsx`, `lib/integrations/google-services.ts`, `lib/integrations/n8n.ts`, `lib/integrations/toast-pos.ts`, `lib/supabase/client.ts`, `lib/supabase/middleware.ts`, `lib/supabase/server.ts`

## Gaps

- CI workflows not detected
- LLMs context files not detected

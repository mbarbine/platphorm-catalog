# ph3ar__stripe-subscription-starter

The all-in-one starter kit for high-performance SaaS applications.

## Metadata

- ID: `github-recent__ph3ar__stripe-subscription-starter`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/ph3ar__stripe-subscription-starter`
- Remote: `git@github.com:ph3ar/stripe-subscription-starter.git`
- Primary language: YAML
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `app/api/webhooks/route.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/auth/callback/route.ts`, `app/auth/reset_password/route.ts`, `components/ui/AuthForms/EmailSignIn.tsx`, `components/ui/AuthForms/ForgotPassword.tsx`, `components/ui/AuthForms/OauthSignIn.tsx`, `components/ui/AuthForms/PasswordSignIn.tsx`, `components/ui/AuthForms/Separator.tsx`, `components/ui/AuthForms/Signup.tsx`, `components/ui/AuthForms/UpdatePassword.tsx`, `package.json`, `utils/auth-helpers/client.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.local.example`, `utils/supabase/admin.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.local.example`, `package.json`, `postcss.config.js`, `utils/stripe/client.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `package.json`, `utils/supabase/admin.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `schema.sql`, `supabase/migrations/20230530034630_init.sql`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository includes database schemas, migrations, or database framework dependencies.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-index.txt`, `public/llms.txt`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `components/ui/AccountForms/CustomerPortalForm.tsx`, `components/ui/AccountForms/EmailForm.tsx`, `components/ui/AccountForms/NameForm.tsx`, `components/ui/AuthForms/EmailSignIn.tsx`, `components/ui/AuthForms/ForgotPassword.tsx`, `components/ui/AuthForms/OauthSignIn.tsx`, `components/ui/AuthForms/PasswordSignIn.tsx`, `components/ui/AuthForms/Separator.tsx`, `components/ui/AuthForms/Signup.tsx`, `components/ui/AuthForms/UpdatePassword.tsx`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `.env.local.example`, `app/account/page.tsx`, `app/api/webhooks/route.ts`, `app/auth/callback/route.ts`, `app/auth/reset_password/route.ts`, `app/page.tsx`, `app/signin/[id]/page.tsx`, `components/ui/AuthForms/OauthSignIn.tsx`, `components/ui/Pricing/Pricing.tsx`, `package.json`, `pnpm-lock.yaml`, `README.md`, `supabase/config.toml`, `utils/auth-helpers/client.ts`, `utils/supabase/admin.ts`, `utils/supabase/client.ts`, `utils/supabase/middleware.ts`, `utils/supabase/queries.ts`, `utils/supabase/server.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository has source-backed indicators for a Supabase integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `utils/helpers.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### MCP Tool Server

- ID: `mcp.tool-server`
- Type: mcp
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/mcp/route.ts`, `package.json`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository contains MCP-related routes, manifests, files, or dependencies.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/icons/Logo.tsx`, `components/ui/LogoCloud/LogoCloud.tsx`, `package.json`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.local.example`, `app/api/webhooks/route.ts`, `components/ui/AccountForms/CustomerPortalForm.tsx`, `components/ui/LogoCloud/LogoCloud.tsx`, `components/ui/Pricing/Pricing.tsx`, `package.json`, `pnpm-lock.yaml`, `README.md`, `schema.sql`, `utils/stripe/client.ts`, `utils/stripe/config.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository has source-backed indicators for a Stripe integration.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/account/page.tsx`, `app/signin/[id]/page.tsx`, `app/signin/page.tsx`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `.env.local.example`, `app/api/webhooks/route.ts`, `app/robots.ts`, `app/sitemap.ts`, `utils/helpers.ts`, `utils/stripe/client.ts`, `utils/stripe/config.ts`, `utils/supabase/admin.ts`, `utils/supabase/client.ts`, `utils/supabase/middleware.ts`, `utils/supabase/server.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/icons/GitHub.tsx`, `components/icons/Logo.tsx`, `components/ui/AccountForms/CustomerPortalForm.tsx`, `components/ui/AccountForms/EmailForm.tsx`, `components/ui/AccountForms/NameForm.tsx`, `components/ui/AuthForms/EmailSignIn.tsx`, `components/ui/AuthForms/ForgotPassword.tsx`, `components/ui/AuthForms/OauthSignIn.tsx`, `components/ui/AuthForms/PasswordSignIn.tsx`, `components/ui/AuthForms/Separator.tsx`, `components/ui/AuthForms/Signup.tsx`, `components/ui/AuthForms/UpdatePassword.tsx`, `components/ui/Button/Button.tsx`, `components/ui/Card/Card.tsx`, `components/ui/Footer/Footer.tsx`, `components/ui/Input/Input.tsx`, `components/ui/LoadingDots/LoadingDots.tsx`, `components/ui/LogoCloud/LogoCloud.tsx`, `components/ui/Navbar/Navbar.tsx`, `components/ui/Navbar/Navlinks.tsx`, `components/ui/Pricing/Pricing.tsx`, `components/ui/Toasts/toast.tsx`, `components/ui/Toasts/toaster.tsx`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.local.example`, `app/api/webhooks/route.ts`
- Tests: none detected
- LLMs context: `public/llms-index.txt`, `public/llms.txt`

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `app/auth/reset_password/route.ts`, `utils/helpers.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`, `.env.local.example`, `app/api/webhooks/route.ts`, `utils/stripe/client.ts`, `utils/stripe/config.ts`, `utils/supabase/admin.ts`, `utils/supabase/client.ts`, `utils/supabase/middleware.ts`, `utils/supabase/server.ts`
- [medium] No automated test files were detected. Evidence: `app/account/page.tsx`, `app/api/mcp/route.ts`, `app/api/webhooks/route.ts`, `app/signin/[id]/page.tsx`, `app/signin/page.tsx`, `package.json`, `public/llms-index.txt`, `public/llms.txt`, `README.md`

## Gaps

- test files not detected
- CI workflows not detected

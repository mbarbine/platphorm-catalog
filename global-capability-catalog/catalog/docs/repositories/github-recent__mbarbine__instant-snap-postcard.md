# mbarbine__instant-snap-postcard

**URL**: https://lovable.dev/projects/5a0f6ddb-2009-4f4f-905b-70298d5d35e7

## Metadata

- ID: `github-recent__mbarbine__instant-snap-postcard`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__instant-snap-postcard`
- Remote: `git@github.com:mbarbine/instant-snap-postcard.git`
- Primary language: JSON
- Frameworks: React, Tailwind CSS, Vite
- Maturity: internal
- Confidence: high

## Capabilities

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `package.json`, `src/components/Auth.tsx`, `src/pages/Auth.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package.json`, `postcss.config.js`, `src/components/PostcardPreview.tsx`, `src/integrations/supabase/client.ts`, `supabase/functions/send-postcard/index.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package-lock.json`, `package.json`, `tsconfig.app.json`, `tsconfig.json`, `tsconfig.node.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: internal
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `supabase/migrations/20251010042947_a6729554-ea20-4eb6-b6cd-4d1270ede0bc.sql`, `supabase/migrations/20251010043010_57608228-9202-4834-8fea-c55ef94b4363.sql`
- Tests: none detected
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Stannp Integration

- ID: `email.stannp`
- Type: email
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `supabase/functions/send-postcard/index.ts`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Stannp integration.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `package.json`, `src/components/ContactList.tsx`, `src/components/ContactsDialog.tsx`, `src/components/ui/form.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Supabase Integration

- ID: `integration.supabase`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env`, `package-lock.json`, `package.json`, `src/integrations/supabase/client.ts`, `src/pages/Index.tsx`, `supabase/functions/send-postcard/index.ts`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Supabase integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `src/components/ContactsDialog.tsx`, `src/components/ui/alert-dialog.tsx`, `src/components/ui/dialog.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `src/pages/Auth.tsx`, `src/pages/Index.tsx`, `src/pages/NotFound.tsx`
- Tests: none detected
- LLMs context: none detected

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env`, `src/integrations/supabase/client.ts`, `supabase/functions/send-postcard/index.ts`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`
- Tests: none detected
- LLMs context: none detected

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `src/components/PostcardPreview.tsx`, `src/components/ui/label.tsx`, `supabase/functions/send-postcard/index.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `src/components/Auth.tsx`, `src/components/Camera.tsx`, `src/components/ContactList.tsx`, `src/components/ContactsDialog.tsx`, `src/components/PostcardPreview.tsx`, `src/components/ui/accordion.tsx`, `src/components/ui/alert-dialog.tsx`, `src/components/ui/alert.tsx`, `src/components/ui/aspect-ratio.tsx`, `src/components/ui/avatar.tsx`, `src/components/ui/badge.tsx`, `src/components/ui/breadcrumb.tsx`, `src/components/ui/button.tsx`, `src/components/ui/calendar.tsx`, `src/components/ui/card.tsx`, `src/components/ui/carousel.tsx`, `src/components/ui/chart.tsx`, `src/components/ui/checkbox.tsx`, `src/components/ui/collapsible.tsx`, `src/components/ui/command.tsx`, `src/components/ui/context-menu.tsx`, `src/components/ui/dialog.tsx`, `src/components/ui/drawer.tsx`, `src/components/ui/dropdown-menu.tsx`, `src/components/ui/form.tsx`, `src/components/ui/hover-card.tsx`, `src/components/ui/input-otp.tsx`, `src/components/ui/input.tsx`, `src/components/ui/label.tsx`, `src/components/ui/menubar.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `src/components/ui/chart.tsx`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env`, `src/integrations/supabase/client.ts`, `supabase/functions/send-postcard/index.ts`
- [medium] No automated test files were detected. Evidence: `package.json`, `README.md`, `src/pages/Auth.tsx`, `src/pages/Index.tsx`, `src/pages/NotFound.tsx`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected

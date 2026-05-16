# mbarbine__stannp-nextjs-bp

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Metadata

- ID: `github-recent__mbarbine__stannp-nextjs-bp`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__stannp-nextjs-bp`
- Remote: `git@github.com:mbarbine/stannp-nextjs-bp.git`
- Primary language: JSON
- Frameworks: Next.js, Prisma, React, Tailwind CSS
- Maturity: deprecated
- Confidence: high

## Capabilities

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/auth/register/route.ts`, `app/api/mail/cancel/route.ts`, `app/api/mail/preview/route.ts`, `app/api/mail/send/route.ts`, `app/api/mail/status/route.ts`, `app/api/recipients/create/route.ts`, `app/api/recipients/list/route.ts`, `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`
- Tests: none detected
- LLMs context: none detected

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/[...nextauth].ts`, `app/api/auth/register/route.ts`, `app/components/Auth/LoginForm.tsx`, `app/components/Auth/RegisterForm.tsx`, `app/login/page.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `postcss.config.js`, `postcss.config.mjs`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/mail/status/route.ts`, `app/components/Dashboard/CancelMailButton.tsx`, `app/components/Dashboard/MailDetailView.tsx`, `app/components/Dashboard/RecipientSelector.tsx`, `app/components/Dashboard/SentMailList.tsx`, `app/dashboard/new/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/recipients/page.tsx`, `app/dashboard/sent/page.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

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

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `prisma/schema.prisma`
- Tests: none detected
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Document Processing

- ID: `document.processing`
- Type: document-processing
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates PDF, DOCX, document conversion, extraction, or rendering behavior.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/stripe/create-checkout/route.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/components/Upload/DragDropUpload.tsx`, `app/components/Upload/MessageEditor.tsx`, `app/components/Upload/PdfPreview.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/components/Auth/LoginForm.tsx`, `app/components/Auth/RegisterForm.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `pnpm-lock.yaml`, `README.md`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/components/Auth/LoginForm.tsx`, `app/login/page.tsx`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`, `app/lib/api/stripe.ts`, `package.json`, `pnpm-lock.yaml`, `prisma/schema.prisma`, `tree.sh`
- Tests: none detected
- LLMs context: none detected

Repository has source-backed indicators for a Stripe integration.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/recipients/page.tsx`, `app/dashboard/new/page.tsx`, `app/dashboard/page.tsx`, `app/dashboard/recipients/page.tsx`, `app/dashboard/sent/page.tsx`, `app/login/page.tsx`, `app/register/page.tsx`
- Tests: none detected
- LLMs context: none detected

Repository contains user-facing application page routes.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/api/auth/[...nextauth].ts`, `app/api/auth/register/route.ts`, `app/api/mail/cancel/route.ts`, `app/api/mail/send/route.ts`, `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`, `app/lib/api/stripe.ts`
- Tests: none detected
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/components/Auth/LoginForm.tsx`, `app/components/Auth/RegisterForm.tsx`, `app/components/Dashboard/CancelMailButton.tsx`, `app/components/Dashboard/MailDetailView.tsx`, `app/components/Dashboard/RecipientSelector.tsx`, `app/components/Dashboard/SentMailList.tsx`, `app/components/Upload/DragDropUpload.tsx`, `app/components/Upload/MessageEditor.tsx`, `app/components/Upload/PdfPreview.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/api/stripe/webhook/route.ts`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Secret-like environment variable names are referenced. Evidence: `app/api/auth/[...nextauth].ts`, `app/api/auth/register/route.ts`, `app/api/mail/cancel/route.ts`, `app/api/mail/send/route.ts`, `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`, `app/lib/api/stripe.ts`
- [medium] No automated test files were detected. Evidence: `app/api/auth/register/route.ts`, `app/api/mail/cancel/route.ts`, `app/api/mail/preview/route.ts`, `app/api/mail/send/route.ts`, `app/api/mail/status/route.ts`, `app/api/recipients/create/route.ts`, `app/api/recipients/list/route.ts`, `app/api/recipients/page.tsx`, `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected

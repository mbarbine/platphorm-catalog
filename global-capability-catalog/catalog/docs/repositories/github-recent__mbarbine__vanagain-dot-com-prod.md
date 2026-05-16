# mbarbine__vanagain-dot-com-prod

VanAgain is a full-stack e-commerce website for selling vintage van parts, accessories, and restoration supplies. It's a modernized rebuild of what was originally a PHP/Laravel + MySQL site (the legacy code is preserved in the /admin directory for reference), now rebuilt as a modern Next.js 16 application deployed on Vercel.

## Metadata

- ID: `github-recent__mbarbine__vanagain-dot-com-prod`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__vanagain-dot-com-prod`
- Remote: `git@github.com:mbarbine/vanagain-dot-com-prod.git`
- Primary language: JSON
- Frameworks: Next.js, Playwright, React, Tailwind CSS, Vitest
- Maturity: deprecated
- Confidence: high

## Capabilities

### Accessibility UI Support

- ID: `accessibility.ui-a11y`
- Type: accessibility
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/(store)/accessibility/page.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates ARIA, accessibility, keyboard, or screen-reader oriented UI behavior.

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/ai/chat/route.ts`, `components/ai/chat-widget.tsx`, `package.json`, `tests/unit/flags.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### API Route Handlers

- ID: `api.route-handlers`
- Type: api
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty medium
- Source paths: `app/api/ai/chat/route.ts`, `app/api/auth/session/route.ts`, `app/api/cart/route.ts`, `app/api/checkout/session/route.ts`, `app/api/checkout/shipping-rates/route.ts`, `app/api/coupons/validate/route.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/llms-index.json/route.ts`, `app/api/newsletter/subscribe/route.ts`, `app/api/shipping/rates/route.ts`, `app/api/v1/account/addresses/[id]/route.ts`, `app/api/v1/account/addresses/route.ts`, `app/api/v1/account/orders/[id]/route.ts`, `app/api/v1/account/orders/route.ts`, `app/api/v1/account/profile/route.ts`, `app/api/v1/account/wishlist/[productId]/route.ts`, `app/api/v1/account/wishlist/route.ts`, `app/api/v1/auth/forgot-password/route.ts`, `app/api/v1/auth/login/route.ts`, `app/api/v1/auth/logout/route.ts`, `app/api/v1/auth/register/route.ts`, `app/api/v1/auth/reset-password/route.ts`, `app/api/v1/auth/session/route.ts`, `app/api/v1/blog/[slug]/comments/route.ts`, `app/api/v1/blog/[slug]/route.ts`, `app/api/v1/blog/categories/route.ts`, `app/api/v1/blog/route.ts`, `app/api/v1/cart/items/[id]/route.ts`, `app/api/v1/cart/items/route.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository exposes source-backed API route handlers discovered from framework route files.

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/[locale]/(auth)/forgot-password/page.tsx`, `app/[locale]/(auth)/login/page.tsx`, `app/[locale]/(auth)/register/page.tsx`, `app/[locale]/(auth)/reset-password/page.tsx`, `app/api/auth/session/route.ts`, `app/api/checkout/session/route.ts`, `app/api/v1/auth/forgot-password/route.ts`, `app/api/v1/auth/login/route.ts`, `app/api/v1/auth/logout/route.ts`, `app/api/v1/auth/register/route.ts`, `app/api/v1/auth/reset-password/route.ts`, `app/api/v1/auth/session/route.ts`, `app/api/v1/checkout/session/route.ts`, `lib/auth.ts`, `lib/session-cookie.ts`, `package.json`, `tests/e2e/account-authenticated.spec.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates authentication, login, session, token, or identity handling.

### Access Control

- ID: `authorization.access-control`
- Type: authorization
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/admin/customers/page.tsx`, `app/admin/orders/page.tsx`, `app/admin/page.tsx`, `app/admin/products/page.tsx`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `scripts/import-shopify-blog-and-tags.mjs`, `scripts/shopify-add-product-tags.mjs`, `scripts/shopify-sync-navigation.mjs`, `scripts/shopify-upsert-pages.mjs`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `.mcp.json`, `app/[locale]/(store)/blog/[slug]/page.tsx`, `app/[locale]/(store)/blog/category/[slug]/page.tsx`, `app/[locale]/(store)/blog/page.tsx`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/v1/blog/[slug]/comments/route.ts`, `app/api/v1/blog/[slug]/route.ts`, `app/api/v1/blog/categories/route.ts`, `app/api/v1/blog/route.ts`, `app/api/v1/content/faqs/route.ts`, `app/api/v1/content/pages/[slug]/route.ts`, `app/api/v1/content/testimonials/route.ts`, `components/blog/blog-comments.tsx`, `components/blog/comment-form.tsx`, `components/checkout/checkout.tsx`, `components/ui/skip-to-content.tsx`, `DOCS/API-GUIDE.md`, `DOCS/FULL-PLAN.md`, `DOCS/MIGRATION-GUIDE.md`, `DOCS/Modernization-plan.md`, `DOCS/ROADMAP.md`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `lib/db/index.ts`, `lib/session-cookie.ts`, `package.json`, `playwright.post-deploy.config.ts`, `postcss.config.mjs`, `README.md`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Operational Dashboard

- ID: `dashboard.operational-dashboard`
- Type: dashboard
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/admin/customers/page.tsx`, `app/admin/orders/page.tsx`, `app/admin/page.tsx`, `app/admin/products/page.tsx`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `scripts/import-shopify-blog-and-tags.mjs`, `scripts/shopify-add-product-tags.mjs`, `scripts/shopify-sync-navigation.mjs`, `scripts/shopify-upsert-pages.mjs`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates dashboard, admin, status, or overview UI surfaces.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.mcp.json`, `app/api/llms-index.json/route.ts`, `app/rss.xml/route.ts`, `components/ui/json-ld.tsx`, `package-lock.json`, `package.json`, `scripts/007-import-legacy-users.mjs`, `scripts/import-legacy-dump.sh`, `scripts/import-shopify-blog-and-tags.mjs`, `scripts/verify-shopify-import-live.mjs`, `shopify-theme/assets/jsconfig.json`, `tsconfig.json`, `vercel.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `package.json`, `scripts/001-create-schema.sql`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `vercel.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository includes CI workflows, deployment config, or containerization files.

### Dictionary Lookup Tools

- ID: `dictionary.lookup-tools`
- Type: dictionary
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/(store)/terms/page.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates dictionary, glossary, lookup, or terminology tooling.

### LLMs Discovery Files

- ID: `discovery.llms-files`
- Type: discovery
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository provides local LLMs discovery/context files that can guide machine-readable understanding.

### Ecommerce Product Catalog

- ID: `ecommerce.product-catalog`
- Type: ecommerce
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/[locale]/(store)/account/orders/[id]/page.tsx`, `app/[locale]/(store)/account/orders/page.tsx`, `app/[locale]/(store)/cart/page.tsx`, `app/[locale]/(store)/checkout/page.tsx`, `app/[locale]/(store)/checkout/success/page.tsx`, `app/[locale]/(store)/products/[slug]/page.tsx`, `app/[locale]/(store)/products/page.tsx`, `app/[locale]/(store)/track-order/page.tsx`, `app/admin/orders/page.tsx`, `app/admin/products/page.tsx`, `app/api/cart/route.ts`, `app/api/checkout/session/route.ts`, `app/api/checkout/shipping-rates/route.ts`, `app/api/v1/account/orders/[id]/route.ts`, `app/api/v1/account/orders/route.ts`, `app/api/v1/account/wishlist/[productId]/route.ts`, `app/api/v1/cart/items/[id]/route.ts`, `app/api/v1/cart/items/route.ts`, `app/api/v1/cart/route.ts`, `app/api/v1/checkout/session/route.ts`, `app/api/v1/orders/track/route.ts`, `app/api/v1/product-types/route.ts`, `app/api/v1/products/[slug]/images/route.ts`, `app/api/v1/products/[slug]/related/route.ts`, `app/api/v1/products/[slug]/route.ts`, `app/api/v1/products/route.ts`, `components/checkout/checkout.tsx`, `components/checkout/shipping-form.tsx`, `components/products/add-to-cart-button.tsx`, `components/products/empty-product-state.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates products, cart, checkout, orders, Shopify, or commerce flows.

### File Upload Handling

- ID: `file.upload-handling`
- Type: file-upload
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/products/product-media-gallery.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates upload, attachment, media, or multipart file handling.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/[locale]/(store)/contact/page.tsx`, `app/actions/contact.ts`, `app/api/health/route.ts`, `components/account/address-form.tsx`, `components/account/settings-form.tsx`, `components/blog/comment-form.tsx`, `components/checkout/shipping-form.tsx`, `components/layout/newsletter-form.tsx`, `lib/logger.ts`, `tests/unit/components/checkout/shipping-form.test.tsx`, `tests/unit/contact-actions.test.ts`, `tests/unit/logger.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Browser Gameplay

- ID: `gameplay.browser-game`
- Type: gameplay
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/health/route.ts`, `lib/logger.ts`, `tests/unit/logger.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates game, canvas, realtime, player, or gameplay implementation.

### AWS Integration

- ID: `integration.aws`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `scripts/optimize-s3-products.mjs`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository has source-backed indicators for a AWS integration.

### Neon Integration

- ID: `integration.neon`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `package.json`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository has source-backed indicators for a Neon integration.

### OpenAI Integration

- ID: `integration.openai`
- Type: ai-model
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/ai/chat/route.ts`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `README.md`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository has source-backed indicators for a OpenAI integration.

### Postgres Integration

- ID: `integration.postgres`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `.mcp.json`, `app/api/health/route.ts`, `DOCS/FULL-PLAN.md`, `DOCS/MIGRATION-GUIDE.md`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `lib/db/index.ts`, `lib/session-cookie.ts`, `package.json`, `README.md`, `scripts/import-legacy-dump.sh`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository has source-backed indicators for a Postgres integration.

### Redis Integration

- ID: `integration.redis`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `.github/copilot-instructions.md`, `app/actions/password-reset.ts`, `lib/auth.ts`, `lib/products.ts`, `lib/redis.ts`, `next.config.ts`, `package-lock.json`, `package.json`, `tests/unit/redis-connection.test.ts`, `tests/unit/redis-singleton.test.ts`, `tests/unit/redis.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository has source-backed indicators for a Redis integration.

### S3 Integration

- ID: `integration.s3`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `lib/assets.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `scripts/build_shopify_product_template.py`, `scripts/optimize-s3-products.mjs`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository has source-backed indicators for a S3 integration.

### Shopify Integration

- ID: `integration.shopify`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `package.json`, `scripts/import-shopify-blog-and-tags.mjs`, `scripts/shopify-add-product-tags.mjs`, `scripts/shopify-sync-navigation.mjs`, `scripts/shopify-upsert-pages.mjs`, `scripts/verify-shopify-import-live.mjs`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository has source-backed indicators for a Shopify integration.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/[locale]/layout.tsx`, `app/api/health/route.ts`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `lib/checkout.ts`, `lib/logger.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `tests/unit/checkout.test.ts`, `tests/unit/commerce-domain.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/[locale]/(auth)/login/page.tsx`, `app/[locale]/(store)/blog/[slug]/page.tsx`, `app/[locale]/(store)/blog/category/[slug]/page.tsx`, `app/[locale]/(store)/blog/page.tsx`, `app/api/health/route.ts`, `app/api/v1/auth/login/route.ts`, `app/api/v1/auth/logout/route.ts`, `app/api/v1/blog/[slug]/comments/route.ts`, `app/api/v1/blog/[slug]/route.ts`, `app/api/v1/blog/categories/route.ts`, `app/api/v1/blog/route.ts`, `components/blog/blog-comments.tsx`, `components/blog/comment-form.tsx`, `components/layout/brand-logo.tsx`, `lib/logger.ts`, `package.json`, `scripts/import-shopify-blog-and-tags.mjs`, `tests/unit/flags.test.ts`, `tests/unit/logger.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Stripe Integration

- ID: `payments.stripe`
- Type: payments
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/webhooks/stripe/route.ts`, `components/checkout/checkout.tsx`, `DOCS/FULL-PLAN.md`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `get_stripe_webhook.js`, `lib/checkout.ts`, `lib/orders.ts`, `lib/security-headers.ts`, `lib/stripe.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `README.md`, `tests/unit/order-confirmation.test.ts`, `tests/unit/roadmap-singletons.test.ts`, `tests/unit/stripe-webhook.test.ts`, `tests/unit/stripe.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository has source-backed indicators for a Stripe integration.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/[locale]/(auth)/forgot-password/page.tsx`, `app/[locale]/(auth)/login/page.tsx`, `app/[locale]/(auth)/register/page.tsx`, `app/[locale]/(auth)/reset-password/page.tsx`, `app/[locale]/(store)/about/page.tsx`, `app/[locale]/(store)/accessibility/page.tsx`, `app/[locale]/(store)/account/addresses/[id]/page.tsx`, `app/[locale]/(store)/account/addresses/new/page.tsx`, `app/[locale]/(store)/account/addresses/page.tsx`, `app/[locale]/(store)/account/orders/[id]/page.tsx`, `app/[locale]/(store)/account/orders/page.tsx`, `app/[locale]/(store)/account/page.tsx`, `app/[locale]/(store)/account/settings/page.tsx`, `app/[locale]/(store)/account/wishlist/page.tsx`, `app/[locale]/(store)/blog/[slug]/page.tsx`, `app/[locale]/(store)/blog/category/[slug]/page.tsx`, `app/[locale]/(store)/blog/page.tsx`, `app/[locale]/(store)/cart/page.tsx`, `app/[locale]/(store)/categories/[slug]/page.tsx`, `app/[locale]/(store)/categories/page.tsx`, `app/[locale]/(store)/checkout/page.tsx`, `app/[locale]/(store)/checkout/success/page.tsx`, `app/[locale]/(store)/contact/page.tsx`, `app/[locale]/(store)/cookies/page.tsx`, `app/[locale]/(store)/deals/page.tsx`, `app/[locale]/(store)/faq/page.tsx`, `app/[locale]/(store)/page.tsx`, `app/[locale]/(store)/privacy/page.tsx`, `app/[locale]/(store)/products/[slug]/page.tsx`, `app/[locale]/(store)/products/page.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository contains user-facing application page routes.

### Search Query Interface

- ID: `search.query-interface`
- Type: search
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/[locale]/(store)/search/page.tsx`, `app/api/v1/search/route.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates search UI, indexing, or query behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `.env.example`, `app/[locale]/(store)/blog/[slug]/page.tsx`, `app/[locale]/(store)/categories/[slug]/page.tsx`, `app/[locale]/(store)/products/[slug]/page.tsx`, `app/[locale]/layout.tsx`, `app/actions/contact.ts`, `app/api/ai/chat/route.ts`, `app/api/checkout/shipping-rates/route.ts`, `app/api/health/route.ts`, `app/api/llms-index.json/route.ts`, `app/api/v1/newsletter/subscribe/route.ts`, `app/api/webhooks/stripe/route.ts`, `app/robots.ts`, `app/rss.xml/route.ts`, `app/sitemap.ts`, `components/checkout/checkout.tsx`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `lib/assets.ts`, `lib/auth.ts`, `lib/cart.ts`, `lib/checkout.ts`, `lib/db/index.ts`, `lib/logger.ts`, `lib/mailchimp.ts`, `lib/notifications.ts`, `lib/redis.ts`, `lib/session-cookie.ts`, `lib/shipping/index.ts`, `lib/stripe.ts`, `lib/structured-data.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository references environment variables; secret-like names are cataloged without values.

### SEO and Discovery Surface

- ID: `seo.discovery-surface`
- Type: seo
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty low
- Source paths: `public/robots.txt`, `robots.txt`, `sitemap.xml`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository includes crawlable discovery files such as sitemap, feeds, robots, or web manifest files.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/[locale]/(store)/shipping/page.tsx`, `app/api/checkout/shipping-rates/route.ts`, `app/api/shipping/rates/route.ts`, `app/api/v1/shipping/rates/route.ts`, `components/checkout/shipping-form.tsx`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `lib/shipping/index.ts`, `package.json`, `tests/unit/components/checkout/shipping-form.test.tsx`, `tests/unit/shipping-international.test.ts`, `tests/unit/shipping.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `playwright.config.ts`, `playwright.post-deploy.config.ts`, `scripts/test-mailchimp.ts`, `scripts/test-smtp.ts`, `tests/e2e/account-auth.spec.ts`, `tests/e2e/account-authenticated.spec.ts`, `tests/e2e/cross-browser-accessibility.spec.ts`, `tests/e2e/cross-browser-dark-mode.spec.ts`, `tests/e2e/cross-browser-forms.spec.ts`, `tests/e2e/cross-browser-media.spec.ts`, `tests/e2e/cross-browser-navigation.spec.ts`, `tests/e2e/cross-browser-responsive.spec.ts`, `tests/e2e/storefront.spec.ts`, `tests/integration/auth.test.ts`, `tests/integration/blog.test.ts`, `tests/integration/cart-wishlist-coupon.test.ts`, `tests/integration/orders.test.ts`, `tests/integration/paypal.test.ts`, `tests/integration/shipping.test.ts`, `tests/integration/stripe.test.ts`, `tests/integration/wishlist.test.ts`, `tests/post-deploy/smoke.spec.ts`, `tests/unit/about-page.test.ts`, `tests/unit/accessibility-page.test.ts`, `tests/unit/account-pages.test.ts`, `tests/unit/account-wishlist-page.test.ts`, `tests/unit/add-to-cart-button.test.tsx`, `tests/unit/addresses-actions.test.ts`, `tests/unit/addresses.test.ts`, `tests/unit/admin-customers-page.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Repository includes automated test files.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/account/address-card.tsx`, `components/account/address-form.tsx`, `components/account/settings-form.tsx`, `components/ai/chat-widget.tsx`, `components/blog/blog-comments.tsx`, `components/blog/comment-form.tsx`, `components/categories/category-art.tsx`, `components/checkout/checkout.tsx`, `components/checkout/shipping-form.tsx`, `components/home/category-grid.tsx`, `components/home/hero-carousel.tsx`, `components/home/hero-section.tsx`, `components/home/testimonials-section.tsx`, `components/layout/brand-logo.tsx`, `components/layout/footer.tsx`, `components/layout/header.tsx`, `components/layout/mobile-bottom-nav.tsx`, `components/layout/newsletter-form.tsx`, `components/products/add-to-cart-button.tsx`, `components/products/empty-product-state.tsx`, `components/products/per-page-select.tsx`, `components/products/product-card.tsx`, `components/products/product-description.tsx`, `components/products/product-filters.tsx`, `components/products/product-media-gallery.tsx`, `components/products/product-quick-view.tsx`, `components/products/product-sort.tsx`, `components/products/product-toolbar.tsx`, `components/products/related-products.tsx`, `components/products/sort-button.tsx`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Reusable UI components were found in component-oriented source paths.

### Webhook Event Receiver

- ID: `webhooks.event-receiver`
- Type: webhooks
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `.env.example`, `app/api/webhooks/stripe/route.ts`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `get_stripe_webhook.js`, `lib/notifications.ts`, `tests/unit/stripe-webhook.test.ts`
- Tests: 30
- LLMs context: `public/llms-full.txt`, `public/llms.txt`, `shopify-theme/assets/llms-full.txt`, `shopify-theme/assets/llms.txt`

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `.Jules/sentinel.md`, `app/[locale]/(store)/about/page.tsx`, `app/[locale]/(store)/blog/[slug]/page.tsx`, `app/[locale]/(store)/contact/page-client.tsx`, `app/[locale]/(store)/faq/page.tsx`, `app/actions/account.ts`, `app/actions/password-reset.ts`, `components/ui/breadcrumbs.tsx`, `components/ui/json-ld.tsx`, `lib/auth.ts`, `lib/content.ts`, `lib/orders.ts`, `scripts/run-full-migration.mjs`, `scripts/shopify-add-product-tags.mjs`, `scripts/summary-legacy-dump.mjs`, `scripts/verify-content-parity.mjs`, `scripts/verify-shopify-import-live.mjs`, `shopify-theme/assets/facets.js`, `shopify-theme/assets/localization.js`, `shopify-theme/assets/price-per-item.js`, `shopify-theme/assets/product-recommendations.js`, `shopify-theme/assets/qr-code-generator.js`, `shopify-theme/assets/variant-picker.js`, `tests/integration/blog.test.ts`
- [medium] Secret-like environment variable names are referenced. Evidence: `.env.example`, `app/actions/contact.ts`, `app/api/ai/chat/route.ts`, `app/api/checkout/shipping-rates/route.ts`, `app/api/v1/newsletter/subscribe/route.ts`, `app/api/webhooks/stripe/route.ts`, `components/checkout/checkout.tsx`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `lib/db/index.ts`, `lib/mailchimp.ts`, `lib/session-cookie.ts`, `lib/shipping/index.ts`, `lib/stripe.ts`, `scripts/_check-migration-state.mjs`, `scripts/_check-uniqueness.mjs`, `scripts/_inspect-constraints.mjs`, `scripts/_inspect-more.mjs`, `scripts/_inspect-pks.mjs`, `scripts/_inspect-tables.mjs`, `scripts/_inspect-types.mjs`, `scripts/_quick-cols.mjs`, `scripts/007-import-legacy-users.mjs`, `scripts/import-shopify-blog-and-tags.mjs`, `scripts/migrate-schema.mjs`, `scripts/run-full-migration.mjs`, `scripts/seed-data.mjs`, `scripts/shopify-add-product-tags.mjs`, `scripts/shopify-sync-navigation.mjs`, `scripts/shopify-upsert-pages.mjs`, `scripts/summary-neon-db.mjs`, `scripts/test-mailchimp.ts`, `tests/e2e/account-authenticated.spec.ts`, `tests/unit/contact-actions.test.ts`, `tests/unit/db/index.test.ts`, `tests/unit/legacy-mail.test.ts`, `tests/unit/newsletter-subscribe.test.ts`, `tests/unit/shipping-international.test.ts`, `tests/unit/shipping.test.ts`, `tests/unit/stripe-webhook.test.ts`, `tests/unit/stripe.test.ts`

## Gaps

- CI workflows not detected

# payments.stripe

Repository has source-backed indicators for a Stripe integration.

## Metadata

- Name: Stripe Integration
- Type: payments
- Reuse score: 34
- Implementations: 20
- Risk summary: 21 risk findings across 20 implementations.

## Recommended Source

- github-recent__mbarbine__platphorm-auction-vice: 64 - internal maturity, test evidence present, documentation/context present

## Implementations

### github-recent__mbarbine__autographed-bibles-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 4
- Source paths: `__tests__/stripe.test.ts`, `API_DOCUMENTATION.md`, `app/actions/orders.ts`, `app/actions/stripe.ts`, `app/admin/orders/page.tsx`, `app/api/webhooks/stripe/route.ts`, `app/success/page.tsx`, `components/checkout.tsx`, `lib/stripe.ts`, `package.json`, `pnpm-lock.yaml`
### github-recent__mbarbine__flaskflow-www

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `app/api/create-checkout-session/route.ts`, `package.json`
### github-recent__mbarbine__hot-chocolate-for-profit-webby

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 5
- Source paths: `app/actions/stripe.ts`, `app/checkout/page.tsx`, `lib/products.ts`, `lib/stripe.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `public/version.json`
### github-recent__mbarbine__mailthing

- Maturity: prototype
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `.env`, `package.json`, `src/config/env.ts`, `src/controllers/creditsController.ts`, `src/controllers/paymentsController.ts`, `src/routes/create-payment-intent.ts`, `src/routes/credits.ts`, `src/routes/get-credits.ts`
### github-recent__mbarbine__mailthing-api

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `app/src/config/env.ts`, `app/src/controllers/creditsController.ts`, `app/src/controllers/paymentsController.ts`, `app/src/server.ts`, `package.json`, `pnpm-lock.yaml`
### github-recent__mbarbine__mailthing-client

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `package.json`, `pnpm-lock.yaml`, `src/api/create-payment-intent.ts`, `src/api/get-credits.ts`, `src/components/PaymentFlow.tsx`, `src/components/PaymentForm.tsx`, `src/env.d.ts`
### github-recent__mbarbine__mailthing-main

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `.archive/StannpForms/PaymentFlow.tsx`, `.archive/StannpForms/PaymentForm.tsx`, `app/api/callback/route.ts`, `app/api/webhooks/route.ts`, `app/pricing/page.tsx`, `components/ui/AccountForms/CustomerPortalForm.tsx`, `components/ui/Pricing/Pricing.tsx`, `global.d.ts`, `package.json`, `pnpm-lock.yaml`, `README.md`, `utils/stripe/client.ts`, `utils/stripe/config.ts`, `utils/stripe/webhook.ts`
### github-recent__mbarbine__microwave-sticker-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/api/create-checkout-session/route.test.ts`, `app/api/create-checkout-session/route.ts`, `components/checkout-button.test.tsx`, `components/checkout-button.tsx`, `package-lock.json`, `package.json`
### github-recent__mbarbine__platphorm-auction-vice

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 12
- Source paths: `app/actions/stripe.ts`, `app/api/docs/route.ts`, `app/api/health/route.ts`, `app/api/v1/checkout/route.ts`, `app/api/v1/listings/route.ts`, `app/api/webhooks/stripe/route.ts`, `app/llms-index.json/route.ts`, `app/seller/onboarding/page.tsx`, `components/checkout.tsx`, `components/checkout/checkout-form.tsx`, `lib/stripe.ts`, `package.json`, `pnpm-lock.yaml`
### github-recent__mbarbine__platphorm-content-showback-dashboard

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 25
- Source paths: `app/actions/stripe.ts`, `app/api/webhooks/stripe/route.ts`, `ARCHITECTURE.md`, `components/email-capture.tsx`, `components/pricing-modal.tsx`, `components/stripe-checkout.tsx`, `lib/stripe.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `README.md`
### github-recent__mbarbine__platphorm-real-estate-nad

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 3
- Source paths: `app/api/stripe/create-checkout-session/route.ts`, `app/api/stripe/webhook/route.ts`, `components/pricing/pricing-cards.tsx`, `lib/stripe.ts`, `package.json`, `pnpm-lock.yaml`, `ROADMAP.md`
### github-recent__mbarbine__platphorm-stannp-api-wrapper

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 20
- Source paths: `app/admin/page.tsx`, `app/api/credits/purchase/route.ts`, `app/credits/page.tsx`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `scripts/000-drop-and-recreate-all-tables.sql`, `scripts/003-add-production-fields.sql`
### github-recent__mbarbine__platphorm-wrestling-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 2
- Source paths: `app/actions/booking-actions.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `scripts/create-bookings-table.sql`
### github-recent__mbarbine__scratchcraft

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `app/api/create-checkout-session/route.ts`, `app/api/webhook/route.ts`, `components/cart.tsx`, `lib/stripe.ts`, `package.json`, `pnpm-lock.yaml`
### github-recent__mbarbine__stannp-gpt-5-test

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 9
- Source paths: `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`, `components/user-credits.tsx`, `docs/AUTH0_DATABASE_FIXES.md`, `docs/AUTH0_STRIPE_INTEGRATION_COMPLETE.md`, `docs/FOREIGN_KEY_FIX_IMPLEMENTED.md`, `docs/INTEGRATION_COMPLETE.md`, `docs/STRIPE_AUTH_IMPLEMENTATION.md`, `docs/STRIPE_SETUP.md`, `package.json`
### github-recent__mbarbine__stannp-nextjs-bp

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `app/api/stripe/create-checkout/route.ts`, `app/api/stripe/webhook/route.ts`, `app/lib/api/stripe.ts`, `package.json`, `pnpm-lock.yaml`, `prisma/schema.prisma`, `tree.sh`
### github-recent__mbarbine__vanagain-dot-com-prod

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `.env.example`, `app/api/webhooks/stripe/route.ts`, `components/checkout/checkout.tsx`, `DOCS/FULL-PLAN.md`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `get_stripe_webhook.js`, `lib/checkout.ts`, `lib/orders.ts`, `lib/security-headers.ts`, `lib/stripe.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `README.md`, `tests/unit/order-confirmation.test.ts`, `tests/unit/roadmap-singletons.test.ts`, `tests/unit/stripe-webhook.test.ts`, `tests/unit/stripe.test.ts`
### github-recent__ph3ar__js_mongo_app_boilerplate

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 4
- Source paths: `app.js`, `controllers/api.js`, `package.json`, `prod-checklist.md`, `public/css/main.css`, `test/app.js`
### github-recent__ph3ar__mailthing-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `api/stripe/create-checkout-session.ts`, `api/stripe/webhook.ts`, `api/webhooks/stripe.ts`, `components/payments/CreditsPage.tsx`, `next.config.mjs`, `package-lock.json`, `package.json`, `prisma/schema.prisma`, `supabase/archive/01_create_schema.sql`, `utils/stripeClient.ts`
### github-recent__ph3ar__stripe-subscription-starter

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `.env.local.example`, `app/api/webhooks/route.ts`, `components/ui/AccountForms/CustomerPortalForm.tsx`, `components/ui/LogoCloud/LogoCloud.tsx`, `components/ui/Pricing/Pricing.tsx`, `package.json`, `pnpm-lock.yaml`, `README.md`, `schema.sql`, `utils/stripe/client.ts`, `utils/stripe/config.ts`

# webhooks.event-receiver

Source evidence indicates webhook receiving, event delivery, or signature validation behavior.

## Metadata

- Name: Webhook Event Receiver
- Type: webhooks
- Reuse score: 44
- Implementations: 58
- Risk summary: 43 risk findings across 58 implementations.

## Recommended Source

- github-recent__mbarbine__platphorm-jobs: 68 - internal maturity, test evidence present, documentation/context present

## Implementations

### github-recent__mbarbine__airrow-commuter-balloon

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 3
- Source paths: `app/api/webhooks/n8n/route.ts`
### github-recent__mbarbine__autographed-bibles-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 4
- Source paths: `app/api/webhooks/stripe/route.ts`, `components/signature-upload.tsx`
### github-recent__mbarbine__barbineworldwide-2026-metahack

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__beer-museum-manager-www

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 1
- Source paths: `app/api/events/register/route.ts`, `app/api/events/route.ts`, `app/api/webhooks/n8n/route.ts`, `lib/integrations/n8n.ts`
### github-recent__mbarbine__calendar-app-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 30
- Source paths: `app/api/v1/events/[id]/cancel/route.ts`, `app/api/v1/events/[id]/google-link/route.ts`, `app/api/v1/events/[id]/ics/route.ts`, `app/api/v1/events/[id]/outlook-link/route.ts`, `app/api/v1/events/[id]/revisions/route.ts`, `app/api/v1/events/[id]/route.ts`, `app/api/v1/events/[id]/trace/route.ts`, `app/api/v1/events/ics/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/integrations/onboard/events/route.ts`, `app/api/v1/public/events/route.ts`, `app/api/v1/webhooks/route.ts`
### github-recent__mbarbine__desert-bus

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 19
- Source paths: `app/api/events/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/webhooks/route.ts`, `app/api/v1/webhooks/status/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__doflo-clone

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 0
- Source paths: `app/api/webhooks/email/route.ts`
### github-recent__mbarbine__drone-reel-webby

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 6
- Source paths: `app/api/v1/events/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__fashion-sadiepass-www

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 7
- Source paths: `.Jules/sentinel.md`, `app/api/v1/webhook/route.ts`
### github-recent__mbarbine__ja4-sidecar

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 3
- Source paths: `.env`, `.env.production`, `ja4-alerts/alert-engine.js`
### github-recent__mbarbine__mailthing-main

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `app/api/callback/route.ts`, `app/api/webhooks/route.ts`, `utils/stripe/webhook.ts`
### github-recent__mbarbine__n8n

- Maturity: internal
- Confidence: low
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `docs/WORKFLOW_QUALITY_REPORT.md`, `seed-workflows/nad-offer-strategy-lowball.json`
### github-recent__mbarbine__onboard-platphorm-boilerplate-repo

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/api/v1/webhooks/route.ts`, `lib/site-config.ts`
### github-recent__mbarbine__platphorm-ascii

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 19
- Source paths: `__tests__/webhooks-advanced.test.ts`, `app/api/v1/webhooks/test/route.ts`, `app/api/webhooks/[id]/route.ts`, `app/api/webhooks/route.ts`, `lib/ascii/webhooks.ts`
### github-recent__mbarbine__platphorm-auction-vice

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 12
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`, `app/api/webhooks/stripe/route.ts`
### github-recent__mbarbine__platphorm-browserops

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 12
- Source paths: `lib/integrations/webhooklab.ts`, `lib/platform/contract.ts`
### github-recent__mbarbine__platphorm-content-showback-dashboard

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 25
- Source paths: `app/api/track-event/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/stripe/route.ts`, `app/api/webhooks/subscribe/route.ts`
### github-recent__mbarbine__platphorm-desa

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 30
- Source paths: `app/api/v1/events/route.ts`, `app/api/v1/webhooks/route.ts`
### github-recent__mbarbine__platphorm-design

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 23
- Source paths: `app/docs/webhooks/page.tsx`
### github-recent__mbarbine__platphorm-dictionary

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 9
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-evals

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `.env.example`, `app/api/health/route.ts`, `app/runs/[id]/webhook/page.tsx`, `lib/integrations/webhooklab-client.ts`, `lib/standards/network-manifest.ts`
### github-recent__mbarbine__platphorm-fingerprint-service

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 3
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-insights

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`, `tests/api/webhooks/route.test.ts`
### github-recent__mbarbine__platphorm-jobs

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 19
- Source paths: `__tests__/api/webhooks.test.ts`, `app/api/events/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/webhooks/test/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-jules

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/api/v1/calendar/events/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-kanban

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/api/webhook.test.ts`, `__tests__/integration/calendar-sync.test.ts`, `app/api/v1/events/route.ts`, `app/api/v1/tests/webhooklab/route.ts`, `app/api/webhooks/platphormnews/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-mcp

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/api/callback/route.ts`, `app/api/webhooks/deploy/route.ts`, `app/api/webhooks/vercel/route.ts`, `proxy.ts`, `tests/__tests__/webhooks-vercel-route.test.ts`, `tests/test_callback.ts`
### github-recent__mbarbine__platphorm-mini-games-webby

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 6
- Source paths: `app/api/events/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/games/[slug]/events/route.ts`, `app/api/v1/webhooks/route.ts`, `app/api/v1/webhooks/status/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-monitor

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `.env.example`, `app/api/deployments/[deploymentId]/events/route.ts`, `app/api/webhooks/history/route.ts`, `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/vercel/route.ts`, `lib/api/auth.ts`, `lib/webhooks/__tests__/verify.test.ts`, `lib/webhooks/outbound.ts`, `lib/webhooks/verify.ts`
### github-recent__mbarbine__platphorm-msi-editor

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 11
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-onboard

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 20
- Source paths: `app/api/webhooks/route.ts`, `lib/site-config.ts`
### github-recent__mbarbine__platphorm-openclaw

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `app/api/cron/webhooks/route.ts`, `app/api/v1/tests/webhooklab/route.ts`, `app/api/webhooks/route.ts`, `tests/api/cron/webhooks.test.ts`
### github-recent__mbarbine__platphorm-opencontent

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 30
- Source paths: `app/api/v1/webhooks/route.ts`
### github-recent__mbarbine__platphorm-opendocs

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 30
- Source paths: `app/api/v1/webhooks/route.ts`
### github-recent__mbarbine__platphorm-podcasts

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `.next.preverify-20260419-2027/server/chunks/[root-of-the-server]__04wq8fq._.js`, `app/api/v1/events/route.ts`, `app/api/v1/publish/route.ts`, `app/api/v1/webhooks/deliver/route.ts`, `app/api/v1/webhooks/route.ts`
### github-recent__mbarbine__platphorm-quake

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/app/api/webhooks.test.ts`, `app/api/events/route.ts`, `app/api/multiplayer/sessions/[sessionId]/events/route.ts`, `app/api/v1/events/route.ts`, `app/api/v1/matches/[id]/events/route.ts`, `app/api/v1/webhooks/route.ts`, `app/api/v1/webhooks/status/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-radio-backend

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 3
- Source paths: `app/api/events/route.ts`, `app/api/mcp/events/route.ts`
### github-recent__mbarbine__platphorm-real-estate-nad

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 3
- Source paths: `app/api/sessions/event/route.ts`, `app/api/stripe/webhook/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-register

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 1
- Source paths: `app/api/v1/events/route.ts`, `app/api/v1/webhooks/route.ts`
### github-recent__mbarbine__platphorm-sandbox

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 2
- Source paths: `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/(dashboard)/settings/webhooks/page.tsx`, `app/api/v1/events/route.ts`, `app/api/v1/webhooks/route.ts`
### github-recent__mbarbine__platphorm-shipments

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/api/shiprush-webhook.test.ts`, `app/api/webhooks/shiprush/route.ts`
### github-recent__mbarbine__platphorm-signs

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 0
- Source paths: `app/api/events/route.ts`, `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-stannp-api-wrapper

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 20
- Source paths: `app/api/postcards/[id]/events/route.ts`, `app/api/webhooks/stannp/route.ts`
### github-recent__mbarbine__platphorm-svg-factory

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 8
- Source paths: `app/api/webhooks/route.ts`
### github-recent__mbarbine__platphorm-vercel-atlas

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/sensor-data-validation.test.ts`, `app/api/ingest/webhook/route.ts`, `app/api/webhooks/alerts/route.ts`, `app/api/webhooks/test/route.ts`, `components/enrich-button.tsx`, `lib/config.ts`
### github-recent__mbarbine__platphorm-webhook-simulator

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `app/(dashboard)/dashboard/webhooks/page.tsx`, `app/api/v1/events/[id]/route.ts`, `app/api/v1/events/route.test.ts`, `app/api/v1/events/route.ts`, `app/api/v1/signatures/generate/route.ts`, `app/api/v1/signatures/verify/route.ts`, `app/api/webhooks/route.ts`, `lib/config/env.ts`, `package.json`
### github-recent__mbarbine__platphormnews-www-prod

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 24
- Source paths: `src/routes/api/v1/webhooks/+server.ts`, `src/routes/api/webhooks/+server.ts`
### github-recent__mbarbine__process-clone

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 3
- Source paths: `app/api/webhooks/email/route.ts`
### github-recent__mbarbine__reflux-site-webby

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 1
- Source paths: `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/zapier/route.ts`
### github-recent__mbarbine__scratchcraft

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `app/api/webhook/route.ts`
### github-recent__mbarbine__stannp-gpt-5-test

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 9
- Source paths: `app/api/stripe/webhook/route.ts`, `docs/STRIPE_SETUP.md`
### github-recent__mbarbine__stannp-nextjs-bp

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `app/api/stripe/webhook/route.ts`
### github-recent__mbarbine__two-doller-web

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 1
- Source paths: `app/api/webhooks/n8n/route.ts`, `app/api/webhooks/subscribe/route.ts`, `app/api/webhooks/zapier/route.ts`
### github-recent__mbarbine__vanagain-dot-com-prod

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `.env.example`, `app/api/webhooks/stripe/route.ts`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `get_stripe_webhook.js`, `lib/notifications.ts`, `tests/unit/stripe-webhook.test.ts`
### github-recent__mbarbine__vanlife-website

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 1
- Source paths: `app/api/events/route.ts`
### github-recent__ph3ar__mailthing-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `api/stripe/webhook.ts`, `api/webhooks/stripe.ts`, `next.config.mjs`
### github-recent__ph3ar__radio-backend

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 3
- Source paths: `app/api/events/route.ts`
### github-recent__ph3ar__stripe-subscription-starter

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `.env.local.example`, `app/api/webhooks/route.ts`

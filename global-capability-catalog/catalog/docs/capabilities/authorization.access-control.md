# authorization.access-control

Source evidence indicates roles, permissions, admin boundaries, or access-control checks.

## Metadata

- Name: Access Control
- Type: authorization
- Reuse score: 33
- Implementations: 33
- Risk summary: 29 risk findings across 33 implementations.

## Recommended Source

- github-recent__mbarbine__game-porting-service-webby: 56 - internal maturity, test evidence present, documentation/context present

## Implementations

### github-recent__mbarbine__autographed-bibles-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 4
- Source paths: `app/admin/add/page.tsx`, `app/admin/edit/[id]/page.tsx`, `app/admin/inventory/page.tsx`, `app/admin/orders/page.tsx`, `app/admin/page.tsx`, `app/admin/settings/page.tsx`, `components/admin-nav.tsx`, `lib/auth.ts`
### github-recent__mbarbine__barbineworldwide-2026-metahack

- Maturity: internal
- Confidence: low
- Reuse: pattern_only
- Risk count: 1
- Test count: 30
- Source paths: `.env.vercel.production`
### github-recent__mbarbine__beer-museum-manager-www

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 1
- Source paths: `app/admin/analytics/page.tsx`, `app/admin/api-settings/page.tsx`, `app/admin/beers/new/page.tsx`, `app/admin/beers/page.tsx`, `app/admin/collection/page.tsx`, `app/admin/dashboard/page.tsx`, `app/admin/education/page.tsx`, `app/admin/events/page.tsx`, `app/admin/exhibits/[id]/page.tsx`, `app/admin/exhibits/new/page.tsx`, `app/admin/exhibits/page.tsx`, `app/admin/login/page.tsx`, `app/admin/page.tsx`, `app/admin/settings/page.tsx`, `app/admin/users/page.tsx`, `app/admin/visitors/page.tsx`, `app/api/admin/analytics/route.ts`, `app/api/admin/beers/[id]/route.ts`, `app/api/admin/beers/route.ts`, `app/api/admin/exhibits/route.ts`, `app/api/admin/users/route.ts`, `app/museum-admin/dns-setup/page.tsx`, `app/museum-admin/events/page.tsx`, `app/museum-admin/exhibits/page.tsx`, `app/museum-admin/layout.tsx`, `app/museum-admin/page.tsx`, `components/admin/beer-filters.tsx`, `components/admin/beer-form.tsx`, `components/admin/beer-grid.tsx`, `components/admin/dashboard.tsx`
### github-recent__mbarbine__burrito-dealer-www

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 10
- Source paths: `app/admin/analytics/page.tsx`, `app/admin/burritos/page.tsx`, `app/admin/orders/page.tsx`, `app/admin/page.tsx`, `app/admin/plans/page.tsx`, `app/admin/users/page.tsx`, `app/api/dealers/onboard/route.ts`, `check-database.js`, `comprehensive-fix-test.js`, `fix-rls-policies.js`, `scripts/create-sample-orders.js`, `scripts/create-test-users.js`, `scripts/database-summary.js`, `scripts/enhanced-seed.js`, `scripts/explore-orders-schema.js`, `scripts/explore-schema.js`, `scripts/full-schema-explore.js`, `scripts/inspect-tables.js`, `scripts/seed-dealers.ts`, `scripts/seed-final.js`, `scripts/test-and-seed.js`, `scripts/test-order-creation.js`, `scripts/test-user-experience.js`
### github-recent__mbarbine__civic-engagement-platform-webby

- Maturity: internal
- Confidence: medium
- Reuse: pattern_only
- Risk count: 0
- Test count: 0
- Source paths: `app/admin/page.tsx`, `app/admin/tasks/page.tsx`, `app/admin/verify/expenditures/page.tsx`, `app/admin/verify/laws/page.tsx`, `app/admin/verify/meeting-minutes/page.tsx`, `components/admin/verification-list.tsx`
### github-recent__mbarbine__game-porting-service-webby

- Maturity: internal
- Confidence: medium
- Reuse: pattern_only
- Risk count: 0
- Test count: 3
- Source paths: `app/admin/messages/page.tsx`, `app/admin/page.tsx`, `app/admin/projects/[id]/page.tsx`, `app/admin/projects/page.tsx`, `app/admin/quotes/page.tsx`, `app/admin/settings/page.tsx`
### github-recent__mbarbine__ja4-sidecar

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 3
- Source paths: `.env`, `.env.production`, `ja4-cli/ja4-cli.js`
### github-recent__mbarbine__mailthing

- Maturity: prototype
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 0
- Source paths: `.env`, `src/config/env.ts`
### github-recent__mbarbine__mailthing-main

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 0
- Source paths: `utils/supabase/admin.ts`
### github-recent__mbarbine__nuclear-power-plant-webby-npaas

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 2
- Source paths: `app/api/fingerprint/label/route.ts`, `app/api/ja4/test/route.ts`
### github-recent__mbarbine__platphorm-bbs

- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only
- Risk count: 1
- Test count: 7
- Source paths: `scripts/migrate.mjs`, `scripts/setup-db.mjs`
### github-recent__mbarbine__platphorm-fingerprint-service

- Maturity: internal
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 3
- Source paths: `lib/supabase/server.ts`
### github-recent__mbarbine__platphorm-keys

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 7
- Source paths: `__tests__/lib/audit.test.ts`, `__tests__/lib/db.test.ts`, `__tests__/setup.ts`, `.env.example`, `lib/keys/audit.ts`, `lib/keys/db.ts`
### github-recent__mbarbine__platphorm-mcp

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 30
- Source paths: `lib/mcp/dynamo.ts`
### github-recent__mbarbine__platphorm-monitor

- Maturity: internal
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 30
- Source paths: `.env.example`, `lib/db.ts`
### github-recent__mbarbine__platphorm-news-alt-theme

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 0
- Source paths: `lib/supabase/service.ts`
### github-recent__mbarbine__platphorm-onboard

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 20
- Source paths: `.jules/sentinel.md`, `lib/db/client.ts`
### github-recent__mbarbine__platphorm-podcasts

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 2
- Test count: 30
- Source paths: `__tests__/supabase/admin.test.ts`, `.next.preverify-20260419-2027/server/chunks/[root-of-the-server]__08id4ch._.js`, `.next.preverify-20260419-2027/server/chunks/[root-of-the-server]__0b2eojm._.js`, `.next.preverify-20260419-2027/server/chunks/[root-of-the-server]__0b8og0f._.js`, `.next.preverify-20260419-2027/server/chunks/[root-of-the-server]__0cj3cyl._.js`, `.next.preverify-20260419-2027/server/chunks/[root-of-the-server]__0mhh1tg._.js`, `.next.preverify-20260419-2027/server/edge/chunks/[root-of-the-server]__033xcwl._.js`, `.next.preverify-20260419-2027/server/edge/chunks/[root-of-the-server]__07-4ew8._.js`, `.next.preverify-20260419-2027/server/edge/chunks/[root-of-the-server]__12nj_fr._.js`, `lib/podcast/archive.ts`, `lib/supabase/admin.ts`, `scripts/bulk-ingest.ts`
### github-recent__mbarbine__platphorm-politics

- Maturity: internal
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 3
- Source paths: `scripts/create-test-user.ts`
### github-recent__mbarbine__platphorm-real-estate-nad

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 3
- Source paths: `app/admin/analytics/page.tsx`, `components/admin/error-log-analytics.tsx`, `components/admin/performance-metrics.tsx`, `components/admin/session-analytics.tsx`, `components/admin/user-activity-feed.tsx`
### github-recent__mbarbine__platphorm-real-estate-property-evaluation

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 3
- Source paths: `app/api/db/migrate/route.ts`, `app/api/db/test/route.ts`
### github-recent__mbarbine__platphorm-sandbox

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 2
- Source paths: `__tests__/api.test.ts`, `lib/supabase/server.ts`, `scripts/migrate.mjs`, `scripts/setup-db.ts`
### github-recent__mbarbine__platphorm-stannp-api-wrapper

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 0
- Test count: 20
- Source paths: `app/admin/page.tsx`, `app/api/admin/save-stannp-key/route.ts`, `app/api/admin/stannp-status/route.ts`, `app/api/admin/test-stannp/route.ts`, `components/admin-link.tsx`
### github-recent__mbarbine__platphorm-vercel-atlas

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 0
- Test count: 30
- Source paths: `app/admin/page.tsx`, `app/api/admin/purge/route.ts`
### github-recent__mbarbine__platphormnews-www-prod

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 24
- Source paths: `src/lib/dynamodb.ts`, `src/routes/api/webhooks/+server.ts`
### github-recent__mbarbine__reflux-site-webby

- Maturity: internal
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 1
- Source paths: `app/api/etsy/sync/route.ts`, `app/api/spotify/authorize/route.ts`
### github-recent__mbarbine__scripts

- Maturity: deprecated
- Confidence: low
- Reuse: pattern_only
- Risk count: 0
- Test count: 30
- Source paths: `helm/HHLP/bandwidth/HelmCharts/terraform/.terraform/modules/eks-cluster/terraform-aws-eks-10.0.0/docs/iam-permissions.md`, `helm/HHLP/HelmCharts/terraform/.terraform/modules/eks-cluster/terraform-aws-eks-10.0.0/docs/iam-permissions.md`
### github-recent__mbarbine__vanagain-2025

- Maturity: internal
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 0
- Source paths: `lib/supabase.ts`
### github-recent__mbarbine__vanagain-dot-com-prod

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 2
- Test count: 30
- Source paths: `.env.example`, `app/admin/customers/page.tsx`, `app/admin/orders/page.tsx`, `app/admin/page.tsx`, `app/admin/products/page.tsx`, `DOCS/SCOPE-ENHANCEMENT-PLAN.md`, `scripts/import-shopify-blog-and-tags.mjs`, `scripts/shopify-add-product-tags.mjs`, `scripts/shopify-sync-navigation.mjs`, `scripts/shopify-upsert-pages.mjs`
### github-recent__mbarbine__vanagain-site

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 0
- Test count: 0
- Source paths: `admin/package.json`, `admin/public/assets/admin/plugins/ckeditor/plugins/scayt/README.md`, `admin/public/assets/admin/plugins/ckeditor/plugins/wsc/README.md`, `admin/public/assets/admin/plugins/ckeditor/README.md`, `admin/public/assets/admin/plugins/ckeditor/skins/moono/readme.md`, `admin/public/assets/admin/plugins/datatables/extensions/AutoFill/Readme.txt`, `admin/public/assets/admin/plugins/datatables/extensions/ColReorder/Readme.md`, `admin/public/assets/admin/plugins/datatables/extensions/ColVis/Readme.md`, `admin/public/assets/admin/plugins/datatables/extensions/FixedColumns/Readme.md`, `admin/public/assets/admin/plugins/datatables/extensions/FixedHeader/Readme.txt`, `admin/public/assets/admin/plugins/datatables/extensions/KeyTable/Readme.txt`, `admin/public/assets/admin/plugins/datatables/extensions/Responsive/Readme.md`, `admin/public/assets/admin/plugins/datatables/extensions/Scroller/Readme.txt`, `admin/public/assets/admin/plugins/datatables/extensions/TableTools/Readme.md`, `admin/public/assets/admin/plugins/input-mask/phone-codes/readme.txt`, `admin/public/assets/admin/plugins/Ionicons/readme.md`, `admin/public/assets/frontend/assets/plugins/animate/README.md`, `admin/public/assets/frontend/assets/plugins/bootstrap-daterangepicker/README.md`, `admin/public/assets/frontend/assets/plugins/bootstrap-datetimepicker/README.md`, `admin/public/assets/frontend/assets/plugins/bootstrap-hover-dropdown/README.md`, `admin/public/assets/frontend/assets/plugins/bootstrap-social/README.md`, `admin/public/assets/frontend/assets/plugins/bootstrap-timepicker/README.md`, `admin/public/assets/frontend/assets/plugins/counterup/README.md`, `admin/public/assets/frontend/assets/plugins/fancybox/README.md`, `admin/public/assets/frontend/assets/plugins/input-mask/phone-codes/readme.txt`, `admin/public/assets/frontend/assets/plugins/simple-line-icons/Readme.txt`, `admin/public/assets/frontend/assets/plugins/socicon/readme.html`, `admin/public/assets/frontend/assets/plugins/socicon/readme.md`, `admin/readme.md`, `admin/resources/assets/js/components/Example.vue`
### github-recent__ph3ar__mailthing-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 0
- Source paths: `api/auth/[...nextauth].ts`, `api/webhooks/stripe.ts`
### github-recent__ph3ar__radio-backend

- Maturity: internal
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 3
- Source paths: `app/api/events/route.ts`, `tests/api-events-delete.test.ts`
### github-recent__ph3ar__stripe-subscription-starter

- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only
- Risk count: 1
- Test count: 0
- Source paths: `.env.local.example`, `utils/supabase/admin.ts`

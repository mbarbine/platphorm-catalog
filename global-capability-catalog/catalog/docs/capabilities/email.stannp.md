# email.stannp

Repository has source-backed indicators for a Stannp integration.

## Metadata

- Name: Stannp Integration
- Type: email
- Reuse score: 23
- Implementations: 8
- Risk summary: 12 risk findings across 8 implementations.

## Recommended Source

- github-recent__mbarbine__stannp-gpt-5-test: 53 - internal maturity, test evidence present, documentation/context present

## Implementations

### github-recent__mbarbine__instant-snap-postcard

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `package.json`, `supabase/functions/send-postcard/index.ts`
### github-recent__mbarbine__mailthing

- Maturity: prototype
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `.env`, `package.json`
### github-recent__mbarbine__mailthing-api

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 0
- Source paths: `app/src/config/env.ts`, `app/src/controllers/addressesController.ts`, `app/src/controllers/lettersController.ts`, `app/src/controllers/mailItemsController.ts`, `package.json`
### github-recent__mbarbine__mailthing-client

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 0
- Source paths: `.env`, `package.json`, `src/env.d.ts`
### github-recent__mbarbine__mailthing-main

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `.archive/page.tsx`, `.archive/stannp/recipients.ts`, `.archive/StannpClientInit.tsx`, `.archive/StannpForms/Addresses.tsx`, `.archive/StannpForms/Campaigns.tsx`, `package.json`
### github-recent__mbarbine__platphorm-stannp-api-wrapper

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 20
- Source paths: `app/admin/page.tsx`, `app/api/admin/save-stannp-key/route.ts`, `app/api/admin/stannp-status/route.ts`, `lib/stannp-client.ts`, `lib/stannp.ts`, `package.json`
### github-recent__mbarbine__stannp-gpt-5-test

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 9
- Source paths: `app/api/mail/cancel/route.ts`, `app/api/stannp/route.ts`, `app/page.tsx`, `components/mail-management.tsx`, `components/request-builder.tsx`, `docs/FINAL_QA_CHECKLIST.md`, `docs/STANNP_API_SETUP.md`, `lib/stannp-api.ts`, `package.json`
### github-recent__ph3ar__mailthing-webby

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `api/stannp/route.ts`, `lib/stannp.ts`, `next.config.mjs`, `package.json`, `utils/stannpApi.ts`, `utils/stannpClient.ts`

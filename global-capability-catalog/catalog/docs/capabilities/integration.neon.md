# integration.neon

Repository has source-backed indicators for a Neon integration.

## Metadata

- Name: Neon Integration
- Type: integration
- Reuse score: 43
- Implementations: 6
- Risk summary: 8 risk findings across 6 implementations.

## Recommended Source

- github-recent__mbarbine__platphorm-spec-workbench: 62 - internal maturity, test evidence present, documentation/context present

## Implementations

### github-recent__mbarbine__platphorm-evals

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `lib/neon/client.ts`, `package.json`, `tests/integration/no-404-ui.test.tsx`, `tests/integration/regressions-ui-data-flow.test.tsx`
### github-recent__mbarbine__platphorm-mcp

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `lib/mcp/registry.ts`, `lib/mcp/tools/orchestrator.ts`, `package.json`
### github-recent__mbarbine__platphorm-real-estate-property-evaluation

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 3
- Source paths: `.env.local`, `app/api/db/test/route.ts`, `app/api/zillow/seed/route.ts`, `lib/db/neon.ts`, `lib/zillow-etl/data-loader.ts`, `package.json`, `scripts/seed-zillow-data.ts`
### github-recent__mbarbine__platphorm-spec-workbench

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 27
- Source paths: `__tests__/lib/generators/mcp.test.ts`, `app/api/v1/generate/mcp/route.ts`, `app/llms-full.txt/route.ts`, `lib/db/client.ts`, `lib/generators/mcp/deployment.ts`, `lib/generators/mcp/index.ts`, `lib/generators/mcp/persistence.ts`, `lib/generators/mcp/registry.ts`, `package.json`
### github-recent__mbarbine__stannp-gpt-5-test

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 9
- Source paths: `app/api/responses/[id]/route.ts`, `app/api/responses/route.ts`, `app/api/responses/stats/route.ts`, `app/api/users/route.ts`, `components/request-builder.tsx`, `components/stored-responses.tsx`, `components/user-selector.tsx`, `lib/database.ts`, `package.json`
### github-recent__mbarbine__vanagain-dot-com-prod

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `.env.example`, `package.json`

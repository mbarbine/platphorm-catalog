# integration.s3

Repository has source-backed indicators for a S3 integration.

## Metadata

- Name: S3 Integration
- Type: integration
- Reuse score: 27
- Implementations: 3
- Risk summary: 3 risk findings across 3 implementations.

## Recommended Source

- github-recent__mbarbine__vanagain-dot-com-prod: 44 - deprecated maturity, test evidence present, documentation/context present

## Implementations

### github-recent__mbarbine__aws-lab

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 0
- Source paths: `.env`, `backup/s3_backup.sh`, `docker-compose.yml`, `README.md`, `run_all.sh`, `terraform/lambda/package-lock.json`, `terraform/lambda/package.json`
### github-recent__mbarbine__tiktok-clone

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `lib/s3-upload.ts`, `package.json`, `pnpm-lock.yaml`
### github-recent__mbarbine__vanagain-dot-com-prod

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 0
- Test count: 30
- Source paths: `lib/assets.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `scripts/build_shopify_product_template.py`, `scripts/optimize-s3-products.mjs`

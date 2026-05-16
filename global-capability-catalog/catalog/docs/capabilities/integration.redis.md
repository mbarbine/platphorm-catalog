# integration.redis

Repository has source-backed indicators for a Redis integration.

## Metadata

- Name: Redis Integration
- Type: integration
- Reuse score: 33
- Implementations: 10
- Risk summary: 14 risk findings across 10 implementations.

## Recommended Source

- github-recent__mbarbine__platphorm-monitor: 56 - internal maturity, test evidence present, documentation/context present

## Implementations

### github-recent__mbarbine__ja4-sidecar

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 3
- Source paths: `.env`, `archive/dev-manage.sh`, `archive/DEVELOPMENT.md`, `archive/legacy-tests/comprehensive-test-report.json`, `archive/legacy-tests/exhaustive-test-report-1752531577800.json`, `archive/legacy-tests/exhaustive-test-report-1752532327071.json`, `archive/legacy-tests/master-test-report-1752531756255.json`, `archive/legacy-tests/test-report.json`, `archive/manage-legacy.sh`, `docker-compose.yml`, `ja4-alerts/package.json`, `ja4-cli/ja4-enhanced.js`, `ja4-cli/package.json`, `ja4-sniffer/email-sniffer.js`, `ja4-sniffer/package-lock.json`, `ja4-sniffer/package.json`, `scripts/lib/help.sh`, `scripts/tests/package.json`
### github-recent__mbarbine__platphorm-bbs

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 7
- Source paths: `lib/redis.test.ts`, `lib/redis.ts`, `package.json`, `pnpm-lock.yaml`
### github-recent__mbarbine__platphorm-codex

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 10
- Source paths: `app/api/health/route.ts`, `package.json`
### github-recent__mbarbine__platphorm-mcp

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `docs/license.md`, `lib/mcp/redis.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `scripts/seed-mcp-data.js`, `scripts/seed-sites-registry.js`, `tests/__tests__/redis/config.test.ts`
### github-recent__mbarbine__platphorm-monitor

- Maturity: internal
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `package.json`, `pnpm-lock.yaml`, `proxy.ts`
### github-recent__mbarbine__platphorm-openclaw

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 3
- Test count: 30
- Source paths: `.env.docker`, `lib/cache/index.ts`, `lib/redis.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `tests/lib/cache.test.ts`, `tests/lib/cache/index.test.ts`, `tests/lib/redis.test.ts`
### github-recent__mbarbine__platphorm-quake

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `__tests__/e2e/multiplayer.spec.ts`, `lib/multiplayer/session-store.ts`, `lib/platform/metadata.ts`, `package.json`, `pnpm-lock.yaml`, `README.md`
### github-recent__mbarbine__platphorm-trace

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 30
- Source paths: `lib/redis.ts`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `tests/lib/redis.test.ts`
### github-recent__mbarbine__vanagain-dot-com-prod

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 2
- Test count: 30
- Source paths: `.env.example`, `.github/copilot-instructions.md`, `app/actions/password-reset.ts`, `lib/auth.ts`, `lib/products.ts`, `lib/redis.ts`, `next.config.ts`, `package-lock.json`, `package.json`, `tests/unit/redis-connection.test.ts`, `tests/unit/redis-singleton.test.ts`, `tests/unit/redis.test.ts`
### github-recent__mbarbine__wildduck

- Maturity: deprecated
- Confidence: medium
- Reuse: partial
- Risk count: 1
- Test count: 0
- Source paths: `.env`, `.env.ja4`, `archive/duplicate-configs/haraka/config/wildduck.yaml`, `archive/duplicate-configs/webmail/config/default.toml`, `archive/duplicate-configs/wildduck/config/default.toml`, `archive/duplicate-configs/zone-mta/config/default.toml`, `archive/webmail-configs/config.toml`, `archive/webmail-configs/email2letter-config.toml`, `config/ja4-plus/ja4-service.yml`, `docs/ja4-plus.md`, `docs/management.md`, `docs/networking.md`, `scripts/install-ja4-plus.sh`, `scripts/ja4-plus/monitor-ja4.sh`, `scripts/ja4-plus/package.json`

# Global Capability Catalog

Machine-readable reusable software memory for repositories under:

`/Users/bwm.barbinewarnermichael/Documents/github/repositories`

The catalog uses deterministic scanners for hard facts and Codex for interpretation, classification, normalization, and repair. V1 is file-based: JSON Schema, scan artifacts, repository manifests, aggregate indexes, and generated Markdown documentation.

## Quick Start

```bash
npm install
npm run catalog:subset -- --limit 3 --verbose
npm run catalog:all -- --resume --verbose
```

Generated artifacts:

- `catalog/scans/<repo-id>.scan.json`
- `catalog/repositories/<repo-id>.catalog.json`
- `catalog/generated/repos.json`
- `catalog/generated/capabilities.json`
- `catalog/generated/capabilities.ndjson`
- `catalog/generated/graph.json`
- `catalog/generated/search-index.json`
- `catalog/generated/best-implementations.json`
- `catalog/docs/index.md`
- `catalog/docs/repositories/<repo-id>.md`
- `catalog/docs/capabilities/<capability-id>.md`

## Design

Deterministic scripts may read files, parse manifests, inspect route filenames, inspect schemas, and scan docs. They must not run target repository scripts, install target dependencies, execute target code, or call external services unless explicitly configured.

Codex analysis can be enabled with:

```bash
CATALOG_USE_CODEX=1 npm run catalog:all -- --resume
```

Without `CATALOG_USE_CODEX=1`, the orchestrator produces conservative evidence-bound bootstrap manifests. Those manifests are schema-valid and useful for indexing, but intentionally use lower confidence when source interpretation is incomplete.

Local `llms.txt`, `llms-full.txt`, and `llms-index.json` files are scanned and treated as high-signal context. Optional live LLMs-file fetches should be added only behind an explicit trusted-domain flag.

## Validation

```bash
npm run validate:all
npm test
```

Validation fails if a catalog manifest has missing source paths, nonexistent evidence paths, invalid capability IDs, invalid confidence values, invalid reuse metadata, schema errors, or committed secret-like values.

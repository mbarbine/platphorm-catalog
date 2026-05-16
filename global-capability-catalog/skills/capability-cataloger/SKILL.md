---
name: capability-cataloger
description: Use this skill when analyzing a software repository to produce or repair a machine-readable reusable capability catalog manifest.
---
# Capability Cataloger Skill

Mission:
Analyze a repository and produce a schema-valid catalog manifest useful to humans and machines.

Required process:
1. Read the repository scan artifact.
2. Inspect high-signal source files only.
3. Treat local `llms.txt`, `llms-full.txt`, and `llms-index.json` as high-signal context when present.
4. Identify repository purpose.
5. Extract capabilities.
6. Link every capability to source paths.
7. Identify APIs, UI components, data models, integrations, tests, and risks.
8. Assign reuse metadata.
9. Produce JSON or YAML that conforms to the catalog schema.
10. Do not invent unsupported facts.

Capability ID format:
Use `<domain>.<specific-capability>`.

Examples:
- `auth.rbac`
- `auth.magic-link-login`
- `data.csv-import`
- `data.pdf-extraction`
- `ui.admin-table`
- `billing.stripe-webhooks`
- `observability.audit-log`
- `agent.tool-registry`
- `security.rate-limiting`

Confidence rules:
- Use `confidence: high` only when source evidence is clear.
- Use `confidence: medium` when evidence is strong but incomplete.
- Use `confidence: low` when the capability is inferred from naming, README content, or partial code.

Quality rule:
A reusable capability must identify:
- what problem it solves
- where implementation lives
- what inputs and outputs it has
- what data it reads or writes
- what dependencies it needs
- what would need to change to reuse it

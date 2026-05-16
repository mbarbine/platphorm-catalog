Update the global reusable capability catalog.

Process:
1. Discover repositories under the configured source root.
2. Generate deterministic scan artifacts.
3. Analyze or repair repository manifests using schema-constrained Codex output where configured.
4. Validate all manifests and generated indexes.
5. Build aggregate capability indexes, graph JSON, search index, best implementation rankings, and docs.

Rules:
- Do not execute target repository code.
- Do not invent hard facts.
- Treat local LLMs files as context, not as proof without source evidence.
- Redact secret-like values.
- Fail on schema or evidence-path validation errors.

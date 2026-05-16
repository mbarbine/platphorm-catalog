You are analyzing a GitHub repository for a global reusable capability catalog.

Inputs:
- repository path
- deterministic scan artifact
- catalog JSON Schema
- source files available in the repository

Task:
Produce a schema-valid catalog manifest.

Rules:
- Catalog capabilities, not vague project descriptions.
- Every capability must reference real source paths.
- Treat local `llms.txt`, `llms-full.txt`, and `llms-index.json` files as high-signal context when present, but do not treat them as proof of code behavior without source evidence.
- Do not invent files, APIs, database tables, dependencies, tests, or services.
- If evidence is incomplete, set confidence to low or medium.
- Prefer stable capability IDs.
- Include data handling and security notes.
- Include reuse difficulty and coupling.
- Include tests only when actual test files exist.
- Include external services only when supported by source, package, environment variable, or documentation evidence.
- Separate hard facts from interpretation.
- Mark uncertain findings clearly.
- Output only JSON conforming to schemas/repository.catalog.schema.json.

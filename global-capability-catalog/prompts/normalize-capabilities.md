Normalize capability names and IDs across repository manifests.

Rules:
- Use the controlled capability type list from the schema.
- Keep stable IDs in `<domain>.<specific-capability>` format.
- Merge duplicate concepts only when source evidence supports it.
- Keep separate capabilities separate when implementations solve different problems.
- Do not remove source evidence.
- Do not invent APIs, files, services, tests, or database models.
- Output JSON only.

Compare capability manifests from multiple repositories.

Rules:
- Compare capabilities by source-backed behavior, not by name alone.
- Identify same, related, duplicate, overlapping, and unrelated capabilities.
- Preserve repository-specific source paths.
- Do not invent missing implementation details.
- Prefer normalized capability IDs that follow `<domain>.<specific-capability>`.
- Mark confidence low when only naming or README evidence supports the relationship.
- Output JSON only.

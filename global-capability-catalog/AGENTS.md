# Global Capability Catalog Instructions

You are helping maintain a reusable software capability catalog across many GitHub repositories.

Goals:
- Extract reusable capabilities from source repositories.
- Produce schema-valid catalog manifests.
- Build a trustworthy global capability index.

Cataloging rules:
- Catalog capabilities, not just repositories.
- Every capability must include real source paths.
- Do not invent files, APIs, tables, services, tests, or dependencies.
- Prefer precise, stable capability IDs.
- Mark uncertain findings as confidence: low.
- Separate hard facts from interpretation.
- Include reuse notes, coupling, risks, and extraction difficulty.
- Flag sensitive data and security-relevant behavior.
- Output must conform to provided JSON Schema.

Capability quality rules:
A capability is reusable only if there is enough source evidence to identify:
- what problem it solves
- where implementation lives
- what inputs and outputs it has
- what data it reads or writes
- what dependencies it needs
- what would need to change to reuse it

Evidence rules:
- Deterministic scanners collect hard facts.
- Codex provides judgment, classification, normalization, and repair.
- Codex must not invent hard facts.
- Local `llms.txt`, `llms-full.txt`, and `llms-index.json` files are high-signal repository context when present.
- Live network fetches for LLMs context must be explicit and restricted to trusted domains.

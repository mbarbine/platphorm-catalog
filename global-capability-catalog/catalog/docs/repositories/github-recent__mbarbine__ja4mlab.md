# mbarbine__ja4mlab

This is the cleaned reviewer package for the JA4M proposal.

## Metadata

- ID: `github-recent__mbarbine__ja4mlab`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__ja4mlab`
- Remote: `git@github.com:mbarbine/ja4mlab.git`
- Primary language: JSON
- Frameworks: none detected
- Maturity: internal
- Confidence: high

## Capabilities

### AI Chat or Generation

- ID: `ai.chat-or-generation`
- Type: ai-model
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `docs/V7_PROMPT_PACK.md`
- Tests: 10
- LLMs context: none detected

Source evidence indicates AI model, chat, completion, prompt, or generation behavior.

### Metrics and Reporting

- ID: `analytics.metrics-reporting`
- Type: analytics
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `docs/REPORTING.md`
- Tests: 10
- LLMs context: none detected

Source evidence indicates analytics, metrics, reports, scores, or aggregation behavior.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `docs/ARCHITECTURE.md`, `docs/CAPTURE_BUNDLE_CONTRACT.md`, `docs/CAPTURE.md`, `docs/DISCOVERABILITY_CONTRACT.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/INSTALL.md`, `docs/JA4M_LAB_V7_AGENT_READY_PLAN.md`, `docs/ja4m_mcp_example_v2_README.md`, `docs/JA4M_PCAP_TESTING_GUIDANCE.md`, `docs/NETWORK_DISCOVERY.md`, `docs/OPENCLAW_MODEL.md`, `docs/OPENDOCS_MODEL.md`, `docs/README.md`, `docs/REPORTING.md`, `docs/SCENARIO_MATRIX.md`, `docs/SCENARIOS.md`, `docs/SERVICE_CONTRACTS.md`, `docs/V7_MISSING_FROM_THIS_REPO.md`, `docs/V7_PROMPT_PACK.md`
- Tests: 10
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `packages/shared-fingerprint/package.json`, `packages/shared-http/package.json`, `packages/shared-mcp/package.json`, `packages/shared-scenarios/package.json`
- Tests: 10
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `compose/docker-compose.yml`, `services/api-broker/Dockerfile`, `services/openclaw-runtime/Dockerfile`
- Tests: 10
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Vercel Integration

- ID: `integration.vercel`
- Type: integration
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `packages/shared-fingerprint/package.json`, `packages/shared-http/package.json`, `packages/shared-http/src/version.ts`, `packages/shared-mcp/package.json`, `packages/shared-scenarios/package.json`
- Tests: 10
- LLMs context: none detected

Repository has source-backed indicators for a Vercel integration.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `packages/shared-http/src/health.ts`
- Tests: 10
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `packages/shared-http/src/health.ts`, `packages/shared-http/src/version.ts`, `services/api-broker/server.mjs`
- Tests: 10
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `tests/contract/test_network_graph.py`, `tests/contract/test_scenarios_manifest.py`, `tests/contract/test_service_route_standard.py`, `tests/contract/test_v7_agent_ready_plan.py`, `tests/integration/test_capture_bundle.py`, `tests/integration/test_full_trace_smoke.py`, `tests/integration/test_openclaw_xai_smoke.py`, `tests/integration/test_repo_docs.py`, `tests/unit/test_compose.py`, `tests/unit/test_shared_package_layout.py`
- Tests: 10
- LLMs context: none detected

Repository includes automated test files.

## Repository Risks

- None recorded.

## Gaps

- CI workflows not detected
- LLMs context files not detected
- framework route files not detected

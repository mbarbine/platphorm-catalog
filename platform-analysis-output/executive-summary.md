# Platform Component Inventory Summary

Repositories scanned: **207**
Component records: **27899**
Duplicate groups: **1550**
Shared library candidates: **3547**
AI scaffold opportunities: **198**

## Executive findings

### Repeated components justify shared packages

Priority: **high**

173 high-priority shared package candidates were found across UI, backend, logic, process, automation, style, AI, and platform categories.

Recommended action: Create shared packages for UI, frontend, backend, logic, process, automation, style, AI, discovery, observability, security, and integrations.

Evidence: `@platphorm/process:readme, @platphorm/observability:package, @platphorm/ui:button, @platphorm/logic:utils, @platphorm/ui:card, @platphorm/backend:route, @platphorm/frontend:theme-provider, @platphorm/ui:input, @platphorm/ui:badge, @platphorm/ui:select, @platphorm/ui:label, @platphorm/ui:textarea, @platphorm/ui:tooltip, @platphorm/ui:dropdown-menu, @platphorm/ui:tabs, @platphorm/ui:separator, @platphorm/ui:alert, @platphorm/ui:toast, @platphorm/ui:sheet, @platphorm/ui:skeleton`

### Logic components should be extracted separately from UI and backend

Priority: **high**

2771 logic components were identified. These include validators, parsers, transformers, stores, scoring functions, schemas, and domain utilities.

Recommended action: Create @platphorm/logic and move repeatable pure or near-pure functions there before extracting larger backend or frontend modules.

Evidence: `logic category inventory`

### Process components are reusable operational assets

Priority: **medium**

2167 process components were identified, including docs, specs, runbooks, plans, checklists, and operational guides.

Recommended action: Create @platphorm/process or a process catalog for repeatable SOPs, runbooks, checklists, migration plans, deployment guides, and acceptance criteria.

Evidence: `process category inventory`

### Automation components can become reusable delivery infrastructure

Priority: **high**

2187 automation components were identified, including scripts, GitHub workflows, Docker files, deployment configs, and cron-related assets.

Recommended action: Create @platphorm/automation for reusable workflow templates, script patterns, deployment jobs, validation jobs, and operational automations.

Evidence: `automation category inventory`

### AI scaffolding opportunities exist across active feature surfaces

Priority: **high**

17 repositories have high-priority AI scaffold opportunities where AI could improve productivity, triage, summarization, search, or workflow guidance.

Recommended action: Create @platphorm/ai with provider-neutral adapters, prompt templates, eval fixtures, redaction, trace-linked spans, and degraded states.

Evidence: `ph3ar__newdittyswag-commerce, ph3ar__DeskThing-FortuneCookie, mbarbine__tiktok-clone, mbarbine__starphone-fork-webby, mbarbine__scratchcraft, mbarbine__robot-clothing-marketplace, mbarbine__platphorm-news-alt-theme, mbarbine__multiplayer-puzzle-game, mbarbine__microwave-sticker-webby, mbarbine__mermaid-community-platform, mbarbine__global-anti-globalist-club-webby, mbarbine__gamer, mbarbine__front-runners-webby, mbarbine__evernote-js, mbarbine__drone-reel-webby, mbarbine__dogstar-cybernetics-webby, mbarbine__FlaskFlow-www`

### Duplicate components create extraction opportunities

Priority: **high**

1550 duplicate groups were identified across repositories.

Recommended action: Prioritize duplicate groups with the highest repo counts, then extract stable canonical versions into shared packages.

Evidence: `readme, page, layout, globals, pnpm-lock, package, button, utils, card, route, theme-provider, input, badge, select, label, textarea, tooltip, dropdown-menu, tabs, sidebar`

### Component inventory is now AI-readable and manager-readable

Priority: **medium**

The scan found 27899 component records across 207 repositories.

Recommended action: Use the generated CSVs for spreadsheet review and the JSON/Markdown outputs for AI analysis and agent prompts.

Evidence: `inventory.csv, inventory.json, executive-summary.md`

## Primary component categories

- **backend**: 5454
- **ui**: 5289
- **frontend**: 4731
- **logic**: 2771
- **automation**: 2187
- **process**: 2167
- **observability**: 2162
- **style**: 1520
- **security**: 859
- **ai**: 429
- **integration**: 244
- **discovery**: 86

## Top component kinds

- **ui-primitive**: 5367
- **api-route**: 3653
- **feature-ui**: 2558
- **observability-module**: 2146
- **business-logic**: 2048
- **process-document**: 2032
- **backend-module**: 1615
- **page**: 1403
- **script**: 1332
- **stylesheet**: 1329
- **security-module**: 803
- **automation-config**: 589
- **frontend-feature**: 375
- **utility**: 302
- **schema-validation**: 242
- **layout**: 230
- **integration-module**: 176
- **ui-provider**: 166
- **ai-integration**: 155
- **agent**: 150
- **design-token**: 150
- **deployment-automation**: 92
- **container-automation**: 90
- **state-store**: 82
- **middleware**: 70
- **roadmap**: 63
- **discovery-artifact**: 59
- **specification**: 56
- **mcp**: 52
- **parser**: 47

## Top capabilities

- **observability**: 11759
- **auth-and-keys**: 2740
- **ai**: 2225
- **editor**: 1751
- **general**: 1651
- **commerce**: 1133
- **discovery**: 1100
- **analytics**: 950
- **testing**: 845
- **seo-and-metadata**: 653
- **workflow**: 600
- **shipping**: 550
- **mcp**: 492
- **design-system**: 379
- **logic**: 294
- **i18n**: 289
- **security**: 150
- **deployment**: 111
- **game**: 100
- **media**: 87
- **finance**: 26
- **process**: 14

## Highest priority shared package candidates

- **readme** → `@platphorm/process` (process/process-document, 165 repos, priority: high)
- **package** → `@platphorm/observability` (observability/observability-module, 138 repos, priority: high)
- **button** → `@platphorm/ui` (ui/ui-primitive, 136 repos, priority: high)
- **utils** → `@platphorm/logic` (logic/utility, 135 repos, priority: high)
- **card** → `@platphorm/ui` (ui/ui-primitive, 126 repos, priority: high)
- **route** → `@platphorm/backend` (backend/api-route, 125 repos, priority: high)
- **theme-provider** → `@platphorm/frontend` (frontend/ui-provider, 124 repos, priority: high)
- **input** → `@platphorm/ui` (ui/ui-primitive, 120 repos, priority: high)
- **badge** → `@platphorm/ui` (ui/ui-primitive, 115 repos, priority: high)
- **select** → `@platphorm/ui` (ui/ui-primitive, 103 repos, priority: high)
- **label** → `@platphorm/ui` (ui/ui-primitive, 103 repos, priority: high)
- **textarea** → `@platphorm/ui` (ui/ui-primitive, 103 repos, priority: high)
- **tooltip** → `@platphorm/ui` (ui/ui-primitive, 101 repos, priority: high)
- **dropdown-menu** → `@platphorm/ui` (ui/ui-primitive, 96 repos, priority: high)
- **tabs** → `@platphorm/ui` (ui/ui-primitive, 95 repos, priority: high)
- **separator** → `@platphorm/ui` (ui/ui-primitive, 94 repos, priority: high)
- **alert** → `@platphorm/ui` (ui/ui-primitive, 92 repos, priority: high)
- **toast** → `@platphorm/ui` (ui/ui-primitive, 92 repos, priority: high)
- **sheet** → `@platphorm/ui` (ui/ui-primitive, 92 repos, priority: high)
- **skeleton** → `@platphorm/ui` (ui/ui-primitive, 91 repos, priority: high)
- **dialog** → `@platphorm/ui` (ui/ui-primitive, 90 repos, priority: high)
- **avatar** → `@platphorm/ui` (ui/ui-primitive, 88 repos, priority: high)
- **progress** → `@platphorm/ui` (ui/ui-primitive, 87 repos, priority: high)
- **switch** → `@platphorm/ui` (ui/ui-primitive, 87 repos, priority: high)
- **table** → `@platphorm/ui` (ui/ui-primitive, 87 repos, priority: high)
- **accordion** → `@platphorm/ui` (ui/ui-primitive, 86 repos, priority: high)
- **checkbox** → `@platphorm/ui` (ui/ui-primitive, 86 repos, priority: high)
- **slider** → `@platphorm/ui` (ui/ui-primitive, 85 repos, priority: high)
- **toaster** → `@platphorm/ui` (ui/ui-primitive, 85 repos, priority: high)
- **chart** → `@platphorm/ui` (ui/ui-primitive, 84 repos, priority: high)
- **breadcrumb** → `@platphorm/ui` (ui/ui-primitive, 84 repos, priority: high)
- **alert-dialog** → `@platphorm/ui` (ui/ui-primitive, 84 repos, priority: high)
- **popover** → `@platphorm/ui` (ui/ui-primitive, 83 repos, priority: high)
- **carousel** → `@platphorm/ui` (ui/ui-primitive, 83 repos, priority: high)
- **scroll-area** → `@platphorm/ui` (ui/ui-primitive, 82 repos, priority: high)
- **sonner** → `@platphorm/ui` (ui/ui-primitive, 82 repos, priority: high)
- **navigation-menu** → `@platphorm/ui` (ui/ui-primitive, 81 repos, priority: high)
- **radio-group** → `@platphorm/ui` (ui/ui-primitive, 81 repos, priority: high)
- **toggle** → `@platphorm/ui` (ui/ui-primitive, 81 repos, priority: high)
- **form** → `@platphorm/ui` (ui/ui-primitive, 81 repos, priority: high)
- **calendar** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)
- **aspect-ratio** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)
- **pagination** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)
- **input-otp** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)
- **hover-card** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)
- **resizable** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)
- **drawer** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)
- **command** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)
- **toggle-group** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)
- **menubar** → `@platphorm/ui` (ui/ui-primitive, 80 repos, priority: high)

## AI scaffold opportunities

- **ph3ar__newdittyswag-commerce** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **ph3ar__DeskThing-FortuneCookie** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection
- **mbarbine__tiktok-clone** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__starphone-fork-webby** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__scratchcraft** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__robot-clothing-marketplace** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__platphorm-news-alt-theme** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__multiplayer-puzzle-game** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__microwave-sticker-webby** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__mermaid-community-platform** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__global-anti-globalist-club-webby** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI documentation Q&A, summarization, indexing, and change explanation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives
- **mbarbine__gamer** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__front-runners-webby** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI documentation Q&A, summarization, indexing, and change explanation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives
- **mbarbine__evernote-js** (high): AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection; Semantic search, query expansion, ranking, and recommendations
- **mbarbine__drone-reel-webby** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI documentation Q&A, summarization, indexing, and change explanation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives
- **mbarbine__dogstar-cybernetics-webby** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__FlaskFlow-www** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection
- **process-co__npm-element-types** (enhance-existing): AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection; Shipment exception analysis, rate explanation, and workflow recommendations
- **process-co__npm-element-dev-server** (enhance-existing): AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection
- **process-co__json-graph** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **ph3ar__www_js_terminal** (enhance-existing): AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection
- **ph3ar__stripe-subscription-starter** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **ph3ar__renegade-bbs-docker** (enhance-existing): AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Shipment exception analysis, rate explanation, and workflow recommendations
- **ph3ar__radio-backend** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI documentation Q&A, summarization, indexing, and change explanation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives
- **ph3ar__platphorm-admin-dashboard** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **ph3ar__ph3ar_radio_backend** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **ph3ar__ph3ar-docs-enhanced-labs** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI documentation Q&A, summarization, indexing, and change explanation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives
- **ph3ar__mailthing-webby** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **ph3ar__js_mongo_app_boilerplate** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection
- **ph3ar__hope-auto-checkin** (enhance-existing): AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection
- **mbarbine__zornixOS** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__xsociety** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI assisted writing, cleanup, conversion, summarization, and validation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives
- **mbarbine__www-demo-biofeedback-app-development** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__wildduck** (enhance-existing): AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI documentation Q&A, summarization, indexing, and change explanation; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection
- **mbarbine__vanlife-website** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI documentation Q&A, summarization, indexing, and change explanation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives
- **mbarbine__vanagon-website** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__vanagain-site** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI assisted writing, cleanup, conversion, summarization, and validation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives
- **mbarbine__vanagain-dot-com-prod** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI documentation Q&A, summarization, indexing, and change explanation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives
- **mbarbine__vanagain-2025** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__v0-2025-year-in-review** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs

## Largest repositories by inventory count

- **mbarbine__Scripts**: 4770
- **mbarbine__vanagain-site**: 957
- **mbarbine__platphorm-podcasts**: 828
- **mbarbine__vanagain-dot-com-prod**: 544
- **mbarbine__xsociety**: 499
- **mbarbine__ja4mlab**: 405
- **mbarbine__platphorm-insights**: 399
- **mbarbine__platphorm-opencontent**: 349
- **mbarbine__platphorm-trace**: 347
- **mbarbine__platphorm-mcp**: 339
- **mbarbine__platphorm-quake**: 303
- **mbarbine__zornixOS**: 302
- **mbarbine__platphorm-vercel-atlas**: 274
- **mbarbine__platphorm-opendocs**: 271
- **mbarbine__platphorm-openclaw**: 269
- **mbarbine__platphorm-jules**: 264
- **mbarbine__process-clone**: 254
- **mbarbine__platphorm-desa**: 251
- **mbarbine__platphorm-monitor**: 251
- **mbarbine__platphorm-bbs**: 248
- **mbarbine__calendar-app-webby**: 247
- **mbarbine__platphorm-content-showback-dashboard**: 235
- **mbarbine__platphorm-kanban**: 227
- **mbarbine__platphorm-codex**: 226
- **mbarbine__platphorm-spec-workbench**: 226
- **mbarbine__platphorm-shipments**: 225
- **mbarbine__platphorm-layout**: 218
- **mbarbine__platphorm-polymaths**: 218
- **mbarbine__onboard-platphorm-boilerplate-repo**: 213
- **mbarbine__desert-bus**: 212
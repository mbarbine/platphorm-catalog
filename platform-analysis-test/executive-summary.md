# Platform Component Inventory Summary

Repositories scanned: **5**
Component records: **200**
Duplicate groups: **68**
Shared library candidates: **73**
AI scaffold opportunities: **5**

## Executive findings

### Logic components should be extracted separately from UI and backend

Priority: **high**

3 logic components were identified. These include validators, parsers, transformers, stores, scoring functions, schemas, and domain utilities.

Recommended action: Create @platphorm/logic and move repeatable pure or near-pure functions there before extracting larger backend or frontend modules.

Evidence: `logic category inventory`

### Process components are reusable operational assets

Priority: **medium**

16 process components were identified, including docs, specs, runbooks, plans, checklists, and operational guides.

Recommended action: Create @platphorm/process or a process catalog for repeatable SOPs, runbooks, checklists, migration plans, deployment guides, and acceptance criteria.

Evidence: `process category inventory`

### Automation components can become reusable delivery infrastructure

Priority: **high**

8 automation components were identified, including scripts, GitHub workflows, Docker files, deployment configs, and cron-related assets.

Recommended action: Create @platphorm/automation for reusable workflow templates, script patterns, deployment jobs, validation jobs, and operational automations.

Evidence: `automation category inventory`

### AI scaffolding opportunities exist across active feature surfaces

Priority: **high**

1 repositories have high-priority AI scaffold opportunities where AI could improve productivity, triage, summarization, search, or workflow guidance.

Recommended action: Create @platphorm/ai with provider-neutral adapters, prompt templates, eval fixtures, redaction, trace-linked spans, and degraded states.

Evidence: `mbarbine__FlaskFlow-www`

### Duplicate components create extraction opportunities

Priority: **high**

68 duplicate groups were identified across repositories.

Recommended action: Prioritize duplicate groups with the highest repo counts, then extract stable canonical versions into shared packages.

Evidence: `readme, globals, pnpm-lock, package, layout, page, theme-provider, card, badge, button, utils, route, aspect-ratio, alert-dialog, use-mobile, pagination, tabs, button-group, slider, input-group`

### Component inventory is now AI-readable and manager-readable

Priority: **medium**

The scan found 200 component records across 5 repositories.

Recommended action: Use the generated CSVs for spreadsheet review and the JSON/Markdown outputs for AI analysis and agent prompts.

Evidence: `inventory.csv, inventory.json, executive-summary.md`

## Primary component categories

- **ui**: 117
- **frontend**: 41
- **process**: 16
- **automation**: 8
- **observability**: 6
- **style**: 6
- **logic**: 3
- **backend**: 3

## Top component kinds

- **ui-primitive**: 117
- **feature-ui**: 32
- **process-document**: 15
- **script**: 8
- **observability-module**: 6
- **stylesheet**: 6
- **layout**: 3
- **page**: 3
- **ui-provider**: 3
- **utility**: 3
- **api-route**: 3
- **roadmap**: 1

## Top capabilities

- **observability**: 76
- **editor**: 36
- **auth-and-keys**: 23
- **commerce**: 12
- **general**: 12
- **analytics**: 7
- **ai**: 6
- **design-system**: 6
- **workflow**: 6
- **shipping**: 5
- **testing**: 4
- **logic**: 4
- **media**: 2
- **discovery**: 1

## Highest priority shared package candidates

- **readme** → `@platphorm/process` (process/process-document, 4 repos, priority: medium)
- **package** → `@platphorm/observability` (observability/observability-module, 3 repos, priority: medium)
- **layout** → `@platphorm/frontend` (frontend/layout, 3 repos, priority: medium)
- **theme-provider** → `@platphorm/frontend` (frontend/ui-provider, 3 repos, priority: medium)
- **card** → `@platphorm/ui` (ui/ui-primitive, 3 repos, priority: medium)
- **badge** → `@platphorm/ui` (ui/ui-primitive, 3 repos, priority: medium)
- **button** → `@platphorm/ui` (ui/ui-primitive, 3 repos, priority: medium)
- **utils** → `@platphorm/logic` (logic/utility, 3 repos, priority: medium)
- **crowstrike-auditor-v3** → `@platphorm/automation` (automation/script, 1 repos, priority: medium)
- **crowdstrike-auditor-v2** → `@platphorm/automation` (automation/script, 1 repos, priority: medium)
- **o365-auditor** → `@platphorm/automation` (automation/script, 1 repos, priority: medium)
- **crowdstrike-auditor** → `@platphorm/automation` (automation/script, 1 repos, priority: medium)
- **fortisase-auditor** → `@platphorm/automation` (automation/script, 1 repos, priority: medium)
- **ninja-one-audit** → `@platphorm/automation` (automation/script, 1 repos, priority: medium)
- **grab-xml** → `@platphorm/automation` (automation/script, 1 repos, priority: medium)
- **grab-xml-tests** → `@platphorm/automation` (automation/script, 1 repos, priority: medium)
- **roadmap** → `@platphorm/process` (process/roadmap, 1 repos, priority: medium)
- **route** → `@platphorm/backend` (backend/api-route, 2 repos, priority: low)
- **aspect-ratio** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **alert-dialog** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **use-mobile** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **pagination** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **tabs** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **button-group** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **slider** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **input-group** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **popover** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **progress** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **toaster** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **input-otp** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **chart** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **hover-card** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **sheet** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **field** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **scroll-area** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **resizable** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **label** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **sonner** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **navigation-menu** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **accordion** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **drawer** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **empty** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **tooltip** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **alert** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **use-toast** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **switch** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **calendar** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **breadcrumb** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **radio-group** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)
- **command** → `@platphorm/ui` (ui/ui-primitive, 2 repos, priority: low)

## AI scaffold opportunities

- **mbarbine__FlaskFlow-www** (high): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection
- **mbarbine__Joshs-magnets-landing-page** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs
- **mbarbine__JenkinsDB** (enhance-existing): AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Job matching, prioritization, summarization, and workflow assistance; Security signal explanation, trust scoring, bot analysis, and anomaly detection; Workflow recommendation, next best action, automation planning, and human approval flows
- **mbarbine__DCF-Audit-Scripts** (enhance-existing): AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI process assistant for checklists, SOPs, runbooks, and operational handoffs; Security signal explanation, trust scoring, bot analysis, and anomaly detection
- **mbarbine__2025-year-in-review-webby** (enhance-existing): AI assisted editing, outline generation, summarization, and transformation; AI automation planner, script explanation, runbook synthesis, and approval flow generation; AI generated insights, anomaly detection, summaries, and next actions; AI log triage, clustering, summaries, and incident narratives; AI process assistant for checklists, SOPs, runbooks, and operational handoffs

## Largest repositories by inventory count

- **mbarbine__Joshs-magnets-landing-page**: 78
- **mbarbine__2025-year-in-review-webby**: 70
- **mbarbine__FlaskFlow-www**: 33
- **mbarbine__JenkinsDB**: 12
- **mbarbine__DCF-Audit-Scripts**: 7
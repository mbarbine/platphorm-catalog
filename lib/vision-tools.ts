import type {
  BestImplementationIndex,
  GlobalCapability,
  GlobalCapabilityIndex,
  RecommendedSource,
  VisionCapabilityMatch,
  VisionDeferredCapability,
  VisionEvidencePack,
  VisionMissionTrack,
  VisionOperatorTool,
  VisionProtectionControl,
  VisionProtectionMode,
  VisionToolSelection,
} from "./types"

const REQUIRED_SHARED_KEY = "PLATPHORM_API_KEY"

const PROTECTION_MODE: VisionProtectionMode = {
  mode: "functionality_first",
  enforcement_enabled: false,
  note:
    "Protection controls are scaffolded for visibility only. The public catalog does not block routes, require credentials, mutate data, run scans, or enforce workflow gates while functionality is being proven.",
}

const OPERATOR_TOOLS: Array<
  Omit<VisionOperatorTool, "capabilities">
> = [
  {
    id: "browser-evidence-capture",
    plugin: "Browser",
    title: "Browser Evidence Capture",
    selected: true,
    runtime_state: "available_to_codex_operator",
    platform_fit:
      "Captures UI route evidence, screenshots, journey checks, accessibility checks, and public read-only product verification.",
    privacy_boundary:
      "Screenshots and browser artifacts must be public-safe and redacted before publication; protected journey triggers require PLATPHORM_API_KEY.",
    capability_ids: [
      "testing.automated-tests",
      "routing.application-pages",
      "accessibility.ui-a11y",
      "dashboard.operational-dashboard",
      "observability.trace-logging",
    ],
  },
  {
    id: "platphorm-content-evidence-vault",
    plugin: "PlatPhorm Content",
    title: "PlatPhorm Content Evidence Vault",
    platform_url: "https://content.platphormnews.com",
    selected: true,
    runtime_state: "available_to_codex_operator",
    platform_fit:
      "Publishes operator-approved reports, screenshots, exports, and evidence packets through the PlatPhorm Content surface instead of scattering artifacts across local repos.",
    privacy_boundary:
      "The public catalog only declares the platform fit. Content writes, sharing changes, moves, imports, and exports are protected operator actions.",
    capability_ids: [
      "data.import-export",
      "document.processing",
      "content.publishing-workflow",
      "analytics.metrics-reporting",
      "security.env-configuration",
    ],
  },
  {
    id: "platphorm-docs-briefing-pack",
    plugin: "PlatPhorm Docs",
    title: "PlatPhorm Docs Briefing Pack",
    platform_url: "https://docs.platphormnews.com",
    selected: true,
    runtime_state: "available_to_codex_operator",
    platform_fit:
      "Produces polished briefs, remediation reports, privacy-defense packets, and PlatPhorm Docs-ready deliverables from evidence-backed catalog data.",
    privacy_boundary:
      "Generated documents must distinguish source evidence from recommendations and must not include secrets, raw IPs, cookies, or private client data.",
    capability_ids: [
      "document.processing",
      "api.openapi-docs",
      "discovery.llms-files",
      "seo.discovery-surface",
      "content.publishing-workflow",
    ],
  },
]

const MISSION_TRACKS: Array<
  Omit<VisionMissionTrack, "capabilities">
> = [
  {
    id: "sigreduce",
    title: "Signature Reduction Engine",
    vision_fit:
      "Builds an exposure graph, scores exploitability, and creates prioritized OPSEC reduction actions from real source evidence.",
    phase_one_boundary:
      "Start with read-only footprint import, graph/risk summaries, and operator-reviewed remediation notes. Takedowns and client data ingestion stay protected.",
    tool_ids: [
      "browser-evidence-capture",
      "platphorm-content-evidence-vault",
      "platphorm-docs-briefing-pack",
    ],
    capability_ids: [
      "analytics.metrics-reporting",
      "search.query-interface",
      "security.env-configuration",
      "observability.trace-logging",
      "automation.workflow-runner",
      "data.import-export",
    ],
  },
  {
    id: "osint-scrubber",
    title: "OSINT Scrubber and Takedown Orchestrator",
    vision_fit:
      "Turns public findings into risk-ranked tasks, evidence bundles, and tracked remediation workflows without pretending removal succeeded.",
    phase_one_boundary:
      "Expose discovery and task generation as public-safe previews. Real takedown, replay, publish, or workflow-run actions require PLATPHORM_API_KEY and legal review.",
    tool_ids: [
      "browser-evidence-capture",
      "platphorm-content-evidence-vault",
      "platphorm-docs-briefing-pack",
    ],
    capability_ids: [
      "automation.workflow-runner",
      "forms.submission-flow",
      "webhooks.event-receiver",
      "mcp.tool-server",
      "document.processing",
      "testing.automated-tests",
    ],
  },
  {
    id: "stealthscore-coach",
    title: "StealthScore Coach",
    vision_fit:
      "Converts exposure signals into operator-readable guidance, compliance status, and next actions tied to evidence.",
    phase_one_boundary:
      "Keep scoring explainable and evidence-backed. Avoid behavioral surveillance claims until client-side consent, storage, and retention controls exist.",
    tool_ids: ["browser-evidence-capture", "platphorm-docs-briefing-pack"],
    capability_ids: [
      "ai.chat-or-generation",
      "dashboard.operational-dashboard",
      "authorization.access-control",
      "accessibility.ui-a11y",
      "testing.automated-tests",
    ],
  },
  {
    id: "platform-contract-evidence",
    title: "Platform Contract Evidence Loop",
    vision_fit:
      "Uses the PlatPhorm standard routes, discovery files, and best-implementation rankings to prove each site remains human-usable and machine-readable.",
    phase_one_boundary:
      "Public reads can show status and gaps. Regeneration, scans, content writes, docs publication, and remediation are protected actions.",
    tool_ids: [
      "browser-evidence-capture",
      "platphorm-content-evidence-vault",
      "platphorm-docs-briefing-pack",
    ],
    capability_ids: [
      "api.openapi-docs",
      "discovery.llms-files",
      "seo.discovery-surface",
      "integration.platphorm",
      "mcp.tool-server",
      "observability.trace-logging",
    ],
  },
]

const DEFERRED_CAPABILITIES: VisionDeferredCapability[] = [
  {
    id: "decoy-persona-traffic-shaping",
    title: "Decoy Persona and Traffic Shaping",
    status: "deferred",
    reason:
      "This can create legal, ethical, account-policy, and attribution risk. It needs explicit governance, consent, labeling, and abuse-prevention controls before implementation.",
    required_controls: [
      "written legal policy",
      "operator approval gates",
      "abuse-prevention review",
      "audit logging",
      "public claims review",
    ],
  },
  {
    id: "privacy-preserving-kyc-broker",
    title: "Privacy-Preserving KYC Broker",
    status: "research_only",
    reason:
      "The catalog shows reusable auth, forms, and document capabilities, but a real broker needs credential issuer integrations, cryptographic proof design, and jurisdictional review.",
    required_controls: [
      "credential issuer inventory",
      "cryptography review",
      "jurisdictional policy",
      "protected data model",
      "redaction and retention tests",
    ],
  },
]

const PROTECTION_CONTROLS: VisionProtectionControl[] = [
  {
    id: "artifact-redaction-review",
    title: "Artifact Redaction Review",
    status: "scaffolded_not_enforced",
    enforcement: "off",
    scope: "screenshots, docs-bound briefs, content-bound evidence packets, and exported reports",
    current_behavior:
      "The selector labels redaction as required before publication but does not inspect or block artifacts.",
    activation_requirements: [
      "redaction checker",
      "artifact type registry",
      "operator override record",
      "test fixtures for clean and rejected artifacts",
    ],
  },
  {
    id: "operator-approval-gate",
    title: "Operator Approval Gate",
    status: "scaffolded_not_enforced",
    enforcement: "off",
    scope: "content writes, docs publication, browser journey triggers, scans, and remediation requests",
    current_behavior:
      "Protected actions are described as requiring an operator path, but the public catalog exposes read-only selector output only.",
    activation_requirements: [
      "protected action endpoint",
      "operator confirmation UI",
      "shared key validation",
      "approval audit event",
    ],
  },
  {
    id: "audit-retention-log",
    title: "Audit and Retention Log",
    status: "scaffolded_not_enforced",
    enforcement: "off",
    scope: "future connector writes, generated briefs, evidence bundles, and report exports",
    current_behavior:
      "The selector names audit and retention expectations without persisting events or applying retention windows.",
    activation_requirements: [
      "audit event schema",
      "retention policy config",
      "redacted metadata capture",
      "public/protected visibility tests",
    ],
  },
  {
    id: "trusted-source-review",
    title: "Trusted Source Review",
    status: "scaffolded_not_enforced",
    enforcement: "off",
    scope: "future crawl, import, browser navigation, webhook, and evidence intake targets",
    current_behavior:
      "The selector references trusted-source discipline but does not crawl, proxy, navigate, or reject user-provided URLs.",
    activation_requirements: [
      "trusted-domain resolver",
      "SSRF guard",
      "URL count and depth limits",
      "blocked-host tests",
    ],
  },
  {
    id: "legal-claims-review",
    title: "Legal and Claims Review",
    status: "scaffolded_not_enforced",
    enforcement: "off",
    scope: "takedown language, privacy notices, executive reports, and public product claims",
    current_behavior:
      "Risky capabilities are deferred or research-only; the selector does not generate legal requests or claim takedown success.",
    activation_requirements: [
      "review workflow",
      "approved template registry",
      "claim taxonomy",
      "manual signoff record",
    ],
  },
]

function findCapability(
  index: GlobalCapabilityIndex,
  capabilityId: string
): GlobalCapability | null {
  return index.capabilities.find((capability) => capability.id === capabilityId) ?? null
}

function findBestImplementation(
  capability: GlobalCapability,
  bestIndex: BestImplementationIndex
): RecommendedSource | null {
  const ranked = bestIndex.global_capabilities.find(
    (entry) => entry.id === capability.id
  )

  return ranked?.recommended_source ?? capability.recommended_source
}

function toCapabilityMatch(
  index: GlobalCapabilityIndex,
  bestIndex: BestImplementationIndex,
  capabilityId: string
): VisionCapabilityMatch | null {
  const capability = findCapability(index, capabilityId)
  if (!capability) return null

  const recommended = findBestImplementation(capability, bestIndex)

  return {
    id: capability.id,
    name: capability.name,
    type: capability.type,
    implementations: capability.implementations.length,
    reuse_score: capability.reuse_score,
    recommended_source: recommended
      ? {
          repo_id: recommended.repo_id,
          score: recommended.score,
          reason: recommended.reason,
          source_paths: recommended.source_paths,
        }
      : null,
  }
}

function capabilityMatches(
  index: GlobalCapabilityIndex,
  bestIndex: BestImplementationIndex,
  capabilityIds: string[]
): VisionCapabilityMatch[] {
  return capabilityIds
    .map((capabilityId) => toCapabilityMatch(index, bestIndex, capabilityId))
    .filter((match): match is VisionCapabilityMatch => Boolean(match))
}

export function buildVisionToolSelection(
  index: GlobalCapabilityIndex,
  bestIndex: BestImplementationIndex
): VisionToolSelection {
  const selected_tools: VisionOperatorTool[] = OPERATOR_TOOLS.map((tool) => ({
    ...tool,
    capabilities: capabilityMatches(index, bestIndex, tool.capability_ids),
  }))

  const mission_tracks: VisionMissionTrack[] = MISSION_TRACKS.map((track) => ({
    ...track,
    capabilities: capabilityMatches(index, bestIndex, track.capability_ids),
  }))

  const mappedCapabilityIds = new Set(
    [...selected_tools, ...mission_tracks].flatMap((entry) => entry.capability_ids)
  )
  const missing_capability_ids = [...mappedCapabilityIds].filter(
    (capabilityId) => !findCapability(index, capabilityId)
  )

  return {
    ok: missing_capability_ids.length === 0,
    generated_at: index.generated_at,
    vision: {
      id: "privacy-defense-operator-capability-layer",
      title: "Privacy Defense Operator Capability Layer",
      source_context:
        "Derived from the current Cloak Harbor privacy-defense brief and the PlatPhormNews global platform contract.",
      site_purpose:
        "platphorm-catalog remains a public, read-only capability catalog. This selection maps existing repository capabilities to an operator workflow; it does not execute Browser, PlatPhorm Content, or PlatPhorm Docs actions from the public site.",
    },
    source_catalog: {
      generated_at: index.generated_at,
      repositories: index.repositories.length,
      global_capabilities: index.capabilities.length,
    },
    auth_boundary: {
      protected_actions_require: REQUIRED_SHARED_KEY,
      accepted_headers: [
        `Authorization: Bearer $${REQUIRED_SHARED_KEY}`,
        `X-PlatPhorm-API-Key: $${REQUIRED_SHARED_KEY}`,
      ],
      public_read_only: true,
      rejected_platform_key_policy:
        "Site-specific platform API key names are not accepted. Use only the shared PlatPhorm API key.",
    },
    selected_tools,
    mission_tracks,
    protection_mode: PROTECTION_MODE,
    protection_controls: PROTECTION_CONTROLS,
    deferred_capabilities: DEFERRED_CAPABILITIES,
    missing_capability_ids,
    claims_boundary: [
      "Selection is evidence-backed by existing catalog capability families and recommended source paths.",
      "Connector availability is an operator-session capability, not proof that the public catalog executed a connector action.",
      "Public catalog outputs are read-only. Content writes, docs publication, browser journey triggers, scans, remediations, and workflow runs require protected operator action.",
      "No fake takedown success, screenshot success, content publication success, docs publication, or remediation completion is claimed.",
    ],
  }
}

function buildEvidenceMarkdown(pack: Omit<VisionEvidencePack, "markdown">): string {
  return [
    `# ${pack.title}`,
    "",
    pack.summary,
    "",
    "## Mode",
    `- ${pack.mode}`,
    `- enforcement enabled: ${pack.protection_summary.enforcement_enabled}`,
    "",
    "## Selected Tools",
    ...pack.selected_tools.map(
      (tool) =>
        `- ${tool.plugin}: ${tool.title} (${tool.capability_count} capability matches)`
    ),
    "",
    "## Mission Tracks",
    ...pack.mission_track_briefs.flatMap((track) => [
      `- ${track.title}`,
      `  - tools: ${track.tool_ids.join(", ")}`,
      `  - capabilities: ${track.capability_ids.join(", ")}`,
    ]),
    "",
    "## Protection Controls",
    ...pack.protection_summary.controls.map(
      (control) => `- ${control.title}: ${control.enforcement}`
    ),
    "",
    "## Not Executed",
    ...pack.not_executed.map((item) => `- ${item}`),
  ].join("\n")
}

export function buildVisionEvidencePack(
  selection: VisionToolSelection
): VisionEvidencePack {
  const draft: Omit<VisionEvidencePack, "markdown"> = {
    ok: selection.ok,
    generated_at: selection.generated_at,
    mode: "preview_only",
    title: "PlatPhorm Privacy Defense Vision Evidence Pack",
    summary:
      "Read-only operator briefing generated from the vision selector, current capability catalog, and scaffolded protection controls. This packet is designed to prove workflow shape before connector writes or security enforcement are added.",
    source_routes: [
      "/vision",
      "/api/vision/capabilities",
      "/api/vision/evidence-pack",
      "/catalog/generated/vision-tool-selection.json",
      "/catalog/generated/vision-evidence-pack.json",
    ],
    selected_tools: selection.selected_tools.map((tool) => ({
      id: tool.id,
      plugin: tool.plugin,
      title: tool.title,
      capability_count: tool.capabilities.length,
    })),
    mission_track_briefs: selection.mission_tracks.map((track) => ({
      id: track.id,
      title: track.title,
      tool_ids: track.tool_ids,
      capability_ids: track.capability_ids,
      recommended_sources: track.capabilities
        .filter((capability) => capability.recommended_source)
        .map((capability) => ({
          capability_id: capability.id,
          repo_id: capability.recommended_source?.repo_id ?? "",
          score: capability.recommended_source?.score ?? 0,
        })),
    })),
    protection_summary: {
      mode: selection.protection_mode.mode,
      enforcement_enabled: selection.protection_mode.enforcement_enabled,
      controls: selection.protection_controls.map((control) => ({
        id: control.id,
        title: control.title,
        enforcement: control.enforcement,
      })),
    },
    export_targets: [
      {
        id: "json-download",
        title: "Static JSON evidence pack",
        status: "available_now",
        route: "/catalog/generated/vision-evidence-pack.json",
        note: "Public read-only artifact generated from catalog state.",
      },
      {
        id: "markdown-copy",
        title: "Markdown briefing text",
        status: "available_now",
        route: "/api/vision/evidence-pack",
        note: "Included in the evidence-pack payload for manual review or copy.",
      },
      {
        id: "platphorm-docs-publication",
        title: "PlatPhorm Docs briefing",
        status: "future_operator_action",
        route: "https://docs.platphormnews.com",
        note: "Will require an explicit PlatPhorm Docs operator workflow. No docs page or report is created by this catalog route.",
      },
      {
        id: "platphorm-content-vault",
        title: "PlatPhorm Content evidence vault",
        status: "future_operator_action",
        route: "https://content.platphormnews.com",
        note: "Will require an explicit PlatPhorm Content write workflow. No content item is created by this catalog route.",
      },
    ],
    not_executed: [
      "No Browser journey was triggered.",
      "No screenshot was uploaded.",
      "No PlatPhorm Content item was created or shared.",
      "No PlatPhorm Docs page or report was created or imported.",
      "No scan, takedown, remediation, or workflow run was started.",
      "No protection control enforcement was applied.",
    ],
  }

  return {
    ...draft,
    markdown: buildEvidenceMarkdown(draft),
  }
}

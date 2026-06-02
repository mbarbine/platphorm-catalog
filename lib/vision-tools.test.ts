import { describe, expect, it } from "vitest"
import { loadVisionEvidencePack, loadVisionToolSelection } from "./data"

describe("vision tool selection", () => {
  it("selects the requested operator tools and maps them to real catalog capabilities", async () => {
    const selection = await loadVisionToolSelection()

    expect(selection.ok).toBe(true)
    expect(selection.missing_capability_ids).toEqual([])
    expect(selection.selected_tools.map((tool) => tool.plugin).sort()).toEqual([
      "Browser",
      "PlatPhorm Content",
      "PlatPhorm Docs",
    ])
    expect(
      selection.selected_tools
        .map((tool) => tool.platform_url)
        .filter(Boolean)
        .sort()
    ).toEqual([
      "https://content.platphormnews.com",
      "https://docs.platphormnews.com",
    ])

    for (const tool of selection.selected_tools) {
      expect(tool.selected).toBe(true)
      expect(tool.runtime_state).toBe("available_to_codex_operator")
      expect(tool.capabilities.length).toBeGreaterThan(0)
      expect(tool.capabilities.map((capability) => capability.id)).toEqual(
        tool.capability_ids
      )
      expect(
        tool.capabilities.every((capability) => capability.implementations > 0)
      ).toBe(true)
    }
  })

  it("keeps the public catalog read-only and shared-key protected", async () => {
    const selection = await loadVisionToolSelection()

    expect(selection.auth_boundary.public_read_only).toBe(true)
    expect(selection.auth_boundary.protected_actions_require).toBe(
      "PLATPHORM_API_KEY"
    )
    expect(selection.auth_boundary.accepted_headers).toEqual([
      "Authorization: Bearer $PLATPHORM_API_KEY",
      "X-PlatPhorm-API-Key: $PLATPHORM_API_KEY",
    ])
    expect(selection.auth_boundary.rejected_platform_key_policy).toContain(
      "Site-specific platform API key names are not accepted"
    )
  })

  it("does not claim connector execution or unsafe future capabilities", async () => {
    const selection = await loadVisionToolSelection()

    expect(selection.claims_boundary.join(" ")).toContain(
      "Connector availability is an operator-session capability"
    )
    expect(selection.claims_boundary.join(" ")).toContain(
      "No fake takedown success"
    )
    expect(
      selection.deferred_capabilities.map((capability) => capability.id)
    ).toContain("decoy-persona-traffic-shaping")
  })

  it("scaffolds protection controls without enabling enforcement", async () => {
    const selection = await loadVisionToolSelection()

    expect(selection.protection_mode.mode).toBe("functionality_first")
    expect(selection.protection_mode.enforcement_enabled).toBe(false)
    expect(selection.protection_controls.map((control) => control.id)).toEqual([
      "artifact-redaction-review",
      "operator-approval-gate",
      "audit-retention-log",
      "trusted-source-review",
      "legal-claims-review",
    ])
    expect(
      selection.protection_controls.every(
        (control) =>
          control.status === "scaffolded_not_enforced" &&
          control.enforcement === "off"
      )
    ).toBe(true)
  })

  it("builds a preview-only evidence pack without connector side effects", async () => {
    const pack = await loadVisionEvidencePack()

    expect(pack.ok).toBe(true)
    expect(pack.mode).toBe("preview_only")
    expect(pack.source_routes).toContain("/api/vision/evidence-pack")
    expect(pack.export_targets.map((target) => target.id)).toEqual([
      "json-download",
      "markdown-copy",
      "platphorm-docs-publication",
      "platphorm-content-vault",
    ])
    expect(
      pack.export_targets
        .filter((target) => target.status === "future_operator_action")
        .map((target) => target.id)
    ).toEqual(["platphorm-docs-publication", "platphorm-content-vault"])
    expect(pack.not_executed.join(" ")).toContain(
      "No PlatPhorm Content item was created"
    )
    expect(pack.not_executed.join(" ")).toContain(
      "No PlatPhorm Docs page or report was created"
    )
    expect(pack.not_executed.join(" ")).toContain(
      "No protection control enforcement was applied"
    )
    expect(pack.markdown).toContain("# PlatPhorm Privacy Defense Vision Evidence Pack")
  })
})

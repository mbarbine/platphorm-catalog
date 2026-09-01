# scripts/enable-github-dependency-graph.sh
#!/usr/bin/env bash
set -euo pipefail

OWNER="mbarbine"
VISIBILITY="all"
APPLY="false"
INCLUDE_ARCHIVED="true"
INCLUDE_FORKS="true"
API_VERSION="2026-03-10"

usage() {
  cat <<'EOF'
Enable GitHub dependency graph across repositories owned by a user account.

Defaults:
  owner:            mbarbine
  visibility:       all
  mode:             dry-run
  include forks:    yes
  include archived: yes

Usage:
  ./scripts/enable-github-dependency-graph.sh
  ./scripts/enable-github-dependency-graph.sh --apply
  ./scripts/enable-github-dependency-graph.sh --owner mbarbine --visibility private --apply
  ./scripts/enable-github-dependency-graph.sh --apply --skip-archived --skip-forks

Options:
  --owner USERNAME       GitHub owner/login to target. Default: mbarbine
  --visibility VALUE     all, public, or private. Default: all
  --apply                Actually enable dependency graph + Dependabot alerts
  --dry-run              Print target repos only. Default behavior
  --skip-archived        Skip archived repositories
  --skip-forks           Skip fork repositories
  --api-version DATE     GitHub REST API version. Default: 2026-03-10
  -h, --help             Show help
EOF
}

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --owner)
      OWNER="${2:?Missing value for --owner}"
      shift 2
      ;;
    --visibility)
      VISIBILITY="${2:?Missing value for --visibility}"
      shift 2
      ;;
    --apply)
      APPLY="true"
      shift
      ;;
    --dry-run)
      APPLY="false"
      shift
      ;;
    --skip-archived)
      INCLUDE_ARCHIVED="false"
      shift
      ;;
    --skip-forks)
      INCLUDE_FORKS="false"
      shift
      ;;
    --api-version)
      API_VERSION="${2:?Missing value for --api-version}"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

case "$VISIBILITY" in
  all|public|private) ;;
  *)
    echo "--visibility must be one of: all, public, private" >&2
    exit 1
    ;;
esac

require_cmd gh
require_cmd jq

if ! gh auth status >/dev/null 2>&1; then
  cat >&2 <<'EOF'
GitHub CLI is not authenticated.

Authenticate with:
  gh auth login

Or use a token:
  export GH_TOKEN="github_pat_..."
EOF
  exit 1
fi

REPOS_FILE="$(mktemp)"
ERR_FILE="$(mktemp)"
trap 'rm -f "$REPOS_FILE" "$ERR_FILE"' EXIT

echo "Discovering repositories owned by @${OWNER}..."

gh api --paginate \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: ${API_VERSION}" \
  "/user/repos?visibility=${VISIBILITY}&affiliation=owner&per_page=100" \
| jq -c \
    --arg owner "$OWNER" \
    --argjson includeArchived "$INCLUDE_ARCHIVED" \
    --argjson includeForks "$INCLUDE_FORKS" '
      .[]
      | select((.owner.login | ascii_downcase) == ($owner | ascii_downcase))
      | select(.disabled | not)
      | select($includeArchived or (.archived | not))
      | select($includeForks or (.fork | not))
      | {
          full_name,
          private,
          fork,
          archived,
          visibility
        }
    ' > "$REPOS_FILE"

REPO_COUNT="$(wc -l < "$REPOS_FILE" | tr -d ' ')"

if [[ "$REPO_COUNT" -eq 0 ]]; then
  echo "No matching repositories found for @${OWNER} with visibility=${VISIBILITY}." >&2
  exit 1
fi

if [[ "$APPLY" == "true" ]]; then
  echo "Applying changes to ${REPO_COUNT} repositories..."
else
  echo "Dry-run: ${REPO_COUNT} repositories would be updated. Re-run with --apply to mutate."
fi

enabled=0
failed=0
planned=0

while IFS= read -r repo_json; do
  full_name="$(jq -r '.full_name' <<<"$repo_json")"
  private="$(jq -r '.private' <<<"$repo_json")"
  fork="$(jq -r '.fork' <<<"$repo_json")"
  archived="$(jq -r '.archived' <<<"$repo_json")"

  meta="private=${private}, fork=${fork}, archived=${archived}"

  if [[ "$APPLY" != "true" ]]; then
    printf '[dry-run] would enable dependency graph + Dependabot alerts on %s (%s)\n' "$full_name" "$meta"
    ((planned+=1))
    continue
  fi

  printf '[apply] enabling dependency graph + Dependabot alerts on %s (%s) ... ' "$full_name" "$meta"

  if gh api \
      -X PUT \
      -H "Accept: application/vnd.github+json" \
      -H "X-GitHub-Api-Version: ${API_VERSION}" \
      "repos/${full_name}/vulnerability-alerts" \
      >/dev/null 2>"$ERR_FILE"; then

    if gh api \
        -X GET \
        -H "Accept: application/vnd.github+json" \
        -H "X-GitHub-Api-Version: ${API_VERSION}" \
        "repos/${full_name}/vulnerability-alerts" \
        >/dev/null 2>&1; then
      echo "ok"
      ((enabled+=1))
    else
      echo "put-ok verify-failed"
      ((failed+=1))
    fi
  else
    echo "failed"
    sed 's/^/  /' "$ERR_FILE" >&2
    ((failed+=1))
  fi
done < "$REPOS_FILE"

echo
echo "Summary"
echo "  owner:      @${OWNER}"
echo "  visibility: ${VISIBILITY}"
echo "  repos:      ${REPO_COUNT}"

if [[ "$APPLY" == "true" ]]; then
  echo "  enabled:    ${enabled}"
  echo "  failed:     ${failed}"
else
  echo "  planned:    ${planned}"
fi

if [[ "$failed" -gt 0 ]]; then
  exit 1
fi

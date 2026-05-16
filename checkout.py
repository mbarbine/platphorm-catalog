# checkout_recent_github_repos.py
from __future__ import annotations

import argparse
import csv
import datetime as dt
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any, Iterable


GITHUB_API_BASE = "https://api.github.com"
DEFAULT_ORGS = ["processco", "ph3ar"]


@dataclass
class RepoRecord:
    full_name: str
    name: str
    owner: str
    source: str
    html_url: str
    clone_url: str
    ssh_url: str
    default_branch: str
    private: bool
    fork: bool
    archived: bool
    disabled: bool
    language: str | None
    pushed_at: str | None
    updated_at: str | None
    selected_date: str | None
    selected_date_field: str
    local_path: str
    action: str
    error: str | None = None


def run_command(
    command: list[str],
    cwd: Path | None = None,
    timeout_seconds: int = 1800,
    allow_failure: bool = False,
) -> str:
    result = subprocess.run(
        command,
        cwd=str(cwd) if cwd else None,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        timeout=timeout_seconds,
    )

    if result.returncode != 0 and not allow_failure:
        raise RuntimeError(
            "Command failed: "
            + " ".join(command)
            + f"\n\nSTDOUT:\n{result.stdout}\n\nSTDERR:\n{result.stderr}"
        )

    return result.stdout.strip()


def require_git() -> None:
    try:
        run_command(["git", "--version"], timeout_seconds=30)
    except Exception as exc:
        raise SystemExit("git is required. Install git and try again.") from exc


def parse_github_datetime(value: str | None) -> dt.datetime | None:
    if not value:
        return None

    try:
        return dt.datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None


def subtract_months(date_value: dt.date, months: int) -> dt.date:
    month_index = date_value.month - months
    year = date_value.year + (month_index - 1) // 12
    month = (month_index - 1) % 12 + 1

    days_in_month = [
        31,
        29 if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0) else 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ]

    day = min(date_value.day, days_in_month[month - 1])
    return dt.date(year, month, day)


def safe_path_name(value: str) -> str:
    return value.replace("/", "__").replace(" ", "_")


def github_request(url: str, token: str) -> tuple[Any, dict[str, str]]:
    request = urllib.request.Request(
        url,
        headers={
            "Authorization": f"Bearer {token}",
            "Accept": "application/vnd.github+json",
            "User-Agent": "github-recent-repo-checkout",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    )

    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            payload = json.loads(response.read().decode("utf-8"))
            headers = dict(response.headers.items())
            return payload, headers
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"GitHub API error {exc.code}: {body}") from exc


def parse_next_link(link_header: str | None) -> str | None:
    if not link_header:
        return None

    for part in link_header.split(","):
        if 'rel="next"' not in part:
            continue

        start = part.find("<")
        end = part.find(">")

        if start >= 0 and end > start:
            return part[start + 1 : end]

    return None


def iter_user_repos(token: str) -> Iterable[tuple[str, dict[str, Any]]]:
    params = urllib.parse.urlencode(
        {
            "per_page": "100",
            "sort": "updated",
            "direction": "desc",
            "affiliation": "owner,collaborator,organization_member",
        }
    )

    url = f"{GITHUB_API_BASE}/user/repos?{params}"

    while url:
        payload, headers = github_request(url, token)

        if not isinstance(payload, list):
            raise RuntimeError("Unexpected GitHub API response while listing user repositories.")

        for repo in payload:
            yield "user", repo

        url = parse_next_link(headers.get("Link"))


def iter_org_repos(token: str, org: str) -> Iterable[tuple[str, dict[str, Any]]]:
    params = urllib.parse.urlencode(
        {
            "per_page": "100",
            "sort": "updated",
            "direction": "desc",
            "type": "all",
        }
    )

    url = f"{GITHUB_API_BASE}/orgs/{urllib.parse.quote(org)}/repos?{params}"

    while url:
        payload, headers = github_request(url, token)

        if not isinstance(payload, list):
            raise RuntimeError(f"Unexpected GitHub API response while listing org repositories: {org}")

        for repo in payload:
            yield f"org:{org}", repo

        url = parse_next_link(headers.get("Link"))


def selected_repo_date(repo: dict[str, Any], date_field: str) -> str | None:
    if date_field == "pushed_at":
        return repo.get("pushed_at")

    if date_field == "updated_at":
        return repo.get("updated_at")

    pushed_at = parse_github_datetime(repo.get("pushed_at"))
    updated_at = parse_github_datetime(repo.get("updated_at"))

    if pushed_at and updated_at:
        return repo.get("pushed_at") if pushed_at >= updated_at else repo.get("updated_at")

    return repo.get("pushed_at") or repo.get("updated_at")


def should_include_repo(
    repo: dict[str, Any],
    cutoff: dt.datetime,
    date_field: str,
    include_archived: bool,
    include_forks: bool,
    include_disabled: bool,
) -> bool:
    if repo.get("archived") and not include_archived:
        return False

    if repo.get("fork") and not include_forks:
        return False

    if repo.get("disabled") and not include_disabled:
        return False

    selected_date = parse_github_datetime(selected_repo_date(repo, date_field))
    if not selected_date:
        return False

    return selected_date >= cutoff


def collect_repositories(
    token: str,
    orgs: list[str],
    include_user_repos: bool,
) -> list[tuple[str, dict[str, Any]]]:
    repos_by_full_name: dict[str, tuple[str, dict[str, Any]]] = {}

    if include_user_repos:
        for source, repo in iter_user_repos(token):
            repos_by_full_name[repo["full_name"]] = (source, repo)

    for org in orgs:
        try:
            for source, repo in iter_org_repos(token, org):
                repos_by_full_name[repo["full_name"]] = (source, repo)
        except Exception as exc:
            print(f"WARNING: Could not list org '{org}': {exc}", file=sys.stderr)

    return list(repos_by_full_name.values())


def clone_or_update_repo(
    repo: dict[str, Any],
    destination_dir: Path,
    protocol: str,
    update_mode: str,
    dry_run: bool,
) -> tuple[str, str | None]:
    full_name = repo["full_name"]
    local_path = destination_dir / safe_path_name(full_name)

    remote_url = repo["ssh_url"] if protocol == "ssh" else repo["clone_url"]

    if dry_run:
        return ("would_update" if local_path.exists() else "would_clone"), None

    if not local_path.exists():
        run_command(
            ["git", "clone", remote_url, str(local_path)],
            timeout_seconds=3600,
        )
        return "cloned", None

    if not (local_path / ".git").exists():
        return "skipped_existing_non_git_path", f"Path exists but is not a Git repo: {local_path}"

    run_command(["git", "remote", "set-url", "origin", remote_url], cwd=local_path)
    run_command(["git", "fetch", "origin", "--prune"], cwd=local_path)

    if update_mode == "fetch-only":
        return "fetched", None

    status = run_command(["git", "status", "--porcelain"], cwd=local_path)

    if status.strip() and update_mode == "pull-if-clean":
        return "fetched_local_changes_present", "Local changes present; skipped checkout/pull."

    default_branch = repo.get("default_branch") or "main"

    if update_mode in {"pull-if-clean", "reset-hard"}:
        run_command(["git", "checkout", default_branch], cwd=local_path, allow_failure=True)

    if update_mode == "pull-if-clean":
        run_command(["git", "pull", "--ff-only", "origin", default_branch], cwd=local_path)
        return "pulled", None

    if update_mode == "reset-hard":
        run_command(["git", "reset", "--hard", f"origin/{default_branch}"], cwd=local_path)
        run_command(["git", "clean", "-fd"], cwd=local_path)
        return "reset_hard", None

    return "fetched", None


def build_record(
    source: str,
    repo: dict[str, Any],
    destination_dir: Path,
    date_field: str,
    action: str,
    error: str | None,
) -> RepoRecord:
    owner = repo.get("owner", {}).get("login", "")
    full_name = repo["full_name"]
    local_path = destination_dir / safe_path_name(full_name)

    return RepoRecord(
        full_name=full_name,
        name=repo["name"],
        owner=owner,
        source=source,
        html_url=repo["html_url"],
        clone_url=repo["clone_url"],
        ssh_url=repo["ssh_url"],
        default_branch=repo.get("default_branch") or "main",
        private=bool(repo.get("private")),
        fork=bool(repo.get("fork")),
        archived=bool(repo.get("archived")),
        disabled=bool(repo.get("disabled")),
        language=repo.get("language"),
        pushed_at=repo.get("pushed_at"),
        updated_at=repo.get("updated_at"),
        selected_date=selected_repo_date(repo, date_field),
        selected_date_field=date_field,
        local_path=str(local_path),
        action=action,
        error=error,
    )


def write_manifest_csv(records: list[RepoRecord], output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)

    fieldnames = [
        "full_name",
        "name",
        "owner",
        "source",
        "html_url",
        "clone_url",
        "ssh_url",
        "default_branch",
        "private",
        "fork",
        "archived",
        "disabled",
        "language",
        "pushed_at",
        "updated_at",
        "selected_date",
        "selected_date_field",
        "local_path",
        "action",
        "error",
    ]

    with output_path.open("w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()

        for record in records:
            writer.writerow(asdict(record))


def write_manifest_json(records: list[RepoRecord], output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)

    payload = {
        "generated_at_unix": int(time.time()),
        "repo_count": len(records),
        "records": [asdict(record) for record in records],
    }

    output_path.write_text(json.dumps(payload, indent=2, sort_keys=True), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Clone or update personal and organization GitHub repositories changed within the last N months."
        )
    )

    parser.add_argument(
        "--token",
        default=os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN"),
        help="GitHub token. Defaults to GITHUB_TOKEN or GH_TOKEN.",
    )

    parser.add_argument(
        "--destination",
        default="./github-recent",
        help="Directory where repositories should be cloned or updated.",
    )

    parser.add_argument(
        "--months",
        type=int,
        default=18,
        help="Number of months back to include. Default: 18.",
    )

    parser.add_argument(
        "--date-field",
        choices=["pushed_at", "updated_at", "latest"],
        default="pushed_at",
        help=(
            "Which GitHub timestamp to use. "
            "pushed_at means code pushes. "
            "updated_at includes broader repo activity. "
            "latest uses whichever is newer."
        ),
    )

    parser.add_argument(
        "--protocol",
        choices=["ssh", "https"],
        default="ssh",
        help="Clone protocol.",
    )

    parser.add_argument(
        "--update-mode",
        choices=["fetch-only", "pull-if-clean", "reset-hard"],
        default="fetch-only",
        help=(
            "How to handle repos that already exist locally. "
            "fetch-only is safest. "
            "pull-if-clean updates only clean repos. "
            "reset-hard is destructive."
        ),
    )

    parser.add_argument(
        "--org",
        action="append",
        default=[],
        help="GitHub organization to include. Can be supplied multiple times.",
    )

    parser.add_argument(
        "--no-default-orgs",
        action="store_true",
        help="Do not automatically include processco and ph3ar.",
    )

    parser.add_argument(
        "--no-user-repos",
        action="store_true",
        help="Only scan organizations. Do not include personal/user accessible repos.",
    )

    parser.add_argument(
        "--include-archived",
        action="store_true",
        help="Include archived repositories.",
    )

    parser.add_argument(
        "--include-forks",
        action="store_true",
        help="Include forked repositories.",
    )

    parser.add_argument(
        "--include-disabled",
        action="store_true",
        help="Include disabled repositories.",
    )

    parser.add_argument(
        "--manifest-dir",
        default="./github-recent-manifest",
        help="Directory where CSV and JSON manifests should be written.",
    )

    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="List matching repositories without cloning or updating them.",
    )

    args = parser.parse_args()

    if not args.token:
        raise SystemExit("Missing GitHub token. Set GITHUB_TOKEN or GH_TOKEN.")

    require_git()

    today = dt.datetime.now(dt.timezone.utc).date()
    cutoff_date = subtract_months(today, args.months)
    cutoff = dt.datetime.combine(cutoff_date, dt.time.min, tzinfo=dt.timezone.utc)

    destination_dir = Path(args.destination).expanduser().resolve()
    manifest_dir = Path(args.manifest_dir).expanduser().resolve()

    destination_dir.mkdir(parents=True, exist_ok=True)
    manifest_dir.mkdir(parents=True, exist_ok=True)

    orgs = []
    if not args.no_default_orgs:
        orgs.extend(DEFAULT_ORGS)
    orgs.extend(args.org)
    orgs = sorted(set(orgs))

    print(f"Cutoff date: {cutoff.date().isoformat()}")
    print(f"Date field: {args.date_field}")
    print(f"Destination: {destination_dir}")
    print(f"Include user repos: {not args.no_user_repos}")
    print(f"Organizations: {', '.join(orgs) if orgs else 'none'}")
    print(f"Dry run: {args.dry_run}")
    print("")

    repo_candidates = collect_repositories(
        token=args.token,
        orgs=orgs,
        include_user_repos=not args.no_user_repos,
    )

    selected: list[tuple[str, dict[str, Any]]] = []

    for source, repo in repo_candidates:
        if should_include_repo(
            repo=repo,
            cutoff=cutoff,
            date_field=args.date_field,
            include_archived=args.include_archived,
            include_forks=args.include_forks,
            include_disabled=args.include_disabled,
        ):
            selected.append((source, repo))

    selected.sort(
        key=lambda item: selected_repo_date(item[1], args.date_field) or "",
        reverse=True,
    )

    print(f"Repositories discovered: {len(repo_candidates)}")
    print(f"Repositories selected: {len(selected)}")
    print("")

    records: list[RepoRecord] = []

    for index, (source, repo) in enumerate(selected, start=1):
        full_name = repo["full_name"]
        selected_date = selected_repo_date(repo, args.date_field)

        print(f"[{index}/{len(selected)}] {full_name} ({source}, {selected_date})")

        try:
            action, error = clone_or_update_repo(
                repo=repo,
                destination_dir=destination_dir,
                protocol=args.protocol,
                update_mode=args.update_mode,
                dry_run=args.dry_run,
            )
        except Exception as exc:
            action = "error"
            error = str(exc)
            print(f"  ERROR: {error}", file=sys.stderr)

        records.append(
            build_record(
                source=source,
                repo=repo,
                destination_dir=destination_dir,
                date_field=args.date_field,
                action=action,
                error=error,
            )
        )

    csv_path = manifest_dir / "recent_repositories.csv"
    json_path = manifest_dir / "recent_repositories.json"

    write_manifest_csv(records, csv_path)
    write_manifest_json(records, json_path)

    print("")
    print("Done.")
    print(f"Repos selected: {len(records)}")
    print(f"CSV manifest: {csv_path}")
    print(f"JSON manifest: {json_path}")


if __name__ == "__main__":
    main()

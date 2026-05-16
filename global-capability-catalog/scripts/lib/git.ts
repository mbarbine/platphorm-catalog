import { execFileSync } from "node:child_process";

export function gitValue(repoPath: string, args: string[]): string | null {
  try {
    return execFileSync("git", ["-C", repoPath, ...args], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim() || null;
  } catch {
    return null;
  }
}

export function getGitMetadata(repoPath: string): {
  remote_url: string | null;
  default_branch: string | null;
  current_commit: string | null;
} {
  const remote_url = gitValue(repoPath, ["remote", "get-url", "origin"]);
  const currentBranch = gitValue(repoPath, ["rev-parse", "--abbrev-ref", "HEAD"]);
  const originHead = gitValue(repoPath, ["symbolic-ref", "refs/remotes/origin/HEAD"]);
  const default_branch = originHead?.replace("refs/remotes/origin/", "") ?? currentBranch;
  const current_commit = gitValue(repoPath, ["rev-parse", "HEAD"]);
  return { remote_url, default_branch, current_commit };
}


export function likelySecretName(name: string): boolean {
  return /(SECRET|TOKEN|KEY|PASSWORD|PRIVATE|CREDENTIAL|WEBHOOK_SECRET|DATABASE_URL|AUTH|SESSION|JWT)/i.test(name);
}

export function redactSecretLine(line: string): string {
  const separator = line.includes("=") ? "=" : line.includes(":") ? ":" : null;
  if (!separator) return redactLongTokens(line);
  const index = line.indexOf(separator);
  return `${line.slice(0, index + 1)} [REDACTED]`;
}

export function redactLongTokens(text: string): string {
  return text
    .replace(/\bAKIA[0-9A-Z]{16}\b/g, "[REDACTED_AWS_KEY]")
    .replace(/\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g, "[REDACTED_GITHUB_TOKEN]")
    .replace(/\bsk-[A-Za-z0-9_-]{20,}\b/g, "[REDACTED_API_KEY]")
    .replace(/\bxox[baprs]-[A-Za-z0-9-]{20,}\b/g, "[REDACTED_SLACK_TOKEN]")
    .replace(/[A-Za-z0-9+/]{48,}={0,2}/g, "[REDACTED_SECRET]");
}


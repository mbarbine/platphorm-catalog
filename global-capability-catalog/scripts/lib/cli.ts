export interface CliArgs {
  flags: Set<string>;
  values: Map<string, string[]>;
  positional: string[];
}

export function parseArgs(argv = process.argv.slice(2)): CliArgs {
  const flags = new Set<string>();
  const values = new Map<string, string[]>();
  const positional: string[] = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) {
      positional.push(arg);
      continue;
    }

    const withoutPrefix = arg.slice(2);
    const equals = withoutPrefix.indexOf("=");
    if (equals >= 0) {
      const key = withoutPrefix.slice(0, equals);
      const value = withoutPrefix.slice(equals + 1);
      const existing = values.get(key) ?? [];
      existing.push(value);
      values.set(key, existing);
      continue;
    }

    const next = argv[i + 1];
    if (next && !next.startsWith("--")) {
      const existing = values.get(withoutPrefix) ?? [];
      existing.push(next);
      values.set(withoutPrefix, existing);
      i += 1;
    } else {
      flags.add(withoutPrefix);
    }
  }

  return { flags, values, positional };
}

export function getArg(args: CliArgs, name: string, fallback?: string): string | undefined {
  return args.values.get(name)?.at(-1) ?? fallback;
}

export function getArgList(args: CliArgs, name: string): string[] {
  return args.values.get(name) ?? [];
}

export function getNumberArg(args: CliArgs, name: string, fallback?: number): number | undefined {
  const raw = getArg(args, name);
  if (raw === undefined) return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}


import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const CATALOG_ROOT = path.resolve(__dirname, "../..");
export const DEFAULT_SOURCE_ROOT = "/Users/bwm.barbinewarnermichael/Documents/github/repositories";
export const SCHEMA_VERSION = "1.0.0";
export const SCANNER_VERSION = "0.1.0";

export const CATALOG_DIRS = {
  scans: path.join(CATALOG_ROOT, "catalog/scans"),
  repositories: path.join(CATALOG_ROOT, "catalog/repositories"),
  generated: path.join(CATALOG_ROOT, "catalog/generated"),
  docs: path.join(CATALOG_ROOT, "catalog/docs"),
  repoDocs: path.join(CATALOG_ROOT, "catalog/docs/repositories"),
  capabilityDocs: path.join(CATALOG_ROOT, "catalog/docs/capabilities")
};

export const SCHEMA_PATHS = {
  scan: path.join(CATALOG_ROOT, "schemas/scan-artifact.schema.json"),
  repository: path.join(CATALOG_ROOT, "schemas/repository.catalog.schema.json"),
  capability: path.join(CATALOG_ROOT, "schemas/capability.catalog.schema.json"),
  globalIndex: path.join(CATALOG_ROOT, "schemas/global-index.schema.json"),
  bestImplementations: path.join(CATALOG_ROOT, "schemas/best-implementations.schema.json")
};

export const IGNORED_DIR_NAMES = new Set([
  ".git",
  ".hg",
  ".svn",
  "node_modules",
  ".next",
  ".nuxt",
  ".svelte-kit",
  ".turbo",
  ".cache",
  ".parcel-cache",
  "dist",
  "build",
  "out",
  "coverage",
  ".vercel",
  ".netlify",
  "vendor",
  "target",
  "__pycache__",
  ".pytest_cache",
  ".ruff_cache",
  ".mypy_cache",
  ".venv",
  "venv",
  "env"
]);

export const TEXT_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".mdx",
  ".txt",
  ".yaml",
  ".yml",
  ".toml",
  ".prisma",
  ".sql",
  ".py",
  ".rb",
  ".go",
  ".rs",
  ".java",
  ".kt",
  ".php",
  ".cs",
  ".swift",
  ".svelte",
  ".vue",
  ".astro",
  ".html",
  ".css",
  ".scss",
  ".xml",
  ".env",
  ".sh",
  ".Dockerfile"
]);

export const MAX_TEXT_READ_BYTES = 256_000;
export const MAX_SCAN_FILES = 80_000;

export const LANGUAGE_BY_EXTENSION: Record<string, string> = {
  ".ts": "TypeScript",
  ".tsx": "TypeScript",
  ".js": "JavaScript",
  ".jsx": "JavaScript",
  ".mjs": "JavaScript",
  ".cjs": "JavaScript",
  ".py": "Python",
  ".rb": "Ruby",
  ".go": "Go",
  ".rs": "Rust",
  ".java": "Java",
  ".kt": "Kotlin",
  ".php": "PHP",
  ".cs": "C#",
  ".swift": "Swift",
  ".svelte": "Svelte",
  ".vue": "Vue",
  ".astro": "Astro",
  ".html": "HTML",
  ".css": "CSS",
  ".scss": "SCSS",
  ".sql": "SQL",
  ".prisma": "Prisma",
  ".md": "Markdown",
  ".mdx": "MDX",
  ".json": "JSON",
  ".yaml": "YAML",
  ".yml": "YAML",
  ".toml": "TOML",
  ".xml": "XML",
  ".sh": "Shell"
};

export const CAPABILITY_TYPES = [
  "authentication",
  "authorization",
  "user-management",
  "organization-management",
  "billing",
  "payments",
  "notifications",
  "file-upload",
  "document-processing",
  "data-ingestion",
  "data-export",
  "search",
  "semantic-search",
  "agent-workflow",
  "automation",
  "dashboard",
  "analytics",
  "reporting",
  "admin-tools",
  "content-management",
  "workflow-management",
  "observability",
  "logging",
  "security",
  "compliance",
  "testing",
  "deployment",
  "devtools",
  "api",
  "cli",
  "ui-component",
  "integration",
  "database",
  "routing",
  "forms",
  "email",
  "calendar",
  "webhooks",
  "mcp",
  "ai-model",
  "data-visualization",
  "gameplay",
  "ecommerce",
  "shipping",
  "finance",
  "dictionary",
  "discovery",
  "seo",
  "accessibility",
  "i18n",
  "other"
] as const;

export const FRAMEWORK_DEPENDENCIES: Record<string, string> = {
  next: "Next.js",
  react: "React",
  vue: "Vue",
  svelte: "Svelte",
  astro: "Astro",
  vite: "Vite",
  express: "Express",
  fastify: "Fastify",
  hono: "Hono",
  "@nestjs/core": "NestJS",
  "@remix-run/react": "Remix",
  "@modelcontextprotocol/sdk": "MCP SDK",
  prisma: "Prisma",
  "drizzle-orm": "Drizzle ORM",
  mongoose: "Mongoose",
  sequelize: "Sequelize",
  tailwindcss: "Tailwind CSS",
  vitest: "Vitest",
  jest: "Jest",
  playwright: "Playwright",
  cypress: "Cypress"
};

export const INTEGRATION_HINTS: Array<{ name: string; patterns: RegExp[] }> = [
  { name: "Vercel", patterns: [/vercel/i, /x-vercel/i] },
  { name: "Stripe", patterns: [/stripe/i, /STRIPE_/] },
  { name: "OpenAI", patterns: [/openai/i, /OPENAI_/] },
  { name: "Anthropic", patterns: [/anthropic/i, /ANTHROPIC_/] },
  { name: "Supabase", patterns: [/supabase/i, /SUPABASE_/] },
  { name: "Neon", patterns: [/\bneon\b/i, /NEON_/] },
  { name: "Postgres", patterns: [/postgres/i, /DATABASE_URL/] },
  { name: "Redis", patterns: [/redis/i, /REDIS_/] },
  { name: "AWS", patterns: [/\baws\b/i, /AWS_/] },
  { name: "S3", patterns: [/\bs3\b/i, /S3_/] },
  { name: "Slack", patterns: [/slack/i, /SLACK_/] },
  { name: "Google", patterns: [/google/i, /GOOGLE_/] },
  { name: "Gmail", patterns: [/gmail/i, /GMAIL_/] },
  { name: "Shopify", patterns: [/shopify/i, /SHOPIFY_/] },
  { name: "Stannp", patterns: [/stannp/i, /STANNP_/] },
  { name: "MCP", patterns: [/\bmcp\b/i, /MODEL_CONTEXT_PROTOCOL/i] },
  { name: "PlatPhorm", patterns: [/platphorm/i, /PLATPHORM_/] }
];

export const SENSITIVE_DATA_KEYWORDS = [
  "email",
  "password",
  "password_hash",
  "session_token",
  "api_key",
  "oauth",
  "token",
  "payment",
  "card",
  "pii",
  "ip address",
  "x-vercel-ja4-digest",
  "fingerprint",
  "location",
  "financial",
  "health"
];


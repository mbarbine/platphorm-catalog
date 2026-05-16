# mbarbine__spectrum-canine-www

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

## Metadata

- ID: `github-recent__mbarbine__spectrum-canine-www`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__spectrum-canine-www`
- Remote: `git@github.com:mbarbine/spectrum-canine-www.git`
- Primary language: TypeScript
- Frameworks: Next.js, React, Tailwind CSS
- Maturity: internal
- Confidence: high

## Capabilities

### User Authentication and Sessions

- ID: `auth.user-session`
- Type: authentication
- Maturity: internal
- Confidence: low
- Reuse: pattern_only, difficulty unknown
- Source paths: `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates authentication, login, session, token, or identity handling.

### Content Publishing Workflow

- ID: `content.publishing-workflow`
- Type: content-management
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/blog/page.tsx`, `components/blog-categories.tsx`, `components/blog-grid.tsx`, `components/blog-hero.tsx`, `package.json`, `postcss.config.mjs`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates content, docs, posts, publishing, CMS, or markdown/MDX workflows.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: internal
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `package.json`, `tsconfig.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Form Submission Flow

- ID: `forms.submission-flow`
- Type: forms
- Maturity: internal
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `app/contact/page.tsx`, `components/contact-form.tsx`, `components/contact-hero.tsx`, `components/contact-info.tsx`, `components/contact-map.tsx`, `components/ui/form.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates forms, contact flows, submit endpoints, or validation-backed input handling.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `app/blog/page.tsx`, `components/blog-categories.tsx`, `components/blog-grid.tsx`, `components/blog-hero.tsx`, `components/ui/alert-dialog.tsx`, `components/ui/dialog.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Application Routes

- ID: `routing.application-pages`
- Type: routing
- Maturity: internal
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `app/about/page.tsx`, `app/blog/page.tsx`, `app/contact/page.tsx`, `app/gallery/page.tsx`, `app/services/page.tsx`, `app/training/page.tsx`
- Tests: none detected
- LLMs context: none detected

Repository contains user-facing application page routes.

### Shipping and Fulfillment Flow

- ID: `shipping.fulfillment-flow`
- Type: shipping
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/ui/label.tsx`, `package.json`
- Tests: none detected
- LLMs context: none detected

Source evidence indicates shipping, labels, postcards, fulfillment, or delivery-provider integration.

### UI Component Library

- ID: `ui.component-library`
- Type: ui-component
- Maturity: internal
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `components/about-certifications.tsx`, `components/about-hero.tsx`, `components/about-story.tsx`, `components/about-values.tsx`, `components/blog-categories.tsx`, `components/blog-grid.tsx`, `components/blog-hero.tsx`, `components/contact-form.tsx`, `components/contact-hero.tsx`, `components/contact-info.tsx`, `components/contact-map.tsx`, `components/cta-section.tsx`, `components/faq-accordion.tsx`, `components/faq-section.tsx`, `components/footer.tsx`, `components/gallery-hero.tsx`, `components/header.tsx`, `components/hero-section.tsx`, `components/photo-gallery.tsx`, `components/service-card.tsx`, `components/service-grid.tsx`, `components/service-hero.tsx`, `components/service-process.tsx`, `components/services-section.tsx`, `components/stats-section.tsx`, `components/team-section.tsx`, `components/testimonial-card.tsx`, `components/testimonials-section.tsx`, `components/theme-provider.tsx`, `components/training-facilities.tsx`
- Tests: none detected
- LLMs context: none detected

Reusable UI components were found in component-oriented source paths.

## Repository Risks

- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `components/ui/chart.tsx`
- [medium] No automated test files were detected. Evidence: `app/about/page.tsx`, `app/blog/page.tsx`, `app/contact/page.tsx`, `app/gallery/page.tsx`, `app/services/page.tsx`, `app/training/page.tsx`, `package.json`, `README.md`

## Gaps

- test files not detected
- CI workflows not detected
- LLMs context files not detected

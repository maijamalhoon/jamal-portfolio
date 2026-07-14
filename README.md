# Jamal Yaqoob — Portfolio

A production-grade portfolio for **Jamal Yaqoob**, an accounting and finance professional in Karachi combining dealership operations, ERP/DMS expertise, financial controls and computer science.

## Live website

**Verified permanent public link:** https://maijamalhoon.github.io/jamal-portfolio/

The repository is also connected to the Jamal Portfolio project on Vercel, and successful deployments are created automatically from `main`.

## What makes it different

- Four persistent premium colour themes: Noir, Cobalt, Ember and Ivory.
- Motion-led hero, project visuals, magnetic interactions and reduced-motion support.
- Responsive layouts for mobile, tablet, desktop and ultrawide screens.
- Custom accessible navigation, theme menu, contact panel, copy confirmations and 404 page.
- Direct résumé PDF download, HTML résumé and downloadable vCard.
- Live GitHub profile and public repository synchronization.
- SEO metadata, JSON-LD, sitemap, robots, web manifest and security headers.
- Deterministic CI checks for ESLint, TypeScript and production build.

## Live GitHub synchronization

The portfolio requests Jamal's public GitHub profile and repositories directly from GitHub's public API. Public profile edits and public repository additions or removals appear automatically on the portfolio without a new deployment. A cached snapshot and built-in fallback keep the section reliable if GitHub is temporarily unavailable.

Private repositories remain private and are never requested by the public site.

## LinkedIn

Professional profile: https://pk.linkedin.com/in/jamalarain-it

LinkedIn does not provide unrestricted public access to experience and skills data. Those sections remain intentionally controlled in `src/lib/data.ts` so the portfolio never shows scraped, incomplete or unauthorized information.

## Quality checks

```bash
npm ci
npm run check
```

`npm run check` runs lint, a complete production build and TypeScript validation.

## Local development

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

## Deployment

The repository is compatible with Vercel and GitHub Pages. Every push to `main` runs CI and publishes the static export through the included GitHub Actions workflows.

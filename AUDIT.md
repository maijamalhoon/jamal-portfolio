# Portfolio Audit

Audit completed in July 2026 without changing the established colour palettes, theme identities, icon language, or motion design.

## Verified

- Next.js production build and static export succeed.
- ESLint and TypeScript checks pass.
- Home, résumé, manifest, robots, sitemap, PDF, contact card, and custom 404 outputs are generated.
- Exactly one page-level `h1` is present on each main HTML route.
- Images include alternative text.
- Icon-only controls have accessible labels.
- External links opened in new tabs include safe `rel` attributes.
- No native `alert`, `confirm`, `prompt`, `<select>`, or browser print dialog is used.

## Functionality added

- Active-section navigation state.
- Keyboard-complete mobile navigation with focus trapping, Escape close, backdrop close, and scroll lock.
- Accessible custom theme menu with outside-click and Escape close.
- Custom contact command panel.
- Copy email, phone, and portfolio link actions.
- Downloadable vCard contact file.
- Custom non-blocking toast confirmations.
- Back-to-top control.
- Direct résumé PDF download plus full HTML résumé route.
- Custom 404 page.
- Skip-to-content control and consistent focus rings.
- Persistent theme applied before first paint.

## Performance and reliability fixes

- Smooth scrolling is disabled for reduced-motion users, coarse pointers, and data-saver mode.
- Cursor tracking only runs on fine-pointer hover devices.
- The portrait follows the live GitHub profile image, with a stable fallback and an explicitly allowed image host.
- A committed lockfile enables deterministic `npm ci` builds.
- CI now runs lint, TypeScript, and production build checks.
- Immutable caching is configured for versioned Vercel assets.

## Deployment safeguards

- Vercel and GitHub Pages URLs are resolved through environment-aware site configuration.
- GitHub Pages base paths are applied to generated assets and downloads.
- Vercel security headers deny framing, MIME sniffing, and unnecessary browser permissions.

## Live professional-data audit

- GitHub profile and all public, non-fork, non-archived repositories synchronize at runtime.
- A 15-minute local cache prevents unnecessary API requests and improves reliability.
- Saved fallbacks prevent an empty HR-facing section during temporary GitHub API failures.
- Private repositories are never exposed.
- LinkedIn is linked as the verified professional destination. Automatic LinkedIn experience/skills importing is deliberately not implemented because LinkedIn requires approved API access and public scraping is not reliable or appropriate.

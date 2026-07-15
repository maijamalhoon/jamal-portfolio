# Performance audit v4

```json
{
  "outcomes": {
    "install": "success",
    "check": "success",
    "inspect": "success",
    "server": "success",
    "browser": "success",
    "lighthouse": "success"
  },
  "export": {
    "bytes": 42400,
    "nextJs": 2,
    "scripts": 3,
    "portfolio": 2
  },
  "mobile": {
    "performance": 87,
    "accessibility": 100,
    "bestPractices": 96,
    "seo": 100,
    "fcp": "1.6 s",
    "lcp": "1.9 s",
    "tbt": "410 ms",
    "cls": "0",
    "speedIndex": "4.2 s"
  },
  "desktop": {
    "performance": 100,
    "accessibility": 100,
    "bestPractices": 96,
    "seo": 100,
    "fcp": "0.2 s",
    "lcp": "0.3 s",
    "tbt": "0 ms",
    "cls": "0",
    "speedIndex": "0.3 s"
  }
}
```

## Check log

```text

> jamal-portfolio@0.1.0 check
> npm run lint && npm run build && npm run typecheck


> jamal-portfolio@0.1.0 lint
> eslint


> jamal-portfolio@0.1.0 prebuild
> node scripts/generate-resume.mjs && node scripts/generate-portrait.mjs

Generated /home/runner/work/jamal-portfolio/jamal-portfolio/public/Jamal_Yaqoob_Resume.pdf
Generated public/jamal-yaqoob.webp

> jamal-portfolio@0.1.0 build
> next build

⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

▲ Next.js 16.2.10 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 2.7s
  Running TypeScript ...
  Finished TypeScript in 3.5s ...
  Collecting page data using 3 workers ...
  Generating static pages using 3 workers (0/8) ...
  Generating static pages using 3 workers (2/8) 
  Generating static pages using 3 workers (4/8) 
  Generating static pages using 3 workers (6/8) 
✓ Generating static pages using 3 workers (8/8) in 254ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /icon.svg
├ ○ /manifest.webmanifest
├ ○ /resume
├ ○ /robots.txt
└ ○ /sitemap.xml


○  (Static)  prerendered as static content


> jamal-portfolio@0.1.0 postbuild
> node scripts/strip-next-runtime.mjs

Stripped Next runtime from out/index.html

> jamal-portfolio@0.1.0 typecheck
> tsc --noEmit


```

## Lighthouse log

```text

```

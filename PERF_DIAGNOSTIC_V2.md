# Performance diagnostic v2

## Outcomes

- Install: success
- Check: success
- Server: success
- Browser: success
- Lighthouse: success

## Scores

```json
{
  "mobile": {
    "performance": 53,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100,
    "fcp": "1.6 s",
    "lcp": "5.5 s",
    "tbt": "1,370 ms",
    "cls": "0",
    "speedIndex": "3.5 s"
  },
  "desktop": {
    "performance": 99,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100,
    "fcp": "0.4 s",
    "lcp": "1.0 s",
    "tbt": "0 ms",
    "cls": "0",
    "speedIndex": "0.4 s"
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
> node scripts/generate-resume.mjs

Generated /home/runner/work/jamal-portfolio/jamal-portfolio/public/Jamal_Yaqoob_Resume.pdf

> jamal-portfolio@0.1.0 build
> next build

⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

▲ Next.js 16.2.10 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 2.9s
  Running TypeScript ...
  Finished TypeScript in 3.7s ...
  Collecting page data using 3 workers ...
  Generating static pages using 3 workers (0/8) ...
  Generating static pages using 3 workers (2/8) 
  Generating static pages using 3 workers (4/8) 
  Generating static pages using 3 workers (6/8) 
✓ Generating static pages using 3 workers (8/8) in 303ms
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


> jamal-portfolio@0.1.0 typecheck
> tsc --noEmit


```

## Server log

```text

> jamal-portfolio@0.1.0 start
> node scripts/serve-static.mjs

Portfolio preview available at http://localhost:3000

```

## Lighthouse log

```text

```

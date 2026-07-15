# Performance audit v6

```json
{
  "outcomes": {
    "install": "success",
    "build": "success",
    "inspect": "success",
    "server": "success",
    "browser": "success",
    "interactions": "failure",
    "mobile": "success",
    "desktop": "success"
  },
  "export": {
    "bytes": 64762,
    "nextJs": 0,
    "scripts": 2,
    "styles": 1,
    "stylesheets": 0,
    "portfolio": 1
  },
  "mobile": {
    "performance": 81,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100,
    "fcp": "1.1 s",
    "lcp": "1.9 s",
    "tbt": "770 ms",
    "cls": "0",
    "speedIndex": "1.6 s",
    "failed": [
      {
        "id": "mainthread-work-breakdown",
        "title": "Minimize main-thread work",
        "score": 0,
        "displayValue": "2.3 s"
      },
      {
        "id": "label-content-name-mismatch",
        "title": "Elements with visible text labels do not have matching accessible names.",
        "score": 0
      },
      {
        "id": "uses-text-compression",
        "title": "Enable text compression",
        "score": 0,
        "displayValue": "Est savings of 57 KiB"
      },
      {
        "id": "forced-reflow-insight",
        "title": "Forced reflow",
        "score": 0
      },
      {
        "id": "network-dependency-tree-insight",
        "title": "Network dependency tree",
        "score": 0
      },
      {
        "id": "max-potential-fid",
        "title": "Max Potential First Input Delay",
        "score": 0.17,
        "displayValue": "400 ms"
      },
      {
        "id": "total-blocking-time",
        "title": "Total Blocking Time",
        "score": 0.38,
        "displayValue": "770 ms"
      },
      {
        "id": "offscreen-images",
        "title": "Defer offscreen images",
        "score": 0.5,
        "displayValue": "Est savings of 8 KiB"
      },
      {
        "id": "unused-css-rules",
        "title": "Reduce unused CSS",
        "score": 0.5,
        "displayValue": "Est savings of 14 KiB"
      },
      {
        "id": "document-latency-insight",
        "title": "Document request latency",
        "score": 0.5,
        "displayValue": "Est savings of 42 KiB"
      },
      {
        "id": "largest-contentful-paint",
        "title": "Largest Contentful Paint",
        "score": 0.98,
        "displayValue": "1.9 s"
      },
      {
        "id": "first-contentful-paint",
        "title": "First Contentful Paint",
        "score": 0.99,
        "displayValue": "1.1 s"
      },
      {
        "id": "interactive",
        "title": "Time to Interactive",
        "score": 0.99,
        "displayValue": "2.3 s"
      }
    ]
  },
  "desktop": {
    "performance": 100,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100,
    "fcp": "0.3 s",
    "lcp": "0.3 s",
    "tbt": "0 ms",
    "cls": "0",
    "speedIndex": "0.3 s",
    "failed": [
      {
        "id": "label-content-name-mismatch",
        "title": "Elements with visible text labels do not have matching accessible names.",
        "score": 0
      },
      {
        "id": "uses-text-compression",
        "title": "Enable text compression",
        "score": 0,
        "displayValue": "Est savings of 57 KiB"
      },
      {
        "id": "lcp-discovery-insight",
        "title": "LCP request discovery",
        "score": 0
      },
      {
        "id": "network-dependency-tree-insight",
        "title": "Network dependency tree",
        "score": 0
      },
      {
        "id": "unused-css-rules",
        "title": "Reduce unused CSS",
        "score": 0.5,
        "displayValue": "Est savings of 16 KiB"
      },
      {
        "id": "document-latency-insight",
        "title": "Document request latency",
        "score": 0.5,
        "displayValue": "Est savings of 42 KiB"
      }
    ]
  }
}
```

## Browser diagnostic

```json
not available
```

## Build log

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
✓ Compiled successfully in 2.6s
  Running TypeScript ...
  Finished TypeScript in 3.4s ...
  Collecting page data using 3 workers ...
  Generating static pages using 3 workers (0/8) ...
  Generating static pages using 3 workers (2/8) 
  Generating static pages using 3 workers (4/8) 
  Generating static pages using 3 workers (6/8) 
✓ Generating static pages using 3 workers (8/8) in 264ms
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

Inlined critical CSS and stripped Next runtime from out/index.html

> jamal-portfolio@0.1.0 typecheck
> tsc --noEmit


```

## Mobile log

```text

```

# Performance audit v7

```json
{
  "export": {
    "bytes": 64762,
    "nextJs": 0,
    "scripts": 2,
    "stylesheets": 0
  },
  "mobile": {
    "performance": 100,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100,
    "fcp": "0.7 s",
    "lcp": "1.0 s",
    "tbt": "30 ms",
    "cls": "0",
    "speedIndex": "0.7 s",
    "failed": [
      {
        "id": "label-content-name-mismatch",
        "title": "Elements with visible text labels do not have matching accessible names.",
        "score": 0
      },
      {
        "id": "offscreen-images",
        "title": "Defer offscreen images",
        "score": 0.5,
        "displayValue": "Est savings of 8 KiB"
      },
      {
        "id": "max-potential-fid",
        "title": "Max Potential First Input Delay",
        "score": 0.99,
        "displayValue": "80 ms"
      }
    ]
  },
  "desktop": {
    "performance": 100,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100,
    "fcp": "0.2 s",
    "lcp": "0.2 s",
    "tbt": "0 ms",
    "cls": "0",
    "speedIndex": "0.2 s",
    "failed": [
      {
        "id": "label-content-name-mismatch",
        "title": "Elements with visible text labels do not have matching accessible names.",
        "score": 0
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
      }
    ]
  },
  "interactions": null
}
```

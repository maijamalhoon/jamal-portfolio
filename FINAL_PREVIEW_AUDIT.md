# Final preview release audit

Audited: 2026-07-15T18:52:42.999Z

## Outcomes

```json
{
  "build": "success",
  "server": "success",
  "browser": "success",
  "lighthouse": "failure",
  "ui": "success"
}
```

## Lighthouse

```json
{
  "mobile": {
    "performance": 77,
    "accessibility": 94,
    "bestPractices": 100,
    "seo": 100,
    "fcp": "0.8 s",
    "lcp": "1.8 s",
    "tbt": "1,060 ms",
    "cls": "0",
    "speedIndex": "2.7 s"
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
    "speedIndex": "0.2 s"
  }
}
```

## Responsive UI

```json
[
  {
    "device": "mobile",
    "viewport": "390x844",
    "errors": []
  },
  {
    "device": "tablet",
    "viewport": "768x1024",
    "errors": []
  },
  {
    "device": "desktop",
    "viewport": "1440x900",
    "errors": []
  }
]
```

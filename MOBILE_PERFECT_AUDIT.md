# Optimized mobile release audit

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
    "performance": 84,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100,
    "fcp": "0.8 s",
    "lcp": "1.5 s",
    "tbt": "640 ms",
    "cls": "0",
    "speedIndex": "1.1 s"
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

## UI

```json
[
  {
    "device": "mobile",
    "errors": []
  },
  {
    "device": "tablet",
    "errors": []
  },
  {
    "device": "desktop",
    "errors": []
  }
]
```

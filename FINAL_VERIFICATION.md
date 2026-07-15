# Final verified portfolio audit

```json
{
  "outcomes": {
    "install": "success",
    "build": "success",
    "server": "success",
    "browser": "success",
    "interactions": "failure",
    "mobile": "success",
    "desktop": "success"
  },
  "mobile": {
    "performance": 49,
    "accessibility": 94,
    "bestPractices": 100,
    "seo": 100,
    "fcp": "1.6 s",
    "lcp": "4.8 s",
    "tbt": "4,950 ms",
    "cls": "0",
    "speedIndex": "4.6 s"
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
  },
  "interactions": null
}
```

## UI log

```text
node:internal/modules/package_json_reader:314
  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
        ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@playwright/test' imported from /tmp/ui.mjs
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:855:18)
    at defaultResolve (node:internal/modules/esm/resolve:985:11)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:724:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:320:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:182:49) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v22.23.1

```

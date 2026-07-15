# Final responsive UI verification

```json
{
  "outcomes": {
    "install": "success",
    "build": "success",
    "server": "success",
    "browser": "success",
    "ui": "failure"
  },
  "results": [
    {
      "device": {
        "name": "mobile",
        "width": 390,
        "height": 844,
        "screenshot": "public/preview-mobile.png"
      },
      "errors": [
        "locator.click: Timeout 30000ms exceeded.\nCall log:\n  - waiting for locator('[data-contact-open]').first()\n    - locator resolved to <button type=\"button\" class=\"connect-button\" data-contact-open=\"true\">…</button>\n  - attempting click action\n    2 × waiting for element to be visible, enabled and stable\n      - element is not visible\n    - retrying click action\n    - waiting 20ms\n    2 × waiting for element to be visible, enabled and stable\n      - element is not visible\n    - retrying click action\n      - waiting 100ms\n    56 × waiting for element to be visible, enabled and stable\n       - element is not visible\n     - retrying click action\n       - waiting 500ms\n\n    at /home/runner/work/jamal-portfolio/jamal-portfolio/final-ui-v12.mjs:38:57"
      ]
    },
    {
      "device": {
        "name": "tablet",
        "width": 768,
        "height": 1024
      },
      "errors": [
        "locator.click: Timeout 30000ms exceeded.\nCall log:\n  - waiting for locator('[data-contact-open]').first()\n    - locator resolved to <button type=\"button\" class=\"connect-button\" data-contact-open=\"true\">…</button>\n  - attempting click action\n    2 × waiting for element to be visible, enabled and stable\n      - element is not visible\n    - retrying click action\n    - waiting 20ms\n    2 × waiting for element to be visible, enabled and stable\n      - element is not visible\n    - retrying click action\n      - waiting 100ms\n    56 × waiting for element to be visible, enabled and stable\n       - element is not visible\n     - retrying click action\n       - waiting 500ms\n\n    at /home/runner/work/jamal-portfolio/jamal-portfolio/final-ui-v12.mjs:38:57"
      ]
    },
    {
      "device": {
        "name": "desktop",
        "width": 1440,
        "height": 900,
        "screenshot": "public/preview-desktop.png"
      },
      "errors": []
    }
  ]
}
```

## UI log

```text
[
  {
    device: {
      name: 'mobile',
      width: 390,
      height: 844,
      screenshot: 'public/preview-mobile.png'
    },
    errors: [
      'locator.click: Timeout 30000ms exceeded.\n' +
        'Call log:\n' +
        "  - waiting for locator('[data-contact-open]').first()\n" +
        '    - locator resolved to <button type="button" class="connect-button" data-contact-open="true">…</button>\n' +
        '  - attempting click action\n' +
        '    2 × waiting for element to be visible, enabled and stable\n' +
        '      - element is not visible\n' +
        '    - retrying click action\n' +
        '    - waiting 20ms\n' +
        '    2 × waiting for element to be visible, enabled and stable\n' +
        '      - element is not visible\n' +
        '    - retrying click action\n' +
        '      - waiting 100ms\n' +
        '    56 × waiting for element to be visible, enabled and stable\n' +
        '       - element is not visible\n' +
        '     - retrying click action\n' +
        '       - waiting 500ms\n' +
        '\n' +
        '    at /home/runner/work/jamal-portfolio/jamal-portfolio/final-ui-v12.mjs:38:57'
    ]
  },
  {
    device: { name: 'tablet', width: 768, height: 1024 },
    errors: [
      'locator.click: Timeout 30000ms exceeded.\n' +
        'Call log:\n' +
        "  - waiting for locator('[data-contact-open]').first()\n" +
        '    - locator resolved to <button type="button" class="connect-button" data-contact-open="true">…</button>\n' +
        '  - attempting click action\n' +
        '    2 × waiting for element to be visible, enabled and stable\n' +
        '      - element is not visible\n' +
        '    - retrying click action\n' +
        '    - waiting 20ms\n' +
        '    2 × waiting for element to be visible, enabled and stable\n' +
        '      - element is not visible\n' +
        '    - retrying click action\n' +
        '      - waiting 100ms\n' +
        '    56 × waiting for element to be visible, enabled and stable\n' +
        '       - element is not visible\n' +
        '     - retrying click action\n' +
        '       - waiting 500ms\n' +
        '\n' +
        '    at /home/runner/work/jamal-portfolio/jamal-portfolio/final-ui-v12.mjs:38:57'
    ]
  },
  {
    device: {
      name: 'desktop',
      width: 1440,
      height: 900,
      screenshot: 'public/preview-desktop.png'
    },
    errors: []
  }
]

```

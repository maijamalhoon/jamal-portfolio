# Mobile Lighthouse diagnostic

## Categories

```json
{
  "performance": 94,
  "accessibility": 94,
  "best-practices": 100,
  "seo": 100
}
```

## Accessibility failures

```json
[
  {
    "id": "button-name",
    "title": "Buttons do not have an accessible name",
    "score": 0,
    "weight": 10,
    "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.10/button-name).",
    "details": {
      "type": "table",
      "headings": [
        {
          "key": "node",
          "valueType": "node",
          "subItemsHeading": {
            "key": "relatedNode",
            "valueType": "node"
          },
          "label": "Failing Elements"
        }
      ],
      "items": [
        {
          "node": {
            "type": "node",
            "lhId": "1-0-BUTTON",
            "path": "1,HTML,1,BODY,2,HEADER,2,DIV,0,BUTTON",
            "selector": "body > header.site-header > div.header-actions > button.theme-button",
            "boundingRect": {
              "top": 19,
              "bottom": 59,
              "left": 304,
              "right": 344,
              "width": 40,
              "height": 40
            },
            "snippet": "<button class=\"theme-button\" type=\"button\" data-theme-button=\"true\" aria-haspopup=\"menu\" aria-expanded=\"false\">",
            "nodeLabel": "body > header.site-header > div.header-actions > button.theme-button",
            "explanation": "Fix any of the following:\n  Element does not have inner text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element does not have an implicit (wrapped) <label>\n  Element does not have an explicit <label>\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\""
          }
        }
      ],
      "debugData": {
        "type": "debugdata",
        "impact": "critical",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ]
      }
    }
  },
  {
    "id": "label-content-name-mismatch",
    "title": "Elements with visible text labels do not have matching accessible names.",
    "score": 0,
    "weight": 0,
    "description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.10/label-content-name-mismatch).",
    "details": {
      "type": "table",
      "headings": [
        {
          "key": "node",
          "valueType": "node",
          "subItemsHeading": {
            "key": "relatedNode",
            "valueType": "node"
          },
          "label": "Failing Elements"
        }
      ],
      "items": [
        {
          "node": {
            "type": "node",
            "lhId": "1-1-A",
            "path": "1,HTML,1,BODY,2,HEADER,0,A",
            "selector": "body > header.site-header > a.brand",
            "boundingRect": {
              "top": 21,
              "bottom": 57,
              "left": 22,
              "right": 284,
              "width": 262,
              "height": 36
            },
            "snippet": "<a class=\"brand\" href=\"#home\" aria-label=\"Jamal Yaqoob home\">",
            "nodeLabel": "JY\nJamal Yaqoob",
            "explanation": "Fix any of the following:\n  Text inside the element is not included in the accessible name"
          }
        }
      ],
      "debugData": {
        "type": "debugdata",
        "impact": "serious",
        "tags": [
          "cat.semantics",
          "wcag21a",
          "wcag253",
          "EN-301-549",
          "EN-9.2.5.3",
          "RGAAv4",
          "RGAA-6.1.5",
          "experimental"
        ]
      }
    }
  }
]
```

## Performance details

```json
{
  "first-contentful-paint": {
    "score": 1,
    "displayValue": "0.7 s",
    "numericValue": 674.2787
  },
  "largest-contentful-paint": {
    "score": 1,
    "displayValue": "1.0 s",
    "numericValue": 980.5573999999999
  },
  "speed-index": {
    "score": 1,
    "displayValue": "0.7 s",
    "numericValue": 674.2787
  },
  "total-blocking-time": {
    "score": 0.81,
    "displayValue": "280 ms",
    "numericValue": 276.9999999999999
  },
  "cumulative-layout-shift": {
    "score": 1,
    "displayValue": "0",
    "numericValue": 0,
    "details": {
      "type": "debugdata",
      "items": [
        {
          "cumulativeLayoutShiftMainFrame": 0,
          "newEngineResult": {
            "cumulativeLayoutShift": 0,
            "cumulativeLayoutShiftMainFrame": 0
          },
          "newEngineResultDiffered": false
        }
      ]
    }
  },
  "interactive": {
    "score": 1,
    "displayValue": "1.2 s",
    "numericValue": 1233.8287
  },
  "max-potential-fid": {
    "score": 0.76,
    "displayValue": "170 ms",
    "numericValue": 174
  },
  "mainthread-work-breakdown": {
    "score": 1,
    "displayValue": "1.1 s",
    "numericValue": 1061.3839999999975,
    "details": {
      "type": "table",
      "headings": [
        {
          "key": "groupLabel",
          "valueType": "text",
          "label": "Category"
        },
        {
          "key": "duration",
          "valueType": "ms",
          "granularity": 1,
          "label": "Time Spent"
        }
      ],
      "items": [
        {
          "group": "other",
          "groupLabel": "Other",
          "duration": 643.5399999999976
        },
        {
          "group": "styleLayout",
          "groupLabel": "Style & Layout",
          "duration": 183.084
        },
        {
          "group": "paintCompositeRender",
          "groupLabel": "Rendering",
          "duration": 150.71200000000005
        },
        {
          "group": "parseHTML",
          "groupLabel": "Parse HTML & CSS",
          "duration": 43.367999999999995
        },
        {
          "group": "scriptEvaluation",
          "groupLabel": "Script Evaluation",
          "duration": 35.807999999999986
        },
        {
          "group": "scriptParseCompile",
          "groupLabel": "Script Parsing & Compilation",
          "duration": 4.872
        }
      ],
      "sortedBy": [
        "duration"
      ]
    }
  },
  "bootup-time": {
    "score": 1,
    "displayValue": "0.0 s",
    "numericValue": 28.295999999999985,
    "details": {
      "type": "table",
      "headings": [
        {
          "key": "url",
          "valueType": "url",
          "label": "URL"
        },
        {
          "key": "total",
          "granularity": 1,
          "valueType": "ms",
          "label": "Total CPU Time"
        },
        {
          "key": "scripting",
          "granularity": 1,
          "valueType": "ms",
          "label": "Script Evaluation"
        },
        {
          "key": "scriptParseCompile",
          "granularity": 1,
          "valueType": "ms",
          "label": "Script Parse"
        }
      ],
      "items": [
        {
          "url": "Unattributable",
          "total": 585.0239999999992,
          "scripting": 8.619999999999992,
          "scriptParseCompile": 0
        },
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/",
          "total": 458.52400000000006,
          "scripting": 16.455999999999992,
          "scriptParseCompile": 3.22
        }
      ],
      "summary": {
        "wastedMs": 28.295999999999985
      },
      "sortedBy": [
        "total"
      ]
    }
  },
  "long-tasks": {
    "score": 1,
    "displayValue": "5 long tasks found",
    "details": {
      "type": "table",
      "headings": [
        {
          "key": "url",
          "valueType": "url",
          "label": "URL"
        },
        {
          "key": "startTime",
          "valueType": "ms",
          "granularity": 1,
          "label": "Start Time"
        },
        {
          "key": "duration",
          "valueType": "ms",
          "granularity": 1,
          "label": "Duration"
        }
      ],
      "items": [
        {
          "url": "Unattributable",
          "duration": 174,
          "startTime": 865.2786999999998
        },
        {
          "url": "Unattributable",
          "duration": 167,
          "startTime": 1039.2786999999998
        },
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/",
          "duration": 114.99999999999989,
          "startTime": 750.2787
        },
        {
          "url": "Unattributable",
          "duration": 76,
          "startTime": 602.2787
        },
        {
          "url": "Unattributable",
          "duration": 64,
          "startTime": 1251.2786999999998
        }
      ],
      "sortedBy": [
        "duration"
      ],
      "skipSumming": [
        "startTime"
      ],
      "debugData": {
        "type": "debugdata",
        "urls": [
          "Unattributable",
          "http://127.0.0.1:3000/jamal-portfolio/"
        ],
        "tasks": [
          {
            "urlIndex": 0,
            "startTime": 865.3,
            "duration": 174,
            "other": 174,
            "paintCompositeRender": 0
          },
          {
            "urlIndex": 0,
            "startTime": 1039.3,
            "duration": 167,
            "other": 167
          },
          {
            "urlIndex": 1,
            "startTime": 750.3,
            "duration": 115,
            "other": 115,
            "paintCompositeRender": 0,
            "styleLayout": 0
          },
          {
            "urlIndex": 0,
            "startTime": 602.3,
            "duration": 76,
            "other": 76,
            "scriptEvaluation": 0
          },
          {
            "urlIndex": 0,
            "startTime": 1251.3,
            "duration": 64,
            "other": 64
          }
        ]
      }
    }
  },
  "diagnostics": {
    "score": 1,
    "details": {
      "type": "debugdata",
      "items": [
        {
          "numRequests": 6,
          "numScripts": 1,
          "numStylesheets": 0,
          "numFonts": 0,
          "numTasks": 348,
          "numTasksOver10ms": 8,
          "numTasksOver25ms": 3,
          "numTasksOver50ms": 1,
          "numTasksOver100ms": 0,
          "numTasksOver500ms": 0,
          "rtt": 0.0378,
          "throughput": 26679793.256387144,
          "maxRtt": 0.0378,
          "maxServerLatency": 2.2786999999999997,
          "totalByteWeight": 27100,
          "totalTaskTime": 265.3459999999998,
          "mainDocumentTransferSize": 13345
        }
      ]
    }
  },
  "network-requests": {
    "score": 1,
    "details": {
      "type": "table",
      "headings": [
        {
          "key": "url",
          "valueType": "url",
          "label": "URL"
        },
        {
          "key": "protocol",
          "valueType": "text",
          "label": "Protocol"
        },
        {
          "key": "networkRequestTime",
          "valueType": "ms",
          "granularity": 1,
          "label": "Network Request Time"
        },
        {
          "key": "networkEndTime",
          "valueType": "ms",
          "granularity": 1,
          "label": "Network End Time"
        },
        {
          "key": "transferSize",
          "valueType": "bytes",
          "displayUnit": "kb",
          "granularity": 1,
          "label": "Transfer Size"
        },
        {
          "key": "resourceSize",
          "valueType": "bytes",
          "displayUnit": "kb",
          "granularity": 1,
          "label": "Resource Size"
        },
        {
          "key": "statusCode",
          "valueType": "text",
          "label": "Status Code"
        },
        {
          "key": "mimeType",
          "valueType": "text",
          "label": "MIME Type"
        },
        {
          "key": "resourceType",
          "valueType": "text",
          "label": "Resource Type"
        }
      ],
      "items": [
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/",
          "sessionTargetType": "page",
          "protocol": "http/1.1",
          "rendererStartTime": 0,
          "networkRequestTime": 2.50099999998929,
          "networkEndTime": 8.922999999951571,
          "finished": true,
          "transferSize": 13345,
          "resourceSize": 64810,
          "statusCode": 200,
          "mimeType": "text/html",
          "resourceType": "Document",
          "priority": "VeryHigh",
          "experimentalFromMainFrame": true,
          "entity": "127.0.0.1"
        },
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/jamal-yaqoob.webp",
          "sessionTargetType": "page",
          "protocol": "http/1.1",
          "rendererStartTime": 29.984999999927823,
          "networkRequestTime": 32.50099999993108,
          "networkEndTime": 39.83799999993062,
          "finished": true,
          "transferSize": 8915,
          "resourceSize": 8664,
          "statusCode": 200,
          "mimeType": "image/webp",
          "resourceType": "Image",
          "priority": "Low",
          "isLinkPreload": true,
          "experimentalFromMainFrame": true,
          "entity": "127.0.0.1"
        },
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/portfolio.js",
          "sessionTargetType": "page",
          "protocol": "http/1.1",
          "rendererStartTime": 31.681999999971595,
          "networkRequestTime": 38.310999999928754,
          "networkEndTime": 42.478999999933876,
          "finished": true,
          "transferSize": 3316,
          "resourceSize": 9220,
          "statusCode": 200,
          "mimeType": "text/javascript",
          "resourceType": "Script",
          "priority": "Low",
          "experimentalFromMainFrame": true,
          "entity": "127.0.0.1"
        },
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/manifest.webmanifest",
          "sessionTargetType": "page",
          "protocol": "http/1.1",
          "rendererStartTime": 136.46299999998882,
          "networkRequestTime": 136.96899999992456,
          "networkEndTime": 142.70799999992596,
          "finished": true,
          "transferSize": 542,
          "resourceSize": 343,
          "statusCode": 200,
          "mimeType": "application/manifest+json",
          "resourceType": "Manifest",
          "priority": "Medium",
          "experimentalFromMainFrame": true,
          "entity": "127.0.0.1"
        },
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/icon.svg",
          "sessionTargetType": "page",
          "protocol": "http/1.1",
          "rendererStartTime": 185.35599999991246,
          "networkRequestTime": 185.83699999999953,
          "networkEndTime": 188.89399999997113,
          "finished": true,
          "transferSize": 491,
          "resourceSize": 247,
          "statusCode": 200,
          "mimeType": "image/svg+xml",
          "resourceType": "Other",
          "priority": "High",
          "experimentalFromMainFrame": true,
          "entity": "127.0.0.1"
        },
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/icon.svg",
          "sessionTargetType": "page",
          "protocol": "http/1.1",
          "rendererStartTime": 283.1499999999651,
          "networkRequestTime": 283.54099999996834,
          "networkEndTime": 286.4529999999795,
          "finished": true,
          "transferSize": 491,
          "resourceSize": 247,
          "statusCode": 200,
          "mimeType": "image/svg+xml",
          "resourceType": "Other",
          "priority": "High",
          "experimentalFromMainFrame": true,
          "entity": "127.0.0.1"
        }
      ],
      "debugData": {
        "type": "debugdata",
        "networkStartTimeTs": 330362991.00000006,
        "initiators": [
          {
            "type": "parser",
            "url": "http://127.0.0.1:3000/jamal-portfolio/",
            "lineNumber": 0,
            "columnNumber": 259
          },
          {
            "type": "parser",
            "url": "http://127.0.0.1:3000/jamal-portfolio/",
            "lineNumber": 2,
            "columnNumber": 2652
          },
          {
            "type": "parser",
            "url": "http://127.0.0.1:3000/jamal-portfolio/",
            "lineNumber": 2,
            "columnNumber": 35862
          }
        ]
      }
    }
  },
  "resource-summary": {
    "score": 1,
    "details": {
      "type": "table",
      "headings": [
        {
          "key": "label",
          "valueType": "text",
          "label": "Resource Type"
        },
        {
          "key": "requestCount",
          "valueType": "numeric",
          "label": "Requests"
        },
        {
          "key": "transferSize",
          "valueType": "bytes",
          "label": "Transfer Size"
        }
      ],
      "items": [
        {
          "resourceType": "total",
          "label": "Total",
          "requestCount": 6,
          "transferSize": 27100
        },
        {
          "resourceType": "document",
          "label": "Document",
          "requestCount": 1,
          "transferSize": 13345
        },
        {
          "resourceType": "image",
          "label": "Image",
          "requestCount": 1,
          "transferSize": 8915
        },
        {
          "resourceType": "script",
          "label": "Script",
          "requestCount": 1,
          "transferSize": 3316
        },
        {
          "resourceType": "other",
          "label": "Other",
          "requestCount": 3,
          "transferSize": 1524
        },
        {
          "resourceType": "stylesheet",
          "label": "Stylesheet",
          "requestCount": 0,
          "transferSize": 0
        },
        {
          "resourceType": "media",
          "label": "Media",
          "requestCount": 0,
          "transferSize": 0
        },
        {
          "resourceType": "font",
          "label": "Font",
          "requestCount": 0,
          "transferSize": 0
        },
        {
          "resourceType": "third-party",
          "label": "Third-party",
          "requestCount": 0,
          "transferSize": 0
        }
      ]
    }
  },
  "unused-css-rules": {
    "score": 1,
    "displayValue": "",
    "numericValue": 0,
    "details": {
      "type": "opportunity",
      "headings": [],
      "items": [],
      "overallSavingsMs": 0,
      "overallSavingsBytes": 0,
      "sortedBy": [
        "wastedBytes"
      ],
      "debugData": {
        "type": "debugdata",
        "metricSavings": {
          "FCP": 0,
          "LCP": 0
        }
      }
    }
  },
  "offscreen-images": {
    "score": 0.5,
    "displayValue": "Est savings of 8 KiB",
    "numericValue": 0,
    "details": {
      "type": "opportunity",
      "headings": [
        {
          "key": "node",
          "valueType": "node",
          "label": ""
        },
        {
          "key": "url",
          "valueType": "url",
          "label": "URL"
        },
        {
          "key": "totalBytes",
          "valueType": "bytes",
          "label": "Resource Size"
        },
        {
          "key": "wastedBytes",
          "valueType": "bytes",
          "label": "Est Savings"
        }
      ],
      "items": [
        {
          "node": {
            "type": "node",
            "lhId": "1-43-DIV",
            "path": "1,HTML,1,BODY,3,DIV,1,DIV",
            "selector": "body > div#mobile-menu > div.menu-portrait",
            "boundingRect": {
              "top": 0,
              "bottom": 0,
              "left": 0,
              "right": 0,
              "width": 0,
              "height": 0
            },
            "snippet": "<div class=\"menu-portrait\" style=\"background-image:url(/jamal-portfolio/jamal-yaqoob.webp)\" aria-hidden=\"true\">",
            "nodeLabel": "body > div#mobile-menu > div.menu-portrait"
          },
          "url": "http://127.0.0.1:3000/jamal-portfolio/jamal-yaqoob.webp",
          "requestStartTime": 330395.49199999997,
          "totalBytes": 8664,
          "wastedBytes": 8664,
          "wastedPercent": 100
        }
      ],
      "overallSavingsMs": 0,
      "overallSavingsBytes": 8664,
      "sortedBy": [
        "wastedBytes"
      ],
      "debugData": {
        "type": "debugdata",
        "metricSavings": {
          "FCP": 0,
          "LCP": 0
        }
      }
    }
  },
  "render-blocking-resources": {
    "score": 1,
    "numericValue": 0,
    "details": {
      "type": "opportunity",
      "headings": [],
      "items": [],
      "overallSavingsMs": 0
    }
  },
  "third-party-summary": {
    "score": null
  },
  "dom-size": {
    "score": 1,
    "displayValue": "597 elements",
    "numericValue": 597,
    "details": {
      "type": "table",
      "headings": [
        {
          "key": "statistic",
          "valueType": "text",
          "label": "Statistic"
        },
        {
          "key": "node",
          "valueType": "node",
          "label": "Element"
        },
        {
          "key": "value",
          "valueType": "numeric",
          "label": "Value"
        }
      ],
      "items": [
        {
          "statistic": "Total DOM Elements",
          "value": {
            "type": "numeric",
            "granularity": 1,
            "value": 597
          }
        },
        {
          "node": {
            "type": "node",
            "lhId": "1-40-path",
            "path": "1,HTML,1,BODY,4,MAIN,3,SECTION,1,DIV,0,ARTICLE,2,DIV,1,UL,0,LI,0,svg,0,path",
            "selector": "ul > li > svg.icon > path",
            "boundingRect": {
              "top": 3411,
              "bottom": 3418,
              "left": 77,
              "right": 87,
              "width": 9,
              "height": 7
            },
            "snippet": "<path d=\"m5 12 4 4L19 6\">",
            "nodeLabel": "ul > li > svg.icon > path"
          },
          "statistic": "Maximum DOM Depth",
          "value": {
            "type": "numeric",
            "granularity": 1,
            "value": 10
          }
        },
        {
          "node": {
            "type": "node",
            "lhId": "1-41-DIV",
            "path": "1,HTML,1,BODY,4,MAIN,1,DIV,0,DIV",
            "selector": "body > main#main > div.capability-strip > div",
            "boundingRect": {
              "top": 1352,
              "bottom": 1396,
              "left": -142,
              "right": 2403,
              "width": 2545,
              "height": 44
            },
            "snippet": "<div>",
            "nodeLabel": "BANK RECONCILIATION\n✦\nERP SYSTEMS\n✦\nFINANCIAL REPORTING\n✦\nPAYROLL\n✦\nDMS OPERATI…"
          },
          "statistic": "Maximum Child Elements",
          "value": {
            "type": "numeric",
            "granularity": 1,
            "value": 14
          }
        }
      ]
    }
  },
  "forced-reflow-insight": {
    "score": 1,
    "details": {
      "type": "list",
      "items": [
        {
          "type": "table",
          "headings": [
            {
              "key": "source",
              "valueType": "source-location",
              "label": "Source"
            },
            {
              "key": "reflowTime",
              "valueType": "ms",
              "granularity": 1,
              "label": "Total reflow time"
            }
          ],
          "items": []
        }
      ]
    }
  },
  "network-dependency-tree-insight": {
    "score": 0,
    "details": {
      "type": "list",
      "items": [
        {
          "type": "list-section",
          "value": {
            "type": "network-tree",
            "chains": {
              "3C7499ED80038749EF14F0458928BE17": {
                "url": "http://127.0.0.1:3000/jamal-portfolio/",
                "navStartToEndTime": 62,
                "transferSize": 13345,
                "isLongest": true,
                "children": {
                  "3510.10": {
                    "url": "http://127.0.0.1:3000/jamal-portfolio/manifest.webmanifest",
                    "navStartToEndTime": 227,
                    "transferSize": 542,
                    "isLongest": true,
                    "children": {}
                  }
                }
              }
            },
            "longestChain": {
              "duration": 227
            }
          }
        },
        {
          "type": "list-section",
          "title": "Preconnected origins",
          "description": "[preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/) hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.",
          "value": {
            "type": "text",
            "value": "no origins were preconnected"
          }
        },
        {
          "type": "list-section",
          "title": "Preconnect candidates",
          "description": "Add [preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/) hints to your most important origins, but try to use no more than 4.",
          "value": {
            "type": "text",
            "value": "No additional origins are good candidates for preconnecting"
          }
        }
      ]
    }
  }
}
```

# Mobile performance stability audit

```json
{
  "runs": [
    {
      "run": 1,
      "performance": 100,
      "accessibility": 100,
      "bestPractices": 100,
      "seo": 100,
      "fcp": 678.71155,
      "lcp": 903.4231,
      "tbt": 0,
      "cls": 0,
      "speedIndex": 678.71155,
      "longTasks": [
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/",
          "duration": 60,
          "startTime": 618.71155
        }
      ],
      "mainThread": [
        {
          "group": "styleLayout",
          "groupLabel": "Style & Layout",
          "duration": 112.976
        },
        {
          "group": "other",
          "groupLabel": "Other",
          "duration": 83.972
        },
        {
          "group": "scriptEvaluation",
          "groupLabel": "Script Evaluation",
          "duration": 14.54799999999999
        },
        {
          "group": "parseHTML",
          "groupLabel": "Parse HTML & CSS",
          "duration": 13.716
        },
        {
          "group": "paintCompositeRender",
          "groupLabel": "Rendering",
          "duration": 6.619999999999995
        },
        {
          "group": "scriptParseCompile",
          "groupLabel": "Script Parsing & Compilation",
          "duration": 2.132
        }
      ],
      "dom": [
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
              "left": 0,
              "right": 2545,
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
    },
    {
      "run": 2,
      "performance": 100,
      "accessibility": 100,
      "bestPractices": 100,
      "seo": 100,
      "fcp": 679.34845,
      "lcp": 902.6968999999999,
      "tbt": 0,
      "cls": 0,
      "speedIndex": 679.34845,
      "longTasks": [
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/",
          "duration": 58,
          "startTime": 621.34845
        }
      ],
      "mainThread": [
        {
          "group": "styleLayout",
          "groupLabel": "Style & Layout",
          "duration": 110.31599999999999
        },
        {
          "group": "other",
          "groupLabel": "Other",
          "duration": 86.38000000000015
        },
        {
          "group": "parseHTML",
          "groupLabel": "Parse HTML & CSS",
          "duration": 16.344
        },
        {
          "group": "scriptEvaluation",
          "groupLabel": "Script Evaluation",
          "duration": 14.003999999999987
        },
        {
          "group": "paintCompositeRender",
          "groupLabel": "Rendering",
          "duration": 7.035999999999995
        },
        {
          "group": "scriptParseCompile",
          "groupLabel": "Script Parsing & Compilation",
          "duration": 2.288
        }
      ],
      "dom": [
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
              "left": 0,
              "right": 2545,
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
    },
    {
      "run": 3,
      "performance": 100,
      "accessibility": 100,
      "bestPractices": 100,
      "seo": 100,
      "fcp": 672.3361,
      "lcp": 902.6722,
      "tbt": 0,
      "cls": 0,
      "speedIndex": 672.3361,
      "longTasks": [
        {
          "url": "http://127.0.0.1:3000/jamal-portfolio/",
          "duration": 53,
          "startTime": 619.3361
        }
      ],
      "mainThread": [
        {
          "group": "styleLayout",
          "groupLabel": "Style & Layout",
          "duration": 103.66799999999999
        },
        {
          "group": "other",
          "groupLabel": "Other",
          "duration": 93.82799999999997
        },
        {
          "group": "parseHTML",
          "groupLabel": "Parse HTML & CSS",
          "duration": 15.504
        },
        {
          "group": "scriptEvaluation",
          "groupLabel": "Script Evaluation",
          "duration": 13.383999999999993
        },
        {
          "group": "paintCompositeRender",
          "groupLabel": "Rendering",
          "duration": 7.115999999999996
        },
        {
          "group": "scriptParseCompile",
          "groupLabel": "Script Parsing & Compilation",
          "duration": 2.8120000000000003
        }
      ],
      "dom": [
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
              "left": 0,
              "right": 2545,
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
  ],
  "median": {
    "performance": 100,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100,
    "fcp": 678.71155,
    "lcp": 902.6968999999999,
    "tbt": 0,
    "cls": 0,
    "speedIndex": 678.71155
  }
}
```

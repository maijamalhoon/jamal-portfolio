# Mobile Performance Diagnostic

Performance score: **43**

## Core metrics

| Metric | Value | Score |
|---|---:|---:|
| First Contentful Paint | 2.7 s | 60 |
| Largest Contentful Paint | 7.8 s | 3 |
| Speed Index | 5.8 s | 50 |
| Total Blocking Time | 1,210 ms | 20 |
| Time to Interactive | 7.8 s | 44 |
| Cumulative Layout Shift | 0 | 100 |
| Max Potential First Input Delay | 530 ms | 7 |

## High-impact diagnostics

### Initial server response time was short
- Score: 100
- Value: Root document took 0 ms
- Description: Keep the server response time for the main document short because all other requests depend on it. .
- Top items:
  - {"url":"http://127.0.0.1:3000/"}

### Eliminate render-blocking resources
- Score: 0
- Value: Est savings of 150 ms
- Description: Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. .
- Top items:
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/28_3rmemal9-w.css","totalBytes":79102,"wastedMs":452}

### Reduce unused JavaScript
- Score: 0
- Value: Est savings of 338 KiB
- Description: Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. .
- Top items:
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3w13m1zpukyqh.js","totalBytes":203767,"wastedBytes":95649}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/0iec5q4ack_04.js","totalBytes":227315,"wastedBytes":83719}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3snasnqn8imoo.js","totalBytes":145207,"wastedBytes":81780}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/14mrh2-p_w84d.js","totalBytes":54644,"wastedBytes":46566}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/15orcrkp-_9ct.js","totalBytes":50702,"wastedBytes":38313}

### Reduce unused CSS
- Score: 0
- Value: Est savings of 17 KiB
- Description: Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. .
- Top items:
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/28_3rmemal9-w.css","wastedBytes":17006,"totalBytes":78825}

### Avoids enormous network payloads
- Score: 100
- Value: Total size was 941 KiB
- Description: Large network payloads cost users real money and are highly correlated with long load times. .
- Top items:
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/0iec5q4ack_04.js","totalBytes":227617}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3w13m1zpukyqh.js","totalBytes":204122}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3snasnqn8imoo.js","totalBytes":145500}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/28_3rmemal9-w.css","totalBytes":79102}
  - {"url":"http://127.0.0.1:3000/","totalBytes":70064}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/14mrh2-p_w84d.js","totalBytes":54921}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/15orcrkp-_9ct.js","totalBytes":50977}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/media/manrope-latin-wght-normal.1p_a2k8qd5zhp.woff2","totalBytes":25091}

### Minimize main-thread work
- Score: 0
- Value: 4.9 s
- Description: Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. 
- Top items:
  - {"duration":1868.0039999999872}
  - {"duration":1235.7319999999922}
  - {"duration":1211.0600000000002}
  - {"duration":274.324}
  - {"duration":176.09599999999963}
  - {"duration":108.30000000000001}

### Reduce JavaScript execution time
- Score: 0
- Value: 1.9 s
- Description: Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. .
- Top items:
  - {"url":"http://127.0.0.1:3000/","scriptParseCompile":29.999999999999993}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/0iec5q4ack_04.js","scriptParseCompile":30.472}
  - {"url":"Unattributable","scriptParseCompile":0}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3snasnqn8imoo.js","scriptParseCompile":11.008000000000001}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3w13m1zpukyqh.js","scriptParseCompile":18.008}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/turbopack-3a1hrhvkz1ivq.js","scriptParseCompile":1.504}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/28_3rmemal9-w.css","scriptParseCompile":0}

### Avoid long main-thread tasks
- Score: 100
- Value: 16 long tasks found
- Description: Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. 
- Top items:
  - {"url":"http://127.0.0.1:3000/","duration":656}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3snasnqn8imoo.js","duration":530}
  - {"url":"Unattributable","duration":468.0000000000001}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/0iec5q4ack_04.js","duration":329}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3w13m1zpukyqh.js","duration":236}
  - {"url":"http://127.0.0.1:3000/","duration":185}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/turbopack-3a1hrhvkz1ivq.js","duration":159}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/0iec5q4ack_04.js","duration":159}

### Network Requests
- Score: 100
- Description: Lists the network requests that were made during page load.
- Top items:
  - {"url":"http://127.0.0.1:3000/","transferSize":70064,"resourceSize":69813,"entity":"127.0.0.1"}
  - {"url":"https://avatars.githubusercontent.com/u/150429791?v=4","transferSize":18672,"resourceSize":18080,"entity":"GitHub"}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/28_3rmemal9-w.css","transferSize":79102,"resourceSize":78825,"entity":"127.0.0.1"}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3ll07n217cgxf.js","transferSize":22741,"resourceSize":22466,"entity":"127.0.0.1"}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/15orcrkp-_9ct.js","transferSize":50977,"resourceSize":50702,"entity":"127.0.0.1"}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/0iec5q4ack_04.js","transferSize":227617,"resourceSize":227315,"entity":"127.0.0.1"}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/3snasnqn8imoo.js","transferSize":145500,"resourceSize":145207,"entity":"127.0.0.1"}
  - {"url":"http://127.0.0.1:3000/jamal-portfolio/_next/static/chunks/turbopack-3a1hrhvkz1ivq.js","transferSize":10871,"resourceSize":10596,"entity":"127.0.0.1"}

### Minimize third-party usage
- Score: 100
- Value: Third-party code blocked the main thread for 0 ms
- Description: Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. .
- Top items:
  - {"mainThreadTime":0,"transferSize":23213,"entity":"GitHub"}

### Largest Contentful Paint element
- Score: 0
- Value: 7,780 ms
- Description: This is the largest contentful element painted within the viewport. 
- Top items:
  - {}
  - {}

### Largest Contentful Paint image was not lazily loaded
- Score: 100
- Description: Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. .
- Top items:
  - {}

### Properly size images
- Score: 100
- Description: Serve images that are appropriately-sized to save cellular data and improve load time. .

### Serve images in next-gen formats
- Score: 100
- Description: Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. .

### Defer offscreen images
- Score: 100
- Description: Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. .

### Use video formats for animated content
- Score: 100
- Description: Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. 

### All text remains visible during webfont loads
- Score: 100
- Description: Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. .

### Avoids an excessive DOM size
- Score: 100
- Value: 709 elements
- Description: A large DOM will increase memory usage, cause longer , and produce costly . .
- Top items:
  - {}
  - {}
  - {}

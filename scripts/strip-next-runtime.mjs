import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const targets = ["out/index.html"];
for (const target of targets) {
  if (!existsSync(target)) continue;
  let html = readFileSync(target, "utf8");

  html = html.replace(/<link\b(?=[^>]*href=["'][^"']*\/_next\/static\/[^"']*\.js[^"']*["'])[^>]*>/gi, "");

  html = html.replace(/<link\b(?=[^>]*rel=["']stylesheet["'])(?=[^>]*href=["']([^"']+\.css(?:\?[^"']*)?)["'])[^>]*>/gi, (full, href) => {
    const pathname = href.split("?")[0].replace(/^https?:\/\/[^/]+/i, "");
    const relative = pathname.replace(/^\/jamal-portfolio\//, "").replace(/^\//, "");
    const cssPath = join("out", relative);
    if (!existsSync(cssPath)) return full;
    const css = readFileSync(cssPath, "utf8").replace(/<\/style/gi, "<\\/style");
    return `<style data-critical-css>${css}</style>`;
  });

  html = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (full, attrs) => {
    const src = attrs.match(/src=["']([^"']+)["']/i)?.[1] ?? "";
    const type = attrs.match(/type=["']([^"']+)["']/i)?.[1] ?? "";
    if (type === "application/ld+json") return full;
    if (/\bid=["']theme-boot["']/i.test(attrs)) return full;
    if (src.endsWith("/portfolio.js") || src === "portfolio.js") return full;
    return "";
  });

  html = html.replace(/\sdata-next-hide-fouc(?:=["'][^"']*["'])?/gi, "");
  writeFileSync(target, html);
  console.log(`Inlined critical CSS and stripped Next runtime from ${target}`);
}

import { readFileSync, writeFileSync, existsSync } from "node:fs";

const targets = ["out/index.html"];
for (const target of targets) {
  if (!existsSync(target)) continue;
  let html = readFileSync(target, "utf8");
  html = html.replace(/<link\b[^>]*(?:rel=["'](?:modulepreload|preload)["'])[^>]*href=["'][^"']*\/_next\/static\/[^"']*\.js[^"']*["'][^>]*>/gi, "");
  html = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (full, attrs, body) => {
    const src = attrs.match(/src=["']([^"']+)["']/i)?.[1] ?? "";
    const type = attrs.match(/type=["']([^"']+)["']/i)?.[1] ?? "";
    if (type === "application/ld+json") return full;
    if (src.endsWith("/portfolio.js") || src === "portfolio.js") return full;
    if (!src && body.includes("jamal-theme")) return full;
    return "";
  });
  html = html.replace(/\sdata-next-hide-fouc(?:=["'][^"']*["'])?/gi, "");
  writeFileSync(target, html);
  console.log(`Stripped Next runtime from ${target}`);
}

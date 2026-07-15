import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { createGzip } from "node:zlib";

const root = resolve(process.cwd(), "out");
const port = Number.parseInt(process.env.PORT ?? "3000", 10);
const supportedBasePaths = ["/jamal-portfolio"];

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".vcf": "text/vcard; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
};

const compressible = new Set([".css", ".html", ".js", ".json", ".map", ".svg", ".txt", ".vcf", ".webmanifest"]);

function stripSupportedBasePath(pathname) {
  for (const basePath of supportedBasePaths) {
    if (pathname === basePath) return "/";
    if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length) || "/";
  }
  return pathname;
}

function resolveRequest(pathname) {
  const decoded = decodeURIComponent(pathname).replaceAll("\\", "/");
  const routedPath = stripSupportedBasePath(decoded);
  const safePath = normalize(routedPath).replace(/^([.][.][/\\])+/, "");
  const requested = resolve(root, `.${sep}${safePath}`);
  if (!requested.startsWith(root + sep) && requested !== root) return null;

  const candidates = [requested];
  if (routedPath.endsWith("/")) candidates.unshift(join(requested, "index.html"));
  else candidates.push(join(requested, "index.html"));

  return candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile()) ?? null;
}

const server = createServer((request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);
    const file = resolveRequest(url.pathname);
    const fallback = join(root, "404.html");
    const target = file ?? (existsSync(fallback) ? fallback : null);

    if (!target) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    const extension = extname(target).toLowerCase();
    const immutable = url.pathname.includes("/_next/static/");
    const acceptsGzip = String(request.headers["accept-encoding"] ?? "").includes("gzip");
    const shouldCompress = acceptsGzip && compressible.has(extension);
    const headers = {
      "Content-Type": mimeTypes[extension] ?? "application/octet-stream",
      "Cache-Control": immutable ? "public, max-age=31536000, immutable" : "no-cache",
      "X-Content-Type-Options": "nosniff",
      Vary: "Accept-Encoding",
    };
    if (shouldCompress) headers["Content-Encoding"] = "gzip";
    response.writeHead(file ? 200 : 404, headers);
    const stream = createReadStream(target);
    if (shouldCompress) stream.pipe(createGzip({ level: 9 })).pipe(response);
    else stream.pipe(response);
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Bad request");
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Portfolio preview available at http://localhost:${port}`);
});

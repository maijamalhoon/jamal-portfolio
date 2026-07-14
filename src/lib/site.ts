export const basePath = process.env.GITHUB_ACTIONS === "true" ? "/jamal-portfolio" : "";

const githubPagesUrl = "https://maijamalhoon.github.io/jamal-portfolio";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : githubPagesUrl);

export const basePath = process.env.GITHUB_ACTIONS === "true" ? "/jamal-portfolio" : "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://jamal-portfolio.vercel.app");

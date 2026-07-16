export const basePath = process.env.GITHUB_ACTIONS === "true" ? "/jamal-portfolio" : "";

const githubPagesUrl = "https://maijamalhoon.github.io/jamal-portfolio";

// Keep one permanent canonical URL across every build target.
// This prevents deleted or temporary Vercel aliases from becoming the public site URL.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? githubPagesUrl;

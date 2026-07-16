import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import { basePath, siteUrl } from "@/lib/site";
import "./portfolio.css";
import "./performance-overrides.css";
import "./stable-functionality.css";

const themeBoot = `(() => { try { const t = localStorage.getItem('jamal-theme'); const valid = ['noir','cobalt','ember','ivory']; document.documentElement.dataset.theme = valid.includes(t) ? t : 'noir'; } catch { document.documentElement.dataset.theme = 'noir'; } })();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jamal Yaqoob — Accounting, Finance & Systems",
  description: "Portfolio of Jamal Yaqoob, an accounting and finance professional in Karachi combining dealership operations, finance systems and computer science.",
  keywords: ["Jamal Yaqoob", "Assistant Accountant Karachi", "Accounting portfolio", "Finance systems", "ERP", "DMS", "Bank reconciliation"],
  authors: [{ name: "Jamal Yaqoob", url: siteUrl }],
  creator: "Jamal Yaqoob",
  applicationName: "Jamal Yaqoob Portfolio",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    url: siteUrl,
    siteName: "Jamal Yaqoob Portfolio",
    title: "Jamal Yaqoob — Accounting, Finance & Systems",
    description: "Precise finance operations, reliable systems and thoughtful digital products.",
    type: "website",
    locale: "en_PK",
    images: [{ url: "https://avatars.githubusercontent.com/u/150429791?v=4", width: 410, height: 410, alt: "Jamal Yaqoob" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamal Yaqoob — Accounting, Finance & Systems",
    description: "Precise finance operations, reliable systems and thoughtful digital products.",
    images: ["https://avatars.githubusercontent.com/u/150429791?v=4"],
  },
  alternates: { canonical: siteUrl },
  icons: { icon: [{ url: `${basePath}/icon.svg`, type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070709" },
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="noir" suppressHydrationWarning>
      <head>
        <link rel="preload" href={`${basePath}/jamal-yaqoob.webp`} as="image" type="image/webp" />
        <script id="theme-boot" dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <script src={`${basePath}/portfolio.js`} defer />
        <script src={`${basePath}/stable-functionality.js`} defer />
      </head>
      <body>{children}</body>
    </html>
  );
}

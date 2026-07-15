import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import { basePath, siteUrl } from "@/lib/site";
import "./globals.css";

const themeBootScript = `(() => {
  try {
    const validThemes = ["noir", "cobalt", "ember", "ivory"];
    const savedTheme = localStorage.getItem("jamal-theme");
    document.documentElement.dataset.theme = validThemes.includes(savedTheme) ? savedTheme : "noir";
  } catch {
    document.documentElement.dataset.theme = "noir";
  }
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jamal Yaqoob — Accounting, Finance & Systems",
    template: "%s · Jamal Yaqoob",
  },
  description:
    "Portfolio of Jamal Yaqoob, an accounting and finance professional in Karachi combining dealership operations, ERP/DMS expertise and computer science.",
  keywords: [
    "Jamal Yaqoob",
    "Assistant Accountant Karachi",
    "Accounting portfolio",
    "Finance systems",
    "ERP",
    "DMS",
    "Bank reconciliation",
  ],
  authors: [{ name: "Jamal Yaqoob", url: siteUrl }],
  creator: "Jamal Yaqoob",
  applicationName: "Jamal Yaqoob Portfolio",
  category: "portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
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
  icons: {
    icon: [{ url: `${basePath}/icon.svg`, type: "image/svg+xml" }],
    shortcut: `${basePath}/icon.svg`,
  },
  appleWebApp: {
    capable: true,
    title: "Jamal Yaqoob",
    statusBarStyle: "black-translucent",
  },
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
        <link rel="preconnect" href="https://avatars.githubusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//api.github.com" />
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

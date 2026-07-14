import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jamal-yaqoob.vercel.app"),
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
  authors: [{ name: "Jamal Yaqoob" }],
  creator: "Jamal Yaqoob",
  openGraph: {
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
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070709" },
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="noir" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

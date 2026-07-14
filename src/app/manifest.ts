import type { MetadataRoute } from "next";
import { basePath } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jamal Yaqoob — Portfolio",
    short_name: "Jamal Yaqoob",
    description: "Accounting, finance and systems portfolio.",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#070709",
    theme_color: "#caff4a",
    icons: [{ src: `${basePath}/icon.svg`, sizes: "any", type: "image/svg+xml" }],
  };
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Portfolio`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/svk.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/svk.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

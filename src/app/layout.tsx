import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import { BackgroundMatrix } from "@/components/ui/background-matrix";
import { JsonLd } from "@/components/json-ld";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title.split("|")[0].trim()}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    "Senior Full Stack Developer",
    "Full Stack Developer Portfolio",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Scalable Systems",
    "Bengaluru Developer",
    "Software Engineer India",
    "portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Senior Full Stack Developer`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} — Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/svk.png",
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Senior Full Stack Developer`,
    description: siteConfig.description,
    images: ["/svk.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "MtTZgPguua5yFv3AybdrNJ-yHwwfKj3dg4v2q_OHccg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <BackgroundMatrix />
          <div className="relative z-10">{children}</div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}


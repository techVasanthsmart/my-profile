import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import { BackgroundMatrix } from "@/components/ui/background-matrix";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title.split("|")[0].trim()}`,
  description:
    "Senior Full Stack Developer specializing in scalable systems and end-to-end product development. React, Node.js, TypeScript, and modern web technologies.",
  keywords: [
    siteConfig.name,
    "Senior Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  openGraph: {
    title: `${siteConfig.name} | Senior Full Stack Developer`,
    description:
      "Senior Full Stack Developer specializing in scalable systems and end-to-end product development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Senior Full Stack Developer`,
    description: "Scalable systems & end-to-end product development.",
  },
  robots: "index, follow",
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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

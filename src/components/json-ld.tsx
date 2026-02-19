import { siteConfig } from "@/lib/site-config";

/**
 * JSON-LD structured data for Person schema.
 * Helps Google display rich results (Knowledge Panel, etc.)
 */
export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: "Senior Full Stack Developer",
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.github, siteConfig.linkedIn],
    image: `${siteConfig.siteUrl}/svk.png`,
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Full Stack Development",
      "Scalable Systems",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

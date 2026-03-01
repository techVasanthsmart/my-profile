import { siteConfig } from "@/lib/site-config";

/**
 * Global JSON-LD schemas injected in layout.tsx
 * Includes Person + WebSite schemas for entity and sitelinks optimization
 */
export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: "Senior Full Stack Developer",
    alternateName: siteConfig.brandPositioning,
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Remote",
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
      "RAG (Retrieval-Augmented Generation)",
      "LangChain",
      "AI Product Development",
      "End-to-End Product Architecture",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — ${siteConfig.brandPositioning}`,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    author: { "@type": "Person", "@id": `${siteConfig.siteUrl}/#person` },
    creator: { "@type": "Person", "@id": `${siteConfig.siteUrl}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const combinedSchemas = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchemas),
      }}
    />
  );
}

/**
 * Reusable schema generators for individual pages
 */

export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

interface ArticleSchemaConfig {
  headline?: string;
  title?: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: { name: string; url?: string };
  articleBody?: string;
}

export function createArticleSchema(config: ArticleSchemaConfig) {
  const headline = config.headline || config.title || "Article";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: headline,
    description: config.description,
    author: config.author || {
      "@type": "Person",
      name: siteConfig.name,
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    datePublished: config.datePublished,
    dateModified: config.dateModified || config.datePublished,
    image: config.image || `${siteConfig.siteUrl}/og.jpg`,
    articleBody: config.articleBody,
  };
}

export function createFAQPageSchema(
  questions: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createServiceSchema(
  name: string,
  description: string,
  serviceUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    description: description,
    serviceType: "Software Development",
    areaServed: "Worldwide",
    url: serviceUrl || siteConfig.siteUrl,
  };
}

export function createSoftwareApplicationSchema(
  name: string,
  description: string,
  url: string,
  imageUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    applicationCategory: "Productivity",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.name,
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    url: url,
    image: imageUrl || `${siteConfig.siteUrl}/og.jpg`,
  };
}

export function createProfilePageSchema(
  name: string,
  description: string,
  imageUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${name} Profile`,
    description: description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    image: imageUrl || `${siteConfig.siteUrl}/svk.png`,
  };
}

export function createCreativeWorkSchema(
  name: string,
  description: string,
  url: string,
  tags?: string[],
  imageUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: name,
    description: description,
    url: url,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      "@id": `${siteConfig.siteUrl}/#person`,
    },
    keywords: tags?.join(", "),
    image: imageUrl || `${siteConfig.siteUrl}/og.jpg`,
  };
}

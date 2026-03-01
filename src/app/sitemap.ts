import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import { comparisons } from "@/data/comparisons";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePriority = {
    homepage: 1.0,
    pillar: 0.9,
    cluster: 0.7,
    article: 0.6,
  };

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: basePriority.homepage,
    },
    {
      url: `${siteConfig.siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.pillar,
    },
    {
      url: `${siteConfig.siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.pillar,
    },
    {
      url: `${siteConfig.siteUrl}/services/full-stack-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.cluster,
    },
    {
      url: `${siteConfig.siteUrl}/services/ai-ml-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.cluster,
    },
    {
      url: `${siteConfig.siteUrl}/services/saas-product-building`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.cluster,
    },
    {
      url: `${siteConfig.siteUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.pillar,
    },
    {
      url: `${siteConfig.siteUrl}/case-studies/docmind`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.cluster,
    },
    {
      url: `${siteConfig.siteUrl}/case-studies/pdf-toolkit`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.cluster,
    },
    {
      url: `${siteConfig.siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.pillar,
    },
    {
      url: `${siteConfig.siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: basePriority.pillar,
    },
    {
      url: `${siteConfig.siteUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.cluster,
    },
    {
      url: `${siteConfig.siteUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.cluster,
    },
    {
      url: `${siteConfig.siteUrl}/comparisons`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.pillar,
    },
    {
      url: `${siteConfig.siteUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: basePriority.cluster,
    },
    {
      url: `${siteConfig.siteUrl}/uses`,
      lastModified: new Date(),
      changeFrequency: "quarterly",
      priority: basePriority.cluster,
    },
    {
      url: `${siteConfig.siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: basePriority.article,
    },
    {
      url: `${siteConfig.siteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: basePriority.article,
    },
  ];

  // Add all project pages dynamically
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: basePriority.article,
  }));

  // Add all blog post pages dynamically
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate),
    changeFrequency: "monthly" as const,
    priority: basePriority.article,
  }));

  // Add all comparison pages dynamically
  const comparisonPages: MetadataRoute.Sitemap = comparisons.map(
    (comparison) => ({
      url: `${siteConfig.siteUrl}/comparisons/${comparison.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: basePriority.article,
    }),
  );

  return [...staticPages, ...projectPages, ...blogPages, ...comparisonPages];
}

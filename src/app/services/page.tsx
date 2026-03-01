import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaInjector } from "@/components/schema-injector";
import { FAQSection } from "@/components/faq-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Full Stack Development & AI Products",
  description:
    "Professional web development, AI/ML integration, and SaaS product building services. Full-stack development with React, Next.js, Node.js, and modern technologies.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
  openGraph: {
    title: "Services - Full Stack Development & AI Products",
    description:
      "Expert services in full-stack development, AI integration, and product building.",
    url: `${siteConfig.siteUrl}/services`,
    type: "website",
  },
};

const services = [
  {
    slug: "full-stack-development",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with React, Next.js, Node.js, and modern technologies.",
    icon: "⚙️",
  },
  {
    slug: "ai-ml-development",
    title: "AI/ML Integration & Development",
    description:
      "RAG systems, AI chatbots, LangChain integration, and intelligent features for your products.",
    icon: "🤖",
  },
  {
    slug: "saas-product-building",
    title: "SaaS Product Building",
    description:
      "From concept to launch: architecture, development, deployment, and scaling of SaaS applications.",
    icon: "🚀",
  },
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services",
    description:
      "Full-stack development, AI/ML integration, and SaaS product building services",
    url: `${siteConfig.siteUrl}/services`,
    mainEntity: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Person",
        "@id": `${siteConfig.siteUrl}/#person`,
      },
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SchemaInjector schema={schema} />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Services" }]} />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Services
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Comprehensive full-stack development and AI-powered product
            solutions. From concept to launch and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 hover:shadow-lg dark:border-gray-800 dark:hover:border-indigo-600"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                {service.title}
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Why Work With Me?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                ✓ Proven Track Record
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {siteConfig.yearsExperience}+ years of professional experience
                building scalable systems and shipping AI-powered products to
                production.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                ✓ Full-Stack Expertise
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Complete capability from frontend UI to backend systems,
                databases, AI integration, and deployment infrastructure.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                ✓ Modern Tech Stack
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                React, Next.js, Node.js, TypeScript, Python, and cutting-edge AI
                technologies like RAG systems and LLM integration.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                ✓ Product Thinking
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Beyond coding—I think about architecture, scalability, user
                experience, and business impact for every project.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                ✓ Communication
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Clear communication about timelines, technical decisions, and
                progress. 24-hour response commitment to all inquiries.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                ✓ Scalable Solutions
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Every system designed for growth. From MVP to scaling across
                millions of users—architecture built to last.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            My Process
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Discovery & Analysis
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Understand your goals, challenges, and requirements in depth
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Architecture & Planning
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Design scalable architecture and create detailed technical
                  roadmap
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Development & Iteration
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Build with clean code, regular updates, and continuous
                  refinement
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Testing & Optimization
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Comprehensive testing, performance optimization, and quality
                  assurance
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                5
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Launch & Support
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Deployment, monitoring, documentation, and ongoing support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Let's discuss your project requirements and how I can help bring
            your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Get In Touch
          </Link>
        </section>
      </main>
    </div>
  );
}

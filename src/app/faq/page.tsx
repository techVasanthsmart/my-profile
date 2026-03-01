import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaInjector } from "@/components/schema-injector";
import { createFAQPageSchema } from "@/components/json-ld";
import { FAQSection } from "@/components/faq-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Common questions about Vasanth Kumar, services, pricing, and how to work together.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/faq`,
  },
  openGraph: {
    title: "FAQ - Frequently Asked Questions",
    description:
      "Get answers to common questions about services and collaboration.",
    url: `${siteConfig.siteUrl}/faq`,
    type: "website",
  },
};

export default function FAQPage() {
  const faqData = [
    {
      question: "Who is Vasanth Kumar?",
      answer: `${siteConfig.name} is a ${siteConfig.brandPositioning} with ${siteConfig.yearsExperience}+ years of professional experience. He specializes in building scalable web applications, AI-powered products, and SaaS platforms using modern technologies like React, Next.js, Node.js, and LangChain.`,
    },
    {
      question: "What services does Vasanth Kumar offer?",
      answer:
        "Three main services: 1) Full-Stack Web Development — building complete web applications, 2) AI/ML Development & Integration — RAG systems and LLM features, 3) SaaS Product Building — from MVP to scaling. View detailed service pages at /services.",
    },
    {
      question: "What technologies does Vasanth Kumar use?",
      answer:
        "Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, Express, PostgreSQL, MongoDB. AI: LangChain, OpenAI, RAG systems, Vector databases. DevOps: AWS, Docker, GitHub Actions, Vercel.",
    },
    {
      question: "How much experience does Vasanth Kumar have?",
      answer: `${siteConfig.yearsExperience}+ years as a professional software developer. Started as PHP developer, progressed to full-stack development with React and Node.js, and now specialists in senior roles building scalable systems and AI products.`,
    },
    {
      question: "Does Vasanth Kumar offer freelance/project work?",
      answer:
        "Yes! I work on project basis for specific deliverables. I also offer retainers for ongoing support, and can explore equity arrangements for promising SaaS ideas. Engagement models are flexible based on project needs.",
    },
    {
      question: "What is the typical project timeline?",
      answer:
        "Varies by scope: MVP (2-3 months), Full Product (4-6 months), AI Integration (4-12 weeks), SaaS Product (3-6 months for MVP). I provide detailed timelines during discovery phase after understanding requirements.",
    },
    {
      question: "How are projects priced?",
      answer:
        "Multiple pricing models: Project-based (fixed scope, fixed price), Time & Materials (hourly), Retainer (ongoing support), Revenue-share (for SaaS). Pricing depends on complexity, team size, and timeline. Discussed in detail during consultation.",
    },
    {
      question: "Can you work with existing codebases?",
      answer:
        "Yes! I can refactor, extend, or improve existing applications. I assess code quality, identify improvements, and integrate with your existing architecture. Many projects involve improving or scaling existing systems.",
    },
    {
      question: "What about hosting and infrastructure?",
      answer:
        "I handle complete deployment including server setup, database configuration, CDN, monitoring, and CI/CD pipelines. I work with AWS, Vercel, or your preferred providers. Post-launch support for scaling and optimization included.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Absolutely! I'm comfortable signing NDAs to protect your ideas, business information, and confidential details.",
    },
    {
      question: "How can I contact Vasanth Kumar?",
      answer: `Email: ${siteConfig.email} (responds within 24h), LinkedIn: Connect on LinkedIn, or visit /contact page for additional options. Flexible timezone coordination available.`,
    },
    {
      question: "What is Vasanth Kumar's availability?",
      answer:
        "Currently available for new projects. Existing work may affect timeline. Discuss availability during consultation. Remote-based with flexible timezone coordination.",
    },
  ];

  const schema = createFAQPageSchema(faqData);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SchemaInjector schema={schema} />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "FAQ" }]} />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Common questions about Vasanth Kumar, services, pricing, and how to
            work together.
          </p>
        </div>

        {/* Main FAQ */}
        <FAQSection
          title="General Questions"
          items={faqData}
          withSchema={false}
        />

        {/* Service-Specific FAQs */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Service-Specific Questions
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/services/full-stack-development"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 dark:border-gray-800"
            >
              <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                Full-Stack Development
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Timeline, tech stack, and scaling questions
              </p>
            </Link>

            <Link
              href="/services/ai-ml-development"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 dark:border-gray-800"
            >
              <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                AI/ML Development
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                RAG, LLM integration, and cost questions
              </p>
            </Link>

            <Link
              href="/services/saas-product-building"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 dark:border-gray-800"
            >
              <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                SaaS Product Building
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                MVP validation and scaling strategies
              </p>
            </Link>
          </div>
        </section>

        {/* Still Have Questions? */}
        <section className="rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            If you don't find your answer here, reach out directly. I'm happy to
            discuss your specific project needs.
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

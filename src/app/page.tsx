import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { SchemaInjector } from "@/components/schema-injector";
import { FAQSection } from "@/components/faq-section";
import { SummaryBox } from "@/components/summary-box";
import Link from "next/link";
import { createFAQPageSchema } from "@/components/json-ld";

export default function Home() {
  const faqItems = [
    {
      question: "What does Vasanth Kumar specialize in?",
      answer: `Full-stack development with React, Next.js, and Node.js. AI/ML integration using RAG systems and LangChain. SaaS product building from MVP to scaling. ${siteConfig.yearsExperience}+ years of professional experience.`,
    },
    {
      question: "Is Vasanth Kumar available for freelance projects?",
      answer:
        "Yes! I work on project-based engagements, retainers for ongoing support, and can explore equity arrangements for promising SaaS ideas. Flexible engagement models based on project needs.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, Express, PostgreSQL, MongoDB. AI: LangChain, OpenAI, RAG systems. DevOps: AWS, Docker, GitHub Actions, Vercel.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "MVP: 2-3 months. Full product: 3-6 months. AI integration: 4-12 weeks. SaaS product: 3-6 months for MVP. Exact timeline depends on complexity and scope. Discussed during consultation.",
    },
    {
      question: "Do you have examples of your work?",
      answer:
        "Yes! Check out detailed case studies for DocMind (RAG chatbot) and PDF Toolkit (document processing). Plus 5+ projects live on GitHub with source code available.",
    },
    {
      question: "How can I hire you?",
      answer: `Email ${siteConfig.email} or connect on LinkedIn. I typically respond within 24 hours. We'll schedule a consultation to discuss your project needs, timeline, and budget.`,
    },
  ];

  const schema = createFAQPageSchema(faqItems);

  return (
    <>
      <SchemaInjector schema={schema} />
      <Navbar />
      <main>
        <Hero />

        {/* TL;DR Summary Block */}
        <section className="bg-white px-4 py-12 dark:bg-black sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SummaryBox
              title="About Vasanth Kumar"
              items={[
                {
                  label: "Role",
                  value: siteConfig.brandPositioning,
                },
                {
                  label: "Experience",
                  value: `${siteConfig.yearsExperience}+ years`,
                },
                {
                  label: "Location",
                  value: siteConfig.Location,
                },
                {
                  label: "Expertise",
                  value: "Full-Stack, AI/ML, SaaS",
                },
              ]}
              description={`${siteConfig.name} is a ${siteConfig.brandPositioning} specializing in building scalable web applications, AI-powered products, and SaaS platforms. Available for freelance development, consulting, and product building.`}
            />
          </div>
        </section>

        <About />
        <Experience />
        <Skills />
        <Projects />

        {/* Homepage FAQ */}
        <section className="bg-white px-4 py-12 dark:bg-black sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FAQSection
              title="Frequently Asked Questions"
              description="Common questions about Vasanth Kumar, services, and how to work together."
              items={faqItems}
              withSchema={false}
              schemaId="homepage-faq"
            />
          </div>
        </section>

        <Contact />

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-12 dark:from-indigo-950 dark:to-blue-950 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-lg border border-indigo-200 bg-white p-8 dark:border-indigo-900 dark:bg-transparent">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Explore More
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Learn about my services, view detailed case studies, and see all
              projects.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-center font-semibold text-white hover:bg-indigo-700"
              >
                Learn About Me
              </Link>
              <Link
                href="/services"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                View Services
              </Link>
              <Link
                href="/case-studies"
                className="inline-block rounded-lg border border-indigo-600 px-6 py-3 text-center font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
              >
                Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

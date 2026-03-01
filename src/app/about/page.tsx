import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaInjector } from "@/components/schema-injector";
import { createProfilePageSchema } from "@/components/json-ld";
import { FAQSection } from "@/components/faq-section";
import { SummaryBox } from "@/components/summary-box";
import { QuotableInsight } from "@/components/quotable-insight";
import Link from "next/link";

export const metadata: Metadata = {
  title: `About ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}, a ${siteConfig.brandPositioning} with ${siteConfig.yearsExperience}+ years of experience building scalable systems and AI products.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: `About ${siteConfig.name}`,
    description: `Get to know ${siteConfig.name} — ${siteConfig.brandPositioning}`,
    url: `${siteConfig.siteUrl}/about`,
    type: "profile",
    images: [
      {
        url: `${siteConfig.siteUrl}/svk.png`,
        width: 512,
        height: 512,
      },
    ],
  },
};

export default function AboutPage() {
  const profileSchema = createProfilePageSchema(
    siteConfig.name,
    "About page for " + siteConfig.name,
  );

  const faqItems = [
    {
      question: "What is your professional background?",
      answer:
        "I started as a PHP developer in 2021, progressed to full-stack development with React and Node.js, and now lead development as a Senior Full Stack Developer. My journey focuses on building scalable systems and end-to-end product solutions.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "Primary expertise: React, Next.js, Node.js, TypeScript, Python, and modern web technologies. Currently focusing on AI/ML integration, RAG systems, and LangChain for product automation.",
    },
    {
      question: "What is your development philosophy?",
      answer:
        "I believe in building scalable, maintainable systems with clean architecture, comprehensive testing, and focus on long-term product success. Every decision is made with user experience and system performance in mind.",
    },
    {
      question: "What types of projects do you work on?",
      answer:
        "Full-stack web applications, AI-powered products, SaaS platforms, and document intelligence systems. I've built products for PDF processing, RAG chatbots, flight booking, and synthetic data generation.",
    },
    {
      question: "How do you approach new problems?",
      answer:
        "I follow a systematic approach: understand the problem space deeply, design for scalability, implement with clean code practices, and iterate based on user feedback. Every project gets thorough documentation and knowledge transfer.",
    },
    {
      question: "Are you open to mentoring or knowledge sharing?",
      answer:
        "Yes! I actively write about full-stack development and AI integration. I'm interested in knowledge sharing through articles, tutorials, and code collaboration with other developers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SchemaInjector schema={profileSchema} />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "About" }]} />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            About {siteConfig.name}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {siteConfig.brandPositioning} with {siteConfig.yearsExperience}+
            years of experience building scalable systems and AI products.
          </p>
        </div>

        {/* TL;DR Summary */}
        <SummaryBox
          title="Quick Facts"
          items={[
            {
              label: "Years of Experience",
              value: `${siteConfig.yearsExperience}+`,
            },
            { label: "Location", value: siteConfig.Location },
            { label: "Primary Focus", value: "Full-Stack & AI Products" },
            { label: "Status", value: "Available for Projects" },
          ]}
          description="Senior Full Stack Developer focusing on scalable architectures and AI-powered product development. Currently working with React, Next.js, Node.js, and LangChain-based RAG systems."
        />

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Professional Summary
          </h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            I'm a Full-Stack Engineer & AI Product Builder with a proven track
            record of designing, building, and shipping scalable web
            applications and AI-powered products. My expertise spans the entire
            development lifecycle—from architectural planning and frontend
            development to backend systems and AI integration.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            With {siteConfig.yearsExperience}+ years in professional software
            development, I've worked across industries, solving complex problems
            and delivering high-impact solutions. I'm passionate about clean
            code, scalable architecture, and creating products that users love.
          </p>
        </section>

        {/* Career Journey */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Career Journey
          </h2>

          <div className="space-y-8">
            {/* 2026 - SkillRev */}
            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                2026 – Present: Senior Full Stack Developer at SkillRev LLP
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Leading full-stack development initiatives with focus on
                scalable systems, product architecture, and team mentoring.
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Architecting scalable backend systems and APIs</li>
                <li>
                  • Building high-performance frontend applications with React &
                  Next.js
                </li>
                <li>• Implementing AI/ML features and RAG systems</li>
                <li>• Technical mentoring and code architecture reviews</li>
              </ul>
            </div>

            {/* 2023-2026 - Koyal */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                2023 – Present: Senior Developer / Tech Lead at Koyal
                Technologies
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Progressed from Developer to Senior role, building enterprise
                applications and leading technical initiatives.
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>
                  • Full-stack development with React, Node.js, and TypeScript
                </li>
                <li>
                  • Database design and optimization (PostgreSQL, MongoDB)
                </li>
                <li>• API development and microservices architecture</li>
                <li>• Leading development teams and code review processes</li>
              </ul>
            </div>

            {/* 2021-2023 - Maintec */}
            <div className="border-l-4 border-cyan-600 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                2021 – 2023: Developer at Maintec Technologies
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Started professional career building enterprise HRMS and EMS
                platforms.
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Full-stack development with React and PHP/Node.js</li>
                <li>• Building HRMS (Human Resource Management System)</li>
                <li>• Developing EMS (Employee Management System)</li>
                <li>• Database design and API development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Development Philosophy */}
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            My Development Philosophy
          </h2>

          <QuotableInsight
            insight="The best code is not the most clever code—it's the code that solves real problems, scales with your business, and can be maintained by a team."
            author={siteConfig.name}
            role="Full-Stack Engineer & AI Product Builder"
          />

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Scalability First
              </h3>
              <p>
                Every system I build is designed with scale in mind. From
                database architecture to API design, decisions are made
                considering growth, load, and long-term maintainability.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                User-Centric Design
              </h3>
              <p>
                Complex systems should feel simple to users. I focus on creating
                intuitive interfaces and seamless experiences that make
                technology invisible.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Clean, Maintainable Code
              </h3>
              <p>
                Code is read far more often than it's written. I prioritize
                readability, documentation, and architectural patterns that make
                systems easy to understand and modify.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Continuous Learning
              </h3>
              <p>
                Technology evolves rapidly. I stay current with best practices,
                new tools, and emerging patterns in full-stack development and
                AI.
              </p>
            </div>
          </div>
        </section>

        {/* Core Expertise */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Core Expertise
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• React & Next.js</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS & component design</li>
                <li>• Responsive & accessible UIs</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Backend Development
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Node.js & Express</li>
                <li>• API design & RESTful services</li>
                <li>• Database design (SQL & NoSQL)</li>
                <li>• Authentication & security</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                AI/ML Integration
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• RAG (Retrieval-Augmented Generation)</li>
                <li>• LangChain & OpenAI integration</li>
                <li>• AI chatbots & agents</li>
                <li>• Document processing & chunking</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Product Development
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Full product lifecycle management</li>
                <li>• Architecture & system design</li>
                <li>• Deployment & DevOps</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="mb-12 rounded-lg bg-indigo-50 p-6 dark:bg-indigo-950">
          <h2 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-100">
            Current Focus
          </h2>
          <ul className="space-y-2 text-indigo-900 dark:text-indigo-100">
            <li>
              ✓ Building AI-powered products with RAG systems and large language
              models
            </li>
            <li>✓ Designing scalable, event-driven architectures</li>
            <li>✓ Creating exceptional developer experiences</li>
            <li>✓ Mentoring teams and sharing knowledge</li>
            <li>✓ Exploring cutting-edge AI applications in web development</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about my background, expertise, and approach to development."
          items={faqItems}
        />

        {/* CTA Section */}
        <section className="mt-16 rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Let's Work Together
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Whether you're looking to build a full-stack application, integrate
            AI capabilities, or need expert development consulting, I'm
            available for projects and collaborations.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Get In Touch
            </Link>
            <Link
              href="/case-studies"
              className="rounded-lg border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
            >
              View My Work
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

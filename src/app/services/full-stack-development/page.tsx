import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaInjector } from "@/components/schema-injector";
import { createServiceSchema } from "@/components/json-ld";
import { SummaryBox } from "@/components/summary-box";
import { FAQSection } from "@/components/faq-section";
import { QuotableInsight } from "@/components/quotable-insight";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full-Stack Web Development Services",
  description:
    "Custom full-stack web application development using React, Next.js, Node.js, and TypeScript. Enterprise-grade solutions with scalable architecture and exceptional UX.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/full-stack-development`,
  },
  openGraph: {
    title: "Full-Stack Web Development Services",
    description:
      "Professional full-stack development for your web applications and digital products.",
    url: `${siteConfig.siteUrl}/services/full-stack-development`,
    type: "website",
  },
};

export default function FullStackServicePage() {
  const serviceSchema = createServiceSchema(
    "Full-Stack Web Development",
    "Custom web application development with React, Next.js, Node.js, and modern technologies",
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SchemaInjector schema={serviceSchema} />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Services", url: "/services" },
            { name: "Full-Stack Development" },
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Full-Stack Web Development
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            End-to-end web applications built with modern technologies, scalable
            architecture, and focus on exceptional user experience.
          </p>
        </div>

        {/* What Is It */}
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            What is Full-Stack Development?
          </h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Full-stack web development means building complete web applications
            from the user-facing frontend to the backend APIs, databases, and
            infrastructure. It encompasses everything needed to create a fully
            functional product.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I specialize in the modern tech stack: React and Next.js for
            frontend, Node.js for backend, TypeScript for type safety, and
            scalable database solutions. This approach ensures your application
            is performant, maintainable, and ready to grow.
          </p>
        </section>

        {/* Summary Box */}
        <SummaryBox
          title="Service Overview"
          items={[
            { label: "Frontend Stack", value: "React, Next.js, TypeScript" },
            { label: "Backend Stack", value: "Node.js, Express, TypeScript" },
            { label: "Database", value: "PostgreSQL, MongoDB" },
            { label: "Deployment", value: "AWS, Vercel, Docker" },
            { label: "Timeline", value: "12+ weeks (MVP to full launch)" },
            { label: "Engagement", value: "Project-based or retainer" },
          ]}
          description="Complete web application development from architecture to deployment, including frontend UI, backend APIs, database design, and infrastructure."
        />

        {/* Problem → Solution → Outcome */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            The Problem → Solution → Outcome Framework
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
              <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                The Problem
              </h3>
              <p className="text-red-900 dark:text-red-100">
                You have a business idea or need to scale operations, but
                building a web application requires expertise across multiple
                domains (frontend, backend, databases, deployment). This is
                complex, time-consuming, and risky without the right team.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
              <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                The Solution
              </h3>
              <p className="text-blue-900 dark:text-blue-100">
                I provide full-stack development expertise, handling design,
                frontend development, backend APIs, database architecture, and
                deployment. You get a single point of contact, consistent tech
                decisions, and a unified product vision.
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950">
              <h3 className="mb-2 font-semibold text-green-900 dark:text-green-100">
                The Outcome
              </h3>
              <p className="text-green-900 dark:text-green-100">
                A production-ready web application that scales with your
                business. Faster time-to-market, lower technical debt, and a
                solid foundation for future growth.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            What's Included
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                📱 Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Modern React components</li>
                <li>✓ Responsive design (mobile-first)</li>
                <li>✓ Performance optimization</li>
                <li>✓ Accessibility (WCAG compliance)</li>
                <li>✓ SEO optimization</li>
                <li>✓ Progressive Web App (PWA) features</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                ⚙️ Backend Development
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ RESTful API design</li>
                <li>✓ Database architecture</li>
                <li>✓ Authentication & security</li>
                <li>✓ Scalable system design</li>
                <li>✓ Error handling & logging</li>
                <li>✓ Testing & documentation</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                🚀 Deployment & DevOps
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ CI/CD pipelines</li>
                <li>✓ Server configuration</li>
                <li>✓ Database management</li>
                <li>✓ Monitoring & alerts</li>
                <li>✓ Backup & disaster recovery</li>
                <li>✓ Performance monitoring</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                📚 Documentation & Support
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Code documentation</li>
                <li>✓ Architecture overview</li>
                <li>✓ Deployment guides</li>
                <li>✓ Post-launch support</li>
                <li>✓ Knowledge transfer</li>
                <li>✓ Maintenance planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>React 18+</li>
                <li>Next.js 14+</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Backend
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Node.js + Express</li>
                <li>TypeScript</li>
                <li>PostgreSQL / MongoDB</li>
                <li>Redis (caching)</li>
                <li>GraphQL (optional)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                DevOps & Tools
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Docker & Docker Compose</li>
                <li>Git / GitHub</li>
                <li>AWS / Vercel</li>
                <li>GitHub Actions</li>
                <li>Testing (Jest, Vitest)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison Box */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Why Modern Full-Stack?
          </h2>

          <QuotableInsight
            insight="The right tech stack removes friction, scales with your business, and doesn't become a burden as you grow."
            author={siteConfig.name}
            role="Full-Stack Engineer"
          />

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-gray-900">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">
                    Aspect
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">
                    Modern Stack (React + Node)
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">
                    Traditional Stack (PHP/VB)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">
                    Performance
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Optimized for speed, lazy loading, code splitting
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Slower by default, requires optimization
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">
                    Developer Experience
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Hot reload, great tooling, modern ecosystem
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Older tooling, longer feedback loops
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">
                    Scalability
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Built for scale from day 1
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Requires significant refactoring for scale
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">
                    Hiring
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Large talent pool, modern skillset
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Shrinking talent pool, legacy skills
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            See It In Action
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/case-studies/pdf-toolkit"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 hover:shadow-lg dark:border-gray-800 dark:hover:border-indigo-600"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                PDF Toolkit
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Production-grade PDF processing tool built with Next.js. Shows
                full-stack capabilities: frontend UI, backend processing, and
                real-time updates.
              </p>
              <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                View case study →
              </span>
            </Link>

            <a
              href="#"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 hover:shadow-lg dark:border-gray-800 dark:hover:border-indigo-600"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                Enterprise Platform (NDA)
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Large-scale SaaS platform for enterprise clients. Built complete
                system with role-based access, real-time analytics, and millions
                of records.
              </p>
              <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                Available upon request →
              </span>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          items={[
            {
              question: "How long does a full-stack project take?",
              answer:
                "Timelines vary based on project complexity. A simple MVP takes 6-8 weeks. Medium complexity applications take 3-4 months. Large enterprise systems may take 6+ months. I provide detailed timelines during the discovery phase.",
            },
            {
              question: "What is your development process?",
              answer:
                "I follow a structured process: 1) Discovery & requirements gathering, 2) Architecture & design, 3) Frontend & backend development in parallel, 4) Testing & optimization, 5) Deployment & launch, 6) Post-launch support and maintenance.",
            },
            {
              question: "Can you work with my existing codebase?",
              answer:
                "Yes! I can integrate with, refactor, or extend existing applications. I'll assess your current code, identify improvements, and work within your existing architecture where it makes sense.",
            },
            {
              question: "Do you offer maintenance and support post-launch?",
              answer:
                "Absolutely. I offer post-launch support packages including bug fixes, performance optimization, feature additions, and security updates. Most clients prefer ongoing support for long-term success.",
            },
            {
              question: "What about hosting and infrastructure?",
              answer:
                "I handle complete deployment including server setup, database configuration, CDN, and monitoring. I work with AWS, Vercel, or your preferred hosting provider.",
            },
            {
              question: "Can you help with scaling as we grow?",
              answer:
                "Yes. I architect systems with scalability in mind from day 1. As you grow, I can optimize infrastructure, implement caching, database sharding, and other scaling strategies.",
            },
          ]}
        />

        {/* CTA */}
        <section className="rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Ready to Build?
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Let's build your next web application with modern technologies and
            scalable architecture.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Start Your Project
          </Link>
        </section>
      </main>
    </div>
  );
}

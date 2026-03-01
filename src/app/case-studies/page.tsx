import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies - Real-World Projects",
  description:
    "Detailed case studies of projects built by Vasanth Kumar. From RAG systems to PDF processing tools.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/case-studies`,
  },
  openGraph: {
    title: "Case Studies - Real-World Projects",
    description:
      "See real examples of projects I've built: architecture, challenges, and results.",
    url: `${siteConfig.siteUrl}/case-studies`,
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Case Studies" }]} />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Case Studies
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Detailed breakdowns of real projects: challenges faced, solutions
            built, and results achieved. Each case study shows my approach to
            full-stack development, AI integration, and product thinking.
          </p>
        </div>

        {/* Featured Case Studies */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <div className="space-y-8">
            {/* DocMind */}
            <article className="rounded-lg border border-gray-200 p-8 dark:border-gray-800">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    DocMind - RAG Chat Application
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    AI-powered document intelligence with RAG and real-time chat
                  </p>
                </div>
                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                  AI Project
                </span>
              </div>

              <div className="mb-6 grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Technologies
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Next.js, LangChain, OpenAI, Vector Database, Tailwind CSS
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Timeline
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    8 weeks from concept to launch
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Status
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Live in production with active users
                  </p>
                </div>
              </div>

              <p className="mb-4 text-gray-700 dark:text-gray-300">
                A cutting-edge RAG application that lets users ingest websites
                and chat with the content using natural language. Demonstrates
                full-stack capabilities: semantic search, real-time processing,
                and AI integration.
              </p>

              <Link
                href="/case-studies/docmind"
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Read Full Case Study
              </Link>
            </article>

            {/* PDF Toolkit */}
            <article className="rounded-lg border border-gray-200 p-8 dark:border-gray-800">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    PDF Toolkit - Document Processing SaaS
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Production-grade tool for PDF manipulation and conversion
                  </p>
                </div>
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                  SaaS Product
                </span>
              </div>

              <div className="mb-6 grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Technologies
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Next.js, TypeScript, PDF.js, Tailwind CSS, Vercel
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Timeline
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    6 weeks from design to launch
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Status
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Live with regular users
                  </p>
                </div>
              </div>

              <p className="mb-4 text-gray-700 dark:text-gray-300">
                A fully functional SaaS tool for PDF processing: merge, split,
                reorder, and convert documents. Shows real-world full-stack
                development with file handling, performance optimization, and
                user-friendly interface.
              </p>

              <Link
                href="/case-studies/pdf-toolkit"
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Read Full Case Study
              </Link>
            </article>
          </div>
        </section>

        {/* More Projects */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            More Projects
          </h2>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Beyond the detailed case studies above, I{`'`}ve built several other
            projects showcasing different skills:
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="https://ai-flight-booking-assistant-qwyknk3lgu6qgjgaab7qvb.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 dark:border-gray-800"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                AI Flight Booking Assistant
              </h3>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                Streamlit app for AI-assisted flight search and booking. Shows
                Python backend, natural language processing, and Streamlit UI.
              </p>
              <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                View live →
              </span>
            </a>

            <a
              href="https://aisyntheticdatasetfactory-debqy6maxvmrskryhx5jtk.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 dark:border-gray-800"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                AI Synthetic Dataset Factory
              </h3>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                Generate synthetic data for ML projects. Demonstrates Python,
                AI/ML integration, and data generation techniques.
              </p>
              <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                View live →
              </span>
            </a>
          </div>
        </section>

        {/* Why These Case Studies Matter */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            What These Projects Show
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-950">
              <h3 className="mb-2 font-semibold text-indigo-900 dark:text-indigo-100">
                Full-Stack Capability
              </h3>
              <p className="text-sm text-indigo-900 dark:text-indigo-100">
                From frontend UI design to backend optimization, database
                architecture, and deployment.
              </p>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                AI/ML Integration
              </h3>
              <p className="text-sm text-blue-900 dark:text-blue-100">
                Practical experience with LLMs, RAG systems, vector databases,
                and real-time processing.
              </p>
            </div>

            <div className="rounded-lg bg-cyan-50 p-6 dark:bg-cyan-950">
              <h3 className="mb-2 font-semibold text-cyan-900 dark:text-cyan-100">
                Product Thinking
              </h3>
              <p className="text-sm text-cyan-900 dark:text-cyan-100">
                Not just code—understanding user needs, UX design, and building
                products that users want.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            See More Projects
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Explore additional projects in my portfolio and GitHub repositories.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              View All Projects
            </Link>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
            >
              Visit GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { comparisons } from "@/data/comparisons";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Technical Comparisons - Choose the Right Tool",
  description:
    "In-depth comparisons of popular technologies: RAG vs Fine-tuning, Next.js vs React, Monolithic vs Microservices, SQL vs NoSQL.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/comparisons`,
  },
  openGraph: {
    title: "Technical Comparisons - Choose the Right Tool",
    description:
      "In-depth comparisons of popular technologies for making informed architectural decisions.",
    url: `${siteConfig.siteUrl}/comparisons`,
    type: "website",
  },
};

export default function ComparisonsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <article className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ name: "Comparisons" }]} />

          <header className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Technical Comparisons
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
              Make informed architectural decisions with detailed comparisons of
              popular technologies, frameworks, and approaches.
            </p>
          </header>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/comparisons/${comparison.slug}`}
                className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-indigo-500 dark:hover:border-indigo-600 transition-all hover:shadow-xl duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {comparison.leftLabel.split(" ")[0]}
                    </span>
                    <span className="text-slate-400">vs</span>
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {comparison.rightLabel.split(" ")[0]}
                    </span>
                  </div>
                  <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {comparison.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {comparison.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {comparison.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {/* How to Use Comparisons */}
          <section className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              How to Use These Comparisons
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  1. Understand Trade-offs
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  No perfect solution. Each choice has benefits and costs. Read
                  both sides.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  2. Context Matters
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Your constraints (team size, scale, budget) determine the
                  right choice. Not ours.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  3. Hybrid Approaches
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Many real systems use both. RAG + fine-tuning. SQL + NoSQL.
                  React + Next.js.
                </p>
              </div>
            </div>
          </section>

          {/* Popular Decisions */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Common Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">
                  How does Vasanth choose?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Default to simplicity and speed. Use proven options. Only
                  choose complexity when the problem requires it. RAG for this
                  portfolio, React + Next.js for full-stack, PostgreSQL for
                  data.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">
                  Which is &quot;better&quot;?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  There is no better. Context determines the right choice. RAG
                  is better for fresh data. Fine-tuning for style. Monolith for
                  small teams. Microservices for scale.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">
                  Can I use both?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Often yes. RAG + fine-tuning. Next.js + React. PostgreSQL +
                  Redis. Monolith + occasional microservices. Hybrid approaches
                  are common in production.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">
                  When should I care?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  When the choice will cost you months or money in the future.
                  Early stage? Optimize for speed. At scale? Optimize for your
                  constraint (scalability, cost, flexibility).
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

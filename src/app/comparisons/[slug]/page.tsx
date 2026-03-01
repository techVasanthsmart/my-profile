import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { comparisons } from "@/data/comparisons";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, X } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaInjector } from "@/components/schema-injector";
import { AuthorBio } from "@/components/author-bio";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const comparison = comparisons.find((c) => c.slug === resolvedParams.slug);

  if (!comparison) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: `${comparison.title} | ${siteConfig.name}`,
    description: comparison.description,
    alternates: {
      canonical: `${siteConfig.siteUrl}/comparisons/${resolvedParams.slug}`,
    },
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      url: `${siteConfig.siteUrl}/comparisons/${resolvedParams.slug}`,
      type: "article",
      images: [
        {
          url: `${siteConfig.siteUrl}/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.title,
      description: comparison.description,
      images: [`${siteConfig.siteUrl}/og.jpg`],
    },
  };
}

export function generateStaticParams() {
  return comparisons.map((comparison) => ({
    slug: comparison.slug,
  }));
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const comparison = comparisons.find((c) => c.slug === resolvedParams.slug);

  if (!comparison) {
    notFound();
  }

  // Group rows by category
  const rowsByCategory = comparison.rows.reduce(
    (acc, row) => {
      if (!acc[row.category]) acc[row.category] = [];
      acc[row.category].push(row);
      return acc;
    },
    {} as Record<string, typeof comparison.rows>,
  );

  const categories = Object.keys(rowsByCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <article className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { name: "Comparisons", url: "/comparisons" },
              { name: comparison.title },
            ]}
          />

          <Link
            href="/comparisons"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 mb-8 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Comparisons
          </Link>

          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {comparison.title}
            </h1>

            <SchemaInjector
              schema={{
                "@context": "https://schema.org",
                "@type": "ComparisonChart",
                name: comparison.title,
                description: comparison.description,
                author: {
                  "@type": "Person",
                  name: siteConfig.name,
                  url: siteConfig.siteUrl,
                },
              }}
            />

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl">
              {comparison.description}
            </p>

            {/* Left vs Right Headers */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                  {comparison.leftLabel}
                </h2>
                <p className="text-sm text-blue-800 dark:text-blue-400">
                  Explore the characteristics, strengths, and trade-offs of{" "}
                  {comparison.leftLabel.toLowerCase()}.
                </p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-2">
                  {comparison.rightLabel}
                </h2>
                <p className="text-sm text-emerald-800 dark:text-emerald-400">
                  Explore the characteristics, strengths, and trade-offs of{" "}
                  {comparison.rightLabel.toLowerCase()}.
                </p>
              </div>
            </div>
          </header>

          {/* Comparison Table */}
          <div className="mb-16 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-4 font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50">
                    Aspect
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-blue-900 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/20">
                    {comparison.leftLabel}
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-emerald-900 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/20">
                    {comparison.rightLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tbody key={category}>
                    {/* Category Header */}
                    <tr className="border-t-2 border-slate-200 dark:border-slate-700">
                      <td
                        colSpan={3}
                        className="py-3 px-4 bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide"
                      >
                        {category}
                      </td>
                    </tr>

                    {/* Rows for this category */}
                    {rowsByCategory[category].map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors"
                      >
                        <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white align-top">
                          {row.aspect}
                        </td>
                        <td className="py-4 px-4 text-slate-700 dark:text-slate-300 align-top">
                          <div className="flex items-start gap-2">
                            {row.winner === "left" && (
                              <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            )}
                            {row.leftColumn}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-slate-700 dark:text-slate-300 align-top">
                          <div className="flex items-start gap-2">
                            {row.winner === "right" && (
                              <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            )}
                            {row.rightColumn}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </tbody>
            </table>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
            {comparison.content.split("\n").map((paragraph, idx) => {
              // Handle headings
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={idx} className="text-4xl font-bold mt-8 mb-4">
                    {paragraph.replace("# ", "")}
                  </h1>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-3xl font-bold mt-6 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-2xl font-bold mt-4 mb-2">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }

              // Handle code blocks
              if (paragraph.startsWith("```")) {
                const codeContent = [];
                let j = idx + 1;
                const lines = comparison.content.split("\n");
                while (j < lines.length && !lines[j].startsWith("```")) {
                  codeContent.push(lines[j]);
                  j++;
                }
                return (
                  <pre
                    key={idx}
                    className="overflow-x-auto p-4 rounded-lg bg-slate-950 dark:bg-slate-900"
                  >
                    <code className="text-slate-100 text-sm">
                      {codeContent.join("\n")}
                    </code>
                  </pre>
                );
              }

              // Handle lists
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={idx} className="ml-6">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }

              // Handle bold and italic
              const sanitized = paragraph
                .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.+?)\*/g, "<em>$1</em>")
                .replace(
                  /\[(.+?)\]\((.+?)\)/g,
                  '<a href="$2" className="text-indigo-600 dark:text-indigo-400 hover:underline">$1</a>',
                );

              if (paragraph.trim()) {
                return (
                  <p
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: sanitized }}
                    className="mb-4 leading-relaxed"
                  />
                );
              }

              return <div key={idx} className="mb-4" />;
            })}
          </div>

          {/* Conclusion */}
          <section className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Conclusion
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {comparison.conclusion}
            </p>
          </section>

          {/* Related Pages */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {comparison.relatedPages.map((page) => (
                <Link
                  key={page.url}
                  href={page.url}
                  className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-4 hover:border-indigo-500 transition-all duration-300"
                >
                  <p className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {page.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    → Learn more
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap gap-2">
              {comparison.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio />

          {/* Other Comparisons */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              More Comparisons
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {comparisons
                .filter((c) => c.slug !== comparison.slug)
                .slice(0, 3)
                .map((otherComparison) => (
                  <Link
                    key={otherComparison.slug}
                    href={`/comparisons/${otherComparison.slug}`}
                    className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-indigo-500 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-indigo-600">
                        {otherComparison.leftLabel.split(" ")[0]}
                      </span>
                      <span className="text-slate-400">vs</span>
                      <span className="text-lg font-bold text-indigo-600">
                        {otherComparison.rightLabel.split(" ")[0]}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {otherComparison.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

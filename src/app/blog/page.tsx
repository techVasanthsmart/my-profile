import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Blog - Full-Stack, AI/ML, and SaaS Insights",
  description:
    "Articles on full-stack development, AI/ML integration, SaaS product building, and modern web architecture.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/blog`,
  },
  openGraph: {
    title: "Blog - Full-Stack, AI/ML, and SaaS Insights",
    description:
      "Articles on full-stack development, AI/ML integration, SaaS product building, and modern web architecture.",
    url: `${siteConfig.siteUrl}/blog`,
    type: "website",
  },
};

const categoryColors: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  "AI/ML": {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    text: "text-purple-700 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
  },
  "Full-Stack": {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-700 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
  },
  SaaS: {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  Product: {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-700 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800",
  },
};

const featuredPosts = blogPosts.filter((post) => post.featured);
const otherPosts = blogPosts.filter((post) => !post.featured);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <article className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ name: "Blog" }]} />

          <header className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Deep dives into full-stack development, AI/ML integration, and
              SaaS product building. Technical insights from shipping real
              projects.
            </p>
          </header>

          {/* Featured Posts */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => {
                const colors = categoryColors[post.category];
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-indigo-500 dark:hover:border-indigo-600 transition-all hover:shadow-xl duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-block px-3 py-1.5 rounded-lg text-sm font-medium border ${colors.bg} ${colors.text} ${colors.border}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* All Posts */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              All Articles
            </h2>
            <div className="space-y-6">
              {otherPosts.map((post) => {
                const colors = categoryColors[post.category];
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-indigo-500 dark:hover:border-indigo-600 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border}`}
                          >
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(post.publishedDate).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime} min
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1 flex-shrink-0" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Subscribe CTA */}
          <section className="mt-20 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-2xl p-12 border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Get New Articles in Your Inbox
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
              Articles on full-stack development, AI integration, and SaaS
              product building—delivered monthly.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=Subscribe to blog updates`}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
            >
              Subscribe via Email
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { blogPosts, BlogPost } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchemaInjector } from "@/components/schema-injector";
import { createArticleSchema } from "@/components/json-ld";
import { AuthorBio } from "@/components/author-bio";
import { SummaryBox } from "@/components/summary-box";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "AI/ML": {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-700 dark:text-purple-400",
  },
  "Full-Stack": {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-400",
  },
  SaaS: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-400",
  },
  Product: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-700 dark:text-orange-400",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    alternates: {
      canonical: `${siteConfig.siteUrl}/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.siteUrl}/blog/${resolvedParams.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author],
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
      title: post.title,
      description: post.description,
      images: [`${siteConfig.siteUrl}/og.jpg`],
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const categoryColor = categoryColors[post.category];
  const publishDate = new Date(post.publishedDate);
  const updateDate = new Date(post.updatedDate);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[{ name: "Blog", url: "/blog" }, { name: post.title }]}
          />

          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 mb-8 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`inline-block px-3 py-1.5 rounded-lg text-sm font-medium ${categoryColor.bg} ${categoryColor.text}`}
              >
                {post.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <SchemaInjector
              schema={createArticleSchema({
                headline: post.title,
                description: post.description,
                image: `${siteConfig.siteUrl}/og.jpg`,
                datePublished: post.publishedDate,
                dateModified: post.updatedDate,
                author: {
                  name: post.author,
                  url: `${siteConfig.siteUrl}/about`,
                },
              })}
            />

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 border-t border-b border-slate-200 dark:border-slate-800 py-6 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.publishedDate}>
                  {publishDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="text-sm">
                Updated{" "}
                {updateDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </header>

          <SummaryBox
            title="Quick Summary"
            items={[
              { label: "Category", value: post.category },
              { label: "Reading Time", value: `${post.readTime} minutes` },
              { label: "Tags", value: post.tags.slice(0, 2).join(", ") },
            ]}
            className="mb-12"
          />

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
            <style>
              {`
                .prose h2 {
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                }
                .prose h3 {
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                }
                .prose p {
                  line-height: 1.8;
                }
                .prose code {
                  background: rgb(15, 23, 42);
                  color: rgb(226, 232, 240);
                  padding: 0.25rem 0.5rem;
                  border-radius: 0.375rem;
                  font-size: 0.9em;
                }
                .prose pre {
                  background: rgb(15, 23, 42);
                  color: rgb(226, 232, 240);
                  padding: 1.5rem;
                  border-radius: 0.75rem;
                  overflow-x: auto;
                }
                .dark .prose pre {
                  background: rgb(30, 41, 59);
                }
              `}
            </style>
            {post.content.split("\n").map((paragraph, idx) => {
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
                  <h2 key={idx} className="text-3xl font-bold">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-2xl font-bold">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }

              // Handle code blocks
              if (paragraph.startsWith("```")) {
                const codeContent = [];
                let j = idx + 1;
                while (
                  j < post.content.split("\n").length &&
                  !post.content.split("\n")[j].startsWith("```")
                ) {
                  codeContent.push(post.content.split("\n")[j]);
                  j++;
                }
                return (
                  <pre
                    key={idx}
                    className="overflow-x-auto p-4 rounded-lg bg-slate-950 dark:bg-slate-900"
                  >
                    <code className="text-slate-100">
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

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
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

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              More Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(
                  (p) => p.slug !== post.slug && p.category === post.category,
                )
                .slice(0, 2)
                .map((relatedPost) => {
                  const relatedColors = categoryColors[relatedPost.category];
                  return (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-indigo-500 transition-all duration-300"
                    >
                      <span
                        className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium mb-3 ${relatedColors.bg} ${relatedColors.text}`}
                      >
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {relatedPost.description}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

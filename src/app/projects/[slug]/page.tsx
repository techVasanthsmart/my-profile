import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Globe, FileText, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

// Ensure this uses the correct Next.js dynamic routing type for `params`
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 mb-8 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
                >
                  <Globe className="h-5 w-5" />
                  Live Demo
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white active:scale-95"
                >
                  <Github className="h-5 w-5" />
                  View Code
                </a>
              )}
              {project.caseStudyUrl && (
                <Link
                  href={project.caseStudyUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-100 text-emerald-700 px-6 py-3 font-medium transition hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50 active:scale-95"
                >
                  <FileText className="h-5 w-5" />
                  Read Case Study
                </Link>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-slate-200/80 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {project.features && project.features.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-indigo-500" />
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                     <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                       {idx + 1}
                     </span>
                     <p className="text-slate-700 dark:text-slate-300 mt-1">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </article>
      </main>
      <Footer />
    </>
  );
}

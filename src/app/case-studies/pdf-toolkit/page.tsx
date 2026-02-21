import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft, Github, Globe, Server, Code, Bot, Zap, Database, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PDF Toolkit Case Study | Vasanth Kumar",
  description: "A free, privacy-focused, and no-login client-side PDF toolkit built with React, Vite, and pdf-lib.",
  openGraph: {
    title: "PDF Toolkit Case Study | Vasanth Kumar",
    description: "A free, privacy-focused, and no-login client-side PDF toolkit built with React, Vite, and pdf-lib.",
    url: `${siteConfig.siteUrl}/case-studies/pdf-toolkit`,
    siteName: siteConfig.name,
    images: ["/og.jpg"],
    type: "article",
  },
};

export default function PdfToolkitCaseStudy() {
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
              PDF Toolkit
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              A free, privacy-focused, and no-login client-side PDF toolkit built with React, Vite, and pdf-lib. All processing happens entirely within the browser, ensuring data security and high performance.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="https://pdf-toolkit.vasanthubs.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
              >
                <Globe className="h-5 w-5" />
                Live Demo
              </a>
              <a
                href="https://github.com/techVasanthsmart/pdf-toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white active:scale-95"
              >
                <Github className="h-5 w-5" />
                View Code
              </a>
            </div>
            
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl mb-12">
               <Image 
                 src="/image.png"
                 alt="PDF Toolkit Interface"
                 fill
                 className="object-cover"
                 priority
               />
            </div>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-indigo-500" />
              Core Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Pure Client-Side</h3>
                  <p className="text-slate-600 dark:text-slate-400">All merging and manipulation happens directly in your browser. No files are ever uploaded to a server.</p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">100% Free & No Login</h3>
                  <p className="text-slate-600 dark:text-slate-400">Immediate access to all tools with zero hidden costs, subscriptions, or authentication barriers.</p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Drag & Drop</h3>
                  <p className="text-slate-600 dark:text-slate-400">Intuitive interface for adding files and reordering file cards to define the precise merge sequence.</p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Instant Processing</h3>
                  <p className="text-slate-600 dark:text-slate-400">Utilizes highly optimized libraries to process complex PDF tasks instantly on the user&apos;s machine.</p>
               </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Code className="h-6 w-6 text-emerald-500" />
                Technologies
              </h2>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 min-w-[120px]">Framework:</span>
                  React + Vite
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 min-w-[120px]">PDF Engine:</span>
                  pdf-lib
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 min-w-[120px]">Interactions:</span>
                  @hello-pangea/dnd (Drag and drop)
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 min-w-[120px]">UI/UX:</span>
                  Framer Motion & Lucide React
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 min-w-[120px]">Analytics:</span>
                  react-ga4 (Google Analytics 4)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-amber-500" />
                Setup Instructions
              </h2>
               <div className="bg-slate-950 rounded-xl p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                 <p className="text-slate-500 mb-2"># 1. Install dependencies</p>
                 <p className="mb-4 text-indigo-300">npm install</p>
                 
                 <p className="text-slate-500 mb-2"># 2. Start development server</p>
                 <p className="mb-4 text-indigo-300">npm run dev</p>

                 <p className="text-slate-500 mb-2"># 3. Build for production</p>
                 <p className="text-indigo-300">npm run build</p>
               </div>
            </section>
          </div>

          <section>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Database className="h-6 w-6 text-rose-500" />
              Analytics & SEO Approach
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
              <p>
                The application tracks usage responsibly using <strong>Google Analytics 4 (GA4)</strong>. It is configured via environment variables (<code>VITE_GA_MEASUREMENT_ID</code>), enabling automatic route change detection for Single Page Applications (SPAs). Additionally, the site implements crucial SEO metadata, Open Graph labels, Twitter Cards, and JSON-LD structured data directly within the app shell, ensuring maximum search engine visibility for a static, client-side application.
              </p>
            </div>
          </section>

        </article>
      </main>
      <Footer />
    </>
  );
}

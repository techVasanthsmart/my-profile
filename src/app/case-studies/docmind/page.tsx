import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft, Github, Globe, Server, Code, Bot, Database, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "DocMind Case Study | Vasanth Kumar",
  description: "A deep dive into DocMind, a RAG Chat Application built with Next.js, LangChain, and OpenAI.",
  openGraph: {
    title: "DocMind Case Study | Vasanth Kumar",
    description: "A deep dive into DocMind, a RAG Chat Application built with Next.js, LangChain, and OpenAI.",
    url: `${siteConfig.siteUrl}/case-studies/docmind`,
    siteName: siteConfig.name,
    images: ["/og.jpg"], // Assuming a default OG image exists
    type: "article",
  },
};

export default function DocMindCaseStudy() {
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
              DocMind - RAG Chat Application
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              A cutting-edge Retrieval-Augmented Generation (RAG) agent capable of ingesting websites and enabling users to chat with their content in real-time. Built with a focus on accuracy, performance, and a premium user experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://docmind.vasanthubs.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
              >
                <Globe className="h-5 w-5" />
                Live Demo
              </a>
              <a
                href="https://github.com/techVasanthsmart/DocMind"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white active:scale-95"
              >
                <Github className="h-5 w-5" />
                View Code
              </a>
            </div>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Bot className="h-6 w-6 text-indigo-500" />
              Overview
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
              <p>
                In the era of large language models, static information retrieval is no longer enough.
                DocMind bridges the gap between static web content and conversational AI. By providing an intuitive interface for URL ingestion, it allows users to unlock conversational insights from any website instantly.
              </p>
              <p>
                The core challenge was building a system that could accurately parse messy web data, intelligently chunk it to preserve semantic meaning, and quickly retrieve relevant context for an LLM to formulate an answer—all while minimizing hallucinations and ensuring the UI feels snappy and responsive.
              </p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Code className="h-6 w-6 text-emerald-500" />
                Tech Stack
              </h2>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 min-w-[100px]">Frontend:</span>
                  Next.js 15 (App Router), Tailwind CSS 4, Framer Motion
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 min-w-[100px]">AI Pipeline:</span>
                  LangChain.js, OpenAI (GPT-4o/3.5-turbo), OpenAI Embeddings
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 min-w-[100px]">Ingestion:</span>
                  Puppeteer for robust web scraping
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 mr-2 min-w-[100px]">Vector Store:</span>
                  In-memory vector store (designed to scale to ChromaDB/Pinecone)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-amber-500" />
                Key Features
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Seamless Website Ingestion via URL</li>
                <li>Smart context-preserving text chunking</li>
                <li>High-performance semantic vector search</li>
                <li>Strict anti-hallucination prompting techniques</li>
                <li>Modern, glassmorphic UI requiring no login</li>
              </ul>
            </section>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Server className="h-6 w-6 text-blue-500" />
              Architecture Pipeline
            </h2>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
              <ol className="relative border-l border-slate-300 dark:border-slate-700 space-y-8 ml-4">
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-slate-950 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm">
                    1
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Ingest & Load</h3>
                  <p className="text-slate-600 dark:text-slate-400">User provides a URL. Puppeteer visits the page, bypassing common blockers, and extracts the raw text content.</p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-slate-950 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                    2
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Split</h3>
                  <p className="text-slate-600 dark:text-slate-400">Using LangChain&apos;s RecursiveCharacterTextSplitter, content is divided into manageable chunks with overlap to retain context across boundaries.</p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-slate-950 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold text-sm">
                    3
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Embed & Store</h3>
                  <p className="text-slate-600 dark:text-slate-400">Chunks are converted into high-dimensional vector embeddings via OpenAI and stored for rapid similarity search.</p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-slate-950 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    4
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Retrieve & Generate</h3>
                  <p className="text-slate-600 dark:text-slate-400">User queries are embedded, compared against the store to retrieve relevant chunks, and fed into the LLM context window to synthesize an accurate, grounded response.</p>
                </li>
              </ol>
            </div>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Database className="h-6 w-6 text-rose-500" />
              Outcome
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              DocMind demonstrates the practical application of RAG concepts in a modern web environment. It successfully removes the friction of extracting and interacting with web data, providing users with a robust tool to instantly query almost any open website in natural language.
            </p>
          </section>

        </article>
      </main>
      <Footer />
    </>
  );
}

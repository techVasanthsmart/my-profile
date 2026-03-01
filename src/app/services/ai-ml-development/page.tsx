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
  title: "AI/ML Development & Integration Services",
  description:
    "RAG systems, LLM integration, AI chatbots, and intelligent features. LangChain, OpenAI, and custom AI solutions for your products.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/ai-ml-development`,
  },
  openGraph: {
    title: "AI/ML Development & Integration Services",
    description:
      "Professional AI/ML integration and development. RAG systems, chatbots, and intelligent automation.",
    url: `${siteConfig.siteUrl}/services/ai-ml-development`,
    type: "website",
  },
};

export default function AIMlServicePage() {
  const serviceSchema = createServiceSchema(
    "AI/ML Development & Integration",
    "RAG systems, LLM integration, AI agents, chatbots, and intelligent features using LangChain, OpenAI, and modern AI technologies",
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SchemaInjector schema={serviceSchema} />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Services", url: "/services" },
            { name: "AI/ML Development" },
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            AI/ML Development & Integration
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Harness the power of AI and machine learning. From RAG systems to
            intelligent chatbots, I build AI-powered features that create
            competitive advantages.
          </p>
        </div>

        {/* What Is It */}
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            What is AI/ML Development?
          </h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            AI/ML development integrates artificial intelligence and machine
            learning into your applications to automate tasks, enhance
            decision-making, and create intelligent user experiences. Unlike
            traditional software that follows pre-programmed logic, AI systems
            learn from data and adapt to new situations.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I specialize in practical AI implementation: building RAG systems
            that let AI access your data, integrating LLMs like OpenAI's GPT,
            creating smart chatbots, and automating complex workflows with AI
            agents.
          </p>
        </section>

        {/* Summary Box */}
        <SummaryBox
          title="Service Overview"
          items={[
            {
              label: "AI Technologies",
              value: "RAG, LLM, Agents, Fine-tuning",
            },
            {
              label: "Platforms",
              value: "OpenAI, Anthropic, Open-source LLMs",
            },
            {
              label: "Tools & Frameworks",
              value: "LangChain, LlamaIndex, Hugging Face",
            },
            { label: "Use Cases", value: "Chatbots, Document AI, Automation" },
            {
              label: "Implementation",
              value: "Full turnkey or integration support",
            },
            { label: "Timeline", value: "4-12 weeks depending on scope" },
          ]}
          description="End-to-end AI/ML integration from architecture design to deployment, including vector databases, prompt engineering, and fine-tuning."
        />

        {/* Core Concepts */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Key AI Concepts I Work With
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                🔍 RAG (Retrieval-Augmented Generation)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Combines LLMs with your own data. The system retrieves relevant
                information from documents, databases, or websites, then
                generates accurate answers based on your specific content.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                🤖 LLM Integration
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Connect GPT-4, Claude, or open-source LLMs to your application.
                Handle prompt engineering, context management, token
                optimization, and API integration.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                💬 AI Agents & Automation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Build autonomous agents that can take actions, make decisions,
                and solve complex problems. Ideal for customer support
                automation, research assistants, and workflow automation.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                📄 Document Intelligence
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Extract information from PDFs, images, and documents. Build
                systems that understand contracts, invoices, forms, and
                unstructured data at scale.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                🎯 Fine-tuning & Custom Models
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Fine-tune LLMs on your domain-specific data for better accuracy.
                Build custom models optimized for your specific use case.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                ⚡ Vector Databases & Embeddings
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Implement semantic search using embeddings. Store and query
                vector data with Pinecone, Weaviate, or other vector databases.
              </p>
            </div>
          </div>
        </section>

        {/* Problem → Solution → Outcome */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            How AI Solves Business Problems
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                ❌ The Problem
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your business generates tons of data (documents, customer
                interactions, knowledge bases), but teams can't efficiently find
                answers, automate repetitive tasks, or scale customer support
                without hiring more people.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                ✓ The Solution
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Implement AI systems that understand your data and can answer
                questions, automate tasks, and provide intelligent
                recommendations. AI agents handle routine work 24/7, while your
                team focuses on strategic work.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-900 dark:text-green-100">
                🎯 The Outcome
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Reduce operational costs, improve response times, scale without
                proportional headcount increase, and unlock new revenue
                opportunities through intelligent features.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Real-World Use Cases
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/case-studies/docmind"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 dark:border-gray-800"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                DocMind - Document Intelligence
              </h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                Chat with your documents. RAG system that ingests websites and
                enables real-time Q&A.
              </p>
              <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                View case study →
              </span>
            </Link>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Customer Support Automation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                AI chatbots that handle support tickets, answer FAQs, and route
                complex issues to humans. Reduces support costs by 60%.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Contract Analysis
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Automatically extract terms, identify risks, and summarize
                contracts. From hours to minutes per document.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Personalized Recommendations
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                AI that understands user behavior and preferences. Increase
                engagement and conversion through intelligent suggestions.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Technologies & Tools
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                LLM Platforms
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>OpenAI (GPT-4, Embeddings)</li>
                <li>Anthropic (Claude)</li>
                <li>Open-source LLMs</li>
                <li>Fine-tuning APIs</li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Frameworks & Tools
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>LangChain</li>
                <li>LlamaIndex</li>
                <li>Hugging Face</li>
                <li>CrewAI (Agents)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Vector & Data
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Pinecone</li>
                <li>Weaviate</li>
                <li>Supabase pgvector</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quote */}
        <QuotableInsight
          insight="AI isn't magic—it's a tool that works best when thoughtfully integrated into your business processes and combined with human expertise."
          author={siteConfig.name}
          role="AI Product Builder"
        />

        {/* FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          items={[
            {
              question: "What is the difference between RAG and fine-tuning?",
              answer:
                "RAG (Retrieval-Augmented Generation) lets LLMs access your current data without retraining. Fine-tuning permanently updates the model with your data. RAG is faster to implement and keeps data private; fine-tuning gives better accuracy for specific domains. I often use both together.",
            },
            {
              question: "How much does it cost to build an AI feature?",
              answer:
                "Costs depend on LLM API usage, data volume, and complexity. A simple chatbot might cost $100-500/month in API fees. Complex RAG systems with heavy usage might cost $1000-5000/month. I help optimize costs and implement caching strategies.",
            },
            {
              question: "How do I keep my data private with AI?",
              answer:
                "I implement privacy-first architectures: use RAG with secure vector databases, open-source models on your infrastructure, or privacy-focused APIs. Your data never leaves your system unless you choose to use cloud LLMs with proper agreements.",
            },
            {
              question: "Can AI integrate with my existing systems?",
              answer:
                "Absolutely. I can integrate AI into existing applications via APIs, webhook handlers, or middleware. Most implementations add AI as a new feature layer without disrupting current functionality.",
            },
            {
              question: "How long does an AI project take?",
              answer:
                "Simple integrations (chatbot): 2-4 weeks. Complex RAG systems: 4-8 weeks. Fine-tuning: 2-6 weeks. Enterprise solutions with custom models: 2-3 months. I provide detailed timelines during discovery.",
            },
            {
              question: "What about AI safety and hallucinations?",
              answer:
                "I implement safeguards: grounding responses in real data (RAG), prompt engineering, response validation, and human-in-the-loop for critical decisions. AI works best when combined with human oversight.",
            },
          ]}
        />

        {/* CTA */}
        <section className="rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Ready to Build AI Into Your Product?
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Let's explore how AI can solve your business problems and create new
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Start an AI Project
          </Link>
        </section>
      </main>
    </div>
  );
}

import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Glossary - AI & Development Terms",
  description:
    "Comprehensive glossary of artificial intelligence, machine learning, and full-stack development terms.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/glossary`,
  },
  openGraph: {
    title: "Glossary - AI & Development Terms",
    description:
      "Definitions of AI, ML, and development concepts explained clearly.",
    url: `${siteConfig.siteUrl}/glossary`,
    type: "website",
  },
};

interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
}

const glossaryTerms: Record<string, GlossaryTerm[]> = {
  "Artificial Intelligence & Machine Learning": [
    {
      term: "RAG (Retrieval-Augmented Generation)",
      definition:
        "An AI technique that combines large language models with external data sources. The system retrieves relevant information from documents or databases before generating responses, resulting in more accurate and contextual answers grounded in real data.",
      relatedTerms: ["LLM", "Vector Database", "Embeddings"],
    },
    {
      term: "LLM (Large Language Model)",
      definition:
        "A neural network trained on vast amounts of text data, capable of understanding and generating human-like text. Examples include GPT-4, Claude, and Gemini. LLMs power modern AI applications like chatbots and content generators.",
      relatedTerms: ["RAG", "Fine-tuning", "Prompt Engineering"],
    },
    {
      term: "Embeddings",
      definition:
        "Mathematical representations of text, images, or other data as vectors in high-dimensional space. Embeddings capture semantic meaning—similar concepts have similar embeddings. Used in search, clustering, and recommendation systems.",
      relatedTerms: ["Vector Database", "Semantic Search", "RAG"],
    },
    {
      term: "Vector Database",
      definition:
        "A database optimized for storing and querying high-dimensional vector data (embeddings). Enables fast semantic search and similarity matching. Examples: Pinecone, Weaviate, Supabase pgvector.",
      relatedTerms: ["Embeddings", "Semantic Search", "RAG"],
    },
    {
      term: "Prompt Engineering",
      definition:
        "The practice of crafting effective prompts to get desired outputs from LLMs. Techniques include clear instructions, examples, role-playing, and chain-of-thought reasoning. Critical skill for working with AI models.",
      relatedTerms: ["LLM", "Fine-tuning"],
    },
    {
      term: "Fine-tuning",
      definition:
        "The process of adapting a pre-trained LLM with additional training on domain-specific or custom data. Improves accuracy for specialized tasks but requires data and computational resources.",
      relatedTerms: ["LLM", "Transfer Learning"],
    },
    {
      term: "AI Agent",
      definition:
        "An autonomous AI system that can perceive its environment, make decisions, and take actions to achieve goals. Agents can use tools, call APIs, and execute multi-step workflows without human intervention.",
      relatedTerms: ["LLM", "Tool Use"],
    },
    {
      term: "Semantic Search",
      definition:
        "Search that understands the meaning of user queries and documents, rather than just matching keywords. Powered by embeddings and vector databases, semantic search finds conceptually similar content.",
      relatedTerms: ["Embeddings", "Vector Database", "RAG"],
    },
  ],
  "Full-Stack Development": [
    {
      term: "Full-Stack Development",
      definition:
        "The practice of building complete web applications across multiple layers: frontend (user interface), backend (servers and APIs), and databases. A full-stack developer has expertise in all these layers.",
      relatedTerms: ["Frontend", "Backend", "Database"],
    },
    {
      term: "Frontend",
      definition:
        "The client-side of a web application—everything users see and interact with. Built with technologies like HTML, CSS, JavaScript, and frameworks like React or Vue.",
      relatedTerms: ["React", "Next.js", "User Experience"],
    },
    {
      term: "Backend",
      definition:
        "Server-side logic that handles business logic, database interactions, and API endpoints. Users don't see the backend, but it powers the application. Built with languages like Node.js, Python, or Go.",
      relatedTerms: ["API", "Database", "Server"],
    },
    {
      term: "API (Application Programming Interface)",
      definition:
        "A contract between frontend and backend defining how they communicate. RESTful APIs use HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources.",
      relatedTerms: ["REST", "Backend", "HTTP"],
    },
    {
      term: "REST (Representational State Transfer)",
      definition:
        "An architectural style for building web APIs. APIs follow conventions: resources are identified by URLs, operations are HTTP methods, and responses are typically JSON.",
      relatedTerms: ["API", "HTTP", "JSON"],
    },
    {
      term: "Database",
      definition:
        "Organized storage system for application data. Two main types: SQL databases (PostgreSQL, MySQL) with structured tables, and NoSQL databases (MongoDB) with flexible documents.",
      relatedTerms: ["SQL", "NoSQL", "Data Model"],
    },
    {
      term: "SQL",
      definition:
        "Structured Query Language for managing relational databases. Excels with structured, interconnected data. PostgreSQL and MySQL are popular SQL databases.",
      relatedTerms: ["Database", "PostgreSQL", "Data"],
    },
    {
      term: "NoSQL",
      definition:
        "Non-relational databases optimized for flexible schemas and horizontal scaling. MongoDB stores documents (JSON-like records), enables quick iteration without migrations.",
      relatedTerms: ["Database", "MongoDB", "Flexibility"],
    },
    {
      term: "React",
      definition:
        "A JavaScript library for building user interfaces with reusable components. React manages state and efficiently updates the DOM when data changes. Foundation for modern frontend development.",
      relatedTerms: ["Frontend", "JavaScript", "Component"],
    },
    {
      term: "Next.js",
      definition:
        "A React framework that enables server-side rendering, static generation, API routes, and optimized performance. Simplifies building full-stack applications with React.",
      relatedTerms: ["React", "Full-Stack", "Server-Side Rendering"],
    },
    {
      term: "Node.js",
      definition:
        "JavaScript runtime for server-side development. Enables writing backend code in JavaScript using event-driven, non-blocking I/O. Popular for REST APIs and real-time applications.",
      relatedTerms: ["Backend", "JavaScript", "API"],
    },
    {
      term: "Authentication",
      definition:
        "Process of verifying user identity before granting access. Methods include passwords, OAuth (social login), and single sign-on (SSO). Different from authorization.",
      relatedTerms: ["Authorization", "Security", "OAuth"],
    },
    {
      term: "Authorization",
      definition:
        "Process of determining what authenticated users are allowed to do. Role-based access control (RBAC) assigns permissions based on user roles.",
      relatedTerms: ["Authentication", "Security", "RBAC"],
    },
  ],
  "SaaS & Product": [
    {
      term: "SaaS (Software-as-a-Service)",
      definition:
        "Software delivered over the internet via subscriptions. Users access applications through browsers without installation. Enables automatic updates, scalability, and recurring revenue for vendors.",
      relatedTerms: ["Multi-tenancy", "Subscription", "Cloud"],
    },
    {
      term: "MVP (Minimum Viable Product)",
      definition:
        "A product version with just enough features to satisfy early users and validate the core idea. MVP allows rapid testing and learning before building full features.",
      relatedTerms: ["Product Development", "Validation", "Iteration"],
    },
    {
      term: "Multi-tenancy",
      definition:
        "SaaS architecture serving multiple customers (tenants) from a single codebase. Requires data isolation, per-tenant customization, and efficient resource sharing.",
      relatedTerms: ["SaaS", "Data Isolation", "Scalability"],
    },
    {
      term: "Scalability",
      definition:
        "Ability of a system to handle growing workloads and user counts without loss of performance. Requires careful architecture from day one.",
      relatedTerms: ["Performance", "Load Balancing", "Infrastructure"],
    },
    {
      term: "Cloud",
      definition:
        "Computing resources (servers, storage, databases) accessed over the internet rather than owned on-premises. Providers like AWS provide infrastructure, platforms, and services.",
      relatedTerms: ["AWS", "Infrastructure", "DevOps"],
    },
    {
      term: "DevOps",
      definition:
        "Practice of automating infrastructure, deployment, and operations. CI/CD pipelines automatically test and deploy code. Reduces manual work and human error.",
      relatedTerms: ["CI/CD", "Automation", "Infrastructure"],
    },
    {
      term: "CI/CD (Continuous Integration/Continuous Deployment)",
      definition:
        "Automation practices: code changes are automatically tested and deployed. Enables rapid iteration and reduces bugs in production.",
      relatedTerms: ["DevOps", "Testing", "Deployment"],
    },
  ],
};

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Glossary" }]} />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Glossary
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Comprehensive definitions of AI, machine learning, and full-stack
            development terms. Clear explanations for technical and
            non-technical readers.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
          <h2 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Topics
          </h2>
          <ul className="space-y-2">
            {Object.keys(glossaryTerms).map((category) => (
              <li key={category}>
                <a
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Glossary Sections */}
        {Object.entries(glossaryTerms).map(([category, terms]) => (
          <section
            key={category}
            id={category.toLowerCase().replace(/\s+/g, "-")}
            className="mb-12"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              {category}
            </h2>

            <div className="space-y-6">
              {terms.map((item) => (
                <article
                  key={item.term}
                  className="rounded-lg border border-gray-200 p-6 dark:border-gray-800"
                  itemScope
                  itemType="https://schema.org/DefinedTerm"
                >
                  <h3
                    className="mb-3 text-xl font-semibold text-gray-900 dark:text-white"
                    itemProp="name"
                  >
                    {item.term}
                  </h3>

                  <p
                    className="mb-4 text-gray-700 dark:text-gray-300"
                    itemProp="description"
                  >
                    {item.definition}
                  </p>

                  {item.relatedTerms && item.relatedTerms.length > 0 && (
                    <div>
                      <p className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                        Related Terms:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.relatedTerms.map((relatedTerm) => (
                          <span
                            key={relatedTerm}
                            className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
                          >
                            {relatedTerm}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Additional Resources */}
        <section className="rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Want to Learn More?
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Check out the blog for detailed articles on these technologies and
            how to use them in real-world projects.
          </p>
        </section>
      </main>
    </div>
  );
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  category: "AI/ML" | "Full-Stack" | "SaaS" | "Product";
  tags: string[];
  readTime: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-rag-retrieval-augmented-generation",
    title: "What is RAG? A Complete Guide to Retrieval-Augmented Generation",
    description:
      "Understand RAG, how it works, why it matters, and how to implement it in your applications. Learn the difference between RAG and fine-tuning.",
    category: "AI/ML",
    tags: ["RAG", "LLM", "AI", "LangChain", "OpenAI"],
    author: "Vasanth Kumar",
    publishedDate: "2025-12-15",
    updatedDate: "2026-03-01",
    readTime: 12,
    featured: true,
    content: `
# What is RAG? A Complete Guide to Retrieval-Augmented Generation

Retrieval-Augmented Generation (RAG) is one of the most transformative patterns in modern AI applications. If you're building with LLMs, RAG is likely part of your tech stack—either now or soon.

## What is RAG?

RAG is a technique that combines two powerful capabilities:

1. **Retrieval**: searching through a knowledge base to find relevant information
2. **Generation**: using an LLM to synthesize responses based on retrieved context

Instead of relying solely on an LLM's training data (which becomes stale), RAG dynamically pulls relevant information from a knowledge base, then passes it to the LLM as context. This solves the hallucination problem: the LLM can now ground its response in actual, verified information.

## Why RAG Matters

**Accuracy**: RAG-powered systems cite their sources. Users see exactly where information came from, building trust.

**Freshness**: Your knowledge base can be updated daily. The LLM instantly uses current information without retraining.

**Cost Efficiency**: Fine-tuning a large language model costs thousands. RAG uses inference-only APIs, dramatically reducing costs.

**Customization**: RAG lets you inject domain-specific knowledge—company docs, product manuals, research papers—without retraining.

## How RAG Works (The Pipeline)

### 1. **Ingest & Split**
Your documents (PDFs, web pages, product guides) are loaded and split into manageable chunks. The key here is semantic chunking—preserving meaning across boundaries.

### 2. **Embed**
Each chunk is converted into a high-dimensional vector (embedding) using a model like OpenAI's text-embedding-3-small. Embeddings capture semantic meaning, so similar ideas get similar vectors.

### 3. **Store**
Vectors are stored in a vector database (Pinecone, Chroma, Qdrant, Weaviate). These databases support ultra-fast similarity search.

### 4. **Query Time**
When a user asks a question, that question is also embedded. The vector database finds the top-k most similar chunks (usually 3-5).

### 5. **Generate**
Those chunks are stuffed into the LLM's context window with a prompt like: *"Using only this context, answer the user's question."* The LLM generates a grounded response.

## RAG vs Fine-Tuning

People often ask: should I use RAG or fine-tuning?

**RAG is better for:**
- Frequently changing data (support docs, FAQs, news)
- Large-scale knowledge bases
- Cost sensitivity
- Explainability (you see retrieved sources)

**Fine-tuning is better for:**
- Stylistic / proprietary tone (e.g., brand voice)
- Very small, domain-specific vocabularies
- Rare or specialized patterns
- When latency matters (one forward pass vs. retrieval + generation)

**Reality**: most production systems use both.

## Real-World Example: DocMind

I built a RAG system called [DocMind](https://docmind.vasanthubs.co.in) that demonstrates this pattern. Users paste a URL, the system:

1. Scrapes the website using Puppeteer
2. Chunks the text intelligently
3. Embeds chunks via OpenAI
4. Stores vectors in-memory (scales to Pinecone)
5. Let users chat naturally about the website

The result? Users instantly query any website in natural language without manually reading it. That's RAG in action.

## Getting Started with RAG

If you want to build RAG:

**Minimal Stack:**
- LangChain (orchestration)
- OpenAI API (LLM + embeddings)
- Chroma (vector store, in-memory)

**Production Stack:**
- LangChain or LlamaIndex (orchestration)
- OpenAI or Anthropic (LLM)
- Pinecone or Weaviate (vector store)
- Next.js or FastAPI (frontend/API)

**Key Considerations:**
- Chunk size matters (512-1024 tokens typical)
- Overlap helps preserve context
- Retrieval quality determines output quality
- Monitor hallucinations even with RAG

## The Future of RAG

RAG is evolving rapidly:

- **Hybrid search** combining dense vectors + BM25 keywords
- **Multi-hop reasoning** retrieving documents iteratively
- **Adaptive chunking** sizing chunks by content structure
- **Real-time indexing** keeping knowledge bases fresh

RAG is foundational. Master it, and you can build nearly any LLM application.
    `,
  },
  {
    slug: "building-scalable-fullstack-apps-react-nodejs",
    title: "Building Scalable Full-Stack Applications with React and Node.js",
    description:
      "Learn architectural patterns, best practices, and real-world strategies for building production-ready full-stack applications that scale.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Architecture", "Scalability", "Database"],
    author: "Vasanth Kumar",
    publishedDate: "2025-11-20",
    updatedDate: "2026-03-01",
    readTime: 15,
    featured: true,
    content: `
# Building Scalable Full-Stack Applications with React and Node.js

Building a full-stack app that works is one thing. Building one that scales to millions of users is another. Here's what I've learned after building multiple production systems.

## Foundation: Monolith vs Microservices

Most startups should start with a monolith:

- Single codebase (easier to test, deploy)
- Shared database (simpler transactions)
- No network latency between services
- Single point of observability

**When to split?**
- Your deployment frequency drops
- You have clear service boundaries
- Your scaling needs diverge

The monolith-first approach let me ship fast at PDF Toolkit and DocMind. We could always refactor later.

## Frontend Architecture: React Best Practices

### Component Structure

Think in terms of containers (smart) and presentational (dumb) components:

\`\`\`tsx
// Container - handles logic
function ProjectCard({ projectId }) {
  const [project, setProject] = useState(null);
  useEffect(() => {
    fetch(\`/api/projects/\${projectId}\`)
      .then(r => r.json())
      .then(setProject);
  }, [projectId]);
  return <ProjectCardView project={project} />;
}

// Presentational - renders only
function ProjectCardView({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
\`\`\`

This separation makes testing easier and components reusable.

### State Management

Use Zustand or Jotai for small-to-medium apps, Redux for complex ones. Keep state as local as possible.

\`\`\`tsx
import { create } from 'zustand';

const useProjectStore = create((set) => ({
  projects: [],
  addProject: (project) => set((state) => ({
    projects: [...state.projects, project]
  }))
}));
\`\`\`

### Data Fetching

Use React Query (TanStack Query) for caching and synchronization:

\`\`\`tsx
const { data, isLoading } = useQuery({
  queryKey: ['projects'],
  queryFn: () => fetch('/api/projects').then(r => r.json())
});
\`\`\`

It handles caching, refetching, polling—all the hard parts.

## Backend Architecture: Node.js + Express

### Route Organization

Group by domain:

\`\`\`
/routes
  /projects.ts
  /auth.ts
  /users.ts
\`\`\`

Each route file exports a router:

\`\`\`tsx
export const projectRouter = express.Router();
projectRouter.get('/', getProjects);
projectRouter.post('/', createProject);
projectRouter.delete('/:id', deleteProject);
\`\`\`

### Middleware

Use middleware for cross-cutting concerns:

\`\`\`tsx
app.use(authMiddleware); // verify JWT
app.use(requestLogger); // log requests
app.use(errorHandler); // catch errors
\`\`\`

### Database Layer

Abstract database operations behind a repository layer:

\`\`\`tsx
class ProjectRepository {
  async findById(id) { /* query */ }
  async findAll() { /* query */ }
  async create(data) { /* insert */ }
  async update(id, data) { /* update */ }
  async delete(id) { /* delete */ }
}
\`\`\`

This decouples your routes from database specifics. Swap PostgreSQL for MongoDB—routes don't care.

## Database Design for Scale

### Normalization vs Denormalization

Normalize for writes, denormalize for reads:

- Critical data (users, transactions): normalized
- Analytics data: denormalized
- Slowly changing data: can be denormalized

### Indexing Strategy

Index what you query:

\`\`\`sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_created_at ON posts(created_at DESC);
\`\`\`

Missing indexes are a common scale killer.

### Connection Pooling

Use connection pooling (not raw connections):

\`\`\`tsx
const pool = new Pool({
  max: 20, // max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
\`\`\`

## Deployment & Infrastructure

### Docker & Containers

Containerize early:

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

### Environment Variables

Never hardcode secrets:

\`\`\`.env
DATABASE_URL=postgresql://user:pass@localhost/db
JWT_SECRET=your-secret-key
NODE_ENV=production
\`\`\`

### Monitoring & Logging

Use structured logging:

\`\`\`tsx
const logger = pino({
  level: process.env.LOG_LEVEL || 'info'
});

logger.info({ userId, action: 'login' });
logger.error({ error: err.message });
\`\`\`

Set up alerts for:
- Error rates > 5%
- Response time p95 > 500ms
- Database connection pool exhaustion

## Performance Optimization

### Frontend

- Code-split with Next.js
- Lazy load images
- Use CDNs for static assets
- Minify and compress everything

### Backend

- Cache at every layer (Redis, database query caching)
- Use pagination for large datasets
- Compress API responses (gzip)
- Batch database queries when possible

### Database

- Use read replicas for scaling reads
- Shard if needed (but do it late)
- Archive old data
- Maintain statistics for query optimizer

## Conclusion

Scalable full-stack apps aren't built; they're evolved. Start simple, measure bottlenecks, optimize strategically. The teams that win are those who understand their specific bottleneck and fix it—not those who over-engineer everything upfront.
    `,
  },
  {
    slug: "saas-mvp-validation-from-idea-to-first-customer",
    title: "SaaS MVP Validation: From Idea to First Customer in 12 Weeks",
    description:
      "A practical playbook for validating SaaS ideas quickly, building MVPs efficiently, and acquiring your first paying customers.",
    category: "SaaS",
    tags: ["SaaS", "MVP", "Startup", "Validation", "Product"],
    author: "Vasanth Kumar",
    publishedDate: "2025-10-05",
    updatedDate: "2026-03-01",
    readTime: 14,
    featured: true,
    content: `
# SaaS MVP Validation: From Idea to First Customer in 12 Weeks

The graveyard of startups is full of founders who built perfect features for problems nobody had. I've learned to validate rigorously before engineering.

## Week 1-2: Validate the Problem

### Problem Interviews (15 conversations)

Don't pitch. Ask:

- What's the current pain? (describe a recent frustration)
- What do they currently try? (what's the status quo?)
- How much time/money does it waste? (quantify the pain)
- Who else experiences this? (TAM estimation)

Target early adopters (people talking about the pain online, in forums, on Reddit).

### Research Your Competition

- Who's already trying to solve this?
- What are they doing well?
- Where are the complaints?

Example: Before DocMind, I researched RAG chatbot tools. I found 30+ competitors. But they all had:
- Login walls
- Privacy concerns
- Setup complexity

DocMind solved this by being client-side, no-login, deployment-ready. Clear differentiation.

## Week 3-4: Define Your MVP

### The Minimal Feature Set

Build only what proves the core value:

**Don't build:**
- User registrations (use Google OAuth)
- Billing (use Stripe or Gumroad)
- Admin dashboards (manage users via CSV)
- Multi-tenancy (start single-tenant)

**Do build:**
- The core value (RAG pipeline for DocMind)
- One way customers pay (Stripe link)
- Basic analytics (know who's using it)

### Co-Founder Reality Check

If building alone, cut scope by 50%. Seriously. I've seen founders spend 6 months on features worth $0.

## Week 5-10: Build with Focus

### Tech Stack: Choose Speed Over Perfection

- Frontend: Next.js (faster than rolling React)
- Backend: Node.js (move fast, optimize later)
- Database: PostgreSQL (proven, scalable)
- Hosting: Vercel or Railway (minimal DevOps)
- Auth: NextAuth.js (battle-tested)
- Payments: Stripe (handles everything)

### Build vs Buy

**Buy if:** 50+ companies sell it well.  
**Build if:** Nobody sells exactly what you need.

For DocMind, I couldn't find a "client-side RAG without login" tool, so I built it. For PDF Toolkit, pdf-lib already existed, so I used it.

### Ship Early, Ship Often

Deploy every 2-3 days. Use feature flags for incomplete work:

\`\`\`tsx
if (featureFlags.newPricingPage) {
  return <NewPricing />;
}
return <OldPricing />;
\`\`\`

### Code Quality During MVP

Write tests for:
- Critical paths (payment flow)
- Bug-prone areas (auth, database)

Skip tests for:
- UI elements
- Rapid prototypes

You'll refactor 90% of MVP code anyway. Don't over-engineer it.

## Week 11: Get First Customers

### Launch Channels

**Reddit**: Post in relevant subreddits. People are there asking your exact question.

**Niche Communities**: Slack groups, Discord servers, user forums.

**Twitter/X**: Share your process. People invest in founders, not just products.

**Your Network**: Tell everyone. 30% of first users are often personal connections.

### The Pitch

Don't sell features. Solve a problem:

*"Tired of copying and pasting data from PDFs? This tool merges PDFs in your browser—zero uploads, zero logins."*

### Discount First Customers

Offer 50% off first-year for early adopters. You need testimonials and usage data more than revenue.

## Week 12: Gather Feedback Loop

### What to Measure

- Daily/weekly active users
- Churn rate (users returning)
- Net Promoter Score (ask: "How likely to recommend?")
- Feature requests (what do they ask for?)

### Feedback Cycle

Every week: talk to 3-5 users. Take notes. Identify patterns.

If 3+ users ask for the same feature, build it.  
If 1 user asks, say "noted" and move on.

## Post-MVP: What Happens Next

### If Traction (>10 paying users):

1. Stabilize (fix bugs, improve reliability)
2. Listen (what do users need next?)
3. Acquire (invest in the channels working)

### If No Traction (<5 users):

1. Talk to non-users (why didn't they buy?)
2. Pivot or double-down based on learnings
3. Don't throw good money after bad

## Real Numbers: A Case Study

PDF Toolkit:
- 2 months to MVP (React + pdf-lib)
- 0 marketing spend in first month
- 500+ monthly active users from Reddit alone
- $200/month revenue (300 downloads)
- Built solo, $0 infrastructure cost (they paid)

It validated that "free, privacy-focused, client-side PDF" resonated. The business model came later.

## The Biggest MVP Mistakes

1. **Perfectionism**: Shipping after 6 months when 6 weeks would've validated faster
2. **Wrong customers**: Talks to enterprise instead of scrappy early adopters
3. **Fake traction**: Demos instead of real usage
4. **Scope creep**: Adding "one more feature" every week
5. **No differentiation**: Building exactly what competitors do

## The Mindset

Your MVP isn't your product. It's a learning machine. You're buying information:

- Is the problem real? ($0 spent)
- Do people care? (100 interviews, $0 spent)
- Will they pay? (MVP, $2k spent)
- Will they keep paying? (6 months usage, $10k spent)

Each phase is 10x more expensive than the last. De-risk early.

## Summary

SaaS success isn't about big ideas or perfect code. It's about finding a small, specific problem that enough people care about to pay for. Validate ruthlessly. Build fast. Listen closely.

The best SaaS founders aren't the best engineers—they're the best listeners.
    `,
  },
  {
    slug: "ai-integration-patterns-for-web-applications",
    title: "AI Integration Patterns for Web Applications",
    description:
      "Practical patterns for integrating LLMs into web apps: streaming responses, handling rate limits, cost optimization, and more.",
    category: "AI/ML",
    tags: ["LLM", "Integration", "Next.js", "Streaming", "Cost"],
    author: "Vasanth Kumar",
    publishedDate: "2025-09-12",
    updatedDate: "2026-03-01",
    readTime: 11,
    featured: false,
    content: `
# AI Integration Patterns for Web Applications

Integrating LLMs into web apps sounds simple until you hit production. Here are the patterns that work.

## Pattern 1: Streaming Responses

Users hate waiting for long responses. Stream them:

\`\`\`typescript
export async function POST(req: Request) {
  const { prompt } = await req.json();

  const stream = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    stream: true,
  });

  const reader = stream.toReadableStream();
  return new Response(reader);
}
\`\`\`

On the frontend:

\`\`\`typescript
const response = await fetch("/api/chat", { method: "POST", body });
const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  
  const text = decoder.decode(value);
  setResponse(prev => prev + text); // update UI in real-time
}
\`\`\`

Users see responses appearing word-by-word. Way better UX than waiting 5 seconds for the complete response.

## Pattern 2: Fallback Chains

Never trust a single API:

\`\`\`typescript
async function generateText(prompt: string) {
  try {
    // Try Claude first (best quality)
    return await anthropic.messages.create({...});
  } catch (error) {
    try {
      // Fall back to GPT
      return await openai.chat.completions.create({...});
    } catch (error) {
      // Fall back to local model
      return await localLLM.generate(prompt);
    }
  }
}
\`\`\`

This prevents outages from taking down your app.

## Pattern 3: Cost Optimization

LLM costs add up fast. Strategies:

**Use cheaper models for low-risk tasks:**
\`\`\`typescript
// High-stakes: use GPT-4
const response = await gpt4(prompt);

// Low-stakes: use gpt-3.5-turbo (1/10th the cost)
const summary = await gpt35(prompt);
\`\`\`

**Batch similar requests:**
\`\`\`typescript
// Bad: 100 separate API calls
for (let item of items) {
  await openai.chat.completions.create({ messages: [item] });
}

// Good: batch them
const responses = await openai.batch.create({
  requests: items.map(item => ({ messages: [item] }))
});
\`\`\`

**Cache responses:**
\`\`\`typescript
const cache = new Map();

async function askLLM(question: string) {
  if (cache.has(question)) {
    return cache.get(question);
  }
  
  const response = await openai.chat.completions.create({...});
  cache.set(question, response);
  return response;
}
\`\`\`

For DocMind, caching reduced API costs by 40%.

## Pattern 4: Rate Limiting

APIs have rate limits. Handle them gracefully:

\`\`\`typescript
import pLimit from "p-limit";

const limit = pLimit(5); // 5 concurrent requests

const promises = items.map(item =>
  limit(() => openai.chat.completions.create({...}))
);

await Promise.all(promises);
\`\`\`

Also implement exponential backoff:

\`\`\`typescript
async function retryWithBackoff(fn, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries - 1) throw error;
      const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
\`\`\`

## Pattern 5: Token Counting

Track tokens before sending requests:

\`\`\`typescript
import { encoding_for_model } from "js-tiktoken";

const enc = encoding_for_model("gpt-4");
const tokens = enc.encode(prompt).length;

if (tokens > 4000) {
  console.warn("Prompt too long, truncating...");
}
\`\`\`

Prevents surprise $100 bills from long prompts.

## Pattern 6: Safety Rails

Not all AI output is safe. Add guards:

\`\`\`typescript
// Check for dangerous content
const toxicity = await perspective.analyze(response);
if (toxicity.score > 0.7) {
  return "I can't help with that.";
}

// Check for hallucinations (for RAG)
if (!response.includes(citation)) {
  return "I don't have this information.";
}

// Check for PII leaks
const hasPII = /\d{3}-\d{2}-\d{4}/.test(response); // SSN pattern
if (hasPII) {
  return "Response redacted for privacy.";
}
\`\`\`

## Pattern 7: Observability

Track everything:

\`\`\`typescript
logger.info({
  event: "llm_request",
  model: "gpt-4",
  tokens_used: 234,
  latency_ms: 1500,
  cost_cents: 12,
  error: null
});
\`\`\`

This data is gold:
- Which models are slow?
- Which requests cost the most?
- What's failing?

## When NOT to Use LLMs

### Small, deterministic tasks

If you can write if/else logic, do it. LLMs are overkill and expensive.

### Real-time latency-critical apps

User hovers over a button, needs result in <50ms. LLMs take 500ms+. Use a rule engine.

### Zero-tolerance for errors

Medical diagnosis, legal contracts. LLMs hallucinate. Use expert systems or ask a human.

## Conclusion

LLM integration is becoming standard. The difference between good and bad implementations is usually observability and fallbacks. Know your costs, cache aggressively, and always have a plan B.
    `,
  },
  {
    slug: "nextjs-performance-optimization-core-web-vitals",
    title: "Next.js Performance Optimization: Crushing Core Web Vitals",
    description:
      "Advanced techniques for optimizing Next.js apps: image optimization, code splitting, caching strategies, and achieving perfect Lighthouse scores.",
    category: "Full-Stack",
    tags: ["Next.js", "Performance", "Optimization", "Core Web Vitals", "SEO"],
    author: "Vasanth Kumar",
    publishedDate: "2025-08-30",
    updatedDate: "2026-03-01",
    readTime: 13,
    featured: false,
    content: `
# Next.js Performance Optimization: Crushing Core Web Vitals

Google now ranks by performance metrics, not just content. Here's how to get green scores.

## Understanding Core Web Vitals

Three metrics Google cares about:

1. **LCP (Largest Contentful Paint)**: Largest visible element renders. Target: <2.5s
2. **FID (First Input Delay)**: Time from user input to JS response. Target: <100ms
3. **CLS (Cumulative Layout Shift)**: How much does layout move? Target: <0.1

Poor scores = lower rankings = less traffic = missed revenue.

## Image Optimization: The Biggest Win

### Use Next.js Image Component

Instead of:
\`\`\`tsx
<img src="/hero.jpg" alt="Hero" /> // BAD: no optimization
\`\`\`

Do this:
\`\`\`tsx
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={630}
  priority // Only for LCP images
  sizes="(max-width: 640px) 100vw, 50vw"
/>
\`\`\`

Next.js automatically:
- Resizes for different screen sizes
- Converts to WebP (30% smaller)
- Lazy loads below-the-fold
- Prevents layout shift (fixed aspect ratio)

### Image Formats Matter

WebP is 25-35% smaller than JPEG. AVIF is another 20% smaller.

Let the browser choose:
\`\`\`tsx
<picture>
  <source srcSet="/image.avif" type="image/avif" />
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="Fallback" />
</picture>
\`\`\`

Or let Next.js handle it with \`priority\` and \`sizes\` attributes.

## Code Splitting & Lazy Loading

### Dynamic Imports

Don't load code users won't see:

\`\`\`tsx
import dynamic from "next/dynamic";

const HeavyDashboard = dynamic(() => import("./dashboard"), {
  loading: <Skeleton />
});

export default function Home() {
  return <HeavyDashboard />; // Only loads when Home renders
}
\`\`\`

### Route-Based Code Splitting

With Next.js App Router, every page is an automatic code split. A user on /contact doesn't download /blog code.

### Component-Level Splitting

Split large components:

\`\`\`tsx
const Modal = dynamic(() => import("./modal"), {
  ssr: false, // Don't render on server
});
\`\`\`

## Fonts: Often Overlooked

System fonts load instantly. Google Fonts? Not so much.

\`\`\`tsx
// next.config.ts
const nextConfig = {
  optimizeFonts: true,
};
\`\`\`

Better: use \`display: swap\` to show fallback while loading:

\`\`\`css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
\`\`\`

Or self-host fonts (eliminates Google network request):

\`\`\`bash
npm install @next/font
\`\`\`

\`\`\`tsx
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
  return (
    <html className={inter.className}>
      ...
    </html>
  );
}
\`\`\`

## Caching Strategy

### Static Generation (Fastest)

Build-time HTML. Perfect for marketing pages:

\`\`\`tsx
export const revalidate = 86400; // Revalidate once per day

export default function About() {
  return <div>About Page</div>;
}
\`\`\`

### ISR (Incremental Static Regeneration)

Revalidate in background:

\`\`\`tsx
export const revalidate = 3600; // Revalidate every hour

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return <article>{post.content}</article>;
}
\`\`\`

Google crawls static pages. They rank better.

### Server Components (When Content Changes)

Use server components for fresh data:

\`\`\`tsx
// No "use client" = server component

export default async function Dashboard() {
  const data = await fetch("https://api.example.com/data");
  return <div>{data}</div>;
}
\`\`\`

## JavaScript Bloat

### Third-Party Scripts

Scripts like analytics and ads murder performance. Load them asynchronously:

\`\`\`tsx
<Script
  src="https://cdn.example.com/analytics.js"
  strategy="lazyOnload"
/>
\`\`\`

Strategies:
- \`beforeInteractive\`: Critical (auth, theme)
- \`afterInteractive\`: Normal (analytics, ads)
- \`lazyOnload\`: Low priority (chat widget)

### React DevTools in Production?

That's costing you 500ms+ LCP. Use:

\`\`\`tsx
if (process.env.NODE_ENV === "production") {
  // Remove debugging libraries
}
\`\`\`

## Web Vitals Monitoring

Install the library:

\`\`\`bash
npm install web-vitals
\`\`\`

Track metrics:

\`\`\`tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
\`\`\`

Send to analytics:

\`\`\`tsx
function sendToAnalytics(metric) {
  fetch("/api/analytics", {
    method: "POST",
    body: JSON.stringify(metric),
  });
}

getLCP(sendToAnalytics);
\`\`\`

Now you can see which pages are slow in production.

## Layout Shift Fixes

### Specify Image Dimensions

Missing heights cause CLS:

\`\`\`tsx
// Good
<Image width={200} height={200} src="..." />

// Bad
<Image src="..." /> // No height = layout shift waiting for load
\`\`\`

### Reserve Space for Ads/Embeds

\`\`\`css
.ad-container {
  width: 300px;
  height: 250px; /* Reserved space */
  overflow: hidden;
}
\`\`\`

## The Checklist

- [ ] All LCP images use \`priority={true}\`
- [ ] Web fonts use \`display: swap\`
- [ ] LCP < 2.5s
- [ ] FID/INP < 100ms (avoid large JS)
- [ ] CLS < 0.1 (all heights specified)
- [ ] Minified CSS/JS
- [ ] Images use WebP/AVIF
- [ ] Third-party scripts use \`lazyOnload\`
- [ ] No unused CSS/JS shipped

## Result

With these optimizations, most Next.js sites score 90+ on Lighthouse. And Google ranks them higher.

Performance is a feature. Treat it like one.
    `,
  },
];

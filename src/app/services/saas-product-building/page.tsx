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
  title: "SaaS Product Building Services",
  description:
    "Build and scale SaaS products from MVP to production. Complete product development, architecture, deployment, and scaling.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/saas-product-building`,
  },
  openGraph: {
    title: "SaaS Product Building Services",
    description:
      "Expert SaaS product development. From idea to scaling production systems.",
    url: `${siteConfig.siteUrl}/services/saas-product-building`,
    type: "website",
  },
};

export default function SaasProductServicePage() {
  const serviceSchema = createServiceSchema(
    "SaaS Product Building",
    "Complete SaaS product development from MVP to production. Architecture, development, deployment, and scaling services.",
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SchemaInjector schema={serviceSchema} />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Services", url: "/services" },
            { name: "SaaS Product Building" },
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            SaaS Product Building
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            From concept to scale. I build complete SaaS products with focus on
            product-market fit, scalable architecture, and sustainable growth.
          </p>
        </div>

        {/* What Is It */}
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            What is SaaS Product Building?
          </h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            SaaS (Software-as-a-Service) means delivering software over the
            internet via subscriptions, rather than one-time purchases. SaaS
            product building requires different thinking than traditional
            software: multi-tenant architecture, payment processing, scaling
            infrastructure, customer onboarding, analytics tracking, and
            retention strategies.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I specialize in building complete SaaS products: from validating
            your idea with an MVP, to building the full product, to scaling to
            thousands of paying customers.
          </p>
        </section>

        {/* Summary Box */}
        <SummaryBox
          title="Service Overview"
          items={[
            { label: "Phases", value: "MVP → Product → Scale" },
            {
              label: "Expertise",
              value: "Product architecture, multi-tenancy, payments",
            },
            {
              label: "Tools",
              value: "Stripe, Auth0, AWS, monitoring, analytics",
            },
            {
              label: "Team Support",
              value: "Solo builders to enterprise teams",
            },
            {
              label: "Engagement",
              value: "Project, retainer, or equity-based",
            },
            {
              label: "Timeline",
              value: "3-6 months MVP, 6-12+ months full product",
            },
          ]}
          description="End-to-end SaaS product development including market validation, architecture, full-stack development, payment integration, deployment, and scaling strategies."
        />

        {/* The SaaS Journey */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            The SaaS Journey
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg border-l-4 border-indigo-600 bg-indigo-50 p-6 dark:bg-indigo-950">
              <h3 className="mb-2 text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                Phase 1: Validation (Weeks 1-4)
              </h3>
              <p className="text-indigo-900 dark:text-indigo-100">
                Validate your idea: interviews, market research, competitive
                analysis, and user feedback. Define core features for MVP.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
                Phase 2: MVP (Weeks 4-12)
              </h3>
              <p className="text-blue-900 dark:text-blue-100">
                Build minimal viable product with core features only. Focus on
                getting it in front of real users quickly. Stripe integration
                for basic monetization.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-cyan-600 bg-cyan-50 p-6 dark:bg-cyan-950">
              <h3 className="mb-2 text-lg font-semibold text-cyan-900 dark:text-cyan-100">
                Phase 3: Launch (Weeks 12-16)
              </h3>
              <p className="text-cyan-900 dark:text-cyan-100">
                Beta testing, customer onboarding, analytics setup, and launch
                to early adopters. Gather feedback and identify pain points.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-6 dark:bg-green-950">
              <h3 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
                Phase 4: Scale (Months 4+)
              </h3>
              <p className="text-green-900 dark:text-green-100">
                Optimize architecture, add advanced features, implement customer
                support systems, and focus on retention and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Critical SaaS Features */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Core SaaS Components
          </h2>

          <QuotableInsight
            insight="A great SaaS product isn't just good software—it's software that users want to pay for because it saves them time or makes them money."
            author={siteConfig.name}
            role="SaaS Product Builder"
          />

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                💳 Monetization
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Stripe integration</li>
                <li>✓ Multiple pricing tiers</li>
                <li>✓ Usage-based billing</li>
                <li>✓ Subscription management</li>
                <li>✓ Invoice generation</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                🔐 Authentication & Security
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ User authentication (passwords, OAuth, SSO)</li>
                <li>✓ Role-based access control (RBAC)</li>
                <li>✓ Data encryption</li>
                <li>✓ API key management</li>
                <li>✓ Compliance (GDPR, SOC 2)</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                📊 Analytics & Metrics
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Product usage tracking</li>
                <li>✓ User behavior analytics</li>
                <li>✓ Revenue dashboards</li>
                <li>✓ Churn analysis</li>
                <li>✓ A/B testing framework</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                🎯 Growth & Retention
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Email notifications</li>
                <li>✓ User onboarding flows</li>
                <li>✓ Feature flags</li>
                <li>✓ In-app messaging</li>
                <li>✓ API documentation</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                ⚙️ Operations
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Database backups</li>
                <li>✓ Monitoring & alerts</li>
                <li>✓ Auto-scaling</li>
                <li>✓ Logging & debugging</li>
                <li>✓ CI/CD pipelines</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                👥 Customer Support
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Help center / docs</li>
                <li>✓ Support ticketing</li>
                <li>✓ Knowledge base</li>
                <li>✓ Email support integration</li>
                <li>✓ Customer feedback loops</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Multi-Tenancy */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Multi-Tenancy Architecture
          </h2>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            SaaS products serve multiple customers (tenants) from a single
            codebase. This requires careful architecture to ensure data
            isolation, per-tenant customization, and efficient resource usage.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-gray-900">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">
                    Aspect
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-white">
                    Considerations
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">
                    Data Isolation
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Separate schemas/databases per tenant vs. shared database
                    with row-level security
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">
                    Customization
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    White-labeling, custom domains, feature toggles per tenant
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">
                    Performance
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Query optimization, caching strategies, load balancing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">
                    Billing & Quotas
                  </td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    Usage tracking, overage charges, seat-based pricing, feature
                    limits
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Case Study */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            SaaS Examples in My Portfolio
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="https://pdf-toolkit.vasanthubs.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 dark:border-gray-800"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                PDF Toolkit (SaaS)
              </h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                Production SaaS tool for PDF processing. Demonstrates full SaaS
                implementation: user authentication, multiple feature tiers,
                usage tracking, and real-time processing.
              </p>
              <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                Visit live app →
              </span>
            </a>

            <Link
              href="/case-studies/docmind"
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-indigo-600 dark:border-gray-800"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">
                DocMind (AI SaaS)
              </h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                AI-powered document intelligence SaaS. Shows how to build SaaS
                around AI features: RAG integration, document processing,
                real-time chat.
              </p>
              <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                View case study →
              </span>
            </Link>
          </div>
        </section>

        {/* Pricing Models */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            SaaS Pricing Models
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                📊 Tiered Pricing
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Starter ($9), Pro ($29), Enterprise ($99+). Each tier unlocks
                more features. Best for products with clear feature
                differentiation.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                📈 Usage-Based
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pay-per-use: $0.10 per API call, $5 per 1000 documents
                processed. Fair pricing that scales with customer value.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                👥 Seat-Based
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                $5 per user/month. Users invite teammates. Good for
                collaboration tools and enterprise software.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          items={[
            {
              question: "How do I know if my idea is viable for SaaS?",
              answer:
                "I help validate during discovery: market sizing, user interviews, competitive analysis, and problem validation. If customers aren't willing to pay for your solution, we iterate before building. Validation typically takes 2-4 weeks.",
            },
            {
              question: "How much does it cost to build a SaaS product?",
              answer:
                "MVP: $15,000-40,000 (2-3 months dev). Full product: $40,000-100,000+ (5-6 months). Varies based on complexity, team size, and features. I offer flexible engagement options including revenue-share for promising ideas.",
            },
            {
              question:
                "Should I use a SaaS framework (like Supabase) or build custom?",
              answer:
                "Most SaaS start with custom builds for flexibility. Frameworks speed up development but limit customization. I recommend custom builds for products needing differentiation or complex business logic.",
            },
            {
              question: "How do I handle payment processing securely?",
              answer:
                "Use Stripe (recommended) - they handle PCI compliance and security. Never store credit cards directly. I implement Stripe correctly with webhooks for subscription management, invoicing, and refunds.",
            },
            {
              question: "What about hosting, scaling, and infrastructure?",
              answer:
                "I set up production-grade infrastructure on AWS or similar. Auto-scaling handles growth. Costs start at $200-500/month for small, scale to thousands with growth. Monitoring and alerts prevent downtime.",
            },
            {
              question: "How do I know when to hire a technical co-founder?",
              answer:
                "After MVP validation with real paying customers (3-5 paying users). At that point, growth requires more development speed than solo building allows.",
            },
          ]}
        />

        {/* CTA */}
        <section className="rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Let's Build Your SaaS Product
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Whether you're at the idea stage or ready to scale, let's discuss
            how to build a successful SaaS product together.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Start Your SaaS
          </Link>
        </section>
      </main>
    </div>
  );
}

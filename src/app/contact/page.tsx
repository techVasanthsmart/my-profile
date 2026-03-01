import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Contact - Get In Touch",
  description:
    "Reach out to Vasanth Kumar for full-stack development, AI/ML projects, or SaaS product building. Available for collaboration.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact - Get In Touch",
    description:
      "Let's discuss your project and how I can help bring your vision to life.",
    url: `${siteConfig.siteUrl}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Contact" }]} />

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            I'm available for full-stack development, AI/ML projects, SaaS
            product building, and consulting. Reach out to discuss your project.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {/* Email */}
          <div className="rounded-lg border border-gray-200 p-8 dark:border-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              ✉️ Email
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The fastest way to reach me. I typically respond within 24 hours.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* LinkedIn  */}
          <div className="rounded-lg border border-gray-200 p-8 dark:border-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              💼 LinkedIn
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Connect on LinkedIn to view my professional experience and
              recommendations.
            </p>
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Visit LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="rounded-lg border border-gray-200 p-8 dark:border-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              💻 GitHub
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Check out my code, projects, and open-source contributions.
            </p>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700"
            >
              Visit GitHub
            </a>
          </div>

          {/* Location */}
          <div className="rounded-lg border border-gray-200 p-8 dark:border-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              🌍 Location
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {siteConfig.Location} based. Available for projects worldwide with
              flexible timezone coordination.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              No geographical limitations on collaboration.
            </p>
          </div>
        </div>

        {/* Response Time */}
        <div className="mb-12 rounded-lg bg-indigo-50 p-8 dark:bg-indigo-950">
          <h2 className="mb-4 text-2xl font-bold text-indigo-900 dark:text-indigo-100">
            ⏰ Response Commitment
          </h2>
          <ul className="space-y-3 text-indigo-900 dark:text-indigo-100">
            <li>✓ Respond to inquiries within 24 hours</li>
            <li>✓ Initial consultation call within 48 hours</li>
            <li>✓ Detailed proposal within 3-5 business days</li>
            <li>✓ Project updates at least weekly during development</li>
          </ul>
        </div>

        {/* Process */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                1
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Reach Out
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Send me an email or message on LinkedIn with details about
                  your project.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                2
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Initial Consultation
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We schedule a call to understand your goals, timeline, budget,
                  and technical requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                3
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Proposal & Agreement
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I provide a detailed proposal outlining scope, timeline,
                  deliverables, and pricing. We finalize terms.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                4
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Development Starts
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Weekly syncs, regular updates, and collaborative development.
                  You're involved throughout.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                5
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Launch & Support
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Deploy to production, hand off documentation, and provide
                  post-launch support as needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Common Questions
          </h2>

          <div className="space-y-4">
            <details className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                What information should I provide in my initial inquiry?
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <p>Include:</p>
                <ul className="mt-2 ml-4 space-y-1 list-disc">
                  <li>Brief project description</li>
                  <li>Your goals and timeline</li>
                  <li>Budget (if you have one)</li>
                  <li>Technical requirements or preferences</li>
                  <li>Key features for MVP</li>
                </ul>
              </div>
            </details>

            <details className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                What are your rates?
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <p>I work with clients on multiple models:</p>
                <ul className="mt-2 ml-4 space-y-1 list-disc">
                  <li>
                    <strong>Project-based:</strong> Fixed scope, fixed price
                    (recommended)
                  </li>
                  <li>
                    <strong>Time & materials:</strong> Hourly rate with time
                    tracking
                  </li>
                  <li>
                    <strong>Retainer:</strong> Ongoing support for established
                    products
                  </li>
                  <li>
                    <strong>Revenue-share:</strong> For promising SaaS ideas
                  </li>
                </ul>
                <p className="mt-2">
                  Rates depend on project complexity, timeline, and engagement
                  type. We'll discuss this during consultation.
                </p>
              </div>
            </details>

            <details className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                Do you sign NDAs?
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <p>
                  Yes, absolutely. I'm happy to sign NDAs to protect your
                  confidential information and business ideas.
                </p>
              </div>
            </details>

            <details className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                Can you work with my existing team?
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <p>
                  Yes! I can integrate with existing teams, work as a solo
                  developer, or lead development. I adapt to your team structure
                  and processes.
                </p>
              </div>
            </details>

            <details className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                How soon can you start?
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <p>
                  Immediate availability for new projects. We can start right
                  after contracting and setup. For retainer clients, we can
                  often start within 1-2 weeks.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Send me an email with your project details or book a call to discuss
            further.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-center font-semibold text-white hover:bg-indigo-700"
            >
              Send Email
            </a>
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-indigo-600 px-6 py-3 text-center font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
            >
              Message on LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

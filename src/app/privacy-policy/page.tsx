import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Vasanth Kumar's portfolio and services.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy-policy`,
  },
  robots: {
    index: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Privacy Policy" }]} />

        <article className="prose prose-invert max-w-none">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
          </h1>

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
          </p>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              This Privacy Policy explains how Vasanth Kumar collects, uses, and
              protects your information when you visit our website
              (vasanthubs.co.in) and services. We are committed to ensuring your
              privacy and maintaining the confidentiality of your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              1. Information We Collect
            </h2>

            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              1.1 Information You Provide
            </h3>
            <ul className="mb-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Contact Information:</strong> When you contact us via
                email or forms, we collect your name, email address, and message
                content.
              </li>
              <li>
                <strong>Project Information:</strong> During consultations, we
                may collect details about your project, business needs, and
                technical requirements.
              </li>
            </ul>

            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              1.2 Information Collected Automatically
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Analytics:</strong> We use Vercel Analytics to
                understand how visitors use our website (pages visited, time
                spent, device type).
              </li>
              <li>
                <strong>Cookies:</strong> Our website uses minimal cookies for
                theme preferences and analytics. No tracking for advertising
                purposes.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              2. How We Use Your Information
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Respond to inquiries and provide requested information</li>
              <li>✓ Discuss potential projects and provide proposals</li>
              <li>
                ✓ Understand website usage patterns and improve user experience
              </li>
              <li>✓ Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              3. Data Sharing and Disclosure
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              We{`'`}re committed to protecting your privacy and do not share
              your personal information with third parties, except:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Legal Requirements:</strong> If required by law or
                government requests
              </li>
              <li>
                <strong>Service Providers:</strong> Third-party services that
                help us operate (hosting, analytics) under strict
                confidentiality agreements
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              4. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We implement industry-standard security measures including:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ HTTPS encryption for all communications</li>
              <li>✓ Secure email storage with encryption</li>
              <li>✓ Regular security updates</li>
              <li>✓ No storage of sensitive financial information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              5. Your Rights
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Access personal information we hold about you</li>
              <li>✓ Request correction of inaccurate information</li>
              <li>✓ Request deletion of your information</li>
              <li>✓ Opt-out of communications</li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              To exercise these rights, contact {siteConfig.email}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              6. Data Retention
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We retain your information only as long as necessary to provide
              services or comply with legal obligations. Project-related
              information is retained for the duration of our engagement and a
              reasonable period thereafter for reference and legal compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              7. Third-Party Services
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Vercel Analytics:</strong> Collects anonymous usage
                data. Vercel is GDPR compliant. Learn more at{" "}
                <a
                  href="https://vercel.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Vercel Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this privacy policy to reflect changes in our
              practices or for other operational, legal, or regulatory reasons.
              We{`'`}ll notify you of material changes via email or by prominent
              notice on our website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              9. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have questions about this privacy policy or our practices,
              contact:
            </p>
            <div className="mt-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
              <p className="text-gray-900 dark:text-white">
                <strong>Vasanth Kumar</strong>
                <br />
                Email: {siteConfig.email}
                <br />
                Website: {siteConfig.siteUrl}
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

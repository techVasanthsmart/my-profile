import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * Author bio component
 * Displayed at the end of articles, case studies, and blog posts
 * E-E-A-T signal: establishes authoritativeness and builds trust
 */

interface AuthorBioProps {
  className?: string;
  showLinks?: boolean;
}

export function AuthorBio({
  className = "",
  showLinks = true,
}: AuthorBioProps) {
  return (
    <article
      className={`mt-12 border-t-2 border-gray-200 pt-8 dark:border-gray-800 ${className}`}
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Image
            src="/svk.png"
            alt={siteConfig.name}
            width={96}
            height={96}
            className="rounded-full"
            itemProp="image"
          />
        </div>

        {/* Bio content */}
        <div className="flex-1">
          <div className="mb-2">
            <Link
              href="/about"
              className="text-lg font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              itemProp="url"
            >
              <span itemProp="name">{siteConfig.name}</span>
            </Link>
            <p
              className="text-sm text-gray-600 dark:text-gray-400"
              itemProp="jobTitle"
            >
              {siteConfig.brandPositioning}
            </p>
          </div>

          <p
            className="mb-3 text-gray-700 dark:text-gray-300"
            itemProp="description"
          >
            {siteConfig.yearsExperience}+ years of experience building scalable
            web applications and AI-powered products. Passionate about
            end-to-end product development, clean architecture, and solving
            real-world problems.
          </p>

          {showLinks && (
            <div className="flex gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-gray-900 px-3 py-2 text-sm text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                GitHub
              </a>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
              >
                LinkedIn
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default AuthorBio;

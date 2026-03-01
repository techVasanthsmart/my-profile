import { ReactNode } from "react";

/**
 * Quotable insight component
 * Used throughout articles and case studies to highlight key insights
 * Formatted for easy extraction and citation by LLMs (GEO optimization)
 */

interface QuotableInsightProps {
  insight: string | ReactNode;
  author?: string;
  role?: string;
  source?: string;
  className?: string;
}

export function QuotableInsight({
  insight,
  author,
  role,
  source,
  className = "",
}: QuotableInsightProps) {
  return (
    <blockquote
      className={`my-6 border-l-4 border-indigo-500 bg-indigo-50 p-6 italic dark:bg-indigo-950 ${className}`}
      role="doc-pullquote"
    >
      <p className="mb-4 text-lg text-gray-900 dark:text-gray-100">
        "{insight}"
      </p>

      <footer className="text-sm text-gray-700 dark:text-gray-400">
        {author && (
          <>
            <span className="font-medium text-gray-900 dark:text-white">
              — {author}
            </span>
            {role && <span className="before:content-[',_']">{role}</span>}
          </>
        )}
        {source && !author && <span>— {source}</span>}
      </footer>
    </blockquote>
  );
}

export default QuotableInsight;

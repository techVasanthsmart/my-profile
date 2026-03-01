import { ReactNode } from "react";

/**
 * Summary box component
 * Used at the top of articles, case studies, and service pages
 * Displays key facts in a visually distinct card format
 * Optimized for featured snippet extraction
 */

interface SummaryBoxProps {
  title?: string;
  items: Array<{
    label: string;
    value: string | ReactNode;
  }>;
  description?: string | ReactNode;
  className?: string;
}

export function SummaryBox({
  title,
  items,
  description,
  className = "",
}: SummaryBoxProps) {
  return (
    <aside
      className={`mb-8 rounded-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 dark:border-indigo-900 dark:from-indigo-950 dark:to-blue-950 ${className}`}
      role="complementary"
      aria-label={title || "Summary"}
    >
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-indigo-900 dark:text-indigo-100">
          {title}
        </h3>
      )}

      <dl className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-start justify-between">
            <dt className="font-medium text-gray-700 dark:text-gray-300">
              {item.label}
            </dt>
            <dd className="text-right text-gray-900 dark:text-white">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      {description && (
        <div className="mt-4 border-t border-indigo-200 pt-4 dark:border-indigo-900">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      )}
    </aside>
  );
}

export default SummaryBox;

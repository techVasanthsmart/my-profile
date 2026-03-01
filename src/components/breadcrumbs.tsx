import { ReactNode } from "react";

/**
 * Breadcrumb component for navigation and schema markup
 * Automatically injects BreadcrumbList schema
 */

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /**
   * If true, includes schema markup injection
   * @default true
   */
  withSchema?: boolean;
}

export function Breadcrumbs({ items, withSchema = true }: BreadcrumbsProps) {
  const homeBreadcrumb: BreadcrumbItem = {
    name: "Home",
    url: "/",
  };

  const allItems = [homeBreadcrumb, ...items];
  const schemaItems = allItems.map((item, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    name: item.name,
    item: item.url
      ? new URL(item.url, "https://vasanthubs.co.in").href
      : undefined,
  }));

  return (
    <>
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: schemaItems,
            }),
          }}
        />
      )}
      <nav aria-label="breadcrumb" className="mb-6">
        <ol className="flex flex-wrap gap-2 text-sm">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.url ? (
                <a href={item.url} className="text-indigo-600 hover:underline">
                  {item.name}
                </a>
              ) : (
                <span className="text-gray-900 dark:text-white">
                  {item.name}
                </span>
              )}
              {index < allItems.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs;

import { ReactNode } from "react";

/**
 * FAQ Section component
 * Displays frequently asked questions in an accordion format
 * Optimized for answer engine extraction (AEO)
 * Includes direct answer paragraphs (40-60 words) for featured snippets
 */

interface FAQItem {
  question: string;
  answer: string | ReactNode;
  category?: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  items: FAQItem[];
  className?: string;
  withSchema?: boolean;
  schemaId?: string;
}

export function FAQSection({
  title,
  description,
  items,
  className = "",
  withSchema = true,
  schemaId = "faq-section",
}: FAQSectionProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          typeof item.answer === "string"
            ? item.answer
            : item.answer?.toString() || "",
      },
    })),
  };

  return (
    <section
      className={`my-12 ${className}`}
      id={schemaId}
      itemScope
      itemType={withSchema ? "https://schema.org/FAQPage" : undefined}
    >
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      )}

      {title && (
        <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      {description && (
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          {description}
        </p>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            category={item.category}
            withSchema={false}
          />
        ))}
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string | ReactNode;
  category?: string;
  withSchema?: boolean;
}

function FAQItem({
  question,
  answer,
  category,
  withSchema = true,
}: FAQItemProps) {
  return (
    <details
      className="group rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900"
      itemScope={withSchema ? true : undefined}
      itemType={withSchema ? "https://schema.org/Question" : undefined}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-gray-900 dark:text-white">
        <span itemProp={withSchema ? "name" : undefined}>{question}</span>
        <span className="transition-transform group-open:rotate-180">▼</span>
      </summary>

      <div className="mt-4 text-gray-700 dark:text-gray-300">
        {typeof answer === "string" ? (
          <div
            itemProp={withSchema ? "acceptedAnswer" : undefined}
            itemScope={withSchema ? true : undefined}
            itemType={withSchema ? "https://schema.org/Answer" : undefined}
          >
            <p itemProp={withSchema ? "text" : undefined}>{answer}</p>
          </div>
        ) : (
          <div
            itemProp={withSchema ? "acceptedAnswer" : undefined}
            itemScope={withSchema ? true : undefined}
            itemType={withSchema ? "https://schema.org/Answer" : undefined}
          >
            <div itemProp={withSchema ? "text" : undefined}>{answer}</div>
          </div>
        )}
      </div>

      {category && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Category: {category}
        </p>
      )}
    </details>
  );
}

export default FAQSection;

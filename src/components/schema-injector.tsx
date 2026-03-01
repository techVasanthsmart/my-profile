/**
 * Schema script injector component
 * Use on individual pages to inject page-specific schema markup
 */

interface SchemaInjectorProps {
  schema: Record<string, any>;
}

export function SchemaInjector({ schema }: SchemaInjectorProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default SchemaInjector;

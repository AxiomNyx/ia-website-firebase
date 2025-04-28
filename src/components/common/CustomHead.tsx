tsx
import type { Metadata } from 'next';

export default function CustomHead({ metadata }: { metadata: Metadata }) {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords?.join(', ')} />
      <meta name="authors" content={metadata.authors?.map((author) => author.name).join(', ')} />
    </head>
  );
}7
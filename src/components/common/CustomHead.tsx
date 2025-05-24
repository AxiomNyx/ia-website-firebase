// For page-specific metadata
import Head from 'next/head'

interface CustomHeadProps {
  title?: string
  description?: string
  ogImage?: string
  canonicalUrl?: string
}

export default function CustomHead({
  title = 'Innervate Agency | Naturewave Digital Marketing',
  description = 'A modern marketing agency blending Idaho\'s breathtaking landscapes with cutting-edge digital innovation to create a unique naturewave aesthetic.',
  ogImage = '/images/og-image.jpg',
  canonicalUrl = 'https://innervate.agency',
}: CustomHeadProps) {
  const fullTitle = title.includes('Innervate Agency') 
    ? title 
    : `${title} | Innervate Agency`
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}
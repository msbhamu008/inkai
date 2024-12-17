import { Helmet } from 'react-helmet-async';

interface SEOMetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export default function SEOMetaTags({
  title = 'Ink - AI-Powered Assessment Platform',
  description = 'Transform your educational assessment with Ink\'s AI-powered platform. Create, grade, and analyze assessments efficiently.',
  keywords = 'AI assessment, education technology, automated grading, learning analytics, educational platform',
  ogImage = '/images/ink_og_image.png',
  ogUrl = 'https://ink.education',
  canonical,
}: SEOMetaTagsProps) {
  const siteUrl = 'https://ink.education'; // Replace with your actual domain

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Ink Education" />
    </Helmet>
  );
}

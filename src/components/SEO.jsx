import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Click Nova - Best Digital Marketing Agency in India | #1 Social Media, Google Ads & Website Development Company",
  description = "Click Nova is India's leading digital marketing agency offering expert social media marketing, Google Ads, Facebook Ads, Instagram Ads, YouTube Ads, SEO services, website development, ecommerce solutions, mobile app development, and custom software development.",
  keywords = "digital marketing agency, best digital marketing agency, digital marketing company, top digital marketing agency in India, social media marketing, Google ads, Facebook ads, Instagram ads, YouTube ads, SEO services, website development, mobile app development, software development, ecommerce website",
  canonical = "https://www.clicknova.in",
  ogImage = "https://www.clicknova.in/og-image.jpg",
  ogType = "website",
  author = "Click Nova",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Click Nova",
    "url": "https://www.clicknova.in",
    "logo": "https://www.clicknova.in/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/clicknova",
      "https://www.instagram.com/clicknova",
      "https://www.linkedin.com/company/clicknova",
      "https://twitter.com/clicknova"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Click Nova" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@clicknova" />
      <meta name="twitter:creator" content="@clicknova" />
      
      {/* Additional SEO Tags */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="content-language" content="en-IN" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;

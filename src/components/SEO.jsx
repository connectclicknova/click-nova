import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Click Nova - Best Digital Marketing Agency | Social Media, Google Ads & Website Development",
  description = "Click Nova is the best digital marketing agency offering social media marketing, Facebook ads, Google ads, Instagram ads, YouTube ads, website development, ecommerce website, mobile app development, and software development services.",
  keywords = "digital marketing agency, best digital marketing agency, social media marketing, Facebook ads, Google ads, Instagram ads, YouTube ads, software development, ecommerce website, website development, mobile app development, SEO services, PPC advertising",
  canonical = "https://www.clicknova.in",
  ogImage = "https://www.clicknova.in/og-image.jpg",
  ogType = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;

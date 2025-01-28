import React from 'react';
import { Helmet } from 'react-helmet-async';
import { metaData } from './lib/metaData';
import imgImport  from '/Profile.webp';

const MetaTags: React.FC = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google" content="notranslate" />
      <meta name="description" content={metaData.description} />
      <meta name="author" content={metaData.author} />
      <title>{metaData.title}</title>
      <link rel="icon" href={metaData.favicon} type="image/webp" />
      <html lang="en" translate="no"/>
      <meta name="theme-color" content={metaData.color} />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="msapplication-navbutton-color" content={metaData.color} />
      <link rel="preload" href={imgImport} as="image" />

      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.ogImage} />
      <meta property="og:url" content={metaData.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={metaData.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.ogImage} />
      <meta name="twitter:creator" content={metaData.twitterHandle} />

    </Helmet>
  );
};

export default MetaTags;

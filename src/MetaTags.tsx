import React from 'react';
import { Helmet } from 'react-helmet-async';
import { metaData } from './lib/metaData';

const MetaTags: React.FC = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google" content="notranslate" />
      <meta name="description" content={metaData.description} />
      <meta name="author" content={metaData.author} />
      <title>{metaData.title}</title>
      <link rel="icon" href={metaData.favicon} type="image/svg+xml" />
      <html lang="en" translate="no"/>
      <meta name="theme-color" content={metaData.color} />
      <meta name="apple-mobile-web-app-status-bar-style" content={metaData.color} />
    </Helmet>
  );
};

export default MetaTags;

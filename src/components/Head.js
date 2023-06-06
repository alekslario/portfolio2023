import React from 'react';
import Head from 'next/head';

export default () => {
  return (
    <Head>
      <title>Alex's Portfolio</title>
      <meta property="title" content="Alex's Portfolio" key="title" />
      <meta property="twitter:title" content="Alex's Portfolio" key="title" />
      <meta property="og:title" content="Alex's Portfolio" key="title" />
      <meta name="description" content="Alex's Portfolio" />
      <meta name="twitter:description" content="Alex's Portfolio" />
      <meta name="twitter:creator" content="Aleksandrs Larionovs" />
      <meta name="og:description" content="Alex's Portfolio" />
      <meta name="og:type" content="website" />
      <meta name="keywords" content="portfolio, web developer, web design, javascript, css" />
      <meta name="author" content="Alex Larionovs" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Domine:wght@400;600&display=swap"
        rel="stylesheet preload prefetch"
        crossOrigin="anonymous"
      />
    </Head>
  );
};

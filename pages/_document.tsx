import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="iVIdX2Zr88cCNMJzRYM-wmA9vVXbKako6kSJigxu2Og"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="application-name" content="Search Bible" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Search Bible" />
          <meta name="description" content="Best way to Search Bible" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://yourdomain.com" />
          <meta name="twitter:title" content="Search Bible" />
          <meta name="twitter:description" content="Best way to Search Bible" />
          <meta name="twitter:creator" content="@Dave" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Search Bible" />
          <meta property="og:description" content="Best way to Search Bible" />
          <meta property="og:site_name" content="Search Bible" />
          <meta property="og:url" content="https://search-bible.netlify.app" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

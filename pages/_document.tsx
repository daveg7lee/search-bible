import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark" lang="ko">
        <Head>
          <meta name="author" content="Ki Hyun Lee" />
          <meta name="content-language" content="kr" />
          <meta name="content-language" content="en" />
          <meta http-equiv="content-type" content="text/html; charset=kr" />
          <meta http-equiv="content-type" content="text/html; charset=en" />
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="ljN2MsEuFIaVZgS0RCKF-iufd7Wn6vVp_ygDmB87VRI"
          />
          <meta
            name="naver-site-verification"
            content="5f080a6a87e488f6a0f4d8111d0e334154930c5e"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
          />
          <meta property="og:title" content="Search Bible" />
          <meta property="og:description" content="쉽고 빠른 성경 검색" />
          <meta name="keywords" content="bible, search, 성경, 검색" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <meta name="theme-color" content="#373C3F" />
          <script
            data-ad-client="ca-pub-4793524087489955"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
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

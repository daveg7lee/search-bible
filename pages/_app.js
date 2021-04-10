import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Search Bible</title>
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Search the Bible quickly and easily"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Search Bible</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Search the Bible quickly and easily"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

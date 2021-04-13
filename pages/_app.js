import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Search Bible</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="쉽고 빠른 성경 검색" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={true}
        newestOnTop={true}
        draggable={true}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default MyApp;

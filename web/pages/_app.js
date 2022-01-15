import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Developer portfolio and personal website of Son Nguyen"
        />
        <title>Son Nguyen | Web developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

import Head from "next/head";

import Header from "components/header";
import Footer from "components/footer";

import "../styles/normalize.css";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Konsunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Portfolio site Kajsa Unge" />
      </Head>

      <Header />
      <div className="page-container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;

import Header from "@/header";
import Footer from "@/footer";
import { Analytics } from "@vercel/analytics/react";

import "../styles/normalize.css";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="page-container">
        <Component {...pageProps} />
        <Analytics />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;

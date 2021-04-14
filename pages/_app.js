import Header from "components/header";
import Footer from "components/footer";

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
      </div>
      <Footer />
    </>
  );
}

export default MyApp;

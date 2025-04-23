import Header from '@/header';
import Footer from '@/footer';
import { Analytics } from '@vercel/analytics/react';

// import contentSe from './api/se.json';
import contentEn from './api/en.json';

import '../styles/normalize.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/app.css';

// TODO: Create language selector state
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header content={contentEn} />
      <div className='page-container'>
        <Component {...pageProps} />
        <Analytics />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;

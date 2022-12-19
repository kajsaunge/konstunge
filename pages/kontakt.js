import Head from "next/head";
import Form from "@/form";

import PageIntro from "@/pageIntro";

import styles from "../styles/Kontakt.module.css";

const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Kontakt[beställning] | Konstunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Kontaktinformation till Kajsa Unge, konstnär baserad i stockholm. Information om beställning och samarbete. Köp konst direkt från ateljen."
        />
      </Head>
      <main aria-label="Kontaktinformation" role="main" className="main">
        <PageIntro
          description="Förfrågning och beställning"
          title="Kontakt"
          seo="För köp av konst och konstverk från konstgalleri i stockholm. Samarbete och representation"
        />
        <div className={styles.mainContentTextBlock}>
          <p className={styles.mainContentText}>
            Har du några som helst frågor kring konsten, ett potentiellt
            samarbete eller bara vill snacka lite når du mig enklast på{" "}
            <a className="link" href="mailto:info@konstunge.se">
              info@konstunge.se
            </a>
            . Du kan även använda formuläret här på sidan.
          </p>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.mainContentWrapper}>
            <h3 className={styles.mainContentTitle}>Beställning</h3>
            <p className={styles.artPieceDetails}>
              För beställning fyller du i formuläret eller skickar ett mail till{" "}
              <a className="link" href="mailto:info@konstunge.se">
                info@konstunge.se
              </a>
              . <br /> Skriv i meddelandet hur du vill få din tavle levererad,
              många av konstverken går att leverera via bud eller post medan
              andra väger en del och eventuellt är för stora för att skickas. I
              det senare fallet brukar jag och köparen komma överens om leverans
              i Stockholms-området alternativt upphämtning i studion, det som
              passar bäst. <br />
              <br />
              Studion hittar ni ca 35 minuter söder om Stockholm city.
            </p>
          </div>
          <Form messagePlaceholder="Ditt meddelande" />
        </div>
        {/* <aside className={styles.artPieceFooter}>
          <p>link to utvalda konstverk</p>
        </aside> */}
      </main>
    </>
  );
};

export default Kontakt;

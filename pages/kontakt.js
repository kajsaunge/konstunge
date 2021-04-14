import Head from "next/head";
import From from "../components/form";
import styles from "../styles/Kontakt.module.css";

const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Konsunge | Kontakt</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Kontaktinformation till Kajsa Unge, konstnären bakom online portfolio Konstunge" />
      </Head>
      <main className="main">
        <div className="main-intro">
          <h1 className="main-intro__title">Kontakt</h1>
          <p className="main-intro__description">&nbsp;</p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.mainContentTextBlock}>
            <h2 className={styles.mainContentTitle}>Hör gärna av dig</h2>
            <p className={styles.mainContentText}>
              Har du några som helst frågor kring min konst, ett köp eller ett
              potentiellt samarbete når du mig enklast på{" "}
              <a className="link" href="mailto:info@konstunge.se">
                info@konstunge.se
              </a>
            </p>
            <p className={styles.mainContentText}>
              Det går även bra att använda formuläret här intill.
            </p>
            <p className={styles.mainContentText}>Jag är baserad i Stockhom.</p>
          </div>
          <From />
        </div>
      </main>
    </>
  );
};

export default Kontakt;

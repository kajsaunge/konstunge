import Head from "next/head";
import Form from "../components/form";
import styles from "../styles/Kontakt.module.css";

const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Kontakt | Konstunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Kontaktinformation till Kajsa Unge, konstnären bakom online portfolio Konstunge" />
      </Head>
      <main aria-label="Kontaktinformation" role="main" className="main">
        <div className="main-intro">
          <h1 className="main-intro__title">Kontakt</h1>
          <h2 className="main-intro__description">Hör gärna av dig!</h2>
        </div>
        <div className={styles.mainContentTextBlock}>
          <p className={styles.mainContentText}>
            Har du några som helst frågor kring min konst, ett potentiellt
            samarbete eller bara vill snacka lite når du mig enklast på{" "}
            <a className="link" href="mailto:info@konstunge.se">
              info@konstunge.se
            </a>
            . Du kan även använda formuläret här på sidan.
          </p>
        </div>
        <div className={styles.mainContent}>
          <aside className={styles.artPieceFooter}>
            <div>
              <h3 className={styles.mainContentTitle}>Beställning</h3>
              <p className={styles.artPieceDetails}>
                För beställning fyller du i formuläret eller skickar ett mail
                till{" "}
                <a className="link" href="mailto:info@konstunge.se">
                  info@konstunge.se
                </a>
                . <br /> Skriv i meddelandet hur du vill få din tavle leveread.
                Många av konstverken går att leverarea via bud eller post medan
                andra väger en del och eventuellt är för stora för att skickas.
                I det senare fallet brukar jag och köparen komma överens om
                leverans i Stockholms-området alternativt upphämtning i studion,
                det som passar bäst. <br />
                <br />
                Min studio ligger ca 40 minuter söder om Stockholm city.
              </p>
            </div>
          </aside>
          <Form messagePlaceholder="Ditt meddelande" />
        </div>
      </main>
    </>
  );
};

export default Kontakt;

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Om.module.css";

const profile = "/static/profile/kajsaunge.jpg";

const Om = () => {
  return (
    <>
      <Head>
        <title>Om | Konstunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Konst portfolio för Kajsa Unge, svensk konstnär och designer" />
      </Head>
      <main className="main">
        <div className="main-intro">
          <h1 className="main-intro__title">Om konstnären</h1>
          <h2 className="main-intro__description">Kajsa Unge</h2>
        </div>
        <div className={styles.mainContent}>
          <Image
            src={profile}
            alt="Portrait of the artist Kajsa Unge"
            width={400}
            height={400}
            className={styles.mainContentImage}
          />
          <div className={styles.mainContentTextBlock}>
            <p className={styles.mainContentText}>
              Skapandet är främst inspirerat av intryck, känslor och tankar. Men
              även av uppväxten på vackra Gotland, mixad med intryck från andra
              delar av världen och vårt underbara Stockholm. Materialen varierar
              och oftast är det akryl som får landa vilt på stora plywoodskivor.
            </p>
            <blockquote className={styles.mainContentQuote}>"Motiven får växa fram organiskt utan någon direkt plan, vilket
              skapar flow både för skaparen och i konstverken."</blockquote>
            <p className={`${styles.mainContentText} ${styles.mainContentTextExtraSpace}`}>
              Drivet och passionen för att skapa har följt med sedan barndomen
              där mamma Lisa spelat en stor och viktig roll. Hon var en stark
              kvinna som följde sin passion och sina drömmar, trots
              samhällsnormerna som regerade under 80-talet. Ursprungdet av de
              starka feminina krafterna genomsyrar konstverken och får blandas med
              fascinationen av djur och natur, människa och samhälle.
            </p>
            <p className={styles.mainContentText}>
              Vid sidan av konsten spenderas tiden som mjukvaruutvecklare och designer på ett
              av Finlands främsta full service byråer.
            </p>
            <p className={styles.mainContentText}>
              Sidan växer i takt med skapandet där mer info och
              konst läggs till allteftersom. Hör gärna av dig till{" "}
              <a className="link" href="mailto:info@konstunge.se">
                info@konstunge.se
              </a>{" "}
              med förfrågningar.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Om;

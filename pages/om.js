import Image from "next/image";
import styles from "../styles/Om.module.css";

const profile = "/static/profile/kajsaunge.jpg";

const Om = () => {
  return (
    <>
      <main className="main">
        <div className="main-intro">
          <h1 className="main-intro__title">Om konstnären</h1>
          {/* TODO add real text */}
          <p className="main-intro__description">Kajsa Unge</p>
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
              Skapandet är främst inspirerat av intryck, känslor och tankar. Men även av uppväxten på vackra Gotland, mixad med intryck från andra delar av världen och vårt underbara Stockholm. Materialen varierar men oftast blir det akryl som får landa vilt på stora plywoodskivor. Motiven får ofta växa fram organiskt utan en fullständig plan, vilket skapar flow både för skaparen och i konstverken.
            </p>
            <p className={styles.mainContentText}>
              Vid sidan av konsten jobbar jag som utvecklare och designer på Stockholms-kontoret för ett av Finlands främsta full service byråer. 
            </p>
            <p className={styles.mainContentText}>
              Sidan växer i sin egen takt och jag fyller på med utökad info och mer konst. Hör gärna av dig med förfrågningar <a className='link' href='mailto:hej@kajsaunge.se'>hej@kajsaunge.se</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Om;

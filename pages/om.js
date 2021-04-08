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
              Skapandet är främst inspirerat av intryck, känslor och tankar. Men även av uppväxten på vackra Gotland, mixad med intryck från andra delar av världen och vårt underbara Stockholm. Materialen varierar och oftast är det akryl som får landa vilt på stora plywoodskivor. Motiven får växa fram organiskt utan en fullständig plan, vilket skapar flow både för skaparen och i konstverken.
            </p>
            <p className={styles.mainContentText}>
              Drivet och passionen för att skapa har följt med sedan barndomen där min mor spelat en stor och viktig roll. Hon var en stark kvinna som följde sin passion och sina drömmar, trots samhällsnormerna som regerade under 80-talet. Ursprungdet av de starka feminina krafterna genomsyrar min konst och får blandas med min fascination för djur och akitektur.
            </p>
            <p className={styles.mainContentText}>
              Vid sidan av konsten jobbar jag som utvecklare och designer på ett av Finlands främsta full service byråer. 
            </p>
            <p className={styles.mainContentText}>
              Sidan växer i sin egen takt och jag fyller på med utökad info och mer konst. Hör gärna av dig till <a className='link' href='mailto:info@konstunge.se'>info@konstunge.se</a> med förfrågningar.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Om;

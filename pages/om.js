import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

import PageIntro from '@/pageIntro';
import content from './api/content.json';
import Card from '@/Card';

import styles from '../styles/Om.module.css';

const profile = '/static/profile/kajsaunge.jpg';

const Om = () => {
  const selectedPieces = [];
  content.pieces.map((item) => {
    if (item.name === 'The inner' || item.name === 'Stark och sårbar') {
      selectedPieces.push(item);
    }
  });
  return (
    <>
      <Head>
        <title>Om[konst] | Kajsa Unge</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Information om Kajsa Unge, svensk konstnär och designer i stockholm, sverige.'
        />
      </Head>
      <main aria-label='Om Kajsa Unge' role='main' className='main'>
        <PageIntro level={1} title='Om konstnären' description='Kajsa Unge' />
        <div className={styles.mainContent}>
          <div className={styles.imageBackground}>
            <Image
              src={profile}
              alt='Portrait of the artist Kajsa Unge'
              width={400}
              height={400}
              className={styles.mainContentImage}
            />
          </div>
          <div className={styles.mainContentTextBlock}>
            <p className={styles.mainContentText}>
              Skapandet är främst inspirerat av intryck, känslor och tankar. Men
              även av uppväxten på vackra Gotland, blandad med intryck från
              andra delar av världen och vårt underbara Stockholm. Materialen
              varierar och oftast är det akryl som får landa vilt på stora
              plywoodskivor.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className={styles.mainContentQuote}>
                "Motiven får växa fram organiskt utan någon direkt plan, vilket
                skapar flow i skapandet och konstverken."
              </blockquote>
            </motion.div>
            <p
              className={`${styles.mainContentText} ${styles.mainContentTextExtraSpace}`}
            >
              Drivet och passionen för att skapa har följt med sedan barndomen
              där mamma Lisa spelat en stor och viktig roll. Hon var en stark
              kvinna som följde sin passion och sina drömmar, trots
              samhällsnormerna som regerade under 80-talet. Ursprungdet av de
              starka feminina krafterna genomsyrar konstverken och får blandas
              med fascinationen av djur och natur, människa och samhälle.
            </p>
            {/* <p className={styles.mainContentText}>
              Vid sidan av konsten spenderas tiden som mjukvaruutvecklare och
              designer på ett av Finlands främsta full service byråer.
            </p> */}
            <p className={styles.mainContentText}>
              Sidan växer i takt med skapandet där mer info och konst läggs till
              allteftersom. Hör gärna av dig till{' '}
              <a className='link' href='mailto:konst@kajsaunge.se'>
                konst@kajsaunge.se
              </a>{' '}
              med förfrågningar.
            </p>
          </div>
          {/* Text + bilder */}
          {/* <div className={styles.horizontalLine}></div>
          <div className={styles.horizontalLine}></div>
          <div className={styles.mainContentAtelje}>
            <h3>Ateljen</h3>
            <p>Studion hittar ni ca 40 minuter söder om Stockholm city.</p>
          </div>
          <div className={styles.ateljeImages}>
            <div className={styles.ateljeImageWrapper}>
              <Image
                src={profile}
                alt="Portrait of the artist Kajsa Unge"
                width={400}
                height={400}
              />
            </div>
            <div className={styles.ateljeImageWrapper}>
              <Image
                src={profile}
                alt="Portrait of the artist Kajsa Unge"
                width={400}
                height={400}
              />
            </div>
            <div className={styles.ateljeImageWrapper}>
              <Image
                src={profile}
                alt="Portrait of the artist Kajsa Unge"
                width={400}
                height={400}
              />
            </div>
            <div className={styles.ateljeImageWrapper}>
              <Image
                src={profile}
                alt="Portrait of the artist Kajsa Unge"
                width={400}
                height={400}
              />
            </div>
          </div>*/}
        </div>
        <div className={styles.gallery}>
          <PageIntro title='Mina favoriter' description='Utvalda konstverk' />
          <ul className={styles.artPieces}>
            {selectedPieces.map((item, i) => (
              <li key={i} className={styles.artPiece}>
                <Card item={item} />
              </li>
            ))}
          </ul>
          <nav
            aria-label='Till galleriet'
            role='navigation'
            className={styles.backNavWrapper}
          >
            <NextLink href='/' as='/'>
              Se fler
            </NextLink>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Om;

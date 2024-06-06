import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

import contentArt from './api/content.json';
// import contentSe from './api/se.json';
import contentEn from './api/en.json';

import Card from '@/Card';
import PageIntro from '@/pageIntro';
import Exhibition from '@/Exhibition';

import styles from '../styles/Om.module.css';

const profile = '/static/profile/kajsaunge.jpg';
const vernissage = '/static/profile/kajsaunge-vernissage.jpg';
const studio = '/static/profile/kajsaunge-studio.jpg';
const studio2 = '/static/profile/kajsaunge-studio2.jpg';

const Om = () => {
  const content = contentEn;
  const selectedPieces = [];
  contentArt.pieces.map((item) => {
    if (item.name === 'The inner' || item.name === 'Stark och sårbar') {
      selectedPieces.push(item);
    }
  });
  return (
    <>
      <Head>
        <title>{content.about.pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Information om Kajsa Unge, svensk konstnär och designer i stockholm, sverige.'
        />
      </Head>
      <main aria-label='Om Kajsa Unge' role='main' className='main'>
        <PageIntro
          level={1}
          title={content.about.title}
          description={content.about.titleDesc}
        />
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
            <p className={styles.mainContentText}>{content.about.intro1}</p>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className={styles.mainContentQuote}>
                {content.about.quote}
              </blockquote>
            </motion.div>
            <p
              className={`${styles.mainContentText} ${styles.mainContentTextExtraSpace}`}
            >
              {content.about.intro2}
            </p>
            {/* <p className={styles.mainContentText}>
              Vid sidan av konsten spenderas tiden som mjukvaruutvecklare och
              designer på ett av Finlands främsta full service byråer.
            </p> */}
          </div>
          {/* Text + bilder */}
          <div className={styles.horizontalLine}></div>
          <div className={styles.horizontalLine}></div>
          <div className={styles.mainContentFacts}>
            <h3>{content.about.facts}</h3>
            <p className={styles.factsDetails}>{content.about.fact.origin}</p>
            <p className={styles.factsDetails}>
              {content.about.fact.education}
            </p>
            <p className={styles.factsDetails}>
              {content.about.fact.current}{' '}
              <a
                className='link'
                href={content.about.fact.portfolioUrl}
                target='_blank'
              >
                {content.about.fact.portfolio}
              </a>
            </p>
          </div>
          <div className={styles.factsImages}>
            <div className={styles.factsImageWrapper}>
              <Image
                src={studio}
                alt='Portrait of the artist Kajsa Unge'
                width={400}
                height={400}
              />
            </div>
            <div className={styles.factsImageWrapper}>
              <Image
                src={studio2}
                alt='Portrait of the artist Kajsa Unge'
                width={400}
                height={400}
              />
            </div>
            <div className={styles.factsImageWrapper}>
              <Image
                src={vernissage}
                alt='Portrait of the artist Kajsa Unge'
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
        <Exhibition />
        <div className={styles.gallery}>
          <PageIntro
            title={content.general.gallery}
            description={content.general.galleryDesc}
          />
          <ul className={styles.artPieces}>
            {selectedPieces.map((item, i) => (
              <li key={i} className={styles.artPiece}>
                <Card item={item} content={content} />
              </li>
            ))}
          </ul>
          <nav
            aria-label='Till galleriet'
            role='navigation'
            className={styles.backNavWrapper}
          >
            <NextLink href='/' as='/'>
              {content.general.more}
            </NextLink>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Om;

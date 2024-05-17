import Head from 'next/head';
import Form from '@/form';
import NextLink from 'next/link';

import contentArt from './api/content.json';
// import contentSe from './api/se.json';
import contentEn from './api/en.json';

import PageIntro from '@/pageIntro';
import Card from '@/Card';
import styles from '../styles/Kontakt.module.css';

const Kontakt = () => {
  const content = contentEn;
  const selectedPieces = [];
  contentArt.pieces.map((item) => {
    if (item.name === 'Rearview' || item.name === 'Security') {
      selectedPieces.push(item);
    }
  });
  return (
    <>
      <Head>
        <title>{content.contact.pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Kontaktinformation till Kajsa Unge, konstnär baserad i stockholm. Information om beställning och samarbete. Köp konst direkt från ateljen.'
        />
      </Head>
      <main aria-label='Kontaktinformation' role='main' className='main'>
        <PageIntro
          level={1}
          title={content.contact.title}
          description={content.contact.titleDesc}
          seo='För köp av konst och konstverk från konstgalleri i stockholm. Samarbete och representation'
        />
        <div className={styles.mainContentTextBlock}>
          <p className={styles.mainContentText}>
            {content.contact.intro}{' '}
            <a className='link' href='mailto:konst@kajsaunge.se'>
              konst@kajsaunge.se
            </a>
            {content.contact.intro2}
          </p>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.mainContentWrapper}>
            <h3 className={styles.mainContentTitle}>{content.contact.order}</h3>
            <p className={styles.artPieceDetails}>
              {content.contact.orderDesc1}{' '}
              <a className='link' href='mailto:konst@kajsaunge.se'>
                konst@kajsaunge.se
              </a>
              . <br />
              {content.contact.orderDesc2} <br />
              <br />
              {content.contact.orderDesc3}
            </p>
          </div>
          <Form messagePlaceholder='Ditt meddelande' />
        </div>
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

export default Kontakt;

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import PageIntro from '@/pageIntro';
// import Sorter from '@/sorter';

import contentArtEn from './api/contentEn.json';
// import contentArt from './api/content.json';
// import contentSe from './api/se.json';
import contentEn from './api/en.json';

import styles from '../styles/Hem.module.css';
import Card from '@/Card';

const clarion = '/static/news/clarion.png';

const Home = () => {
  const content = contentEn;
  const [sortValue, setSortValue] = useState('status');

  const mappedContent = contentArtEn.pieces.map((el, i) => {
    const elWidth = parseInt(el.width);
    const elHeight = parseInt(el.height);

    const sizeSort = elWidth < elHeight ? elWidth : elHeight;
    const statusSort =
      el.status === 'new' ||
      el.status === 'available' ||
      el.status === 'reserved';

    const sortBy =
      sortValue !== '' ? (sortValue === 'status' ? statusSort : sizeSort) : '';

    return { index: i, value: sortBy };
  });

  mappedContent.sort((a, b) => {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  });

  const sortedContent = mappedContent.map((el) => {
    return contentArtEn.pieces[el.index];
  });
  const useCorrectContent =
    sortValue === '' ? contentArtEn.pieces : sortedContent;

  const shouldBeShown = useCorrectContent.filter((el) =>
    el.status !== 'hide' ? el : ''
  );

  useEffect(() => {
    setSortValue(sortValue);
  }, [sortValue]);

  return (
    <>
      <Head>
        <title>{content.landing.pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Konstgalleri och butik med original av svenska konstnären Kajsa Unge. Unik abstrakt och reell stil i stora och små format.'
        />
      </Head>
      <main aria-label='Galleri Kajsa Unge' role='main' className='main'>
        <PageIntro
          level={1}
          subtitle={content.landing.title}
          title='Kajsa Unge'
          description={content.landing.titleDesc}
        />
        {/* <div className='hide-on-mobile'>
          <Sorter
            getSortValue={setSortValue}
            toggleBy={['status', 'storlek']}
          />
        </div> */}
        <section className={styles.artPiecesWrapper}>
          <ul className={styles.artPieces}>
            {contentArtEn &&
              shouldBeShown.map((piece, i) => {
                return (
                  <li key={i}>
                    <Card item={piece} content={content} />
                  </li>
                );
              })}
          </ul>
        </section>
        <section className={styles.exhibitions}>
          <div className={styles.hrLine}></div>
          <PageIntro
            level={1}
            title='Utställningar'
            description='Pågång just nu'
          />
          <Link href='/utstallningar'>
            <a className={styles.exhibitionsLink}>
              <img
                width={372}
                height={520}
                src={clarion}
                alt={clarion}
                className={styles.exhibitionsImage}
              />
            </a>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;

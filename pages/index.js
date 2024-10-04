import { useState, useEffect } from 'react';
import Head from 'next/head';

import PageIntro from '@/pageIntro';
// import Sorter from '@/sorter';
import Card from '@/Card';

import contentArt from './api/content.json';
import content from './api/se.json';

import styles from '../styles/Hem.module.css';

const Home = () => {
  const [sortValue, setSortValue] = useState('status');

  const mappedContent = contentArt.pieces.map((el, i) => {
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
    return contentArt.pieces[el.index];
  });
  const useCorrectContent =
    sortValue === '' ? contentArt.pieces : sortedContent;

  const shouldBeShown = useCorrectContent.filter((el) =>
    el.status !== 'hide' && el.status !== 'sold' ? el : ''
  );
  const sold = useCorrectContent.filter((el) =>
    el.status === 'sold' ? el : ''
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
            {contentArt &&
              shouldBeShown.map((piece, i) => {
                return (
                  <li key={i}>
                    <Card item={piece} content={content} />
                  </li>
                );
              })}
          </ul>
        </section>
        {/* <Exhibition /> */}
        <div className={styles.hrLine}></div>
        <section className={styles.artPiecesWrapper}>
          <ul className={styles.artPieces}>
            {contentArt &&
              sold.map((piece, i) => {
                return (
                  <li key={i}>
                    <Card item={piece} content={content} />
                  </li>
                );
              })}
          </ul>
        </section>
        {/* <Exhibition /> */}
      </main>
    </>
  );
};

export default Home;

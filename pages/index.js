import { useState, useEffect } from 'react';
import Head from 'next/head';

import PageIntro from '@/pageIntro';
// import Sorter from '@/sorter';

import content from './api/content.json';

import styles from '../styles/Hem.module.css';
import Card from '@/Card';
import Link from 'next/link';

const galleri86 = '/static/news/insta-post.png';

const Home = () => {
  const [sortValue, setSortValue] = useState('status');

  const mappedContent = content.pieces.map((el, i) => {
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
    return content.pieces[el.index];
  });
  const useCorrectContent = sortValue === '' ? content.pieces : sortedContent;

  const shouldBeShown = useCorrectContent.filter((el) =>
    el.status !== 'hide' ? el : ''
  );

  useEffect(() => {
    setSortValue(sortValue);
  }, [sortValue]);

  return (
    <>
      <Head>
        <title>Konst[galleri] | Kajsa Unge</title>
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
          subtitle='Galleri'
          title='Kajsa Unge'
          description='Konst för unika rum'
        />
        {/* <div className='hide-on-mobile'>
          <Sorter
            getSortValue={setSortValue}
            toggleBy={['status', 'storlek']}
          />
        </div> */}
        <section className={styles.artPiecesWrapper}>
          <ul className={styles.artPieces}>
            {content &&
              shouldBeShown.map((piece, i) => {
                return (
                  <li key={i}>
                    <Card item={piece} />
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
                src={galleri86}
                alt={galleri86}
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

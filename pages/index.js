import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";

import Sorter from '@/sorter'

import content from "./api/content.json";
import styles from "../styles/Hem.module.css";

const Home = () => {
  const [sortValue, setSortValue] = useState('')
  const [artOrder, setArtOrder] = useState([])

  // useEffect(() => {
  //   setArtOrder(!sortValue)
  // }, [sortValue])

  const mapped = content.pages.map((el, i) => {
    return { index: i, value: el.price };
  })

  mapped.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  var result = mapped.map((el) => {
    return (
      content.pages[el.index]
    )
  });

  return (
    <>
    <Head>
        <title>Konstunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Konst portfolio med original av konstnären Kajsa Unge" />
      </Head>
      <main className='main'>
        <div className='main-intro'>
          <h1 className='main-intro__title'>Välkommen</h1>
          <p className='main-intro__description'>
            Unik konst för unika hem
          </p>
        </div>
        <Sorter sortValue={setSortValue} art={content.pages} toggles={['size', 'price']} />
        <section className={styles.artPiecesWrapper}>
          <ul className={styles.artPieces}>
            {content &&
              sortValue !== '' ?
                result.map((piece, i) => {
                return (
                  <li key={i} className={styles.artPiece}>
                    <NextLink
                      href={`/shop${piece.slug}`}
                      as={`/shop${piece.path}`}
                    >
                      <a
                        className={styles.artPieceLink}
                        href={`/shop${piece.slug}`}
                      >
                        <Image
                          width={310}
                          height={400}
                          src={piece.images[0].src}
                          alt={piece.images[0].alt}
                          className={styles.artPieceImage}
                          // style={{ backgroundUrl()}}
                        />
                        <div className={styles.artPieceContent}>
                          <h3 className={styles.artPieceTitle}>{piece.name}</h3>
                          <p className={styles.artPieceDescription}>
                            {piece.price}
                          </p>
                        </div>
                      </a>
                    </NextLink>
                  </li>
                );
              }) :
              content.pages.map((piece, i) => {
                // console.log(childData);
                return (
                  <li key={i} className={styles.artPiece}>
                    <NextLink
                      href={`/shop${piece.slug}`}
                      as={`/shop${piece.path}`}
                    >
                      <a
                        className={styles.artPieceLink}
                        href={`/shop${piece.slug}`}
                      >
                        <Image
                          width={310}
                          height={400}
                          src={piece.images[0].src}
                          alt={piece.images[0].alt}
                          className={styles.artPieceImage}
                          // style={{ backgroundUrl()}}
                        />
                        <div className={styles.artPieceContent}>
                          <h3 className={styles.artPieceTitle}>{piece.name}</h3>
                          <p className={styles.artPieceDescription}>
                            {piece.price}
                          </p>
                        </div>
                      </a>
                    </NextLink>
                  </li>
                );
              })
            }
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
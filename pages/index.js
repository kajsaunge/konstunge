import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";

import Sorter from "@/sorter";

import content from "./api/content.json";
import styles from "../styles/Hem.module.css";

const Home = () => {
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    setSortValue(sortValue);
  }, [sortValue]);

  const mappedContent = content.pieces.map((el, i) => {
    const elWidth = parseInt(el.width);
    const elHeight = parseInt(el.height);

    const sizeSort = elWidth < elHeight ? elWidth : elHeight;
    const priceSort = parseInt(el.price);

    const sortBy =
      sortValue !== ""
        ? (sortValue === "pris"
          ? priceSort
          : sizeSort)
        : "";

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

  return (
    <>
      <Head>
        <title>Konstunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Konst portfolio med original av konstnären Kajsa Unge" />
      </Head>
      <main className="main">
        <div className="main-intro">
          <h1 className="main-intro__title">Välkommen</h1>
          <h2 className="main-intro__description">Unik konst för unika hem</h2>
        </div>
        <Sorter getSortValue={setSortValue} toggleBy={["storlek", "pris"]} />
        <section className={styles.artPiecesWrapper}>
          <ul className={styles.artPieces}>
            {content &&
              sortedContent.map((piece, i) => {
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
                            width={372}
                            height={520}
                            src={piece.images[0].src}
                            alt={piece.images[0].alt}
                            className={styles.artPieceImage}
                            // style={{ backgroundUrl()}}
                          />
                          <div className={styles.artPieceContent}>
                            <h3 className={styles.artPieceTitle}>
                              {piece.name}
                            </h3>
                            <div className={styles.artPieceDescription}>
                            <p className={styles.artPieceDescriptionText}>
                              <b>Pris:</b> {piece.price} kr
                            </p>
                            <p className={styles.artPieceDescriptionText}>
                              <b>Storlek:</b> {piece.width}x{piece.height} cm
                            </p>
                            </div>
                          </div>
                        </a>
                      </NextLink>
                    </li>
                  );
                })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;

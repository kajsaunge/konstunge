import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";

import PageIntro from "@/pageIntro";
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
      sortValue !== "" ? (sortValue === "pris" ? priceSort : sizeSort) : "";

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
        <meta description="Konst portfolio med original av konstnären Kajsa Unge. Unik konst för unika hem" />
      </Head>
      <main aria-label="Galleri Konstunge" role="main" className="main">
        <PageIntro
          subtitle="Galleri"
          title="Konstunge"
          description="Unik konst för unika hem"
        />
        <div className="hide-on-mobile">
          <Sorter getSortValue={setSortValue} toggleBy={["storlek", "pris"]} />
        </div>
        <section className={styles.artPiecesWrapper}>
          <ul className={styles.artPieces}>
            {content &&
              sortedContent.map((piece, i) => {
                return (
                  <li key={i} className={styles.artPiece}>
                    {piece.status === "sold" && (
                      <div className={styles.artPieceSold}>
                        <p>SÅLD</p>
                      </div>
                    )}
                    <NextLink
                      href={`/konst${piece.slug}`}
                      as={`/konst${piece.path}`}
                    >
                      <a
                        className={styles.artPieceLink}
                        href={`/konst${piece.slug}`}
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
                          <h3 className={styles.artPieceTitle}>{piece.name}</h3>
                          <div className={styles.artPieceDescription}>
                            <p className={styles.artPieceDescriptionText}>
                              <b>Storlek:</b> {piece.width}x{piece.height} cm
                            </p>
                            <p className={styles.artPieceDescriptionText}>
                              <b>Pris:</b> {piece.price} kr
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

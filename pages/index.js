import Image from "next/image";
import NextLink from "next/link";

import content from "./api/content.json";
import styles from "../styles/Hem.module.css";

const Home = () => {
  return (
    <>
      <main className='main'>
        <div className='main-intro'>
          <h1 className='main-intro__title'>Konst</h1>
          <p className='main-intro__description'>
            Unika konstverk för unika hem
          </p>
        </div>
        <section className={styles.artPiecesWrapper}>
          <ul className={styles.artPieces}>
            {content &&
              content.pages.map((piece, i) => {
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
              })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
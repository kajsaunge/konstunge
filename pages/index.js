import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";

import content from "./api/content.json";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <h2>Konst</h2>
        <p>Unika konstverk för unika hem</p>
        <div className={styles.grid}>
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
        </div>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = content.pages.map((page) => {
    const slug = page.slug.split("/").slice(1);
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps() {
  return { props: { content } };
}

export default Home;

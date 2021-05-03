import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";

import content from "../api/content.json";
import ImageGallery from "components/imageGallery";
import styles from "../../styles/Produkt.module.css";

{
  /* TODO add content. Fix styles. Add a page footer */
}

const Product = ({ piece }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{piece.name} | Konstunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Produktsida till Kajsa Unge, konstnären bakom online portfolio Konstunge" />
      </Head>
      <main className="main">
        <nav className={styles.backNavWrapper}>
        <button className={styles.backNav} onClick={() => router.back()}>Back</button>
        </nav>
        <div className="main-intro">
          <h1 className="main-intro__title">{piece.name}</h1>
          <p className="main-intro__description">Unik konst för unika hem</p>
        </div>
        <div className={styles.grid}>
          <section className={styles.artPiecesWrapper}>
            <ul className={styles.artPieces}>
              <ImageGallery images={piece.images} />
              <div className={styles.artPieceContent}>
                <h3 className={styles.artPieceTitle}>{piece.name}</h3>
                <p className={styles.artPieceDetails}>
                  {piece.material.medium} på {piece.material.base}
                </p>
                <h3 className={styles.artPieceSubTitle}>Detaljer</h3>
                <p className={styles.artPieceDetails}>Storlek: {piece.width}x{piece.height} cm</p>
                <p className={styles.artPieceDetails}>Pris: {piece.price} kr</p>
                <h3 className={styles.artPieceSubTitle}>Beställning</h3>
                <p className={styles.artPieceDetails}>
                  För beställning skickar du ett mail till{" "}
                  <a className="link" href="mailto:info@konstunge.se">
                    info@konstunge.se
                  </a>
                  .
                </p>
                <p className={styles.artPieceDetails}>
                  Du kan även använda formuläret på{" "}
                  <NextLink href="/kontakt">
                    <a className="link">kontaktsidan</a>
                  </NextLink>
                </p>
                {/* <table className={styles.artPieceTable}>
                  <tbody className={styles.artPieceTableHead}>
                    <th>Format:</th>
                    <th>Material:</th>
                  </tbody>
                  <tbody className={styles.artPieceTableData}>
                    <td>{piece.size}</td>
                    <td>
                      {piece.material.medium} på {piece.material.base}
                    </td>
                  </tbody>
                </table> */}
              </div>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = content.pieces.map((piece) => {
    const slug = piece.slug.split("/").slice(1);
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;

  const currentPath = `/${params.slug.join("/")}`;
  const piece = content.pieces.find((piece) => piece.path === currentPath) || {
    notfound: true,
  };
  return { props: { piece } };
}

export default Product;

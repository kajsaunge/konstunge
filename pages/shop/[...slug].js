import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";

import content from "../api/content.json";
import ImageGallery from "components/imageGallery";
import styles from "../../styles/Produkt.module.css";

{
  /* TODO add content. Fix styles. Add a page footer */
}

const Product = ({ page }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Konstunge | Produktsida för {page.name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Produktsida till Kajsa Unge, konstnären bakom online portfolio Konstunge" />
      </Head>
      <main className="main">
        <nav className={styles.backNavWrapper}>
        <button className={styles.backNav} onClick={() => router.back()}>Back</button>
        </nav>
        <div className="main-intro">
          <h1 className="main-intro__title">{page.name}</h1>
          <p className="main-intro__description">Unik konst för unika hem</p>
        </div>
        <div className={styles.grid}>
          <section className={styles.artPiecesWrapper}>
            <ul className={styles.artPieces}>
              <ImageGallery images={page.images} />
              <div className={styles.artPieceContent}>
                <h3 className={styles.artPieceTitle}>{page.name}</h3>
                <p className={styles.artPieceDetails}>
                  {page.material.medium} på {page.material.base}
                </p>
                <h3 className={styles.artPieceSubTitle}>Detaljer</h3>
                <p className={styles.artPieceDetails}>Storlek: {page.size} cm</p>
                <p className={styles.artPieceDetails}>Pris: {page.price} kr</p>
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
                    <td>{page.size}</td>
                    <td>
                      {page.material.medium} på {page.material.base}
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
  const paths = content.pages.map((page) => {
    const slug = page.slug.split("/").slice(1);
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;

  const currentPath = `/${params.slug.join("/")}`;
  const page = content.pages.find((page) => page.path === currentPath) || {
    notfound: true,
  };
  return { props: { page } };
}

export default Product;

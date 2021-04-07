import { useRouter } from "next/router";

import content from "../api/content.json";
import ImageGallery from "components/imageGallery";
import styles from "../../styles/Produkt.module.css";

{/* TODO add content. Fix styles. Add a page footer */}

const Product = ({ page }) => {
  const router = useRouter();
  return (
    <>
      <main className='main'>
        <button className={styles.backNav} onClick={() => router.back()}>&#60; Back</button>
        <div className='main-intro'>
          <h1 className='main-intro__title'>{page.name}</h1>
          <p className='main-intro__description'>Unik konst för unika hem</p>
        </div>
        <div className={styles.grid}>
          <section className={styles.artPiecesWrapper}>
            <ul className={styles.artPieces}>
              <ImageGallery images={page.images} />
              <div className={styles.artPieceContent}>
                <h3 className={styles.artPieceTitle}>{page.name}</h3>
                <p className={styles.artPieceDetails}>
                  {page.size} | {page.material.medium} på {page.material.base}
                </p>
                <p className={styles.artPiecePrice}>
                  Pris: {page.price}
                </p>
                <h3 className={styles.artPieceOrderDetails}>Beställning</h3>
                <p className={styles.artPiecePrice}>
                  För beställning skickar du ett mail till <a className='link' href='mailto:hej@kajsaunge.se'>hej@kajsaunge.se</a>
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

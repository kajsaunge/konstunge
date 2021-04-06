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
          <h1 className='main-intro__title'>Product page</h1>
          <p className='main-intro__description'>Unika konstverk för unika hem</p>
        </div>
        <div className={styles.grid}>
          <section className={styles.artPiecesWrapper}>
            <ul className={styles.artPieces}>
              <ImageGallery images={page.images} />
              <div className={styles.artPieceContent}>
                <h3 className={styles.artPieceTitle}>{page.name}</h3>
                <p className={styles.artPieceDescription}>
                  {page.description}
                </p>
                <table className={styles.artPieceTable}>
                  <tbody className={styles.artPieceTableHead}>
                    <th>Size:</th>
                    <th>Mount:</th>
                    <th>Material:</th>
                  </tbody>
                  <tbody className={styles.artPieceTableData}>
                    <td>{page.size}</td>
                    <td>{page.suspension}</td>
                    <td>
                      {page.material.medium} på {page.material.base}
                    </td>
                  </tbody>
                </table>
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

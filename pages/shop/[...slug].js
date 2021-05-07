import Head from "next/head";
import { useRouter } from "next/router";

import content from "../api/content.json";
import ImageGallery from "components/imageGallery";
import Form from "@/form";

import styles from "../../styles/Produkt.module.css";

const Product = ({ piece }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{piece.name} | Konstunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Produktsida till Kajsa Unge, konstnären bakom online portfolio Konstunge" />
      </Head>
      <main aria-label={`Tavlan ${piece.name}`} role="main" className="main">
        <nav
          aria-label="Till galleriet"
          role="navigation"
          className={styles.backNavWrapper}
        >
          <button className={styles.backNav} onClick={() => router.back()}>
            Till galleriet
          </button>
        </nav>
        <div className="main-intro">
          <h1 className="main-intro__title">{piece.name}</h1>
          <h2 className="main-intro__description">Unik konst för unika hem</h2>
        </div>
        <div className={styles.grid}>
          <section className={styles.artPiecesWrapper}>
            <div className={styles.artPieces}>
              <ImageGallery images={piece.images} />
              <div className={styles.artPieceContent}>
                <h3 className={styles.artPieceTitle}>{piece.name}</h3>
                <p className={styles.artPieceDescription}>
                  {piece.material.medium} på {piece.material.base}
                </p>
                <h3 className={styles.artPieceSubTitle}>Beskrivning</h3>
                <p className={styles.artPieceDescription}>
                  {piece.description}
                </p>
                <h3 className={styles.artPieceSubTitle}>Detaljer</h3>
                <p className={styles.artPieceDetails}>
                  <b>Storlek:</b> {piece.width}x{piece.height} cm
                </p>
                <p className={styles.artPieceDetails}>
                  <b>Pris:</b> {piece.price} kr
                </p>
              </div>
            </div>
          </section>
        </div>
        <aside className={styles.artPieceFooter}>
          <div>
            <p className={styles.artPieceDetails}>
              För beställning fyller du i formuläret eller skickar ett mail till{" "}
              <a className="link" href="mailto:info@konstunge.se">
                info@konstunge.se
              </a>
              . <br /> Skriv i meddelandet hur du vill få din tavle leveread.
              Många av konstverken går att leverarea via bud eller post medan
              andra väger en del och eventuellt är för stora för att skickas. I
              det senare fallet brukar jag och köparen komma överens om leverans
              i Stockholms-området alternativt upphämtning i studion, det som
              passar bäst. <br />
              <br />
              Min studio ligger ca 40 minuter söder om Stockholm city.
            </p>
          </div>
          <Form messagePlaceholder="Din beställning" />
        </aside>
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

import Head from "next/head";
import { useRouter } from "next/router";

import content from "../api/content.json";
import Form from "@/form";
import ImageGallery from "@/imageGallery";
import PageIntro from "@/pageIntro";

import styles from "../../styles/Produkt.module.css";

const Product = ({ piece }) => {
  const router = useRouter();
  const hasFrame = piece.frame ? piece.frame : "Tillgänglig vid förfrågan";
  return (
    <>
      <Head>
        <title>
          Konstverk: {piece.name}[{piece.width}x{piece.height} cm] | Konstunge
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Produktsida för konstverk och tavlor av svenska konstnären Kajsa Unge, under namnet konstunge. Information och specifikationer om konsten och tavlorna samt beställning."
        />
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
        <PageIntro
          level={1}
          title={`Originalmålning: ${piece.name}`}
          description="Unik konst för unika hem"
        />
        <div className={styles.grid}>
          <section className={styles.artPiecesWrapper}>
            <div className={styles.artPieces}>
              <ImageGallery
                images={piece.images}
                notAvailable={piece.status === "sold"}
              />
              <div className={styles.artPieceContent}>
                <h3 className={styles.artPieceTitle}>{piece.name}</h3>
                <p className={styles.artPieceDescription}>
                  {piece.description}
                </p>
                <h3 className={styles.artPieceSubTitle}>Detaljer</h3>
                <p className={styles.artPieceDetails}>
                  <b>Årtal:</b> {piece.year}
                </p>
                <p className={styles.artPieceDetails}>
                  <b>Pris:</b> {piece.price} kr
                </p>
                <p className={styles.artPieceDetails}>
                  <b>Storlek:</b> {piece.width}x{piece.height} cm
                </p>
                <p className={styles.artPieceDetails}>
                  <b>Material:</b> {piece.material.medium} på{" "}
                  {piece.material.base}
                </p>
                <p className={styles.artPieceDetails}>
                  <b>Certifikat:</b> Inkluderat
                </p>
                <p className={styles.artPieceDetails}>
                  <b>Ram:</b> {hasFrame}
                </p>
                <p className={styles.artPieceDetails}>
                  <b>Leverans:</b> Upphämtning i Stockholm
                </p>
              </div>
            </div>
          </section>
        </div>
        <aside
          className={
            piece.status === "sold"
              ? styles.artPieceFooterNotAvailable
              : styles.artPieceFooter
          }
        >
          <div>
            <h3 className={styles.artPieceFooterTitle}>Beställning</h3>
            <p className={styles.artPieceDetails}>
              För beställning fyller du i formuläret eller skickar ett mail till{" "}
              <a className="link" href="mailto:info@konstunge.se">
                info@konstunge.se
              </a>
              . <br /> Skriv i meddelandet hur du vill få din tavle leveread.
              Många av konstverken går att leverara via bud eller post medan
              andra väger en del och eventuellt är för stora för att skickas. I
              det senare fallet brukar jag och köparen komma överens om leverans
              i Stockholms-området alternativt upphämtning i studion, det som
              passar bäst. <br />
              <br />
              Studion ligger i Grödinge, ca 40 minuter söder om Stockholm city.
            </p>
          </div>
          <Form messagePlaceholder="Din beställning" submit="Beställ" />
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

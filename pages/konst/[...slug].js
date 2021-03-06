import Head from "next/head";
import { useRouter } from "next/router";

import content from "../api/content.json";
import Form from "@/form";
import ImageGallery from "@/imageGallery";
import PageIntro from "@/pageIntro";

import styles from "../../styles/Produkt.module.css";

// {
//   "slug": "/kiss-my",
//   "path": "/kiss-my",
//   "name": "Kiss my",
//   "description": "I take no shit",
//   "price": "2 500",
//   "status": "available",
//   "material": {
//     "medium": "Akryl and ink",
//     "base": "Canvas"
//   },
//   "width": "30",
//   "height": "40",
//   "tags": [
//     "canvas",
//     "akryl",
//     "female"
//   ],
//   "category": "original",
//   "images": [
//     {
//       "src": "/static/paintings/kiss-my/kiss-my_0.jpg",
//       "alt": "Tavlan Kiss my framifrån"
//     },
//     {
//       "src": "/static/paintings/kiss-my/kiss-my_1.jpg",
//       "alt": "Tavlan Kiss my framifrån"
//     },
//     {
//       "src": "/static/paintings/kiss-my/kiss-my_3.jpg",
//       "alt": "Tavlan Kiss my från sidan"
//     }
//   ]
// },

const Product = ({ piece }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Konstverk: {piece.name}[{piece.width}x{piece.height} cm] | Konstunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Produktsida för konstverk och tavlor av svenska konstnären Kajsa Unge, under namnet konstunge. Information och specifikationer om konsten och tavlorna samt beställning." />
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
        <PageIntro title={`Konstverk: ${piece.name}`} description="Unik konst för unika hem" />
        <div className={styles.grid}>
          <section className={styles.artPiecesWrapper}>
            <div className={styles.artPieces}>
              <ImageGallery images={piece.images} notAvailable={piece.status === 'sold'} />
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
                <p className={styles.artPieceDetails}><b>Pris:</b> {piece.price} kr</p>
                <p className={styles.artPieceDetails}>
                  <b>Storlek:</b> {piece.width}x{piece.height} cm
                </p>
                <p className={styles.artPieceDescription}>
                  Tavlan levereras utan ram.
                </p>
              </div>
            </div>
          </section>
        </div>
        <aside className={piece.status === 'sold' ? styles.artPieceFooterNotAvailable : styles.artPieceFooter}>
          <div>
          <h3 className={styles.artPieceFooterTitle}>Beställning</h3>
            <p className={styles.artPieceDetails}>
              För beställning fyller du i formuläret eller skickar ett mail till{" "}
              <a className="link" href="mailto:info@konstunge.se">
                info@konstunge.se
              </a>
              . <br /> Skriv i meddelandet hur du vill få din tavle leveread och om du vill köpa till en ram.
              Många av konstverken går att leverarea via bud eller post medan
              andra väger en del och eventuellt är för stora för att skickas. I
              det senare fallet brukar jag och köparen komma överens om leverans
              i Stockholms-området alternativt upphämtning i studion, det som
              passar bäst. <br />
              <br />
              Min studio ligger ca 40 minuter söder om Stockholm city.
            </p>
          </div>
          <Form messagePlaceholder="Din beställning" submit='Beställ' />
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

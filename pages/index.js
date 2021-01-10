import Head from "next/head";

import Header from "components/header";
import Footer from "components/footer";
import ImageGallery from "components/imageGallery";
import styles from "../styles/Home.module.css";

// TODO: extract content
const art = [
  {
    id: "001",
    name: "Lörje",
    description: "Underbara Lörje",
    size: "50x50 cm",
    suspension: "Spik och krok",
    frame: "",
    dateCreated: "20201230",
    artist: "Kajsa Unge",
    tage: ["canvas", "akryl", "landskap"],
    category: "",
    material: {
      medium: "Akryl",
      base: "Canvas",
    },
    images: [
      {
        src: "/static/paintings/lorje/lorje_01.jpg",
        alt: "Lörje process",
      },
      {
        src: "/static/paintings/tranor/tranor.jpg",
        alt: "Tranor fast fel",
      },
      {
        src: "/static/paintings/lorje/lorje_01 2.jpg",
        alt: "Tranor fast fel",
      },
      {
        src: "/static/paintings/lorje/lorje_01 2 2.jpg",
        alt: "Tranor fast fel",
      },
      {
        src: "/static/paintings/tranor/tranor.jpg",
        alt: "Tranor fast fel",
      },
      {
        src: "/static/paintings/tranor/tranor.jpg",
        alt: "Tranor fast fel",
      },
    ],
  },
  {
    id: "002",
    name: "Tranor",
    description:
      "Sverige är fullt av tranor. De symboliserar styrka och passion...",
    size: "100x1000 cm",
    suspension: "Spik och krok eller tavelhylla",
    dateCreated: "20201230",
    frame: "Vit träram, raka kanter",
    artist: "Kajsa Unge",
    tage: ["plywood", "akryl", "fåglar"],
    category: "",
    material: {
      medium: "Akryl",
      base: "Plywood",
    },
    images: [
      {
        src: "/static/paintings/tranor/tranor.jpg",
        alt: "Tranor fast fel",
      },
      {
        src: "/static/paintings/lorje/lorje_01.jpg",
        alt: "Lörje process",
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Konsunge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description="Portfolio site Kajsa Unge" />
      </Head>
      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <h2>Konst</h2>
          <p>Unika konstverk för unika hem</p>
          <div className={styles.grid}>
            {/* TODO: breakout component */}
            <section className={styles.artPiecesWrapper}>
              {art &&
                art.map((piece, i) => {
                  console.log("🚀 ~ index component", typeof piece.images);

                  return (
                    <article key={i} className={styles.artPieces}>
                      <ImageGallery images={piece.images} />
                      <h3>{piece.name}</h3>
                      <p>{piece.description}</p>
                      <div>
                        <p>{piece.size}</p>
                        <p>{piece.suspension}</p>
                        <p>
                          {piece.material.medium} på {piece.material.base}
                        </p>
                      </div>
                    </article>
                  );
                })}
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

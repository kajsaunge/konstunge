import Head from 'next/head';
import { useRouter } from 'next/router';

// import contentArt from '../api/content.json';
import contentArtEn from '../api/contentEn.json';
// import contentSe from '../api/se.json';
import contentEn from '../api/en.json';

import Form from '@/form';
import ImageGallery from '@/imageGallery';
import PageIntro from '@/pageIntro';

import styles from '../../styles/Produkt.module.css';

const Product = ({ piece }) => {
  const content = contentEn;
  const router = useRouter();
  const hasFrame = piece.frame ? piece.frame : content.slug.requestFrame;
  return (
    <>
      <Head>
        <title>
          {content.slug.pageTitle} {piece.name}[{piece.width}x{piece.height} cm]
          | Kajsa Unge
        </title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Produktsida för konstverk och tavlor av svenska konstnären Kajsa Unge. Information och specifikationer om konsten och tavlorna samt beställning.'
        />
      </Head>
      <main aria-label={`Tavlan ${piece.name}`} role='main' className='main'>
        <nav
          aria-label='Till galleriet'
          role='navigation'
          className={styles.backNavWrapper}
        >
          <button className={styles.backNav} onClick={() => router.back()}>
            {content.slug.breadcrumb}
          </button>
        </nav>
        <PageIntro
          level={1}
          title={`${content.slug.title} ${piece.name}`}
          description={content.slug.titleDesc}
        />
        <div className={styles.grid}>
          <section className={styles.artPiecesWrapper}>
            <div className={styles.artPieces}>
              <ImageGallery
                images={piece.images}
                notAvailable={piece.status === 'sold'}
              />
              <div className={styles.artPieceContent}>
                <h3 className={styles.artPieceTitle}>{piece.name}</h3>
                <p className={styles.artPieceDescription}>
                  {piece.description}
                </p>
                <h3 className={styles.artPieceSubTitle}>
                  {content.slug.detailsTitle}
                </h3>
                <p className={styles.artPieceDetails}>
                  <b>{content.slug.year}</b> {piece.year}
                </p>
                <p className={styles.artPieceDetails}>
                  <b>{content.slug.price}</b> {piece.price}{' '}
                  {content.general.priceUnit}
                </p>
                <p className={styles.artPieceDetails}>
                  <b>{content.slug.size}</b> {piece.width}x{piece.height}{' '}
                  {content.general.sizeUnit}
                </p>
                <p className={styles.artPieceDetails}>
                  <b>{content.slug.material}</b> {piece.material.medium}{' '}
                  {content.general.on} {piece.material.base}
                </p>
                {/* <p className={styles.artPieceDetails}>
                  <b>Certifikat:</b> Inkluderat
                </p> */}
                <p className={styles.artPieceDetails}>
                  <b>{content.slug.frame}</b> {hasFrame}
                </p>
                <p className={styles.artPieceDetails}>
                  <b>{content.slug.delivery}</b> {content.slug.pickup}
                </p>
              </div>
            </div>
          </section>
        </div>
        <aside
          className={
            piece.status === 'sold'
              ? styles.artPieceFooterNotAvailable
              : styles.artPieceFooter
          }
        >
          <div>
            <h3 className={styles.artPieceFooterTitle}>{content.slug.order}</h3>
            <p className={styles.artPieceDetails}>
              {content.slug.order1}{' '}
              <a className='link' href='mailto:konst@kajsaunge.se'>
                konst@kajsaunge.se
              </a>
              . <br /> {content.slug.order2}
              <br />
            </p>
          </div>
          <Form messagePlaceholder='Din beställning' submit='Beställ' />
        </aside>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = contentArtEn.pieces.map((piece) => {
    const slug = piece.slug.split('/').slice(1);
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;

  const currentPath = `/${params.slug.join('/')}`;
  const piece = contentArtEn.pieces.find(
    (piece) => piece.path === currentPath
  ) || {
    notfound: true,
  };
  return { props: { piece } };
}

export default Product;

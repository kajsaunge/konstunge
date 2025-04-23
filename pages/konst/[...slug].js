import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import contentArt from '../api/contentEn.json';
import content from '../api/en.json';

import Form from '@/form';
import ImageGallery from '@/imageGallery';
import PageIntro from '@/pageIntro';
import styles from '../../styles/Produkt.module.css';

const Product = ({ piece }) => {
  const thisIndex = contentArt.pieces.findIndex(
    (item) => piece?.path === item?.path
  );
  const prevPath = contentArt.pieces[thisIndex >= 1 ? thisIndex - 1 : '']?.path;
  const nextPath =
    contentArt.pieces[
      thisIndex <= contentArt.pieces.length - 2 ? thisIndex + 1 : ''
    ]?.path;

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
        <nav className={styles.artsNav}>
          {prevPath ? (
            <a className={styles.artsNavPrev} href={`/konst${prevPath}`}>
              {content.slug.prev}
            </a>
          ) : (
            <span />
          )}
          <NextLink className={styles.artsNavBack} href='/' as='/'>
            <a aria-label='Till galleriet' role='navigation' href='/'>
              {content.slug.breadcrumb}
            </a>
          </NextLink>
          {nextPath ? (
            <a className={styles.artsNavNext} href={`/konst${nextPath}`}>
              {content.slug.next}
            </a>
          ) : (
            <span />
          )}
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
          <div className={styles.artPieceOrder}>
            <h3 className={styles.artPieceFooterTitle}>{content.slug.order}</h3>
            <p className={styles.artPieceDetails}>
              {content.slug.order1}{' '}
              <a className='link' href='mailto:konst@kajsaunge.se'>
                konst@kajsaunge.se
              </a>
              . <br /> {content.slug.order2}
              <br />
            </p>
            <Form messagePlaceholder='Din beställning' submit='Beställ' />
          </div>
        </aside>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = contentArt.pieces.map((piece) => {
    const slug = piece.slug.split('/').slice(1);
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;

  const currentPath = `/${params.slug.join('/')}`;
  const piece = contentArt.pieces.find(
    (piece) => piece.path === currentPath
  ) || {
    notfound: true,
  };
  return { props: { piece } };
}

export default Product;

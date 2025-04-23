import Head from 'next/head';
import Link from 'next/link';
import NextLink from 'next/link';

import PageIntro from '@/pageIntro';
import contentArt from './api/contentEn.json';
import Card from '@/Card';

import content from './api/en.json';

import styles from '../styles/Utstallningar.module.css';

const clarion = '/static/news/clarion.png';
const kvinna = '/static/news/kvinna.jpg';
const galleri86 = '/static/news/insta-post.png';
const gaStan = '/static/news/ga_stan.jpg';
const husby = '/static/news/husby-salong.png';
const gtld = '/static/news/gtld-2023.png';

const Utstallningar = () => {
  const selectedPieces = [];
  contentArt.pieces.map((item) => {
    if (item.name === 'Different horizon' || item.name === 'Ever seeing') {
      selectedPieces.push(item);
    }
  });
  return (
    <>
      <Head>
        <title>{content.exhibition.pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Information om Kajsa Unge, svensk konstnär och designer i stockholm, sverige.'
        />
      </Head>
      <main aria-label='Om Kajsa Unge' role='main' className='main'>
        <PageIntro
          level={1}
          title={content.exhibition.title}
          description={content.exhibition.titleDesc}
        />

        <div className={styles.mainContent}>
          <div className={styles.mainContentImage}>
            {/* <a target='_blank' href='https://justegallery.com/'> */}
            <img
              width={372}
              height={520}
              src={kvinna}
              alt={kvinna}
              className={styles.mainContentImage}
            />
            {/* </a> */}
          </div>
          <div className={styles.mainContentTextBlock}>
            <h2>{content.exhibition.exhibitions.kvinna.title}</h2>

            <p className={styles.artPieceDetails}>
              <b>{content.exhibition.exhibitionDetails.aw} </b>
              {content.exhibition.exhibitions.kvinna.aw}
            </p>
            <p className={styles.artPieceDetails}>
              <b>{content.exhibition.exhibitionDetails.vernissage} </b>
              {content.exhibition.exhibitions.kvinna.vernissage}
            </p>
            <p className={styles.artPieceDetails}>
              <b>{content.exhibition.exhibitionDetails.finnisage} </b>
              {content.exhibition.exhibitions.kvinna.finnisage}
            </p>
            <p className={styles.artPieceDetails}>
              <b>{content.exhibition.exhibitionDetails.place} </b>
              {content.exhibition.exhibitions.kvinna.place}
            </p>
            {/* <p className={styles.artPieceDetails}>
              <b>{content.exhibition.exhibitionDetails.gallery} </b>{' '}
              <span className='link'>
                <Link passHref href={content.exhibition.exhibitions.kvinna.url}>
                  <a target='_blank'>
                    {content.exhibition.exhibitions.kvinna.urlText}
                  </a>
                </Link>
              </span>
            </p> */}
            <p className={styles.mainContentText}>
              {content.exhibition.exhibitions.kvinna.desc}
            </p>
          </div>
        </div>

        <div className={styles.hrLine}></div>
        <PageIntro
          level={1}
          title={content.exhibition.titlePrev}
          description={content.exhibition.titleDescPrev}
        />

        <div className={styles.mainContent}>
          <div className={styles.outdatedOverlay}></div>
          <div className={styles.mainContentImage}>
            <a target='_blank' href='https://fb.me/e/1sRK8fRzi'>
              <img
                width={372}
                height={520}
                src={clarion}
                alt={clarion}
                className={styles.mainContentImage}
              />
            </a>
          </div>
          <div className={styles.mainContentTextBlock}>
            <h2>{content.exhibition.exhibitions.clarion.title}</h2>

            <p className={styles.artPieceDetails}>
              <b>{content.exhibition.exhibitionDetails.vernissage} </b>
              {content.exhibition.exhibitions.clarion.vernissage}
            </p>
            <p className={styles.artPieceDetails}>
              <b>{content.exhibition.exhibitionDetails.open} </b>
              {content.exhibition.exhibitions.clarion.open}
            </p>

            <p className={styles.artPieceDetails}>
              <b>{content.exhibition.exhibitionDetails.place} </b>
              <span className='link'>
                <Link
                  passHref
                  href={content.exhibition.exhibitions.clarion.placeUrl}
                >
                  <a target='_blank'>
                    {content.exhibition.exhibitions.clarion.place}
                  </a>
                </Link>
              </span>{' '}
              {content.exhibition.exhibitions.clarion.address}
            </p>
            <p className={styles.artPieceDetails}>
              <b>{content.exhibition.exhibitionDetails.gallery} </b>{' '}
              <span className='link'>
                <Link
                  passHref
                  href={content.exhibition.exhibitions.clarion.url}
                >
                  <a target='_blank'>
                    {content.exhibition.exhibitions.clarion.urlText}
                  </a>
                </Link>
              </span>
            </p>
            <p className={styles.mainContentText}>
              {content.exhibition.exhibitions.clarion.desc}
            </p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.outdatedOverlay}></div>
          <div className={styles.mainContentImage}>
            <a target='_blank' href='https://fb.me/e/6INFT9A3g'>
              <img
                width={372}
                height={520}
                src={galleri86}
                alt={galleri86}
                className={styles.mainContentImage}
              />
            </a>
          </div>
          <div className={styles.mainContentTextBlock}>
            <h2>Inför ytan - en duoutställning</h2>
            <p className={styles.artPieceDetails}>
              <b>Datum:</b> 3-6 Maj
            </p>
            <p className={styles.artPieceDetails}>
              <b>Fredags-AW:</b> 3 Maj kl 16-20
            </p>
            <p className={styles.artPieceDetails}>
              <b>Vernissage:</b> 4 Maj kl 12-20
            </p>
            <p className={styles.artPieceDetails}>
              <b>Övriga tider:</b> Söndag + måndag kl 12 -18
            </p>
            <p className={styles.artPieceDetails}>
              <b>Plats:</b> Galleri86Stockholm, Skånegatan 86, Stockholm
            </p>
            <p className={styles.artPieceDetails}>
              <b>Mer info:</b>{' '}
              <span className='link'>
                <Link passHref href='https://fb.me/e/6INFT9A3g'>
                  <a target='_blank'>Läs mer om utställningen</a>
                </Link>
              </span>
            </p>
            <p className={styles.mainContentText}>
              Tillsammans med fantastiskt duktiga{' '}
              <span className='link'>
                <Link passHref href='https://www.konst.se/mogford'>
                  <a target='_blank'>Raven Mogford</a>
                </Link>
              </span>{' '}
              skapar vi en härlig duoutställning i kvinnans tecken. Varmt
              välkommen att njuta och mingla med oss!
            </p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.outdatedOverlay}></div>
          <div className={styles.mainContentImage}>
            <a
              target='_blank'
              href='https://kulturhusetstadsteatern.se/husby-konstsalong'
            >
              <img
                width={372}
                height={520}
                src={husby}
                alt={husby}
                className={styles.mainContentImage}
              />
            </a>
          </div>
          <div className={styles.mainContentTextBlock}>
            <h2>Husby Konstsalong</h2>
            <p className={styles.artPieceDetails}>
              <b>Datum:</b> 27 April - 4 Maj
            </p>
            <p className={styles.artPieceDetails}>
              <b>Vernissage:</b> 27 April kl 14-20
            </p>
            <p className={styles.artPieceDetails}>
              <b>Plats:</b> Husby kulturhus, Edvard Griegsgången 11
            </p>
            <p className={styles.artPieceDetails}>
              <b>Mer info:</b>{' '}
              <span className='link'>
                <Link
                  passHref
                  href='https://www.instagram.com/kulturhuset_husby/'
                >
                  <a target='_blank'>Kulturhusets instagrem</a>
                </Link>
              </span>
            </p>
            <p className={styles.mainContentText}>
              Här ställer jag ut ett av mina verk i en samlingsutställning med
              100 utvalda konstverk. Kommer att vara på plats under vernissaget
              27:e april - kom och säg hej och se verket Furilden irl 😀 och en
              hel massa andra verk.
            </p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.outdatedOverlay}></div>
          <div className={styles.mainContentImage}>
            <a target='_blank' href='https://www.gamlastansgalleri.se/'>
              <img
                width={372}
                height={520}
                src={gaStan}
                alt={gaStan}
                className={styles.mainContentImage}
              />
            </a>
          </div>
          <div className={styles.mainContentTextBlock}>
            <h2>Samlingsutställning Gamla stan</h2>
            <p className={styles.artPieceDetails}>
              <b>Datum:</b> 2-7 April
            </p>
            <p className={styles.artPieceDetails}>
              <b>Vernissage:</b> 2 April kl 16-19
            </p>
            <p className={styles.artPieceDetails}>
              <b>Övriga tider:</b> Onsdag-fredag kl 12-18, lördag-söndag kl
              12-16
            </p>
            <p className={styles.artPieceDetails}>
              <b>Plats:</b> Gamla Stans Galleri, Köpmannagatan 22, Stockholm
            </p>
            <p className={styles.artPieceDetails}>
              <b>Mer info:</b>{' '}
              <span className='link'>
                <Link passHref href='https://www.gamlastansgalleri.se/'>
                  <a target='_blank'>Galleriets hemsida</a>
                </Link>
              </span>
            </p>
            <p className={styles.mainContentText}>
              En samlingsutställning i sällskap med 10 utvalda konstnärer. Här
              ställer jag ut tre av mina verk. Kommer att vara på plats under
              vernissaget 2:a april - kom och säg hej!
            </p>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.outdatedOverlay}></div>
          <div className={styles.mainContentImage}>
            <a target='_blank' href='https://www.gamlastansgalleri.se/'>
              <img
                width={372}
                height={520}
                src={gtld}
                alt={gtld}
                className={styles.mainContentImage}
              />
            </a>
          </div>
          <div className={styles.mainContentTextBlock}>
            <h2>Vårsalong Gotland 2023</h2>
            <p className={styles.artPieceDetails}>
              <b>Datum:</b> 15-18 April
            </p>
            <p className={styles.artPieceDetails}>
              <b>Vernissage:</b> 15 April kl 12-17
            </p>
            <p className={styles.artPieceDetails}>
              <b>Övriga tider:</b> 16-18/4 kl 12-17
            </p>
            <p className={styles.artPieceDetails}>
              <b>Plats:</b> Korsbygården, Lärbro, Gotland
            </p>
            <p className={styles.mainContentText}>
              Gotlands Vårsalong är den största och bredaste konstutställningen
              på Gotland. Detta var andra året jag var med. Första gången var
              tillsammans med min mamma, för väldigt många år sedan. Kändes
              verkligen fint att få vara med igen, som en påminnelse om min
              mammas outsinliga uppmuntran och tro på mig.
            </p>
          </div>
        </div>
        <div className={styles.gallery}>
          <PageIntro
            title={content.general.gallery}
            description={content.general.galleryDesc}
          />
          <ul className={styles.artPieces}>
            {selectedPieces.map((item, i) => (
              <li key={i} className={styles.artPiece}>
                <Card item={item} content={content} />
              </li>
            ))}
          </ul>
          <nav
            aria-label='Till galleriet'
            role='navigation'
            className={styles.backNavWrapper}
          >
            <NextLink href='/' as='/'>
              {content.general.more}
            </NextLink>
          </nav>
        </div>
      </main>
    </>
  );
};

export default Utstallningar;

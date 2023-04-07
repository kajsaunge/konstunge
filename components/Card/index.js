import Image from "next/image";

import NextLink from "next/link";
import styles from "./Card.module.css";

const Card = ({ item }) => {
  return (
    <section className={styles.artPiecesWrapper}>
      <div className={styles.artPiece}>
        {item.status === "sold" && (
          <div className={styles.artPieceSold}>
            <p>SÅLD</p>
          </div>
        )}
        {item.status === "new" && (
          <div className={styles.artPieceNew}>
            <p>NY</p>
          </div>
        )}
        {item.status === "reserved" && (
          <div className={styles.artPieceReserved}>
            <p>Reserverad</p>
          </div>
        )}
        <NextLink href={`/konst${item.slug}`} as={`/konst${item.path}`}>
          <a href={`/konst${item.slug}`}>
            <Image
              width={372}
              height={520}
              src={item.images[0].src}
              alt={item.images[0].alt}
              className={styles.artPieceImage}
              // style={{ backgroundUrl()}}
            />
            <div className={styles.artPieceContent}>
              <h3 className={styles.artPieceTitle}>{item.name}</h3>
              <div className={styles.artPieceDescription}>
                <p className={styles.artPieceDescriptionText}>
                  <b>Storlek:</b> {item.width}x{item.height} cm
                </p>
                <p className={styles.artPieceDescriptionText}>
                  <b>Pris:</b> {item.price} kr
                  {item.frame && " (ram ingår)"}
                </p>
              </div>
            </div>
          </a>
        </NextLink>
      </div>
    </section>
  );
};

export default Card;

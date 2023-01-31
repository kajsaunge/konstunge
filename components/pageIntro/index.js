import styles from "./PageIntro.module.css";

const PageIntro = ({
  level = 2,
  subtitle = "",
  title = "",
  description = "",
  seo = "Konst galleri stockholm sverige. Köpa modern konst och klassiska tavlor av svensk känd konstnär",
}) => {
  return (
    <div className={styles.pageIntro}>
      {level === 1 ? (
        <h1 className={styles.pageIntroTitle}>
          {subtitle && (
            <span className={styles.pageIntroSubtitle}>{subtitle}&nbsp;</span>
          )}
          {title}
        </h1>
      ) : (
        <h2 className={styles.pageIntroTitle}>
          {subtitle && (
            <span className={styles.pageIntroSubtitle}>{subtitle}&nbsp;</span>
          )}
          {title}
        </h2>
      )}
      {level === 1 ? (
        <h2 className={styles.pageIntroDescription}>{description}</h2>
      ) : (
        <h3 className={styles.pageIntroDescription}>{description}</h3>
      )}
      <p className="visually-hidden">{seo}</p>
    </div>
  );
};
export default PageIntro;

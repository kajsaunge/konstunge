import styles from "./PageIntro.module.css";

const PageIntro = ({ subtitle = "", title = "", description = "", seo="Konst galleri stockholm sverige. Köpa modern konst och klassiska tavlor av svensk känd konstnär" }) => {
  return (
    <div className={styles.pageIntro}>
      <h1 className={styles.pageIntroTitle}>
        {subtitle && (
          <span className={styles.pageIntroSubtitle}>{subtitle}&nbsp;</span>
        )}
        {title}
      </h1>
      <h2 className={styles.pageIntroDescription}>{description}</h2>
      <p className='visually-hidden'>{seo}</p>
    </div>
  );
};
export default PageIntro;

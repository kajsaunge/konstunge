import styles from "./PageIntro.module.css";

const PageIntro = ({ subtitle = "", title = "", description = "" }) => {
  return (
    <div className={styles.pageIntro}>
      <h1 className={styles.pageIntroTitle}>
        {subtitle && (
          <span className={styles.pageIntroSubtitle}>{subtitle}&nbsp;</span>
        )}
        {title}
      </h1>
      <h2 className={styles.pageIntroDescription}>{description}</h2>
    </div>
  );
};
export default PageIntro;

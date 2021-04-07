import styles from "./Footer.module.css"

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.content}>
          <h3 className={styles.logo}>Konstunge</h3>
          {/* <nav>whatever</nav> */}
        </div>
      </footer>
    )
  }
  
  export default Footer
  
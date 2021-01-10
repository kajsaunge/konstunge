import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Konstunge</h2>
      <nav className={styles.nav}>meny</nav>
    </header>
  )
}

export default Header

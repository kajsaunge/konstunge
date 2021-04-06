import styles from "./Header.module.css";
import NextLink from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <NextLink href='/' className={styles.logo}>Konstunge</NextLink>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}><NextLink href='/om'>Om</NextLink></li>
          <li className={styles.navListItem}><NextLink href='/kontakt'>Kontakt</NextLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

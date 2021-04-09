import NextLink from 'next/link'

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}><NextLink href='/'>Konstunge</NextLink></span>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItem}><NextLink href='/om'>Om</NextLink></li>
          <li className={styles.navListItem}><NextLink href='/kontakt'>Kontakt</NextLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

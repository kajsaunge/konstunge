import NextLink from 'next/link'

import styles from "./Header.module.css";
import Logo from '@/icons/logo'

const Header = () => {
  return (
    <header className={styles.header}>
      <NextLink href='/'>
        <a className={styles.homeLink} href='/'>
          <Logo />
        </a>
      </NextLink>
      <nav aria-label='Hemsidans sidor' role='navigation'>
        <ul className={styles.navList}>
          <li className={styles.navListItem}><NextLink href='/om'>Om</NextLink></li>
          <li className={styles.navListItem}><NextLink href='/kontakt'>Kontakt</NextLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

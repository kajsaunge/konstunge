import styles from "./Header.module.css";
import NextLink from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Konstunge</h2>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}><NextLink href='/about'>About</NextLink></li>
          <li className={styles.navListItem}><NextLink href='/'>Shop</NextLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

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
          <li className={styles.navListItem}><NextLink href='/'>Konst</NextLink><p className='visually-hidden'>Unika konstverk i ett online galleri med vacker och stilfull konst till billigt pris</p></li>
          <li className={styles.navListItem}><NextLink href='/om'>Om</NextLink><p className='visually-hidden'> Konstunge galleri och konstnären som skapar abstrakt och reell konst</p></li>
          <li className={styles.navListItem}><NextLink href='/kontakt'>Kontakt</NextLink><p className='visually-hidden'> till utställningen och utställaren för att köpa konst, tavlor och konstverk till överkomligt pris</p></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

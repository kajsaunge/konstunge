import NextLink from 'next/link';
import { useRouter } from 'next/router';

import Logo from '@/icons/logo';

import styles, { linkHightlight } from './Header.module.css';

const Header = ({ content }) => {
  const router = useRouter();
  const activeLink = router.asPath;
  const { header } = content;

  return (
    <header className={styles.header}>
      <NextLink href='/'>
        <a className={styles.homeLink} href='/'>
          <Logo />
        </a>
      </NextLink>
      <nav aria-label='Hemsidans sidor' role='navigation'>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <NextLink href='/'>
              <a
                href='/'
                className={`${styles.navListItemLink} ${
                  activeLink === '/' ? linkHightlight : ''
                }`}
              >
                {header.gallery}
              </a>
            </NextLink>
            <p className='visually-hidden'>
              Unika konstverk i ett online galleri med vacker och stilfull konst
              till billigt pris
            </p>
          </li>
          <li className={styles.navListItem}>
            <NextLink href='/om'>
              <a
                href='/om'
                className={`${styles.navListItemLink} ${
                  activeLink === '/om' ? linkHightlight : ''
                }`}
              >
                {header.about}
              </a>
            </NextLink>
            <p className='visually-hidden'>
              {' '}
              Kajsa Unge galleri och konstnären som skapar abstrakt och reell
              konst
            </p>
          </li>
          <li className={styles.navListItem}>
            <NextLink href='/utstallningar'>
              <a
                href='/utstallningar'
                className={`${styles.navListItemLink} ${
                  activeLink === '/utstallningar' ? linkHightlight : ''
                }`}
              >
                {header.exhibit}
              </a>
            </NextLink>
          </li>
          <li className={styles.navListItem}>
            <NextLink href='/kontakt'>
              <a
                href='/kontakt'
                className={`${styles.navListItemLink} ${
                  activeLink === '/kontakt' ? linkHightlight : ''
                }`}
              >
                {header.contact}
              </a>
            </NextLink>
            <p className='visually-hidden'>
              {' '}
              till utställningen och utställaren för att köpa konst, tavlor och
              konstverk till överkomligt pris
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

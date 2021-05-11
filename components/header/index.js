import NextLink from "next/link";
import { useRouter } from "next/router";

import Logo from "@/icons/logo";

import styles, { linkHightlight } from "./Header.module.css";

const Header = () => {
  const router = useRouter();
  const activeLink = router.asPath;

  return (
    <header className={styles.header}>
      <NextLink href="/">
        <a className={styles.homeLink} href="/">
          <Logo />
        </a>
      </NextLink>
      <nav aria-label="Hemsidans sidor" role="navigation">
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <NextLink href='/'>
              <a
                href="/"
                className={`${styles.navListItemLink} ${
                  activeLink === "/konst" ? linkHightlight : ""
                }`}
                >
                Konst
              </a>
            </NextLink><p className='visually-hidden'>Unika konstverk i ett online galleri med vacker och stilfull konst till billigt pris</p></li>
          <li className={styles.navListItem}>
            <NextLink href="/om">
              <a
                href="/om"
                className={`${styles.navListItemLink} ${
                  activeLink === "/om" ? linkHightlight : ""
                }`}
              >
                Om
              </a>
            </NextLink>
            <p className='visually-hidden'> Konstunge galleri och konstnären som skapar abstrakt och reell konst</p>
          </li>
          <li className={styles.navListItem}>
            <NextLink href="/kontakt">
              <a
                href="/kontakt"
                className={`${styles.navListItemLink} ${
                  activeLink === "/kontakt" ? linkHightlight : ""
                }`}
              >
                Kontakt
              </a>
            </NextLink>
            <p className='visually-hidden'> till utställningen och utställaren för att köpa konst, tavlor och konstverk till överkomligt pris</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

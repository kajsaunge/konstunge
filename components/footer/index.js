import Instagram from "@/icons/instagram";
import Linkedin from "../icons/linkedin";
import Facebook from "../icons/facebook";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2 className={styles.copyright}>© Konstunge 2021</h2>
        <nav aria-label='Extern länklista' role='navigation'>
          <ul className={styles.footerNavList}>
            <li>
              <a
                className={styles.footerNavLink}
                href="https://www.instagram.com/konstunge"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                className={styles.footerNavLink}
                href="https://www.facebook.com/konstunge"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                className={styles.footerNavLink}
                href="https://www.linkedin.com/in/kajsaunge/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

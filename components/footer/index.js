import Instagram from "@/icons/instagram";
import Linkedin from "../icons/linkedin";
import Kajsaunge from "../icons/kajsaunge";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3 className={styles.logo}>Konstunge</h3>
        <nav>
          <ul className={styles.footerNavList}>
            <li>
              <a
                className={styles.footerNavLink}
                href="https://www.instagram.com/konstunge/"
                target="_blank"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                className={styles.footerNavLink}
                href="https://www.linkedin.com/in/kajsaunge/"
                target="_blank"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                className={styles.footerNavLink}
                href="http://kajsaunge.se/"
                target="_blank"
              >
                <Kajsaunge />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

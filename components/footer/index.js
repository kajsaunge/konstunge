import Instagram from '@/icons/instagram';
import Facebook from '../icons/facebook';
import Kajsaunge from '@/icons/kajsaunge';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2 className={styles.copyright}>©kajsaunge 2025</h2>
        <nav aria-label='Extern länklista' role='navigation'>
          <ul className={styles.footerNavList}>
            <li>
              <a
                className={styles.footerNavLink}
                href='https://www.instagram.com/kajsaunge'
                target='_blank'
                rel='noreferrer'
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                className={styles.footerNavLink}
                href='https://www.facebook.com/konst.kajsaunge/'
                target='_blank'
                rel='noreferrer'
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                className={styles.footerNavLink}
                href='http://kajsaunge.se/'
                target='_blank'
                rel='noreferrer'
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

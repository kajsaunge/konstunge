import NextLink from 'next/link'
import Image from 'next/image'

import styles from "./Footer.module.css"

// update icons to follow design style
const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.content}>
          <h3 className={styles.logo}>Konstunge</h3>
          <nav>
            <ul className={styles.footerNavList}>
              <li>
                <NextLink href='https://www.instagram.com/konstunge/'><a target='_blank'><Image width={30} height={30} src='/static/social/instagram.png' alt='Instagram'/></a></NextLink>
              </li>
              <li>
                <NextLink href='https://www.linkedin.com/in/kajsaunge/'><a target='_blank'><Image width={30} height={30} src='/static/social/linkedin.png' alt='LinkedIn'/></a></NextLink>
              </li>
              {/* <li>
                <NextLink href='http://kajsaunge.se/'><a target='_blank'><Image width={30} height={30} src='/static/social/kajsaunge.png' alt='Kajsa Unge'/></a></NextLink>
              </li> */}
            </ul>
          
          </nav>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
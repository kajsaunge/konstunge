import Link from 'next/link';

import PageIntro from '@/pageIntro';
import contentEn from '../../pages/api/en.json';

import styles from './Exhibition.module.css';

const clarion = '/static/news/clarion.png';

const Exhibition = () => (
  <>
    <div className={styles.hrLine}></div>
    <PageIntro
      level={1}
      title={contentEn.exhibition.title}
      description={contentEn.exhibition.titleDesc}
    />
    <section className={styles.exhibitions}>
      <Link href='/utstallningar'>
        <a className={styles.exhibitionsLink}>
          <img
            width={372}
            height={520}
            src={clarion}
            alt={clarion}
            className={styles.exhibitionsImage}
          />
        </a>
      </Link>
    </section>
  </>
);
export default Exhibition;

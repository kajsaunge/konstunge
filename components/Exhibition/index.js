import Link from 'next/link';

import PageIntro from '@/pageIntro';
import content from '../../pages/api/se.json';

import styles from './Exhibition.module.css';

const clarion = '/static/news/clarion.png';

const Exhibition = () => (
  <>
    <div className={styles.hrLine}></div>
    <PageIntro
      level={1}
      title={content.exhibition.title}
      description={content.exhibition.titleDesc}
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

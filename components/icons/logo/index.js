import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 222 222.09'>
        <title>
          Kajsa Unge, konstbutik med unika konstverk att köpa online
        </title>
        <polygon
          className={styles.svgK}
          points='142.51 0 133.92 0 26.8 105.35 26.8 0 0 0 0 222.09 26.8 222.09 26.8 138.51 63.34 104.43 83.3 84.47 157.4 13 142.51 0'
        />
        <path
          className={styles.svgU}
          d='M222,196.21v24.41h-3.29q-42.37,0-66.17-20.12t-23.8-64V.09h29.17V136.48q0,29.47,15.66,44.68t45.14,15.2Z'
        />
        <path
          className={styles.svgSquare}
          d='M214,8.09v206H8V8.09H214m8-8H0v222H222V.09Z'
        />
      </svg>
    </div>
  );
};

export default Logo;

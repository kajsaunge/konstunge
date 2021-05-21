import styles from './Facebook.module.css'

const Facebook = () => {
  return (
    <div className={styles.socialIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 222 222"
        width="30"
        height="30"
      >
        <title>Facebook logo</title>
        <path
          className={styles.interactive}
          fill="#342d29"
          d="M214,8V214H8V8H214m8-8H0V222H222V0Z"
        />
        <path
          fill="#342d29"
          d="M87.73,106.16V92.79h12V87.17q0-9.72,6-15.91T124,65.07q2.67,0,5.34.21c1.78.14,3.52.26,5.21.35V80.55a61.86,61.86,0,0,0-7.32-.42q-4.08,0-5.84,1.9t-1.76,6.4v4.36h13.79v13.37H119.67v59.39h-20V106.16Z"
          className={styles.facebookIcon}
        />
      </svg>
      </div> 
  );
};

export default Facebook;

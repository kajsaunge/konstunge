import styles from "./Linkedin.module.css";

const LinkedIn = () => {
  return (
    <div className={styles.socialIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 222 222"
        width="30"
        height="30"
      >
        <title>linkedIn logo</title>
        <path
          className={styles.interactive}
          fill="#342d29"
          d="M214,8V214H8V8H214m8-8H0V222H222V0Z"
        />
        <text
          className={styles.linkedInIcon}
          fill="#342d29"
          transform="translate(44.25 160.55)"
        >
          in
        </text>
      </svg>
      </div> 
  );
};

export default LinkedIn;

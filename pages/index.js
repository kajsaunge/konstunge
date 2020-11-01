import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Art u</title>
        <link rel="icon" href="/favicon.ico" />
        <meta description='Portfolio site Kajsa Unge' />
      </Head>

      <main className={styles.main}>
        <h2>Art u</h2>

        <div className={styles.grid}>Konst</div>
      </main>
    </div>
  );
};

export default Home;

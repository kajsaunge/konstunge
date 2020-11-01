import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = ({ data }) => {
  const cats = data.map((item) => (
    <a href="https://nextjs.org/learn" className={styles.card}>
      <h3>{item.type}</h3>
      <p>{item.text}</p>
    </a>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Cat API</h2>

        <div className={styles.grid}>{cats}</div>
      </main>
    </div>
  );
};

// export async function getStaticProps(context) {
//   const options = {
//     method: "GET",
//     headers: {
//       get: "/facts/random?animal_type=cat&amount=2",
//     },
//   };
//   const res = await fetch(
//     "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2"
//   );
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
const options = {
  method: "GET",
    headers: {
      get: 'user',
      target: "instafeed-container",
      resolution: 'low_resolution',
      accessToken: 'IGQVJYVDRVX0hqUjU1NEpsMk9ITjMyNWZABZAXZAsa0k2d2R6NGN1ak5GUzA0WUc4ajQ0ZAE84UnJ0LWFoNkFIS2ZAhSGpHbk1wbkg1VXRTSFl2cXVsc0gtdUFYUzhJeVh2UThsMmNpTWFrdXloMUQ1Y1A3cwZDZD'
    }
};
export async function getStaticProps(context) {
  console.log('context: ', context);
  
  const res = await fetch(
    "https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js",
    [options]
  );
  console.log('res: ', res);
  // const data = await JSON.stringify(res)
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;

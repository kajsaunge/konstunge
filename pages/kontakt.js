
import Image from "next/image";
import NextLink from "next/link";

import styles from "../styles/Kontakt.module.css";

const Home = () => {
  return (
    <>
      <main className='main'>
        <div className='main-intro'>
          <h1 className='main-intro__title'>Don't be a stranger</h1>
          <p className='main-intro__description'>Har du några som helst frågor kring min konst, ett köp eller ett potentiellt samarbete nås jag enklast på mejl. <a href='mailto:hej@kajsaunge.se'>hej@kajsaunge.se</a></p>
        </div>
      </main>
    </>
  );
};

export default Home;
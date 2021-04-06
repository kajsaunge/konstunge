import Image from 'next/image'
import styles from "../styles/Om.module.css";

const profile = '/static/profile/kajsaunge.jpg'
const Home = () => {
  return (
    <>
      <main className='main'>
        <div className='main-intro'>
          <h1 className='main-intro__title'>Kajsa Unge</h1>
          {/* TODO add real text */}
          <p className='main-intro__description'>Konstnär</p>
          <p className='main-intro__description'>I'm what they call a hybrid, a multi talented person. My passions are broad but somehow they always manage to relate to each other. Design is my premier and is where I have my roots. That said, frontend development has been a part of my professional role since 2014. In the period of one day I switch between sketching with regular pen and paper, creating flows and designs in sketch, moving over to Visual Studio Code and the terminal. Most often also lots of browser or simulator testing.</p> 
          <p className='main-intro__description'>As a hybrid the speed and freedom is high and enables the possibility to influence, the process as well as the end result. It contributes to a broader understanding of processes and concepts, and for colleagues, partners and clients.</p>
          <p className='main-intro__description'>Outside work there is a whole lot of play going on, very much often with my son Loa, but also in the form of side projects and other interests such as drawing, painting, photography and social lofe. Absolutely addicted to bubbly water, mustard and list making. A couple of times per year I leave the city to spend some quality time with family and old friends on my home island Gotland. I'm generally a humble and caring person with a positiv attitude. Yep.</p>
        </div>
        <Image src={profile} alt='Portrait of the artist Kajsa Unge' width={400} height={400} />
      </main>
    </>
  );
};

export default Home;

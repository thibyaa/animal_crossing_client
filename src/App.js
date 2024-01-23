import { useEffect, useState } from 'react';
import './CSSFiles/App.css';
import './CSSFiles/MusicContainer.css';
import AnimalCrossingLogo from './assets/Animal_Crossing_Logo.png';
import FolktaleLogo from './assets/Folktale_Forest_Tree_Icon.png'
import CommunityContainer from './containers/CommunityContainer';

function App() {

  const [villagers, setVillagers] = useState([]);
  const [music, setMusic] = useState(null);
  const [playMusic, setPlayMusic] = useState(false);

  // VILLAGE CODE
  useEffect(()=>{

    const fetchVillagers = async () => {
      const response = await fetch("https://acnhapi.com/v1/villagers/")
      const data = await response.json();

      const villagersArray = Object.values(data)
      // console.log(villagersArray) 

      // shuffle the array 
      for(let i = villagersArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [villagersArray[i], villagersArray[j]] = [villagersArray[j], villagersArray[i]];
      }

      // slice first 5 
      const fiveVillagers = villagersArray.slice(0, 5);
      // console.log(fiveVillagers);

      setVillagers(fiveVillagers);
    }

    fetchVillagers()
  },[])

  // MUSIC RELATED CODE
  const randomNumberGenerator = Math.floor(Math.random() * (95 - 1) + 1);
  let AnimalCrossingMusic = new AudioContext();

  useEffect(() => {
    const fetchMusic = async () => { 
      const response = await fetch(`http://acnhapi.com/v1/music/${randomNumberGenerator}`)
      const data = await response.arrayBuffer();
      const musicToPlay = await AnimalCrossingMusic.decodeAudioData(data);
      setMusic(musicToPlay);
    }
    fetchMusic();
  }, [])

  function playback(){
      const playSound = AnimalCrossingMusic.createBufferSource();
      playSound.buffer = music;
      playSound.connect(AnimalCrossingMusic.destination);
      playSound.start(AnimalCrossingMusic.currentTime);
      // playSound.stop(AnimalCrossingMusic.currentTime); // this needs to go in a useEffect 
  }

  const handleClick = () => {
    setPlayMusic(!playMusic);
    playback();
    }

  return (
    <>
    <img src={AnimalCrossingLogo} alt={"hello"}/>
    <header>
    <h1>Bulletin Board</h1>
    <img src={FolktaleLogo} alt={"hello"}/>
    </header>
    <section className="music_box">
      <button onClick={handleClick}>{playMusic ? "Please STOP" : "Play Music"}  </button>
    </section>
    <CommunityContainer villagers={villagers}/>
    </>
  );
}

export default App;

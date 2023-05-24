import { useEffect, useState } from 'react';
import './CSSFiles/App.css';
import AnimalCrossingLogo from './assets/Animal_Crossing_Logo.png';
import FolktaleLogo from './assets/Folktale_Forest_Tree_Icon.png'
import CommunityContainer from './containers/CommunityContainer';
import MusicContainer from './containers/MusicContainer';

function App() {

  const [villagers, setVillagers] = useState([]);
  const [music, setMusic] = useState(null);

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
      console.log(fiveVillagers);

      setVillagers(fiveVillagers);
    }

    fetchVillagers()
  },[])

  const randomNumberGenerator = Math.floor(Math.random() * (95 - 1) + 1);

  useEffect(() => {
    const fetchMusic = async () => {
      let AnimalCrossingMusic = new AudioContext();
      const response = await fetch(`http://acnhapi.com/v1/music/${randomNumberGenerator}`)
      const data = await response.arrayBuffer();
      const musicToPlay = await AnimalCrossingMusic.decodeAudioData(data);
      setMusic(musicToPlay);
    }
    fetchMusic();
  }, [])

  return (
    <>
    <img src={AnimalCrossingLogo}/>
    <header>
    <h1>Bulletin Board</h1>
    <img src={FolktaleLogo}/>
    </header>
    <MusicContainer music={music}/>
    <CommunityContainer villagers={villagers}/>
    </>
  );
}

export default App;

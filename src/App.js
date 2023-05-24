import { useEffect, useState } from 'react';
import './CSSFiles/App.css';
import AnimalCrossingLogo from './assets/Animal_Crossing_Logo.png';
import FolktaleLogo from './assets/Folktale_Forest_Tree_Icon.png'
import CommunityContainer from './containers/CommunityContainer';
import MusicContainer from './containers/MusicContainer';

function App() {

  const [villagers, setVillagers] = useState({});
  const [music, setMusic] = useState(null);

  const randomNumberGenerator = Math.floor(Math.random() * (391 - 1) + 1);
  console.log(randomNumberGenerator);

  useEffect(()=>{

    const fetchVillagers = async () => {
      const response = await fetch("https://acnhapi.com/v1/villagers/")
      const data = await response.json();
      setVillagers(data);
    }
    
    fetchVillagers();
  },[])

  // useEffect(() => {
  //   const fetchMusic = async () => {
  //     const response = await fetch(`http://acnhapi.com/v1/music/${randomNumberGenerator}`)
  //     const data = await response.json();
  //     setMusic(data);
  //   }

  //   fetchMusic();
  // }, [])

  return (
    <>
    <img src={AnimalCrossingLogo}/>
    <header>
    <h1>Bulletin Board</h1>
    <img src={FolktaleLogo}/>
    </header>
    <MusicContainer/>
    <CommunityContainer villagers={villagers}/>
    </>
  );
}

export default App;

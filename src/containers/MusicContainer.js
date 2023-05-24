import { useState } from 'react';
import '../CSSFiles/MusicContainer.css';

const MusicContainer = ({music}) => {

    const [detailsDisplay, setDetailsDisplay] = useState(false);

    const handleClick = () => {
    setDetailsDisplay(!detailsDisplay);
    }

    function playback(){
        const playSound = music.createBufferSource();
        playSound.buffer = music;
        playSound.connect(music.destination);
        playSound.start(music.currentTime);
    }


    return ( 
        <section className="music_box">
        <button onClick={handleClick}>{detailsDisplay? "Please STOP" : "Play Music"}  </button>
        </section>
     );
}
 
export default MusicContainer;
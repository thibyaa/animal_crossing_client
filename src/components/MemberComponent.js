import { useState } from 'react';
import '../CSSFiles/MemberComponent.css';
const MemberComponent = ({villager}) => {

    const [detailsDisplay, setDetailsDisplay] = useState(false);

    const memberName = villager.name[0];

    // const changePTag = () => {
    //     return <p> Personality: {villager.personality} <br/> Hobby: {villager.hobby} <br/> Species: {villager.species} </p>
    // }

    const handleClick = () => {
        setDetailsDisplay(!detailsDisplay);
    }

    return ( 
        <div className="member_card">
        <img src={villager.image_uri}/>
        <h2>{memberName}</h2>
        {detailsDisplay ? <p> Personality: {villager.personality} <br/> Hobby: {villager.hobby} <br/> Species: {villager.species} </p> : <p>{villager.saying}</p>}
        <button onClick={handleClick}>{detailsDisplay ? "Back" : "Learn More"}</button>
        </div>
     );
}
  
export default MemberComponent;
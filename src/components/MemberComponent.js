import '../CSSFiles/MemberComponent.css';
const MemberComponent = ({villager}) => {

    const memberName = Object.values(villager.name)[0];

    return ( 
        <div className="member_card">
        <img src={villager.image_uri}/>
        <h2>{memberName}</h2>
        <h3>{villager.saying}</h3>
        <button> Learn More </button>
        </div>
     );
}
  
export default MemberComponent;
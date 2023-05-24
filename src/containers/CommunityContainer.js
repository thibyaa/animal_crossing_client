import MemberComponent from "../components/MemberComponent";
import '../CSSFiles/CommunityContainer.css'

const CommunityContainer = ({villagers}) => {

    const generateMember = villagers.map((villager) => {
        return <MemberComponent key= {villager.id} villager={villager}/>
    })

    return ( 
        <section className="community">
        {generateMember}
        </section>
     );
}
 
export default CommunityContainer;
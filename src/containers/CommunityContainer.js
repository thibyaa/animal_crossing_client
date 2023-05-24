import MemberComponent from "../components/MemberComponent";

const CommunityContainer = ({villagers}) => {

    const generateMember = villagers.map((villager) => {
        return <MemberComponent key= {villager.id} villager={villager}/>
    })

    return ( 
        <>
        {generateMember}
        </>
     );
}
 
export default CommunityContainer;
import MemberComponent from "../components/MemberComponent";

const CommunityContainer = ({villagers}) => {

    console.log(villagers);

    const generateMember = Object.values(villagers).map((villager) => {
        return <MemberComponent key= {villager.id} villager={villager}/>
    })

    return ( 
        <>
        {generateMember}
        </>
     );
}
 
export default CommunityContainer;
import NavBarCustomer from "../../components/customerComponents/NavBarCustomer";

import HeaderCustomer from "../../components/headerCustomer";
import EditReviewDetail from "../../components/customerComponents/rating/edit/editReviewDetail";
import { useQuery } from "@apollo/client";
import { GET_UNIQUE_SP} from "../../GraphQL/customerQueries";

const CustomerSPReview=(props)=>{
    const ID=props.match.params.id;
    const SPdetails=useQuery(GET_UNIQUE_SP,{
        variables:{provider: ""+ID}
    });
    if (SPdetails.loading) return <p>Loading</p>;
    if (SPdetails.error) return <p>error</p>;
    return(
        <div>
            
            <NavBarCustomer/>
            <HeaderCustomer/>
            <EditReviewDetail name={SPdetails.data.UniqueSearchSP.name} email={SPdetails.data.UniqueSearchSP.email}
            rating={SPdetails.data.UniqueSearchSP.rating}
            contactNo={SPdetails.data.UniqueSearchSP.contact_no} />
        </div>
    )
}
export default CustomerSPReview;
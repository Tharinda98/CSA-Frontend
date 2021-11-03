import { useQuery } from "@apollo/client";
import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import WorkProgress from "../components/customerComponents/WorkProgress";
import NormalHeader from "../components/normalHeader";
import {WORK_PROGRESS} from "../GraphQL/Queries";

const CustomerWorkProgress=()=>{
    const Works = useQuery(WORK_PROGRESS);
    if (Works.loading) return <p>Loading</p>;
    if (Works.error) return <p>Loading</p>;
    return(
        <div>
            <NavBarCustomer/>
            <NormalHeader/>
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div className="row">
                                {Works.data.customer_getMyOngoingWorks.map(ongoing=>(
                                    <WorkProgress SP={ongoing.booking.to.name} job={ongoing.booking.description} date={ongoing.starting_date} 
                                    duration={ongoing.duration}/>
                                ))}
                                {/* <WorkProgress SP={Works.data.customer_getMyOngoingWorks.booking.state}/>
                                
                                <WorkProgress/>
                                <WorkProgress/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerWorkProgress;
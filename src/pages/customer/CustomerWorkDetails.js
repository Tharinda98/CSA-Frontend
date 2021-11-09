import BreadCrumb from "../../components/breadcrumb";
import NavBarCustomer from "../../components/customerComponents/NavBarCustomer";
import WorkDetailsPaid from "../../components/customerComponents/WorkDeatilsPaid";
import HeaderCustomer from "../../components/headerCustomer";
import { useQuery } from "@apollo/client";
import {FINISHED_WORKS} from "../../GraphQL/customerQueries";
const CustomerWorkDetails=()=>{
    const works=useQuery(FINISHED_WORKS);
    if (works.loading) return <p>Loading</p>;
    if (works.error) return <p>error</p>;
    return(
        <div>
            <NavBarCustomer/>
            <HeaderCustomer/>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            <BreadCrumb type="Work" reason="Paid"/>
                            <div className="row">
                                {works.data.customer_getMyFinishedWorks.map(work=>{
                                    if (work.paid){
                                        return <WorkDetailsPaid SP={work.booking.to.name} 
                                        description={work.booking.description}
                                        startDate={work.starting_date}
                                        finishDate={work.finish_date}
                                        cost={work.cost}/>
                                    }
                                })}
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerWorkDetails;
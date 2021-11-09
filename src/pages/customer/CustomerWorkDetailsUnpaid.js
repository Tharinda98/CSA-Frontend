import { useQuery } from "@apollo/client";
import BreadCrumb from "../../components/breadcrumb";
import NavBarCustomer from "../../components/customerComponents/NavBarCustomer";
import WorkDetailsUnpaid from "../../components/customerComponents/WorkDetailsUnpaid";
import HeaderCustomer from "../../components/headerCustomer";
import {FINISHED_WORKS, CUSTOMER_ME} from "../../GraphQL/customerQueries";

const CustomerWorkDetailsUnpaid=()=>{
    const works=useQuery(FINISHED_WORKS);
    const customer=useQuery(CUSTOMER_ME);
    if (works.loading) return <p>Loading</p>;
    if (works.error) return <p>error</p>;
    
    console.log(customer.data);
    return(
        <div>
            <NavBarCustomer/>
            <HeaderCustomer/>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            <BreadCrumb type="Work" reason="Unpaid"/>
                            <div className="row">
                                {works.data.customer_getMyFinishedWorks.map(work=>{
                                    if (!work.paid){
                                    return <WorkDetailsUnpaid Customer={customer.data.Customer_me} SP={work.booking.to.name} startDate={work.starting_date} finishDate={work.finish_date}
                                    description={work.booking.description}
                                    appointment={work.appointment_id}
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
export default CustomerWorkDetailsUnpaid;
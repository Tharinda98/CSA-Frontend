import { useQuery } from "@apollo/client";
import BreadCrumb from "../components/breadcrumb";
import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import WorkDetailsUnpaid from "../components/customerComponents/WorkDetailsUnpaid";
import NormalHeader from "../components/normalHeader";
import {FINISHED_WORKS, CUSTOMER_ME} from "../GraphQL/Queries";

const CustomerWorkDetailsUnpaid=()=>{
    const works=useQuery(FINISHED_WORKS);
    // if (works.data== null) {
    //     works.refetch();
    // };
    const customer=useQuery(CUSTOMER_ME);
    console.log(customer.data);
    return(
        <div>
            <NavBarCustomer/>
            <NormalHeader/>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            <BreadCrumb/>
                            <div className="row">
                                {works.data==null ? "":works.data.customer_getMyFinishedWorks.map(work=>{
                                    if (!work.paid){
                                    return <WorkDetailsUnpaid Customer={customer.data.Customer_me} SP={work.booking.to.name} startDate={work.starting_date} finishDate={work.finish_date}
                                    description={work.booking.description}
                                    appointment={work.appointment_id}/>
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
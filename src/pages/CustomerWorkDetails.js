import BreadCrumb from "../components/breadcrumb";
import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import WorkDetailsPaid from "../components/customerComponents/WorkDeatilsPaid";
import NormalHeader from "../components/normalHeader";
import { useQuery } from "@apollo/client";
import {FINISHED_WORKS} from "../GraphQL/Queries";
const CustomerWorkDetails=()=>{
    const works=useQuery(FINISHED_WORKS);
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
                                {works.data == null ? "":works.data.customer_getMyFinishedWorks.map(work=>{
                                    if (work.paid){
                                        return <WorkDetailsPaid/>
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
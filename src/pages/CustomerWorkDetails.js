import BreadCrumb from "../components/breadcrumb";
import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import WorkDetailsPaid from "../components/customerComponents/WorkDeatilsPaid";
import NormalHeader from "../components/normalHeader";

const CustomerWorkDetails=()=>{
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
                                <WorkDetailsPaid/>
                                <WorkDetailsPaid/>
                                <WorkDetailsPaid/>
                                <WorkDetailsPaid/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerWorkDetails;
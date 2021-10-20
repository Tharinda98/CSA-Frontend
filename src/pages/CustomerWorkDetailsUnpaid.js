import BreadCrumb from "../components/breadcrumb";
import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import WorkDetailsUnpaid from "../components/customerComponents/WorkDetailsUnpaid";
import NormalHeader from "../components/normalHeader";

const CustomerWorkDetailsUnpaid=()=>{
    
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
                                
                                <WorkDetailsUnpaid/>
                                <WorkDetailsUnpaid/>
                                <WorkDetailsUnpaid/>
                                <WorkDetailsUnpaid/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerWorkDetailsUnpaid;
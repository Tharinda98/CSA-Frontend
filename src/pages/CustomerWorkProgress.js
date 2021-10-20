import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import WorkProgress from "../components/customerComponents/WorkProgress";
import NormalHeader from "../components/normalHeader";

const CustomerWorkProgress=()=>{
    return(
        <div>
            <NavBarCustomer/>
            <NormalHeader/>
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div className="row">
                                <WorkProgress/>
                                <WorkProgress/>
                                <WorkProgress/>
                                <WorkProgress/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerWorkProgress;
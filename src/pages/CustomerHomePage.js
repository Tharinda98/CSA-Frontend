import BreadCrumb from "../components/breadcrumb";
import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import SPCard from "../components/customerComponents/SPCard";
import Header from "../components/header";


const CustomerHomePage=()=>{
    return(
        <div>
            <NavBarCustomer/>
            <Header/>
            
            <div class="pcoded-main-container main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <BreadCrumb type="Customer" reason="Home Page"/>
                                    <div class="row">
                                        
                                            <SPCard SP_name={"TB Construction"} SP_field={"Plumbing"} SP_location={"Kalutara"} SP_rating={"4.7"}/>
                                            <SPCard SP_name={"TG Glass"} SP_field={"Glass"} SP_location={"Kalutara"} SP_rating={"4.7"}/>
                                            <SPCard SP_name={"AL Aluminium"} SP_field={"Aluminuim"} SP_location={"Kalutara"} SP_rating={"4.7"}/>
                                            <SPCard SP_name={"Concrete works Horana"} SP_field={"Construction"} SP_location={"Kalutara"} SP_rating={"4.7"}/>
                                            <SPCard SP_name={"Timber works"} SP_field={"Wood Work"} SP_location={"Kalutara"} SP_rating={"4.7"}/>

                                        
                                    </div>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default CustomerHomePage;
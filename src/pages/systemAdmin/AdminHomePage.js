import AdminCountCard from "../../components/adminComponents/AdminCountCard";
import AdminRatingCard from "../../components/adminComponents/AdminRatingCard";
import AdminWorkPercentage from "../../components/adminComponents/AdminWorkPercentage";
import SalesCards from "../../components/adminComponents/SalesCards";
import NavBarAdmin from "../../components/adminComponents/NavBarAdmin";

const AdminHomePage=()=>{
    return(
        <div>
            <NavBarAdmin/>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            <div className="row">
                                <SalesCards/>
                                <SalesCards/>
                                <SalesCards/>

                            </div>
                            <div className="row">
                                <AdminRatingCard/>
                                <div className="col-xl-4 col-md-6">
                                    <AdminWorkPercentage/>
                                    <AdminCountCard/>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>        
            
        </div>
    )
}
export default AdminHomePage;
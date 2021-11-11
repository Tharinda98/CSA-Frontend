import NavBarCustomer from "../../components/customerComponents/NavBarCustomer";
import {Link} from 'react-router-dom';
import CustomerReviewCard from "../../components/customerComponents/CustomerReviewCard";
import BreadCrumb from "../../components/breadcrumb";
import HeaderCustomer from "../../components/headerCustomer";
import {useQuery,gql} from '@apollo/client';
import { CUSTOMER_ME } from "../../GraphQL/customerQueries";




const CustomerEditProfile=()=>{
    //query hooks
    //const {data:v, loading:vl, error:ve} = useQuery(GET_CUSTOMER_DETAILS);
    //const {data, loading, error}= useQuery(GET_SERVICES);
    //if (vl) return <p>Loading</p>;
    //if (ve) return <p>error!</p>;
    const me=useQuery(CUSTOMER_ME);
    if (me.loading) return <p>loading</p>
    if (me.error) return <p>error!</p>


    return(
        <div>
            <NavBarCustomer/>
            <HeaderCustomer/>

            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">
                            <BreadCrumb type="Service Provider" reason="View"/>
                            <div className="row">

                                <div>
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 0px 35px'}}>
                                            <div className="card-header">
                                                <h5>{me.data.Customer_me.name}</h5>
                                            </div>
                                            <div>
                                                <img src="/assets/images/user/profile.jpg" alt="" style={{display:'block',height:'200px',width:'250px',margin:'auto',paddingTop:'15px',justifyContent:'center'}}/> 
                                            </div>
                                            <hr/>
                                            <div style={{ margin:'15px',display:'flex'}}>
                                                <Link to="/review" className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#5e8d25',borderColor:'#5e8d25'}}>
                                                    
                                                    Change Profile Picture  
                                                </Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>



                                <div className="col-xl-8">
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>More Details</h5>
                                            </div>

                    
                                            <div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Name:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {me.data.Customer_me.name} 
                                
                                                        <hr/>
                                                        
                                                    </div>
                                                </div>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        User Name:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {me.data.Customer_me.username} 
                                
                                                        <hr/>
                                                        
                                                    </div>
                                                </div>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Email:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {me.data.Customer_me.email} 
                                
                                                        <hr/>
                                                        
                                                    </div>
                                                </div>

                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Contact No:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {me.data.Customer_me.contact_no} 
                                
                                                        <hr/>
                                                        
                                                    </div>
                                                </div>
                        
                                                <hr/>

                                            </div>
                   
                                        </div>
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
export default CustomerEditProfile;
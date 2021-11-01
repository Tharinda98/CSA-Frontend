import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import {Link} from 'react-router-dom';
import CustomerReviewCard from "../components/customerComponents/CustomerReviewCard";
import BreadCrumb from "../components/breadcrumb";
import NormalHeader from "../components/normalHeader";
import {useQuery,gql} from '@apollo/client';
import {GET_CUSTOMER_DETAILS} from "../GraphQL/Queries";




const CustomerSPView=()=>{
    //query hooks
    //const {data:v, loading:vl, error:ve} = useQuery(GET_CUSTOMER_DETAILS);
    //const {data, loading, error}= useQuery(GET_SERVICES);
    //if (vl) return <p>Loading</p>;
    //if (ve) return <p>error!</p>;


    return(
        <div>
            <NavBarCustomer/>
            <NormalHeader/>

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
                                                <h5>dfddf</h5>
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
                                                <h5>title</h5>
                                            </div>

                    
                                            <div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Name:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        (name) 
                                
                                                        <hr/>
                                                        
                                                    </div>
                                                </div>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        User Name:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        (username) 
                                
                                                        <hr/>
                                                        
                                                    </div>
                                                </div>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Email:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        (email) 
                                
                                                        <hr/>
                                                        
                                                    </div>
                                                </div>

                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Contact No:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        (contactno) 
                                
                                                        <hr/>
                                                        
                                                    </div>
                                                </div>
                        
                                                <hr/>

                                            </div>
                   
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-xl-11">
                                    <div className="card yearly-sales">
                                        <div className="card-block">
                                            <div className="card-header">
                                                <h5>Customer Reviews</h5>
                                            </div>
                                            <CustomerReviewCard/>
                                            <CustomerReviewCard/>
                                            <CustomerReviewCard/>
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
export default CustomerSPView;
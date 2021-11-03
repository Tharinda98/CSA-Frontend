import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import {Link} from 'react-router-dom';
import CustomerReviewCard from "../components/customerComponents/CustomerReviewCard";
import BreadCrumb from "../components/breadcrumb";
import NormalHeader from "../components/normalHeader";
import { useQuery } from "@apollo/client";
import {GET_UNIQUE_SP} from "../GraphQL/Queries";
import React, { useEffect } from 'react';
const CustomerSPView=(props)=>{
    console.log(props.id);
    const ID=props.match.params.id;
    useEffect(() => {
        SPdetails.refetch({provider: ""+props.match.params.id}).then(value =>{
                console.log(value);
            });
      });
  
    const SPdetails=useQuery(GET_UNIQUE_SP,{
        variables:{provider: ""+props.match.params.id}
    });
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
                            {console.log(SPdetails)}
                                <div>
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 0px 35px'}}>
                                            <div className="card-header">
                                                <h5>Profile</h5>
                                            </div>
                                            <div>
                                                <img src="/assets/images/user/profile.jpg" alt="" style={{display:'block',height:'200px',width:'250px',margin:'auto',paddingTop:'15px',justifyContent:'center'}}/> 
                                            </div>
                                            <hr/>
                                            <div style={{ margin:'15px',display:'flex'}}>
                                                <Link to="/review" className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#5e8d25',borderColor:'#5e8d25'}}>
                                                    
                                                    Rate  
                                                </Link>
                                                <Link to={"/scheduleWork/"+ID} className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#038fcf'}}>
                                                    Schedule Work
                                                    
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                                    <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>5</h6>
                                                    <h6 className="align-items-center float-right">384</h6>
                                                    <div className="progress m-t-30 m-b-20" style={{height: "6px"}}>
                                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                    </div>
                                    
                                </div>



                                <div className="col-xl-8">
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>{SPdetails.data == null ? "Name" : SPdetails.data.UniqueSearchSP.name } </h5>
                                            </div>

                    
                                            <div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Email:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {SPdetails.data == null ? "Email" : SPdetails.data.UniqueSearchSP.email } 
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Address:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {SPdetails.data == null ? "Address" : SPdetails.data.UniqueSearchSP.address } 
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Contact No:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {SPdetails.data == null ? "Contact No" : SPdetails.data.UniqueSearchSP.contact_no } 
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Name of the Owner:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {SPdetails.data == null ? " Name of the Owner" : SPdetails.data.UniqueSearchSP.owner.owner_name } 
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Membership:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {SPdetails.data == null ? "Membership" : SPdetails.data.UniqueSearchSP.membership.membership_name } 
                                                    </div>
                                                </div>
                                                <hr/>
                        
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Working Range:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        <div>
                                                            {SPdetails.data == null ? "Membership" : SPdetails.data.UniqueSearchSP.workingRange.map(range=>(
                                                                range+" , " 
                                                            )) }
                                    
                                                        </div>
                                                        
                                                    </div>
                                                </div>

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
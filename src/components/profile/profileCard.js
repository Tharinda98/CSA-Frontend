import React from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";

const ProfileCard = ({id,edit,title,name,nic,contact,address}) => {




    return (  
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>{title}</h5>
                    </div>

        
                    <div className="" style={{paddingTop:"25px"}}>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Full Name:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {name}
                            </div>
                        </div>
                        <hr/>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                NIC:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {nic}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Phone:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {contact}
                            </div>
                        </div>
                        <hr/>
                        {address ?<div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Address:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {address}
                            </div>
                        </div>:
                        
                        null
                        }
                    </div>
                   

                    {edit ?<div style={{paddingTop:"20px",float:"right"}}>
                        <Link to={`/Worker/edit/basicInfo/`} className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                            Edit 
                            <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                        </Link>
                    </div>: 
                    <br/>}

                   
                   

                 </div>
            </div>
        </div>
    );
}
 
export default ProfileCard;
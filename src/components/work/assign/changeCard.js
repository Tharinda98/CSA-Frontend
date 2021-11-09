import SearchBar from "../../searchBar";
import EmployeeCard from "../../employee/employeeCard";
import AssignForm from '../../form/assignWorkerForm';

import React, { useState,useEffect } from "react";


import Empty from "../../empty";
import Loading from "../../loading";

const ChangeCard = ({title,content,setID,id,type,action,loading,ID}) => {


    return ( 
        <div className=""> 
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5>{title}</h5>
                    </div>
                    <div className="" style={{marginTop:'20px'}}>

                     <SearchBar placeholder="Enter worker ID ..." id={id} setId={setID}/>
                                            
                     </div>
                    {!loading ?
                    <div className="card-block px-0 py-3">
                        <div className="">
                            <div className="">
                                <div className="row d-flex" style={{margin:'auto',alignItems:'center',justifyContent:'center'}}>

                                    { content[0] ? 

                                    content.map ((e) => {

                                    return<React.Fragment key={e._id} >
                                        <EmployeeCard content={e} type={type}/>
                    
                                            <div className="col-10 col-sm-5 col-md-5 col-xl-5" style={{margin:'20px'}}>
                                            
                                                {
                                                    <AssignForm 
                                                    appointment = {ID}
                                                    worker={e._id}
                                                    action = {action}
                                                />
                                                }
                                                        
                                            </div> 
                                            <hr/>
                                    </React.Fragment>
                                    })
                                     
                                    :
                                    <div style={{width:'100%'}}>
                                        <Empty
                                            message="No matches Found"
                                        />
                                    </div>
                                    }



                                   
                                                                       
                                </div>
                            </div>
                        </div>
                    </div> :
                        <Loading/>
                    }
                                                
                </div>
            </div>
        </div>
     );
}
 
export default ChangeCard;
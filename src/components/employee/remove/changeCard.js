import SearchBar from "../../searchBar";
import EmployeeCard from "../employeeCard";
import FinishCard from "../../finishCard";

import { useState,useEffect } from "react";


import ElementCard from "../elementCard";
import Empty from "../../empty";
import Loading from "../../loading";

const ChangeCard = ({title,content,setID,id,type,action,childComponent,loading}) => {


    
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
                                   
                                    return <ElementCard
                                        key = {e._id}
                                        content = {e}
                                        type = {type}
                                        childComponent = {
                                            <FinishCard
                                            title= {`Remove ${type}`}
                                            action = {action}
                                            workerId = {e._id} 
                                            leftDate = {e.left_date}
                                            loading = {loading}
                                            />
                                        }
                                    />})
                                     
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
import BreadCrumb from '../../breadcrumb';
import SearchBar from '../../searchBar';
import PaginationBar from '../../pagination';
import WorkBar from './workBar';


import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";


import Loading from '../../loading';
import Empty from '../../empty';

import { dateFormatter } from '../../formatter';


const ViewWorks = ({type,content,setPage,page,offSet,id,setID,loading,url}) => {  
    
    const [contents,setContent]=useState([])

    useEffect(()=>{
        setContent(content)
    },[content])


    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Work" reason="view" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    
                                    {/*<!-- [ view-table ] start -->*/}
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Search Work ID</h5>
                                            </div>
                                            <div className="" style={{marginTop:'20px'}}>
                                                <SearchBar placeholder="Enter work ID ..." id={id} setId={setID}/>
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div >
                                                    <div >
                                                        {!loading ?
                                                        <div >

                                                            {contents[0]? contents.map(e =>{


                                                                return  <WorkBar
                                                                title = {e.appointment_id}
                                                                time = {dateFormatter(e.starting_date)}
                                                                description = {e.booking.description}
                                                                viewURL = {!url ? `/CSA/work/${e._id}`:`/Worker/work/${e._id}`}
                                                                
                                                                id = {e.appointment_id}
                                                                key = {e.appointment_id}
                                                            />  


                                                            }):
                                                                <Empty
                                                                    message="No results Found"
                                                                />
                                                            }

                                                        
                                                                   
                                                        </div>

                                                        : 
                                                        
                                                            <Loading/>
                                                       
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- [ view-table ] end -->*/}

                                </div>
                            </div>
                        </div>
                        <hr/>
                        <PaginationBar setPage={setPage} page={page} offSet={offSet}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ViewWorks;
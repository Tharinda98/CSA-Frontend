import { useEffect , useState } from 'react';

import BreadCrumb from '../../breadcrumb';
import SearchBar from '../../searchBar';
import PaginationBar from '../../pagination';
import RequestBar from './requestBar';



import {dateFormatter} from "../../formatter";
import Loading from '../../loading';
import Empty from '../../empty';

const NewWorkRequest = ({id,setID,content,setPage,page,offSet,loading}) => {    


    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Work" reason="New Request" />
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
                                            
                                            <SearchBar placeholder="Enter work Booker ID ..." id={id} setId={setID}/>
                                            
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="container">
                                                    {!loading ?
                                                        <div className="justify-content-center" >
                                                            
                                                           
                                                            {content[0] ? content.map((e)=>{
                                                                
                                                                return <RequestBar
                                                                    by={e.by.username} 
                                                                    workstation ={e.workStationDistrict}
                                                                    description ={e.description}
                                                                    key ={e._id}
                                                                    id = {e._id}
                                                                    date={dateFormatter(e.date)}
                                                            /> 

                                                            }):
                                                            <Empty
                                                            message="No Request Found"
                                                            />
                                                            }
                                                           
                                                        </div>
                                                             :<Loading/>}

                                                             
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
 
export default NewWorkRequest;
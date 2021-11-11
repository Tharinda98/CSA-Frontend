import { useState, useEffect } from 'react';


import BreadCrumb from '../../breadcrumb';
import SearchBar from '../../searchBar';

import ChangeCard from './changeCard';
import AssignForm from '../../form/assignWorkerForm';
import AssignWorkerCard from './assignWorkerCard';
import Empty from '../../empty';
import { act } from 'react-test-renderer';
import Loading from '../../loading';




const AssignWorkerForm = ({type,ID,contents,workerContent,state,setAssignWorkerID,loading,loadingWorker,action}) => {

    const [content,setContent] = useState([])

    useEffect(()=>{
        
        if(contents){
            setContent(contents)
        }
    },[contents])

    
    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Work" reason="Assign" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    {/*<!-- [ Assign-table ] end -->*/}
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Assign Workers Details</h5>
                                            </div>
                                            <div className="" style={{marginTop:'20px'}}>
                                            {/*<!-- [ search bar ] start -->*/}
                                            {/* <SearchBar  placeholder="Search with senders ..."   /> */}
                                            {/*<!-- [ search bar ] end -->*/}
                                            </div>
                                            {!loadingWorker ?
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div className="" style={{margin:'auto'}}>

                                                            {content[0] ? content.map(e =>{
                                                            
                                                                return   <AssignWorkerCard
                                                                            id={e.username}
                                                                            designation="Worker"
                                                                            phone={e.contact_no}
                                                                            rating= {e.rating}
                                                                            email = {e.email}
                                                                            viewURL={`/CSA/profile/${e._id}`}
                                                                            delURL=""
                                                                            key = {e._id}
                                                                        />  
                                                            })

                                                            :
                                                                <Empty/>
                                                            }   
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            :
                                                <Loading/>
                                            }
                                        </div>
                                    </div>
                                    {/*<!-- [ Assign-table ] end -->*/}
                                    
                                </div>

                                    {/*<!-- [ Add-Worker-Card ] end -->*/}
                                    {
                                        state !== 'finished'?
                                        <ChangeCard
                                            title ='Add Workers'
                                            setID={setAssignWorkerID}
                                            content = {workerContent}
                                            loading = {loading}
                                            action = {action}
                                            type = "Worker"
                                            ID = {ID}
                                            
                                        />
                                    : null 
                                        
                                    }
                                    {/*<!-- [ Add-worker-card ] end -->*/}

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default AssignWorkerForm;
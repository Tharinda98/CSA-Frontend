import BreadCrumb from '../../breadcrumb';
import SearchBar from '../../searchBar';
import PaginationBar from '../../pagination';
import NotificationBar from '../../notification/notificationBar';

import { useState, useEffect } from "react"


const ViewWorks = () => {    

    const [content,setContent] = useState([]);
    const [id,setID] = useState('');
    const [page,setPage] = useState(0);
    const [offSet,setOffSet] = useState(1);
    const limit = 10;


    useEffect(()=>{

        fetch(`http://localhost:8000/serviceprovider/newRequestCount`)
            .then(res => res.json())
            .then(data => {
                setOffSet(data/limit);              
            })
            .catch(err => console.log(err));

            
        
    },[]);

    useEffect(()=>{

        fetch(`http://localhost:8000/serviceprovider/newRequests?pages=${page}`)
            .then(res => res.json())
            .then(data => {
                setContent(data);               
            })
            .catch(err => console.log(err));
        
    },[page]);


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
                                                <SearchBar placeholder="Enter worker ID ..." setCardContent={setContent} setId={setID}/>
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div className="">
                                                            <NotificationBar
                                                                title = "This is the title"
                                                                time = "21 July 12:56"
                                                                description = "This is a xample description. This is a xample description. This is a xample description. This is a xample description"
                                                                viewURL = "#"
                                                                delURL = "#"
                                                                id = "ID001"
                                                            />         
                                                        </div>
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
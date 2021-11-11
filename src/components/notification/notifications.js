import BreadCrumb from '../breadcrumb';
import SearchBar from '../searchBar';
import PaginationBar from '../pagination';
import NotificationBar from './notificationBar';

import {dateFormatter} from "../formatter"
import Loading from '../loading';
import Empty from '../empty';

const ViewNotifications = ({content,setPage,page,offSet,loading}) => {    


    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Notification" reason="view" />
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
                                                {/* <SearchBar placeholder="Enter work ID ..." id={id} setId={setID}/>
                                             */}
                                            </div>
                                            
                                            <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        {!loading ?
                                                        <div >

                                                            {content[0]? content.map(e =>{

                                                               return <NotificationBar
                                                                    title = {e.state}
                                                                    time = {dateFormatter(e.date)}
                                                                    description = {e.message}
                                                                    key={e._id}
                                                                /> 


                                                            }):
                                                                <Empty
                                                                    message="No Notifications"
                                                                />
                                                            }

                                                           

                                                        
                                                                   
                                                        </div>
                                                        : <Loading/>}
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
 
export default ViewNotifications;
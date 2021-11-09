
import EmployeeCard from "../employeeCard";
import PaginationBar from '../../pagination';
import SearchBar from '../../searchBar';
import BreadCrumb from '../../breadcrumb';
import Loading from "../../loading";
import Empty  from "../../empty"



function ViewWorker({type,content,page,setID,setPage,offSet,id,loading}){

    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type={type} reason="View"/>
                        {/*<!-- [ breadcrumb ] end -->*/}
                        {/*<!-- [ search bar ] start -->*/}
                        {/* <SearchBar  placeholder="Enter worker ID ..." setCardContent={setContents} setId={setID} id={id}/> */}
                        <SearchBar placeholder="Enter worker ID ..." id={id} setId={setID}/>
                                           
                        {/*<!-- [ search bar ] end -->*/}
                        
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                {!loading ? 
                                <div className="row">

                                    {
                                        content[0] ? content.map((e) => <EmployeeCard

                                                content = {e}
                                                key = {e.username}
                                                type ={type}
                                        />)
                                        :
                                        <div style={{width:'100%'}}>
                                            <Empty/>
                                        </div>
                                    }


                                    
                                </div>
                                
                                : <Loading/> }
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

export default ViewWorker;
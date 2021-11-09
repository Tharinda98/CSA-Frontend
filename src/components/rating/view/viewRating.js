

import BreadCrumb from "../../breadcrumb";
import SearchBar from '../../searchBar';
import PaginationBar from "../../pagination";

import ViewCard from './viewCard';
import { useEffect, useState } from "react";
import Loading from "../../loading";


const ViewRating = ({type,contents,page,setID,setPage,offSet,id,loading}) => {

    const [content,setContent] = useState([])

    useEffect(()=>{
        if(contents){
            
            setContent(contents)
        }
    },[contents])

    return ( 
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">

                    {/*<!-- [ breadcrumb ] start -->*/}
                    <BreadCrumb type={type} reason="View" />
                    {/*<!-- [ breadcrumb ] end -->*/}

                    <div className="main-body">
                        <div className="page-wrapper">

                            {/*<!-- [ Review Section ] start -->*/}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Review Section</h5>
                                        </div>
                                        <div className="" style={{marginTop:'20px'}}>
                                            <SearchBar placeholder="Enter Customer ID ..." id={id} setId={setID}/>
                                        </div>
                                        {!loading ?
                                        content[0]?<div className="card-body">
                                            <h5>{type}</h5>
                                            <hr/>

                                            {
                                                content.map(e =>{
                                                    return <ViewCard 
                                                        id={e.by.username} 
                                                        message={e.content}
                                                        date = {e.createdAt}
                                                        ratingValue = {e.rating}
                                                        key = {e._id}
                                                    />
                                                })
                                            }

                                            
                                        </div>:null
                                        :
                                        <div style={{padding:30}}>
                                            <Loading/>
                                        </div>
                                        }
                                    </div>
                             
                                </div>
                            </div>
                            {/*<!-- [ Review Section ] end -->*/}



                        </div>
                    </div>

                    <hr/>

                    <PaginationBar setPage={setPage} page={page} offSet={offSet}/>

                </div>
            </div>
        </div>
    </div>
    );
}
 
export default ViewRating;
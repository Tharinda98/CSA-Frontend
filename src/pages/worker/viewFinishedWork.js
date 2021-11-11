import ViewWorks from "../../components/work/view/viewWork";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

import { GET_WORKER_FINISHEDWORK, GET_WORKER_SEARCH_FININISHEDWORK} from "../../GraphQL/workerQueries";

import swal from 'sweetalert';

//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';

const ViewFinishWork = () => {

    const [id,setID] = useState('');
    // const [Id,setID] = useState(id);
   

    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    const {error,loading,data} = useQuery(GET_WORKER_FINISHEDWORK,{
        variables:{
            page:page,
            offset:2
        }
    });

    const finishCount = (objects) => {
        if(!objects){
          return 0
        }
    
        for(var i=0;i<objects.length;i++){
          if (objects[i]._id ==="finished"){
            return objects[i].Count 
          }
        }
    
      }


    useEffect(()=>{
     
        if(data){          
            setContent(data.worker_getMyFinishedWorks)
            setContents(data.worker_getMyFinishedWorks)
            setOffSet(finishCount(data.getCountAssignedAppointments)/2)
        }

    },[data])

    // error occurred
    useEffect(()=>{
        
        if(error){
            swal({
                title: "Error",
                text: "Error occurred in retrieving please refresh",
                icon: "warning",
                button: {
                  text: "Close",
                  closeModal: true,
                }, 
                dangerMode: true  
            })
        }

    },[error])
    
    //search
    const fetchContent = useQuery(GET_WORKER_SEARCH_FININISHEDWORK,{
        variables:{ workId:id
        }
    });


    useEffect(()=>{
     
        if(id){
            fetchContent.refetch({
            workId:id
            }).then( data => {
              
                if(data){
                    setContent(data.data.worker_SearchMyFinishedWorks)
                    
                }
    
            }).catch(err=>{
                swal({
                    title: "Error",
                    text: "Error occurred in retrieving please refresh",
                    icon: "warning",
                    button: {
                      text: "Close",
                      closeModal: true,
                    }, 
                    dangerMode: true  
                })
            })
        }else if(contents){
            setContent(contents)
        }
        
    },[id]);

    
    return ( 
        <div>
                 {/* [ Pre-loader ] start */}
                 <Preloader/>
        { /* [ Pre-loader ] End 

          [ navigation menu ] start */}
        <NavBarWorker/>
        {/* </div> [ navigation menu ] end 

        [ Header ] start */}
        <Header/>
        {/*<!-- [ Header ] end --> */}
        {/*<!-- [ Main Content ] start -->*/}
        <ViewWorks 
            type="finished" 
            content={content} 
            setPage={setPage} 
            page={page}
            offSet={offSet}
            id={id}
            setID={setID}
            loading ={loading}
            role="Worker"
            url={true}
        />
        {/*<!-- [ Main Content ] end -->*/}

        </div>
     );
}
 
export default ViewFinishWork;
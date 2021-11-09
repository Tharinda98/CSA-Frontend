import ViewWorks from "../../components/work/view/viewWork";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

import { GET_WORKER_ONGOINGWORK, GET_WORKER_SEARCH_ONGOINGWORK} from "../../GraphQL/workerQueries";

//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';

const ViewWork = () => {

    const [id,setID] = useState('');
    // const [Id,setID] = useState(id);
   
    const onGoingCount = (objects) => {
        if(!objects){
          return 0
        }
    
        for(var i=0;i<objects.length;i++){
          if (objects[i]._id ==="going"){
            return objects[i].Count 
          }
        }
    
      }

    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();


    // workers ongoing work
    const {error,loading,data} = useQuery(GET_WORKER_ONGOINGWORK,{
        variables:{
            page:page,
            offset:2
        }
    });


    useEffect(()=>{
       
        if(error){
            console.log(error)
        }
        if(data){
            setContent(data.worker_getMyOngoingWorks)
            setContents(data.worker_getMyOngoingWorks)
            setOffSet(onGoingCount(data.getCountAssignedAppointments)/2)
        }


    },[data])


    // search a worker assigned to a worker
    const fetchContent = useQuery(GET_WORKER_SEARCH_ONGOINGWORK,{
        variables:{ workId:id
        }
    });


    useEffect(() => {
    
        if(id){
          fetchContent.refetch({
              workId:id
            
          }).then((data) =>{
              
                setContent(data.data.worker_SearchMyOngoingWorks)
            
          })
        }else if (contents){
          setContent(contents)
        }
    
      }, [id])

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
        <ViewWorks 
            type="confirmed" 
            content={content} 
            setPage={setPage} 
            page={page}
            offSet={offSet}
            id={id}
            setID={setID}
            loading = {loading}
            role="Worker"
            url={true}
        />
        </div>
     );
}
 
export default ViewWork;
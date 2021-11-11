import ViewNotifications from "../../components/notification/notifications";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";
import { GET_WORKER_NOTIFICATION } from "../../GraphQL/workerQueries";

//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';

import swal from 'sweetalert';

const Notification = () => {

    //const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    const {error,loading,data} = useQuery(GET_WORKER_NOTIFICATION,{
        variables:{
            page:page,
            offset:2,
        }
    });

    const count = (object)=>{
        if(!object[0]){
            return 0
        }
        var count = 0
        for(var i=0;i<object.length;i++){
            count += object[i].Count
        }
        return count
    }

    //retrieve notifications
    useEffect(()=>{


        if(data){
            setContent(data.worker_getMyNotification)
            setOffSet(count(data.getCountNotification)/2)
            
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

         {/*<!-- [ Content ] start --> */}
        <ViewNotifications 
            content={content}
            setPage={setPage} 
            page={page} 
            offSet={offSet}
            loading = {loading}
        />
         {/*<!-- [ Content ] ends --> */}
        </div>
     );
}
 
export default Notification;
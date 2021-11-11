import ViewNotifications from "../../components/notification/notifications";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

import {GET_WORKER_NOTIFICATION} from "../../GraphQL/Queries";
import { useParams } from "react-router";

import swal from 'sweetalert';

import { Count } from "../../components/formatter";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const Notification = () => {

    const {id} = useParams();

    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    //retrieve content
    const {error,loading,data} = useQuery(GET_WORKER_NOTIFICATION,{
        variables:{
            worker:id,
            page:page,
            offset:5
        }
    });


    useEffect(()=>{

        
        if(data){
          
            setContent(data.getWorkerNotification); 
            setOffSet(Count(data.getCountNotification.Count)/5) //change
        }


    },[data])


    //error
    useEffect(()=>{

        if(error){
            swal({
                title: "Error",
                text: "Error occurred in retrieving",
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
            <NavBar/>
            {/* </div> [ navigation menu ] end 
            [ Header ] start */}
            <Header/>
            {/*<!-- [ Header ] end --> */}
            {/*<!-- [ Main Content ] start -->*/}
                <ViewNotifications 
                    content={content}
                    setPage={setPage} 
                    page={page} 
                    offSet={offSet}
                    loading={loading}
                />
            {/*<!-- [ Main Content ] start -->*/}
        </div>
     );
}
 
export default Notification;
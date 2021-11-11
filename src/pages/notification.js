import ViewNotifications from "../components/notification/notifications";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

import {GET_WORKER_NOTIFICATION} from "../GraphQL/Queries";
import { useParams } from "react-router";
import { Count } from "../components/formatter";

const Notification = () => {

    const {id} = useParams();

    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

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
            setOffSet(Count(data.getCountNotification)/5) //change
        }


    },[data])

    useEffect(()=>{

        if(error){
            
        }
        

    },[error])



    return ( 
        <ViewNotifications 
            content={content}
            setPage={setPage} 
            page={page} 
            offSet={offSet}
            loading={loading}
        />
     );
}
 
export default Notification;
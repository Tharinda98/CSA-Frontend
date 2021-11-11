import ViewNotifications from "../components/notification/notifications";

import { useState, useEffect, useLayoutEffect } from 'react';
import {useQuery} from "@apollo/client";

import {GET_SPNOTIFICATION} from "../GraphQL/Queries";

import swal from 'sweetalert';


const SPNotification = () => {


    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    const {error,loading,data} = useQuery(GET_SPNOTIFICATION,{
        variables:{
            page:page,
            offset:1
        }
    });

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    },[page]);


    useEffect(()=>{

        if(data){
            
            setContent(data.getMyNotification); //change
            setOffSet(Count(data.getCountNotification)/5)
        }


    },[data]);


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
 
export default SPNotification;
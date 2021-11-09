import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import ProfileContent from '../components/profile/employee/profile';

import {useState} from 'react'
import { GET_WORKER_PROFILE } from '../GraphQL/Queries';
import { useParams } from 'react-router';


import React from "react";
import Loading from '../components/loading';


function Profile() {


    const {id} = useParams()

    const {error,loading,data} = useQuery(GET_WORKER_PROFILE,{
        variables:{
            worker:id,
            offset:3,
            page:1
        }
    });

    


    
    const [content,setContent] = useState()
    const [notificationContent,setNotificationContent] = useState([]);

    useEffect(()=>{
        if(data){
            console.log(data)
            setContent(data.UniqueSearchWorker)

            setNotificationContent(data.getWorkerNotification)
            
        }
        

    },[data]);

    return (
        <div>
        {/*<!-- [ Main Content ] start -->*/}
         <ProfileContent 
            contents={content} 
            notification={notificationContent}
            id = {id}
            type="Worker"
        />
        {/*<!-- [ Main Content ] end --> */}

        </div>
    );
  }
  
  export default Profile;
  
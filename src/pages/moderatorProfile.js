import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import ProfileContent from '../components/profile/employee/profile';

import {useState} from 'react'
import { GET_MODERATOR_PROFILE } from '../GraphQL/Queries';
import { useParams } from 'react-router';


import React from "react";



function ModeratorProfile() {


    const {id} = useParams()

    const {error,loading,data} = useQuery(GET_MODERATOR_PROFILE,{
        variables:{
            moderator:id,
            offset:5,
            page:1
        }
    });

    


    
    const [content,setContent] = useState()
    const [notificationContent,setNotificationContent] = useState([]);

    useEffect(()=>{
        if(data){
            console.log(data)
            setContent(data.UniqueSearchModerator)

            setNotificationContent(data.getMyNotification)
            
        }
        

    },[data]);

    return (
        <div>
        {/*<!-- [ Main Content ] start -->*/}
         <ProfileContent 
            contents={content} 
            notification={notificationContent}
            type ={"Moderator"}
        />
        {/*<!-- [ Main Content ] end --> */}

        </div>
    );
  }
  
  export default ModeratorProfile;
  
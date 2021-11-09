import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import ProfileContent from '../../components/profile/employee/profile';

import {useState} from 'react'
import { GET_WORKER_PROFILE } from '../../GraphQL/Queries';
import { useParams } from 'react-router';



import React from "react";
import Loading from '../../components/loading';

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

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
            
            setContent(data.UniqueSearchWorker)

            setNotificationContent(data.getWorkerNotification)
            
        }
        

    },[data]);

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
  
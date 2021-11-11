import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import ProfileContent from '../../components/profile/employee/profile';

import {useState} from 'react'
import { GET_MODERATOR_PROFILE } from '../../GraphQL/Queries';
import { useParams } from 'react-router';

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

import React from "react";
import swal from 'sweetalert';


function ModeratorProfile() {


    const {id} = useParams()

    //retrieve
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
            setContent(data.UniqueSearchModerator)
            setNotificationContent(data.getMyNotification)
            
        }
        

    },[data]);

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
  
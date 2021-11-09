import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import ProfileContent from '../../components/profile/employee/profile';
import { PROFILE } from '../../GraphQL/workerQueries';
import {useState} from 'react'
import Loading from '../../components/loading';

//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';

function Profile() {

    const {error,loading,data} = useQuery(PROFILE,{
        variables:{
            offset:3,
            page:1
        }
    });
    
    const [content,setContent] = useState([]);
    const [notificationContent,setNotificationContent] = useState([]);

    useEffect(()=>{

        if(data){
           
            setContent(data.worker_me)

            setNotificationContent(data.worker_getMyNotification)
            
        }
        

    },[data]);

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
        <ProfileContent 
            contents={content} 
            notification={notificationContent}
            type="Worker"
            loading = {loading}
            edit = {true}
        />
        {/*<!-- [ Main Content ] end --> */}
        </div>
    );
  }
  
  export default Profile;
  
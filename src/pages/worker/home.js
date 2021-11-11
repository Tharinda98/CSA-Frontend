//components
import Content from '../../components/home';
//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';

import swal from 'sweetalert';

import { useEffect, useState } from 'react/cjs/react.development';
import { useQuery } from '@apollo/client';
import {  HOME_PAGE } from '../../GraphQL/workerQueries';



function Home() {

    const [content,setContent] = useState();
    const [notification,setNotification] = useState([]);

    const {error,loading,data} = useQuery(HOME_PAGE,{
        variables:{
            page:1,
            offset:1
        }
    });

    useEffect(()=>{
      
        if(data){
            setContent(data)
            setNotification(data.worker_getMyNotification)
            
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

    var refresh = window.localStorage.getItem('refresh');
    if (refresh===null){
        window.location.reload();
        window.localStorage.setItem('refresh', "1");
    }

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
        {!loading ? <Content 
            content={content}
            loading={loading}
            notification = {notification}
            type={true}
        /> :null}
        {/*<!-- [ Main Content ] end --> */}
        </div>
    );
  }
  
  export default Home;
  
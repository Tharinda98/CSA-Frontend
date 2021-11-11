import ViewNotifications from "../../components/notification/notifications";

import { useState, useEffect, useLayoutEffect } from 'react';
import {useQuery} from "@apollo/client";

import {GET_SPNOTIFICATION} from "../../GraphQL/Queries";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

import { Count } from "../../components/formatter";
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

    //auto scroll to top
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    },[page]);

    //retrieve data
    useEffect(()=>{

 
        if(data){
            
            setContent(data.getMyNotification); //change
            setOffSet(Count(data.getCountNotification)/1)
        }


    },[data])

    //alert error
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
            {/*<!-- [ Main Content ] end -->*/}

        </div>
     );
}
 
export default SPNotification;
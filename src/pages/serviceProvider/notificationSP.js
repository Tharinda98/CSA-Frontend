import ViewNotifications from "../../components/notification/notifications";

import { useState, useEffect, useLayoutEffect } from 'react';
import {useQuery} from "@apollo/client";

import {GET_SPNOTIFICATION} from "../../GraphQL/Queries";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

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

        if(error){
            console.log(error)
        }
        if(data){
            
            setContent(data.getMyNotification); //change
            setOffSet(data.getCountNotification.Count/1)
        }


    },[data])



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
        <ViewNotifications 
            content={content}
            setPage={setPage} 
            page={page} 
            offSet={offSet}
            loading={loading}
        />
        </div>
     );
}
 
export default SPNotification;
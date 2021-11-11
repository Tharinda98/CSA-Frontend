import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import SpProfile from "../../components/profile/serviceprovider/profile";
import { GET_SPPROFILE } from "../../GraphQL/Queries";

import swal from 'sweetalert';

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const ProviderProfile = () => {

    
    const [content,setContent] = useState()
   
    //retrieve content
    const {error,loading,data} = useQuery(GET_SPPROFILE,{
        variables:{
            offset:3,
            page:1
        }
    });
    useEffect(()=>{
        if(data){
            setContent(data);
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
            {/*<!-- [ Content ] start --> */}
            <SpProfile 
                contents = {content}
                loading = {loading}
            />
            {/*<!-- [ Content ] end --> */}
        </div>
     );
}
 
export default ProviderProfile;
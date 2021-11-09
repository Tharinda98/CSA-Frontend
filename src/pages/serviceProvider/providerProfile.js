import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import SpProfile from "../../components/profile/serviceprovider/profile";
import { GET_SPPROFILE } from "../../GraphQL/Queries";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const ProviderProfile = () => {

    const {error,loading,data} = useQuery(GET_SPPROFILE,{
        variables:{
            offset:3,
            page:1
        }
    });
    const [content,setContent] = useState()
   

    useEffect(()=>{
       
        if(data){
            
            setContent(data);
            
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
        <SpProfile 
            contents = {content}
            loading = {loading}
        />
        </div>
     );
}
 
export default ProviderProfile;
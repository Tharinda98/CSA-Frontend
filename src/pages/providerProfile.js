import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import SpProfile from "../components/profile/serviceprovider/profile";
import { GET_SPPROFILE } from "../GraphQL/Queries";

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
            console.log(data)
            setContent(data);
            
        }
    },[data])

    return ( 
        <SpProfile 
            contents = {content}
            loading = {loading}
        />
     );
}
 
export default ProviderProfile;
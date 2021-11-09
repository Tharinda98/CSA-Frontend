import { useQuery } from "@apollo/client";
import WorkProfile from "../components/work/work";
import { WORK_PROFILE } from "../GraphQL/Queries";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const Work = () => {

    const {id} = useParams();
    const [content,setContent] = useState();

    const {error,loading,data} = useQuery(WORK_PROFILE,{
        variables:{
            id:id
        }
    })

    useEffect(()=>{
        if(data){
            
            setContent(data.UniqueSearchAppointment)
        }
    },[data])

    return ( 
        <WorkProfile 
            contents={content}
            loading = {loading}
        />
     );
}
 
export default Work;
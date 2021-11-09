import { useQuery } from "@apollo/client";
import WorkProfile from "../../components/work/work";
import { WORK_PROFILE } from "../../GraphQL/Queries";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

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
        <WorkProfile 
            contents={content}
            loading = {loading}
        />
        </div>
     );
}
 
export default Work;
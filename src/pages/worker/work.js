import WorkProfile from "../../components/work/work";
import { useQuery } from "@apollo/client";

import { WORK_PROFILE } from "../../GraphQL/workerQueries";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';

const Work = () => {
    const {id} = useParams();
    const [content,setContent] = useState();

    //retrieve work info
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
        <NavBarWorker/>
        {/* </div> [ navigation menu ] end 

        [ Header ] start */}
        <Header/>
        {/*<!-- [ Header ] end --> */}
        <WorkProfile
            contents={content}
            loading = {loading}
            disable = {true}
        />
        </div>
     );
}
 
export default Work;
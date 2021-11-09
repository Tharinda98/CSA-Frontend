import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AssignWorkerForm from "../../components/work/assign/assignWorker";
import { ASSIGN_WORKER } from "../../GraphQL/Mutations";
import { GET_ASSIGNWORKER, GET_SEARCH_WORKER } from "../../GraphQL/Queries";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const AssignWorker = () => {

    const {id} = useParams()
    const [Id,setID] = useState();
    

    const [state,setState] = useState()
    
    
    const [content, setContent] = useState([]);
    const [workerContent, setWorkerContent] = useState([]);

    const {error,loading,data} = useQuery(GET_ASSIGNWORKER,{
            variables:{
                id:id
            }       
    });

 




    useEffect(()=>{
        if(data){
            setContent(data.UniqueSearchAppointment.worker)
            setAppointmentID(data.UniqueSearchAppointment._id)
            setState(data.UniqueSearchAppointment.state)
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
        <AssignWorkerForm 
            type = "Employee"
            contents = {content}
            action = {assignWorker}
            setAssignWorkerID = {setAssignWorkerID}
            workId = {id}
            assignWorkerId = {workerId}
            workerContent = {workerContent}
            ID = {ID}
            loading = {fetchContent.loading}
            state = 'finished'
            loadingWorker = {loading}
        />
        </div>
     );
}
 
export default AssignWorker;
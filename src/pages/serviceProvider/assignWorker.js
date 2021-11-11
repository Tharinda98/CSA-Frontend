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

import swal from "sweetalert";

const AssignWorker = () => {

    const {id} = useParams()
    const [Id,setID] = useState();
    const [ID,setAppointmentID] = useState();

    const [state,setState] = useState()
    
    const [workerId, setAssignWorkerID] = useState();
    const [content, setContent] = useState([]);
    const [workerContent, setWorkerContent] = useState([]);

    const {error,loading,data} = useQuery(GET_ASSIGNWORKER,{
            variables:{
                id:id
            }       
    });

    const [assignWorker,{loading:loadingAssign,error:errorAssign}] = useMutation(ASSIGN_WORKER,{
        onCompleted: data =>{
            window.location.reload()
        }
    });


    const fetchContent = useQuery(GET_SEARCH_WORKER,{
        variables:{
            workerId:workerId
        }
    });

    useEffect(()=>{

  
        if(workerId){
            fetchContent.refetch({
                workerId:workerId
            }).then(data=>{
                setWorkerContent(data.data.getWorker)
                
            }).catch(err =>{
                
            })
        }

    },[workerId])

    useEffect(()=>{
        if(data){
            setContent(data.UniqueSearchAppointment.worker)
            setAppointmentID(data.UniqueSearchAppointment._id)
            setState(data.UniqueSearchAppointment.state)
        }
    },[data])

     // error occurred
     useEffect(()=>{
        
        if(error || errorAssign){
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

    },[error,errorAssign])
   

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
                state = {state}
                loadingWorker = {loading}
            />
            {/*<!-- [ Content ] start --> */}  
        </div>
     );
}
 
export default AssignWorker;
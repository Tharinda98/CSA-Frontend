import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AssignWorkerForm from "../components/work/assign/assignWorker";
import { ASSIGN_WORKER } from "../GraphQL/Mutations";
import { GET_ASSIGNWORKER, GET_SEARCH_WORKER } from "../GraphQL/Queries";

import swal from 'sweetalert';

const AssignWorker = () => {

    const {id} = useParams()
    const [Id,setID] = useState();
    const [ID,setAppointmentID] = useState();

    const [state,setState] = useState()
    
    const [workerId, setAssignWorkerID] = useState();
    const [content, setContent] = useState([]);
    const [workerContent, setWorkerContent] = useState([]);

    //retrieve workers
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


    //add a worker
    const [assignWorker,{loading:loadingAssign,error:errorAssign}] = useMutation(ASSIGN_WORKER,{
        onCompleted: data =>{
            window.location.reload()
        }
    });


    //search worker
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

   

   

    return ( 
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
     );
}
 
export default AssignWorker;
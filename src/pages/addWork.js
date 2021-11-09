import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import AddWorkForm from "../components/work/add/addWork";
import { ADD_WORK } from "../GraphQL/Mutations";
//import { CHECK_USER, CHECK_WORK } from "../GraphQL/Queries";
import { useEffect } from "react";


const AddWork = (props) => {

    const [appointment,{loading,error}] = useMutation(ADD_WORK,{
        onCompleted: data =>{
            console.log(data)
            if(data && data.appointment){
                props.history.push(`/CSA/work/${data.appointment._id}`)
            }
            
        }
    })

    // const [workerId,setWorkerId] = useState('');
    // const [workerError,setWorkerError] = useState('')
    // const [workId,setWorkId] = useState('');
    // const [workError,setWorkError] = useState('')

    // const fetchWorker = useQuery(CHECK_USER,{
    //     variables:{
    //         workerId:workerId
    //     }
    // })

   

    // useEffect(()=>{
    //     if(workerId){
    //         fetchWorker.refetch({
    //             workerId:workerId
    //         }).then(data =>{

    //             if(data.CheckUsername){
    //                 setWorkerError('')
    //             }else{
    //                 setWorkerError('Already reserved');
    //             }

    //         }).catch(err =>{
    //             alert("Error Occured")
    //         })
    //     }
    // },[workerId])



    // const fetchWork = useQuery(CHECK_WORK,{
    //     variables:{
    //         workId:workId
    //     }
    // });

    // useEffect(()=>{
    //     if(workId){
    //         fetchWork.refetch({
    //             workId:workId
    //         }).then(data =>{

    //             if(data.CheckAppointmentID){
    //                 setWorkerError('')
    //             }else{
    //                 setWorkerError('Already reserved');
    //             }

    //         }).catch(err =>{
    //             alert("Error Occured")
    //         })
    //     }
    // },[workId])
    


    return ( 
        <AddWorkForm 
            type="Work"
            action={appointment}
            // workerId = {workerId}
            // workId = {workId}
            // setWorkerId = {setWorkerId}
            // workerError = {workerError}
            // workError = {workError}
            // checkWorker = {fetchWorker}
            // checkWork = {fetchWork}

        />
     );
}
 
export default AddWork;
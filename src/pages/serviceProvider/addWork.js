import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import AddWorkForm from "../../components/work/add/addWork";
import { ADD_WORK, INITIATE_APPOINTMENT } from "../../GraphQL/Mutations";
//import { CHECK_USER, CHECK_WORK } from "../GraphQL/Queries";
import { useEffect } from "react";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const AddWork = (props) => {

    const [ID,setID] = useState()
    const [appointment_id,setAppointmentID] = useState()

    const [appointment,{loading,error}] = useMutation(ADD_WORK,{
        onCompleted: data =>{
           
            setID(data.appointment.appointment_id)
            setAppointmentID(data.appointment._id)
        }
    })

    const [initiateAppointment,{confirmLoading,errorLoading}] = useMutation(INITIATE_APPOINTMENT,{
        onCompleted: data =>{
            if(data){
                props.history.push(`/CSA/work/${appointment_id}`)
            }
        }
    })

    useEffect(()=>{
        
        if(ID){
            initiateAppointment({
                variables:{
                    ID
                }
            }).catch(err=>{
                alert("Error");
                console.log(err)
            })
        }
    },[ID])

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
        </div>
     );
}
 
export default AddWork;
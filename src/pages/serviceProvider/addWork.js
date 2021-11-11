import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import AddWorkForm from "../../components/work/add/addWork";
import { ADD_WORK, INITIATE_APPOINTMENT } from "../../GraphQL/Mutations";

import { useEffect } from "react";

import swal from 'sweetalert';

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

    const [initiateAppointment,{loading:confirmLoading,error:errorLoading}] = useMutation(INITIATE_APPOINTMENT,{
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
                swal({
                    title: "Error",
                    text: "Error occurred in initiating appointment",
                    icon: "warning",
                    button: {
                      text: "Close",
                      closeModal: true,
                    }, 
                    dangerMode: true  
                })
            })
        }
    },[ID])

    
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
        {/*<!-- [ Content ] end --> */}  
        </div>
     );
}
 
export default AddWork;
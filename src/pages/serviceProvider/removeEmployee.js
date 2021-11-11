import { useState,useEffect } from "react";
import RemoveEmployeeCard from "../../components/employee/remove/removeEmployee";

import {useQuery,useMutation} from '@apollo/client'

import swal from "sweetalert";

import { REMOVE_WORKER } from "../../GraphQL/Mutations";
import { GET_SEARCH_WORKER } from "../../GraphQL/Queries";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const RemoveEmployee = () => {

    const [removeModerator,{loading,error}] = useMutation(REMOVE_WORKER,{
        onCompleted: res =>{
            
            if(res.removeWorker){
                window.location.href="/success"
            }
        }
    });



    const [Id,setId] = useState('')

    const [content,setContent] = useState([]);


    //search
    const fetchContent = useQuery(GET_SEARCH_WORKER,{
        variables:{ workerId:Id }
    });

  

    useEffect(()=>{
        
        if(Id){
            
            fetchContent.refetch({
                workerId:Id
            }).then( data => {
                if(data){
                    setContent(data.data.getWorker)
                }
    
            }).catch(err=>{
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
            })
        }
        
    },[Id]);

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

            <RemoveEmployeeCard 
                type="Worker" 
                action={removeModerator} 
                content =  {content}
                id ={Id}
                setID = {setId}
                loading = {loading}
                />

            {/*<!-- [ Content ] start --> */}
            
        </div>
     );
}
 
export default RemoveEmployee;
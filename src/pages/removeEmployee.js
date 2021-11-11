import { useState,useEffect } from "react";
import RemoveEmployeeCard from "../components/employee/remove/removeEmployee";

import {useQuery,useMutation} from '@apollo/client'

import { REMOVE_WORKER } from "../GraphQL/Mutations";
import { GET_SEARCH_WORKER } from "../GraphQL/Queries";

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
    
            }).catch(err =>{
                
            })
        }
        
    },[Id]);

    return ( 
        <RemoveEmployeeCard 
            type="Worker" 
            action={removeModerator} 
            content =  {content}
            id ={Id}
            setID = {setId}
            loading = {loading}
            />
     );
}
 
export default RemoveEmployee;
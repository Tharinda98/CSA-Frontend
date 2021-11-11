import { useState,useEffect } from "react";
import RemoveEmployeeCard from "../components/employee/remove/removeEmployee";

import {useQuery,useMutation} from '@apollo/client'
import { REMOVE_MODERATOR } from "../GraphQL/Mutations";
import { GET_SEARCH_MODERATOR } from "../GraphQL/Queries";

import swal from 'sweetalert';

const RemoveModerator = () => {
    const [removeModerator,{loading,error}] = useMutation(REMOVE_MODERATOR,{
        onCompleted: data =>{
           
            if(res.removeModerator){
                window.location.href="/success"
            }
        }
    });
    const [leftDate,setLeftDate] = useState()


    const [Id,setId] = useState('')

    const [content,setContent] = useState([]);
    const fetchContent = useQuery(GET_SEARCH_MODERATOR,{
        variables:{ workerId:Id }
    });

  

    useEffect(()=>{

        if(Id){
            
            fetchContent.refetch({
                workerId:Id
            }).then( data => {

                if(data){
                    setContent(data.data.getModerator)
                }
    
            }).catch(err =>{

            })
        }
        
    },[Id]);

    return ( 
        <RemoveEmployeeCard 
            type="Moderator" 
            action={removeModerator} 
            content =  {content}
            id ={Id}
            setID = {setId}
            loading = {fetchContent.loading}
            />
     );
}
 
export default RemoveModerator;
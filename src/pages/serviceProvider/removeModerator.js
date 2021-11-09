import { useState,useEffect } from "react";
import RemoveEmployeeCard from "../../components/employee/remove/removeEmployee";

import {useQuery,useMutation} from '@apollo/client'
import { REMOVE_MODERATOR } from "../../GraphQL/Mutations";
import { GET_SEARCH_MODERATOR } from "../../GraphQL/Queries";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const RemoveModerator = () => {
    const [removeModerator,{loading,error}] = useMutation(REMOVE_MODERATOR,{
        onCompleted: res =>{
            
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
        <RemoveEmployeeCard 
            type="Moderator" 
            action={removeModerator} 
            content =  {content}
            id ={Id}
            setID = {setId}
            loading = {fetchContent.loading}
            />
        </div>
     );
}
 
export default RemoveModerator;
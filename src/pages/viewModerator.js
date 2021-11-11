import ViewWorker from "../components/employee/view/viewWorker";

import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import {useQuery} from "@apollo/client";

import swal from 'sweetalert';

import { GET_SEARCH_MODERATOR, GET_MODERATORS } from "../GraphQL/Queries";


const ViewModerator = () => {


    const [content,setContent] = useState([]);
    const [contents,setContents] = useState([]);
    const [id,setID] = useState('');
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    const fetchContent = useQuery(GET_SEARCH_MODERATOR,{
        variables:{ workerId:id }
    });

    const {error,loading,data} = useQuery(GET_MODERATORS,{
        variables:{
            page:page,
            offSet:3
        }
    });




    useEffect(()=>{
        
        if(error){
            swal({
                title: "Error",
                text: "Error occurred in submission",
                icon: "warning",
                button: {
                  text: "Close",
                  closeModal: true,
                }, 
                dangerMode: true  
            })
        }
        if(data){
            setContent(data.getMyModerators);
            setContents(data.getMyModerators)
            setOffSet(data.getCountModerators[0].Count/3)
            
        }
        

    },[data])





    useEffect(()=>{
        if(id){
            fetchContent.refetch({
                workerId:id
            }).then( datas => {

                if(datas){
                    
                    setContent(datas.data.getModerator)
                }
    
            })
        }else if(contents){
            setContent(contents)
        }
        
    },[id]);



    return ( 
        <div>
            <ViewWorker 
                type="Moderator"
                content = {content}
                page = {page}
                setID = {setID}
                setPage = {setPage}
                offSet = {offSet}
                id = {id}
                loading = {loading}
                searchLoading = {fetchContent.loading}
                />
        </div>
        
     );
}
 
export default ViewModerator;
import ViewWorker from "../components/employee/view/viewWorker";
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import {useQuery} from "@apollo/client";


import { GET_WORKERS,GET_SEARCH_WORKER } from "../GraphQL/Queries";

const ViewEmployee = () => {

    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [id,setID] = useState('');
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    const fetchContent = useQuery(GET_SEARCH_WORKER,{
        variables:{ workerId:id }
    });

    const {error,loading,data} = useQuery(GET_WORKERS,{
        variables:{
            page:page,
            offset:3
        }
    });


    useEffect(()=>{
        
        if(error){
            console.log(error)
        }
        if(data){
            setContent(data.getMyWorkers)
            setContents(data.getMyWorkers)
            console.log(data)
            setOffSet(data.getCountWorkers[0].Count/3)
        }
        

    },[data])





    useEffect(()=>{
        
        if(id){
            fetchContent.refetch({
                workerId:id
            }).then( datas => {

                if(datas){
                    setContent(datas.data.getWorker)
                }
    
            })
        }else if(contents){
            setContent(contents)
        }
        
    },[id]);


    return ( 
        <div>
            <ViewWorker 
                type="Worker"
                content = {content}
                page = {page}
                setID = {setID}
                setPage = {setPage}
                offSet = {offSet}
                id = {id}
                loading = {loading}
            />
        </div>
        
     );
}
 
export default ViewEmployee;
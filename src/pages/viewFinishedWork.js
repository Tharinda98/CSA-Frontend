import ViewWorks from "../components/work/view/viewWork";

import { useState, useEffect, useLayoutEffect } from 'react';
import {useQuery} from "@apollo/client";

import {GET_FINISHEDWORK, GET_WORK} from "../GraphQL/Queries";
import {GET_FINISHEDWORKS} from "../GraphQL/Queries";

const ViewFinishWork = () => {
    const [id,setID] = useState('');
    // const [Id,setID] = useState(id);
    const fetchContent = useQuery(GET_FINISHEDWORK,{
        variables:{ workId:id
        }
    });


    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    const {error,loading,data} = useQuery(GET_FINISHEDWORKS,{
        variables:{
            page:page,
            offset:2
        }
    });

    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[page])


    useEffect(()=>{

        if(data){
            console.log(data)
            setContent(data.getMyFinishedWorks)
            setContents(data.getMyFinishedWorks)


            var count = data.getCountAppointments.filter(e => (e._id ==='finished'))
           
            if(count[0]){
                console.log(count)
                setOffSet(count[0].Count/2)
            }
            
            
        }


    },[data])



    useEffect(()=>{
        console.log(contents)
        if(id){
            fetchContent.refetch({
            workId:id
            }).then( datas => {
          
                if(datas){
                    setContent(datas.data.searchFinishAppointment)

                }
    
            })
        }else if(contents){
            setContent(contents)
        }
        
    },[id]);

    return ( 
        <ViewWorks 
            type="finished" 
            content={content} 
            setPage={setPage} 
            page={page}
            offSet={offSet}
            id={id}
            setID={setID}
            loading = {loading}
        />
     );
}
 
export default ViewFinishWork;
import ViewWorks from "../components/work/view/viewWork";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

import swal from 'sweetalert';

import {GET_ONGOINGWORK,GET_ONGOINGWORKS} from "../GraphQL/Queries";

const ViewWork = () => {

    const [id,setID] = useState('');
   
    const fetchContent = useQuery(GET_ONGOINGWORK,{
        variables:{ workId:id
        }
    });


    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

    const {error,loading,data} = useQuery(GET_ONGOINGWORKS,{
        variables:{
            page:page,
            offset:1
        }
    });


    useEffect(()=>{

        if(data){
       
            setContent(data.getMyOngoingWorks)
            setContents(data.getMyOngoingWorks)
            var count = data.getCountAppointments.filter(e => (e._id ==='going'))
           
            if(count[0]){
            
                setOffSet(count[0].Count/1)
            }
        }


    },[data])



    useEffect(()=>{
        
        if(id){
            fetchContent.refetch({
            workId:id
            }).then( datas => {
          
                if(datas){
                    setContent(datas.data.searchOpenAppointment)
                   
                }
    
            })
        }else if(contents){
            setContent(contents)
        }
        
    },[id]);

    return ( 
        <ViewWorks 
            type="confirmed" 
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
 
export default ViewWork;
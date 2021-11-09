import ViewWorks from "../../components/work/view/viewWork";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

import {GET_ONGOINGWORK,GET_ONGOINGWORKS} from "../../GraphQL/Queries";

const ViewWork = () => {

    const [id,setID] = useState('');
    // const [Id,setID] = useState(id);
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
            offset:2
        }
    });


    useEffect(()=>{

        if(data){
            
            setContent(data.getMyOngoingWorks)
            setContents(data.getMyOngoingWorks)
            var count = data.getCountAppointments.filter(e => (e._id ==='going'))
           
            if(count[0]){
                
                setOffSet(count[0].Count/2)
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
        </div>
     );
}
 
export default ViewWork;
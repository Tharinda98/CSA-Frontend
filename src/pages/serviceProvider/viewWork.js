import ViewWorks from "../../components/work/view/viewWork";

import { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";

import swal from "sweetalert";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

import {GET_ONGOINGWORK,GET_ONGOINGWORKS} from "../../GraphQL/Queries";

const ViewWork = () => {

    const [id,setID] = useState('');
    // const [Id,setID] = useState(id);
   


    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();


    //retrieve the data
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

     // error occurred
     useEffect(()=>{
        
        if(error){
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
        }
    
    },[error])


    //search 
    const fetchContent = useQuery(GET_ONGOINGWORK,{
        variables:{ workId:id
        }
    });
    useEffect(()=>{
        
        if(id){
            fetchContent.refetch({
            workId:id
            }).then( data => {
          
                if(data){
                    setContent(data.data.searchOpenAppointment)
                    
                }
    
            }).catch(err =>{
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
            {/*<!-- [ content ] start --> */}
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
            {/*<!-- [ content ] end --> */}
        </div>
     );
}
 
export default ViewWork;
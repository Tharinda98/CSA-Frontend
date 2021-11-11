import ViewWorker from "../../components/employee/view/viewWorker";

import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import {useQuery} from "@apollo/client";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

import { GET_SEARCH_MODERATOR, GET_MODERATORS } from "../../GraphQL/Queries";

import swal from "sweetalert";


const ViewModerator = () => {


    const [content,setContent] = useState([]);
    const [contents,setContents] = useState([]);
    const [id,setID] = useState('');
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

   



    // retrieve all moderators
    
    const {error,loading,data} = useQuery(GET_MODERATORS,{
        variables:{
            page:page,
            offSet:3
        }
    });
    useEffect(()=>{
        if(data){
            setContent(data.getMyModerators);
            setContents(data.getMyModerators)
            setOffSet(data.getCountModerators[0].Count/3)
            
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




    // get a specific moderator search
     const fetchContent = useQuery(GET_SEARCH_MODERATOR,{
        variables:{ workerId:id }
    });

    useEffect(()=>{
        if(id){
            fetchContent.refetch({
                workerId:id
            }).then( datas => {

                if(datas){
                    
                    setContent(datas.data.getModerator)
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
             {/*<!-- [ Content ] start --> */}
            <ViewWorker 
                type="Moderator"
                content = {content}
                page = {page}
                setID = {setID}
                setPage = {setPage}
                offSet = {offSet}
                id = {id}
                loading = {loading}
                />
             {/*<!-- [ Content ] end --> */}
        </div>
        
     );
}
 
export default ViewModerator;
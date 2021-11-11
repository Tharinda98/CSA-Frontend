import ViewWorks from "../../components/work/view/viewWork";

import { useState, useEffect, useLayoutEffect } from 'react';
import {useQuery} from "@apollo/client";

import {GET_FINISHEDWORK, GET_WORK} from "../../GraphQL/Queries";
import {GET_FINISHEDWORKS} from "../../GraphQL/Queries";

import swal from "sweetalert";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const ViewFinishWork = () => {
    const [id,setID] = useState('');
    // const [Id,setID] = useState(id);
    


    const [contents,setContents] = useState([]);
    const [content,setContent] = useState([]);
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();

   

    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[page])


    //retrieving works
    const {error,loading,data} = useQuery(GET_FINISHEDWORKS,{
        variables:{
            page:page,
            offset:2
        }
    });

    useEffect(()=>{

        if(data){
           
            setContent(data.getMyFinishedWorks)
            setContents(data.getMyFinishedWorks)


            var count = data.getCountAppointments.filter(e => (e._id ==='finished'))
           
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
    const fetchContent = useQuery(GET_FINISHEDWORK,{
        variables:{ workId:id
        }
    });

    useEffect(()=>{
        
        if(id){
            fetchContent.refetch({
            workId:id
            }).then( datas => {
          
                if(datas){
                    setContent(datas.data.searchFinishAppointment)

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
             {/*<!-- [ Content ] end --> */}
        </div>
     );
}
 
export default ViewFinishWork;
import AddWorkerForm from '../../components/employee/add/addEmployee';
import { ADD_WORKER } from '../../GraphQL/Mutations';
import { useMutation, useQuery } from '@apollo/client';
import {useEffect, useRef, useState} from 'react';
import { GET_SEARCH_WORKER, GET_WORKER } from '../../GraphQL/Queries';

import swal from 'sweetalert';

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

function AddEmployee() {

    const [addWorker,{loading,error}] = useMutation(ADD_WORKER,{
        onCompleted:data => {
           
            setID(data.addWorker._id);
              
          }
    });

    const photoFocus = useRef(null)

    const scrollToBottom = ()=>{
        photoFocus.current?.scrollIntoView({behavior:'smooth'})
    }


    const [Id,setId] = useState('');
    const [id,setID] = useState('');
    const [content,setContent] = useState();

    

    const fetchContent = useQuery(GET_WORKER,{
        variables:{
            workerId:id
        }
    })

    const fetchSearchContent = useQuery(GET_SEARCH_WORKER,{
        variables:{
            workerId:Id
        }
    })

    useEffect(()=>{
        if(id){
            fetchContent.refetch({
                workerId:id
            }).then(data =>{
                setContent([data.data.UniqueSearchWorker])
                scrollToBottom()
            }).catch(err =>{
                swal({
                    title: "Error",
                    text: "Error occurred in the search",
                    icon: "warning",
                    button: {
                      text: "Close",
                      closeModal: true,
                    }, 
                    dangerMode: true  
                })
            })
        }
    },[id])

    useEffect(()=>{
        if(Id){
            
            fetchSearchContent.refetch({
                workerId:Id
            }).then(data =>{
                setContent(data.data.getWorker)
            }).catch(err =>{
                swal({
                    title: "Error",
                    text: "Error occurred in the search",
                    icon: "warning",
                    button: {
                      text: "Close",
                      closeModal: true,
                    }, 
                    dangerMode: true  
                })
            })
        }
    },[Id])

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
            {/*<!-- [ Main Content ] start -->*/}
            <AddWorkerForm 
                type="Worker" 
                addEmployee={addWorker} 
                setID={setId} 
                Id={Id}
                content = {content}
                ID = {id}
                photoFocus = {photoFocus}
            />
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default AddEmployee;
  
import AddWorkerForm from '../components/employee/add/addEmployee';
import { ADD_WORKER } from '../GraphQL/Mutations';
import { useMutation, useQuery } from '@apollo/client';
import {useEffect, useRef, useState} from 'react';
import { GET_SEARCH_WORKER, GET_WORKER } from '../GraphQL/Queries';

function AddEmployee() {

    const [addWorker,{loading,error}] = useMutation(ADD_WORKER,{
        onCompleted:data => {
            console.log(data.addWorker._id)
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
                alert("Error")
            })
        }
    },[id])

    useEffect(()=>{
        if(Id){
            console.log(Id)
            fetchSearchContent.refetch({
                workerId:Id
            }).then(data =>{
                setContent(data.data.getWorker)
            })
        }
    },[Id])

    return (
        <div>
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
  
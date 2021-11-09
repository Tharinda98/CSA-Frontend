import AddWorkerForm from '../components/employee/add/addEmployee';
import { ADD_MODERATOR } from '../GraphQL/Mutations';
import { useMutation, useQuery } from '@apollo/client';
import {useState,useRef,useEffect} from 'react';
import { GET_MODERATOR, GET_SEARCH_MODERATOR } from '../GraphQL/Queries';


function AddEmployee() {

    const [addModerator,{loading,error}] = useMutation(ADD_MODERATOR,{
        onCompleted:data => {
            console.log(data.addModerator.username)
            setID(data.addModerator._id);     
          }
    });

    const [Id,setId] = useState('');
    const [id,setID] = useState('');
    const [content,setContent] = useState();


    const fetchSearchContent = useQuery(GET_SEARCH_MODERATOR,{
        variables:{
            workerId:Id
        }
    })

    const photoFocus = useRef(null)

    const scrollToBottom = ()=>{
        photoFocus.current?.scrollIntoView({behavior:'smooth'})
    }

    useEffect(()=>{
        if(Id){
            fetchSearchContent.refetch({
                workerId:Id
            }).then(data =>{
                setContent(data.data.getModerator)
            })
        }
    },[Id])

    const fetchContent = useQuery(GET_MODERATOR,{
        variables:{
            workerId:id
        }
    })

    useEffect(()=>{
        if(id){
            fetchContent.refetch({
                workerId:id
            }).then(data =>{
                console.log(data)
                setContent([data.data.UniqueSearchModerator])
                scrollToBottom()
            })
        }
    },[id])

    return (
        <div>
            {/*<!-- [ Main Content ] start -->*/}
            <AddWorkerForm 
                type="Moderator" 
                addEmployee={addModerator} 
                setID={setId} 
                Id={Id} 
                loading={loading}
                content = {content}
                photoFocus = {photoFocus}
            />
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default AddEmployee;
  
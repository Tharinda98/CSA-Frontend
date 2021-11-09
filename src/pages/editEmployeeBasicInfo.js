import { useQuery,useMutation } from "@apollo/client";
import { useParams } from "react-router";
import EditEmployee from "../components/employee/edit/editEmployee";

import {useEffect, useState} from 'react';
import { GET_SEARCH_WORKER, GET_WORKER,GET_SEARCH_MODERATOR,GET_MODERATOR } from '../GraphQL/Queries';
import { EDIT_INFO } from "../GraphQL/Mutations";

function EditBasicInfo() {    
    
    const [editInfo,{loading,error}] = useMutation(EDIT_INFO,{
        onCompleted:data=>{
            window.location.href='/success'
        }
    })

    const {id} = useParams();
    
    const queryParams = new URLSearchParams(window.location.search);
    const type = queryParams.get('type');

    const [Id,setId] = useState('');
    const [content,setContent] = useState();

    const fetchContent = useQuery(GET_WORKER,{
        variables:{
            workerId:Id
        }
    })

    const fetchSearchContent = useQuery(GET_SEARCH_WORKER,{
        variables:{
            workerId:Id
        }
    })

    const fetchSearchModeratorContent = useQuery(GET_SEARCH_MODERATOR,{
        variables:{
            workerId:Id
        }
    })


    const fetchModeratorContent = useQuery(GET_MODERATOR,{
        variables:{
            workerId:Id
        }
    })



    useEffect(()=>{
        console.log(Id)
        if(Id){
            if(type === "Worker"){
                fetchSearchContent.refetch({
                    workerId:Id
                }).then(data =>{
                    console.log(data)
                    setContent(data.data.getWorker)
                }).catch(err => {

                })
            }else if (type === "Moderator"){
                fetchSearchModeratorContent.refetch({
                    workerId:Id
                }).then(data =>{
                    setContent(data.data.getModerator)
                }).catch(err => {

                })
            }
        }
    },[Id])

    useEffect(()=>{
        
        if(id){
            if(type === "Worker"){

                
                fetchContent.refetch({

                    workerId:id
                }).then(data =>{
                    console.log(data.data.UniqueSearchWorker)
                    setContent(data.data.UniqueSearchWorker)
                }).catch(err => {

                })
            }else if (type === "Moderator"){
                fetchModeratorContent.refetch({
                    workerId:id
                }).then(data =>{
                    console.log(data)
                    setContent(data.data.UniqueSearchModerator)
                }).catch(err => {

                })
            }
        }
    },[id])



    return (
        <div>
            {/*<!-- [ Main Content ] start -->*/}
                <EditEmployee 
                    type={type}
                    content ={content}
                    setID = {setId}
                    loading = {!content}
                    id = {Id}
                    action = {editInfo}
                />
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditBasicInfo;
  
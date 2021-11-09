import Messager from "../components/message/messager";
import { useState,useEffect,useLayoutEffect } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import { SEND_MESSAGE } from '../GraphQL/Mutations';
import { CHECK_USER, GET_MESSAGES} from '../GraphQL/Queries';

const Message = (props) => {


    const {id} = useParams();
    const [content,setContent] = useState([]);

    const [To,setTo] = useState('');
    const [toError,setToError] = useState('');

    

    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();
    const limit = 3;

    const {error,loading,data} = useQuery(GET_MESSAGES,{
        variables:{
            offset:limit,
            page:page
        }
    });

    useEffect(()=>{

        if(data){
            setContent(data.getMyMessages)
            setOffSet((data.getCountMessages[0].Count+data.getCountMessages[1].Count)/limit)
        }
    },[data])
    
    const [sendMessage,{loadingMessages,loadingError}] = useMutation(SEND_MESSAGE,{
        onCompleted:data => {
            window.location.href = '/success'
        }
    });

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    },[page]);

    const fetchContent =useQuery(CHECK_USER,{
        variables:{
            username:To
        }
    })

    useEffect(()=>{
        console.log(To)
        if(To){
            fetchContent.refetch({
                username:To
            }).then(data =>{

                if(data.data.CheckUsername){
                  
                    setToError('Recipient not exist');
                }else{
                    setToError('');
                }
            }).catch(err =>{
                setToError('Check Recipient');
            });
        }
    },[To])


    return ( 
        <Messager
            content={content}
            setPage={setPage}
            page= {page}
            offSet = {offSet}
            loading = {loading}
            action = {sendMessage}
            setToError = {setToError}
            toError = {toError}
            To = {To}
            setTo = {setTo}
            loadingMessages = {loadingMessages}
            
        />
     );
}
 
export default Message;
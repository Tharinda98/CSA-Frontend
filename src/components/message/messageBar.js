import { useMutation } from '@apollo/client';
import {button} from 'react-router-dom';
import {useEffect} from 'react'

import {UPDATE_READ} from '../../GraphQL/Mutations';

function MessageBar({message,By,received_date,read,object}){

    const [readMessage,{loading,error}] = useMutation(UPDATE_READ,{
        onCompleted: data=>{
         
            if(data.readMessage){
                window.location.reload()
            }
        }
    })



    const confirmRead = () => {
        readMessage({
            variables:{
                readMessageId:object._id
            }
        })
    }


    return(
    <div className="unread row align-items-center" style={{marginBottom:'15px'}}>
        <div className="col-sm-12 col-md-3 col-xl-3 d-flex " style={{margin:'10px'}}>
            <img className="rounded-circle mover" style={{width:"100px"}} src="/assets/images/user/avatar-1.jpg" alt="activity-user"/>
            <h6 className="mover" style={{marginTop:"30px",color:"#888"}}> &nbsp; </h6>
        </div>
        <div className="col-sm-9 col-md-5 col-xl-8" style={{margin:'10px'}}>
            <h6 className="mb-1">{By}</h6>
            <p className="m-0">{message}</p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-xl-7 mr-auto" style={{margin:'10px'}}>
            <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i> {received_date} </h6>
        </div>
        <div className="col-12 col-sm-5 col-md-12 col-xl-4" style={{margin:'10px'}}>
            {read?<button  className="label theme-bg2 text-white f-12" style={{float:'right',right:"20px"}}>
                Already Read
                &nbsp; <i className="far fa-trash-alt"></i>
            </button>:
            <button onClick={confirmRead} className="label theme-bg text-white f-12" style={{float:'right',right:"20px"}}>
                Confirm Read
                &nbsp; <i className="far fa-eye"></i>
            </button>}
        </div>
    </div>
    )
}

export default MessageBar;
import MessageBar from './messageBar';
import {BrowserRouter as Router,Link} from "react-router-dom"
import { useEffect,useState } from 'react';
import Empty from '../empty';
import Loading from '../loading';
import { dateFormatter } from '../formatter';

function Message({title,content,id,loading,type}){

    const [Notification,setNotification] = useState([]);



    useEffect(()=>{
        console.log(content)
        if(content){
            setNotification(content)
        }
        
    },[])


    return(
        <div className="col-xl-12 col-md-12">
            <div className="card Notification">
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div className="">
                        <div className="">
                            {!loading ?
                            <div className="">

                                {content && content[0]? content.map((e)=>{
                                    return <MessageBar
                                        By = {e.by}
                                        received_date = {dateFormatter(e.received_date)}
                                        message = {e.message}
                                        read ={e.read}
                                        key={e._id}
                                        object={e}
                                        /> 
                                    
                                }):
                                    <Empty/>
                                }


                               
                               
                            </div>
                            :
                                <Loading/>
                            }
                        </div>
                    </div>
                </div>
                {type ?
                <div style={{padding:"0px 30px 10px 0px",float:"right"}}>
                    <Link to={id?`/Worker/messages/${id}`:`/Worker/messages`} className="btn btn-mtd btn-primary" style={{width:"150px",height:"25px",padding:'0 0',float:'right'}}> 
                        View More 
                        <i className="far fa-eye" style={{paddingLeft:'10px'}}></i>
                    </Link>
                </div>
                :
                <div style={{padding:"0px 30px 10px 0px",float:"right"}}>
                    <Link to={id?`/CSA/messages/${id}`:`/CSA/messages`} className="btn btn-mtd btn-primary" style={{width:"150px",height:"25px",padding:'0 0',float:'right'}}> 
                        View More 
                        <i className="far fa-eye" style={{paddingLeft:'10px'}}></i>
                    </Link>
                </div>
                }
                    
            
            </div>
        </div>
    )
}

export default Message;
import NotificationBar from './notificationBar';
import {BrowserRouter as Router,Link} from "react-router-dom"
import { useEffect,useState } from 'react';
import Empty from '../empty';
import Loading from '../loading';

import {dateFormatter} from "../formatter";

function Notificator({title,content,id,loading,type}){

    const [Notification,setNotification] = useState([]);

    useEffect(()=>{
        if(content){
            setNotification(content)
        }
    },[content])


    return(
        <div className="col-xl-12 col-md-12">
            <div className="card Notification">
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div >
                        <div >
                            { !loading ?
                            <div>

                                {Notification[0] ? Notification.map((e)=>{

                                   return <NotificationBar
                                        title = {e.state}
                                        time = {dateFormatter(e.date)}
                                        description = {e.message}
                                        key={e._id}
                                    /> 

                                }):
                                    <Empty
                                        message="No Notifications"
                                    />
                                }
                                
                                   
                            </div>
                            : 
                                <Loading/>
                            }
                        </div>
                    </div>
                </div>
                
                <div style={{padding:"0px 30px 10px 0px",float:"right"}}>
                    { !type ? <Link to={id?`/CSA/notifications/${id}`:`/CSA/notifications`} className="btn btn-mtd btn-primary" style={{width:"150px",height:"25px",padding:'0 0',float:'right',background: 'linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%)'}}> 
                        View More 
                        <i className="far fa-eye" style={{paddingLeft:'10px'}}></i>
                    </Link>

                    :

                    <Link to={id?`/Worker/notifications/${id}`:`/Worker/notifications`} className="btn btn-mtd btn-primary" style={{width:"150px",height:"25px",padding:'0 0',float:'right',background: 'linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%)'}}> 
                        View More 
                        <i className="far fa-eye" style={{paddingLeft:'10px'}}></i>
                    </Link>
                    }
                </div>
                    
            
            </div>
        </div>
    )
}

export default Notificator;
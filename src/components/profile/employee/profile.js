import { useEffect } from 'react';

import { useState } from 'react';
import FinishCard from '../../finishCard';
import Notificator from '../../notification/notificator';

import ProfileCard from '../profileCard';
import PhotoCard from '../profilephoto';
import WorkerInfoCard from "../workerInfoCard";
import Loading from '../../loading';




function ProfileContent({contents,notification,type,id,edit}){

    
    
    const [content,setContent] = useState(contents);

    useEffect(()=>{
        if(contents){
            setContent(contents)
        }
    },[contents])

    return(
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                    {//<!-- [ breadcrumb ] start -->

                    //<!-- [ breadcrumb ] end -->
                    }
                    {content ?<div className="main-body">
                        <div className="page-wrapper">
                            {//<!-- [ Main Content ] start -->
                            }
                            <div className="row">

                                {/*<!--[ profile section ] starts-->*/}
                                <div className="col-md-12 col-xl-5">
                                    <PhotoCard id={content._id} profile={content.profile} type={type} edit={edit}/>
                                </div>
                                
                                {/*<!--[ profile section ] end-->

                                /*<!--[ basic info section ] start-->*/}
                                <div className="col-md-12 col-xl-7">
                                    {content ?
                                        <ProfileCard 
                                            id={content._id} 
                                            edit={edit}
                                            title="Personal Info" 
                                            name = {content.name}
                                            nic = {content.nic}
                                            contact ={content.contact_no}
                                            address = {content.address}
                                        />
                                    :null}
                                </div>
                                
                                {/*<!--[ basic info section ] end-->*/}

                                <div className="col-xl-4">
                                    {/*<!--[ Worker info section ] starts-->*/}
                                    {content ? 
                                        <WorkerInfoCard 
                                            id={contents._id} 
                                            edit={edit} 
                                            title="Worker Info" 
                                            content={content}
                                            type = {type}
                                        />
                                        :
                                            null
                                        }
                                    {/*<!--[ Worker info section ] end-->

                                    

                                    {/*<!-- [ finish button ] starts-->*/}
                                    {/* <FinishCard
                                        title='Remove Employee'
                                        icon ={<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}
                                        button = 'Suspend'
                                        buttonClass = 'btn-danger'
                                        id = {contents.username}
                                    /> */}
                                    {/*<!-- [ finish button ] end-->*/}

                                </div>
                                
                                <div className="col-xl-8">
                                    {/*<!--[ Recent Notification ] start-->*/}
                                    <Notificator 
                                        title="New Notifications" 
                                        content={notification}
                                        id={id}
                                    />  
                                    {/* Need add the content */}
                                    {/*<!--[ Recent Notification ] end--> */}
                                    
                                    {/*<!--[ Recent Notification ] start-->*/}
                                    {/* <Notificator title="New Messages"/> */}
                                    {/*<!--[ Recent Notification ] end--> */}
                                </div>
                                {/* <!-- [ Main Content ] end -->  */}
                                
                            </div>
                            
                        </div>
                    </div> : <Loading/>}
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileContent;
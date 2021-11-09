import { useState } from "react";

import PhotoCard from "../profilephoto";
import ProfileCard from "../profileCard";
import ProviderInfoCard from "../providerInfoCard";
import RatingList from "../../rating/ratingSection/ratingList";
import Notificator from "../../notification/notificator";
import ServiceProviderCard from "./serviceProviderCard";
import { ArrayFormater } from "../../formatter";
import { useEffect } from "react/cjs/react.development";
import Loading from "../../loading";

const SpProfile = ({contents,loading}) => {

    const [id,setID] = useState('')
    const [content,setContent] = useState();
    const [rating,setRating] = useState();
    const [notification,setNotification] = useState();

    useEffect(()=>{
        if (contents){
            setContent(contents.getMySP);
            setRating(contents.ratingStats)
            setID(contents.getMySP.username)
            setNotification(contents.getMyNotification);
        }
        
    },[contents])


    
    

    return ( 
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                    {//<!-- [ breadcrumb ] start -->

                    //<!-- [ breadcrumb ] end -->
                    }
                    <div className="main-body">
                        <div className="page-wrapper">
                            {//<!-- [ Main Content ] start -->
                            }
                            {!loading ?
                            <div className="row">
                                <div className="col-sm-12 col-xl-4">
                                {/*<!--[ profile section ] starts-->*/}
                                {content ?
                                    <PhotoCard 
                                        profile={content.profile} 
                                        id={content.username}
                                        title={"Company Logo"}
                                        provider ={true}
                                    />
                                :
                                    <Loading/>
                                }
                                {/*<!--[ profile section ] end--> */}
                                
                                                                
                                
                                {/*<!--[ Worker info section ] starts-->*/}
                                <ProviderInfoCard 
                                    id={id} 
                                    
                                    content={content}
                                    title="Service Provider Info" />
                                {/*<!--[ Worker info section ] end-->

                                    <!-- [ rating list ] starts-->*/}
                                  
                                    <RatingList content={ArrayFormater(rating)} />
                                 
                                    {/*<!-- [ rating list ] end-->*/}

                                    {/* <!--[ profile section ] starts-->*/}
                                    {/* <PhotoCard id={id}/> */}
                                    {/*<!--[ profile section ] end--> */}

                                    {/*<!--[ basic info section ] start-->*/}
                                    {content && content.owner ? <ProfileCard 
                                        id={id} 
                                        edit={false} 
                                        title="Owner Info" 
                                        name = {content.owner.owner_name}
                                        nic = {content.owner.owner_NIC}
                                        contact = {content.owner.contact_no}
                                    />:
                                        <Loading/>
                                    }
                                    {/*<!--[ basic info section ] end-->*/}
                                    



                                    {/*<!-- [ finish button ] end-->*/}

                                    {/*<!-- [ finish button ] starts-->*/}
                                    {/* <FinishCard
                                        title='Close the company'
                                        icon ={<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}
                                        button = 'Suspend'
                                        buttonClass = 'btn-danger'
                                        id = {id}
                                    /> */}
                                    {/*<!-- [ finish button ] end-->*/}




                                </div>
                                
                                <div className="col-xl-8">
                                    {/*<!-- [ Services Info ] starts-->*/}
                                        <ServiceProviderCard
                                            title="Service Info"
                                            content = {content}
                                        />

                                    {/*<!-- [ Services Info ] end-->*/}

                                    {/*<!--[ Recent Notification ] start-->*/}
                                        <Notificator 
                                            title="New Notifications"
                                            content ={notification}
                                        />
                                    {/*<!--[ Recent Notification ] end--> */}
                                    
                                    {/*<!--[ Recent Notification ] start-->*/}
                                        {/* <Message 
                                            title="New Messages"
                                            content = {null}
                                        /> */}
                                    {/*<!--[ Recent Notification ] end--> */}
                                </div>
                                {/* <!-- [ Main Content ] end -->  */}
                            </div>
                            : 
                                <Loading/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default SpProfile;
import Notificator from './notification/notificator';
import RatingList from "./rating/ratingSection/ratingList";
import { useEffect } from 'react';

import Chart from "./chart";
import SummaryChart from "./pieChart";
import Message from './message/messages';
import Empty from './empty';
import Loading from './loading';


function Content({content,loading,type}){

    const ArrayFormater = (object)=>{

        if (!object){
            return [0,0,0,0,0]
        }

        if(!object[0]){
            return [0,0,0,0,0]
        }
       
        var rating =[]
        var count = 0;

        for(var count=0;count<object.length;count++){
            rating[count]=object[count].Count
        }
        
        return rating
    }

    const dayFormater = (object)=>{

        if (!object){
            return ['','','','','']
        }

        if(!object[0]){
            return [0,0,0,0,0]
        }
       
        var day =[0,0,0,0,0,0]

        for(var count=0;count<object.length;count++){
            day[count]=object[count]._id
        }

        return day
    }

    const workCount = (objects) =>{

        if (!objects){
            return [0,0,0]
        }

        if (!objects[0]){
            return [0,0,0]
        }
  
        var work  =[0,0,0]
  
        objects.map((object)=>{
         
            if(object._id === 'finished'){
              work[0] = object.Count
            }else if(object._id === 'going'){
              work[1] = object.Count
            }else if(object._id === 'open'){
              work[2] = object.Count
            }
        })
        
    
        return work
        
    }

    



    return(
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                    {//<!-- [ breadcrumb ] start -->
                    //<!-- [ breadcrumb ] end -->
                    }
                    <div className="main-body">
                        {!loading ?
                        <div className="page-wrapper">
                            {//<!-- [ Main Content ] start -->
                            }
                            {content ?<div className="row">
                                
                            
                                {//<!--[ New request section ] start-->
                                }
                                {/* <Card
                                    title ='New Work Request'
                                    symbol ={<i class="fas fa-cart-plus text-c-green f-30 m-r-10"></i>}
                                    count = '0'
                                /> */}
                                {content.bookingFeed ?<Chart 
                                    ArrayX = {dayFormater(content.bookingFeed)}
                                    Request = 'New Requests'
                                    ArrayY = {ArrayFormater(content.bookingFeed)}
                                />: 
                                    content.getMyRole === "Worker" ? null
                                    :
                                    <Empty
                                        message="No Bookings Yet"
                                    />    
                                }
                                {/*<!--[ New request section ] end-->

                                <!--[ Ongoing Work section ] starts-->*/}
                                
                                {content.finishedWorkStats ?<Chart 
                                    ArrayX = {dayFormater(content.finishedWorkStats)}
                                    Request = 'On Going Works'
                                    ArrayY = {ArrayFormater(content.finishedWorkStats)}
                                />:
                                    content.getMyRole === "Worker" ? null
                                    :
                                    <Empty
                                        message="No Finished works Yet"
                                    />                                    
                                }

                                {/*<!--[ Ongoing Work section ] end-->*/}

                              
                                <div className="col-xl-8">
                                {/*<!--[ Recent Notification ] start-->*/}
                                {content.getMyNotification ?
                                    <Notificator title="Notification" content={content.getMyNotification}/>
                                :
                                    <Notificator title="Notification" content={content.worker_getMyNotification}  type={type}/>
                                }
                                {/* <!--[ Recent Notification ] end-->*/}
                                {/*<!--[ Recent Notification ] start-->*/}
                                <Message title="Messages" content={content.getMyMessages} type={type}/>
                                {/* <!--[ Recent Notification ] end-->*/}
                                </div>



                                                                
                                
                            {/*<!-- [ statistics year chart ] start --> */}
                                
                                <div className="col-xl-4 col-md-6">

                                {/* <Card
                                    title ='On-going Works'
                                    symbol = {<i className="feather icon-loader text-c-green f-30 m-r-10"></i>}
                                    count = '10'
                                /> */}
                                {/* <Chart 
                                    Array = {['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun']}
                                /> */}
                                {content.workStats ? <SummaryChart
                                    value = {workCount(content.workStats)}
                                />:
                                    <SummaryChart
                                    value = {workCount(content.worker_workStats)}
                                />}
                               
                                {/*<!-- [ rating list ] starts-->*/}
                                { !content.getMyRole  ?
                                     <RatingList content={ArrayFormater(content.ratingStats)} /> 
                                :
                                    content.worker_me?
                                        <RatingList value={content.worker_me.rating} /> 
                                    :
                                    <RatingList content={ArrayFormater(content.ratingStats)} />
                                 
                                }
                                {/*<!-- [ rating list ] end-->*/}
                                </div>
                               {/* <!-- [ statistics year chart ] end -->
                               
                                {<!-- [ Main Content ] end --> */}
                                <br/>
                                <br/>
                            </div>: 
                                <Empty
                                    message="Content Missing"
                                />
                            }
                            
                        </div>
                        : 
                        <Loading/>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Content;
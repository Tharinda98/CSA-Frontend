import { BrowserRouter as Router,Link } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useParams } from 'react-router';

import Card from "../card";

import {WORK_PROFILE} from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { useState } from "react/cjs/react.development";
import {dateFormatter} from '../formatter'
import Loading from "../loading";


const WorkProfile = ({contents,disable}) => {

    const {id} = useParams()

    const [Id,setID] = useState(id)
    const [content,setContent] = useState()

    useEffect(() => {
   
        setContent(contents)
    }, [contents])

    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[])
    

    return ( 

    <div className="pcoded-main-container main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">

                    <div className="main-body">
                        <div className="page-wrapper">
                            {//<!-- [ Main Content ] start -->
                            }
                            <div className="row">
                                

                                {/*<!--[ Messages section ] starts-->*/}
                                <div className="col-sm-12 col-md-12 col-xl-4">
                                <Card
                                    title='Send Messages'
                                    symbol = {<i className="fas fa-comment-dots text-c-green f-30 m-r-10"></i>}
                                    count = ''
                                    button = {
                                        content && !disable ?<Link to={`/CSA/messages/${Id}`} className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                            View Info
                                            &nbsp; <i className="far fa-eye"></i>
                                        </Link>
                                        :
                                        <button className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center",borderWidth:0}} disabled>
                                            View Info
                                            &nbsp; <i className="far fa-eye"></i>
                                        </button>
                                    }
                                />
                                </div>
                                {/*<!--[ Messages section ] end-->*/}

                                
                                {/*<!--[ Workers detail link section ] starts-->*/}
                                <div className="col-sm-12 col-md-12 col-xl-4">
                                <Card
                                    title='Assigned Workers'
                                    symbol = {<i className="fas fa-users text-c-green f-30 m-r-10"></i>}
                                    count = ''
                                    button = {
                                        content && !disable ?<Link to={`/CSA/assignWorker/${Id}`} className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                            View Info
                                            &nbsp; <i className="far fa-eye"></i>
                                        </Link>
                                        :
                                        <button className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center",borderWidth:0}} disabled>
                                            View Info
                                            &nbsp; <i className="far fa-eye"></i>
                                        </button>
                                    }
                                />
                                </div>
                                {/*<!--[ Workers detail link section ] end-->*/}

                                {/*<!-- [ work status ] starts-->*/}    
                                {/* {content && content.finishDate?     */}
                                <div className="col-sm-12 col-md-12 col-xl-4">
                                {content && content.state === 'finished' ?
                                
                                <Card
                                title='Work Status'
                                symbol =  {<i className="fas fa-check-circle text-c-green f-30 m-r-10"></i>}
                                count = 'Finished'
                                button = {
                                    <button className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center",borderWidth:0}}>
                                        
                                        {content.paid ?
                                        <>
                                            Payment Finished &nbsp;
                                         <i className="fas fa-check-circle"></i> 
                                        </>
                                        :
                                        <>
                                            Payment Pending
                                            &nbsp; <i className="feather icon-loader"></i>
                                        </>
                                        }
                                        
                                    </button>
                                }
                                /> :
                                <Card
                                    title='Work Status'
                                    symbol =  {<i className="feather icon-loader text-c-green f-30 m-r-10"></i>}
                                    count = 'pending'
                                    button = {
                                        <Link to="" className="label theme-bg2 text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                            Finish work
                                            &nbsp; <i className="far fa-trash-alt"></i>
                                        </Link>
                                    }
                                />
                            
                                  
                                }
                                </div>
                                {/*<!-- [ work status ] end-->*/}
                                
                            </div>

                            <div className="row">
                                {/*<!-- [ work info ] starts-->*/}
                                <div className="col-md-12 col-xl-6">
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>work info</h5>
                                            </div>
                                            {content?<div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Work Id:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.appointment_id}
                                                    </div>
                                                </div>
                                                <hr/>
                                                
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Ordered Date:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                            {dateFormatter(content.starting_date)}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Work Address:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.booking.workStationAddress}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Description:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.booking.description}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        District:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.booking.workStationDistrict}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Paid:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.paid?"Yes":'...'}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Budget:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.cost}
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                                <Loading/>
                                            }
                                            <br/>
                                            
                                        
                                        </div>
                                    </div>
                                </div>
                                {/*<!--[ work info ] end-->*/}

                                
                                <div className="col-md-12 col-xl-6">

                                      {/*<!-- [ customer info ] starts-->*/}
                                   
                                  
                                    <div className="card yearly-sales">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>Customer info</h5>
                                            </div>
                                            {content ?
                                            <div className="" style={{paddingTop:"25px"}}>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Full Name:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.booking.by.name}
                                                    </div>
                                                </div>
                                                <hr/>
                                                
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Customer ID:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.booking.by.username}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Email:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.booking.by.email}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        Phone:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.booking.by.contact_no}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row" style={{display:"flex"}}>
                                                    <div className="col-4 col-md-4 col-sm-4">
                                                        rating:
                                                    </div>
                                                    <div className="col-8 col-md-8 col-sm-8">
                                                        {content.booking.by.rating}
                                                    </div>
                                                </div>
                                                <br/>
                                         
                                            </div> 
                                            :
                                            
                                            <Loading/>

                                             }
                                         
                                        

                                        
                                        </div>
                                        
                                    </div>

                                    {/*<!--[ customer info ] end-->*/}

                                    <Card
                                    title='Work Images'
                                    symbol = {<i className="far fa-images text-c-green f-30 m-r-10"></i>}
                                    count = ''
                                    button = {
                                        !disable ?<Link to={`/CSA/work/images/${Id}`} className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                            View Images
                                            &nbsp; <i className="far fa-eye"></i>
                                        </Link>
                                        :
                                        <Link to={`/Worker/work/images/${Id}`} className="label theme-bg text-white f-12" style={{width:"100%",float:"right",textAlign:"center"}}>
                                            View Images
                                            &nbsp; <i className="far fa-eye"></i>
                                        </Link>
                                        

                                    }
                                />

                                    
            
                                    
                                </div>
                                
                                
                                   
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


        
        
     );
}
 
export default WorkProfile;
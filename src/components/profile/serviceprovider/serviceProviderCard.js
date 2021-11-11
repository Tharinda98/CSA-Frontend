import Empty from '../../empty'
import {BrowserRouter as Router, Link } from "react-router-dom";
import React, { Fragment } from 'react';

const ProviderCard = ({title,content}) => {

    return ( 
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>{title}</h5>
                    </div>

                    
                    <div className="" style={{paddingTop:"25px"}}>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Services:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                
                                {content && content.service ? 
                                
                                content.service.map(e=>{
                                    return <React.Fragment key={e}>
                                        {e}
                                        <hr/>
                                    </React.Fragment>
                                }):
                                    <Empty/>
                                }
                                
                                <div style={{paddingTop:"20px",float:"right"}}>
                                    <Link to="serviceInfo" className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                        <div className="tooltips" id="tooltips">
                                            Edit 
                                            <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                                            <span className="tooltiptext" >Click to edit</span>
                                        </div> 
                                        
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Districts:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                <div>
                                { content && content.workingRange ?
                                    content.workingRange.length
                                :
                                    0
                                }

                                <br/>
                                { content && content.workingRange ?
                                
                                content.workingRange.map((e)=>{
                                    return <Fragment key={e}>
                                        <div style={{padding:1}}>
                                        {e}
                                        </div>
                                       
                                    </Fragment>
                                })
                                    
                                :
                                    <Empty/>
                                }
                                
                                </div>
                                <div style={{float:"right"}}>
                                    <Link to="/CSA/serviceInfo/" className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                        
                                        <div className="tooltips" id="tooltips">
                                            Edit 
                                            <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                                            <span className="tooltiptext" >Click to edit</span>
                                        </div> 
                                        
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                   
                 </div>
            </div>
        </div>
     );
}
 
export default ProviderCard;
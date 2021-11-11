import { useState } from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";
import { useEffect } from "react";
import { dateFormatter } from "../formatter";

const ProviderInfoCard = ({id,edit,title,content}) => {

    const [contents,setContent] = useState();
    
    useEffect(() => {
        
        setContent(content)
        
    }, [content])
    

    return (  
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>Service Provider Info</h5>
                    </div>
                    {contents ?
                    <div className="" style={{paddingTop:"25px"}}>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Provider ID:
                            </div>
                            <div className="col-6 col-md-6">
                                {contents.username}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Name:
                            </div>
                            <div className="col-6 col-md-6">
                                {contents.name}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Phone:
                            </div>
                            <div className="col-6 col-md-6">
                                {contents.contact_no}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Joined Date:
                            </div>
                            <div className="col-6 col-md-6">
                                {dateFormatter(contents.joined_at)}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Votes:
                            </div>
                            <div className="col-6 col-md-6">
                                {contents.no_of_vote}
                            </div>
                        </div>
                        <hr/>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Rating:
                            </div>
                            <div className="col-6 col-md-6">
                                {contents.rating}
                            </div>
                        </div>
                        <hr/>
                        {contents.membership ?
                        <>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Membership:
                            </div>
                            <div className="col-6 col-md-6">
                                {contents.membership.membership_name}
                            </div>
                        </div>
                        <hr/>

                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Membership Period:
                            </div>
                            <div className="col-6 col-md-6">
                                {contents.membership.membership_period}
                            </div>
                        </div>
                        <hr/>

                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Membership Value:
                            </div>
                            <div className="col-6 col-md-6">
                                {contents.membership.membership_value}
                            </div>
                        </div>
                        <hr/>
                        </>
                        :null}
                    </div>
                    :null}

                    {edit ? 
                        <div style={{paddingTop:"20px",float:"right"}}>
                            <Link to={`/CSA/edit/workerInfo/${id}`} className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                Edit 
                                <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                            </Link>
                        </div>
                    :<br/>}
                   
                 </div>
            </div>
        </div>
    );
}
 
export default ProviderInfoCard;
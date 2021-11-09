
import { BrowserRouter as Router,Link } from "react-router-dom";


const WorkerInfoCard = ({id,edit,title,content,type}) => {

  
    return (  
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>{title}</h5>
                    </div>
                    {content ?
                    <div className="" style={{paddingTop:"25px"}}>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Worker ID:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.username}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Designation:
                            </div>
                            <div className="col-6 col-md-6">
                                {type}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                phone:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.contact_no}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Votes:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.no_of_vote}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Rating:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.rating}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-6 col-md-6">
                                Left Date:
                            </div>
                            <div className="col-6 col-md-6">
                                {content.left_date?content.left_date:"..."}
                            </div>
                        </div>
                    </div>
                    :null}

                    {edit ? 
                        <div style={{paddingTop:"20px",float:"right"}}>
                            <Link to={ `/Worker/edit/password`} className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                Edit 
                                <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                            </Link>
                            {/* <Link to={ `/CSA/edit/workerInfo/${id}?type=${type}`} className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                                Edit 
                                <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                            </Link> */}
                        </div>
                    :<br/>}
                   
                 </div>
            </div>
        </div>
    );
}
 
export default WorkerInfoCard;
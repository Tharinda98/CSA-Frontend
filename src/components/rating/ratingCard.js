import { BrowserRouter as Router,Link } from "react-router-dom";

const RatingCard = ({id}) => {
    return ( 
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>Work info</h5>
                    </div>

                    <div className="" style={{paddingTop:"25px"}}>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Work ID:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                ID00
                            </div>
                        </div>
                        <hr/>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Customer ID:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                ID00
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Rating:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                <i className="fas fa-caret-up text-c-green f-22 m-l-10"></i> 4
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Description:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                Sample description
                            </div>
                        </div>
                    </div>
                    

                    <div style={{paddingTop:"0px 20px",float:"right"}}>
                        <Link to={`/edit/basicInfo/${id}`} className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                            View 
                            <i className="fas fa-eye" style={{paddingLeft:'10px'}}></i>
                        </Link>
                    </div>
                    
                   
                 </div>
            </div>
        </div>
     );
}
 
export default RatingCard;
import { Link } from "react-router-dom";

const RatingCard = (props) => {
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
                                Service Provider:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {props.name}
                            </div>
                        </div>
                        <hr/>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                email:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {props.email}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Rating:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                <i className="fas fa-caret-up text-c-green f-22 m-l-10"></i> {props.rating}
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Contact No:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                {props.contactNo}
                            </div>
                        </div>
                    </div>
                    

                    
                    
                   
                 </div>
            </div>
        </div>
     );
}
 
export default RatingCard;
import { Link } from "react-router-dom";

import RatingBar from "./ratingBar";

function RatingList(){
    return(
        <div className="">
            <div className="card user-list">
                <div className="card-header">
                    <h5>Rating</h5>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center m-b-20">
                        <div className="col-6">
                            <h2 className="f-w-300 d-flex align-items-center float-left m-0">4.7 <i className="fas fa-star f-10 m-l-10 text-c-yellow"></i></h2>
                        </div>
                        <div className="col-6">
                            <h6 className="d-flex  align-items-center float-right m-0">0.4 <i className="fas fa-caret-up text-c-green f-22 m-l-10"></i></h6>
                        </div>
                    </div>
                    <div className="row">
                        <RatingBar rate="5" count="100" percentage="39%"/>
                        <RatingBar rate="4" count="100" percentage="39%"/>
                        <RatingBar rate="3" count="50" percentage="39%"/>
                        <RatingBar rate="2" count="7" percentage="39%"/>
                        <RatingBar rate="1" count="0" percentage="9%"/>
                    </div>
                    <div style={{paddingTop:"20px",float:"right"}}>
                        <Link to="" className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                            View 
                            <i className="fas fa-eye" style={{paddingLeft:'10px'}}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingList;
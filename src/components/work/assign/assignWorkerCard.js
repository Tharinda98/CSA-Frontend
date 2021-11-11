import {BrowserRouter as Router,Link} from "react-router-dom";

const AssignWorkerCard = ( {id,designation,email,phone,rating,viewURL,delURL} ) => {
    return ( 
    <div className="unread row align-items-center" style={{marginBottom:'15px'}}>
        <div className="col-sm-12 col-md-3 col-xl-2 d-flex " style={{margin:'10px'}}>
            <img className="rounded-circle mover" style={{width:"60px"}} src="/assets/images/user/avatar-2.jpg" alt="activity-user"/>
            <h6 className="mover" style={{marginTop:"30px",color:"#888"}}> &nbsp; {id} </h6>
        </div>
        <div className="col-sm-9 col-md-5 col-xl-4" style={{margin:'10px',textAlign:"center"}}>
            <h6 className="mb-1">designation: {designation}</h6>
            <p className="m-0">Phone: {phone} </p>
            <p className="m-0">Email: {email} </p>
            <p className="m-0">Rating: &nbsp; {rating} <i className="fas fa-star text-c-yellow"></i> </p>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-xl-1 mr-auto" style={{margin:'10px'}}>
            <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>  </h6>
        </div>
        <div className="col-10 col-sm-12 col-md-12 col-xl-4" style={{margin:'10px'}}>
        {delURL?<Link to={delURL} className="label theme-bg2 text-white f-12" style={{float:'right',right:"20px"}}>
                Remove
                &nbsp; <i className="far fa-trash-alt"></i>
            </Link>:null}
            {viewURL?<Link to={viewURL} className="label theme-bg text-white f-12" style={{float:'right',right:"20px"}}>
                View Info
                &nbsp; <i className="far fa-eye"></i>
            </Link>:null}
        </div>
    </div>
        
     );
}
 
export default AssignWorkerCard;
import {BrowserRouter as Router,Link} from 'react-router-dom';

function NotificationBar({title,description,time,viewURL,delURL}){
    return(
    <div className="unread row align-items-center" style={{marginBottom:'15px'}}>
        <div className="col-sm-12 col-md-3 col-xl-2 d-flex " style={{margin:'10px'}}>
            <img className="rounded-circle mover" style={{width:"100px"}} src="/assets/images/work/work-2.png" alt="activity-user"/>
            <h6 className="mover" style={{marginTop:"30px",color:"#888"}}> &nbsp; </h6>
        </div>
        <div className="col-sm-9 col-md-5 col-xl-8" style={{margin:'10px'}}>
            <h6 className="mb-1">The booking is {title} </h6>
            <p className="m-0">{description}</p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-xl-12 mr-auto" style={{margin:'10px'}}>
            <h6 className="text-muted" style={{right:'50px',position:'absolute'}}><i className="fas fa-circle text-c-green f-10 m-r-15"></i> {time} </h6>
        </div>
        <div className="col-12 col-sm-5 col-md-12 col-xl-4" style={{margin:'10px'}}>
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
    )
}

export default NotificationBar;
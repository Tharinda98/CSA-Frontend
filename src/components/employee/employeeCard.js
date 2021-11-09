import { BrowserRouter as Router,Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

const EmployeeCard = ({content,type}) => {

    if (!type){
        type=content.type;
    }

    return ( 
     <div className="col-12 col-sm-6 col-md-6 col-xl-4">
        {content ?<div className="card-container ">
            <div className="card-employee">
                <div className="bg">
                    <svg viewBox="0 0 200 200" xmlns=""> 
                        <path fill="#3f4d67" d="M51.1,-59C62,-51.8,63.5,-31.6,63.2,-14C62.8,3.6,60.6,18.6,53.2,30.1C45.8,41.6,33.4,49.5,20.5,52.6C7.6,55.6,-5.6,53.8,-23.3,52.4C-41,51,-63.1,50.1,-75.5,38.7C-87.9,27.3,-90.6,5.4,-83.8,-11.5C-76.9,-28.4,-60.3,-40.3,-44.8,-46.7C-29.2,-53.1,-14.6,-54,2.8,-57.3C20.1,-60.6,40.3,-66.3,51.1,-59Z" transform="translate(113 100)" /> 
                    </svg>
                    <div className="card-icons">
                    {content.left_date?
                        <i className="fas fa-circle text-c-red f-10 m-r-15" title="Currently working"></i>:
                        <i className="fas fa-circle text-c-green f-10 m-r-15" title="Currently Not working"></i>
                    }
                    <Link to="/CSA/edit/basicInfo"><i className="fa fa-cog" title="Edit" aria-label="edit"></i></Link>
                    </div>
                    <div className="profile-pic">
                        <img className="employee-img" src="/assets/images/user/avatar-1.jpg" alt=""/>
                    </div>
                    
                    <p className="p"><b>{content.name}</b></p>
                    
                    <p className="p" style={{marginTop:"5px"}}>|&nbsp; {type} &nbsp; |  </p>

                    <div className="details" style={{paddingTop:"20px"}}>
                        <div> <i className="fas fa-user icon"></i> {type} ID :  {content.username} </div>
                        <div> <i className="fas fa-phone icon" style={{color:"green"}}></i> Tel : {content.contact_no} </div>
                        <div> <i className="fas fa-envelope-square icon" style={{color:"#800000"}}></i> Email : <div style={{fontSize:'14'}}> {content.email} </div> </div>
                    </div>
                    <div className="employeeCard-footer">
                    <Link to={type==="Moderator"?`/CSA/moderatorProfile/${content._id}`:`/CSA/profile/${content._id}`} className="btn-follow" aria-label="view more">
                        View More &nbsp;
                        <i className="fas fa-arrow-alt-circle-right" aria-hidden="true" ></i>
                    </Link>
                </div>
                </div>
            </div>
        </div>:null}
        </div>
     );
}
 
export default EmployeeCard;
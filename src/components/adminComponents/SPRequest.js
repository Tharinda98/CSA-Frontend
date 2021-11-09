import { Link } from "react-router-dom";
const SPRequest=(props)=>{
    return(
        <tr className="unread">
                                                <td><img className="rounded-circle"  src="/assets/images/user/avatar-2.jpg" alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">{props.name}</h6>
                                                    <p className="m-0">{props.service}</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>{props.date}</h6>
                                                </td>
                                                <td><Link to="/Admin/AdminRegView" className="label theme-bg text-white f-12">View Application</Link></td>
        </tr> 

    )
}
export default SPRequest;
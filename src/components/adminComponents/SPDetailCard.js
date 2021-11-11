import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { BLOCK_SP } from "../../GraphQL/adminMutations";

const SPDetailCard=(props)=>{
    
    const [blockServiceProvider,{data,loading,error}]=useMutation(BLOCK_SP );
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    
    return(
        <tr className="unread">
                                                <td><img className="rounded-circle"  src="/assets/images/user/avatar-2.jpg" alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Service Provider: {props.details.name}</h6>
                                                    <p className="m-0">Username: {props.details.username}</p>
                                                    <p className="m-0">Address:  {props.details.address}</p>
                                                    <p className="m-0">Contact No: {props.details.contact_no}</p>
                                                    <p className="m-0">Email: {props.details.email}</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>Owner: {props.details.owner.owner_name}</h6>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>NIC: {props.details.owner.owner_NIC}</h6>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>owner's Contact No: {props.details.owner.contact_no}</h6>
                                                    
                                                </td>
                                                <td><button  class="btn btn-outline-danger" onClick={()=>blockServiceProvider({variables:{username:props.details.username}})} >Block</button></td>
        </tr> 

    )
}
export default  SPDetailCard;
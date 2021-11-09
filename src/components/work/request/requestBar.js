
import { useEffect,useState } from 'react/cjs/react.development';
import { REJECT_BOOKING } from '../../../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import {BrowserRouter as Router,Link} from 'react-router-dom'

function RequestBar({workstation,by,description,date,id}){

    const [ID,setID] = useState(id)
    const [cancelBooking,{loading,error}] = useMutation(REJECT_BOOKING,{
        onCompleted: data =>{
            window.location.reload()
        }
    })

    const reject = (e)=>{
        e.preventDefault()
        cancelBooking({
            variables:{
                ID:ID
            }
        })
    }



    return(
    <div className="unread row align-items-center" style={{marginBottom:'15px'}}>
        <div className="col-sm-12 col-md-3 col-xl-3 d-flex " style={{margin:'10px'}}>
            <img className="rounded-circle mover" style={{width:"100px"}} src="/assets/images/user/avatar-1.jpg" alt="activity-user"/>
            <h6 className="mover" style={{marginTop:"30px",color:"#888"}}> &nbsp;{by} </h6>
        </div>
        <div className="col-sm-9 col-md-5 col-xl-8" style={{margin:'10px'}}>
            <h6 className="mb-1">{workstation}</h6>
            <p className="m-0">{description}</p>
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-xl-7 mr-auto" style={{margin:'10px'}}>
            <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i> {date} </h6>
        </div>
        <div className="col-12 col-sm-5 col-md-12 col-xl-4" style={{margin:'10px'}}>
            <button onClick={reject} className="label theme-bg2 text-white f-12" style={{float:'right',right:"20px"}}>
                Reject
                &nbsp; <i className="far fa-trash-alt"></i>
            </button>
            <Link to={`/CSA/addWork/${ID}`} className="label theme-bg text-white f-12" style={{float:'right',right:"20px"}}>
                Confirm
                &nbsp; <i className="far fa-eye"></i>
            </Link>
        </div>
    </div>
    )
}

export default RequestBar;
import {Link} from 'react-router-dom';
import { date } from 'yup';

const WorkProgress=(props)=>{
    const formatDate=(string)=>{
        var options={year:'numeric',month:'long' ,day:'numeric'};
        return new Date(string).toLocaleDateString([],options);
    }
    const dates=props.date;
    let date=formatDate(dates);

    // const date=new Date(props.date);    
    // console.log(date.getDate());
    return(
        <div>
                            
                                <div className="col-md-12 col-xl-12">
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <div className="row  justify-content-center">
                                                <div className="col">
                                                    <h4 className="mb-4">Service Provider:<p> {props.SP}</p></h4>
                                                    <div>
                                                        <p className="m-b-0"><h5>Description:</h5> {props.job}</p>
                                                    </div>
                                                    <hr/>
                                                    <div>
                                                        <p className="m-b-0"><h5>Started Date:</h5> {date}</p>
                                                    </div>
                                                    <div>
                                                    
                                                        {/* <Link to={"/CustomerSPView/"+props.} className="btn btn-primary" style={{width:'25%',height:'25px',padding:'0px 0px',background:'#008000'}}>
                                                            View
                                                    
                                                         </Link> */}
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    
                                                    <table class="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Worker Name</th>
                                                                <th>Contact No</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {props.workers.map(worker=>(
                                                                <tr>
                                                                
                                                                <td>{worker.name}</td>
                                                                <td>{worker.contact_no}</td>
                                                               
                                                        </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>   
                                                    
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-8">
                                                    <h5 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>Rs. {props.cost}</h5>
                                                </div>

                                                <div className="col-4 text-right">
                                                    <p className="m-b-0">{props.duration} days</p>
                                                    <p className="m-b-0">Remaining</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="m-b-0">TimeLine</p>
                                            </div>
                                            <div className="progress m-t-3" style={{height: "5px"}}>
                                                 
                                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            
                                
        </div>
    )
}
export default WorkProgress;
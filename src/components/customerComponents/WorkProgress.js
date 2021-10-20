import {Link} from 'react-router-dom';

const WorkProgress=()=>{
    return(
        <div>
                            
                                <div className="col-md-12 col-xl-12">
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col">
                                                    <h4 className="mb-4">Project Title</h4>
                                                    <div>
                                                        <p className="m-b-0">Service Provider</p>
                                                    </div>
                                                    <div>
                                                        <p className="m-b-0">[Start Date]</p>
                                                    </div>
                                                    <div>
                                                        <Link to="/work" className="btn btn-primary" style={{width:'25%',height:'25px',padding:'0px 0px',background:'#008000'}}>
                                                            View
                                                    
                                                         </Link>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <label class="label theme-bg2 text-white f-14 f-w-400 float-right">34%
                                                    </label>      
                                                    
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-8">
                                                    <h5 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i> on going Project Phase</h5>
                                                </div>

                                                <div className="col-4 text-right">
                                                    <p className="m-b-0">2 days</p>
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
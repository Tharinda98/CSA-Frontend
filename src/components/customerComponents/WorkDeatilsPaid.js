import {Link} from 'react-router-dom';

const WorkDetailsPaid=()=>{
    return(
        <div>
                            
                                <div className="col-md-12 col-xl-12">
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-12">
                                                    <h4 className="mb-12">Project Title</h4>
                                                    <div>
                                                        <p className="m-b-12">Service Provider</p>
                                                    </div>
                                                    <div>
                                                        <p className="m-b-0">[Start Date]</p>
                                                    </div>
                                                    <div>
                                                        <p className="m-b-0">[Payment Date]</p>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label class="label theme-bg2 text-white f-25 f-w-400 float-right">Paid</label>
                                                    <div>
                                                        <Link to="/work" className="btn btn-primary" style={{width:'25%',height:'25px',padding:'0px 0px',background:'#008000'}}>
                                                            View
                                                    
                                                         </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-12">
                                                    <h5 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i> LKR 95 000</h5>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 
                            
                                
        </div>
    )
}
export default WorkDetailsPaid;
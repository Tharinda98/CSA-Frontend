import {Link} from 'react-router-dom';

const WorkDetailsPaid=(props)=>{
    const formatDate=(string)=>{
        var options={year:'numeric',month:'long' ,day:'numeric'};
        return new Date(string).toLocaleDateString([],options);
    }

    const started_date=formatDate(props.startDate);
    const finished_date=formatDate(props.finishDate);

    return(
        <div>
                            
                                <div className="col-md-12 col-xl-12">
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-12">
                                                    <h4 className="mb-12">Service Provider: {props.SP}</h4>
                                                    <div>
                                                        <p className="m-b-12"><h6>Description:</h6> {props.description}</p>
                                                    </div>
                                                    <div>
                                                        <p className="m-b-0"><h6>Started Date:</h6> {started_date}</p>
                                                    </div>
                                                    <div>
                                                        <p className="m-b-0"><h6>Finished Date:</h6> {finished_date}</p>
                                                    </div>
                                                    
                                                </div>
                                                <div class="col-12">
                                                    <label class="label theme-bg2 text-white f-25 f-w-400 float-right">Paid</label>
                                                    
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-12">
                                                    <h5 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i> Rs. {props.cost}</h5>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 
                            
                                
        </div>
    )
}
export default WorkDetailsPaid;
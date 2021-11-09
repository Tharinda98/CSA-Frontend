import {Link} from "react-router-dom"



const SPCard=({SP_ID,SP_name,SP_field,SP_location,SP_rating})=>{
    const Rating_bar = (((SP_rating)/5)*100)+"";
    const Rating_bar_percentage=Rating_bar+"%";
    console.log(Rating_bar);
    return(
        <div className="col-xl-4 col-md-6 col-sm-12">
                                <div className="">
                                    <div className="card card-social">
                                        <div className="card-block border-bottom">
                                          
                                                <div className="row align-items-center justify-content-right card-active">

                                                    <div  className="col-xl-6" >
                                                        <div>
                                                            <h4>{SP_name}</h4>
                                                            <h6> <span className="text-muted">{SP_field}</span></h6>
                                                            <br/>
                                                            <div className="row d-flex">
                                                                <div className="col">
                                                                    <span className="d-block text-uppercase"><i className="feather icon-map-pin  text-c-blue"></i>{SP_location}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div  className="col-xl-6" > 
                                                        <img className="rounded-circle"  src="/assets/images/user/avatar-2.jpg" alt="activity-user"/>
                                                        
                                                    </div>
                                                    
                                                    
                                                </div>    
                                            
                                        </div>
                                        <div className="card-block">
                                            <div className="row align-items-center justify-content-center card-active">
                                                <div className="col-xl-6">
                                                    <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Ratings</span>{SP_rating}</h6>

                                                    <div className="progress">
                                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{width:Rating_bar_percentage,height:"6px"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    {console.log(SP_ID)}
                                                    <Link to={'/Customer/CustomerSPView/'+SP_ID} className="nav-link ">
                                                    <button type="button" className="btn btn-outline-dark align-justify"  style={{fontSize:"10px"}}>View Profile</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>            

        </div>
    )
}
export default SPCard;
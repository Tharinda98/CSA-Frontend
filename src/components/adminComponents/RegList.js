import {Link} from "react-router-dom"
import SPRequest from "./SPRequest";

const RegList=()=>{
    return(
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="card Recent-Users">
                            <div className="card-header">
                                <h5>Service Provider Requests</h5>
                            </div>
                            <div className="card-block px-0 py-3">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            <SPRequest name="JET Constructions" service="Plumber" date="11 May"/> 
                                            <SPRequest name="JET Constructions" service="Plumber" date="11 May"/> 
                                                                
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>        
        </div>                      
    )
}

export default RegList;
import { useQuery } from "@apollo/client";
import {Link} from "react-router-dom"
import SPRequest from "./SPRequest";
import { GET_SP_REQUESTS } from "../../GraphQL/adminQueries";

const RegList=()=>{

    const requests=useQuery(GET_SP_REQUESTS);
    if (requests.loading) return <p>Loading</p>;
    if (requests.error) return <p>error!1</p>;

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
                                            {requests.data.admin_getOpenSP.map(sp=>(
                                                <SPRequest details={sp}/>
                                            ))}
                                            {/* <SPRequest name="JET Constructions" service="Plumber" date="11 May"/> 
                                            <SPRequest name="JET Constructions" service="Plumber" date="11 May"/>  */}
                                                                
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
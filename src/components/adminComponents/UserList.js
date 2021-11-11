import { useQuery } from "@apollo/client";
import {Link} from "react-router-dom"
import SPDetailCard from "./SPDetailCard";
import { GET_SP_DETAILS } from "../../GraphQL/adminQueries";


const RegList=()=>{
    const spDetails=useQuery(GET_SP_DETAILS);
    if (spDetails.loading) return <p>Loading</p>;
    if (spDetails.error) return <p>error!</p>;

    return(
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="card Recent-Users">
                            <div className="card-header">
                                <h5>Service Provider List</h5>
                            </div>
                            <div className="card-block px-0 py-3">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            {spDetails.data.showServiceProviders.map(sp=>{
                                                if (sp.state!="blocked"){
                                                return <SPDetailCard details={sp} />
                                                }
                                            })}
                                            
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
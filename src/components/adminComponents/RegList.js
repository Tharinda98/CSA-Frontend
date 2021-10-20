import {Link} from "react-router-dom"

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
                                            <tr className="unread">
                                                <td><img className="rounded-circle"  src="/assets/images/user/avatar-2.jpg" alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">JET Constructions</h6>
                                                    <p className="m-0">plumber</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>11 MAY 12:56</h6>
                                                </td>
                                                <td><Link to="/AdminRegView" className="label theme-bg text-white f-12">View Application</Link></td>
                                            </tr> 
                                            <tr className="unread">
                                                <td><img className="rounded-circle"  src="/assets/images/user/avatar-2.jpg" alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Mass Services</h6>
                                                    <p className="m-0">Glass Work</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>15 JUN 13:06</h6>
                                                </td>
                                                <td><Link to="/AdminRegView" className="label theme-bg text-white f-12">View Application</Link></td>
                                            </tr>  
                                            <tr className="unread">
                                                <td><img className="rounded-circle"  src="/assets/images/user/avatar-2.jpg" alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">AYANA Concrete Works</h6>
                                                    <p className="m-0">Concrete Work</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>21 APR 03:12</h6>
                                                </td>
                                                <td><Link to="/AdminRegView" className="label theme-bg text-white f-12">View Application</Link></td>
                                            </tr>    
                                            <tr className="unread">
                                                <td><img className="rounded-circle"  src="/assets/images/user/avatar-2.jpg" alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Brown Fox</h6>
                                                    <p className="m-0">Aluminium Work</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>11 JAN 02:16</h6>
                                                </td>
                                                <td><Link to="/AdminRegView" className="label theme-bg text-white f-12">View Application</Link></td>
                                            </tr>                         
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
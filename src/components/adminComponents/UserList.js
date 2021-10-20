import {Link} from 'react-router-dom'

const UserList=()=>{
    return(
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                                <div >
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <Link className="nav-link" id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="false">Customers</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active show" id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile" aria-selected="true">Service Providers</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" id="contact-tab" data-toggle="tab" to="#contact" role="tab" aria-controls="contact" aria-selected="false">Workers</Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>User</th>
                                                        <th>Last Activity</th>
                                                        <th>Time</th>
                                                        <th>Status</th>
                                                        <th className="text-right"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle m-r-10"  src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Posted a Job</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">3:28 PM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Active</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10"  src="assets/images/user/avatar-2.jpg" alt="activity-user"/>Albert Andersen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Contacted a Service Provider</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">2:37 PM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-red">Offline</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10"  src="assets/images/user/avatar-3.jpg" alt="activity-user"/>Silje Larsen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Job done</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">10:23 AM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-purple">Offline</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10"  src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Reviewed a Worker</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">4:28 PM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Active</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>User</th>
                                                        <th>Location</th>
                                                        <th>Last Accessed Time</th>
                                                        <th>Ongoing Work Status</th>
                                                        <th className="text-right"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10"  src="assets/images/user/avatar-2.jpg" alt="activity-user"/>Albert Andersen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Colombo</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">2:37 PM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-red">3 JOBs</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle m-r-10" src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Kalutara</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">3:28 PM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">5 JOBs</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10"  src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Matara</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">4:28 PM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">No JOBs</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10"  src="assets/images/user/avatar-3.jpg" alt="activity-user"/>Silje Larsen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Jaffna</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">10:23 AM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-purple">2 JOBs</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>User</th>
                                                        <th>Service Provider</th>
                                                        <th>Last Accessed Time</th>
                                                        <th>Last Work Status</th>
                                                        <th className="text-right"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10"  src="assets/images/user/avatar-3.jpg" alt="activity-user"/>Silje Larsen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">JAT Constructions</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">10:23 AM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-purple">On going</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-purple f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle m-r-10"  src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">MASS services</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">3:28 PM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Done</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10"  src="assets/images/user/avatar-2.jpg" alt="activity-user"/>Albert Andersen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">Concrete works</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">2:37 PM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-red">Missed</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-red f-10"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 className="m-0"><img className="rounded-circle  m-r-10" src="assets/images/user/avatar-1.jpg" alt="activity-user"/>Ida Jorgensen</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0"> brown fox</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0">4:28 PM</h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="m-0 text-c-green">Delayed</h6>
                                                        </td>
                                                        <td className="text-right"><i className="fas fa-circle text-c-green f-10"></i></td>
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
export default UserList;
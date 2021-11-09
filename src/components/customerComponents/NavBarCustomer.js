import {Link} from 'react-router-dom';

const NavBarCustomer=()=>{
    return(
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                    <Link to="/" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title">Welcome</span>
                    </Link>
                    <a className="mobile-menu" id="mobile-collapse" href=""><span></span></a>
                </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to="/Customer/CustomerHomePage" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Home</span></Link>
                        </li>
                      
                  
                    
                        <li className="nav-item pcoded-menu-caption">
                            <label>Work</label>
                        </li>
                        <li  className="nav-item">
                            <Link to="/Customer/CustomerWorkProgress" className="nav-link "><span className="pcoded-micon"><i className="feather icon-trending-up"></i></span><span className="pcoded-mtext">Ongoing Work Progress</span></Link>
                        </li>
                        <li class="nav-item pcoded-hasmenu">
                            <a href="javascript:" class="nav-link "><span class="pcoded-micon"><i class="feather icon-check-square"></i></span><span class="pcoded-mtext">Finished Work Details</span></a>
                            <ul class="pcoded-menu">
                                <li class=""><a href="/Customer/CustomerWorkDetailsUnpaid" class=""><i class="feather icon-check"></i>Unpaid</a></li>
                                <li class=""><a href="/Customer/CustomerWorkDetails" class=""><i class="feather icon-check-circle"></i>paid</a></li>    
                            </ul>
                        </li>
                        
                    
                  
                        <li className="nav-item pcoded-menu-caption">
                            <label>Settings</label>
                        </li>
                        <li className="nav-item">
                            <Link to="/Customer/CustomerEditProfile" className="nav-link "><span className="pcoded-micon"><i className="feather icon-user"></i></span><span className="pcoded-mtext">Edit Profile</span></Link>
                        </li>
                      
                    
                        
                    </ul>
                    <script src="assets/js/vendor-all.min.js"></script>
	<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/pcoded.min.js"></script>
                </div>

            </div>
        </nav>
    )
}
export default NavBarCustomer;
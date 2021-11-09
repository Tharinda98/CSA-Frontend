import {Link} from 'react-router-dom'
const NavBarAdmin=()=>{
    return(
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                    <Link to="index.html" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title">Admin Panel</span>
                    </Link>
                    <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
                </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to="/Admin/AdminHomePage" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></Link>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to="/Admin/AdminRegList" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Requests</span></Link>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                            <Link to="/Admin/AdminUserList" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Users</span></Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBarAdmin;
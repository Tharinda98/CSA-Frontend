import {BrowserRouter as Router,Link} from 'react-router-dom';

function NavBarWorker(){
    return(
        <nav className="pcoded-navbar">
            <div className="navbar-wrapper">
                <div className="navbar-brand header-logo">
                    <Link to="/Worker" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up"></i>
                        </div>
                        <span className="b-title" style={{fontSize: "0.875rem"}}>Customer Service App</span>
                    </Link>
                    <Link className="mobile-menu" id="mobile-collapse" to="#"><span></span></Link>
                </div>
                <div className="navbar-content scroll-div">
                    <ul className="nav pcoded-inner-navbar">
                        <li className="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                            <Link to="/Worker" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></Link>
                        </li>

                        
                        <li className="nav-item pcoded-menu-caption">
                            <label>Works</label>
                        </li>
                        
                        <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                            <Link to="#" className="nav-link" style={{pointerEvents:"none"}}><span className="pcoded-micon"><i className="fas fa-file-word"></i></span><span className="pcoded-mtext">Ongoing Work</span></Link>
                            <ul className="pcoded-submenu">
                                <li className=""><Link to="/Worker/viewWork" className="">View Work</Link></li>
                                
                            </ul>
                        </li>
                        <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" className="nav-item pcoded-hasmenu">
                            <Link to="#" className="nav-link" style={{pointerEvents:"none"}}><span className="pcoded-micon"><i className="fas fa-edit"></i></span><span className="pcoded-mtext">Finished Work</span></Link>
                            <ul className="pcoded-submenu">
                                <li className=""><Link to="/Worker/viewFinishWork" className="">View Work</Link></li>
                                {/* <li className=""><Link to="editRating" className="">Edit Rating</Link></li>
                                <li className=""><Link to="viewRating" className=""> View Rating</Link></li> */}
                            </ul>
                        </li>
                        <li className="nav-item pcoded-menu-caption">
                            <label>Worker</label>
                        </li>
                        <li data-username="" className="nav-item" ><Link to="/Worker/profile" className="nav-link "><span className="pcoded-micon"><i className="fas fa-user-circle"></i></span><span className="pcoded-mtext">Profile</span></Link></li>
                        
                        <li data-username="Disabled Menu" className="nav-item disabled" style={{marginTop:"15px"}}><Link to="#" className="nav-link"><span className="pcoded-micon"><i className="feather icon-power"></i></span><span className="pcoded-mtext">Disabled menu</span></Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBarWorker;
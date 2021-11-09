import {BrowserRouter as Router,Link} from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { Redirect } from 'react-router';

import {GET_ME} from '../GraphQL/workerQueries'

function Header(){

    const {error,loading,data} = useQuery(GET_ME);
    const [userName,setUserName] = useState();
    const [id,setId] = useState();

    const signOut = ()=>{
        localStorage.removeItem('token')
        window.location.href='/signin'
    }

    useEffect(()=>{
        if(data){
            if(data.worker_me){
                
                setId(data.worker_me._id)
                setUserName(data.worker_me.name)
            }
           
        }
        
    },[data])


    return(
        <header className="navbar pcoded-header navbar-expand-lg navbar-light">
            <div className="m-header">
                <a className="mobile-menu" id="mobile-collapse1" href="#" ><span></span></a>
                <Link to="/" className="b-brand">
                       <div className="b-bg">
                           <i className="feather icon-trending-up"></i>
                       </div>
                       <span className="b-title">Customer Service App</span>
                   </Link>
            </div>
            <Link className="mobile-menu" id="mobile-header" to="#0">
                <i className="feather icon-more-horizontal"></i>
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">

                    
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#0" data-toggle="dropdown"><i className="icon feather icon-bell"></i></Link>
                            <div className="dropdown-menu dropdown-menu-right notification">
                                
                                <div className="noti-footer">
                                    <Link to="/Worker/notifications">show all notifications</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown drp-user">
                            <Link to="#0" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="icon feather icon-settings"></i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right profile-notification">
                                <div className="pro-head">
                                    <img src="/assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile"/>
                                    <span>{userName}</span>
                                    <button onClick={signOut} className="dud-logout" style={{backgroundColor:'#04a9f5',border:'none'}} title="Logout">
                                        <i className="feather icon-log-out"></i>
                                    </button>
                                </div>
                                <ul className="pro-body">
                                    {/* <li><Link to="#0" className="dropdown-item"><i className="feather icon-settings"></i> Settings</Link></li> */}
                                    <li><Link to={`/Worker/profile`} className="dropdown-item"><i className="feather icon-user"></i> My Profile</Link></li>
                                    <li><Link to={`/Worker/messages`} className="dropdown-item"><i className="feather icon-mail"></i> Messages</Link></li>
                                    <li><button onClick={signOut} className="dropdown-item"><i className="feather icon-lock"></i> Log Out</button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
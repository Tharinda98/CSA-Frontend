import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//import routes
import AdminHomePage from "./AdminHomePage";
import AdminUserList from "./AdminUserList";
import AdminRegList from "./AdminRegList";
import AdminRegView from "./AdminRegView";
import CustomerHomePage from "./CustomerHomePage";
import CustomerSPView from "./CustomerSPView";
import CustomerWorkProgress from "./CustomerWorkProgress";
import CustomerWorkDetails from "./CustomerWorkDetails";
import Review from "./rating";
import WorkRequest from "./addRequest";
import AddWork from "./addWork";
import Work from "./work";
import CustomerWorkDetailsUnpaid from "./CustomerWorkDetailsUnpaid";

const Pages=()=>{
    return(
        <Router>
            <Route path="/AdminHomePage" component={AdminHomePage} />
        </Router>
    );
};

export default Pages;
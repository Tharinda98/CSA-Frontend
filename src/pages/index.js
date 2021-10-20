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
            <Route path="/AdminRegList" component={AdminRegList} />
            <Route path="/AdminUserList" component={AdminUserList} />
            <Route path="/AdminRegView" component={AdminRegView} />
            <Route path="/CustomerHomePage" component={CustomerHomePage} />
            <Route path="/CustomerSPView" component={CustomerSPView} />
            <Route path="/CustomerWorkProgress" component={CustomerWorkProgress} />
            <Route path="/CustomerWorkDetails" component={CustomerWorkDetails} />
            <Route path="/CustomerWorkDetailsUnpaid" component={CustomerWorkDetailsUnpaid} />
            <Route path="/review" component={Review} />
            <Route path="/request" component={WorkRequest} />
            <Route path="/addWork" component={AddWork} />
            <Route path="/work" component={Work} />
        </Router>
    );
};

export default Pages;
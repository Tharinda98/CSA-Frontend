import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

//import routes
import AdminHomePage from "./AdminHomePage";
import AdminUserList from "./AdminUserList";
import AdminRegList from "./AdminRegList";
import AdminRegView from "./AdminRegView";
import CustomerHomePage from "./CustomerHomePage";
import CustomerSPView from "./CustomerSPView";
import CustomerWorkProgress from "./CustomerWorkProgress";
import CustomerWorkDetails from "./CustomerWorkDetails";
import CustomerEditProfile from "./CustomerEditProfile";
import Review from "./rating";
import ScheduleWork from "./scheduleWork";

import Work from "./work";
import CustomerWorkDetailsUnpaid from "./CustomerWorkDetailsUnpaid";
import SignIn from './signin';

//apollo client
import { useQuery,gql } from '@apollo/client';


const IS_LOGGED_IN =gql `
    {
        isLoggedIn @client
    }`;


const Pages=()=>{
    return(
        <Router>
            <Route path="/AdminHomePage" component={AdminHomePage} />
            <Route path="/AdminRegList" component={AdminRegList} />
            <Route path="/AdminUserList" component={AdminUserList} />
            <Route path="/AdminRegView" component={AdminRegView} />
            <Route path="/CustomerHomePage" component={CustomerHomePage} />
            <Route path="/CustomerSPView/:id" component={CustomerSPView} />
            <Route path="/CustomerEditProfile" component={CustomerEditProfile} />
            <Route path="/CustomerWorkProgress" component={CustomerWorkProgress} />
            <Route path="/CustomerWorkDetails" component={CustomerWorkDetails} />
            <Route path="/CustomerWorkDetailsUnpaid" component={CustomerWorkDetailsUnpaid} />
            <Route path="/review" component={Review} />
            <Route path="/scheduleWork/:id" component={ScheduleWork} />
            
            <Route path="/work" component={Work} />
            <Route path="/signin" component={SignIn}/>
        </Router>
    );
};
//add the Private Router Component 
const PrivateRoute= ({component:Component,...rest}) =>{
    const{loading,error,data}=useQuery(IS_LOGGED_IN);
    // if the data is loading, display a loading message
    if (loading) return <p>Loading...</p>;
    // if there is an error fetching the data, display an error message
    if (error) return <p>Error!</p>;
    // if the user is logged in, route them to the requested component
    // else redirect them to the sign-in page
    return (
        <Route
            {...rest}
            render={props =>
                data.isLoggedIn === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );


};

export default Pages;
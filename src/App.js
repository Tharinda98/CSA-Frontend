//need to be moved to pages
import { BrowserRouter,Route, Switch } from "react-router-dom";
import AdminHomePage from "./pages/AdminHomePage";
import AdminUserList from "./pages/AdminUserList";
import AdminRegList from "./pages/AdminRegList";
import AdminRegView from "./pages/AdminRegView";
import CustomerHomePage from "./pages/CustomerHomePage";
import CustomerSPView from "./pages/CustomerSPView";
import CustomerWorkProgress from "./pages/CustomerWorkProgress";
import CustomerWorkDetails from "./pages/CustomerWorkDetails";
import Review from "./pages/rating";
import WorkRequest from "./pages/addRequest";
import AddWork from "./pages/addWork";
import Work from "./pages/work";
import CustomerWorkDetailsUnpaid from "./pages/CustomerWorkDetailsUnpaid";

//importing react 
import React from 'react';
import ReactDOM from 'react-dom';

//importing Apollo Client Libraries
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

//have to import pages

//configure out API URI & cache
const uri =process.env.API_URI;
const cache = new InMemoryCache();

//configure Apollo Client
const client= new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
})

const App=()=> {
  return (
      <ApolloProvider client={client}>

        <Pages/>

      </ApolloProvider>
  );
}

export default App;

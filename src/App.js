
//importing react 
import React from 'react';
import ReactDOM from 'react-dom';

//importing Apollo Client Libraries
import {ApolloClient, ApolloProvider,createHttpLink} from '@apollo/client';
import {InMemoryCache} from "apollo-cache-inmemory";
import {setContext} from 'apollo-link-context';

//import pages
import Pages from "./pages/";

//configure out API URI & cache
const uri = "http://localhost:8000/api";
const cache = new InMemoryCache();
const httpLink = createHttpLink({uri});

//check for a token and return the headers to the context
const authLink = setContext((_,{headers})=>{
  return{
    headers:{
      ...headers,
      authorization:localStorage.getItem('token')||''
    }
  };
});

//configure Apollo Client
const client= new ApolloClient({
  link:authLink.concat(httpLink),
  cache,
  resolvers:{},
  connectToDevTools: true
})

const data = {
  isLoggedIn: !!localStorage.getItem('token')
}
cache.writeData({data});
client.onResetStore(()=>cache.writeData({data}))

const App=()=> {
  return (
      <ApolloProvider client={client}>

        <Pages/>

      </ApolloProvider>
  );
}

export default App;

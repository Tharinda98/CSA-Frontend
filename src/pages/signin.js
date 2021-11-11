import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { BrowserRouter as Router,Link } from 'react-router-dom';


import {  SIGNIN_MOD_SP } from '../GraphQL/Mutations';
import SignInForm from '../components/form/signInForm';

const SignIn = (props) => {

    const client = useApolloClient();
    const [signINModSP, { loading, error }] = useMutation( SIGNIN_MOD_SP, {
      onCompleted: data => {
       
        if(data.signINModSP){
          //store the token
        localStorage.setItem('token', data.signINModSP);
        // update the local cache
        localStorage.removeItem('refresh');
        localStorage.setItem('role','Provider')
        client.writeData({ data: { isLoggedIn: true } });
        
        // redirect the user to the homepage
        props.history.push('/CSA');
        }
      }
    });

    return (
        <div className="auth-wrapper">
        <div className="auth-content">
            <div className="auth-bg">
                <span className="r"></span>
                <span className="r s"></span>
                <span className="r s"></span>
                <span className="r"></span>
            </div>
            <div className="card">
                <div className="card-body text-center">
                    <div className="mb-4">
                        <i className="feather icon-unlock auth-icon"></i>
                    </div>
                    <h3 className="mb-4">Login</h3>
                

                    <SignInForm action={signINModSP} loading={loading} type="Moderator"/>
                    
                    <p className="mb-2 text-muted" >
                        Signin ?
                        <Link to="/signInCustomer" style={{color:'#038fcf',fontStyle:'italic',textDecoration:'underline'}}>
                            Customer 
                        </Link>
                        /
                        <Link to="/signinWorker" style={{color:'#038fcf',fontStyle:'italic',textDecoration:'underline'}}>
                            Worker
                        </Link>
                    </p>

                    

                    {/* <p className="mb-2 text-muted" >
                        Signin Administrator? 
                        <Link to="/signInAdmin" style={{color:'#038fcf',fontStyle:'italic',textDecoration:'underline'}}>
                            Administrator
                        </Link>
                    </p> */}

                    <p className="mb-0 text-muted" >
                        Create a Service Provider? 
                        <Link to="signup" style={{color:'#038fcf',fontStyle:'italic',textDecoration:'underline'}}>
                            Signup
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    </div>
     );
}

export default SignIn;

import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { Link,BrowserRouter as Router } from 'react-router-dom';


import { SIGNIN_WORKER } from '../GraphQL/workerMutations';
import SignInForm from '../components/form/signInForm';

const SignIn = (props) => {

    const client = useApolloClient();
    const [signINWorker, { loading, error }] = useMutation(SIGNIN_WORKER, {
      onCompleted: data => {

        
          //store the token
        if ( data.signINWorker){
            localStorage.setItem('token', data.signINWorker);
            
            localStorage.removeItem('refresh');
            localStorage.setItem('role','Worker')
            // update the local cache
            client.writeData({ data: { isLoggedIn: true } });
           
            // redirect the user to the homepage
            props.history.push('/Worker');
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
                    

                    <SignInForm action={signINWorker} formType="signin" type="Worker"/>


                    <p className="mb-2 text-muted">Signin Moderator/admin? 
                        <Link to="/signin" style={{color:'#038fcf',fontStyle:'italic',textDecoration:'underline'}}>
                            Moderator/Admin
                        </Link>
                    </p>
                    <p className="mb-0 text-muted">Create a Service Provider? 
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

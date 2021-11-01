import React,{useEffect} from "react";
import { useMutation, useApolloClient } from "@apollo/client";
//import sing form
import SignForm from '../components/form/SignForm';
import { SIGNIN_CUSTOMER } from "../GraphQL/Mutations";

const SignIn = (props) =>{
    const client =useApolloClient();
    const [signINCustomer, {loading, error}] =useMutation(SIGNIN_CUSTOMER, {
        onCompleted: data => {
            //store the token
            localStorage.setItem('token',data.signINCustomer);
            //update the local cache
            client.writeData({data:{isLoggedIn: true}});
            //redirect
            props.history.push('/CustomerHomePage');
        }
    });

    return(
        <div>
            <SignForm action={signINCustomer} formType="signIN" />
            {/* if the data is loading, display a loading message*/}
            {loading && <p>Loading...</p>}
            {/* if there is an error, display a error message*/}
            {error && <p>Error signing in!</p>}
        </div>
    );
};
export default SignIn;
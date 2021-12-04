import SignupForm from "../../components/customerComponents/signupForm";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useLayoutEffect, useState } from "react";
import { SIGNUP_CUSTOMER } from "../../GraphQL/customerMutations";
import { CHECK_USERNAME } from "../../GraphQL/customerQueries";


const SignUpCustomer =(props) => {
    const [signUPCustomer,{loadingSignUp,errorSignUp}] = useMutation(SIGNUP_CUSTOMER,{
        onCompleted: data =>{
           props.history.push('/success')
        }
    })

    const [username,setUsername] = useState('');
    const [usererror,setUserError] = useState(false);

    const checkId = useQuery(CHECK_USERNAME,{
        variables:{
            username:username
        }
    })

    useEffect(() => {
        if(username){
            checkId.refetch({
                username:username
            }).then(data =>{
               
                if(data.data && data.data.CheckUsername){
                    setUserError("")
                }else{
                    setUserError("Already Exist")
                }
                
            })
        }
    }, [username]);

    

    return ( 
    <div className="auth-wrapper">
        <div className="auth-content" style={{width:'90%'}}>
            <div className="auth-bg">
                <span className="r"></span>
                <span className="r s"></span>
                <span className="r s"></span>
                <span className="r"></span>
            </div>
                    <SignupForm
                   
                    
                    setUsername = {setUsername}
                    error = {usererror}
                    username = {username}
                    action = {signUPCustomer}
                    loadingSignUp = {loadingSignUp}
                    setUserError = {setUserError}
                    />       
            
        </div>
    </div>
     );


}
export default SignUpCustomer;
import SignUpForm from "../components/form/signupForm";
import OwnerRegisterForm from "../components/form/ownerRegistrationForm";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useLayoutEffect, useState } from "react";
import { ADD_OWNER, SIGNUP_SP } from "../GraphQL/Mutations";
import { CHECK_USER, GET_SIGNUP } from "../GraphQL/Queries";



const SignUp = (props) => {


    const [membershipID,setMembershipID] = useState();
    const [ownerID,setOwnerID] = useState()

    const [signUPSP,{loadingSignUp,errorSignUp}] = useMutation(SIGNUP_SP,{
        onCompleted: data =>{
           props.history.push('/success')
        }
    })

    const [addOwner,{loadingAddOwner,errorAddOwner}] = useMutation(ADD_OWNER,{
        onCompleted: data =>{
            if(data.addOwner){
                setOwnerID(data.addOwner._id)
            }
        }
    })

    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[ownerID])

    

    const {error,loading,data} = useQuery(GET_SIGNUP);

    const [username,setUsername] = useState('');
    const [usererror,setUserError] = useState(false);

    const [membership,setMembership] = useState('');
    const [membershipError,setmembershipError] = useState(false);



    const checkId = useQuery(CHECK_USER,{
        variables:{
            username:username
        }
    })

    const [services,setService] = useState([]);
    const [districts,setDistricts] = useState([]);
    const [memberships,setMemberships] =useState([])

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


    const [myServiceArray,setMyServiceArray] = useState([]);
    const [workRangeArray,setWorkRangeArray] = useState([]);
    const [content,setContent] = useState();

    useEffect(()=>{
        if(data){
            setService(data.getServices)
            setDistricts(data.showDistricts)
            setMemberships(data.getMemberships)
        }
    },[data])

    return ( 
    <div className="auth-wrapper">
        <div className="auth-content" style={{width:'90%'}}>
            <div className="auth-bg">
                <span className="r"></span>
                <span className="r s"></span>
                <span className="r s"></span>
                <span className="r"></span>
            </div>
            {myServiceArray[0] && workRangeArray[0] && ownerID && membershipID ?

                    <SignUpForm
                   
                    loading = {loading}
                    setUsername = {setUsername}
                    error = {usererror}
                    username = {username}
                    action = {signUPSP}
                    workRangeArray = {workRangeArray}
                    myServiceArray = {myServiceArray}
                    membershipID = {membershipID}
                    ownerID = {ownerID}
                    />

                    :

                <OwnerRegisterForm
                    services = {services}
                    districts = {districts}
                    loading = {loading}
                    workRangeArray = {workRangeArray}
                    setWorkRangeArray = {setWorkRangeArray}
                    myServiceArray = {myServiceArray}
                    setMyServiceArray = {setMyServiceArray}
                    setContent = {setContent}
                    memberships = {memberships}
                    setMembershipID = {setMembershipID}
                    action = {addOwner}
                />
               
               
                
            }
        </div>
    </div>
     );
}
 
export default SignUp;

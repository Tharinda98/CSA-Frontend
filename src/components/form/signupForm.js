import {useFormik} from 'formik';
import * as Yup from 'yup';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import Loading from '../loading';
import ButtonCard from '../buttonCard';

const SignUpForm = ({error,loading,setUsername,username,workRangeArray,myServiceArray,ownerID,membershipID,action}) => {

    const toggleAddPassword = (e) => {
        if (addPassword === "password"){
            setAddPassword("text");
            setAddClassName('fa fa-eye-slash');
        }else{
            setAddPassword("password");
            setAddClassName('fa fa-eye');
        } 
    };

    const [confirmError,setConfirmError] = useState(false);


   
   
    

    const [addPassword,setAddPassword] = useState("password");
    const [addClassName, setAddClassName] = useState("fa fa-eye");
    
    
    const formik = useFormik({
        initialValues:{
            name:'',
            phone:'',
            bankAccno:'',
            address:'',
            email:'',
            password:'',
            confirm:'',
           
        },validationSchema: Yup.object({
            name: Yup.string()
                .required('Please enter the full name'),
            phone: Yup.string()
                .required('Please enter the phone number')
                .matches(/[0-9]{9,11}/,"Please Enter a valid phone number"),
            bankAccno: Yup.string()
                .required('Please enter the Bank Account Number'),
            address: Yup.string()
                .required('Please fill the address'),
            email: Yup.string()
                .email('Invalid email Address')
                .required('Please enter the email address'),
            confirm: Yup.string()
                .required("please confirm"),
            password:  Yup.string()
                .required('Please enter the password')
                .min(4,"Password should be more than 3 letters")
                .matches(/[A-Z]/,"Password should have a capital letter")
                .matches(/[0-9]/,"Password should have numbers"),
            confirmPassword: Yup.string()
                .required("Please confirm the password")
                .oneOf([Yup.ref('password'),null],"Password must match")
        }),
        onSubmit: values => {
            const phone = [values.phone]

            if(values.confirm && username){
                setConfirmError(false);

                action({
                    variables:{
                        username: username, 
                        password: values.password, 
                        name: values.name, 
                        address: values.address, 
                        contactNo: phone, 
                        email: values.email, 
                        bankAccNo: values.bankAccno, 
                        owner: ownerID, 
                        service: myServiceArray, 
                        membership: membershipID, 
                        workingRange: workRangeArray
                    }
                }).catch(err =>{
                    alert("Error occurred")
                    
                })

            }
            
            
           


        }
    })



    return ( 
        <div className="card">
                <div className="card-body">
                    <div className="text-center">
                        <div className="mb-4">
                            <i className="fas fa-building auth-icon"></i>
                        </div>
                        <h3 className="mb-4">Sign up for Service Provider</h3>
                    </div>
                    
                    {!loading?
                    <>
                    <div style={{marginBottom:25}}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label htmlFor="name">Company Name</label>
                                        <input type="text" className="form-control" value={formik.values.name} id="name" placeholder="Eg: Painting Pvt Ltd" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        { formik.touched.name && formik.errors.name ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.name}</small>: null}
                                    </div>

 
                                    
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel/number" className="form-control" value={formik.values.phone} id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        {formik.touched.phone && formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" value={formik.values.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        {formik.touched.email && formik.errors.email ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.email}</small>: null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" className="form-control" value={formik.values.address} id="address" placeholder="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        { formik.touched.address && formik.errors.address ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.address}</small>: null}
                                    </div>


                                                            
                                </div>
                                <div className="col-md-6">
                                                            
                                    <div className="form-group">
                                        <label htmlFor="bankAccno">Bank Account Number</label>
                                        <input type="text" className="form-control" id="bankAccno" value={formik.values.bankAccno} placeholder="Bank Account Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        {formik.touched.bankAccno && formik.errors.bankAccno ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.bankAccno}</small>: null}
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="id">Username</label>
                                        <input type="text" className="form-control" id="id" value={username} placeholder="Provider Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                                        {error ? <small id="nameError" className="error form-text text-muted error "> {error}</small>: null}
                                    </div>                            
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type={addPassword} className="form-control" value={formik.values.password} id="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        <i className={addClassName} id="visibile" style={{float:"right",cursor:"pointer",transform:"translate(-10px,-30px)"}} onClick={toggleAddPassword}></i>
                                        {formik.touched.password && formik.errors.password ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.password}</small>: null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type={addPassword} className="form-control" id="confirmPassword"  placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        <i className={addClassName} id="visibile" style={{float:"right",cursor:"pointer",transform:"translate(-10px,-30px)"}} onClick={toggleAddPassword}></i>
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.confirmPassword}</small>: null}
                                    </div>
                                    


                                </div>
                            </div>
                            <div className="form-group text-left" style={{marginTop:30}}>
                                <div className="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="confirm" id="confirm" value={true} onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                    <label htmlFor="confirm" className="cr"> Confirm Submission</label>
                                    <small id="nameError" className="form-text text-muted">(Please confirm)</small>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{float:"right",marginTop:30}}>Submit</button>
                                                            
                        </form>
                    </div>
                    
                    </>
                    :
                        <Loading/>
                    }
                    
                    <br/>

                    <div className="text-center" >
                        {/* <button className="btn btn-primary shadow-2 mb-4">Sign up</button> */}
                        <p className="mb-0 text-muted">Allready have an account? 
                            <Link to="/siginin" style={{color:'#038fcf'}}> Log in</Link>
                        </p>
                    </div>
                </div>
            </div>
     );
}
 
export default SignUpForm;
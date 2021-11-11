import React from 'react';


import BreadCrumb from '../../breadcrumb';
import PhotoUpdate from '../../form/changePhoto';
import ChangeCard from '../../form/changeCard';


import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState, useEffect} from 'react';
import { CHECK_USER } from '../../../GraphQL/Queries';
import {useQuery} from '@apollo/client'

import swal from 'sweetalert';



function AddWorkerForm({type,addEmployee,setID,Id,content,ID,photoFocus,loading}){


    
    
    const [id,setId] = useState(Id)



    const [username,setUsername] = useState('')
    const [userError,setUserError] = useState()

    const ChechUser = useQuery(CHECK_USER,{
        variables:{
            username:username
        }
    })

    useEffect(()=>{
        if(username){
            ChechUser.refetch({
                username:username
            }).then((data) => {
                
                if(data.data && data.data.CheckUsername){
                    setUserError('')
                    
                }else{
                    setUserError('choose another username')
                }
            })
        }

    },[username]);


    const updateUser = (e) =>{
        if(e.target.value){
           
            setUsername(e.target.value)
            
        }else{
            setUserError('Please add the user name')
            
        }
    }

    const toggleAddPassword = (e) => {
        if (addPassword === "password"){
            setAddPassword("text");
            setAddClassName('fa fa-eye-slash');
        }else{
            setAddPassword("password");
            setAddClassName('fa fa-eye');
        } 
    };

    const [addPassword,setAddPassword] = useState("password");
    const [addClassName, setAddClassName] = useState("fa fa-eye");
    
    
    const formik = useFormik({
        initialValues:{
            name:'',
            nic:'',
            id:'',
            phone:'',
            address:'',
            // date:'',
            email:'',
            password:''
        },validationSchema: Yup.object({
            name: Yup.string()
                .required('Please enter the full name')
                .matches(/^[a-zA-Z]+\s[a-zA-Z]+$/,"Cannot have special characters and seperated with space"),
            nic: Yup.string()
                .required('Please enter the NIC')
                .matches(/^([0-9]{12})$|^([0-9]{9}(v|V))$/,"Enter a valid nic")
               ,
            // id: Yup.string()
            //     .required('Please enter the Worker ID')
                
            //     .matches(/^[\w\d]+$/,"can only have letters and digits"),
            phone: Yup.string()
                .required('Please enter the phone number')
                .matches(/^([0-9]{9,10})$/,"Enter a valid phone number "),
            address: Yup.string()
                .required('Please fill the address'),
            // date:Yup.date()
            //     .required("Please select a date"),
            email: Yup.string()
                .email('Invalid email Address')
                .required('Please enter the email address'),
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
            // alert(JSON.stringify(values,null,2))
            values.phone = String(values.phone)
            
            
 
            if(username && !userError){
                values.id = username

                addEmployee({
                    variables:values  
                  })
                  .then(res=>{
                    swal({
                        title: "Success",
                        text: "successfully created",
                        icon: "success",
                        button: {
                          text: "Close",
                          closeModal: true,
                        }, 
                        
                    })
                  })
                  .catch(err=>{
                    swal({
                        title: "Error",
                        text: "Error occurred in submission",
                        icon: "warning",
                        button: {
                          text: "Close",
                          closeModal: true,
                        }, 
                        dangerMode: true  
                    })
                  })
                
                
            } else if(!username){
                setUserError('Please add the user name')
            } 
            
           


        }
    })



    


    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">

                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type={type} reason="Add" />
                        {/*<!-- [ breadcrumb ] end -->*/}

                        <div className="main-body">
                            <div className="page-wrapper">

                                {/*<!-- [ Basic info ] start -->*/}
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Basic Componant</h5>
                                            </div>
                                            <div className="card-body">
                                                <h5>{type}</h5>
                                                <hr/>
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6">

                                                            <div className="form-group">
                                                                <label htmlFor="name">Full Name</label>
                                                                <input type="text" className="form-control" value={formik.values.name} id="name" placeholder="Eg: Vijay Antony" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                { formik.touched.name && formik.errors.name ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.name}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="nic">NIC</label>
                                                                <input type="text" className="form-control" id="nic" value={formik.values.nic} placeholder="Eg: 987654321v" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.nic && formik.errors.nic ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.nic}</small>: null}
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label htmlFor="phone">Phone Number</label>
                                                                <input type="tel" className="form-control" value={formik.values.phone} id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.phone && formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="address">Address</label>
                                                                <input type="text" className="form-control" value={formik.values.address} id="address" placeholder="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                { formik.touched.address && formik.errors.address ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.address}</small>: null}
                                                            </div>

                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        
                                                            <div className="form-group">
                                                                <label htmlFor="id">Worker ID</label>
                                                                <input type="text" className="form-control" id="id" placeholder="Worker ID" onBlur={(e)=>{updateUser(e)}} />
                                                                {userError ? <small id="nameError" className="error form-text text-muted error "> {userError}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email address</label>
                                                                <input type="email" className="form-control" value={formik.values.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.email && formik.errors.email ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.email}</small>: null}
                                                            </div>
                                                            {/* <div className="form-group">
                                                                <label htmlFor="joinedDate">Joined Date</label>
                                                                <input type='date'  className="form-control" id="date" value={formik.values.date} placeholder="DD/MM/YYYY" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.date && formik.errors.date ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.date}</small>: null}
                                                            </div> */}
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
                                                {!loading ?
                                                    <button type="submit" className="btn btn-primary" style={{float:"right"}}>Submit</button>
                                                :
                                                    <button  className="btn btn-primary" style={{float:"right"}} disabled>loading ...</button>
                                                }
                                                        
                                            </form>
                                            </div>
                                        </div>
                                 
                                    </div>
                                </div>
                                {/*<!-- [ Basic info ] end -->*/}

                                {/*<!-- [ photo form ] start -->*/}
                                <div id="photoContainer" ref={photoFocus}>
                                {content ?
                                <>
                                
                                <ChangeCard
                                    title ='Change profile'
                                    setID = {setID}
                                    childComponent ={<PhotoUpdate/>}
                                    id = {Id}
                                    content = {content}
                                    type={type}

                                />
                                </>
                                :null}
                                </div>
                                {/*<!-- [ photo form ] end -->*/}


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWorkerForm;
import BreadCrumb from '../../breadcrumb';

import PhotoUpdate from '../../form/changePhoto';
import ChangeCard from '../../form/changeCard';
import ProfileCard from '../../profile/profileCard';


import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useState} from 'react';

import swal from 'sweetalert';

function EditEmployee({type,action,content,id,loading}){

    
    const [Id,setID] = useState();
    

    
    const formik = useFormik({
        initialValues:{
            name:'',
            nic:'',
            phone:'',
            email:'',
            address:''
        },validationSchema: Yup.object({
            name: Yup.string()
                .required('Please enter the full name')
                .matches(/^[a-zA-Z]+\s[a-zA-Z]+$/,"Cannot have special characters and seperated with space"),
            
            phone: Yup.number()
                .required('Please enter the phone number'),
            email: Yup.string()
                .email('Invalid email Address')
                .required('Please enter the email address'),
            address: Yup.string()
                .required('Please fill the address')

        }),
        onSubmit: values => {


       
            action({
                variables:{
                    email: values.email, 
                    contactNo: values.phone, 
                    address: values.address
                } 
            }).catch(err =>{
                swal({
                    title: "Error",
                    text: "Error occurred in initiating appointment",
                    icon: "warning",
                    button: {
                      text: "Close",
                      closeModal: true,
                    }, 
                    dangerMode: true  
                })
            })

        }
    })





    return(  
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">

                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Employee" reason="Edit" />
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
                                                                <input type="text" className="form-control" value={formik.values.name} id="name" placeholder="Full Name" onChange={formik.handleChange} onBlur={formik.handleBlur} required disabled/>
                                                                { formik.touched.name && formik.errors.name ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.name}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="phone">Phone Number</label>
                                                                <input type="tel" className="form-control" value={formik.values.phone} id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
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
                                                    {content ?<div className="col-md-6">    
                                                   
                                                                <ProfileCard 
                                                                    id={content._id} 
                                                                    edit={true} 
                                                                    title="Personal Info" 
                                                                    name = {content.name}
                                                                    nic = {content.nic}
                                                                    contact ={content.contact_no}
                                                                    address = {content.address}
                                                                />
                                                            
                                                    </div>:null}
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                        
                                            </form>
                                            </div>
                                        </div>
                                 
                                    </div>
                                </div>
                                {/*<!-- [ Basic info ] end -->*/}

                                {/* <!-- [ photo form ] start -->*/}
                                {content ?
                                <>
                                
                                <ChangeCard
                                    title ='Change profile'
                                    setID = {setID}
                                    childComponent ={<PhotoUpdate/>}
                                    id = {id}
                                    content = {[content]}
                                    type={type}

                                />
                                </>
                                :null}
                                {/*<!-- [ photo form ] end --> */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee;
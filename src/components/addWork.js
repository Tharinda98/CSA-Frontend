import BreadCrumb from './breadcrumb';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function AddWorkerForm({type}){

    const [id,setID] = useState('');



    

   
    const formik = useFormik({
        initialValues:{
           
            jobTitle:'',
            description:'',
            
            phone:'',
            address:'',
            customerId:'',
            
        },validationSchema: Yup.object({
            
            
            jobTitle:Yup.string()
                .required("Please give a title"),
            description: Yup.string()
                .required("Please give a short description"),
            phone: Yup.number()
                .required('Please enter the phone number'),
           
            address: Yup.string()
                .required('Please fill the address'),
            customerId: Yup.string()
                .required('Please enter the Worker ID')
                .matches(/^[\w\d]+$/,"can only have letters and digits"),
        }),
        onSubmit: values => {

        
                const work = values;
                
                console.log(work)
                alert(JSON.stringify(work))

                fetch('http://localhost:8000/serviceprovider/addWork',{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(work)
                }).then(()=>{
                    alert("Successfully submitted"); 
                }).catch((err)=>{
                    console.log(err);
                })
                
            
        }
    })





    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">

                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Service Provider" reason="Schedule" />
                        {/*<!-- [ breadcrumb ] end -->*/}

                        <div className="main-body">
                            <div className="page-wrapper">

                                {/*<!-- [ Basic info ] start -->*/}
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Schedule Work</h5>
                                            </div>
                                            <div className="card-body">
                                                
                                                <div style={{alignContent:"center"}}>
                                                    <Calendar selectRange="True"/>
                                                </div>
                                                <hr/>
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6">

                                                            
                                                            <div className="form-group">
                                                                <label htmlFor="jobTitle">Job Title</label>
                                                                <input type="text" className="form-control" value={formik.values.jobTitle} id="jobTitle" aria-label="Enter job title" placeholder="Job Title" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                { formik.touched.jobTitle && formik.errors.jobTitle ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.jobTitle}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="description">Job Description</label>
                                                                <textarea className="form-control" id="description" rows="5" value={formik.values.description} aria-label="Enter description" onChange={formik.handleChange} onBlur={formik.handleBlur} required></textarea>
                                                                {formik.touched.description && formik.errors.description ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.description}</small>: null}
                                                            </div>
                                                            
                                                            
                                                            

                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        

                                                            <div className="form-group">
                                                                <label htmlFor="customerId">Customer ID</label>
                                                                <input type="text" className="form-control" id="customerId" value={formik.values.id} aria-label="Enter Customer ID" placeholder="Customer ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.customerId && formik.errors.customerId ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.customerId}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="address">Address</label>
                                                                <input type="text" className="form-control" value={formik.values.address} aria-label="Enter Address" id="address" placeholder="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                { formik.touched.address && formik.errors.address ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.address}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="phone">Customer Contact Number</label>
                                                                <input type="tel" className="form-control" value={formik.values.phone} id="phone" aria-label="Enter phone Number" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.phone && formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                                            </div>

                                                           

                                                            
                                                            
                                                        
                                                            


                                                            
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                        
                                            </form>
                                            </div>
                                        </div>
                                 
                                    </div>
                                </div>
                                {/*<!-- [ Basic info ] end -->*/}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWorkerForm;
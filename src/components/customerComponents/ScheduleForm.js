import BreadCrumb from '../breadcrumb';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useMutation } from '@apollo/client';
import { BOOKING } from '../../GraphQL/customerMutations';
import swal from 'sweetalert';


function ScheduleForm(props){

    const [id,setID] = useState('');
    

    

   
    const formik = useFormik({
        initialValues:{
           
            
            description:'',
            
            district:'',
            address:'',
            
            
        },validationSchema: Yup.object({
            
            
            
            description: Yup.string()
                .required("Please give a short description"),
            district: Yup.string()
                .required('Please enter the district'),
           
            address: Yup.string()
                .required('Please fill the address'),
            
        }),
        onSubmit: values => {

            swal({
                title: "Good job!",
                text: "Your Booking was successful!",
                icon: "success",
                
                });

                // const work = values;
                // console.log(work.address);
                // console.log(props.ID);
                // booking({variables:{to: ""+props.ID,
                //                     workStationAddress: work.address,
                //                     workStationDistrict: work.district,
                //                     description:work.description}});
                
                
                
            
        }
    })

    const[date,setDate]=useState();
    const [booking,{data,loading,error}]=useMutation(BOOKING);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;


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
                                                    <Calendar selectRange="True" minDate={new Date()} onChange={setDate} defaultValue={date}/>
                                                    {console.log({date})}
                                                </div>
                                                <hr/>
                                                <form onSubmit={formik.handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="description">Job Description</label>
                                                                <textarea className="form-control" id="description" rows="5" value={formik.values.description} aria-label="Enter description" onChange={formik.handleChange} onBlur={formik.handleBlur} required></textarea>
                                                                {formik.touched.description && formik.errors.description ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.description}</small>: null}
                                                            </div>
                                                            
                                                            
                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        

                                                            <div className="form-group">
                                                                <label htmlFor="address">Address</label>
                                                                <input type="text" className="form-control" value={formik.values.address} aria-label="Enter Address" id="address" placeholder="Address" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                { formik.touched.address && formik.errors.address ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.address}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="district">District</label>
                                                                <input type="text" className="form-control" value={formik.values.district} id="district" aria-label="Enter your District" placeholder="District" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.district && formik.errors.district ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.district}</small>: null}
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

export default ScheduleForm;


import {useFormik} from 'formik';
import * as Yup from 'yup';


const AddEmployee = () => {


    const formik = useFormik({
        initialValues:{
            name:'',
            nic:'',
            id:'',
            phone:'',
            date:'',
            email:'',
            type:'Moderator',
            password:''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('required'),
            nic: Yup.string()
                .required('required'),
            id: Yup.string()
                .required('required'),
            phone: Yup.number()
                .required('required'),
            email: Yup.string()
                .email('invalid email Address')
                .required('required'),
            password: Yup.string()
                .required('required')
        })
    ,
        onSubmit: values => {
            alert(JSON.stringify(values,null,2))
            const employee = values
        }
    })

    return ( 
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-md-6">

                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" className="form-control" value={formik.values.name} id="name" placeholder="Full Name" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                        {formik.errors.name ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.name}</small>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nic">NIC</label>
                        <input type="text" className="form-control" id="nic" value={formik.values.nic} placeholder="Eg: 987654321v" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                        {formik.errors.nic ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.nic}</small>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" value={formik.values.email} id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                        {formik.errors.email ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.email}</small>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" className="form-control" value={formik.values.phone} pattern="[0-9]{10}" id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                        {formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                    </div>


                   
            </div>
            <div className="col-md-6">
                
                    <div className="form-group">
                        <label htmlFor="workerId">Worker ID</label>
                        <input type="text" className="form-control" id="id" value={formik.values.id} placeholder="Worker ID" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                        {formik.errors.id ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.id}</small>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="joinedDate">Joined Date</label>
                        <input type='date'  className="form-control" id="date" value={formik.values.date} placeholder="DD/MM/YYYY" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                        {formik.errors.date ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.date}</small>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" value={formik.values.password} id="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                        {formik.errors.password ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.password}</small>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword"  placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                        {formik.errors.confirmPassword ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.confirmPassword}</small>: null}
                    </div>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
                
    </form>
     );
}
 
export default AddEmployee;
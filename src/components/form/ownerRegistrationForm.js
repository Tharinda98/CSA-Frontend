import {useFormik} from 'formik';
import * as Yup from 'yup';

import ButtonCard from '../buttonCard';
import Empty from '../empty'
import React,{ useState } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import Loading from '../loading';

const OwnerRegisterForm = ({services,districts,setContent,loading,myServiceArray,setMyServiceArray,workRangeArray,setWorkRangeArray,memberships,setMembershipID,action}) => {



    const [error,setError] = useState('')

    const [service, setService] = useState('');
    const [district, setDistrict] = useState('');


    const addToArray = (e,array,setArray,value,setValue)=>{
        e.preventDefault()

  
        if (array.indexOf(value) === -1 && value.length > 0){
            setArray([...array,value])
            setValue("");
        }else{
            alert("Already Added to the list");
        }
       
    }

    const formik = useFormik({
        initialValues:{
            name:'',
            nic:'',
            phone:'',
            membership:''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Please enter the full name')
                .matches(/^[a-zA-Z]+\s[a-zA-Z]+$/,"Cannot have special characters and seperated with space"),
            nic: Yup.string()
                .required('Please enter the NIC')
                .matches(/^([0-9]{12})$|^([0-9]{9}(v|V))$/,"Enter a valid nic"),
            phone: Yup.string()
                .required('Please enter the phone number')
                .matches(/^([0-9]{10})$/,"Enter a valid phone number "),
            membership: Yup.string()
                .required('Please select a membership')
            
        })
    ,
        onSubmit: values => {

            setMembershipID(values.membership)

            if(values.membership && myServiceArray[0] && workRangeArray[0]){
                action({
                    variables:{
                        ownerName: values.name, 
                        ownerNic: values.nic, 
                        contactNo: values.phone
                    }
                }).catch(err => {
                    alert("Owner Already Exists")
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
                        <h3 className="mb-4">Register Owner</h3>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="workerId">Work Range</label>
                                <div className="input-group mb-3">
                                    < select className="form-control" id="service" defaultValue={service} onChange={(e) => {setService(e.target.value)}} >
                                        <option  value="" disabled></option>
                                            
                                        {services[0] ?

                                            services.map((e)=>{
                                                            
                                                    return <option key={e._id} value={e.service_name}> 
                                                                    {e.service_name} 
                                                            </option>
                                                    })

                                                :
                                                    null
                                                }
                                        </select><div className="input-group-append">
                                            <button onClick={(e) => {addToArray(e,myServiceArray,setMyServiceArray,service,setService)}}
                                                className="btn btn-primary" type="button" aria-label="Click to Add district" title="Click to Add">Add Services</button>
                                        </div>
                                        </div>
                                        {error ? <small id="nameError" className="error form-text text-muted error "> { error }</small>:null}    
                                    </div>

                                    <div className="d-flex row" style={{padding:"10px"}}>

                                        {myServiceArray[0] ? 

                                            myServiceArray.map((e)=>{
                                                return <ButtonCard 
                                                    id={e}  
                                                    key={e}
                                                    array ={myServiceArray}
                                                    setArray ={setMyServiceArray}
                                                />
                                            })
                                        :
                                        <div style={{width:'100%'}} >
                                            <Empty
                                                message="No Services Selected"
                                            />
                                        </div>
                                        }
                                                                
                                        </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6">
                                    <div className="form-group">
                                        <label htmlFor="workerId">Services</label>
                                        <div className="input-group mb-3">
                                            
                                                <select className="form-control" id="service"  defaultValue={district} onChange={(e) => {setDistrict(e.target.value)}}>
                                                    <option  value="" disabled></option>
                                                    
                                                    {districts[0] ?

                                                        districts.map((e)=>{
                                                            
                                                            return <option key={e._id} value={e.districtName}> 
                                                                        {e.districtName} 
                                                                    </option>
                                                        })

                                                    :
                                                        null
                                                    }
                                                </select>
                                            
                                            <div className="input-group-append">
                                            <button onClick={(e) => {addToArray(e,workRangeArray,setWorkRangeArray,district,setDistrict)}}
                                                className="btn btn-primary" type="button" aria-label="Click to Add district" title="Click to Add">Add District</button>
                                            </div>
                                        </div>
                                        {error ? <small id="nameError" className="error form-text text-muted error "> { error }</small>:null}    
                                    </div>
                                    <div className="d-flex row" style={{padding:"10px"}}>

                                        {workRangeArray[0] ? 

                                            workRangeArray.map((e)=>{
                                                return <ButtonCard 
                                                    id={e}  
                                                    key={e}
                                                    array ={workRangeArray}
                                                    setArray ={setWorkRangeArray}
                                                />
                                            })
                                        :
                                        <div style={{width:'100%'}} >
                                            <Empty
                                                message="No Districts Selected"
                                            />
                                        </div>
                                        }
                                                                
                                    </div>
                        </div>
                    </div>

                    <hr/>
                    <br/>
                    
                    <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-xl-6">
                                    <div>
                                        Owner Info
                                        <hr/>
                                        <br/>
                                    </div>
                                    <div className="form-group" style={{marginBottom:10 }}>
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" className="form-control" value={formik.values.name} id="name" placeholder="Eg: Jhon Wick" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        {formik.touched.name && formik.errors.name ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.name}</small>: null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nic">NIC</label>
                                        <input type="text" className="form-control" id="nic" value={formik.values.nic} placeholder="Eg: 987654321v" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        {formik.touched.nic && formik.errors.nic ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.nic}</small>: null}
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" className="form-control" value={formik.values.phone} pattern="[0-9]{10}" id="phone" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                        {formik.touched.phone && formik.errors.phone ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.phone}</small>: null}
                                    </div>
                                    
                                



                                
                            </div>
                            <hr/>
                            <div className="col-sm-12 col-md-6 col-xl-6" style={{margin:'auto',borderWidth:2,borderColor:'black'}}>
                                <div>
                                    Choose the Membership
                                </div>
                                <hr/>
                                {!loading ? memberships ? memberships.map((e)=>{


                                    return (
                                        <React.Fragment key={e._id}>
                                            <div  style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>
                                                <div className="form-group text-center" style={{marginBottom:0}}>
                                                    <div className="checkbox checkbox-fill d-inline" >
                                                        <input type="radio" name="membership" id="membership" value={e._id} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        <label htmlFor="checkbox-fill-1" className="cr"> &nbsp; {e.membership_name} </label>
                                                    </div>
                                                </div>
                                                <div className="d-flex" style={{justifyContent:'space-between',marginBottom:0}}>
                                                    <div className="form-group text-left" style={{margin:'none'}}>
                                                        <div className="d-inline" >
                                                            period: {e.membership_period}
                                                        </div>
                                                    </div>
                                                    <div className="form-group text-right" >
                                                        <div className="d-inline" >
                                                            Membership Value: {e.membership_value}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group text-center" style={{marginBottom:0}}>
                                                    <div className="form-group text-center" >
                                                            <div className="d-inline" >
                                                                Description:
                                                            </div>
                                                            <br/>
                                                            <div className="d-inline" >
                                                                {e.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <hr/>

                                        </React.Fragment>

                                    )

                                }):
                                    <Empty/>
                                :<Loading/>
                                }
                                {formik.touched.membership && formik.errors.membership ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.membership}</small>: null}
                                   
                                
                                    
                            </div>
                        </div>
                        
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary shadow-2 mb-4"> Next </button>
                        </div>
                                
                    </form>

                    
                    <div className="text-center">
                        
                        <p className="mb-0 text-muted" style={{fontStyle:'italic',textDecoration:'underline'}}>Allready have an account? 
                            <Link to="/siginin" style={{color:'#038fcf',fontStyle:'italic',textDecoration:'underline'}}> Log in</Link>
                        </p>
                    </div>
                </div>
            </div>

     );
}
 
export default OwnerRegisterForm;
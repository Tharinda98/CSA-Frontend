import BreadCrumb from '../../breadcrumb';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { CHECK_WORK,CHECK_USER } from '../../../GraphQL/Queries';



function AddWorkerForm({type,action,workerId,setWorkerId,checkWorker}){

    const {id} = useParams();

    const [Id,setID] = useState('');

    
    


    // check for appointment id exist
    const [appointmentId,setappointmentId] = useState('')
    const [appointmentError,setAppointmentError] = useState()
    
    const ChechWork = useQuery(CHECK_WORK,{
        variables:{
            appointmentId:appointmentId
        }
    })

    useEffect(()=>{
        
        if(appointmentId){
            ChechWork.refetch({
                appointmentId:appointmentId
            }).then((data) => {
                
                if(data.data && data.data.CheckAppointmentID){
                    setAppointmentError('')
                  
                }else{
                    setAppointmentError('choose another appointmentId')
                }
            })
        }
    
    },[appointmentId]);

    //check worker id exist --not implemented
    const [workerArray,setWorkerArray] = useState([]);
    const [workerArrayError,setWorkerArrayError] = useState('');
    const [worker,setWorker] = useState('');
    const [workerError,setWorkerError] = useState('');


    const ChechWorker = useQuery(CHECK_USER,{
        variables:{
            username:worker
        }
    })

    useEffect(()=>{
        if(worker){
            ChechWorker.refetch({
                username:worker
            }).then((data) => {
               
                if(data.data && data.data.CheckUsername){
                    setWorkerError('')
                   
                }else{
                    setWorkerError('choose a valid worker')
                }
            })
        }
    
    },[worker]);
    
    
    
    
    const updateWorkerArray = (e) =>{
        
        addToArray(e,workerArray,setWorkerArray,worker,setWorker)
        if(e.target.value){  
            setappointmentId(e.target.value)
                
        }else{
                setWorkerError('Please add the user name')
                
        }
    }
    
        
    const addToArray = (e,array,setArray,value,setValue)=>{
        e.preventDefault()

        if (array.indexOf(value) === -1 && value.length > 0){
            setArray([...array,value])
            setValue("");
        }else{
            alert("Already Added to the list");
        }
       
    }

    //check worker id exist end --not implemented
    
    const formik = useFormik({
        initialValues:{
            bookingID:id,
            workId:'',
            estimation:'',
            date:'',
            estimation_cost:''
        },validationSchema: Yup.object({
            
            
            date:Yup.date()
                .required("Please select a date"),
            estimation: Yup.number()
                .required('Please enter duration period')
                .min(1,'Please enter a valid period'),
            estimation_cost: Yup.number()
                .required("Please enter the estimation cost")
                
            
        }),
        onSubmit: values => {

            
           //values.workers = workerArray;
            values.estimation = String(values.estimation)
            values.estimation_cost = parseFloat(String(values.estimation_cost))
            values.workId = appointmentId
                
           alert(values.estimation_cost)

            if(!appointmentError && appointmentId){
                action({
                    variables:values
                }).catch(err =>{
                    alert("Error occurred")
                })
            }else{

                    if (!appointmentId){
                        setAppointmentError("Please assign a appointment ID")
                    }
                    // if (workerArray[0]){
                    //     setWorkerArrayError("Please add a worker")
                    // }
                }
               
                
        }
    })





    return(  
        <div className="pcoded-main-container main-container">
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
                                                                <label htmlFor="workId">Work ID</label>
                                                                <input type="text" className="form-control" id="workId"  aria-label="Enter work Id" placeholder="Work ID"  onBlur={(e)=>{setappointmentId(e.target.value)}} onChange={(e)=>{setAppointmentError('')}} required/>
                                                                {appointmentError ? <small id="nameError" className="error form-text text-muted error "> { appointmentError }</small>:null} 
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="estimation">Estimation(In days)</label>
                                                                <input type="Number" className="form-control" value={formik.values.estimation} min="1" aria-label="Enter estimation in days" id="estimation" placeholder="Estimation" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.estimation && formik.errors.estimation ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.estimation}</small>: null}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="date">Joined Date</label>
                                                                <input type='date'  className="form-control" id="date" value={formik.values.date}  onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.date && formik.errors.date ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.date}</small>: null}
                                                            </div> 
                                                            <div className="form-group">
                                                                <label htmlFor="estimation_cost">Estimation(Costs In Rs.)</label>
                                                                <input type="Number" className="form-control" value={formik.values.estimation_cost} min="1" aria-label="Enter estimation in days" id="estimation_cost" placeholder="Estimation" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
                                                                {formik.touched.estimation_cost && formik.errors.estimation_cost ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.estimation_cost}</small>: null}
                                                            </div>

                                                        
                                                    </div>
                                                    <div className="col-md-6">
                                                        
                                                            
                                                 
                                                        {/*                                                             

                                                            <div className="form-group">
                                                                <label htmlFor="workerId">Worker ID</label>
                                                                <div className="input-group mb-3">
                                                                    <input type="text" className="form-control" placeholder="Add worker ID" aria-label="Add worker ID" aria-describedby="Add worker ID" onBlur={(e)=>{setWorker(e.target.value)}} />
                                                                    <div className="input-group-append">
                                                                    <button onClick={(e) => {updateWorkerArray(e);}}
                                                                        className="btn btn-primary" type="button" aria-label="Click to Add Workers" title="Click to Add">Add Workers</button>
                                                                    </div>
                                                                </div>
                                                                {workerError ? <small id="nameError" className="error form-text text-muted error "> { workerError }</small>:null}    
                                                            </div>

                                                            
                                                            <div className="d-flex row" style={{padding:"10px"}}>

                                                                {workerArray[0] ? 

                                                                    workerArray.map((e)=>{
                                                                        return <ButtonCard 
                                                                            id={e}  
                                                                            key={e}
                                                                            array ={workerArray}
                                                                            setArray ={setWorkerArray}
                                                                        />
                                                                    })
                                                                :
                                                                <div style={{width:'100%'}}>
                                                                    <Empty
                                                                        message="No Worker Assigned"
                                                                    />
                                                                </div>
                                                                }
                                                                
                                                            </div>
                                                        
                                                             */}


                                                            
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary" style={{float:'right'}}>Submit</button>
                                                        
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
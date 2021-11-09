import BreadCrumb from "../../breadcrumb";

import React, {useEffect, useState} from "react";

import ServiceRow from "./serviceRow";
import Empty from "../../empty";
import Loading from "../../loading";
import DistrictRow from "./districtRow";



const EditServiceInfo = ({content,addService,addDistrict,SPloading,serviceList,delService,delDistrict}) => {

    const [error,setErr] = useState();

    const [district,setDistrict] = useState('');
    const [service,setService] = useState('');
    const [services,setServices] = useState([]);
    const [SPServices,setMyServices] = useState([]);
    const [workRanges,setWorkRange] = useState([]);





    useEffect(()=>{
        if(content){
            setMyServices(content.service)
            setWorkRange(content.workingRange)
        }
    },[content])

    useEffect(()=>{
        if(serviceList){
            
            setServices(serviceList)

        }
    },[serviceList])


    



    
        
   
    const submitDistrict = (e)=>{
        e.preventDefault()
        
        if (workRanges.indexOf(district) === -1){
            addDistrict({
                variables:{
                    district:district
                }
            }).then(res =>{
                window.location.reload()
            })
        }else{
            alert("Already Exist");
        }
    }

    const submitService = (e)=>{
        e.preventDefault()
        
        if (SPServices.indexOf(service) === -1){
        addService({
            variables:{
                service:service
            }
        }).then(res =>{
            window.location.reload()
        })
        }else{
            alert("Already exist")
        }
    }



    
    return ( 
        <div className="pcoded-main-container main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/*<!-- [ breadcrumb ] start -->*/}
                    <BreadCrumb type="Services"  />
                    {/*<!-- [ breadcrumb ] end -->*/}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/*<!-- [ Main Content ] start -->*/}


                            <div className="card yearly-sales">
                                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                    <div className="card-header">
                                        <h5>Registered Services</h5>
                                    </div>
                                    <hr/>

                                {!SPloading ?

                                    
                                    SPServices && SPServices[0] ?
                                        SPServices.map((e)=>{
                                            return (
                                                
                                            <React.Fragment key={e} >
                                                <ServiceRow
                                                    service={e}
                                                    action = {delService}
                                                />
                                                <hr/>
                                            </React.Fragment>
                                            )
                                        })
                                    :
                                        <Empty
                                            message = "No services found"
                                        />
                                :
                                <Loading/>
                                }
                                

                                    <div className="col-md-12 col-xl-12" style={{marginBottom:"30px"}}>
                                    {/* <form  style={{marginTop:"50px"}}>
                                            <div className="form-group">
                                                <label htmlFor="Title">Name</label>
                                                <input type="text" className="form-control"  id="jobTitle" aria-label="Enter job title" placeholder="Job Title"  required/>
                                                <small id="nameError" className="error form-text text-muted error "> </small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <textarea className="form-control" id="description" rows="5"  aria-label="Enter description"  required></textarea>
                                                <small id="nameError" className="error form-text text-muted error "> </small>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form> */}
                                        <form style={{marginTop:"50px"}}>
                                         <div className="form-group" >
                                                <label htmlFor="service"> </label>
                                               
                                                <select className="form-control" id="service" defaultValue={service} onChange={(e) => {setService(e.target.value)}}>
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
                                                </select>
                                                </div>
                                                { error ? <small id="districtError" className="error form-text text-muted error "> {error}</small>: null}
                                            <div style={{margin:'auto',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
                                                <button type="submit" onClick={submitService } className="btn btn-primary" style={{marginBottom:"30px",width:'150px'}}>Add Service</button>
                                            </div>
                                        </form>
                                        </div>

                                </div>
                            </div>

                            <div className="card yearly-sales">
                                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                    <div className="card-header">
                                        <h5>Available districts</h5>
                                    </div>
                                    
                                    <div className="row">
                                    
                                    {!SPloading ?

                                    
                                    workRanges && workRanges[0] ?
                                    workRanges.map((e)=>{
                                            return (
                                                
                                            <React.Fragment key={e} >
                                                <DistrictRow
                                                    district={e}
                                                    action = {delDistrict}
                                                />
                                                <hr/>
                                            </React.Fragment>
                                            )
                                        })
                                    :
                                        <Empty
                                            message = "No services found"
                                        />
                                    :
                                    <div className="col-sm-12 col-md-7 col-xl-8">
                                    <Loading/>
                                    </div>
                                    }
                                    
                                    

                                    <div className="col-sm-8 col-md-5 col-xl-4">
                                        <form >
                                            <div className="form-group">
                                                <label htmlFor="district"> Districts</label>
                                               
                                                <select className="form-control" id="exampleFormControlSelect1" defaultValue={district} onChange={(e) => {setDistrict(e.target.value)}}>
                                                    <option value="" disabled></option>
                                                    <option>Jaffna</option>
                                                    <option>Mannar</option>
                                                    <option>Ampara</option>
                                                    <option>Badulla</option>
                                                    <option>Batticaloa</option>
                                                    <option>Colombo</option>
                                                    <option>Galle</option>
                                                    <option>Gampaha</option>
                                                    <option>Hambantota</option>
                                                    <option>Kalutara</option>
                                                    <option>Kandy</option>
                                                    <option>Kegalle</option>
                                                    <option>Kilinochchi</option>
                                                    <option>Kurunegala</option>
                                                    <option>Matale</option>
                                                    <option>Matara</option>
                                                    <option>Monaragala</option>
                                                    <option>Mullaitivu</option>
                                                    <option>Nuwara Eliya</option>
                                                    <option>Polonnaruwa</option>
                                                    <option>Puttalam</option>
                                                    <option>Ratnapura</option>
                                                    <option>Trincomalee</option>
                                                    <option>Vavuniya</option>
                                                    <option>Anuradhapura</option>
                                                </select>
                                                </div>
                                                { error ? <small id="districtError" className="error form-text text-muted error "> {error}</small>: null}
                                           
                                            <button type="submit" onClick={submitDistrict } className="btn btn-primary" style={{float:"right",marginBottom:"30px"}}>Add</button>
                                        </form>
                                    </div>

                                    </div>

                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EditServiceInfo;
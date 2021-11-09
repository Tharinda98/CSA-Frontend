import BreadCrumb from '../../breadcrumb';
import PasswordChanger from '../../form/changePassword';
import ChangeCard from '../../form/changeCard';
import WorkerInfoCard from '../../profile/workerInfoCard';

import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Empty from '../../empty';
import Loading from '../../loading';
import ElementCard from '../elementCard';

function EditEmployeeInfo({type,content,loading,id,setID,action}){

   
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

                                {/*<!-- [ password update form ] start -->*/}
                                    

                        <div className="row"> 
                                    <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Edit Password</h5>
                                            </div>
                                        
                                        
                                            {content ?
                                            <div className="card-block px-0 py-3">
                                        
                                                        <div className="row d-flex" style={{margin:'auto',alignItems:'center',justifyContent:'center'}}>

                                                            { content[0] ? 

                                                            content.map ((e) => {
                                                            
                                                            return <ElementCard
                                                                key = {e._id}
                                                                content = {e}
                                                                type = {type}
                                                                childComponent = {
                                                                    <PasswordChanger
                                                                        id={id}
                                                                        action = {action}
                                                                    />    
                                                                }
                                                                    
                                                            />})
                                                            
                                                            :
                                                            <div style={{width:'100%'}}>
                                                                <Empty/>
                                                            </div>
                                                            }



                                                        
                                                                                            
                                                        </div>

                                            </div> :
                                                <Loading/>
                                            }
                                                                        
                                        </div>
                                    </div>
                                </div>

                                {/* <ChangeCard
                                    title ='Change Password'
                                    setID = {setID}
                                    id ={id}
                                    content = {content}
                                    loading = {loading}
                                    type = {type}
                                    action = {action}
                                    
                                    
                                    childComponent ={
                                        <PasswordChanger
                                            id={id}
                                        />}
                                /> */}
                                {/*<!-- [ password update form ] end -->*/}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEmployeeInfo;
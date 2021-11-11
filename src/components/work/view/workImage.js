import BreadCrumb from '../../breadcrumb';

import PhotoUpdate from '../../form/changePhoto';
import ChangeCard from '../../form/changeCard';
import ProfileCard from '../../profile/profileCard';

import WorkPhotosUpdate from './workImageUpdate';

import SearchBar from '../../searchBar';


import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { useQuery } from "@apollo/client";

import {GET_WORKIMAGES} from '../../../GraphQL/Queries'

function WorkImage({type}){

    // const upload = ()=>{

    //     alert(id,selectedFile)
    //     // uploadProfile({
    //     //     variables:selectedFile
    //     // })

    // }


    const {id} = useParams()

    const [Id,setID] = useState(id);


    // const [content,setContent] = useState();
    // const fetchContent = useQuery(GET_WORKIMAGES,{
    //     variables:{ id:Id }
    // });

    // useEffect(() => {
    //     setID(Id)

    // }, [id])

    // useEffect(()=>{
    //     
    //     if(Id){
    //         setID(Id)
    //         fetchContent.refetch({
    //             id:Id
    //         }).then( datas => {

    //             if(datas){
    //                 setContent(datas.data.getWorkImage) //Need to Change
    //             }
    
    //         })
    //     }
        
    // },[Id]);

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

                                {/*<!-- [ photo form ] start -->*/}
                                <div className="row"> 
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5></h5>
                                        </div>
                                        <div className="" style={{marginTop:'20px'}}>
                                            {/* <SearchBar placeholder="Enter worker ID ..." setCardContent={setCardContent} setId={setID} id={id}/>
                                        */}
                                        <SearchBar placeholder="Enter work ID ..." id={Id} setId={setID}/>
                                                                
                                        </div>
                                        
                                        <div className="card-block px-0 py-3">
                                            <div className="">
                                                <div className="">
                                                    <div className="d-flex" >

                                                    <div className="row" style={{padding:"30px"}}>

                                                        <div>
                                                            <img className="img" style={{width:"250px",height:"200px",margin:"20px"}} src="/assets/images/user/profile.jpg" alt="Generic placeholder"/>
                                                        </div>

                                                        <div >
                                                            <img style={{width:"250px",height:"200px",margin:"20px"}} className="img" src="/assets/images/user/profile1.jpeg" alt="Generic placeholder"/>
                                                        </div>
                                                    </div>

                                    
                            
                                                    
                                                        
 
                    
                                                                       
                                                    </div>

                                                    <div className="row" style={{marginTop:"50px"}}>
                                                        <div className="col-xl-8" style={{margin:'auto'}}>
                                                            <WorkPhotosUpdate />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
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

export default WorkImage;
import Empty from "../../components/empty";
//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';
import ChangeCard from "../../components/form/changeCard";
import ElementCard from "../../components/employee/elementCard";

import PhotoUpdate from "../../components/form/changePhoto";
import {useEffect, useState} from 'react';
import swal from "sweetalert";

import { useQuery } from "@apollo/client";
import { PROVIDER_CARD } from "../../GraphQL/Queries";
import Loading from "../../components/loading";

const EditLogo = () => {

    const {error,loading,data} = useQuery(PROVIDER_CARD)
    const [content,setContent] = useState()

    useEffect(()=>{
        if(data){  
           
            setContent([data.getMySP])
        }
    },[data])

    //error
    useEffect(()=>{

        if(error){
            swal({
                title: "Error",
                text: "Error occurred in retrieving",
                icon: "warning",
                button: {
                text: "Close",
                closeModal: true,
                }, 
                dangerMode: true  
            })
        }

    },[error])

    return (
    <div>
             {/* [ Pre-loader ] start */}
             <Preloader/>
            { /* [ Pre-loader ] End 
            [ navigation menu ] start */}
            <NavBar/>
            {/* </div> [ navigation menu ] end 
            [ Header ] start */}
            <Header/>
            {/*<!-- [ Header ] end --> */}
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        {!loading ?
                        <div className="pcoded-inner-content">
                        {/* <!-- [ photo form ] start -->*/}

                            {content ?
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Edit Logo</h5>
                                    </div>
                                    <div style={{width:'80%',margin:'auto',marginBottom:50,marginTop:30}}>
                                        <PhotoUpdate/>
                                    </div>
                                </div>
                            </div>
                            
                                :
                                <Empty/>
                            }
                        </div>
                        :
                            <Loading/>
                        }
                    </div>
                </div>
            </div>
        {/*<!-- [ photo form ] end --> */}
    </div>
     );
}
 
export default EditLogo;
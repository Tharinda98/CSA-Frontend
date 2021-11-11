import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import EditEmployeeInfo from "../../components/employee/edit/editWorkerInfo";

import {useEffect, useState} from 'react';
import { EDIT_PASSWORD } from "../../GraphQL/Mutations";


//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';
import { PROVIDER_CARD } from "../../GraphQL/Queries";

function EditWorkerInfo() {

    const {error,loading,data} = useQuery(PROVIDER_CARD)
    const [content,setContent] = useState()

    useEffect(()=>{
        if(data){      
            setContent([data.getMySP])
        }
    },[data])

    const [setPassword,{loadingPaddwordEdit,errorPasswordEdit}] = useMutation(EDIT_PASSWORD,{
        onCompleted:data => {
            window.location.href="/success/"
        }
    })


    return (
        <div>
             {/* [ Pre-loader ] start */}
             <Preloader/>
            { /* [ Pre-loader ] End 
            [ navigation menu ] start */}
            <NavBar/>
            {/* [ navigation menu ] end 
            [ Header ] start */}
            <Header/>
            {/*<!-- [ Header ] end --> */}
            {/*<!-- [ Main Content ] start -->*/}
                <EditEmployeeInfo 
                    type="Provider"
                    
                    content = {content}
                    action = {setPassword}
                />
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditWorkerInfo;
  
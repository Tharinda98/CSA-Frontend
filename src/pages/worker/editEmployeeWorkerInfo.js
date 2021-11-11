import { useQuery,useMutation } from "@apollo/client";
import { useEffect,useState } from "react";
import EditEmployeeInfo from "../../components/employee/edit/editWorkerInfo";

import swal from "sweetalert";
//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';
import { EDIT_PASSWORD } from "../../GraphQL/workerMutations";
import { WORKER_CARD } from "../../GraphQL/workerQueries";

function EditWorkerInfo() {

    //retrieve
    const {error,loading,data} = useQuery(WORKER_CARD)
    const [content,setContent] = useState()

    useEffect(()=>{
        if(data){      
            setContent([data.worker_me])
        }
    },[data])

        // error occurred
        useEffect(()=>{
        
            if(error){
                swal({
                    title: "Error",
                    text: "Error occurred in retrieving please refresh",
                    icon: "warning",
                    button: {
                      text: "Close",
                      closeModal: true,
                    }, 
                    dangerMode: true  
                })
            }
    
        },[error])

    const [setPassword,{loadingPaddwordEdit,errorPasswordEdit}] = useMutation(EDIT_PASSWORD,{
        
    })

    return (
        <div>
                     {/* [ Pre-loader ] start */}
         <Preloader/>
        { /* [ Pre-loader ] End 

          [ navigation menu ] start */}
        <NavBarWorker/>
        {/* </div> [ navigation menu ] end 

        [ Header ] start */}
        <Header/>
        {/*<!-- [ Header ] end --> */}
            {/*<!-- [ Main Content ] start -->*/}
                <EditEmployeeInfo 
                    type="Worker"
                    content = {content}
                    action = {setPassword}
                />
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditWorkerInfo;
  
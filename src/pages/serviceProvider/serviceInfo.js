import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import EditServiceInfo from "../../components/serviceprovider/edit/serviceInfo";
import { ADD_DISTRICT, ADD_SERVICE, REMOVE_DISTRICT, REMOVE_SERVICE } from "../../GraphQL/Mutations";
import { GET_SPSERVICE } from "../../GraphQL/Queries";

import swal from 'sweetalert';

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

const ServiceInfo = () => {


    const[pushService,{loading:loadingService,error:errorService}] = useMutation(ADD_SERVICE,{
        onCompleted:data => {

        }
    })

    const[pushDistrict,{loading:loadingDistrict,error:errorDistrict}] = useMutation(ADD_DISTRICT,{
        onCompleted:data => {

        }
    })

    const[RemoveDistrict,{loading:loadingRemoveDistrict,error:errorRemoveDistrict}] = useMutation(REMOVE_DISTRICT,{
        onCompleted:data => {
            if(data.RemoveDistrict){
                window.location.reload();
            }
        }
    })

    const[RemoveService,{loading:loadingRemoveService,error:errorRemoveService}] = useMutation(REMOVE_SERVICE,{
        onCompleted:data => {
            if(data.RemoveService){
                window.location.reload();
            }
        }
    })



    const [content,setContent] = useState([]);
    const [services,setServices] = useState([]);

    //retrieve content
    const {error,loading,data} = useQuery(GET_SPSERVICE);

    useEffect(()=>{
        if(data){
            
            setContent(data.getMySP)
            setServices(data.getServices)
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
            {/*<!-- [ Content ] start --> */}
            <EditServiceInfo
                serviceList = {services}
                content = {content}
                addService = {pushService}
                addDistrict = {pushDistrict}
                delService = {RemoveService}
                delDistrict = {RemoveDistrict}
                SPloading = {loading}
            />
            {/*<!-- [ Content ] end --> */}
        </div>
     );
}
 
export default ServiceInfo;
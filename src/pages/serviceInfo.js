import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import EditServiceInfo from "../components/serviceprovider/edit/serviceInfo";
import { ADD_DISTRICT, ADD_SERVICE, REMOVE_DISTRICT, REMOVE_SERVICE } from "../GraphQL/Mutations";
import { GET_SERVICE, GET_SPSERVICE } from "../GraphQL/Queries";

const ServiceInfo = () => {


    const[pushService,{loadingService,errorService}] = useMutation(ADD_SERVICE,{
        onCompleted:data => {

        }
    })

    const[pushDistrict,{loadingDistrict,errorDistrict}] = useMutation(ADD_DISTRICT,{
        onCompleted:data => {

        }
    })

    const[RemoveDistrict,{loadingRemoveDistrict,errorRemoveDistrict}] = useMutation(REMOVE_DISTRICT,{
        onCompleted:data => {
            if(data.RemoveDistrict){
                window.location.reload();
            }
        }
    })

    const[RemoveService,{loadingRemoveService,errorRemoveService}] = useMutation(REMOVE_SERVICE,{
        onCompleted:data => {
            if(data.RemoveService){
                window.location.reload();
            }
        }
    })

    

    const {error,loading,data} = useQuery(GET_SPSERVICE);

    const [content,setContent] = useState([]);
    const [services,setServices] = useState([]);

    
    useEffect(()=>{
        if(data){
            
            setContent(data.getMySP)
            setServices(data.getServices)
        }    
    },[data])
    
    return ( 
        <EditServiceInfo
            serviceList = {services}
            content = {content}
            addService = {pushService}
            addDistrict = {pushDistrict}
            delService = {RemoveService}
            delDistrict = {RemoveDistrict}
            SPloading = {loading}
        />
     );
}
 
export default ServiceInfo;
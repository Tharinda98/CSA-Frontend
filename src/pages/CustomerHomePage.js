
import BreadCrumb from "../components/breadcrumb";
import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import SPCard from "../components/customerComponents/SPCard";
import Header from "../components/header";
//gql 
import {useQuery,gql} from '@apollo/client';
import {GET_FILTERED_SP_LIST,ME} from "../GraphQL/Queries"

const CustomerHomePage=()=>{
    //query hooks
    const {data, loading, error}= useQuery(ME);

    //const {data,loading,error}=useQuery(GET_FILTERED_SP_LIST, {
     //   variables: {district: "", service: ""}
    //});
    //const {data:X,loading:Xl, error:Xe}=useQuery(GET_PROVINCES);
    //const {data:v, loading:vl, error:ve}= useQuery(GET_CUSTOMER_DETAILS);
    //const {data, loading, error}= useQuery(GET_SERVICES);
    if (loading) return <p>Loading</p>;
    if (error) return <p>error!</p>;

    return(
        <div>
            
           
            <NavBarCustomer/>
            {/*header part is connected
            service provider filtering has to get a query*/}
            {/*<Header Provinces={data.showProvinces} Services={data.getServices} /> */}
            
            <div className="pcoded-main-container main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <BreadCrumb type="Customer" reason="Home Page"/>
                                    <div class="row">
                                        
                                        {/* sp are connected but view profile button have to implent
                                        {data.getServiceProviderByDistrictService.map(SP=>(
                                            <SPCard SP_name={SP.name} SP_field={"Plumbing"} SP_location={SP.address} SP_rating={SP.rating}/>
                                        ))}
                                        */}
                                    </div>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default CustomerHomePage;

import BreadCrumb from "../../components/breadcrumb";
import NavBarCustomer from "../../components/customerComponents/NavBarCustomer";
import SPCard from "../../components/customerComponents/SPCard";
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

//gql 
import {useQuery,gql} from '@apollo/client';
import {GET_FILTERED_SP_LIST, GET_DISTRICTS,GET_SERVICES} from "../../GraphQL/customerQueries"
import Preloader from "../../components/preloader";

const CustomerHomePage=()=>{
    //states
    const [province,setProvince]=useState('Select Province');
    const [Filter,setFilter]=useState('Select Filter');
    const [service,setService]=useState('Select Service');
    
    const signOut = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        localStorage.removeItem('refresh');
        window.location.href='/signin'
    }
    // const changeDistrict = (event)=> {
    //     setProvince(event);
    //     console.log(event);
         
    //     console.log(province); 
    //     // refetch({district:event,service:""}).then(value =>{
    //     //     console.log(value);
    //     // });
       
    // } 
    useEffect(()=>{
        if ((province!='Select Province') & (service=='Select Service')){
            refetch({district:province,service:""}).then(value =>{
                console.log(value);
            });
        }
        else if((service!='Select Service') & (province=='Select Province')){
            refetch({district:"",service:service}).then(value =>{
                console.log(value);
            });
        }
        else if((service!='Select Service') & (province!='Select Province')){
            refetch({district:province,service:service}).then(value =>{
                console.log(value);
            });
        }
    })

    // const changeService=(event)=>{
    //     setService(event);
    //     //refetchMethod();
    // }

    // const refetchMethod =()=>{
    //     console.log(province);
    //     if ({province}!='Select Province'){
    //         refetch({district:province,service:""}).then(value =>{
    //             console.log(value);
    //         });
    //     }
    // }

    //query hooks
    //const {data, loading, error}= useQuery(ME);
    const {data,loading,error,refetch}=useQuery(GET_FILTERED_SP_LIST, {
        variables: {district: "", service: ""}
    });

    
    const {data:provinces,loading:Lprovinces, error:Eprovinces}=useQuery(GET_DISTRICTS);
    const services=useQuery(GET_SERVICES);
    //const {data:v, loading:vl, error:ve}= useQuery(GET_CUSTOMER_DETAILS);
    //const {data, loading, error}= useQuery(GET_SERVICES);
    if (loading) return <p>Loading</p>;
    if (Lprovinces) return <p>Loading</p>;
    if (error) return <p>error!</p>;
    if (Eprovinces) return <p>error!</p>;
    if (services.loading) return <p>Loading</p>;
    if (services.error) return <p>error!</p>;

    return(
        <div>
            
            
            <NavBarCustomer/>
            {/*header part is connected
            service provider filtering has to get a query*/}
            {/*<Header Provinces={data.showProvinces} Services={data.getServices} /> */}
            <header className="navbar pcoded-header navbar-expand-lg navbar-light">
            <div className="m-header">
                <a className="mobile-menu" id="mobile-collapse1" href="#" ><span></span></a>
                <Link to="/" className="b-brand">
                       <div className="b-bg">
                           <i className="feather icon-trending-up"></i>
                       </div>
                       <span className="b-title">Customer Service App</span>
                   </Link>
            </div>
            <Link className="mobile-menu" id="mobile-header" to="#0">
                <i className="feather icon-more-horizontal"></i>
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">

                    
                     
                    <li className="nav-item dropdown">
                        <Link className="dropdown-toggle" to="#0" data-toggle="dropdown" >{province}</Link>
                        <ul className="dropdown-menu">
                            {provinces.showDistricts.map(Province=>(
                               <li><Link className="dropdown-item" to="#0" onClick={()=>setProvince(Province.districtName)}>{Province.districtName}</Link></li>
                            ))}
                        </ul>
                    </li>
                    
                    
                    
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Link className="dropdown-toggle" to="#0" data-toggle="dropdown">{service}</Link>
                        <ul className="dropdown-menu">
                            {services.data.getServices.map(service=>(
                                <li><Link className="dropdown-item" to="#0" onClick={()=>setService(service.service_name)}>{service.service_name}</Link></li>
                            ))}
                            </ul>
                    </li>
                    
                    <li>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#0" data-toggle="dropdown"><i className="icon feather icon-bell"></i></Link>
                            <div className="dropdown-menu dropdown-menu-right notification">
                                
                                
                                <div className="noti-footer">
                                    <Link to="/Customer/notifications">show all</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown drp-user">
                            <Link to="#0" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="icon feather icon-settings"></i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right profile-notification">
                                <div className="pro-head">
                                    <img src="/assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile"/>
                                    <span>John Doe</span>
                                    <Link to="/signout" className="dud-logout" title="Logout">
                                        <i className="feather icon-log-out"></i>
                                    </Link>
                                </div>
                                <ul className="pro-body">
                                    {/* <li><Link to="#0" className="dropdown-item"><i className="feather icon-settings"></i> Settings</Link></li> */}
                                    <li><Link to="/Customer/Profile" className="dropdown-item"><i className="feather icon-user"></i> My Profile</Link></li>
                                    <li><Link to={`/Customer/messages`} className="dropdown-item"><i className="feather icon-mail"></i> Messages</Link></li>
                                    <li><button onClick={signOut} className="dropdown-item"><i className="feather icon-lock"></i> Log Out</button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>


            
            
            <div className="pcoded-main-container main-container">
                <div class="pcoded-wrapper">
                    <div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">

                                    <BreadCrumb type="Customer" reason="Home Page"/>
                                    <div class="row">
                                        
                                        {/* sp are connected but view profile button have to implent */}
                                        {data.getServiceProviderByDistrictService.map(SP=>(
                                            <SPCard SP_ID={SP._id} SP_name={SP.name} SP_field={SP.membership.membership_name} SP_location={SP.address} SP_rating={SP.rating}/>
                                        ))}
                                        
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
//components
import Content from '../../components/home';
//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

import { useEffect, useState } from 'react/cjs/react.development';
import { useQuery } from '@apollo/client';
import { SP_DASHBOARD } from '../../GraphQL/Queries';



function Home() {

    const [content,setContent] = useState([]);

    const {error,loading,data} = useQuery(SP_DASHBOARD,{
        variables:{
            offset:2,
            page:1
        }
    });

    useEffect(()=>{
        if(data){
            setContent(data)
        }
    },[data])

    

    // var refresh = window.localStorage.getItem('refresh');
    // if (refresh===null){
    //     window.location.reload();
    //     window.localStorage.setItem('refresh', "1");
    // }
    
    

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
          <Content 
            content={content}
            loading={loading}
            
        /> 
        {/*<!-- [ Main Content ] end --> */}
        </div>
    );
  }
  
  export default Home;
  
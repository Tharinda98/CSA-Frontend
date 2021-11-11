//components
import Content from '../components/home';


import { useEffect, useState } from 'react/cjs/react.development';
import { useQuery } from '@apollo/client';
import { SP_DASHBOARD } from '../GraphQL/Queries';



function Home() {

    //retrive content
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


    // for bootstrap error
    var refresh = window.localStorage.getItem('refresh');
    if (refresh===null){
        window.location.reload();
        window.localStorage.setItem('refresh', "1");
    }

    return (
        <div>
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
  
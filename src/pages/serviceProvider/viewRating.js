import { useQuery } from "@apollo/client";
import { useEffect, useState,useLayoutEffect } from "react";
import ViewRating from "../../components/rating/view/viewRating";
import { GET_REVIEW, GET_SEARCH_REVIEW } from "../../GraphQL/Queries";

//components
import Header from "../../components/header";
import NavBar from '../../components/navbar';
import Preloader from '../../components/preloader';

function ViewReview() {

    const [content,setContent] = useState();
    const [contents,setContents] = useState();
    const [id,setID] = useState('');
    const [page,setPage] = useState(1);
    const [offSet,setOffSet] = useState();
    const limit = 3

    const {error,loading,data} = useQuery(GET_REVIEW,{
        variables:{
            offset:limit,
            page:page
        }
    });

    const fetchContent = useQuery(GET_SEARCH_REVIEW,{
        variables:{
            customerId:id
        }
    })

    useEffect(()=>{
 
        if(data){
            setContent(data.getMyReviews)
            setContents(data.getMyReviews)
            setOffSet(data.getCountReviews[0].Count/limit)
        }

    },[data]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    },[page]);

    useEffect(() => {
        if(id){
            fetchContent.refetch({
                customerId:id
            }).then(res =>{
                
                setContent(res.data.getCustomerReview)
            })
        }else if(contents){
            setContent(contents)
        }
    }, [id])

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
            {/*<!-- [ Main Review Content ] start -->*/}
                <ViewRating 
                    type="Rating"
                    contents = {content}
                    page = {page}
                    setID = {setID}
                    setPage = {setPage}
                    offSet = {offSet}
                    id = {id}
                    loading = {loading}
                />
            {/*<!-- [ Main Review Content ] end -->*/}
        </div>
    );
  }
  
  export default ViewReview;
  
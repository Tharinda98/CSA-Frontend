import BreadCrumb from '../breadcrumb';
//import SearchBar from '../searchBar';
import PaginationBar from '../pagination';
import MessageBar from './messageBar';
import swal from 'sweetalert';



import { useState, useEffect } from "react"


import { dateFormatter } from '../formatter';
import Empty from '../empty';
import Loading from '../loading';
import { useParams } from 'react-router';



const Messager = ({content,setPage,page,offSet,loading,action,toError,To,setTo,setToError,loadingMessages}) => {    

    const {id} = useParams()

    const [message,setMessage] = useState('');
    const [messageError,setMessageError] = useState('');
    
    const [contents,setContent] = useState();

    useEffect(() => {
        setContent(content)
        
    }, [content])



    const messageValidate = (e)=>{
        e.preventDefault()

        if(e.target.value){
            setMessage(e.target.value)
            setMessageError("")
        }else{
            setMessageError('')
            setMessageError("Please enter the message")
        }
    }

   
    const MessageSubmit = (e) =>{
        e.preventDefault()

        if(!To){
            setToError('Please enter the recepient')
            
        } else if (!message){
            setMessageError("Please enter the message")
            return
        }else if (!toError && !messageError){
            action({
                variables:{
                    to: To,
                    message: message
                }
            })
            .catch(err =>{
                swal({
                    title: "Error",
                    text: "Error occurred in confimation",
                    icon: "warning",
                    button: {
                      text: "Close",
                      closeModal: true,
                    }, 
                    dangerMode: true  
                })
            })
        }
    }


    return(  
        <div className="pcoded-main-container main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        {/*<!-- [ breadcrumb ] start -->*/}
                        <BreadCrumb type="Message" reason="view" />
                        {/*<!-- [ breadcrumb ] end -->*/}
                        <div className="main-body">
                            <div className="page-wrapper">
                                {/*<!-- [ Main Content ] start -->*/}
                                <div className="row">
                                    
                                    
                                    {/*<!-- [ view-table ] start -->*/}
                                    {!id ? <div className="col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>View Messages</h5>
                                            </div>
                                            { !loading ?
                                            contents ? <div className="card-block px-0 py-3">
                                                <div className="">
                                                    <div className="">
                                                        <div className="">

                                                        {contents.map(e => {
                                                            

                                      
                                                            return <MessageBar
                                                                By = {e.by}
                                                                received_date = {dateFormatter(e.received_date)}
                                                                message = {e.message}
                                                                read ={e.read}
                                                                key={e._id}
                                                                object={e}
                                                            /> 

                                                            

                                                        })}


                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <Empty/>
                                            : 
                                            <Loading/>
                                            }
                                        <div>
                                            <PaginationBar setPage={setPage} page={page} offSet={offSet}/>
                                            </div>  
                                        </div>
                                    </div>
                                    :
                                    null
                                        }
                                    {/*<!-- [ view-table ] end -->*/}
                                    

                                    {/*<!-- [ view-table ] start -->*/}
                                    <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                                            <div className="card-header">
                                                <h5>Message</h5>
                                            </div>
                                                                        
                                                                        
                                            <div className="" style={{marginBottom:"30px",margin:"auto"}}>
                                            <form onSubmit={MessageSubmit} style={{marginTop:"50px"}}>

                                                <div className="form-group">
                                                    <label htmlFor="to">To</label>
                                                    <input type="text" className="form-control"  id="to" aria-label="Enter the receiver" placeholder="To" onBlur={(e) =>{setTo(e.target.value)}} onChange={(e) =>{setTo(e.target.value)}}/>
                                                    { toError ? <small id="nameError" className="error form-text text-muted error "> {toError}</small>: null}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="description">Message</label>
                                                    <textarea className="form-control" id="description" rows="5"  aria-label="Enter description" onChange={(e) =>{messageValidate(e)}} ></textarea>
                                                    {messageError ? <small id="nameError" className="error form-text text-muted error "> {messageError}</small>: null}
                                                </div>
                                                {!loadingMessages ?
                                                    <button type="submit" className="btn btn-primary" >Submit</button>
                                                :
                                                    <button  className="btn btn-primary" disabled> Loading... </button>
                                                }
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/*<!-- [ view-table ] start -->*/}
                                </div>
                            </div>
                        </div>
                        <hr/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Messager;
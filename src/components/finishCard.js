const FinishCard = ({title,action,workerId,leftDate,loading}) => {

    // const {error,loading,data} = useQuery(GET_LEFTDATE,{
    //     variables:{
    //         workerId:workerId
    //     }
    // });

    // const [removeWorker,{loadingMutation,errorMutation}] = useMutation(REMOVE_EMPLOYEE,{
    //     onCompleted:data=>{
    //         setLeftDate(data.removeWorker)
    //     }
    // });

    // const [leftDate,setLeftDate] = useState(null);

    // useEffect(()=>{
    //     
    //     if(data){
    //         if(data.getWorker)
    //         setLeftDate(data.getWorker.left_date)
    //        
    //     }
        

    // },[data])



    const deleteSubmit = ()=>{
            
            action({
               variables:{
                   workerId:workerId
                }
            })
    }

    return ( 
        <div className="card yearly-sales">
            <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                <div className="card-header">
                    <h5>{title}</h5>
                </div>
                                            
                                            
                <div style={{paddingTop:"20px",float:"right"}}>
                    {!leftDate?
                    !loading ?<button className= "btn btn-mtd btn-danger" onClick={deleteSubmit} style={{width:"200px",height:"25px",padding:'0 0'}}> 
                        Suspend Employee
                        {<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}                     
                    </button>: 
                    <button className= "btn btn-mtd btn-danger" onClick={deleteSubmit} style={{width:"200px",height:"25px",padding:'0 0'}}> 
                        Loading ...
                        {/* {<i className="fas fa-user-slash" style={{paddingLeft:'10px'}}></i>}                      */}
                    </button>:
                    <button className= "btn btn-mtd btn-success" style={{width:"200px",height:"25px",padding:'0 0'}} disabled> 
                        Already Suspended &nbsp;
                        <i className="fas fa-check-circle"></i>
                    </button>}
                </div>
            </div>
        </div>
     );
}
 
export default FinishCard;
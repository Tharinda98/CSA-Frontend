const ServiceRow = ({service,action}) => {


    const remove = (e)=>{
        e.preventDefault()

        action({
            variables : {
                service:service
            }
        }).then(res=>{

        }).catch(err => {
            console.log(err)
        })
    }

    return ( 

        <div className="unread row align-items-center" style={{marginBottom:'15px 0 15px 0'}}>
                                        
            <div className="col-1 col-sm-1 col-md-3 col-xl-3" style={{textAlign:'center',alignItems:'center',verticalAlign:'middle'}}>
                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i> &nbsp;   </h6>
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-xl-5" style={{margin:'10px'}}>
                <p className="m-0">{service}</p>
            </div>
                                        
            <div className="col-12 col-sm-4 col-md-3 col-xl-3" style={{margin:'auto'}}>
                <button onClick={remove} className="label theme-bg2 text-white f-12" style={{float:'right',right:"20px"}}>
                    Remove
                    &nbsp; <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
     );
}
 
export default ServiceRow;
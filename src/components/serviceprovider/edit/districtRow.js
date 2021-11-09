const DistrictRow = ({district,action}) => {
    
    const remove = (e)=>{
        e.preventDefault()
        action({
            variables:{
                district:district
            }
        }).then(res=>{

        }).catch(err => {
            console.log(err)
        })
    }
    
    return ( 
    <div className="col-sm-12 col-md-7 col-xl-8">

        <div className="unread row align-items-center" style={{marginBottom:'15px'}}>
            
            <div className="col-1 col-sm-1 col-md-1 col-xl-1" >
                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>  </h6>
            </div>

            <div className="col-8 col-sm-7 col-md-5 col-xl-5" style={{margin:'10px'}}>
                <p className="m-0">{district}</p>
            </div>
            
            <div className="col-12 col-sm-3 col-md-4 col-xl-3" style={{margin:'10px'}}>
                <button onClick={remove} className="label theme-bg2 text-white f-12" style={{float:'right',right:"20px"}}>
                    Remove
                    &nbsp; <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    </div>
     );
}
 
export default DistrictRow;
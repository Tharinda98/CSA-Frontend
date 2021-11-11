
function Card({title,symbol,count,button}){
    return(
       
            <div className="card yearly-sales">
                <div className="card-block">

                    <div className="d-flex justify-content-between" >
                        <div className="d-flex" style={{display:"flex",marginTop:'10px',verticalAlign:'middle'}}>
                            <div className="d-flex" style={{margin:'0px 20px'}}>
                                <h6 className="f-w-300" style={{verticalAlign:'middle',padding:'0px 10px 10px 0px',margin:'auto',float:'left'}}>  
                                    {title} 
                                </h6>
                                &nbsp; {symbol} 
                            </div>
        
                            {/* <h3 className="f-w-300 d-flex align-items-center ">100</h3> */}
                        </div>
                        <div className="justify-content-end" style={{float:'right',marginTop:'20px'}}>
                            <p className="">&nbsp;{count}</p>
                        </div>
                    </div>
                    {button}
                 </div>
            </div>

    )
}

export default Card;
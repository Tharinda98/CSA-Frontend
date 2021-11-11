const CustomerCard = () => {
    return (  
        <div className="col-xl-7">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 30px 10px 30px'}}>
                    <div className="card-header">
                        <h5>Basic info</h5>
                    </div>
                    <div className="" style={{paddingTop:"25px"}}>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Full Name:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                Thakshayan Thanabalasingam
                            </div>
                        </div>
                        <hr/>
                        
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                NIC:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                988765432125
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Email:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                Thakshayan007@gmail.com
                            </div>
                        </div>
                        <hr/>
                        <div className="row" style={{display:"flex"}}>
                            <div className="col-4 col-md-4 col-sm-4">
                                Address:
                            </div>
                            <div className="col-8 col-md-8 col-sm-8">
                                Sample Address
                            </div>
                        </div>
                    </div>
                    <div style={{paddingTop:"20px",float:"right"}}>
                        <button className="btn btn-mtd btn-primary" style={{width:"100px",height:"25px",padding:'0 0'}}> 
                            View 
                            <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                        </button>
                    </div>
                   
                 </div>
            </div>
        </div>
    );
}
 
export default CustomerCard;

const RegForm=()=>{
    return(
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                            <h5>Service Provider Details</h5>
                                            </div>
                                            <div className="card-body">
                                                <h5>Service Provider Name</h5>
                                                
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <form>
                                                        <div className="form-group">
                                                            <label for="exampleInputEmail1">User Name</label>
                                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="JET Constructions" readOnly/>
                                                           
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="exampleInputPassword1">Field</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Plumbing Work"/>
                                                        </div>
                                                        <div className="form-group form-check">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                            <label className="form-check-label" for="exampleCheck1">Checked By Admin</label>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary">Approve</button>
                                                        </form>
                                                    </div>
                                                    <div className="col-md-6">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>District</label>
                                                            <input type="text" className="form-control" placeholder="Colombo"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="exampleFormControlSelect1">Profile Type</label>
                                                            <select className="form-control" id="exampleFormControlSelect1">
                                                                <option>Gold</option>
                                                                <option>Silver</option>
                                                                <option>Platinum</option>
                                                                <option>Free</option>
                                                                
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="exampleFormControlTextarea1">Address</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="No.64,Jayamawatha,Colombo 4"></textarea>
                                                        </div>
                                                    </form>
                                                </div>
                                                </div>
                                                
                                            </div>
                                        </div>
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

export default RegForm;
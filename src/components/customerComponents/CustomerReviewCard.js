const CustomerReviewCard=(props)=>{
    const formatDate=(string)=>{
        var options={year:'numeric',month:'long' ,day:'numeric'};
        return new Date(string).toLocaleDateString([],options);
    }
    const dates=props.date;
    let date=formatDate(dates);
    return(
        <div>
            <div className="col-xl-12">
                <div className="card yearly-sales">
                    <div className="card-block">
                        <h5 className="align-items-center float-left">{props.name}</h5>
                        <h6 className="text-muted align-items-center float-right"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>{date}</h6>
                        <br/>
                        <hr/>
                        
                        <p>{props.content}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerReviewCard;
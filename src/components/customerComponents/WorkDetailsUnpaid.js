import {Link} from 'react-router-dom';


const WorkDetailsUnpaid=(props)=>{
    const formatDate=(string)=>{
        var options={year:'numeric',month:'long' ,day:'numeric'};
        return new Date(string).toLocaleDateString([],options);
    }
    const started_date=formatDate(props.startDate);
    const finished_date=formatDate(props.finishDate);

    var payment = {
        "sandbox": true,
        "merchant_id": 1219061,    // Replace your Merchant ID
        "return_url": "/CustomerWorkDetailsUnpaid",     // Important
        "cancel_url": "/CustomerWorkDetailsUnpaid",     // Important
        "notify_url": "http://sample.com/notify",
        "order_id": props.appointment,
        "items": props.SP,
        "amount": props.cost, 
        "currency": "LKR",
        "first_name": props.Customer.name,
        "last_name": "",
        "email": props.Customer.email,
        "phone": props.Customer.contact_no,
        "address": "No.1, Galle Road",
        "city": "Colombo",
        "country": "Sri Lanka",
        "delivery_address": "No. 46, Galle road, Kalutara South",
        "delivery_city": "Kalutara",
        "delivery_country": "Sri Lanka",
        "custom_1": "",
        "custom_2": ""
    };

    const  payHerePay = () => {
        window.payhere.startPayment(payment);
    }

    window.payhere.onCompleted = function onCompleted(orderId) {
        console.log("Payment completed. OrderID:" + orderId);

        //Note: validate the payment and show success or failure page to the customer
    };

    // Called when user closes the payment without completing
    window.payhere.onDismissed = function onDismissed() {
        //Note: Prompt user to pay again or show an error page
        console.log("Payment dismissed");
    };

    // Called when error happens when initializing payment such as invalid parameters
    window.payhere.onError = function onError(error) {
        // Note: show an error page
        console.log("Error:"  + error);
    };

    return(
        <div>
                            
                                <div className="col-md-12 col-xl-12">
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-12">
                                                    <h4 className="mb-12">Service Provider: {props.SP}</h4>
                                                    <div>
                                                        <p className="m-b-0"><h6>Description:</h6> {props.description}</p>
                                                    </div>
                                                    <div>
                                                        <p className="m-b-0"><h6>Started Date:</h6> {started_date}</p>
                                                    </div>
                                                    <div>
                                                        <p className="m-b-12"><h6>Finished Date:</h6> {finished_date}</p>
                                                    </div>
                                                    
                                                    <div>
                                                        <p className="m-b-0"><h6>Payment Is due</h6></p>
                                                    </div>
                                                    
                                                </div>
                                                <div class="col-12">
                                                    <label class="label theme-bg2 text-white f-25 f-w-400 float-right">*Not Paid Yet </label>
                                                    
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-8">
                                                    <h5 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i> LKR {props.cost}</h5>
                                                </div>

                                                <div className="col-5 text-left">
                                                    <p className="m-b-2"><button type="button" id="payhere-payment" class="btn btn-outline-danger" title="Online Payment" data-toggle="tooltip" onClick={payHerePay}>Pay Now</button></p>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 
                            
                                
        </div>
    )
}
export default WorkDetailsUnpaid;
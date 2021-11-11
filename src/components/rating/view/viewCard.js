import { useEffect, useState } from "react";
import {dateFormatter} from "../../formatter"; 

const ViewCard = ({id,message,ratingValue,date}) => {
    

    // logic to assign rating star
    var array = [false,false,false,false,false];

    const [rating,setRating] = useState()

    useEffect(()=>{
        array[ratingValue-1]=true
        setRating(array)
    },[ratingValue])



    return ( 
        <div className="">
            <form >
                <div className="row">
                    <div className="col-md-6">
                        <div style={{backgroundColor:'#3f4d67',width:'100%',textAlign:'center',color:'white',padding:'5px',margin:'auto'}}>
                            Customer ID: {id}
                        </div> 
                        <div className="star-rating">
                            <div className="thanks-msg">Thanks for your feedback !!!</div>
                                
                                {rating ? <div className="star-input">
                                    <input type="radio" name="rating" id="rating-5" checked={rating[4]} disabled/>
                                    <label htmlFor="rating-5" className="fas fa-star"></label>
                                    <input type="radio" name="rating" id="rating-4" checked={rating[3]} disabled />
                                    <label htmlFor="rating-4" className="fas fa-star"></label>
                                    <input type="radio" name="rating" id="rating-3" checked={rating[2]}  disabled/>
                                    <label htmlFor="rating-3" className="fas fa-star" ></label>
                                    <input type="radio" name="rating" id="rating-2" checked={rating[1]} disabled/>
                                    <label htmlFor="rating-2" className="fas fa-star"></label>
                                    <input type="radio" name="rating" id="rating-1" checked={rating[0]} disabled/>
                                    <label htmlFor="rating-1" className="fas fa-star"></label>

                                    {/* <!-- Rating Submit Form --> */}
                                    <span className="rating-reaction"></span>
                                                           
                                </div>: null}
                                  
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                                                       
                            <div className="form-group">
                                <label htmlFor="description"> Comments</label>
                                <textarea className="form-control" id="description" rows="5" aria-label="Enter description" 
                                    value={message ? message : "No comments to display"}
                                    disabled>
                                    
                                </textarea>
                            </div>
                            
                         </div>

                                           
                    </div>
                    <div>
                        <div style={{backgroundColor:'#3f4d67',width:'100%',textAlign:'right',color:'white',padding:'2px',margin:'auto'}}>
                            Date: {dateFormatter(date)}
                        </div> 
                    </div> 
                    <br/>  
                    <hr/>                    
                                                    
            </form>
        </div>
     );
}
 
export default ViewCard;
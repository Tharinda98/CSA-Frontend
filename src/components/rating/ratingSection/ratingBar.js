import { useEffect } from "react/cjs/react.development";

function RatingBar({rate,count,percentage}){


    const runCallback = (stars)=>{        
        return stars();    
    }

    return(
        <div className="col-xl-12">
            <h6 className="align-items-center float-left">    
                {
                    runCallback(()=>{
                        const row =[];
                        for(let rateCount=0; rateCount< rate ; rateCount++){
                            row.push(<i className="fas fa-star f-10 m-r-10 text-c-yellow" key={rateCount}></i>)    
                        }
                        return row
                    })    
                } 
            </h6>
            <h6 className="align-items-center float-right"> {count} </h6>
            <div className="progress m-t-30  m-b-20" style={{height: "6px"}}>
                <div className="progress-bar" role="progressbar" style={{width: `${percentage}` }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}

export default RatingBar;
import EmployeeCard from "./employeeCard";

const ElementCard = ({content,type,childComponent}) => {
    return ( 
        <>
            {/* <div style={{width:'10px'}}/> */}
            <EmployeeCard content={content} type={type}/>
                    
            <div className="col-10 col-sm-5 col-md-5 col-xl-5" style={{margin:'20px'}}>
            
                {childComponent}
                           
            </div> 
            <hr/>
        </>
     );
}
 
export default ElementCard;
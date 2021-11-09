import { useState } from "react";

const PaginationBar = ({page,setPage,offSet}) => {

   
    const [disable,setDisable] = useState(true);
    const [offDisable,setOffDisable] = useState(false);

    const decrement = ()=>{
        if(page > 1){
        setPage(page-1)
        check(page)
        }else{
            setDisable(true)
        }
        
        
    }

    const check = (page) =>{
     
        if(page<=1){
            setDisable(true); 
            
        }
        if(page>=1 && page < offSet+2){
            setDisable(false); 
            setOffDisable(false);
        }

        if(page > offSet+2){
            setOffDisable(true);
            
        }
    }

    const increment = ()=>{
        if(page < offSet){ 
        setPage(page+1)
        check(page)
        }else{
            setOffDisable(true)
        }
        
    }


    return (
    <div className="page-bar " aria-label="page navigation" >
        <ul className="pagination">
            <li className={"page-item" + ( disable ?' disabled':'')}>
                <span className="page-link" onClick={decrement}>Previous</span>
            </li>
            <li className={"page-item" + ( disable ?' disabled':'')}>
                <button className="page-link" onClick={decrement}>{page>1?page-1:".."}</button>
            </li>
            <li className="page-item active">
                <span className="page-link">{page}
                    <span className="sr-only">(current)</span>
                </span>
            </li>
            <li className={"page-item" + ( offDisable ?' disabled':'')}><button className="page-link" onClick={increment} >{page < offSet ? page+1:".."}</button></li>
            <li className={"page-item" + ( offDisable ?' disabled':'')}><button className="page-link" onClick={increment}>Next</button></li>
        </ul>
    </div>
 );
}
 
export default PaginationBar;
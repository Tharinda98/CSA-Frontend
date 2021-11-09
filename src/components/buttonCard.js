const ButtonCard = ({id,array,setArray}) => {

    const removeFromArray =  (e,array,setArray)=>{
        e.preventDefault()
        if(e.target.firstChild){
            const value = e.target.firstChild.data
            setArray(array.filter(item => item !== value))
        }else if(e.target.previousSibling){
            const value = e.target.previousSibling.previousSibling.data
            setArray(array.filter(item => item !== value))
        }
        
    }

    return ( 
        <div className="col-6 col-xl-4" style={{padding:"10px",height:"100%"}}>
    
            <button type="button" className="" title="click to remove" 
                onClick={(e)=>{removeFromArray(e,array,setArray)}} 
                aria-label="click to remove" 
                style={{height:"100%",padding:"5px 5px",width:"100%",borderRadius:"17px"}}>

                {id} <i className="fas fa-user-minus"></i>
            </button>
            
        </div>
     );
}
 
export default ButtonCard;
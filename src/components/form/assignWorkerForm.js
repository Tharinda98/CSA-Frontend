import { useMutation } from "@apollo/client";
import { ASSIGN_WORKER } from "../../GraphQL/Mutations";


const AssignForm = ({worker,appointment,action}) => {
    
    const assignWorkerClick = (e) =>{
        e.preventDefault()

        action({
            variables:{
                appointment,
                worker
            }
        }).catch(err => {
            alert("Error Occured")
        })

    }

    return (        
        <button type="submit" onClick={assignWorkerClick} className="btn btn-primary"> Add to the Work</button>                                                    
     );
}
 
export default AssignForm;
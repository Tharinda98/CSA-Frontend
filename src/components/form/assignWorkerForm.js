
import swal from 'sweetalert';

const AssignForm = ({worker,appointment,action}) => {
    
    const assignWorkerClick = (e) =>{
        e.preventDefault()

        action({
            variables:{
                appointment,
                worker
            }
        }).catch(err => {
            swal({
                title: "Error",
                text: "Error occurred in the search",
                icon: "warning",
                button: {
                  text: "Close",
                  closeModal: true,
                }, 
                dangerMode: true  
            })
        })

    }

    return (        
        <button type="submit" onClick={assignWorkerClick} className="btn btn-primary"> Add to the Work</button>                                                    
     );
}
 
export default AssignForm;
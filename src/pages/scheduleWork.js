
import NavBarCustomer from "../components/customerComponents/NavBarCustomer";
import ScheduleForm from "../components/ScheduleForm";
import NormalHeader from "../components/normalHeader";

const ScheduleWork = (props) => {
    return ( 
        <div>
            {console.log(props.match.params.id)}
            
        <NavBarCustomer />
        <NormalHeader/>
        <ScheduleForm ID={props.match.params.id}/>
        
        
        </div>
     );
}
 
export default ScheduleWork;
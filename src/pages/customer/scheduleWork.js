
import NavBarCustomer from "../../components/customerComponents/NavBarCustomer";
import ScheduleForm from "../../components/customerComponents/ScheduleForm";
import HeaderCustomer from "../../components/headerCustomer";

const ScheduleWork = (props) => {
    return ( 
        <div>
            {console.log(props.match.params.id)}
            
        <NavBarCustomer />
        <HeaderCustomer/>
        <ScheduleForm ID={props.match.params.id}/>
        
        
        </div> 
     );
}
 
export default ScheduleWork;
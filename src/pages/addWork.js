import AddWorkerForm from "../components/addWork";
import Header from "../components/header";
import NavBarCustomer from "../components/customerComponents/NavBarCustomer";

const AddWork = () => {
    return ( 
        <div>
        <NavBarCustomer/>
        <Header/>
        <AddWorkerForm/>
        </div>
     );
}
 
export default AddWork;
import RegForm from "../../components/adminComponents/RegForm"
import NavBarAdmin from "../../components/adminComponents/NavBarAdmin";
const AdminRegView=(props)=>{
    const ID=props.match.params.id;
    return(
        <div>
            <NavBarAdmin/>
            <RegForm id={ID}/>
        </div>
    )
}
export default AdminRegView;
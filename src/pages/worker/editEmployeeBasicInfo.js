
import { useMutation } from "@apollo/client";
import EditEmployee from "../../components/employee/edit/editEmployee";

//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';
import { EDIT_INFO } from "../../GraphQL/Mutations";

function EditBasicInfo({type}) {

    const [editInfo,{loading,error}] = useMutation(EDIT_INFO,{
        onCompleted: data => {
            window.location.reload()
        }
    })


    return (
        <div>
        {/* [ Pre-loader ] start */}
         <Preloader/>
        { /* [ Pre-loader ] End 

          [ navigation menu ] start */}
        <NavBarWorker/>
        {/* </div> [ navigation menu ] end 

        [ Header ] start */}
        <Header/>
        {/*<!-- [ Header ] end --> */}
            {/*<!-- [ Main Content ] start -->*/}
                <EditEmployee 
                    type={type}
                    action = {editInfo}
                />
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default EditBasicInfo;
  
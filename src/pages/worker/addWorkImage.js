import WorkImage from "../../components/work/view/workImage";

//components
import Header from "../../components/headerWorker";
import NavBarWorker from '../../components/navbarWorker';
import Preloader from '../../components/preloader';

function AddWorkImage() {
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
            <WorkImage type="Work"/>
            {/*<!-- [ Main Content ] end -->*/}
        </div>
    );
  }
  
  export default AddWorkImage;
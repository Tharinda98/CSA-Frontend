import BreadCrumb from "../../breadcrumb";
import ChangeCard from "./changeCard";
import FinishCard from "../../finishCard";
import Empty from "../../empty";




const RemoveEmployeeCard = ({type,action,content,id,setID,loading}) => {
    

    return ( 
    <div className="pcoded-main-container main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    {/*<!-- [ breadcrumb ] start -->*/}
                    <BreadCrumb type={type} reason="Remove" />
                    {/*<!-- [ breadcrumb ] end -->*/}
                    <div className="main-body">
                        <div className="page-wrapper">
                            {/*<!-- [ Main Content ] start -->*/}

                                                       
                            {/*<!-- [ Remove card ] start -->*/}
                            {content ?<ChangeCard
                                title = {`Remove ${type}`}
                                setID = {setID}
                                content = {content}
                                type={type}
                                action = {action}
                                loading = {loading}
                                
                                     
                                   
                                
                            />:
                            <div style={{width:'100%'}}>
                                <Empty
                                    message="No matches"
                                />
                            </div>
                            }
                            {/*<!-- [ Remove card ] end -->*/}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    
}
 
export default RemoveEmployeeCard;
import { BrowserRouter as Router, Link } from "react-router-dom";

const BreadCrumb = ({type,reason}) => {
    return ( 
        <div className="page-header">
            <div className="page-block">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="page-header-title">
                            <h5 className="m-b-10">{type}</h5>
                        </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"><i className="feather icon-home"></i></Link></li>
                                <li className="breadcrumb-item"><Link to="/">{type}</Link></li>
                                <li className="breadcrumb-item"><Link to="#0">{reason} {type}</Link></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BreadCrumb;
import { useState } from 'react';


import {useFormik} from 'formik';
import * as Yup from 'yup';

import BreadCrumb from "../../breadcrumb";
import SearchBar from '../../searchBar';
import RatingCard from '../ratingCard';


const EditReviewDetail = ({type}) => {

    const [id,setID] = useState('ID89');
    const [content,setCardContent] = useState([]);
    const [error,setErr] = useState(false);
    
    const formik = useFormik({
        initialValues:{
            workId:id,
            rating:'',
            description:''
        },validationSchema: Yup.object({
    
            workId: Yup.string()
                .required('Please enter the Work ID')
                .matches(/^[\w\d]+$/,"can only have letters and digits"),
            rating: Yup.number()
                .required('Please select the rating'),
            description: Yup.string()
                .required("Please enter the description")    

        }),
        onSubmit: values => {
            alert(JSON.stringify(values,null,2))
            values.workId = id;
            const work = values
            
            alert(work);

            // fetch('http://localhost:8000/serviceprovider/editBasicInfo/:id',{
            //     method: 'POST',
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify(work)
            // }).then(()=>{
            //     alert("Successfully submitted"); 
            // }).catch((err)=>{
            //     console.log(err);
            // })
            }
    })


    return ( 
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">

                    {/*<!-- [ breadcrumb ] start -->*/}
                    <BreadCrumb type={type} reason="Edit" />
                    {/*<!-- [ breadcrumb ] end -->*/}

                    <div className="main-body">
                        <div className="page-wrapper">

                            {/*<!-- [ Basic info ] start -->*/}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Basic Componant</h5>
                                        </div>
                                        <div className="" style={{marginTop:'20px'}}>
                                            <SearchBar placeholder="Enter worker ID ..." setCardContent={setCardContent} setId={setID}/>
                                        </div>
                                        <div className="card-body">
                                            <h5>{type}</h5>
                                            <hr/>
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6">

                                                    <div className="star-rating">
                                                            <div className="thanks-msg">Thanks for your feedback !!!</div>
                                                            <div className="star-input">
                                                                <input type="radio" name="rating" id="rating-5" onChange={() => {formik.values.rating=5; setErr(true)}} />
                                                                <label htmlFor="rating-5" className="fas fa-star"></label>
                                                                <input type="radio" name="rating" id="rating-4" onChange={() => {formik.values.rating=4; setErr(true)}} />
                                                                <label htmlFor="rating-4" className="fas fa-star"></label>
                                                                <input type="radio" name="rating" id="rating-3" onChange={() => {formik.values.rating=3; setErr(true)}}/>
                                                                <label htmlFor="rating-3" className="fas fa-star"></label>
                                                                <input type="radio" name="rating" id="rating-2" onChange={() => {formik.values.rating=2; setErr(true)}}/>
                                                                <label htmlFor="rating-2" className="fas fa-star"></label>
                                                                <input type="radio" name="rating" id="rating-1" onChange={() => {formik.values.rating=1; setErr(true)}}/>
                                                                <label htmlFor="rating-1" className="fas fa-star"></label>

                                                                {/* <!-- Rating Submit Form --> */}
                                                                <span className="rating-reaction"></span>
                                                                
                                                            </div>
                                                        </div>

                                                        {formik.errors.rating && error ?null:<small id="nameError" className="error form-text text-muted error "> {formik.errors.rating}</small> }
                                                        
                                                        <div className="form-group">
                                                            <label htmlFor="description">Comments</label>
                                                            <textarea className="form-control" id="description" rows="5" value={formik.values.description} aria-label="Enter description" onChange={formik.handleChange} onBlur={formik.handleBlur} required></textarea>
                                                            {formik.touched.description && formik.errors.description ? <small id="nameError" className="error form-text text-muted error "> {formik.errors.description}</small>: null}
                                                        </div>
                                                        <button type="submit" className="btn btn-primary">Submit</button>

                                                </div>

                                                <div className="col-md-6">    
                                                    <RatingCard id={id} />
                                                </div>
                                            </div>
                                           
                                                    
                                        </form>
                                        </div>
                                    </div>
                             
                                </div>
                            </div>
                            {/*<!-- [ Basic info ] end -->*/}



                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
 
export default EditReviewDetail;
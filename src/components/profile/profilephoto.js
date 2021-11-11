
import { useState } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Loading from "../loading"



function PhotoCard({id,profile,title,type,edit,provider}){

    const [image,setImage] = useState("/assets/images/user/profile.jpg");

    return(
        <div className="">
            <div className="card yearly-sales">
                <div className="card-block" style={{padding:'10px 20px 0px 20px'}}>
                    <div className="card-header">
                        <h5>{title ? title:"Profile"}</h5>
                    </div>
                    <div>
                        {profile ? 
                            <img src={image} alt="" style={{display:'block',height:'200px',width:'250px',margin:'auto',paddingTop:'15px',justifyContent:'center',textAlign:'center',alignItems:'center'}}/> 
                        :
                        
                            <Loading/>
                       
                        }
                    </div>
                    <hr/>
                    {edit ?
                   <div style={{ margin:'15px',display:'flex'}}>
                     
                      <Link to={`/Worker/edit/password`} className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#5e8d25',borderColor:'#5e8d25'}} title="Edit Password">
                           {/* <i className="fas fa-chevron-circle-left"></i> */}
                           <i className="fas fa-unlock-alt"></i>
                           Password  
                        </Link>
                       <Link to={`/Worker/edit/basicInfo`} className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#038fcf'}} title="Edit Profile">
                           Edit
                           <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                        </Link>
                   </div>
                  
                   :
                   null
                    }
                    {provider ?<div style={{ margin:'15px',display:'flex'}}>
                     
                     <Link to={`/CSA/edit/password`} className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#5e8d25',borderColor:'#5e8d25'}} >
                          {/* <i className="fas fa-chevron-circle-left"></i> */}
                          <i className="fas fa-unlock-alt"></i>
                          
                            <div className="tooltips" id="tooltips">
                                Password
                                <span className="tooltiptext" >Click to edit password</span>
                            </div> 
                       </Link>
                      <Link to={`/CSA/edit/basicInfo`} className="btn btn-primary" style={{width:'100%',height:'25px',padding:'0px 0px',background:'#038fcf'}} >
                            <div className="tooltips" id="tooltips">
                                Edit
                                <span className="tooltiptext" >Click to personal info</span>
                            </div> 
                          <i className="fas fa-edit" style={{paddingLeft:'10px'}}></i>
                       </Link>
                    </div>
                    
                    :
                    null
                    }
                 </div>
            </div>
        </div>
    )
}

export default PhotoCard;
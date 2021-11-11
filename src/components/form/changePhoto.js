import { useMutation } from "@apollo/client"
import { useState, useEffect } from "react"
// import { UPLOAD_IMAGE } from "../../GraphQL/Mutations"

const PhotoUpdate  = ({id}) => {

    // const [uploadProfile,{loading,error}] = useMutation(UPLOAD_IMAGE,{
    //     onCompleted:data=>{

    //     }
    // })
    

    const [selectedFile, setSelectedFile] = useState(undefined)
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const upload = ()=>{


        // uploadProfile({
        //     variables:selectedFile
        // }).catch(err=>{
        //     swal({
        //         title: "Error",
        //         text: "Error occurred in initiating appointment",
        //         icon: "warning",
        //         button: {
        //           text: "Close",
        //           closeModal: true,
        //         }, 
        //         dangerMode: true  
        //     })
        // })

    }
    
    
    


    return ( 
        <div>
            <form onSubmit={upload}>
                <div className="form-group">
                    <label htmlFor="photo">Upload photo</label>
                  
                    <input 
                        className="form-control"
                        id = "photo"
                        type="file" 
                        name="user[image]" 
                        multiple={false}
                        onChange={onSelectFile}/>
      
                    <small id="photoError" className="error form-text text-muted error "> </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>                                                                        
            </form>
            <div>
                {/* <img src="assets/images/user/profile.jpg" alt="Preview Profile Photo" />  */}
                {selectedFile ?
                
                <img src={preview} 
                
                style={{display:'block',height:'200px',width:'250px',margin:'auto',paddingTop:'15px',justifyContent:'center'}}
                /> : 
                
                <div>Preview the image Here </div> 
                
                }
            </div>
        </div>
     );
}
 
export default PhotoUpdate ;
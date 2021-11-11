import { useMutation } from "@apollo/client"
import { useState, useEffect } from "react"
// import { UPLOAD_WORK_IMAGE } from "../../GraphQL/Mutations"

const PhotoUpdate  = ({id}) => {

    // const [uploadProfile,{loading,error}] = useMutation(UPLOAD_WORK_IMAGE,{
    //     onCompleted:data=>{

    //     }
    // })
    
    const [selectedFiles, setSelectedFiles] = useState([])
    const [selectedFile, setSelectedFile] = useState(undefined)
    const [previews, setPreview] = useState([])

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile || selectedFiles.includes(selectedFile) ) {
            //setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)

        //store the mulptiple files
        if(selectedFiles[0]){
            setSelectedFiles([...selectedFiles,selectedFile])
        }else{
            setSelectedFiles([selectedFile])
            
        }
        
        setPreview([...previews,objectUrl])
        
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

        alert(id,selectedFiles)
        // uploadProfile({
        //     variables:selectedFile
        // })

    }
    
    
    


    return ( 
        <div>
            <form onSubmit={upload}>
                <div className="form-group">
                    <label htmlFor="photo">Upload photo</label>
                  
                    <input 
                        className="form-control"
                        
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
                {selectedFiles ?
                
                
                previews.map((preview) => {return <img src={preview} key={preview}
                
                style={{display:'block',height:'200px',width:'250px',margin:'auto',paddingTop:'15px',justifyContent:'center'}}
                /> }): 
                
                <div>Preview the image Here </div> 
                
                }
            </div>
        </div>
     );
}
 
export default PhotoUpdate ;
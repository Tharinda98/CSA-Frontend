
import React, { useState } from 'react';

const SignInForm = props => {
  // set the default state of the form
  const [values, setValues] = useState();


  // update the state when a user types in the form
  const onChange = event => {
      
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const [password,setPassword] = useState("password");
    const [className, setClassName] = useState("fa fa-eye");


    const togglePassword = (e) => {
        if (password == "password"){
            setPassword("text");
            setClassName('fa fa-eye-slash');
        }else{
            setPassword("password");
            setClassName('fa fa-eye');
        } 
    };

  return (
    <div>
      {/* Display the appropriate form header */}
      <h2>{props.type}</h2>
      {/* perform the mutation when a user submits the form */}
      <form
        onSubmit={event => {
          event.preventDefault();
          
          props.action({
            variables: 
              values
            
          }).catch(err =>{
        
            alert("Error Occurred")
          })
        }}
      >
      
        <div className="input-group mb-4">
        <input
          required
          type="text"
          id="workerId"
          className="form-control"
          name="workerId"
          placeholder="User ID"
          onChange={onChange}
        />
        </div>
        <div className="form-group mb-4">
          <input
            
            type={password}
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={onChange}
            style= {{paddingRight:30}}
          />
        <i className={className} id="visibile" style={{float:"right",cursor:"pointer",transform:"translate(-10px,-28px)"}} onClick={togglePassword}></i>
        </div>
        {!props.loading ? 
          <button className="btn btn-primary shadow-2 mb-4" type="submit">Submit</button>
        :
          <button className="btn btn-primary shadow-2 mb-4" disabled>Loading ...</button>
        }
      </form>
    </div>
  );
};

export default SignInForm;






   
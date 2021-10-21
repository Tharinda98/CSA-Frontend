
import React,{useState} from 'react';


const SignForm=props=>{
    //set the default state of the from
    const [values,setValues] =useState();

    //update the state when user types in the form
    const onChange=event=>{
        setValues({
            ...values,
            [event.target.name]:event.target.value
        });
    };

    return(
        <div>
            {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
            <form
                onSubmit={event=>{
                    event.preventDefault();
                    props.action({
                        variables:{
                            values
                        }
                    });
                }}
                >
                    {props.formType==='signup' && (
                        <React.Fragment>
                        <label htmlFor="username">Username:</label>
                        <input
                        required
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        onChange={onChange}
                        />
                        </React.Fragment>
                    )}

                    <label htmlFor="email">Email:</label>
                    <input
                        required
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Email"
                        onChange={onChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        required
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={onChange}
                    />
                    <button className="btn btn-primary shadow-2 mb-4" type="submit">Submit</button>

            </form>
        </div>
    );

};
export default SignForm;
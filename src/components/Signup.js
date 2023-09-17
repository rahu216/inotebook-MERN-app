import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const BASE_URL=process.env.BASE_URL;
const Signup = () => {
  const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
      let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password}= credentials;
    const response = await fetch(`${BASE_URL}/api/auth/createuser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name,email,password})
    });
    const json = await response.json()
    console.log(json);
    
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        navigate("/");

   
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

  return (
    <div className="container">
      <form  autoComplete="off" onSubmit={handleSubmit}>

      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" autoComplete="off" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" autoComplete="off" className="form-control" id="email" name="email"  onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" autoComplete="off" className="form-control" id="password" onChange={onChange}  name="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">confirmPassword</label>
          <input type="password"  autoComplete="off" className="form-control" id="cpassword"  onChange={onChange}  name="cpassword" />
        </div>
      
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup

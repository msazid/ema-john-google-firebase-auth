import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import "./Login.css";
const Login = () => {
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const navigate = useNavigate();
  const [   
    signInWithEmailAndPassword,
    user,
    loading,
    error,] = useSignInWithEmailAndPassword(auth);
  
  const handleEmail = e =>{
    setEmail(e.target.value);
  }
  const handlePass = e =>{
    setPass(e.target.value)
  }
  if(user){
    navigate('/shop');
  }
  const handleLogIn = e =>{
      e.preventDefault()
      signInWithEmailAndPassword(email,pass)
    
  } 

  return (
    <>
      <div className="form-container">
        <div className="form-body">
          <div className="form-title">Login</div>
          <form action="" onSubmit={handleLogIn}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" onBlur={handleEmail} name="email" placeholder="enter email"  required/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="enter password"
                required
                onBlur={handlePass}
              />
            </div>
            {
              loading && <p>Loading......</p>
            }
            <p style={{color:'red'}}>{error?.message}</p>
            <input className="submit-btn" type="submit" value="Login" />
          </form>
          <p className="new-user">New user at Ema-john? <Link className="form-link" to="/signup">Create new account</Link></p>
            <button className="signInWithGoogle">Sign in with google</button>
        </div>
      </div>
    </>
  );
};

export default Login;

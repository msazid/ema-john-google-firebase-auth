import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../Firebase/firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
  const handleEmail = (event) => {setEmail(event.target.value)};
  const handlePass = (event) => {setPass(event.target.value)};
  const handleConfirmPass = (event) => {setConfirmPass(event.target.value)};
  if(user){
     navigate('/login')
    }
  const handleCreateNewUser = (event) => {
      event.preventDefault()
        if(pass !== confirmPass){
            setError("Password Didn't matched");
            return;
        }
        if(pass.length <6){
            setError("Password should be 6digit or more");
            return;
        }
        createUserWithEmailAndPassword(email,pass)
    };
  return (
    <div>
      <div  className="form-container">
        <div className="form-body">
          <div className="form-title">Sign Up</div>
          <form onSubmit={handleCreateNewUser} action="">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="enter email"
                required
                onBlur={handleEmail}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="enter new password"
                required
                onBlur={handlePass}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                placeholder="confirm password"
                required
                onBlur={handleConfirmPass}
              />
            </div>
            <p style={{color:'red'}}>{error}</p>
            <input className="submit-btn" type="submit" value="Sign Up"/>
          </form>
          <p className="new-user">
            Already have an account?{" "}
            <Link className="form-link" to="/login">
              Login here
            </Link>
          </p>
          <button className="signInWithGoogle">Sign in with google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

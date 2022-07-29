import React,{useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function SignupPage() {
    const [msg,setMsg]=useState(false);
    const [type,setType]=useState("password");
    const [confirmtype,setConfirmType]=useState("password");

    const {signup,authState,authDispatch}=useAuth();

    const showPass=()=>{
        if(type==="password"){
            setType("text");
        }else{
            setType("password");
        }
    }

    const showConfirmPass=()=>{
        if(confirmtype==="password"){
            setConfirmType("text");
        }else{
            setConfirmType("password");
        }
    }

    const submitHandeler=(e)=>{
        e.preventDefault()
        if(authState.password===authState.confirmpass){
            signup();
        }else{
            setMsg(true)
        }
    }


  return (
    <div className='signup'>
         <section className="signup-section">
            <div className="signup-container container flex flex-col align-center justify-center">
                <form onSubmit={submitHandeler}>
                    <h1>SignUp</h1>
                    <div className="form-control">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" id="firstname" name='firstname' placeholder="firstname" value={authState.firstname} onChange={(e)=>{authDispatch({type:"FIRSTNAME",payload:e.target.value})}} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" id="lastname" name="lastname" placeholder="lastname" value={authState.lastname} onChange={(e)=>{authDispatch({type:"LASTNAME",payload:e.target.value})}} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="abc@gmail.com" value={authState.email} onChange={(e)=>authDispatch({type:"EMAIL",payload:e.target.value})} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <div className="fas fa-eye-slash password-icon" onClick={showPass}></div>
                        <input type={type} id="password" name="password" placeholder="enter password" value={authState.password} onChange={(e)=>{authDispatch({type:"PASSWORD",payload:e.target.value})}} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <div className="fas fa-eye-slash password-icon" onClick={showConfirmPass}></div>
                        <input type={confirmtype} id="confirm-password" name="confirmpass" placeholder="confirm password" value={authState.confirmpass} onChange={(e)=>authDispatch({type:"CONF_PASSWORD",payload:e.target.value})} />
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                        <Link to="#" className="forgot-password-link">Forgot Password?</Link>
                    </div>
                    <button className="login-btn btn-primary" >create new account</button>
                    <small className="flex center-text"><Link to="/login" className="sign-up-link">Already have an account?</Link></small>
                </form>
                {msg && <small className='error-msg'>password and confirm password should be same</small>}
            </div>
        </section>
        <footer className="bottom-area">
            <div className="container">
                <p>Designed and built with love. </p>
                <small>© Rahul Singh</small>
            </div>
        </footer>
    </div>
  )
}

export default SignupPage
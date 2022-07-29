import React,{useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function LoginPage() {

  const {login,authState,authDispatch}= useAuth();
    
  return (
    <div className='login'>
        <section className="login-section">
            <div className="login-container container flex flex-col align-center justify-center">
                <form onSubmit={(e)=>{e.preventDefault(); login();}}>
                    <h1>LogIn</h1>
                    <div className="form-control">
                        <label htmlFor="password">Email</label>
                        <input type="email" placeholder="abc@gmail.com" required value={authState?.email} onChange={(e)=>authDispatch({type:"EMAIL",payload:e.target.value})} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="enter password" required value={authState?.password} onChange={(e)=>authDispatch({type:"PASSWORD",payload:e.target.value})} />
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                        <a href="#" className="forgot-password-link">Forgot Password?</a>
                    </div>
                    <button className="login-btn btn-primary">LogIn</button>
                    <small className="flex">Don't have an account? <Link to="/signup" className="sign-up-link">Sign up</Link></small>
                </form>
                <button className="login-btn test-btn" onClick={()=>authDispatch({type:"TEST_INPUTS"})}>LogIn With Test Credentials</button>
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

export default LoginPage
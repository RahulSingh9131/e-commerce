import React,{useState} from 'react';
import {Link,useNavigate} from "react-router-dom";

function LoginPage() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const fetchUser=()=>{
      if(email && password){
          navigate("/products")
      }
    }


  return (
    <div className='login'>
        <section className="login-section">
            <div className="login-container container flex flex-col align-center justify-center">
                <form onSubmit={(e)=>e.preventDefault()}>
                    <h1>LogIn</h1>
                    <div className="form-control">
                        <label htmlFor="password">Email</label>
                        <input type="email" placeholder="abc@gmail.com" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="enter password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                        <a href="#" className="forgot-password-link">Forgot Password?</a>
                    </div>
                    <button className="login-btn btn-primary" onClick={()=>fetchUser()}>LogIn</button>
                    <small className="flex">Don't have an account? <Link to="/signup" className="sign-up-link">Sign up</Link></small>
                </form>
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
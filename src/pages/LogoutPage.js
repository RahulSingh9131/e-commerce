import React from 'react';
import {Link} from "react-router-dom";
import "../css/main.css";

function LogoutPage() {
  return (
    <div className='logout'>
        <div className='logout-contents center-text'>
            <h5>logged out successfully!!!</h5>
            <Link to="/"><small> Back to shopping</small></Link>
        </div>
    </div>
  )
}

export default LogoutPage
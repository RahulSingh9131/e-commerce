import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/main.css"


function Payment() {
    const navigate=useNavigate();
  return (
    <div className='payment-container'>
        <h1>Congratulations on making a successfull payment..</h1>
        <h3>want to shop more..</h3>
        <div>
            <button className='pay-btn' onClick={()=>navigate("/products")}>
                Back to shopping
            </button>
        </div>
    </div>
  )
}

export default Payment
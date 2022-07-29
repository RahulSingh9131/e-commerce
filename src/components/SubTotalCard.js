import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function SubTotalCard() {
    const {cartState}=useCart();
    const {cartBasket}=cartState;
    const navigate=useNavigate();

    const cartPrice=cartBasket.reduce((acc,curr)=>{
        return acc+Number(curr.price)*(curr.count);
    },0)

    const originalPrice=cartBasket.reduce((acc,curr)=>{
        return acc+Number(curr.originalPrice)*(curr.count);
    },0)

    const discount=originalPrice-cartPrice;
    const cartDelivery=cartBasket.length*50;
    const totalPrice=cartPrice+cartDelivery-discount;

    const loadScript=(src)=>{
        return new Promise((resolve)=>{
            const script = document.createElement('script')
            script.src=src

            script.onload=()=>{
                resolve(true);
            }
            script.onerror=()=>{
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const displayRazorpay= async (amount)=>{
        const res= await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!res){
            alert("you are offline..failed to load Sdk")
            return 
        }

        const options={
            key : "rzp_test_9sOhNE8KsEK7zs",
            currency:"INR",
            amount: amount*100,
            name:"Shoe Store",
            description:"Thanks for purchasing from us",

            handler:function (response){
                alert(response.razorpay_payment_id)
                navigate("/payment");
            },
            prefill:{
                name:"Shoe Store"
            }
        }
        const paymentObject= new window.Razorpay(options)
        paymentObject.open()
    }

  return (
    <div className='SubTotalCard'>
        <div className="card text-only-card price-card">
            <div className="card-bottom">
                <div className="card-body">
                    <h1 className="body-title">Price Detail</h1>
                    <div className="body-text flex justify-space align-center">
                        <p>Price <small>({cartBasket?.length})</small> items</p>
                        <p>₹ {cartPrice}</p>
                    </div>
                    <div className="body-text flex justify-space align-center">
                        <p>Discount</p>
                        <p> - ₹ {discount}</p>
                    </div>
                    <div className="body-text flex justify-space align-center">
                        <p>Delivery Charges</p>
                        <p>₹ {cartDelivery}</p>
                    </div>
                    <div className="body-text flex justify-space align-center">
                        <p>Total Amount</p>
                        <p>₹ {totalPrice}</p>
                    </div>
                    <div className="body-text body-message">
                        <p>
                        You have saved a total of ₹ {discount} on this purchase. Please proceed further and place order.
                        </p>
                    </div>
                </div>
                <div className="card-button">
                    <button className="card-btn" onClick={()=>displayRazorpay(totalPrice)}>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubTotalCard
import React from 'react'
import { useCart } from '../context/CartContext';

function SubTotalCard() {
    const {cartState}=useCart();
    const {cartBasket}=cartState;
    const cartPrice=cartState.cartTotalPrice;
    const discount=cartState.cartDiscount-cartState.cartTotalPrice;
    const cartDelivery=499;
    const total=cartPrice+cartDelivery-discount;
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
                        <p>₹ {total}</p>
                    </div>
                    <div className="body-text body-message">
                        <p>
                        You have saved a total of ₹ {discount} on this purchase. Please proceed further and place order.
                        </p>
                    </div>
                </div>
                <div className="card-button">
                    <button className="card-btn">Place Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubTotalCard
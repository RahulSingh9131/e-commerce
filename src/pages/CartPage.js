import React from 'react'
import Header from '../components/Header'
import SubTotalCard from '../components/SubTotalCard';
import { useCart } from '../context/CartContext';
import "../css/main.css"

function CartPage() {
 
    const {cartState,cartDispatch}=useCart();
    const {cartBasket}=cartState;
  

  return (
    <div className='cartpage'>
        <Header/>
        <section className="cart-section">
            <div className="section-heading center-text">
                <h1>My Cart <small>({cartBasket?.length} items)</small> </h1>
            </div>
            <div className="section-contents container ">
                <div className='flex flex-wrap justify-center'>
                    {cartBasket.map(({_id,categoryName,src,price,originalPrice,discount,rating,title,quantity})=>{
                        return (
                            <div className="card card-horizontal cart-card" key={_id}>
                                <div className="card-top">
                                    <img className="card-img" src= {src} alt="cartImage" />
                                </div>
                                <div className="card-bottom">
                                    <div className="card-body">
                                        <h1 className="body-title">{title}</h1>
                                        <h3 className="card-category">{categoryName}</h3>
                                        <div className="body-text">
                                            <p>₹ {price}</p>
                                            <p className="text-overline">₹ {originalPrice}</p>
                                            <span>({discount}% off)</span>
                                        </div>
                                        <div className="quantity-text flex align-center">
                                            <p>Quantity :</p>
                                            <button className="quantity-btn">+</button>
                                            <small>{quantity}</small>
                                            <button className="quantity-btn">-</button>
                                        </div>
                                        <div className='number-rating-container'>
                                            <span>{rating}</span>
                                            <i className='fa fa-star'></i>
                                        </div>
                                    </div>
                                    <div className="card-button card-horizontal-btn">
                                        <button className="card-btn" onClick={()=>cartDispatch({type:"REMOVE_FROM_CART",_id:_id,price:Number(price),discount:Number(originalPrice)})}>Remove from Cart</button>
                                        <button className="card-btn">Move To Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-wrap justify-center'>
                    <SubTotalCard/>
                </div>     
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

export default CartPage
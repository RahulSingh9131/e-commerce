import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishContext';

function CartCard({_id,src,title,categoryName,originalPrice,price,discount,count,rating}) {

    const {cartDispatch}=useCart();
    const {wishDispatch}=useWishlist();

    const addToWish=()=>{
        wishDispatch({
            type:"ADD_TO_WISHLIST",
            wishItem:{
                _id:_id,
                categoryName:categoryName,
                src:src,
                title:title,
                originalPrice:originalPrice,
                price:price,
                discount:discount,
                rating:rating
            }
        })
    }

    const wishNotify=()=>toast.info(`${title} is added to the wishlist!!`,{position:"top-center"});

  return (
    <div className='cartcard'>
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
                        <button className="quantity-btn flex justify-center align-center" onClick={()=>cartDispatch({type:"INCREMENT_QUANTITY",payload:{_id:_id,price:Number(price),discount:Number(originalPrice)}})}>+</button>
                        <small>{count}</small>
                        <button className="quantity-btn flex justify-center align-center" onClick={()=>cartDispatch({type:"DECREMENT_QUANTITY",payload:{_id:_id,price:Number(price),discount:Number(originalPrice)}})}>-</button>
                    </div>
                    <div className='number-rating-container'>
                        <span>{rating}</span>
                        <i className='fa fa-star'></i>
                    </div>
                </div>
                <div className="card-button card-horizontal-btn">
                    <button className="card-btn" onClick={()=>cartDispatch({type:"REMOVE_FROM_CART",payload:{_id:_id,price:Number(price),discount:Number(originalPrice)}})}>Remove from Cart</button>
                    <button className="card-btn" onClick={()=>{wishNotify(); addToWish();}}>Move To Wishlist</button>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard
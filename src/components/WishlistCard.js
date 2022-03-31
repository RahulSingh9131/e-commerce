import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishContext';

function WishlistCard({_id,src,categoryName,price,originalPrice,title,discount,rating}){
    const {cartDispatch}=useCart();
    const {wishDispatch}=useWishlist();

    const moveToCart=()=>{
        cartDispatch({
            type:"MOVE_TO_CART",
            moveItem:{
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

    const cartNotify = () => toast.success(`${title} is added to cart!!`,{position:"bottom-center"});

  return (
    <div className='wishlistcard'>
        <div className="card shadow-card wish-card" key={_id}>
            <div className="card-top">
                <img className="card-img" src={src} alt={title} />
            </div>
            <div className="card-bottom">
                <div className="card-body">
                    <h1 className="body-title">{title}</h1>
                    <h3 className="card-category">{categoryName}</h3>
                    <div className="body-text">
                        <p>₹ {price} </p>
                        <p className="text-overline">₹ {originalPrice}</p>
                        <span>({discount}% off)</span>
                        <div className='number-rating-container'>
                            <span>{rating}</span>
                            <i className='fa fa-star'></i>
                        </div>
                    </div>
                </div>
                <div className="card-button">
                    <button className="card-btn" onClick={()=>{cartNotify(); moveToCart();}}>Add To Cart</button>
                    <button className="card-btn" onClick={()=>wishDispatch({type:"REMOVE_FROM_WISHLIST",payload:_id})}>Remove from Wishlist</button>
                    <ToastContainer position='bottom-center'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WishlistCard;
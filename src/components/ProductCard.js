import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../context/CartContext';

function ProductCard({_id,categoryName,src,title,originalPrice,price,discount,rating,quantity}) {

    const {cartState,cartDispatch}=useCart();

    const {cartBasket}=cartState;
    console.log(cartBasket);

    
    const addToCart=()=>{
        cartDispatch({
            type:"ADD_TO_CART",
            item:{
                _id:_id,
                categoryName:categoryName,
                src:src,
                title:title,
                originalPrice:originalPrice,
                price:price,
                discount:discount,
                rating:rating,
                quantity:quantity
            },
            payload:Number(price),
            discount:Number(originalPrice)
        })   
    }

    const addToWishlist=()=>{
        cartDispatch({
            type:"ADD_TO_WISHLIST"
        })
    }


    const cartNotify = () => toast.success("Your Product is added to cart!!",{position:"bottom-center"});
    const wishNotify=()=>toast.info("Item is added to the wishlist!!",{position:"top-center"});

  return (
    <div className='productcard'>
        <div className="card shadow-card" key={_id}>
            <h3 className='card-category'>{categoryName}</h3>
            <div className="card-top">
                <img className="card-img" src={src} alt="productCard" />
            </div>
            <div className="card-bottom">
                <div className="card-body">
                    <h1 className="body-title">{title}</h1>
                    <div className="body-text">
                        <p>₹  {price}</p>
                        <p className="text-overline">₹  {originalPrice}</p>
                        <span>({discount}% off)</span>
                        <div className='number-rating-container'>
                            <span>{rating}</span>
                            <i className='fa fa-star'></i>
                        </div>
                    </div>
                </div>
                <div className="card-button">
                    <button className="card-btn" onClick={()=>{cartNotify(); addToCart(); }}>Add To Cart</button>
                    <button className="card-btn" onClick={()=>{wishNotify(); addToWishlist(); }}>Move To Wishlist</button>
                    <ToastContainer position='bottom-center'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard


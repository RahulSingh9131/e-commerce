import React from 'react'
import Header from '../components/Header'
import WishlistCard from '../components/WishlistCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishContext'
import "../css/main.css"

function WishlistPage() {
    const {wishState:{wishBasket}}=useWishlist();
    const {cartDispatch}=useCart();

   

  return (
    <div className='wishlist'>
        <Header/>
        <section className="wishlist-section">
            <div className="wishlist-heading">
                <h1 className="center-text">My Wishlist <small>({wishBasket?.length})</small> items</h1>
            </div>
            <div className="wishlist-contents container flex justify-center flex-wrap">
                {wishBasket.map(({_id,categoryName,src,title,originalPrice,price,discount,rating})=>{
                    return (
                        <WishlistCard _id={_id} categoryName={categoryName} src={src} title={title} originalPrice={originalPrice} price={price} discount={discount} rating={rating} />
                    )
                })}
            </div>
        </section>
        <footer className="bottom-area">
            <div className="container">
                <p>Designed and built with love. </p>
                <small>© Rahul Singh</small>
                <div className="footer-links">
                    <i className="fa fa-github"></i>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default WishlistPage
import React from 'react'
import "../css/main.css";
import {Link} from "react-router-dom";
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishContext';
import { useAuth } from '../context/AuthContext';

function Header() {
    const {cartState} =useCart();
    const {cartBasket}=cartState;
    const {wishState:{wishBasket}}=useWishlist();
    const {logout,authState:{encodedToken}}=useAuth();

  return (
      <header className='header'>
            <div className="navigation-container">
                <div className="left">
                    <h5><Link to="/" className="brand-name">ShoeStore</Link></h5>
                </div>
                <div className="middle">
                    <input type="search" placeholder="search here.." id="search-input"/>
                    <label htmlFor="search-input" className="fas fa-search"></label>
                </div>
                <div className="right">
                    <nav className="nav-links">
                        {encodedToken && (
                            <div className='logout-btn' onClick={()=>logout()}>
                                <small> Logout</small> 
                            </div>
                        )}
                        <Link  to="/cart" className="fa fa-shopping-cart"><strong className='header-badge'>{cartBasket?.length}</strong></Link>
                        <Link to="/wishlist" className="fas fa-heart" ><strong className='header-badge'>{wishBasket?.length}</strong></Link>
                    </nav>
                </div>
            </div>
      </header>
  )
}

export default Header
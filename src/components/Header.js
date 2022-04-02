import React from 'react'
import "../css/main.css";
import {Link} from "react-router-dom";
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishContext';

function Header() {
    const {cartState} =useCart();
    const {cartBasket}=cartState;
    const {wishState:{wishBasket}}=useWishlist();
  return (
      <header className='header'>
            <div class="navigation-container">
                <div class="left">
                    <h5><Link to="/" className="brand-name">ShoeStore</Link></h5>
                </div>
                <div class="middle">
                    <input type="search" placeholder="search here.." id="search-input"/>
                    <label for="search-input" class="fas fa-search"></label>
                </div>
                <div class="right">
                    <nav class="nav-links">
                        <Link to="/logout" className="fas fa-user" ><small> Logout</small></Link>
                        <Link  to="/cart" className="fa fa-shopping-cart"><strong className='header-badge'>{cartBasket?.length}</strong></Link>
                        <Link to="/wishlist" className="fas fa-heart" ><strong className='header-badge'>{wishBasket?.length}</strong></Link>
                    </nav>
                </div>
            </div>
      </header>
  )
}

export default Header
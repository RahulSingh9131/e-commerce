import React from 'react'
import "../css/main.css";
import {Link} from "react-router-dom";

function Header() {
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
                        <Link to="/" className="fas fa-user"><small> user</small></Link>
                        <Link  to="/" className="fa fa-shopping-cart"><strong className='header-badge'>0</strong></Link>
                        <Link to="/" className="fas fa-heart" ><strong className='header-badge'>0</strong></Link>
                    </nav>
                </div>
            </div>
      </header>
  )
}

export default Header
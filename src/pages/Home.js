import React from 'react';
import HeroImage from "../assets/hero-img.png";
import { Link } from 'react-router-dom';
import "../css/main.css";

function Home() {
  return (
    <div className='Home'>
    <main>
        <div className="big-wrapper">
            <header>
                <div className="container">
                    <div className="logo">
                        <h3><Link to="/">ShoeStore</Link></h3>
                    </div>
                    <div className="links">
                        <ul>
                           <li><a href="https://github.com/RahulSingh9131" target="_blank">Github</a></li>
                           <li><a href="https://twitter.com/singhrahul3112" target="_blank">Twitter</a></li>
                           <li><a href="https://www.linkedin.com/in/rahul-singh-06b83917a/" target="_blank">LinkedIn</a></li>
                           <li><Link to="/" className='btn'>LogIn</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <section className="showcase-area">
                <div className="container">
                    <div className="left-side">
                        <div className="big-title">
                            <h1>Exclusive store only for Footwear</h1>
                            <h1>Start exploring now</h1>
                        </div>
                        <p className="text">
                            ShoeStore contains a wide range of footwear products with multiple categories. SignUp to explore the store.
                        </p>
                        <div className="cta">
                            <Link to="/" className='btn'>SignUp</Link>
                        </div>
                    </div>
                    <div className="right-side">
                        <img src={HeroImage} alt="hero-image" className="hero-image"/>
                    </div>
                </div>
            </section>
            <section className="category">
                <div className="container">
                    <h1 className="heading">
                        <span>c</span>
                        <span>a</span>
                        <span>t</span>
                        <span>e</span>
                        <span>g</span>
                        <span>o</span>
                        <span>r</span>
                        <span>i</span>
                        <span>e</span>
                        <span>s</span>
                    </h1>
                    <div className="box-container">
                        <div className="box">
                            <img src="https://images.unsplash.com/photo-1552422554-0d5af0c79fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="category-image"/>
                            <div className="content">
                                <h1>Formal Shoes</h1>
                                <p>Shop from a wide range of formal shoes.</p>
                                <Link to="/" className='btn'>see More</Link>
                            </div>
                        </div>
                        <div className="box">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="category-image"/>
                            <div className="content">
                                <h1>Sports Shoes</h1>
                                <p>Shop from a wide range of sports shoes.</p>
                                <Link to="/" className='btn'>see More</Link>
                            </div>
                        </div>
                        <div className="box">
                            <img src="https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=970&q=80" alt="category-image"/>
                            <div className="content">
                                <h1>Boots</h1>
                                <p>Shop from a wide range of boots.</p>
                                <Link to="/" className='btn'>see More</Link>
                            </div>
                        </div>
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
    </main>
    </div>
  )
}

export default Home
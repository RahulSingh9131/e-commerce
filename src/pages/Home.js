import React from 'react';
import HeroImage from "../assets/hero-img.png";
import { Link } from 'react-router-dom';
import "../css/main.css";
import { categories } from '../backend/db/categories';

function Home() {
  return (
    <div className='Home'>
    <main>
        <div className="big-wrapper">
            <header>
                <div className="container">
                    <div className="logo">
                        <h3 ><Link to="/" className='brand-name'>ShoeStore</Link></h3>
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
                        {categories.map((item)=>{
                            return (<div className='box'>
                                <img src={item.src} alt="category-img"/>
                                <div className='content'>
                                    <h1>{item.categoryName}</h1>
                                    <p>{item.description}</p>
                                    <Link to="/" className='btn' >See More</Link>
                                </div>
                            </div>)
                        })}
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
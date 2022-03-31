import React from 'react'
import CartCard from '../components/CartCard';
import Header from '../components/Header'
import SubTotalCard from '../components/SubTotalCard';
import { useCart } from '../context/CartContext';
import "../css/main.css"

function CartPage() {
 
    const {cartState:{cartBasket},cartDispatch}=useCart();
  

  return (
    <div className='cartpage'>
        <Header/>
        <section className="cart-section">
            <div className="section-heading center-text">
                <h1>My Cart <small>({cartBasket?.length} items)</small> </h1>
            </div>
            <div className="section-contents container ">
                <div className='flex flex-wrap justify-center'>
                    {cartBasket.map(({_id,categoryName,src,price,originalPrice,discount,rating,title,count})=>{
                        return (
                            <CartCard _id={_id} categoryName={categoryName} src={src} price={price} originalPrice={originalPrice} discount={discount} rating={rating} title={title} count={count} />
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
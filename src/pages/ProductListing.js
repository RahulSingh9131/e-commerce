import Header from '../components/Header';
import {products} from "../backend/db/products";
import { useFilter } from '../context/FilterContext';

function ProductListing() {

    const {state,dispatch}=useFilter();

    function getSortedData(productlist,state){
        if(state.sortBy==="HIGH_TO_LOW"){
            return productlist.sort((a,b)=>b["price"]-a["price"]);
        }else if(state.sortBy==="LOW_TO_HIGH"){
            return productlist.sort((a,b)=>a["price"]-b["price"]);
        }else {
            return productlist;
        }
    }

    function getFilterData(productlist,state){
        return productlist
        .filter(({isFormal})=>(state.isFormal?isFormal:true))
        .filter(({isSports})=>(state.isSports?isSports:true))
        .filter(({isBoot})=>(state.isBoot?isBoot:true))
        .filter(({rating})=>Number(rating) <= state.rating);
    }

    const sortedData=getSortedData(products,state);
    const filteredData=getFilterData(sortedData,state);

  return (
    <div className='productListing'>
        <Header/>
        <section className="product-section">
            <div className="flex">
                <div className="left-content">
                    <div className="left-subcontent flex justify-space align-center">
                        <h2>Filters</h2>
                        <button className="product-btn" onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                    <div className="left-subcontent flex flex-col">
                        <h3>Price</h3>
                        <div className="input-box">
                            <input type="radio" name="sort" id="low" checked={state.sortBy==="LOW_TO_HIGH"?true:false} onChange={()=>dispatch({type:"SORT",payload:"LOW_TO_HIGH"})}/>
                            <label for="low">Low to High</label>
                        </div>
                        <div className="input-box">
                            <input type="radio" name="sort" id="high" checked={state.sortBy==="HIGH_TO_LOW"?true:false} onChange={()=>dispatch({type:"SORT",payload:"HIGH_TO_LOW"})}/>
                            <label for="high">High to Low</label>
                        </div>
                    </div>
                    <div className="left-subcontent flex flex-col">
                        <h3>Category</h3>
                        <div className="input-box">
                            <input type="checkbox" name="productCategory" id="formal" checked={state.isFormal} onChange={()=>dispatch({type:"FORMAL_SHOES"})} />
                            <label for="formal">Formal wear</label>
                        </div>
                        <div className="input-box">
                            <input type="checkbox" name="productCategory" id="sports" checked={state.isSports} onChange={()=>dispatch({type:"SPORTS_SHOES"})} />
                            <label for="sports">Sports wear</label>
                        </div>
                        <div className="input-box">
                            <input type="checkbox" name="productCategory" id="boots" checked={state.isBoot} onChange={()=>dispatch({type:"BOOTS"})} />
                            <label for="boots">Boots</label>
                        </div>
                    </div>
                    <div className="left-subcontent">
                        <h3>Rating 0 -{state.rating}</h3>
                        <input type="range" name="rating" id="rating" min="1" max="5" steps="1" value={state.rating} onChange={(e)=>dispatch({type:"RATING",payload:e.target.value})}/>
                    </div>
                </div>
                <div className="right-content">
                    <div className="right-content-heading">
                        <h3>Showing all products <small> (total {filteredData.length} products)</small></h3>
                    </div>
                    <div className='rigth-content-cards flex flex-wrap'>
                        {filteredData.map((item)=>{
                            return (
                            <div className="card shadow-card" key={item._id}>
                                <h3 className='card-category'>{item.categoryName}</h3>
                                <div className="card-top">
                                  <img className="card-img" src={item.src} alt="productCard" />
                                </div>
                                <div className="card-bottom">
                                    <div className="card-body">
                                        <h1 className="body-title">{item.title}</h1>
                                        <div className="body-text">
                                            <p>₹  {item.price}</p>
                                            <p className="text-overline">₹  {item.originalPrice}</p>
                                            <span>({item.discount}% off)</span>
                                            <div className='number-rating-container'>
                                                <span>{item.rating}</span>
                                                <i className='fa fa-star'></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-button">
                                        <button className="card-btn">Add To Cart</button>
                                        <button className="card-btn">Move To Wishlist</button>
                                    </div>
                                </div>
                            </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
        <footer class="bottom-area">
            <div class="container">
                <p>Designed and built with love. </p>
                <small>© Rahul Singh</small>
            </div>
        </footer>
    </div>
  )
}

export default ProductListing
import "./App.css";
import MockAPI from "./MockAPI";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LogoutPage from "./pages/LogoutPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock-api" element={<MockAPI/>}/> 
        <Route path="/products" element={<ProductListing/>}/>  
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/wishlist" element={<WishlistPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

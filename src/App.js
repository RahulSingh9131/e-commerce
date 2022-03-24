import "./App.css";
import MockAPI from "./MockAPI";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock-api" element={<MockAPI/>}/> 
        <Route path="/products" element={<ProductListing/>}/>  
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

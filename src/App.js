import "./App.css";
import MockAPI from "./MockAPI";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock-api" element={<MockAPI/>}/>   
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

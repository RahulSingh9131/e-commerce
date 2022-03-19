import "./App.css";
import MockAPI from "./MockAPI";
import {Routes,Route,Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock-api" element={<MockAPI/>}/>
      </Routes>
    </div>
  );
}

export default App;

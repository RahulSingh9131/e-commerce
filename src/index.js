import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <Router>
          <App />
        </Router>
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

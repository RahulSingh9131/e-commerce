import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { WishProvider } from "./context/WishContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <WishProvider>
          <CartProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </CartProvider>
        </WishProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

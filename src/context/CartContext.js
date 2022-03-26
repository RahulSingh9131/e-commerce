import { createContext,useContext,useReducer } from "react";
import { cartReducerFunc } from "../reducer/cartReducerFunc";

const CartContext=createContext();

const CartProvider=({children})=>{

    const [cartState,cartDispatch]=useReducer(cartReducerFunc,{cartItems:0,cartTotalPrice:0,wishItems:0});

    return <CartContext.Provider value={{cartState,cartDispatch}}>
        {children}
    </CartContext.Provider>
}

const useCart=()=>useContext(CartContext);

export {useCart,CartProvider};
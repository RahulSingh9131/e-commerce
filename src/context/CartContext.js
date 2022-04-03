import { createContext,useContext,useReducer } from "react";
import { cartReducerFunc } from "../reducer/cartReducerFunc";

const CartContext=createContext();

const CartProvider=({children})=>{

    const [cartState,cartDispatch]=useReducer(cartReducerFunc,{cartBasket:[]});

    return <CartContext.Provider value={{cartState,cartDispatch}}>
        {children}
    </CartContext.Provider>
}

const useCart=()=>useContext(CartContext);

export {useCart,CartProvider};
import { createContext,useContext,useReducer } from "react";

const CartContext=createContext();

const CartProvider=({children})=>{

    const cartReducerFunc=(cartState,action)=>{
        switch(action.type){
            case "ADD_TO_CART":
                return {...cartState,cartItems:cartState.cartItems+1,cartTotalPrice:cartState.cartTotalPrice+action.payload}; 
            case "ADD_TO_WISHLIST":
                return {...cartState,wishItems:cartState.wishItems+1}       
            default :
            return state;
        }
    }

    const [cartState,cartDispatch]=useReducer(cartReducerFunc,{cartItems:0,cartTotalPrice:0,wishItems:0});

    return <CartContext.Provider value={{cartState,cartDispatch}}>
        {children}
    </CartContext.Provider>
}

const useCart=()=>useContext(CartContext);

export {useCart,CartProvider};